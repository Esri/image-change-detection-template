///////////////////////////////////////////////////////////////////////////
// Copyright 2018 Esri. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define([
    "dojo/_base/declare",
    "dojo/_base/lang", "dojo/Evented",
    "dijit/registry", "dojo/Deferred",
    "dojo/html",
    "dojo/dom-class",
    "dojo/dom",
    "esri/layers/MosaicRule",
    "esri/tasks/query",
    "esri/tasks/QueryTask",
    "esri/geometry/Extent",
    "dojo/date/locale",
    "dojo/html",
    "dojo/dom-construct",
    "dijit/form/HorizontalSlider",
    "dijit/form/HorizontalRule",
    "dijit/form/HorizontalRuleLabels",
    "esri/layers/RasterFunction",
    "esri/geometry/mathUtils",
    "dojo/dom-style", "esri/dijit/LayerSwipe",
    "esri/layers/ArcGISImageServiceLayer", "esri/layers/RasterLayer",
    "esri/layers/ImageServiceParameters",
    "esri/tasks/ImageServiceIdentifyTask",
    "esri/tasks/ImageServiceIdentifyParameters", "esri/geometry/geometryEngine",
    "esri/geometry/Polygon", "dijit/popup", "esri/Color", "esri/toolbars/draw", "esri/graphic", "esri/symbols/SimpleLineSymbol",
    "esri/request", "dijit/Tooltip",
    "dijit/form/Select",
    "dijit/form/Button",
    "dijit/form/CheckBox",
    "dijit/form/DropDownButton",
    "dijit/TooltipDialog",
    "dijit/ColorPalette"
], function (declare, lang, Evented, registry, Deferred,
        html,
        domClass,
        dom,
        MosaicRule,
        Query, QueryTask, Extent, locale, html, domConstruct, HorizontalSlider, HorizontalRule, HorizontalRuleLabels, RasterFunction, mathUtils, domStyle, LayerSwipe, ArcGISImageServiceLayer, RasterLayer, ImageServiceParameters, ImageServiceIdentifyTask, ImageServiceIdentifyParameters, geometryEngine, Polygon, popup, Color, Draw, Graphic, SimpleLineSymbol, esriRequest, Tooltip) {

    return declare("application.ImageMask", [Evented], {
        constructor: function (parameters) {
            var defaults = {
                map: null,
                config: null,
                layers: null,
                i18n: null,
                main: ""
            };
            lang.mixin(this, defaults, parameters);
        },
        primaryLayer: null,
        secondaryLayer: null,
        orderedDates: null,
        sliderRules: null,
        sliderLabels: null,
        slider: null,
        features: null,
        sliderValue: null,
        featureIds: [],
        responseAlert: false,
        defaultMosaicRule: null,
        mapZoomFactor: 2.0,
        previousValue: null,
        mapWidthPanFactor: 0.75,
        panZoomUpdate: false,
        previousLayerInfo: {primary: null, secondary: null},
        postCreate: function () {
            domConstruct.place('<img id="loadingImageMask" style="position: absolute;top:0;bottom: 0;left: 0;right: 0;margin:auto;z-index:100;" src="images/loading.gif">', "imageMaskNode");
            domStyle.set("loadingImageMask", "display", "none");
            this.layerInfos = this.layers;
            window.addEventListener("resize", lang.hitch(this, this.resizeSlider));
            registry.byId("maskTool").on("change", lang.hitch(this, this.setTool));
            registry.byId("imageSelector").on("change", lang.hitch(this, this.setFilter));
            registry.byId("dropDownImageList").on("click", lang.hitch(this, this.imageDisplayFormat));
            registry.byId("imageSelectorDropDown").on("change", lang.hitch(this, this.sliderDropDownSelection, "dropDown"));
            registry.byId("layerSelector").on("change", lang.hitch(this, this.selectLayer));
            registry.byId("primaryImage").on("click", lang.hitch(this, function () {
                if (this.layerSwipe) {
                    this.moveSwipe(this.map.width - 40, this.layerSwipe.invertPlacement, this.layerSwipe.layers);
                }
                this.setCurrentImage("primary");
            }));
            registry.byId("comparisonImage").on("click", lang.hitch(this, function () {
                if (this.layerSwipe) {
                    this.moveSwipe(40, this.layerSwipe.invertPlacement, this.layerSwipe.layers);
                }
                this.setCurrentImage("comparison");
            }));
            registry.byId("method").on("change", lang.hitch(this, this.setMethod));
            registry.byId("imageMaskApply").on("click", lang.hitch(this, this.getMinMaxCheck));
            registry.byId("positiveRange").on("change", lang.hitch(this, function () {
                if (this.map.getLayer("resultLayer"))
                    this.map.getLayer("resultLayer").redraw();
            }));
            registry.byId("negativeRange").on("change", lang.hitch(this, function () {
                if (this.map.getLayer("resultLayer"))
                    this.map.getLayer("resultLayer").redraw();
            }));
            registry.byId("thresholdValue").on("change", lang.hitch(this, function () {
                if (this.map.getLayer("resultLayer"))
                    this.map.getLayer("resultLayer").redraw();
            }));
            registry.byId("differenceValue").on("change", lang.hitch(this, function () {
                if (this.map.getLayer("resultLayer"))
                    this.map.getLayer("resultLayer").redraw();
            }));
            registry.byId("resultOpacity").on("change", lang.hitch(this, function (value) {
                if (this.map.getLayer("resultLayer"))
                    this.map.getLayer("resultLayer").setOpacity(1 - value);
            }));
            registry.byId("imageMaskClear").on("click", lang.hitch(this, this.clearResultLayer));
            registry.byId("band1").on("change", lang.hitch(this, function (value) {
                if(this.imageMaskTool === "change"){
                if (value === registry.byId("band2").get("value"))
                    registry.byId("imageMaskApply").set("disabled", true);
                else
                    registry.byId("imageMaskApply").set("disabled", false);
            }
            }));
            registry.byId("band2").on("change", lang.hitch(this, function (value) {
                   if(this.imageMaskTool === "change"){
                if (value === registry.byId("band1").get("value"))
                    registry.byId("imageMaskApply").set("disabled", true);
                else
                    registry.byId("imageMaskApply").set("disabled", false);
            }
            }));
            registry.byId("changeModeList").on("change", lang.hitch(this, function (value) {
                if (value === "mask") {
                    domStyle.set("maskRangeSpinners", "display", "block");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                    domStyle.set("areaValueContainer", "display", "block");
                } else if (value === "threshold") {
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "block");
                    domStyle.set("areaValueContainer", "display", "block");
                } else {
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                    domStyle.set("areaValueContainer", "display", "none");
                }
            }));
            this.fillLayerSelector();
            //this.populateMethods();
            if (this.config.tool === "both") {
                domStyle.set("maskToolOptions", "display", "block");
                this.setTool("mask");
            } else {
                domStyle.set("maskToolOptions", "display", "none");
                if (this.config.tool === "mask")
                    this.setTool(this.config.tool);
                else
                    registry.byId("maskTool").set("value", this.config.tool);
            }
            if (this.map) {


                this.map.on("extent-change", lang.hitch(this, this.mapExtentChange));
                this.map.on("update-start", lang.hitch(this, this.showLoading));
                this.map.on("update-end", lang.hitch(this, this.hideLoading));
                this.map.on("update-end", lang.hitch(this, this.refreshSwipe));
                this.map.on("layer-add", lang.hitch(this, function (response) {
                    if (response.layer.id === "resultLayer") {
                        domStyle.set("transparencySlider", "display", "block");
                        if (this.imageMaskTool === "change" && registry.byId("changeModeList").get("value") === "image")
                            registry.byId("resultOpacity").set("value", 1 - 0.8);
                        else
                            registry.byId("resultOpacity").set("value", 1 - response.layer.opacity);
                    }
                }));
            }
            this.setTooltips();
            if (this.config.display === "both") {

                domStyle.set("imageSelectContainer", "display", "inline-block");
            } else {
                if (this.config.display === "dropdown")
                    this.imageDisplayFormat();
                domStyle.set("imageSelectContainer", "display", "none");
            }

            /* for (var a in this.layerInfos) {
             this.map.getLayer(a).hide();
             }*/
            for (var a in this.map.layerIds) {
                var layer = this.map.getLayer(this.map.layerIds[a]);
                if ((layer.type && layer.type === 'ArcGISImageServiceLayer') || (layer.serviceDataType && layer.serviceDataType.substr(0, 16) === "esriImageService")) {
                    if (!this.secondaryLayerIndex)
                        this.secondaryLayerIndex = a;
                    this.resultLayerIndex = a + 1;
                }
            }

            if (this.config.defaultLayer)
                registry.byId("layerSelector").set("value", this.config.defaultLayer);
            else
                this.selectLayer(registry.byId("layerSelector").get("value"));
            this.resizeSlider();

            registry.byId("swipeHandler").on("change", lang.hitch(this, function (value) {
                if (value) {
                    this.refreshSwipe();
                } else {
                    if (this.layerSwipe) {
                        this.swipePosition = this.layerSwipe.domNode.children[0].offsetLeft;
                        this.layerSwipe.destroy();
                        this.layerSwipe = null;
                    }
                }

            }));
            this.main.resizeTemplate();
            registry.byId("colorPalette").on("change", lang.hitch(this, function (value) {

                this.color = (new Color(value)).toRgb();
                var layer = this.map.getLayer("resultLayer");
                if (layer && layer.maskMethod) {
                    layer.maskMethod.color = this.color;
                    layer.redraw();
                }
                popup.close(registry.byId("colorDialog"));
            }));
            registry.byId("aoiExtent").on("change", lang.hitch(this, function (value) {
                this.polygons = null;
                if (value) {
                    this.map.setInfoWindowOnClick(false);
                    this.toolbar.activate(Draw.POLYGON);
                } else {
                    this.map.setInfoWindowOnClick(true);
                    this.removeGraphic();
                    this.toolbar.deactivate();
                }
            }));
            this.toolbar = new Draw(this.map);
            this.toolbar.on("draw-complete", lang.hitch(this, this.addGraphic));
        },
        setTool: function (value) {
            this.imageMaskTool = value;
            document.getElementById("imageMaskClear").click();
            registry.byId("aoiExtent").set("checked", false);
            if (value === "mask") {
                domStyle.set(registry.byId("colorButton").domNode, "display", "inline");
                registry.byId("imageSelector").set("checked", false);
                domStyle.set("changeSelector", "display", "none");
                domStyle.set("maskSelector", "display", "block");
                domStyle.set("swipeDiv", "display", "none");
                domStyle.set("imageCount", "display", "inline-block");
                domStyle.set("changeMode", "display", "none");
                document.getElementById("settingsText").innerHTML = this.i18n.maskText;
                document.getElementById("areaValueLabel").innerHTML = this.i18n.areaText3 + ":";
                domStyle.set("changeSettingsDiv", "display", "none");
                domStyle.set("maskSettingsDiv", "display", "block");
                domStyle.set("imageMaskSettingsDiv", "display", "block");

            } else {
                if (this.maskSlider) {
                    this.maskSlider.destroy();
                    this.maskSliderRules.destroy();
                    this.maskSliderLabels.destroy();
                }
                domStyle.set(registry.byId("colorButton").domNode, "display", "none");
                domStyle.set("maskSelector", "display", "none");
                domStyle.set("changeSelector", "display", "block");
                domStyle.set("swipeDiv", "display", "inline-block");
                domStyle.set("imageCount", "display", "none");
                document.getElementById("settingsText").innerHTML = this.i18n.changeText;
                domStyle.set("changeSettingsDiv", "display", "block");
                domStyle.set("maskSettingsDiv", "display", "none");
                domStyle.set("imageMaskSettingsDiv", "display", "none");
                if (this.imageField) {
                    if (registry.byId("imageSelector").checked)
                        this.setFilter(true);
                    else
                        registry.byId("imageSelector").set("checked", true);

                }
            }
            this.populateMethods(value, registry.byId("method").get("value"));
        },
        setFilter: function (value) {
            if (value) {
                this.imageSliderRefresh();
                domStyle.set("selectorDiv", "display", "block");
            } else {
                domStyle.set("selectorDiv", "display", "none");
                this.imageSliderHide();

                if (this.primaryLayer) {
                    this.layerInfos[this.primaryLayer.id].imageSelector = false;
                    if (this.defaultMosaicRule)
                        this.primaryLayer.setMosaicRule(this.defaultMosaicRule);
                }
                // this.hideSelector = true;
                if (this.secondaryLayer) {
                    this.secondaryLayer.suspend();
                    this.map.removeLayer(this.secondaryLayer);
                    this.secondaryLayer = null;
                }
            }

        },
        resizeSlider: function () {
            if (this.config.display === "both") {
                document.getElementById("imageSliderDiv").style.width = "82%";
            } else if (this.config.display === "slider") {
                document.getElementById("imageSliderDiv").style.width = "95%";
                document.getElementById("imageSliderDiv").style.marginBottom = "13px";
            }
        },
        fillLayerSelector: function () {
            //registry.byId("layerSelector").addOption({label: "None", value: "none"});
            var layer;
            for (var a in this.layerInfos) {
                layer = this.map.getLayer(a);
                registry.byId("layerSelector").addOption({label: this.layerInfos[a].title, value: a});
                this.layerInfos[a].defaultMosaicRule = (layer.mosaicRule || layer.defaultMosaicRule || null);
                this.layerInfos[a].value = {primary: null, secondary: null};
            }
        },
        populateMethods: function (tool, currentValue) {
            registry.byId("method").removeOption(registry.byId("method").getOptions());
            if (tool === "change" && this.config.changeMethods.difference) {
                registry.byId("method").addOption({label: this.i18n.method1, value: "difference"});
            }
            if (this.config.changeMethods.veg) {
                registry.byId("method").addOption({label: this.i18n.method2, value: "ndvi"});
            }
            if (this.config.changeMethods.savi) {
                registry.byId("method").addOption({label: this.i18n.method3, value: "savi"});
            }
            if (this.config.changeMethods.water) {
                registry.byId("method").addOption({label: this.i18n.method4, value: "water"});
            }
            if (this.config.changeMethods.burn) {
                registry.byId("method").addOption({label: this.i18n.method5, value: "burn"});
            }
            if (tool === "mask") {
                registry.byId("method").addOption({label: this.i18n.method6, value: "less"});
                registry.byId("method").addOption({label: this.i18n.method7, value: "more"});
            }
            if (currentValue !== registry.byId("method").get("value")) {
                if (currentValue !== "difference" && currentValue !== "less" && currentValue !== "more")
                    registry.byId("method").set("value", currentValue);
                else
                    this.setMethod(registry.byId("method").get("value"));
            } else
                this.setMethod(registry.byId("method").get("value"));

        },
        setTooltips: function () {
            this.switchDisplayTooltip = new Tooltip({
                connectId: ['dropDownImageList'],
                position: ['below'],
                label: this.i18n.dropDown
            });
        },
        onOpen: function () {
            if (!this.previousInfo) {
                this.previousInfo = {
                    extent: this.map.extent,
                    level: this.map.getLevel()
                };
                this.previousExtentChangeLevel = this.previousInfo.level;
            }
            if (this.map.getLevel() < this.config.zoomLevel) {
                this.turningOffSelector();
            }
        },
        setCurrentImage: function (value) {
            if (this.slider) {
                for (var i in this.orderedDates) {
                    if (this.orderedDates[i].value === this.layerInfos[this.primaryLayer.id].value[value].value && this.orderedDates[i].id === this.layerInfos[this.primaryLayer.id].value[value].id) {
                        var index = i;
                        break;
                    } else if (/*this.imageFieldType === "esriFieldTypeDate" &&*/ this.orderedDates[i].value <= this.layerInfos[this.primaryLayer.id].value[value].value) {
                        var index = i;
                    }
                }
                if (index)
                    this.setSliderValue(index);
            }
        },
        selectLayer: function (value) {

            if (this.primaryLayer)
                this.primaryLayer.hide();
            if (this.secondaryLayer) {
                this.secondaryLayer.suspend();
                this.map.removeLayer(this.secondaryLayer);
                this.secondaryLayer = null;
            }
            this.clearResultLayer();

            this.valueSelected = null;
            if (value) {
                this.primaryLayer = this.map.getLayer(value);
                this.primaryLayer.show();

                if ((this.imageMaskTool === "change" && this.layerInfos[value].changeDetection) || this.imageMaskTool === "mask") {
                    this.populateBands();
                    this.defaultMosaicRule = this.layerInfos[value].defaultMosaicRule;
                    if (this.primaryLayer.currentVersion)
                    {
                        var currentVersion = this.primaryLayer.currentVersion;
                        this.checkField(currentVersion);
                    } else {

                        var layersRequest = esriRequest({
                            url: this.primaryLayer.url,
                            content: {f: "json"},
                            handleAs: "json",
                            callbackParamName: "callback"
                        });
                        layersRequest.then(lang.hitch(this, function (data) {
                            var currentVersion = data.currentVersion;
                            this.checkField(currentVersion);
                        }));
                    }

                } else {
                    domStyle.set("selectorDiv", "display", "none");
                    domStyle.set("imageMaskSettingsDiv", "display", "none");
                    html.set(document.getElementById("errorDiv"), "");
                }
            }
        },
        checkField: function (currentVersion)
        {

            if (currentVersion >= 10.21) {
                if (this.map.getLevel() >= this.config.zoomLevel) {
                    if (this.layerInfos[this.primaryLayer.id].imageField && this.layerInfos[this.primaryLayer.id].objectID && this.layerInfos[this.primaryLayer.id].category) {
                        this.imageField = this.layerInfos[this.primaryLayer.id].imageField;
                        for (var a in this.primaryLayer.fields) {
                            if (this.imageField === this.primaryLayer.fields[a].name) {
                                this.imageFieldType = this.primaryLayer.fields[a].type;
                                break;
                            }
                        }

                        this.objectID = this.layerInfos[this.primaryLayer.id].objectID;
                        this.categoryField = this.layerInfos[this.primaryLayer.id].category;
                        html.set(document.getElementById("errorDiv"), "");
                        if (this.imageMaskTool === "change") {
                            domStyle.set("selectorDiv", "display", "block");
                            this.imageSliderRefresh();
                        } else {
                            domStyle.set("maskSelector", "display", "block");
                            if (this.layerInfos[this.primaryLayer.id].imageSelector) {
                                if (!registry.byId("imageSelector").checked)
                                    registry.byId("imageSelector").set("checked", true);
                                else
                                    this.setFilter(true);
                            } else {
                                if (registry.byId("imageSelector").checked)
                                    registry.byId("imageSelector").set("checked", false);
                                else
                                    this.setFilter(false);
                            }
                        }

                    } else {
                        if (!this.layerInfos[this.primaryLayer.id].imageField) {
                            html.set(document.getElementById("errorDiv"), this.i18n.error1);
                        } else if (!this.layerInfos[this.primaryLayer.id].objectID) {
                            html.set(document.getElementById("errorDiv"), this.i18n.error2);
                        } else {
                            html.set(document.getElementById("errorDiv"), this.i18n.error3);
                        }
                        domStyle.set("selectorDiv", "display", "none");
                        domStyle.set("maskSelector", "display", "none");
                        if(this.imageMaskTool === "change")
                        domStyle.set("imageMaskSettingsDiv", "display", "none");
                    }
                } else {
                    this.turningOffSelector();

                }
            } else {
                domStyle.set("selectorDiv", "display", "none");
                domStyle.set("maskSelector", "display", "none");
                domStyle.set("imageMaskSettingsDiv", "display", "none");
                html.set(document.getElementById("errorDiv"), this.i18n.error5);
            }
        },
        mapExtentChange: function (evt) {
            if (this.imageMaskTool === "mask" && this.map.getLayer("resultLayer") && this.map.getLayer("resultLayer").maskMethod) {
                this.map.getLayer("resultLayer").suspend();

                this.calculatePixelSize();
                if (this.primaryLayer) {
                    this.createHistogram(this.map.getLayer("resultLayer").renderingRule, true).then(lang.hitch(this, function () {
                        var layer = this.map.getLayer("resultLayer");
                        if (layer && layer.maskMethod) {
                            layer.maskMethod.range = [this.min, this.max];
                            layer.maskMethod.value = this.maskSlider.get("value");
                            layer.resume();
                        }
                    }));
                } else
                    this.map.getLayer("resultLayer").resume();
            }
            if (evt.lod.level >= this.config.zoomLevel) {
                if (this.hideSelector) {
                    this.hideSelector = false;
                    html.set(document.getElementById("errorDiv"), "");
                    this.selectLayer(registry.byId("layerSelector").get("value"));
                }
                var needsUpdate = false;
                if (evt.levelChange) {
                    var zoomLevelChange = Math.abs(evt.lod.level - this.previousInfo.level);
                    if (zoomLevelChange >= this.mapZoomFactor) {
                        console.info("LARGE zoom: ", evt);
                        needsUpdate = true;
                    }
                }

                var panDistance = Math.abs(mathUtils.getLength(evt.extent.getCenter(), this.previousInfo.extent.getCenter()));
                var previousMapWidth = (this.previousInfo.extent.getWidth() * this.mapWidthPanFactor);
                if (panDistance > previousMapWidth) {
                    console.info("LARGE pan: ", evt);
                    needsUpdate = true;
                }

                if (needsUpdate && this.config.autoRefresh) {
                    this.panZoomUpdate = true;
                    if (registry.byId("imageSelector").checked)
                        this.imageSliderRefresh();

                }
            } else {
                this.turningOffSelector();
            }
            this.previousExtentChangeLevel = evt.lod.level;
        },
        imageDisplayFormat: function () {
            if (domClass.contains(registry.byId("dropDownImageList").domNode, "dropDownSelected")) {

                domClass.remove(registry.byId("dropDownImageList").domNode, "dropDownSelected");
                this.switchDisplayTooltip.set("label", this.i18n.dropDown);
                document.getElementById("switchDisplayImage").src = "images/dropdownlist.png";
            } else {
                domClass.add(registry.byId("dropDownImageList").domNode, "dropDownSelected");
                this.switchDisplayTooltip.set("label", this.i18n.slider);
                document.getElementById("switchDisplayImage").src = "images/slider.png";
            }
            this.imageDisplayFormat2();
        },
        imageDisplayFormat2: function () {
            if (!domClass.contains(registry.byId("dropDownImageList").domNode, "dropDownSelected")) {
                domStyle.set(document.getElementById("imageRange"), "display", "inline-block");
                domStyle.set("dropDownOption", "display", "none");
                if (this.featureLength > 1) {
                    domStyle.set(this.slider.domNode, "display", "block");
                    domStyle.set(this.sliderRules.domNode, "display", "block");
                    domStyle.set(this.sliderLabels.domNode, "display", "block");
                } else {
                    domStyle.set(this.slider.domNode, "display", "none");
                    domStyle.set(this.sliderRules.domNode, "display", "none");
                    domStyle.set(this.sliderLabels.domNode, "display", "none");
                }
            } else {
                if (this.slider) {
                    domStyle.set(this.slider.domNode, "display", "none");
                    domStyle.set(this.sliderRules.domNode, "display", "none");
                    domStyle.set(this.sliderLabels.domNode, "display", "none");
                }
                domStyle.set("dropDownOption", "display", "inline-block");
            }
        },
        onClose: function () {
            registry.byId("aoiExtent").set("checked", false);
        },
        imageSliderShow: function () {
            if (this.primaryLayer) {
                var extent = this.map.extent;
                var xminnew = ((extent.xmax + extent.xmin) / 2) - ((extent.xmax - extent.xmin) * this.config.searchExtent / 200);
                var xmaxnew = ((extent.xmax + extent.xmin) / 2) + ((extent.xmax - extent.xmin) * this.config.searchExtent / 200);
                var yminnew = ((extent.ymax + extent.ymin) / 2) - ((extent.ymax - extent.ymin) * this.config.searchExtent / 200);
                var ymaxnew = ((extent.ymax + extent.ymin) / 2) + ((extent.ymax - extent.ymin) * this.config.searchExtent / 200);
                var extentnew = new Extent(xminnew, yminnew, xmaxnew, ymaxnew, extent.spatialReference);
                var query = new Query();
                query.geometry = extentnew;
                query.outFields = [this.imageField];
                if (this.layerInfos[this.primaryLayer.id].defaultMosaicRule && this.layerInfos[this.primaryLayer.id].defaultMosaicRule.where)
                    var layerFilter = this.layerInfos[this.primaryLayer.id].defaultMosaicRule.where;
                query.where = layerFilter ? this.categoryField + " = 1 AND " + layerFilter : this.categoryField + " = 1";
                query.orderByFields = [this.imageField];
                query.returnGeometry = true;
                this.showLoading();
                var queryTask = new QueryTask(this.primaryLayer.url);
                queryTask.execute(query, lang.hitch(this, function (result) {
                    this.previousInfo = {
                        extent: this.map.extent,
                        level: this.map.getLevel()
                    };

                    this.orderedFeatures = result.features;

                    if (this.orderedFeatures.length > 0) {
                        this.orderedDates = [];
                        for (var a in this.orderedFeatures) {
                            if (this.imageMaskTool === "mask") {
                                if (parseInt(a) < 1)
                                    this.orderedDates.push({value: this.orderedFeatures[a].attributes[this.imageField], id: this.orderedFeatures[a].attributes[this.objectID]});
                                else {
                                    if (this.imageFieldType === "esriFieldTypeDate") {
                                        var tempValue = locale.format(new Date(this.orderedDates[this.orderedDates.length - 1].value), {selector: "date", formatLength: "short"});
                                        var tempCurrentValue = locale.format(new Date(this.orderedFeatures[a].attributes[this.imageField]), {selector: "date", formatLength: "short"});
                                        if (tempValue !== tempCurrentValue)
                                            this.orderedDates.push({value: this.orderedFeatures[a].attributes[this.imageField], id: this.orderedFeatures[a].attributes[this.objectID]});
                                    } else {
                                        if (this.orderedDates[this.orderedDates.length - 1].value !== this.orderedFeatures[a].attributes[this.imageField])
                                            this.orderedDates.push({value: this.orderedFeatures[a].attributes[this.imageField], id: this.orderedFeatures[a].attributes[this.objectID]});
                                    }
                                }
                            } else
                                this.orderedDates.push({value: this.orderedFeatures[a].attributes[this.imageField], id: this.orderedFeatures[a].attributes[this.objectID]});
                        }
                        this.featureLength = this.orderedDates.length;
                        this.imageSliderHide();
                        var sliderNode = domConstruct.create("div", {}, "imageSliderDiv", "first");

                        var rulesNode = domConstruct.create("div", {}, sliderNode, "first");
                        this.sliderRules = new HorizontalRule({
                            container: "bottomDecoration",
                            count: this.featureLength,
                            style: "height:5px;"
                        }, rulesNode);

                        var labels = [];

                        if (this.imageFieldType === "esriFieldTypeDate") {

                            for (var i = 0; i < this.orderedDates.length; i++) {
                                labels[i] = locale.format(new Date(this.orderedDates[i].value), {selector: "date", formatLength: "short"});
                            }
                        } else {

                            for (var i = 0; i < this.orderedDates.length; i++) {
                                labels[i] = this.orderedDates[i].value;
                            }
                        }

                        var labelsNode = domConstruct.create("div", {}, sliderNode, "second");
                        this.sliderLabels = new HorizontalRuleLabels({
                            container: "bottomDecoration",
                            labelStyle: "height:1em;font-size:75%;color:gray;",
                            labels: [labels[0], labels[this.orderedDates.length - 1]]
                        }, labelsNode);

                        this.slider = new HorizontalSlider({
                            name: "slider",
                            value: 0,
                            minimum: 0,
                            maximum: this.featureLength - 1,
                            discreteValues: this.featureLength,
                            onChange: lang.hitch(this, this.sliderDropDownSelection, "slider")
                        }, sliderNode);
                        this.slider.startup();
                        this.sliderRules.startup();
                        this.sliderLabels.startup();
                        this.imageDisplayFormat2();
                        this.main.resizeTemplate();
                        registry.byId("imageSelectorDropDown").removeOption(registry.byId("imageSelectorDropDown").getOptions());

                        for (var v = this.orderedDates.length - 1; v >= 0; v--) {
                            registry.byId("imageSelectorDropDown").addOption({label: (this.imageFieldType === "esriFieldTypeDate" ? locale.format(new Date(this.orderedDates[v].value), {selector: "date", formatLength: "long"}) : this.orderedDates[v].value.toString()), value: "" + v + ""});
                        }

                        if (this.imageMaskTool === "change" && this.layerInfos[this.primaryLayer.id].value[registry.byId("primaryImage").checked ? "primary" : "comparison"]) {
                            var index = null;
                            for (var i in this.orderedDates) {
                                if (this.orderedDates[i].value === this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "primary" : "comparison")].value && this.orderedDates[i].id === this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "primary" : "comparison")].id) {
                                    var index = i;
                                    break;
                                } else if (/*this.imageFieldType === "esriFieldTypeDate" &&*/ this.orderedDates[i].value <= this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "primary" : "comparison")].value) {
                                    var index = i;
                                }
                            }
                            if (index)
                                this.setSliderValue(index);
                            else
                                this.selectDisplayedImage();
                        } else if (this.imageMaskTool === "mask" && this.layerInfos[this.primaryLayer.id].mask) {
                            var index = null;
                            for (var i in this.orderedDates) {
                                if (this.orderedDates[i].value === this.layerInfos[this.primaryLayer.id].mask.value) {
                                    var index = i;
                                    break;
                                } else if (/*this.imageFieldType === "esriFieldTypeDate" &&*/ this.orderedDates[i].value <= this.layerInfos[this.primaryLayer.id].mask.value) {
                                    var index = i;
                                }
                            }
                            if (index)
                                this.setSliderValue(index);
                            else
                                this.selectDisplayedImage();
                        } else {
                            this.selectDisplayedImage();
                        }
                    } else {
                        html.set(document.getElementById("errorDiv"), this.i18n.error6);
                        domStyle.set("selectorDiv", "display", "none");
                        html.set(document.getElementById("imageRange"), "");
                        this.hideLoading();
                    }
                }));

            }
        },
        setSliderValue: function (index) {
            this.imageDisplayFormat2();
            registry.byId("imageSelectorDropDown").set("value", index);
            this.slider.set("value", index);
            if (this.imageFieldType === "esriFieldTypeDate")
                html.set(document.getElementById("imageRange"), this.i18n.date + ": <b>" + locale.format(new Date(this.orderedDates[index].value), {selector: "date", formatLength: "long"}) + "</b>");
            else
                html.set(document.getElementById("imageRange"), this.imageField + ": <b>" + this.orderedDates[index].value + "</b>");
            html.set(document.getElementById("imageCount"), "[1 " + this.i18n.imageLabel + "]");
            this.hideLoading();
        },
        selectDisplayedImage: function () {
            var request = new esriRequest({
                url: this.primaryLayer.url + "/getSamples",
                content: {
                    geometry: JSON.stringify(this.map.extent.getCenter()),
                    geometryType: "esriGeometryPoint",
                    returnGeometry: false,
                    sampleCount: 1,
                    mosaicRule: this.layerInfos[this.primaryLayer.id].defaultMosaicRule ? JSON.stringify(this.layerInfos[this.primaryLayer.id].defaultMosaicRule.toJson()) : null,
                    outFields: this.imageField,
                    f: "json"
                },
                handleAs: "json",
                callbackParamName: "callback"
            });
            request.then(lang.hitch(this, function (bestScene) {
                var maxVisible = bestScene.samples[0].attributes[this.imageField];
                var index = null;
                for (var z in this.orderedDates) {
                    if (this.orderedDates[z].value === maxVisible) {
                        index = z;
                        break;
                    }
                }

                if (!index)
                    var index = this.orderedDates.length - 1;

                this.setSliderValue(index);
            }), lang.hitch(this, function () {


                var imageTask = new ImageServiceIdentifyTask(this.primaryLayer.url);
                var imageParams = new ImageServiceIdentifyParameters();
                imageParams.geometry = this.map.extent.getCenter();

                imageParams.mosaicRule = this.layerInfos[this.primaryLayer.id].defaultMosaicRule;
                imageParams.returnGeometry = false;
                imageTask.execute(imageParams, lang.hitch(this, function (data) {
                    var index;

                    if (data.catalogItems.features[0]) {
                        var maxVisible = data.catalogItems.features[0].attributes[this.imageField];
                        for (var z in this.orderedDates) {
                            if (this.orderedDates[z].value === maxVisible) {
                                index = z;
                            }
                        }
                    }
                    if (!index)
                        var index = this.orderedDates.length - 1;

                    this.setSliderValue(index);
                }), lang.hitch(this, function (error) {
                    this.setSliderValue(this.orderedDates.length - 1);
                }));
            }));
        },
        imageSliderHide: function () {
            if (this.slider) {
                this.sliderRules.destroy();
                this.sliderLabels.destroy();
                this.slider.destroy();
            }
            this.sliderRules = null;
            this.sliderLabels = null;
            this.slider = null;
        },
        sliderDropDownSelection: function (value) {
            if (!domClass.contains(registry.byId("dropDownImageList").domNode, "dropDownSelected") && value === "slider") {
                this.valueSelected = this.slider.get("value");
                registry.byId("imageSelectorDropDown").set("value", this.valueSelected);
                this.sliderChange();
            } else if (domClass.contains(registry.byId("dropDownImageList").domNode, "dropDownSelected") && value === "dropDown") {
                this.valueSelected = registry.byId("imageSelectorDropDown").get("value");
                this.slider.set("value", this.valueSelected);
                this.sliderChange();
            }
        },
        sliderChange: function () {
            if (this.valueSelected || this.valueSelected === 0) {
                var aqDate = this.orderedDates[this.valueSelected].value;
                var featureSelect = [];
                this.featureIds = [];
                if (this.imageMaskTool === "change") {
                    this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "primary" : "comparison")] = this.orderedDates[this.valueSelected];
                    if (!this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "comparison" : "primary")])
                        this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "comparison" : "primary")] = this.orderedDates[this.valueSelected];

                    featureSelect.push(this.orderedFeatures[this.valueSelected]);
                    this.featureIds.push(this.orderedFeatures[this.valueSelected].attributes[this.objectID]);
                } else {
                    var count = 0;
                    this.layerInfos[this.primaryLayer.id].mask = this.orderedDates[this.valueSelected];
                    this.layerInfos[this.primaryLayer.id].imageSelector = true;
                    if (this.imageFieldType === "esriFieldTypeDate") {
                        for (var c in this.orderedFeatures) {
                            var tempValue = locale.format(new Date(this.orderedDates[this.valueSelected].value), {selector: "date", formatLength: "short"});
                            var tempCurrentValue = locale.format(new Date(this.orderedFeatures[c].attributes[this.imageField]), {selector: "date", formatLength: "short"});
                            if (tempValue === tempCurrentValue) {
                                count++;
                                featureSelect.push(this.orderedFeatures[c]);
                                this.featureIds.push(this.orderedFeatures[c].attributes[this.objectID]);
                            }

                        }
                    } else {
                        for (var c in this.orderedFeatures) {
                            if (this.orderedFeatures[c].attributes[this.imageField] === this.orderedDates[this.valueSelected].value) {
                                count++;
                                featureSelect.push(this.orderedFeatures[c]);
                                this.featureIds.push(this.orderedFeatures[c].attributes[this.objectID]);

                            }
                        }
                    }

                    html.set(document.getElementById("imageCount"), "[" + count + " " + this.i18n.imageLabel + "]");
                }

                if (this.imageFieldType !== "esriFieldTypeDate")
                    html.set(document.getElementById("imageRange"), this.imageField + ": <b>" + aqDate + "</b>");
                else
                    html.set(document.getElementById("imageRange"), this.i18n.date + ": <b>" + locale.format(new Date(aqDate), {selector: "date", formatLength: "long"}) + "</b>");

                var mr = new MosaicRule();
                mr.method = MosaicRule.METHOD_LOCKRASTER;
                mr.ascending = true;
                mr.operation = "MT_FIRST";
                mr.lockRasterIds = this.featureIds;
                if ((JSON.stringify(this.layerInfos[this.primaryLayer.id].value.primary) === JSON.stringify(this.layerInfos[this.primaryLayer.id].value.comparison)) || this.imageMaskTool === "mask") {
                    this.primaryLayer.setMosaicRule(mr);
                    if (this.secondaryLayer) {
                        this.secondaryLayer.suspend();
                        this.map.removeLayer(this.secondaryLayer);
                        this.secondaryLayer = null;
                    }
                } else {
                    if (registry.byId("primaryImage").checked) {
                        this.primaryLayer.setMosaicRule(mr);
                        if (this.secondaryLayer) {
                            if (this.panZoomUpdate) {
                                this.panZoomUpdate = false;
                                for (var i in this.orderedDates) {
                                    if (this.orderedDates[i].value === this.layerInfos[this.primaryLayer.id].value["comparison"].value && this.orderedDates[i].id === this.layerInfos[this.primaryLayer.id].value["comparison"].id) {
                                        var index = this.orderedDates[i];
                                        break;
                                    } else if (/*this.imageFieldType === "esriFieldTypeDate" &&*/ this.orderedDates[i].value <= this.layerInfos[this.primaryLayer.id].value["comparison"].value) {
                                        var index = this.orderedDates[i];
                                    }
                                }
                                if (index)
                                    this.layerInfos[this.primaryLayer.id].value.comparison = index;
                            }

                            if (this.secondaryLayer.mosaicRule && this.secondaryLayer.mosaicRule.lockRasterIds !== this.layerInfos[this.primaryLayer.id].value.comparison.id)
                                this.secondaryLayer.setMosaicRule(new MosaicRule({"mosaicMethod": "esriMosaicLockRaster", "ascending": true, "mosaicOperation": "MT_FIRST", "lockRasterIds": [this.layerInfos[this.primaryLayer.id].value.comparison.id]}));
                        } else {
                            this.createSecondaryLayer(new MosaicRule({"mosaicMethod": "esriMosaicLockRaster", "ascending": true, "mosaicOperation": "MT_FIRST", "lockRasterIds": [this.layerInfos[this.primaryLayer.id].value.comparison.id]}));
                        }
                    } else {
                        if (this.secondaryLayer) {
                            this.secondaryLayer.setMosaicRule(mr);
                        } else {
                            this.createSecondaryLayer(mr);
                        }
                        if (this.panZoomUpdate) {
                            this.panZoomUpdate = false;
                            for (var i in this.orderedDates) {
                                if (this.orderedDates[i].value === this.layerInfos[this.primaryLayer.id].value["primary"].value && this.orderedDates[i].id === this.layerInfos[this.primaryLayer.id].value["primary"].id) {
                                    var index = this.orderedDates[i];
                                    break;
                                } else if (/*this.imageFieldType === "esriFieldTypeDate" &&*/ this.orderedDates[i].value <= this.layerInfos[this.primaryLayer.id].value["primary"].value) {
                                    var index = this.orderedDates[i];
                                }
                            }
                            if (index)
                                this.layerInfos[this.primaryLayer.id].value.primary = index;
                        }
                        if (this.primaryLayer.mosaicRule && this.primaryLayer.mosaicRule.lockRasterIds !== this.layerInfos[this.primaryLayer.id].value.primary.id)
                            this.primaryLayer.setMosaicRule(new MosaicRule({"mosaicMethod": "esriMosaicLockRaster", "ascending": true, "mosaicOperation": "MT_FIRST", "lockRasterIds": [this.layerInfos[this.primaryLayer.id].value.primary.id]}));

                    }
                }

            }
        },
        createSecondaryLayer: function (mr) {
            var layer = this.primaryLayer;
            var params = new ImageServiceParameters();

            params.mosaicRule = mr;

            if (layer.renderingRule) {
                params.renderingRule = layer.renderingRule;
            }
            if (layer.bandIds) {
                params.bandIds = layer.bandIds;
            }
            if (layer.format) {
                params.format = layer.format;
            }
            if (layer.interpolation) {
                params.interpolation = layer.interpolation;
            }
            if (layer.compressionQuality)
                params.compressionQuality = layer.compressionQuality;
            if (layer.timeInfo && layer.timeInfo.timeExtent)
                params.timeExtent = layer.timeInfo.timeExtent;
            var popupInfo = "";
            if (layer.popupInfo) {
                popupInfo = new PopupTemplate(layer.popupInfo);
            }

            this.secondaryLayer = new ArcGISImageServiceLayer(
                    layer.url,
                    {
                        id: layer.id + "_ComparisonLayer",
                        imageServiceParameters: params,
                        visible: true,
                        infoTemplate: popupInfo,
                        opacity: layer.opacity,
                        useMapTime: layer.useMapTime,
                        useMapImage: layer.useMapImage
                    });
            this.map.addLayer(this.secondaryLayer, this.secondaryLayerIndex);
        },
        imageSliderRefresh: function () {
            if (this.slider) {
                this.imageSliderHide();
            }
            this.imageSliderShow();

        },
        populateBands: function () {
            this.bandNames = [];
            registry.byId("band1").removeOption(registry.byId("band1").getOptions());
            registry.byId("band2").removeOption(registry.byId("band2").getOptions());
            var layersRequest = esriRequest({
                url: this.primaryLayer.url + "/1/info/keyProperties",
                content: {f: "json"},
                handleAs: "json",
                callbackParamName: "callback"
            });

            layersRequest.then(lang.hitch(this, function (response) {

                var bandProp = response.BandProperties;
                if (bandProp) {
                    for (var i = 0; i < this.primaryLayer.bandCount; i++) {
                        if (bandProp[i] && bandProp[i].BandName) {
                            this.bandNames[i] = bandProp[i].BandName;
                        } else {
                            var num = i + 1;
                            this.bandNames[i] = "Band_" + num.toString();
                        }

                    }
                } else {
                    for (var i = 0; i < this.primaryLayer.bandCount; i++) {
                        var num = i + 1;
                        this.bandNames[i] = "Band_" + num.toString();
                    }
                }
                this.populateBandsContinue();

            }), lang.hitch(this, function () {
                for (var i = 0; i < this.primaryLayer.bandCount; i++) {
                    var num = i + 1;
                    this.bandNames[i] = "Band_" + num.toString();
                }
                this.populateBandsContinue();
            }));
        },
        populateBandsContinue: function () {
            for (var a in this.bandNames) {
                registry.byId("band1").addOption({label: this.bandNames[a], value: (parseInt(a) + 1)});
                registry.byId("band2").addOption({label: this.bandNames[a], value: (parseInt(a) + 1)});
            }
            this.setBandValues();
        },
        setBandValues: function () {
            this.initialVal_nir = "";
            this.initialVal_red = "";
            this.initialVal_swir = "";
            this.initialVal_green = "";
            var nirExp = new RegExp(/N[a-z]*I[a-z]*R[_]?[1]?/i);
            var redExp = new RegExp(/red/i);
            var swirExp = new RegExp(/S[a-z]*W[a-z]*I[a-z]*R[_]?[1]?/i);
            var greenExp = new RegExp(/green/i);
            for (var i in this.bandNames) {
                if (this.initialVal_green === "" && greenExp.test(this.bandNames[i])) {
                    this.initialVal_green = parseInt(i) + 1;
                }
                if (this.initialVal_red === "" && redExp.test(this.bandNames[i]))
                {
                    this.initialVal_red = parseInt(i) + 1;
                }
                if (this.initialVal_nir === "" && nirExp.test(this.bandNames[i]))
                {
                    this.initialVal_nir = parseInt(i) + 1;
                }
                if (this.initialVal_swir === "" && swirExp.test(this.bandNames[i]))
                {
                    this.initialVal_swir = parseInt(i) + 1;
                }

            }
            this.setMethod(registry.byId("method").get("value"));
        },
        setMethod: function (value) {
            if (value === "ndvi" || value === "savi") {
                document.getElementById("bandName1").innerHTML = this.i18n.nir + ":";
                document.getElementById("bandName2").innerHTML = this.i18n.red + ":";
            } else if (value === "water") {
                document.getElementById("bandName1").innerHTML = this.i18n.green + ":";
                document.getElementById("bandName2").innerHTML = this.i18n.swir + ":";
            } else if (value === "burn") {
                document.getElementById("bandName1").innerHTML = this.i18n.nir + ":";
                document.getElementById("bandName2").innerHTML = this.i18n.swir + ":";
            } else {
                document.getElementById("bandName1").innerHTML = this.i18n.band1 + ":";
                document.getElementById("bandName2").innerHTML = this.i18n.band2 + ":";
            }
            if (registry.byId("maskTool").get("value") === "mask") {
                domStyle.set("areaValue", "color", "indianred");
                domStyle.set("bandInputs", "display", "block");
                if (value === "less" || value === "more")
                    domStyle.set("bandRowTable", "display", "none");
                else
                    domStyle.set("bandRowTable", "display", "table-row");
                domStyle.set("areaValueContainer", "display", "block");
            } else {
                if (value === "difference") {
                    domStyle.set("bandInputs", "display", "none");
                    domStyle.set("changeMode", "display", "none");
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                    domStyle.set("areaValueContainer", "display", "none");
                } else {
                    domStyle.set("areaValue", "color", "magenta");
                    html.set(document.getElementById("areaValueLabel"), this.i18n.areaText + ":");
                    if (value === "burn") {
                        domStyle.set("areaValue", "color", "#fc6d31");
                        html.set(document.getElementById("areaValueLabel"), this.i18n.areaText2 + ":");
                    }

                    domStyle.set("changeMode", "display", "block");
                    domStyle.set("bandInputs", "display", "block");
                    domStyle.set("bandRowTable", "display", "table-row");
                    if (registry.byId("changeModeList").get("value") === "mask")
                    {
                        domStyle.set("maskRangeSpinners", "display", "block");
                        domStyle.set("thresholdRangeSpinners", "display", "none");
                        domStyle.set("areaValueContainer", "display", "block");
                    } else if (registry.byId("changeModeList").get("value") === "threshold") {
                        domStyle.set("maskRangeSpinners", "display", "none");
                        domStyle.set("thresholdRangeSpinners", "display", "block");
                        domStyle.set("areaValueContainer", "display", "block");
                    } else {
                        domStyle.set("maskRangeSpinners", "display", "none");
                        domStyle.set("thresholdRangeSpinners", "display", "none");
                        domStyle.set("areaValueContainer", "display", "none");
                    }

                }
            }
            this.setBands(value);
        },
        setBands: function (value) {
            if ((value === "ndvi" || value === "savi") && this.initialVal_red && this.initialVal_nir)
            {
                registry.byId("band1").set("value", this.initialVal_nir);
                registry.byId("band2").set("value", this.initialVal_red);
            } else if (value === "water" && this.initialVal_green && this.initialVal_swir) {
                registry.byId("band1").set("value", this.initialVal_green);
                registry.byId("band2").set("value", this.initialVal_swir);
            } else if (value === "burn" && this.initialVal_nir && this.initialVal_swir) {
                registry.byId("band1").set("value", this.initialVal_nir);
                registry.byId("band2").set("value", this.initialVal_swir);
            } else {
                registry.byId("band1").set("value", "1");
                registry.byId("band2").set("value", "2");
            }
        },
        getMinMaxCheck: function () {
            this.showLoading();
            var method = registry.byId("method").get("value");
            if (method !== "difference" && method !== "less" && method !== "more") {
                var request = new esriRequest({
                    url: this.primaryLayer.url,
                    content: {
                        f: "json"
                    },
                    handleAs: "json",
                    callbackParamName: "callback"
                });
                request.then(lang.hitch(this, function (prop) {
                    var band1Index = Math.abs(parseInt(registry.byId("band1").get("value")));
                    var band2Index = Math.abs(parseInt(registry.byId("band2").get("value")));

                    if (prop.minValues && prop.minValues.length > 0 && prop.minValues[0] && prop.minValues.length > band1Index) {
                        this.min1 = prop.minValues[band1Index];
                        this.min2 = prop.minValues[band2Index];
                    } else {
                        this.min1 = 0;
                        this.min2 = 0;
                    }
                    if (prop.maxValues && prop.maxValues.length > 0 && prop.maxValues[0] && prop.maxValues.length > band1Index) {
                        this.max1 = prop.maxValues[band1Index];
                        this.max2 = prop.maxValues[band2Index];
                    } else {
                        this.max1 = 1;
                        this.max2 = 1;
                    }
                    this.selectFunction(true);
                }), lang.hitch(this, function () {
                    this.min1 = 0;
                    this.max1 = 1;
                    this.min2 = 0;
                    this.max2 = 1;
                    this.selectFunction(true);
                }));
            } else
                this.selectFunction(false);
        },
        selectFunction: function (flag) {
            if (this.imageMaskTool === "change")
                this.detectChange();
            else {
                if (registry.byId("band1").get("value") === registry.byId("band2").get("value"))
                    this.maskFunction(false);
                else
                    this.maskFunction(flag);
            }

        },
        detectChange: function () {

            var raster1, raster2, raster2, raster3, args1 = {}, args2 = {}, args = {}, changeDetectionLayer, params;
            var method = registry.byId("method").get("value");
            if (this.map.getLayer("resultLayer")) {
                this.map.getLayer("resultLayer").suspend();
                this.map.removeLayer(this.map.getLayer('resultLayer'));

            }

            var primaryDate = this.layerInfos[this.primaryLayer.id].value.primary.value;
            var secondaryDate = this.layerInfos[this.primaryLayer.id].value.comparison.value;

            if (method === "difference") {
                raster1 = new RasterFunction();
                raster1.functionName = "Grayscale";
                args1.Raster = "$" + this.primaryLayer.mosaicRule.lockRasterIds[0];
                args1.ConversionParameters = this.conversionparameters;
                raster1.functionArguments = args1;

                raster2 = new RasterFunction();
                raster2.functionName = "Grayscale";
                args2.Raster = "$" + this.secondaryLayer.mosaicRule.lockRasterIds[0];
                args2.ConversionParameters = this.conversionparameters;
                raster2.functionArguments = args2;

                raster3 = new RasterFunction();
                raster3.functionName = "Arithmetic";
                raster3.outputPixelType = "F32";
                if (primaryDate > secondaryDate && this.imageFieldType === "esriFieldTypeDate") {
                    args.Raster = raster1;
                    args.Raster2 = raster2;
                } else {
                    args.Raster = raster2;
                    args.Raster2 = raster1;
                }
                args.Operation = "2";
                args.ExtentType = 0;
                args.CellsizeType = 1;
                raster3.functionArguments = args;

                var raster4 = new RasterFunction();
                raster4.functionName = "Stretch";
                raster4.outputPixelType = "U8";
                var args4 = {};
                args4.StretchType = 6;
                args4.MinPercent = 2.0;
                args4.MaxPercent = 2.0;
                args4.Gamma = [1.25, 1.25, 1.25];
                args4.DRA = true;
                args4.Min = 0;
                args4.Max = 255;
                args4.Raster = raster3;
                raster4.functionArguments = args4;
                raster3 = raster4;
            } else {
                var changeMode = registry.byId("changeModeList").get("value");
                var band1 = "B" + (Math.abs(parseInt(registry.byId("band1").get("value"))));
                var band2 = "B" + (Math.abs(parseInt(registry.byId("band2").get("value"))));
                var value1 = this.max1 - this.min1;
                var value2 = this.max2 - this.min2;


                if (method !== "savi") {
                    var indexFormula = "((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + this.min2 + "-" + band2 + ")))/((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + band2 + "-" + this.min2 + ")))";
                } else {
                    var indexFormula = "1.5 * ((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + this.min2 + "-" + band2 + ")))/((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + band2 + "-" + this.min2 + "))+(0.5*" + value1 + "*" + value2 + "))";
                }

                raster1 = new RasterFunction();
                raster1.functionName = "BandArithmetic";
                args1.Method = 0;
                args1.Raster = "$" + this.primaryLayer.mosaicRule.lockRasterIds[0];
                args1.BandIndexes = indexFormula;
                raster1.functionArguments = args1;
                raster1.outputPixelType = "F32";

                raster2 = new RasterFunction();
                raster2.functionName = "BandArithmetic";
                args2.Method = 0;
                args2.Raster = "$" + this.secondaryLayer.mosaicRule.lockRasterIds[0];
                args2.BandIndexes = indexFormula;
                raster2.functionArguments = args2;
                raster2.outputPixelType = "F32";

                if (changeMode === "image") {
                    raster3 = new RasterFunction();
                    raster3.functionName = "CompositeBand";
                    raster3.outputPixelType = "F32";
                    if (this.imageFieldType === "esriFieldTypeDate" && primaryDate > secondaryDate)
                        args.Rasters = [raster2, raster1, raster2];
                    else
                        args.Rasters = [raster1, raster2, raster1];
                    raster3.functionArguments = args;

                    var stretch = new RasterFunction();
                    stretch.functionName = "Stretch";
                    stretch.outputPixelType = "U8";
                    var stretchArg = {};
                    stretchArg.StretchType = 3;
                    stretchArg.NumberOfStandardDeviations = 3;
                    stretchArg.DRA = true;
                    stretchArg.Min = 0;
                    stretchArg.Max = 255;
                    stretchArg.Raster = raster3;
                    stretch.functionArguments = stretchArg;
                    raster3 = stretch;
                } else if (changeMode === "mask") {
                    var raster3 = new RasterFunction();
                    var arithmeticArg = {};
                    raster3.functionName = "Arithmetic";
                    if (this.imageFieldType === "esriFieldTypeDate" && primaryDate > secondaryDate) {
                        arithmeticArg.Raster = raster1;
                        arithmeticArg.Raster2 = raster2;
                    } else
                    {
                        arithmeticArg.Raster = raster2;
                        arithmeticArg.Raster2 = raster1;
                    }
                    arithmeticArg.Operation = 2;
                    arithmeticArg.ExtentType = 1;
                    arithmeticArg.CellsizeType = 0;
                    raster3.outputPixelType = "F32";
                    raster3.functionArguments = arithmeticArg;

                } else {
                    var raster3 = new RasterFunction();
                    var compositeArg = {};
                    raster3.functionName = "CompositeBand";
                    if (this.imageFieldType === "esriFieldTypeDate" && primaryDate > secondaryDate)
                        compositeArg.Rasters = [raster2, raster1];
                    else
                        compositeArg.Rasters = [raster1, raster2];
                    raster3.outputPixelType = "F32";
                    raster3.functionArguments = compositeArg;
                }
            }


            var query = new Query();
            query.where = "(OBJECTID = " + this.primaryLayer.mosaicRule.lockRasterIds[0] + ") OR (OBJECTID = " + this.secondaryLayer.mosaicRule.lockRasterIds[0] + ")";
            query.returnGeometry = true;
            var queryTask = new QueryTask(this.primaryLayer.url);
            queryTask.execute(query, lang.hitch(this, function (result) {

                var intersectGeometry = geometryEngine.intersect(result.features[0].geometry, result.features[1].geometry);
                if (this.polygons) {
                    intersectGeometry = geometryEngine.intersect(intersectGeometry, this.polygons);
                }
                if (intersectGeometry) {
                    intersectGeometry.cache = undefined;
                    var rasterClip = new RasterFunction();
                    rasterClip.functionName = "Clip";
                    // rasterClip.outputPixelType = "U8";
                    var clipArguments = {};
                    clipArguments.ClippingGeometry = intersectGeometry;
                    clipArguments.ClippingType = 1;
                    clipArguments.Raster = raster3;
                    rasterClip.functionArguments = clipArguments;
                    raster3 = rasterClip;
                }


                params = new ImageServiceParameters();
                params.renderingRule = raster3;
                if (changeMode === "image" || method === "difference") {
                    changeDetectionLayer = new ArcGISImageServiceLayer(
                            this.primaryLayer.url,
                            {
                                id: "resultLayer",
                                imageServiceParameters: params
                            });
                } else {
                    this.calculatePixelSize();
                    params.format = "lerc";
                    changeDetectionLayer = new RasterLayer(
                            this.primaryLayer.url,
                            {
                                id: "resultLayer",
                                imageServiceParameters: params,
                                pixelFilter: lang.hitch(this, this.changePixels)
                            });
                    changeDetectionLayer.on("load", lang.hitch(this, function () {
                        changeDetectionLayer.pixelType = "F32";
                    }));
                }
                //this.number++;
                changeDetectionLayer.title = "Change Layer";
                changeDetectionLayer.changeMethod = method;
                changeDetectionLayer.changeMode = changeMode;
                this.map.addLayer(changeDetectionLayer, this.resultLayerIndex);
            }), lang.hitch(this, function () {
                params = new ImageServiceParameters();
                params.renderingRule = raster3;
                if (changeMode === "image" || method === "difference") {
                    changeDetectionLayer = new ArcGISImageServiceLayer(
                            this.primaryLayer.url,
                            {
                                id: "resultLayer",
                                imageServiceParameters: params
                            });
                } else {
                    this.calculatePixelSize();
                    params.format = "lerc";
                    changeDetectionLayer = new RasterLayer(
                            this.primaryLayer.url,
                            {
                                id: "resultLayer",
                                imageServiceParameters: params,
                                pixelFilter: lang.hitch(this, this.changePixels)
                            });
                    changeDetectionLayer.on("load", lang.hitch(this, function () {
                        changeDetectionLayer.pixelType = "F32";
                    }));
                }
                changeDetectionLayer.title = "Change Layer";

                changeDetectionLayer.changeMethod = method;
                changeDetectionLayer.changeMode = changeMode;
                this.map.addLayer(changeDetectionLayer, this.resultLayerIndex);
            }));
        },
        changePixels: function (pixelData) {


            if (pixelData === null || pixelData.pixelBlock === null)
                return;
            var numPixels = pixelData.pixelBlock.width * pixelData.pixelBlock.height;
            if (!pixelData.pixelBlock.mask) {
                pixelData.pixelBlock.mask = new Uint8Array(numPixels);
            }

            if (pixelData.pixelBlock.pixels === null)
                return;
            var pr = new Uint8Array(numPixels);
            var pg = new Uint8Array(numPixels);
            var pb = new Uint8Array(numPixels);
            var areaLeft = 0, areaRight = 0;
            var color = registry.byId("method").get("value") === "burn" ? [255, 69, 0] : [255, 0, 255];
            if (registry.byId("changeModeList").get("value") === "mask") {
                var pixelScene = pixelData.pixelBlock.pixels[0];
                var nodata = (pixelData.pixelBlock.statistics[0] && pixelData.pixelBlock.statistics[0].noDataValue) ? pixelData.pixelBlock.statistics[0].noDataValue : 0;
                var positiveDif = registry.byId("positiveRange").get("value");
                var negativeDif = registry.byId("negativeRange").get("value");

                for (var i = 0; i < numPixels; i++) {

                    if (pixelScene[i] === nodata) {
                        pixelData.pixelBlock.mask[i] = 0;
                    } else if (pixelScene[i] <= negativeDif) {

                        pr[i] = color[0];
                        pg[i] = color[1];
                        pb[i] = color[2];
                        pixelData.pixelBlock.mask[i] = 1;
                        areaLeft++;
                    } else if (pixelScene[i] >= positiveDif) {
                        pr[i] = 0;
                        pg[i] = 252;
                        pb[i] = 0;
                        pixelData.pixelBlock.mask[i] = 1;
                        areaRight++;
                    } else
                        pixelData.pixelBlock.mask[i] = 0;
                }
            } else {
                var pixelScene1 = pixelData.pixelBlock.pixels[0];
                var pixelScene2 = pixelData.pixelBlock.pixels[1];
                var threshold = registry.byId("thresholdValue").get("value");
                var differenceThreshold = registry.byId("differenceValue").get("value");
                var noData1 = (pixelData.pixelBlock.statistics[0] && pixelData.pixelBlock.statistics[0].noDataValue) ? pixelData.pixelBlock.statistics[0].noDataValue : 0;
                var noData2 = (pixelData.pixelBlock.statistics[1] && pixelData.pixelBlock.statistics[1].noDataValue) ? pixelData.pixelBlock.statistics[1].noDataValue : 0;


                for (var i = 0; i < numPixels; i++) {
                    if (pixelScene1[i] === noData1 || pixelScene2[i] === noData2) {
                        pixelData.pixelBlock.mask[i] = 0;
                    } else {
                        if (pixelScene1[i] > 10)
                            pixelScene1[i] = 0;
                        if (pixelScene2[i] > 10)
                            pixelScene2[i] = 0;
                        if (pixelScene1[i] < threshold && pixelScene2[i] > threshold && (pixelScene2[i] - pixelScene1[i]) > differenceThreshold) {
                            pixelData.pixelBlock.mask[i] = 1;
                            pr[i] = 0;
                            pg[i] = 252;
                            pb[i] = 0;
                            areaLeft++;
                        } else if (pixelScene1[i] > threshold && pixelScene2[i] < threshold && (pixelScene1[i] - pixelScene2[i]) > differenceThreshold) {
                            pixelData.pixelBlock.mask[i] = 1;

                            pr[i] = color[0];
                            pg[i] = color[1];
                            pb[i] = color[2];
                            areaRight++;

                        } else
                            pixelData.pixelBlock.mask[i] = 0;
                    }
                }
            }
            html.set(document.getElementById("areaValue"), parseInt((areaLeft * this.pixelSizeX * this.pixelSizeY) / (1000000 * this.scale)) + " " + this.i18n.unit + "<sup>2</sup> <span style='color:black;'>/</span> <span style='color:green;'>" + parseInt((areaRight * this.pixelSizeX * this.pixelSizeY) / (1000000 * this.scale)) + " " + this.i18n.unit + "<sup>2</sup></span>");
            pixelData.pixelBlock.pixels = [pr, pg, pb];
            pixelData.pixelBlock.pixelType = "U8";

        },
        checkMinMax: function (min, max) {
            var temp = min;
            min = max;
            max = temp;
            return [min, max];
        },
        createSlider: function (preserveSliderValue) {
            if (preserveSliderValue && this.maskSlider) {
                var value = this.maskSlider.get("value");
                if (value < this.min)
                    value = this.min;
                else if (value > this.max)
                    value = this.max;
            } else
                value = (this.min + this.max) / 2;
            if (this.maskSlider) {
                this.maskSlider.destroy();
                this.maskSliderRules.destroy();
                this.maskSliderLabels.destroy();
                this.maskSlider = null;
            }
            var sliderNode = domConstruct.create("div", {}, "maskSlider", "first");

            var rulesNode = domConstruct.create("div", {}, sliderNode, "first");
            this.maskSliderRules = new HorizontalRule({
                container: "bottomDecoration",
                count: 11,
                style: "height:5px;"
            }, rulesNode);
            var labels = [];
            if (this.min.toString().indexOf(".") !== -1)
                labels[0] = this.min.toFixed(2);
            else
                labels[0] = this.min;
            if (this.max.toString().indexOf(".") !== -1)
                labels[1] = this.max.toFixed(2);
            else
                labels[1] = this.max;
            var labelsNode = domConstruct.create("div", {}, sliderNode, "second");
            this.maskSliderLabels = new HorizontalRuleLabels({
                container: "bottomDecoration",
                labelStyle: "height:1em;font-size:75%;color:gray;",
                labels: labels
            }, labelsNode);

            this.maskSlider = new HorizontalSlider({
                name: "slider",
                class: registry.byId("method").get("value") === "less" ? "mask-slider-left mask-align" : "mask-slider mask-align",
                value: value,
                minimum: this.min,
                maximum: this.max,
                intermediateChanges: true,
                onChange: lang.hitch(this, this.redrawFunction)
            }, sliderNode);

            this.maskSlider.startup();
            this.maskSliderRules.startup();
            this.maskSliderLabels.startup();
        },
        redrawFunction: function (value) {
            var layer = this.map.getLayer("resultLayer");
            if (layer && layer.maskMethod) {
                layer.maskMethod.value = value;
                layer.redraw();
            }

        },
        maskFunction: function (flag) {
            if (this.map.getLayer("resultLayer")) {
                this.map.getLayer("resultLayer").suspend();
                this.map.removeLayer(this.map.getLayer("resultLayer"));
            }
            var method = registry.byId("method").get("value");
            if (method === "ndvi") {
                this.color = [124, 252, 0];
            } else if (method === "savi") {
                this.color = [218, 165, 32];
            } else if (method === "water") {
                this.color = [64, 164, 223];
            } else if (method === "burn") {
                this.color = [255, 109, 49];
            } else
                this.color = [255, 102, 102];


            if (flag) {
                var band1 = "B" + registry.byId("band1").get("value");
                var band2 = "B" + registry.byId("band2").get("value");
                var value1 = this.max1 - this.min1;
                var value2 = this.max2 - this.min2;
                if (method !== "savi") {
                    var indexFormula = "((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + this.min2 + "-" + band2 + ")))/((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + band2 + "-" + this.min2 + ")))";
                } else {
                    var indexFormula = "1.5 * ((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + this.min2 + "-" + band2 + ")))/((" + value2 + "*(" + band1 + "-" + this.min1 + "))+(" + value1 + "*(" + band2 + "-" + this.min2 + "))+(0.5*" + value1 + "*" + value2 + "))";
                }
                var raster = new RasterFunction();
                raster.functionName = "BandArithmetic";
                raster.outputPixelType = "F32";
                var args = {};
                args.Method = 0;
                args.BandIndexes = indexFormula;
                raster.functionArguments = args;
            } else {
                var raster = new RasterFunction();
                raster.functionName = "ExtractBand";
                var args = {};
                args.BandIDs = [registry.byId("band1").get("value") - 1];
                raster.functionArguments = args;
            }
            if (this.polygons) {
                var rasterClip = new RasterFunction();
                rasterClip.functionName = "Clip";
                var clipArguments = {};
                clipArguments.ClippingGeometry = this.polygons;
                clipArguments.ClippingType = 1;
                clipArguments.Raster = raster;
                rasterClip.functionArguments = clipArguments;
                raster = rasterClip;
            }
            this.calculatePixelSize();

            var params = new ImageServiceParameters();
            params.renderingRule = raster;
            this.createHistogram(params.renderingRule, false).then(lang.hitch(this, function (value) {
                if (value) {

                    if (this.primaryLayer && this.primaryLayer.mosaicRule) {
                        params.mosaicRule = this.primaryLayer.mosaicRule;
                    }
                    params.format = "lerc";

                    var maskLayer = new RasterLayer(this.primaryLayer.url, {
                        imageServiceParameters: params,
                        visible: true,
                        id: "resultLayer",
                        pixelFilter: lang.hitch(this, this.maskPixels)
                    });

                    maskLayer.on("load", lang.hitch(this, function () {
                        if (flag)
                            maskLayer.pixelType = "F32";
                    }));

                    maskLayer.title = "Mask Layer";
                    maskLayer.maskMethod = {method: method, color: this.color, range: [this.min, this.max], value: this.maskSlider.get("value")};
                    this.map.addLayer(maskLayer, this.resultLayerIndex);
                }
            }));
        },
        createHistogram: function (raster, preserveSliderValue) {
            var dfd = new Deferred();
            if (raster.functionName === "Clip") {
                var geometry = raster.functionArguments.ClippingGeometry;
                var type = "esriGeometryPolygon";
            } else {
                var geometry = this.map.extent;
                var type = "esriGeometryEnvelope";
            }

            var request = new esriRequest({
                url: this.primaryLayer.url + "/computehistograms",
                content: {
                    f: "json",
                    geometry: JSON.stringify(geometry.toJson()),
                    geometryType: type,
                    renderingRule: JSON.stringify(raster.toJson()),
                    mosaicRule: this.primaryLayer.mosaicRule ? JSON.stringify(this.primaryLayer.mosaicRule.toJson()) : this.primaryLayer.defaultMosaicRule ? JSON.stringify(this.primaryLayer.defaultMosaicRule.toJson()) : "",
                    pixelSize: '{"x":' + this.pixelSizeX + ', "y":' + this.pixelSizeY + '}'
                },
                handleAs: "json",
                callbackParamName: "callback"
            });
            request.then(lang.hitch(this, function (result) {
                if (result && result.histograms[0]) {
                    this.min = result.histograms[0].min;
                    this.max = result.histograms[0].max;
                    this.createSlider(preserveSliderValue);
                    dfd.resolve(true);
                }
            }), lang.hitch(this, function () {
                dfd.resolve(false);
            }));
            return dfd.promise;
        },
        maskPixels: function (pixelData) {
            if (pixelData === null || pixelData.pixelBlock === null) {
                return;
            }
            if (pixelData && pixelData.pixelBlock && pixelData.pixelBlock.pixels === null)
                return;
            var p1 = pixelData.pixelBlock.pixels[0];
            var pr = new Uint8Array(p1.length);
            var pg = new Uint8Array(p1.length);
            var pb = new Uint8Array(p1.length);

            var area = 0;
            var numPixels = pixelData.pixelBlock.width * pixelData.pixelBlock.height;
            var method = registry.byId("method").get("value");
            var maskRangeValue = parseFloat(this.maskSlider.get("value"));
            if (this.maskSlider) {
                if (!pixelData.pixelBlock.mask) {
                    pixelData.pixelBlock.mask = new Uint8Array(p1.length);
                    var noDataValue = pixelData.pixelBlock.statistics[0].noDataValue;
                    if (method !== "less") {
                        for (var i = 0; i < numPixels; i++) {
                            if (p1[i] >= maskRangeValue && p1[i] !== noDataValue)
                            {
                                pixelData.pixelBlock.mask[i] = 1;
                                pr[i] = this.color[0];
                                pg[i] = this.color[1];
                                pb[i] = this.color[2];
                                area++;
                            } else
                                pixelData.pixelBlock.mask[i] = 0;
                        }
                    } else {
                        for (var i = 0; i < numPixels; i++) {
                            if (p1[i] <= parseFloat(maskRangeValue) && p1[i] !== noDataValue)
                            {
                                pixelData.pixelBlock.mask[i] = 1;
                                pr[i] = this.color[0];
                                pg[i] = this.color[1];
                                pb[i] = this.color[2];
                                area++;
                            } else
                                pixelData.pixelBlock.mask[i] = 0;
                        }
                    }
                } else {
                    var mask = pixelData.pixelBlock.mask;
                    if (method !== "less") {
                        for (var i = 0; i < numPixels; i++) {
                            if (mask[i] === 1 && p1[i] >= maskRangeValue) {
                                pr[i] = this.color[0];
                                pg[i] = this.color[1];
                                pb[i] = this.color[2];
                                area++;
                            } else
                                pixelData.pixelBlock.mask[i] = 0;
                        }
                    } else {
                        for (var i = 0; i < numPixels; i++) {
                            if (mask[i] === 1 && p1[i] <= maskRangeValue)
                            {
                                pr[i] = this.color[0];
                                pg[i] = this.color[1];
                                pb[i] = this.color[2];
                                area++;
                            } else
                                pixelData.pixelBlock.mask[i] = 0;
                        }
                    }
                }
                pixelData.pixelBlock.pixels = [pr, pg, pb];

                pixelData.pixelBlock.pixelType = "U8";
                html.set(document.getElementById("areaValue"), parseInt((area * this.pixelSizeX * this.pixelSizeY) / (1000000 * this.scale)) + " " + this.i18n.unit + "<sup>2</sup>");
            }
        },
        calculatePixelSize: function () {
            var xdistance = this.map.extent.xmax - this.map.extent.xmin;
            var ydistance = this.map.extent.ymax - this.map.extent.ymin;
            this.pixelSizeX = xdistance / this.map.width;
            this.pixelSizeY = ydistance / this.map.height;
            var latitude = ((this.map.extent.getCenter()).getLatitude() * Math.PI) / 180;
            this.scale = Math.pow((1 / Math.cos(latitude)), 2);
        },
        refreshSwipe: function () {
            if (registry.byId("swipeHandler").checked && this.imageMaskTool === "change") {
                if (this.primaryLayer && this.secondaryLayer && this.primaryLayer.mosaicRule && this.secondaryLayer.mosaicRule && this.primaryLayer.mosaicRule.lockRasterIds !== this.secondaryLayer.mosaicRule.lockRasterIds) {
                    if (this.primaryLayer.mosaicRule.lockRasterIds !== this.previousLayerInfo.primary || this.secondaryLayer.mosaicRule.lockRasterIds !== this.previousLayerInfo.secondary || !this.layerSwipe) {
                        if (this.layerSwipe) {
                            this.swipePosition = this.layerSwipe.domNode.children[0].offsetLeft;
                            this.layerSwipe.destroy();
                            this.layerSwipe = null;
                        }
                        domConstruct.place("<div id='swipewidget'></div>", "mapDiv_root", "first");
                        if (!this.swipePosition) {
                            if (registry.byId("primaryImage").checked)
                                this.swipePosition = this.map.width - 40;
                            else
                                this.swipePosition = 40;
                        }
                        this.layerSwipe = new LayerSwipe({
                            type: "vertical",
                            map: this.map,
                            left: this.swipePosition,
                            invertPlacement: false,
                            layers: [this.primaryLayer]
                        }, dom.byId("swipewidget"));
                        this.layerSwipe.startup();
                        this.previousLayerInfo = {primary: this.primaryLayer.mosaicRule.lockRasterIds, secondary: this.secondaryLayer.mosaicRule.lockRasterIds};
                    }
                    domStyle.set("imageMaskSettingsDiv", "display", "block");
                } else {
                    if (this.layerSwipe) {
                        this.layerSwipe.destroy();
                        this.layerSwipe = null;
                        this.previousLayerInfo = {primary: null, secondary: null};
                    }
                    domStyle.set("imageMaskSettingsDiv", "display", "none");
                }
            } else if (this.layerSwipe) {
                this.layerSwipe.destroy();
                this.layerSwipe = null;
                this.previousLayerInfo = {primary: null, secondary: null};
            }
        },
        turningOffSelector: function () {
            domStyle.set("selectorDiv", "display", "none");
            domStyle.set("maskSelector", "display", "none");
            domStyle.set("imageMaskSettingsDiv", "display", "none");
            html.set(document.getElementById("errorDiv"), this.i18n.zoom);
            if (this.primaryLayer && this.defaultMosaicRule) {
                this.primaryLayer.setMosaicRule(this.defaultMosaicRule);
            }
            this.hideSelector = true;
            if (this.secondaryLayer) {
                this.secondaryLayer.suspend();
                this.map.removeLayer(this.secondaryLayer);
                this.secondaryLayer = null;
            }

        },
        moveSwipe: function (value, invertPlacement, layers) {
            if (this.primaryLayer && this.secondaryLayer && this.primaryLayer.mosaicRule && this.secondaryLayer.mosaicRule && this.primaryLayer.mosaicRule.lockRasterIds !== this.secondaryLayer.mosaicRule.lockRasterIds) {
                this.layerSwipe.destroy();
                this.layerSwipe = null;
                domConstruct.place("<div id='swipewidget'></div>", "mapDiv_root", "first");
                this.layerSwipe = new LayerSwipe({
                    type: "vertical",
                    map: this.map,
                    left: value,
                    invertPlacement: invertPlacement,
                    layers: layers
                }, dom.byId("swipewidget"));
                this.layerSwipe.startup();
            }
        },
        clearResultLayer: function () {
            var layer = this.map.getLayer("resultLayer");
            if (layer) {
                layer.suspend();
                if (layer.maskMethod && this.maskSlider) {
                    this.maskSlider.destroy();
                    this.maskSliderRules.destroy();
                    this.maskSliderLabels.destroy();
                }

                this.map.removeLayer(layer);
            }
            domStyle.set("transparencySlider", "display", "none");
            html.set(document.getElementById("areaValue"), "");
            registry.byId("aoiExtent").set("checked", false);
},
        addGraphic: function (object) {
            var symbol = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([200, 0, 0]), 2);
            var graphic = new Graphic(object.geometry, symbol, {maskWidget: true});
            this.map.graphics.add(graphic);
            if (this.polygons)
                this.polygons.addRing(object.geometry.rings[0]);
            else
                this.polygons = object.geometry;
        },
        removeGraphic: function () {
            var temp;
            for (var k = this.map.graphics.graphics.length - 1; k >= 0; k--) {
                temp = this.map.graphics.graphics[k];
                if (temp.geometry && temp.geometry.type === "polygon" && temp.attributes && temp.attributes.maskWidget) {
                    this.map.graphics.remove(this.map.graphics.graphics[k]);
                }
            }
        },
        showLoading: function () {
            domStyle.set("loadingImageMask", "display", "block");
        },
        hideLoading: function () {
            domStyle.set("loadingImageMask", "display", "none");
        }
    });
});