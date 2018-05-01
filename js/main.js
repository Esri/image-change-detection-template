/*global define,document */
/*jslint sloppy:true,nomen:true */
/*
 | Copyright 2018 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/_base/kernel",
    "dojo/on",
    "dojo/query", "dijit/focus",
    "dojo/Deferred",
    "esri/dijit/Scalebar",
    "esri/dijit/Search", "esri/tasks/locator", "application/SearchSources",
    "dojo/dom", "esri/layers/ArcGISImageServiceLayer",
    "dojo/dom-construct",
    "dojo/dom-style", "dojo/html",
    "dojo/dom-class",
    "dijit/Dialog", "dojo/parser",
    "dijit/registry",
    "dojo/text!application/templates/Export.html", "dojo/text!application/templates/Bookmark.html",
    "dojo/text!application/templates/ImageMask.html",
    "dijit/Tooltip",
    "esri/arcgis/utils",
    "application/MapUrlParams",
    "application/Bookmark", "application/Editor", "application/Basemap", "application/OperationalLayers", "application/Export", "application/Measurement", "application/ImageDate", "application/ImageMask",
    "dojo/domReady!"
], function (
        declare, lang, kernel,
        on, query, focus,
        Deferred, Scalebar, Search, Locator, SearchSources,
        dom, ArcGISImageServiceLayer, domConstruct, domStyle, html, domClass, Dialog, parser,
        registry, exportHtml, bookmarkHtml, imageMaskHtml, Tooltip,
        arcgisUtils,
        MapUrlParams, Bookmark, Editor, Basemap, OperationalLayers, Export, Measurement, ImageDate, ImageMask
        ) {
    return declare(null, {
        config: {},
        containers: [],
        regExp: /\$([^}]+)\}/g,
        startup: function (config) {
            // Set lang attribute to current locale
            document.documentElement.lang = kernel.locale;
            var promise;
            // config will contain application and user defined info for the template such as i18n strings, the web map id
            // and application id
            // any url parameters and any application specific configuration information.

            if (config) {
                this.config = config;
                if (this.config.sharedThemeConfig && this.config.sharedThemeConfig.attributes && this.config.sharedThemeConfig.attributes.theme) {
                    var sharedTheme = this.config.sharedThemeConfig.attributes;
                    this.config.color = sharedTheme.theme.text.color;
                    this.config.background = sharedTheme.theme.body.bg;
                }
                document.getElementById("titleContainer").style.backgroundColor = this.config.background;
                document.getElementById("dockContainer").style.backgroundColor = this.config.background;
                document.getElementById("titleText").style.color = this.config.color;
                document.getElementById("primaryDate").style.color = this.config.color;
                
                this.createCSSRules();
                if(this.config.imageMaskTitle)
                  this.config.i18n.imageMask.title = this.config.imageMaskTitle;  
                var toolContainers = document.getElementsByClassName("toolContainers");
                for (var a = 0; a < toolContainers.length; a++) {
                    toolContainers[a].style.borderBottomColor = this.config.background;
                }
                // Create and add custom style sheet
                if (this.config.customstyle) {
                    var style = document.createElement("style");
                    style.appendChild(document.createTextNode(this.config.customstyle));
                    document.head.appendChild(style);
                }
                dom.byId("titleText").innerHTML = this.config.title ? this.config.title : "Image Mask";
                new Tooltip({
                    connectId: ["titleText"],
                    label: this.config.description,
                    position: ['below']
                });

                if (this.config.customstyle) {
                    var style = document.createElement("style");
                    style.appendChild(document.createTextNode(this.config.customstyle));
                    document.head.appendChild(style);
                }

                //supply either the webmap id or, if available, the item info
                var itemInfo = this.config.itemInfo || this.config.webmap;
                // Check for center, extent, level and marker url parameters.
                var mapParams = new MapUrlParams({
                    center: this.config.center || null,
                    extent: this.config.extent || null,
                    level: this.config.level || null,
                    marker: this.config.marker || null,
                    mapSpatialReference: itemInfo.itemData.spatialReference,
                    defaultMarkerSymbol: this.config.markerSymbol,
                    defaultMarkerSymbolWidth: this.config.markerSymbolWidth,
                    defaultMarkerSymbolHeight: this.config.markerSymbolHeight,
                    geometryService: this.config.helperServices.geometry.url
                });

                mapParams.processUrlParams().then(lang.hitch(this, function (urlParams) {
                    promise = this._createWebMap(itemInfo, urlParams);
                }), lang.hitch(this, function (error) {
                    this.reportError(error);
                }));



            } else {
                var error = new Error("Main:: Config is not defined");
                this.reportError(error);
                var def = new Deferred();
                def.reject(error);
                promise = def.promise;
            }
            return promise;
        },
        createCSSRules: function () {
            var style = document.createElement('style');
            style.type = "text/css";
            document.getElementsByTagName('head')[0].appendChild(style);
            var cssRules = {".titleBar": "width: 100%;height: 39px;background-color:" + this.config.widgetTitleColor + ";color:white;font-size: 1.3em;font-weight: bolder;",
                ".basemapIcon:hover": "background-color: " + this.config.toolsIconColor + ";",
                ".basemapSelected": "background-color: " + this.config.toolsIconColor + ";",
                ".toolContainers:hover": "background-color: " + this.config.toolsIconColor + ";",
                ".selected-widget": "background-color: " + this.config.toolsIconColor + ";",
                ".claro .dijitDialogTitleBar": "background: " + this.config.widgetTitleColor + ";border: 0 none;border-bottom: 0 none;padding: 7px 10px;text-align: center;line-height: 16px;-webkit-box-sizing: content-box;box-sizing: content-box;font-weight: bolder;"
            };
            for (var a in cssRules) {
                style.sheet.insertRule(a + "{" + cssRules[a] + "}", style.sheet.cssRules.length);
            }


        },
        reportError: function (error) {
            // remove loading class from body
            domClass.remove(document.body, "app-loading");
            domClass.add(document.body, "app-error");
            // an error occurred - notify the user. In this example we pull the string from the
            // resource.js file located in the nls folder because we've set the application up
            // for localization. If you don't need to support multiple languages you can hardcode the
            // strings here and comment out the call in index.html to get the localization strings.
            // set message
            var node = dom.byId("loading_message");
            if (node) {
                if (this.config && this.config.i18n) {
                    node.innerHTML = this.config.i18n.map.error + ": " + error.message;
                } else {
                    node.innerHTML = "Unable to create map: " + error.message;
                }
            }
            return error;
        },
        // create a map based on the input web map id
        _createWebMap: function (itemInfo, params) {
            // set extent from config/url

            //enable/disable the slider
            params.mapOptions.slider = this.config.mapZoom;
            if (window.document.dir === "ltr")
                params.mapOptions.sliderPosition = "top-right";
            else
                params.mapOptions.sliderPosition = "top-left";
            domClass.add(document.body, "slider-" + this.config.mapZoom);

            // create webmap from item
            return arcgisUtils.createMap(itemInfo, "mapDiv", {
                mapOptions: params.mapOptions,
                usePopupManager: true,
                layerMixins: this.config.layerMixins || [],
                editable: true,
                bingMapsKey: this.config.orgInfo.bingKey || ""
            }).then(lang.hitch(this, function (response) {
                this.map = response.map;
                document.title = this.config.title || response.itemInfo.item.title;

                this.config.response = response;

                // remove loading class from body
                domClass.remove(document.body, "app-loading");

                domConstruct.place('<img id="loadingMap" style="position: absolute;top:0;bottom: 0;left: 0;right: 0;margin:auto;z-index:100;display:none;" src="images/loading.gif">', this.map.container);
                this.map.on("update-start", lang.hitch(this, this.showLoading));
                this.map.on("update-end", lang.hitch(this, this.hideLoading));
                this.findAndReplaceCacheImageService();
                window.addEventListener("resize", lang.hitch(this, this.resizeTemplate));

                this.dockToolsActive = 0;
                if (this.config.basemapFlag) {
                    domStyle.set("basemapContainer", "display", "block");
                    this.setupBasemap();
                } else
                    domStyle.set("basemapContainer", "display", "none");
                var layers = this.config.itemInfo.itemData.operationalLayers;
                var layersFlag = false;
                for (var a = layers.length - 1; a >= 0; a--) {
                    var title = layers[a].title || layers[a].layerObject.name || layers[a].id;
                    if ((layers[a].layerType && layers[a].layerType !== "ArcGISTiledImageServiceLayer") && (title && (title.charAt(title.length - 1)) !== "_") && (title && (title.substr(title.length - 2)) !== "__") && ((layers[a].layerObject && layers[a].layerObject.serviceDataType && layers[a].layerObject.serviceDataType.substr(0, 16) !== "esriImageService") || (layers[a].layerType && layers[a].layerType !== "ArcGISImageServiceLayer"))) {
                        layersFlag = true;
                        break;
                    }
                }
                
                if (this.config.operationalLayersFlag && layersFlag) {
                    this.dockToolsActive++;
                    domStyle.set("dockContainer", "display", "block");
                    this.setupOperationalLayers();
                } else
                    domStyle.set("operationalLayersContainer", "display", "none");
                if(this.config.changeDetectionFlag || this.config.changeDetectionFlag === false){
                    this.config.imageMaskFlag = this.config.changeDetectionFlag;
                    this.config.maskToolOptions = "change";
                }
                if (this.config.imageMaskFlag) {
                    domStyle.set("dockContainer", "display", "block");
                    this.dockToolsActive++;
                    this.setupImageMask();
                } else
                    domStyle.set("imageMaskContainer", "display", "none");


                if (this.config.exportFlag) {
                    this.dockToolsActive++;
                    domStyle.set("dockContainer", "display", "block");
                    this.setupExport();
                } else
                    domStyle.set("exportContainer", "display", "none");
                if (this.config.imageDateFlag)
                    this.setupImageDate();
                if (this.config.measurementFlag) {
                    this.dockToolsActive++;
                    domStyle.set("dockContainer", "display", "block");
                    this.setupImageMeasurement();
                } else
                    domStyle.set("measurementContainer", "display", "none");
                var featureLayers = JSON.parse(this.config.featureLayers);
                if (this.config.editFlag && featureLayers && featureLayers.length > 0) {
                    this.dockToolsActive++;
                    domStyle.set("dockContainer", "display", "block");
                    this.setupEditor();
                } else
                    domStyle.set("editorContainer", "display", "none");
                if (this.config.bookmarkFlag && this.config.itemInfo.itemData.bookmarks)
                {
                    this.dockToolsActive++;
                    domStyle.set("dockContainer", "display", "block");
                    this.setupBookmark();
                } else
                    domStyle.set("bookmarkContainer", "display", "none");
                if (this.config.aboutFlag)
                {
                    this.dockToolsActive++;
                    domStyle.set("dockContainer", "display", "block");
                    this.setupAbout();
                } else
                    domStyle.set("aboutContainer", "display", "none");

                this.setVisibilityEventOnImageryLayer();
                this._setupAppTools();
                this._updateTheme();
                domClass.add("toolsContentContainer", "toolsContentContainerClosed_" + window.document.dir);
                registry.byId("toolsContentContainer").show();
                domConstruct.destroy("toolsContentContainer_underlay");
                domStyle.set("toolsContentContainer", "z-index", "1");
                domStyle.set("toolsContentContainer", "left", "");
                this.resizeTemplate();
                this.setCloseEvent();
                dojo.connect(registry.byId("toolsContentContainer"), "hide", lang.hitch(this, function (event) {
                    var top = document.getElementById("toolsContentContainer").style.top;
                    registry.byId("toolsContentContainer").show();
                    domConstruct.destroy("toolsContentContainer_underlay");
                    domStyle.set("toolsContentContainer", "top", top);
                    domStyle.set("toolsContentContainer", "left", "");
                    domStyle.set("toolsContentContainer", "z-index", "1");
                    domStyle.set("toolsContentContainer", "opacity", "");
                    var toolNodesActive = document.getElementsByClassName("selected-widget");
                    if (toolNodesActive.length > 0) {
                        var id = toolNodesActive[0].id;
                        toolNodesActive[0].click();
                        setTimeout(function () {
                            focus.focus(dom.byId(id));
                        }, 1500);
                    }
                }));
                setTimeout(lang.hitch(this, function () {
                    if (this.config.toolOnByDefault === "about" && this.config.aboutFlag)
                        dom.byId("aboutContainer").click();
                    else if (this.config.toolOnByDefault === "change" && this.config.imageMaskFlag)
                        dom.byId("imageMaskContainer").click();
                }), 1000);
                return response;
            }), this.reportError);
        },
        findAndReplaceCacheImageService: function () {
            var layerIds = this.map.layerIds;
            var layers = this.config.itemInfo.itemData.operationalLayers;
            for (var a in layers) {
                if (layers[a].layerType && layers[a].layerType === "ArcGISTiledImageServiceLayer") {
                    for (var b = layerIds.length - 1; b >= 0; b--) {
                        if (layerIds[b] === layers[a].id) {
                            var layer = this.map.getLayer(layers[a].id);
                            this.map.removeLayer(layer);
                            layer = new ArcGISImageServiceLayer(layers[a].url, {
                                id: layers[a].id,
                                visibility: layers[a].visibility
                            });
                            layer.title = layers[a].title;
                            this.map.addLayer(layer, b);
                            break;
                        }
                    }
                }
            }
        },
        setCloseEvent: function () {
            var closeNodes = query(".closeContainerButton");

            for (var a = 0; a < closeNodes.length; a++) {

                closeNodes[a].addEventListener("click", lang.hitch(this, function (element) {
                    if (element.target.nodeName === "BUTTON")
                        var node = element.target.previousElementSibling.parentNode.parentNode.id.split("Node")[0];
                    else
                        var node = element.target.parentNode.previousElementSibling.parentNode.parentNode.id.split("Node")[0];
                    registry.byId("toolsContentContainer").hide(node);
                }));
                if (window.document.dir === "rtl") {
                    closeNodes[a].style.float = "left";

                }
            }
        },
        resizeTemplate: function () {
            if (window.innerWidth > 1200 && window.innerHeight > ((this.dockToolsActive * 80) + 39)) {
                this.resizeUIElements("14px", "39px", "45px", "80px", "toolsContentContainerClicked_");
                this.resizeDockContainer("80px", "30px", "25px", "39px", "16px", "5px 9px", "15px", "5px", "-6px", "14px", "3px 2px", "100px", "67px");
            } else if (window.innerWidth > 1000 && window.innerHeight > ((this.dockToolsActive * 60) + 35)) {
                this.resizeUIElements("12px", "35px", "40px", "60px", "toolsContentContainerClicked2_");
                this.resizeDockContainer("60px", "26px", "17px", "35px", "14px", "4px 7px", "14px", "4px", "-6px", "14px", "3px 2px", "80px", "57px");
            } else if (window.innerWidth > 800 && window.innerHeight > ((this.dockToolsActive * 40) + 31)) {
                this.resizeUIElements("10px", "31px", "36px", "40px", "toolsContentContainerClicked3_");
                this.resizeDockContainer("40px", "20px", "10px", "31px", "13px", "3px 5px", "13px", "3px", "-7px", "13px", "2px 2px", "80px", "52px");
            } else if (window.innerWidth > 600 && window.innerHeight > ((this.dockToolsActive * 30) + 27)) {
                this.resizeUIElements("8px", "27px", "32px", "30px", "toolsContentContainerClicked4_");
                this.resizeDockContainer("30px", "16px", "7px", "27px", "12px", "2px 4px", "11px", "2px", "-8px", "12px", "1px 2px", "70px", "52px");
            } else if (window.innerWidth > 500 && window.innerHeight > ((this.dockToolsActive * 25) + 22)) {
                this.resizeUIElements("6px", "22px", "27px", "25px", "toolsContentContainerClicked5_");
                this.resizeDockContainer("25px", "13px", "6px", "22px", "11px", "1px 2px", "9px", "0px", "-8px", "11px", "0px 1px", "60px", "47px");
            } else {
                this.resizeUIElements("5px", "21px", "26px", "20px", "toolsContentContainerClicked6_");
                this.resizeDockContainer("20px", "10px", "5px", "21px", "10px", "1px 1px", "8px", "0px", "-8px", "10px", "0px 1px", "50px", "42px");
            }
        },
        resizeUIElements: function (body, top, content, left, className) {
            document.getElementsByTagName("BODY")[0].style.fontSize = body;
            document.getElementById("dockContainer").style.top = top;
            document.getElementById("mapDiv").style.marginTop = top;
            document.getElementById("mapDiv").style.height = "calc(100% - " + top + ")";
            domStyle.set("toolsContentContainer", "top", content);

            if (domStyle.get("dockContainer", "display") === "block") {
                if (window.document.dir === "ltr")
                    document.getElementById("mapDiv").style.marginLeft = left;
                else
                    document.getElementById("mapDiv").style.marginRight = left;
                document.getElementById("mapDiv").style.width = "calc(100% - " + left + ")";

            }
            if (this.currentPanelClass) {
                domClass.remove("toolsContentContainer", this.currentPanelClass);
                domClass.add("toolsContentContainer", className + window.document.dir);
            }
            this.currentPanelClass = className + window.document.dir;
        },
        resizeDockContainer: function (widthHeightValue, iconWH, iconMargin, titleHeight, checkBoxWH, buttonPadding, iconHeight, sliderHeight, sliderTop, sliderBtnWH, textBoxPadding, basemapImageW, basemapImageH) {
            query(".dijitButtonContents").style({
                "padding": buttonPadding
            });
            query(".dijitCheckBox").style({
                width: checkBoxWH,
                height: checkBoxWH
            });
            query(".iconHeight").style({
                height: iconHeight
            });
            query(".dijitSliderBumperH").style({
                height: sliderHeight
            });
            query(".dijitSliderImageHandleH").style({
                top: sliderTop
            });
            query(".dijitSliderBarH").style({
                height: sliderHeight
            });
            query(".dijitSliderButtonInner").style({
                lineHeight: sliderBtnWH
            });
            query(".dijitSliderIncrementIconH").style({
                width: sliderBtnWH,
                height: sliderBtnWH,
                lineHeight: sliderBtnWH

            });
            query(".esriBasemapGalleryThumbnail").style({
                width: basemapImageW,
                height: basemapImageH

            });

            query(".dijitSliderDecrementIconH").style({
                width: sliderBtnWH,
                height: sliderBtnWH,
                lineHeight: sliderBtnWH
            });
            var toolContainers = document.getElementsByClassName("toolContainers");
            var iconNodes = document.getElementsByClassName("iconNode");
            var titleBar = document.getElementsByClassName("titleBar");
            var spanTitleNode = document.getElementsByClassName("titleBarTextSpan");
            for (var a = 0; a < toolContainers.length; a++) {
                toolContainers[a].style.width = widthHeightValue;
                toolContainers[a].style.height = widthHeightValue;
                if (iconNodes[a]) {
                    iconNodes[a].style.width = iconWH;
                    iconNodes[a].style.height = iconWH;

                }
                if (titleBar[a])
                    titleBar[a].style.height = titleHeight;
                if (spanTitleNode[a]) {
                    spanTitleNode[a].style.lineHeight = titleHeight;
                }
            }

        },
        setVisibilityEventOnImageryLayer: function () {
            this.map.on("layer-add", lang.hitch(this, function (response) {
                response.layer.on("visibility-change", lang.hitch(this, function (value) {
                    if (!value.visible) {
                        this.map.onUpdateEnd();
                    }
                }));
            }));
            var layers = this.config.itemInfo.itemData.operationalLayers, layer;
            for (var a = layers.length - 1; a >= 0; a--) {
                var title = layers[a].title || layers[a].layerObject.name || layers[a].id;
                if ((title && (title.charAt(title.length - 1)) === "_") || (layers[a].layerObject && layers[a].layerObject.serviceDataType && layers[a].layerObject.serviceDataType.substr(0, 16) === "esriImageService") || (layers[a].layerType && layers[a].layerType === "ArcGISImageServiceLayer")) {
                    layer = this.map.getLayer(layers[a].id);
                    if (layer) {
                        layer.on("visibility-change", lang.hitch(this, function (value) {
                            if (!value.visible) {
                                this.map.onUpdateEnd();
                            }

                        }));
                    }
                }
            }
        },
        _setupAppTools: function () {
            if (this.config.scalebarFlag) {
                this.scalebar = new Scalebar({
                    map: this.map,
                    scalebarStyle: this.config.scalebarStyle,
                    scalebarUnit: this.config.scalebarUnit
                }, this.map.root);
                domClass.add(this.scalebar.domNode, "scalebar_" + this.config.scalebarPosition);
            }

            if (this.config.search) {

                if (!Search || !Locator) {
                    return;
                }

                var searchOptions = {
                    map: this.map,
                    useMapExtent: this.config.searchExtent,
                    itemData: this.config.response.itemInfo.itemData
                };

                if (this.config.searchConfig) {
                    searchOptions.applicationConfiguredSources = this.config.searchConfig.sources || [];
                } else {
                    var configuredSearchLayers = (this.config.searchLayers instanceof Array) ? this.config.searchLayers : JSON.parse(this.config.searchLayers);
                    searchOptions.configuredSearchLayers = configuredSearchLayers;
                    searchOptions.geocoders = this.config.locationSearch ? this.config.helperServices.geocode : [];
                }
                var searchSources = new SearchSources(searchOptions);
                var createdOptions = searchSources.createOptions();
                createdOptions.enableButtonMode = true;
                createdOptions.expanded = false;

                if (this.config.searchConfig && this.config.searchConfig.activeSourceIndex) {
                    createdOptions.activeSourceIndex = this.config.searchConfig.activeSourceIndex;
                }

                var search = new Search(createdOptions, domConstruct.create("div", {
                    id: "search"
                }, "mapDiv_root"));
                search.on("select-result", lang.hitch(this, function () {
                    on.once(this.map.infoWindow, "hide", lang.hitch(this, function () {
                        search.clearGraphics();

                        if (this.editorFunction && dom.byId("featureEditor")) {
                            this.editorFunction._destroyEditor();
                            this.editorFunction.createEditor();
                        }
                    }));
                }));
                this._updateTheme();

                search.startup();
                if (window.document.dir === "rtl") {
                    search.domNode.style.left = "20px";
                    search.domNode.style.right = "auto";
                }
                if (query(".searchBtn.searchToggle").length > 0)
                    query(".searchBtn.searchToggle")[0].tabIndex = -1;
                if (query(".arcgisSearch .searchGroup .searchInput").length > 0)
                    query(".arcgisSearch .searchGroup .searchInput")[0].tabIndex = -1;


            } else {
                domClass.add(document.body, "nosearch");
            }
        },
        setupBasemap: function () {
            var basemapDialog = new Dialog({
                title: this.config.i18n.basemap.title,
                content: "<div id='basemapGalleryDiv' style='overflow:auto;height:95%;'></div>",
                style: "background-color:white;width:300px;height:300px;",
                id: "basemapDialog",
                draggable: false
            });
            basemapDialog.closeButtonNode.tabIndex = 0;
            new Tooltip({
                connectId: ["basemapContainer"],
                label: this.config.i18n.basemap.title,
                position: ['before']
            });
            dojo.connect(basemapDialog, "hide", lang.hitch(this, function () {
                domClass.remove("basemapIconNode", "basemapSelected");

            }));
            document.getElementById("basemapIconNode").children[0].alt = this.config.i18n.basemap.title;
            if (window.document.dir === "rtl") {
                document.getElementById("basemapContainer").style.left = "20px";
                document.getElementById("basemapContainer").style.right = "auto";
            }
            this.basemapFunction = new Basemap({map: this.map});
            this.basemapFunction.initBasemaps();
            on(dom.byId("basemapContainer"), "click, keyup", lang.hitch(this, function (event) {
                if (event.type === "click" || event.which === 13 || event.which === 32) {
                    if (domClass.contains("basemapIconNode", "basemapSelected")) {
                        domClass.remove("basemapIconNode", "basemapSelected");
                        if (registry.byId("basemapDialog").open)
                            registry.byId("basemapDialog").hide();
                    } else {
                        domClass.add("basemapIconNode", "basemapSelected");
                        registry.byId("basemapDialog").show();
                        domConstruct.destroy("basemapDialog_underlay");
                        if (window.document.dir === "ltr") {
                            domStyle.set("basemapDialog", "left", "auto");
                            domStyle.set("basemapDialog", "right", "20px");
                        } else
                        {
                            domStyle.set("basemapDialog", "left", "20px");
                            domStyle.set("basemapDialog", "right", "auto");
                        }
                        domStyle.set("basemapDialog", "top", "220px");
                    }
                }
            }));
        },
        setupImageDate: function () {

            var layers = this.config.itemInfo.itemData.operationalLayers;
            var layer = [];
            if (this.config.imageDateLayer) {
                this.config.imageDateLayer = JSON.parse(this.config.imageDateLayer);
            
                for (var a = 0; a < layers.length; a++) {
                    for (var b = 0; b < this.config.imageDateLayer.length; b++) {
                        if (this.config.imageDateLayer[b].id === layers[a].id) {
                            if(this.config.imageDateLayer[b].fields.length > 0){
                                var field = this.config.imageDateLayer[b].fields[0];
                            }else {
                                var field = this.findField(layers[a].layerObject.fields, "esriFieldTypeDate", new RegExp(/acq[a-z]*[_]?Date/i));
                                if(!field){
                                    for(var v in layers[a].layerObject.fields){
                                        if(layers[a].layerObject.fields[v].type === "esriFieldTypeDate"){
                                            field = layers[a].layerObject.fields[v].name;
                                            break;
                                        }
                                    }
                                    
                                }
                            }
                            if(field){
                            var tempLayer = {
                                dateField: field,
                                title: layers[a].title || layers[a].layerObject.name || layers[a].id
                            };
                            layer[layers[a].id] = tempLayer;
                            }
                            break;
                        
                        }
                    }
                }
            }

            this.imageDate = new ImageDate({map: this.map, layers: layer, prefix: this.config.imageDateLabel, i18n: this.config.i18n.imageDate});
            this.imageDate.postCreate();
            this.imageDate.onOpen();

        },
        setupOperationalLayers: function () {
            var html = '<div class="titleBar"><span class="titleBarTextSpan">' + this.config.i18n.operationalLayers.title + '</span><button class="closeContainerButton"><img src="images/cancel.png" alt="X"/></button></div><br /><div style="margin: 5px;overflow: auto;"><div id="operationalLayerList"></div><br /></div>';
            this.setupToolContent("operationalLayersContainer", 2, html, this.config.i18n.operationalLayers.title, "operationalLayersNode", null);
            var layers = this.config.itemInfo.itemData.operationalLayers;
            var layersList = [];
            for (var a = layers.length - 1; a >= 0; a--) {
                var title = layers[a].title || layers[a].layerObject.name || layers[a].id;
                if ((layers[a].layerType && layers[a].layerType !== "ArcGISTiledImageServiceLayer") && (title && (title.charAt(title.length - 1)) !== "_") && (title && (title.substr(title.length - 2)) !== "__") && ((layers[a].layerObject && layers[a].layerObject.serviceDataType && layers[a].layerObject.serviceDataType.substr(0, 16) !== "esriImageService") || (layers[a].layerType && layers[a].layerType !== "ArcGISImageServiceLayer"))) {
                    layersList.push({
                        layer: layers[a].layerObject,
                        title: layers[a].title,
                        visibility: layers[a].visibility
                    });
                }
            }
            this.operationalLayersFunction = new OperationalLayers({map: this.map, layers: layersList, i18n: this.config.i18n.operationalLayers});
            this.addClickEvent("operationalLayersContainer", this.operationalLayersFunction, "operationalLayersNode");
        },
        closeOtherWidgets: function () {
            if (this.openedWidget) {
                dom.byId(this.openedWidget).click();
                domStyle.set(this.openedWidget, "display", "none");
                domClass.remove(this.openedWidget.split("Node")[0] + "Container", "selected-widget");
                if (this.openedWidget !== "aboutNode")
                    this[this.openedWidget.split("Node")[0] + "Function"].onClose();
                this.openedWidget = "";
            }
        },
        setupEditor: function () {
            var html = "<div class='titleBar'><span class='titleBarTextSpan'>" + this.config.i18n.editor.title + "</span><button class='closeContainerButton'><img src='images/cancel.png' alt='X'/></button></div><br/><div style='margin:5px;overflow: auto;'>" + this.config.i18n.editor.text + "<div id='templateDiv' style='margin:5px;'></div><div id='editorDiv'></div><div id='errorEditor' style='color: #ee0000;'></div><br /></div>";
            this.setupToolContent("editorContainer", 3, html, this.config.i18n.editor.title, "editorNode", null);
            var layer = [], heightField;

            if (this.config.featureLayers) {
                var featureLayers = JSON.parse(this.config.featureLayers);
                if (this.config.featureLayersHeightField)
                    var featureLayersHeightField = JSON.parse(this.config.featureLayersHeightField);
                for (var a in featureLayers) {
                    for (var b in featureLayersHeightField) {
                        if (featureLayersHeightField[b].id === featureLayers[a].id && featureLayersHeightField[b].fields.length > 0) {
                            heightField = featureLayersHeightField[b].fields[0];
                            break;
                        } else
                            heightField = null;
                    }
                    layer.push({
                        layerObject: this.map.getLayer(featureLayers[a].id),
                        heightField: heightField,
                        dateField: featureLayers[a].fields.length > 0 ? featureLayers[a].fields[0] : null
                    });

                }
            }
            this.editorFunction = new Editor({map: this.map, itemInfo: (layer.length > 0 ? layer : null), i18n: this.config.i18n.editor});
            this.addClickEvent("editorContainer", this.editorFunction, "editorNode");
        },
        setupImageMeasurement: function () {
            var html = "<div class='titleBar'><span class='titleBarTextSpan'>" + this.config.i18n.measurement.title + "</span><button class='closeContainerButton'><img src='images/cancel.png' alt='X'/></button></div><br/><div id='measurementDivContainer' style='margin:5px;overflow: auto;'><div id='measureWidgetDiv'></div><div id='errorMeasurementDiv' style='color: #ee0000;'>" + this.config.i18n.measurement.error + "</div></div><br/>";
            this.setupToolContent("measurementContainer", 1, html, this.config.i18n.measurement.title, "measurementNode", null);
            var config = {
                angularUnit: this.config.angularUnit,
                linearUnit: this.config.linearUnit,
                areaUnit: this.config.areaUnit
            };
            this.measurementFunction = new Measurement({map: this.map, config: config});
            this.addClickEvent("measurementContainer", this.measurementFunction, "measurementNode");
        },
        setupExport: function () {

            this.setupToolContent("exportContainer", 5, exportHtml, this.config.i18n.export.title, "exportNode", "export");
            this.exportFunction = new Export({map: this.map,
                exportMode: this.config.exportType, i18n: this.config.i18n.export, portalUrl: this.config.sharinghost});

            this.addClickEvent("exportContainer", this.exportFunction, "exportNode");
        },
        setupImageMask: function () {

            this.setupToolContent("imageMaskContainer", 0, imageMaskHtml, this.config.i18n.imageMask.title, "imageMaskNode", "imageMask");
            
            var layers = this.config.itemInfo.itemData.operationalLayers;
            if (this.config.imageSelectorLayer)
                this.config.imageSelectorLayer = JSON.parse(this.config.imageSelectorLayer);
            else
                this.config.imageSelectorLayer = [];
            if(!this.config.primaryLayer.id && this.config.imageSelectorLayer.length < 1){
                for(var z = 0;z<=layers.length - 1;z++){
                    if ((layers[z].type && layers[z].type === 'ArcGISTiledImageServiceLayer') || (layers[z].type && layers[z].type === 'ArcGISImageServiceLayer') || (this.map.getLayer(layers[z].id).serviceDataType && this.map.getLayer(layers[z].id).serviceDataType.indexOf("esriImageService") !== -1)) {
                        this.config.primaryLayer.id = layers[z].id;
                        this.config.imageSelectorLayer.push({
                            id: layers[z].id,
                            fields:[]
                        });
                        break;
                    }
                }
            }
            var layer = [];
            var temp = {
                tool: this.config.maskToolOptions,
                defaultLayer: this.config.primaryLayer.id,
                display: this.config.displayOptions,
                zoomLevel: this.config.zoomLevel,
                searchExtent: this.config.searchScreenExtent,
                autoRefresh: this.config.enableAutoRefresh,
                changeMethods: {difference: this.config.difference, veg: this.config.veg, savi: this.config.savi, water: this.config.water, burn: this.config.burn}
            };
            
            var addLayer = true;
            for (var a = 0; a < layers.length; a++) {
                if ((layers[a].type && layers[a].type === 'ArcGISTiledImageServiceLayer') || (layers[a].type && layers[a].type === 'ArcGISImageServiceLayer') || (this.map.getLayer(layers[a].id).serviceDataType && this.map.getLayer(layers[a].id).serviceDataType.indexOf("esriImageService") !== -1)) {
                    for (var b = 0; b < this.config.imageSelectorLayer.length; b++) {
                        if (this.config.imageSelectorLayer[b].id === layers[a].id /*&& this.config.imageSelectorLayer[b].fields.length > 0*/ && layers[a].layerObject) {
                            if(this.config.imageSelectorLayer[b].fields.length > 0){
                                var field = this.config.imageSelectorLayer[b].fields[0];
                            }else {
                                var field = this.findField(layers[a].layerObject.fields, "esriFieldTypeDate", new RegExp(/acq[a-z]*[_]?Date/i));
                                if(!field){
                                    for(var v in layers[a].layerObject.fields){
                                        if(layers[a].layerObject.fields[v].type === "esriFieldTypeDate"){
                                            field = layers[a].layerObject.fields[v].name;
                                            break;
                                        }
                                    }
                                    if(!field)
                                        field = layers[a].layerObject.fields[0].name;
                                }
                            }
                            var tempLayer = {
                                changeDetection: true,
                                imageField: field,
                                objectID: this.findField(layers[a].layerObject.fields, "esriFieldTypeOID", new RegExp(/O[a-z]*[_]?ID/i)),
                                category: this.findField(layers[a].layerObject.fields, "esriFieldTypeInteger", new RegExp(/Cate[a-z]*/i)),
                                title: layers[a].title || layers[a].layerObject.name || layers[a].id
                            };
                            addLayer = false;
                            layer[layers[a].id] = tempLayer;
                            break;
                        } else
                            addLayer = true;
                    }
                    if (addLayer) {
                        layer[layers[a].id] = {
                            changeDetection: false,
                            title: layers[a].title || layers[a].layerObject.name || layers[a].id
                        };
                    }
                    if (layers[a].id !== this.config.primaryLayer.id)
                        this.map.getLayer(layers[a].id).hide();
                    else
                        this.map.getLayer(layers[a].id).show();
                }
            }
            this.imageMaskFunction = new ImageMask({map: this.map, config: temp, layers: layer, i18n: this.config.i18n.imageMask, main: this});
            this.addClickEvent("imageMaskContainer", this.imageMaskFunction, "imageMaskNode");
        },
        findField: function (fields, dataType, regExpr) {
            var initialVal = "";
            for (var i in fields) {

                if (fields[i].type === dataType || !dataType) {
                    var str = fields[i].name;
                    if (initialVal === "" && regExpr.test(str)) {
                        initialVal = str;
                        break;
                    }

                }
            }
            return initialVal;
        },
        setupBookmark: function () {
            this.setupToolContent("bookmarkContainer", 4, bookmarkHtml, this.config.i18n.bookmark.title, "bookmarkNode", "bookmark");
            this.bookmarkFunction = new Bookmark({map: this.map, bookmarks: this.config.itemInfo.itemData.bookmarks ? this.config.itemInfo.itemData.bookmarks : [], i18n: this.config.i18n.bookmark, extent: this.map.extent});
            this.addClickEvent("bookmarkContainer", this.bookmarkFunction, "bookmarkNode");
        },
        setupAbout: function () {
            var html = "<div class='titleBar'><span class='titleBarTextSpan'>" + this.config.i18n.about.title + "</span><button class='closeContainerButton'><img src='images/cancel.png' alt='X'/></button></div><br/><div id='aboutDivContainer' style='margin:5px;overflow: auto;'></div><br/>";
            this.setupToolContent("aboutContainer", 6, html, this.config.i18n.about.title, "aboutNode", null);
            document.getElementById("aboutDivContainer").innerHTML = this.config.aboutText;
            this.addClickEvent("aboutContainer", null, "aboutNode");

        },
        setupToolContent: function (container, index, html, title, nodeName, key) {
            new Tooltip({
                connectId: [container],
                label: title,
                position: ['after']
            });
            document.getElementsByClassName("iconNode")[index].alt = title;
            if (key)
                html = this.findAndReplaceStrings(html, key);
            var node = domConstruct.create("div", {innerHTML: html, id: nodeName, style: "display:none;"});
            parser.parse(node);
            domConstruct.place(node, registry.byId("toolsContentContainer").containerNode);
        },
        addClickEvent: function (container, toolObject, node) {
            var openForFirstTime = true;
            on(dom.byId(container), "click", lang.hitch(this, function (event) {

                if (event.type === "click" || event.which === 13 || event.which === 32) {
                    if (domClass.contains(container, "selected-widget")) {
                        this.hideContentPanel();
                        domClass.remove(container, "selected-widget");
                        if (toolObject)
                            toolObject.onClose();
                    } else {
                        this.closeOtherWidgets();
                        this.showContentPanel();

                        this.openedWidget = node;
                        domClass.add(container, "selected-widget");
                        if (openForFirstTime && toolObject) {
                            openForFirstTime = false;
                            toolObject.postCreate();
                        }

                        domStyle.set(node, "display", "block");
                        if (toolObject)
                            toolObject.onOpen();
                        setTimeout(function () {
                            focus.focus(document.getElementById(node).children[0].children[1]);
                        }, 500);
                    }
                }
            }));
        },
        showContentPanel: function () {
            if (domClass.contains("toolsContentContainer", "toolsContentContainerClosed_" + window.document.dir)) { //!this.openedWidget
                domClass.remove("toolsContentContainer", "toolsContentContainerClosed_" + window.document.dir);
                domClass.add("toolsContentContainer", this.currentPanelClass);
                if (this.openedWidget) {
                    domStyle.set(this.openedWidget, "display", "none");
                }

            }
        },
        hideContentPanel: function () {
            if (/*!this.compareOpened && */domClass.contains("toolsContentContainer", this.currentPanelClass)) {
                domClass.add("toolsContentContainer", "toolsContentContainerClosed_" + window.document.dir);
                domClass.remove("toolsContentContainer", this.currentPanelClass);
            } else {
                domStyle.set(this.openedWidget, "display", "none");
            }
        },
        findAndReplaceStrings: function (html, tool) {

            var matches, strings;
            while ((matches = this.regExp.exec(html)) !== null) {
                strings = matches[1].split(".");
                html = html.replace(matches[0], this.config.i18n[tool][strings[3]]);
            }

            return html;
        },
        showLoading: function () {
            domStyle.set("loadingMap", "display", "block");
        },
        hideLoading: function () {
            domStyle.set("loadingMap", "display", "none");
        },
        _updateTheme: function () {
            var bgColor = this.config.background;
            var bgOpacity = Number(this.config.backgroundOpacity);
            var textColor = this.config.color;


            // Set the background color using the configured background color
            // and opacity
            query(".bg").style({
                "background-color": bgColor,
                "opacity": bgOpacity
            });
            query(".esriPopup .pointer").style({
                "background-color": bgColor,
                "opacity": bgOpacity
            });
            query(".esriPopup .titlePane").style({
                "background-color": bgColor,
                "opacity": bgOpacity,
                "color": textColor
            });

            query(".fg").style("color", textColor);
            //query(".esriPopup .titlePane").style("color", textColor);
            query(".esriPopup. .titleButton").style("color", textColor);

            query(".esriSimpleSlider").style({
                "color": textColor,
                "background-color": bgColor,
                "opacity": bgOpacity
            });
            query(".searchCollapsed .searchBtn.searchSubmit").style({
                "color": textColor,
                "background-color": bgColor,
                "opacity": bgOpacity
            });
            // Apply the background color as the arrow border color
            query(".arrow_box").style({
                "border-color": bgColor,
                "opacity": bgOpacity
            });
            query("#basemapContainer").style({
                "background": this.config.background,
                opacity: this.config.backgroundOpacity
            });



        }
    });
});
