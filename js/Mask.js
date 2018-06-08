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
    "dojo/dom-style", "esri/layers/RasterLayer",
    "esri/layers/ImageServiceParameters",
    "esri/tasks/ImageServiceIdentifyTask",
    "esri/tasks/ImageServiceIdentifyParameters", "esri/geometry/geometryEngine",
    "dijit/popup", "esri/Color", "esri/toolbars/draw", "esri/graphic", "esri/symbols/SimpleLineSymbol",
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
        Query, QueryTask, Extent, locale, html, domConstruct, HorizontalSlider, HorizontalRule, HorizontalRuleLabels, RasterFunction, mathUtils, domStyle, RasterLayer, ImageServiceParameters, ImageServiceIdentifyTask, ImageServiceIdentifyParameters, geometryEngine, popup, Color, Draw, Graphic, SimpleLineSymbol, esriRequest, Tooltip) {

    return declare("application.Mask", [Evented], {
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
        orderedDates: null,
        sliderRules: null,
        sliderLabels: null,
        slider: null,
        featureIds: [],
        defaultMosaicRule: null,
        mapZoomFactor: 2.0,
        mapWidthPanFactor: 0.75,
        postCreate: function () {
            this.layerInfos = this.layers;
            /*window.addEventListener("resize", lang.hitch(this, function(){
             var clientHeight = document.getElementById("imageMaskNode").children[1].clientHeight;
             if(clientHeight){
             domStyle.set(document.getElementById("imageMaskNode").children[1],"height",clientHeight+"px");
             }
             }));*/

            registry.byId("imageSelectorMask").on("change", lang.hitch(this, this.setFilter));
            registry.byId("dropDownImageListMask").on("click", lang.hitch(this, this.imageDisplayFormat));
            registry.byId("imageSelectorDropDownMask").on("change", lang.hitch(this, this.sliderDropDownSelection, "dropDown"));
            registry.byId("methodMask").on("change", lang.hitch(this, this.setMethod));
            registry.byId("maskApply").on("click", lang.hitch(this, this.getMinMaxCheck));
            registry.byId("maskClear").on("click", lang.hitch(this, this.clearResultLayer));
            
            this.setTooltips();
            if (this.config.display === "both") {

                domStyle.set("imageSelectContainerMask", "display", "inline-block");
            } else {
                if (this.config.display === "dropdown")
                    this.imageDisplayFormat();
                domStyle.set("imageSelectContainerMask", "display", "none");
            }


            for (var a in this.map.layerIds) {
                var layer = this.map.getLayer(this.map.layerIds[a]);
                if ((layer.type && layer.type === 'ArcGISImageServiceLayer') || (layer.serviceDataType && layer.serviceDataType.substr(0, 16) === "esriImageService")) {
                    this.resultLayerIndex = a + 1;
                }
            }


            this.main.resizeTemplate();
            registry.byId("colorPalette").on("change", lang.hitch(this, function (value) {

                this.color = (new Color(value)).toRgb();

                var layer = this.map.getLayer("resultLayer");
                if (layer && layer.maskMethod) {
                    layer.maskMethod.color = this.color;
                    layer.redraw();
                }
                domStyle.set("areaValueMask", "color", "rgb(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ")");
                popup.close(registry.byId("colorDialog"));
            }));
            registry.byId("aoiExtentMask").on("change", lang.hitch(this, function (value) {
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
            registry.byId("refreshImageSliderBtnMask").on("click", lang.hitch(this, this.imageSliderRefresh));
            registry.byId("maskModeList").on("change", lang.hitch(this, function (value) {
                var layer = this.map.getLayer("resultLayer");
                if (layer && layer.maskMethod) {
                    this.createSlider(true);
                    layer.redraw();
                    layer.maskMethod.mode = value;
                }
            }));
            this.populateMethods();
            document.getElementById("advanceIndexBtnMask").addEventListener("click", lang.hitch(this, this.expandMenu));
            this.toolbar = new Draw(this.map);
            this.toolbar.on("draw-complete", lang.hitch(this, this.addGraphic));
        },
        expandMenu: function () {
                    var node = document.getElementById("advanceIndexBtnMask").children[1];
                    if (domClass.contains(node, "launchpad-icon-arrow-right")) {
                        domClass.remove(node, "launchpad-icon-arrow-right");
                        domClass.add(node, "launchpad-icon-arrow-down");
                        domStyle.set("bandInputsMask", "display", "block");
                    } else {
                        domStyle.set("bandInputsMask", "display", "none");
                        domClass.remove(node, "launchpad-icon-arrow-down");
                        domClass.add(node, "launchpad-icon-arrow-right");
                    }
                },
        setFilter: function (value) {
            if (value) {
                this.imageSliderRefresh();
                domStyle.set("selectorDivMask", "display", "block");
            } else {
                domStyle.set("selectorDivMask", "display", "none");
                this.imageSliderHide();

                if (this.primaryLayer) {
                    this.layerInfos[this.primaryLayer.id].imageSelector = false;
                    if (this.defaultMosaicRule)
                        this.primaryLayer.setMosaicRule(this.defaultMosaicRule);
                }
                // this.hideSelector = true;

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
        populateMethods: function (currentValue) {
            registry.byId("methodMask").removeOption(registry.byId("methodMask").getOptions());
            if (this.config.changeMethods.veg) {
                registry.byId("methodMask").addOption({label: this.i18n.method2, value: "ndvi"});
            }
            if (this.config.changeMethods.savi) {
                registry.byId("methodMask").addOption({label: this.i18n.method3, value: "savi"});
            }
            if (this.config.changeMethods.water) {
                registry.byId("methodMask").addOption({label: this.i18n.method4, value: "water"});
            }
            if (this.config.changeMethods.burn) {
                registry.byId("methodMask").addOption({label: this.i18n.method5, value: "burn"});
            }

            registry.byId("methodMask").addOption({label: this.i18n.method8, value: "one"});
        },
        setCurrentMethod: function(currentValue){
          if (currentValue !== registry.byId("methodMask").get("value")) {
                if (currentValue !== "difference")
                    registry.byId("methodMask").set("value", currentValue);
                else
                    this.setMethod(registry.byId("methodMask").get("value"));
            } else
                this.setMethod(registry.byId("methodMask").get("value"));  
        },
        setTooltips: function () {
            this.switchDisplayTooltip = new Tooltip({
                connectId: ['dropDownImageListMask'],
                position: ['below'],
                label: this.i18n.dropDown
            });
            new Tooltip({
                connectId: ["refreshImageSliderBtnMask"],
                position: ['after', 'below'],
                label: this.i18n.refreshTooltip
            });
            new Tooltip({
                connectId: ["colorButton"],
                position: ['after', 'below'],
                label: this.i18n.colorpickerText
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
                        html.set(document.getElementById("errorDivMask"), "");

                        domStyle.set("maskSelector", "display", "block");
                        if (this.layerInfos[this.primaryLayer.id].imageSelector) {
                            if (!registry.byId("imageSelectorMask").checked)
                                registry.byId("imageSelectorMask").set("checked", true);
                            else
                                this.setFilter(true);
                        } else {
                            if (registry.byId("imageSelectorMask").checked)
                                registry.byId("imageSelectorMask").set("checked", false);
                            else
                                this.setFilter(false);
                        }


                    } else {
                        if (!this.layerInfos[this.primaryLayer.id].imageField) {
                            html.set(document.getElementById("errorDivMask"), this.i18n.error1);
                        } else if (!this.layerInfos[this.primaryLayer.id].objectID) {
                            html.set(document.getElementById("errorDivMask"), this.i18n.error2);
                        } else {
                            html.set(document.getElementById("errorDivMask"), this.i18n.error3);
                        }
                        domStyle.set("selectorDivMask", "display", "none");
                        domStyle.set("maskSelector", "display", "none");

                    }
                } else {
                    this.turningOffSelector();

                }
            } else {
                domStyle.set("selectorDivMask", "display", "none");
                domStyle.set("maskSelectorMask", "display", "none");
                domStyle.set("maskDiv", "display", "none");
                html.set(document.getElementById("errorDivMask"), this.i18n.error5);
            }
        },
        mapExtentChange: function (evt) {

            if (this.map.getLayer("resultLayer") && this.map.getLayer("resultLayer").maskMethod) {
                if (this.maskExtent && !geometryEngine.intersects(this.maskExtent, this.map.extent))
                    this.clearResultLayer();
                else {
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
            }
            if (evt.lod.level >= this.config.zoomLevel) {
                if (this.hideSelector) {
                    this.hideSelector = false;
                    html.set(document.getElementById("errorDivMask"), "");
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
                    if (registry.byId("imageSelectorMask").checked)
                        this.imageSliderRefresh();

                }

            } else {
                this.turningOffSelector();
            }
            this.previousExtentChangeLevel = evt.lod.level;
        },
        imageDisplayFormat: function () {
            if (domClass.contains(registry.byId("dropDownImageListMask").domNode, "dropDownSelected")) {

                domClass.remove(registry.byId("dropDownImageListMask").domNode, "dropDownSelected");
                this.switchDisplayTooltip.set("label", this.i18n.dropDown);
                document.getElementById("switchDisplayImageMask").src = "images/dropdownlist.png";
            } else {
                domClass.add(registry.byId("dropDownImageListMask").domNode, "dropDownSelected");
                this.switchDisplayTooltip.set("label", this.i18n.slider);
                document.getElementById("switchDisplayImageMask").src = "images/slider.png";
            }
            this.imageDisplayFormat2();
        },
        imageDisplayFormat2: function () {
            if (!domClass.contains(registry.byId("dropDownImageListMask").domNode, "dropDownSelected")) {
                domStyle.set(document.getElementById("imageRange"), "display", "inline-block");
                domStyle.set("dropDownOptionMask", "display", "none");
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
                domStyle.set("dropDownOptionMask", "display", "inline-block");
            }
        },
        onClose: function () {
            registry.byId("aoiExtentMask").set("checked", false);
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

                        }
                        this.featureLength = this.orderedDates.length;
                        this.imageSliderHide();
                        var sliderNode = domConstruct.create("div", {}, "imageSliderDivMask", "first");

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
                        registry.byId("imageSelectorDropDownMask").removeOption(registry.byId("imageSelectorDropDownMask").getOptions());

                        for (var v = this.orderedDates.length - 1; v >= 0; v--) {
                            registry.byId("imageSelectorDropDownMask").addOption({label: (this.imageFieldType === "esriFieldTypeDate" ? locale.format(new Date(this.orderedDates[v].value), {selector: "date", formatLength: "long"}) : this.orderedDates[v].value.toString()), value: "" + v + ""});
                        }

                        if (this.layerInfos[this.primaryLayer.id].mask) {
                            var index = null;
                            for (var i in this.orderedDates) {
                                if (this.orderedDates[i].value === this.layerInfos[this.primaryLayer.id].mask.value) {
                                    var index = i;
                                    break;
                                } else if (this.orderedDates[i].value <= this.layerInfos[this.primaryLayer.id].mask.value) {
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
                        html.set(document.getElementById("errorDivMask"), this.i18n.error6);
                        domStyle.set("selectorDivMask", "display", "none");
                        html.set(document.getElementById("imageRange"), "");
                        this.hideLoading();
                    }
                }));

            }
        },
        setSliderValue: function (index) {
            this.imageDisplayFormat2();
            registry.byId("imageSelectorDropDownMask").set("value", index);
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
            if (!domClass.contains(registry.byId("dropDownImageListMask").domNode, "dropDownSelected") && value === "slider") {
                this.valueSelected = this.slider.get("value");
                registry.byId("imageSelectorDropDownMask").set("value", this.valueSelected);
                this.sliderChange();
            } else if (domClass.contains(registry.byId("dropDownImageListMask").domNode, "dropDownSelected") && value === "dropDown") {
                this.valueSelected = registry.byId("imageSelectorDropDownMask").get("value");
                this.slider.set("value", this.valueSelected);
                this.sliderChange();
            }
        },
        sliderChange: function () {
            if (this.valueSelected || this.valueSelected === 0) {
                var aqDate = this.orderedDates[this.valueSelected].value;
                var featureSelect = [];
                this.featureIds = [];

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


                if (this.imageFieldType !== "esriFieldTypeDate")
                    html.set(document.getElementById("imageRange"), this.imageField + ": <b>" + aqDate + "</b>");
                else
                    html.set(document.getElementById("imageRange"), this.i18n.date + ": <b>" + locale.format(new Date(aqDate), {selector: "date", formatLength: "long"}) + "</b>");

                var mr = new MosaicRule();
                mr.method = MosaicRule.METHOD_LOCKRASTER;
                mr.ascending = true;
                mr.operation = "MT_FIRST";
                mr.lockRasterIds = this.featureIds;
                this.primaryLayer.setMosaicRule(mr);
            }
        },
        imageSliderRefresh: function () {
            if (this.slider) {
                this.imageSliderHide();
            }
            this.imageSliderShow();

        },
        populateBands: function () {
            this.bandNames = [];
            registry.byId("band1Mask").removeOption(registry.byId("band1Mask").getOptions());
            registry.byId("band2Mask").removeOption(registry.byId("band2Mask").getOptions());
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
                registry.byId("band1Mask").addOption({label: this.bandNames[a], value: (parseInt(a) + 1)});
                registry.byId("band2Mask").addOption({label: this.bandNames[a], value: (parseInt(a) + 1)});
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
            this.setMethod(registry.byId("methodMask").get("value"));
        },
        setMethod: function (value) {
            if (value === "ndvi" || value === "savi") {
                document.getElementById("bandName1Mask").innerHTML = this.i18n.nir + ":";
                document.getElementById("bandName2Mask").innerHTML = this.i18n.red + ":";
            } else if (value === "water") {
                document.getElementById("bandName1Mask").innerHTML = this.i18n.green + ":";
                document.getElementById("bandName2Mask").innerHTML = this.i18n.swir + ":";
            } else if (value === "burn") {
                document.getElementById("bandName1Mask").innerHTML = this.i18n.nir + ":";
                document.getElementById("bandName2Mask").innerHTML = this.i18n.swir + ":";
            } else {
                document.getElementById("bandName1Mask").innerHTML = this.i18n.band1 + ":";
                document.getElementById("bandName2Mask").innerHTML = this.i18n.band2 + ":";
            }
            if (value === "one")
                domStyle.set("bandRowTable", "display", "none");
            else
                domStyle.set("bandRowTable", "display", "table-row");
            this.setBands(value);
        },
        setBands: function (value) {
            if ((value === "ndvi" || value === "savi") && this.initialVal_red && this.initialVal_nir)
            {
                registry.byId("band1Mask").set("value", this.initialVal_nir);
                registry.byId("band2Mask").set("value", this.initialVal_red);
            } else if (value === "water" && this.initialVal_green && this.initialVal_swir) {
                registry.byId("band1Mask").set("value", this.initialVal_green);
                registry.byId("band2Mask").set("value", this.initialVal_swir);
            } else if (value === "burn" && this.initialVal_nir && this.initialVal_swir) {
                registry.byId("band1Mask").set("value", this.initialVal_nir);
                registry.byId("band2Mask").set("value", this.initialVal_swir);
            } else {
                registry.byId("band1Mask").set("value", "1");
                registry.byId("band2Mask").set("value", "2");
            }
        },
        getMinMaxCheck: function () {
            this.showLoading();
            this.clearResultLayer(true);
            var method = registry.byId("methodMask").get("value");
            if (method !== "one") {
                var request = new esriRequest({
                    url: this.primaryLayer.url,
                    content: {
                        f: "json"
                    },
                    handleAs: "json",
                    callbackParamName: "callback"
                });
                request.then(lang.hitch(this, function (prop) {
                    var band1Index = Math.abs(parseInt(registry.byId("band1Mask").get("value")));
                    var band2Index = Math.abs(parseInt(registry.byId("band2Mask").get("value")));

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
            if (registry.byId("band1Mask").get("value") === registry.byId("band2Mask").get("value"))
                this.maskFunction(false);
            else
                this.maskFunction(flag);
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
            document.getElementById("sliderCurrentValue").innerHTML = value.toFixed(2);
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
                class: registry.byId("maskModeList").get("value") === "less" ? "mask-slider-left mask-align" : "mask-slider mask-align",
                value: value,
                minimum: this.min,
                maximum: this.max,
                intermediateChanges: true,
                onChange: lang.hitch(this, this.redrawFunction)
            }, sliderNode);

            this.maskSlider.startup();
            this.maskSliderRules.startup();
            this.maskSliderLabels.startup();
            domStyle.set("maskSettingsDiv", "display", "block");
        },
        redrawFunction: function (value) {
            var layer = this.map.getLayer("resultLayer");
            if (layer && layer.maskMethod) {
                layer.maskMethod.value = value;
                layer.redraw();
            }

        },
        maskFunction: function (flag) {
            var previousMethod = registry.byId("methodMask").get("value");
            if (this.map.getLayer("resultLayer")) {
                var layer = this.map.getLayer("resultLayer");
                if (layer.maskMethod)
                    previousMethod = layer.maskMethod.method;
                layer.suspend();
                this.map.removeLayer(layer);
            }
            var method = registry.byId("methodMask").get("value");
            if (!this.color) {
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
            }

            if (flag) {
                var band1 = "B" + registry.byId("band1Mask").get("value");
                var band2 = "B" + registry.byId("band2Mask").get("value");
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
                args.BandIDs = [registry.byId("band1Mask").get("value") - 1];
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
                this.maskExtent = this.polygons;
            } else
                this.maskExtent = null;
            this.calculatePixelSize();

            var params = new ImageServiceParameters();
            params.renderingRule = raster;
            this.createHistogram(params.renderingRule, previousMethod === method ? true : false).then(lang.hitch(this, function (value) {
                if (value) {

                    if (this.primaryLayer && this.primaryLayer.mosaicRule) {
                        params.mosaicRule = this.primaryLayer.mosaicRule;
                    }
                    if (params.mosaicRule && params.mosaicRule.method === "esriMosaicLockRaster") {
                        if (!this.maskExtent)
                            this.maskExtent = this.map.extent;
                        this.currentScene = params.mosaicRule.lockRasterIds;
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
                    maskLayer.maskMethod = {method: method, color: this.color, range: [this.min, this.max], value: this.maskSlider.get("value"), mode: registry.byId("maskModeList").get("value")};
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
            var method = registry.byId("methodMask").get("value");
            var mode = registry.byId("maskModeList").get("value");

            if (this.maskSlider) {
                var maskRangeValue = parseFloat(this.maskSlider.get("value"));
                if (!pixelData.pixelBlock.mask) {
                    pixelData.pixelBlock.mask = new Uint8Array(p1.length);
                    var noDataValue = pixelData.pixelBlock.statistics[0].noDataValue;
                    if (mode !== "less") {
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
                    if (mode !== "less") {
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
                document.getElementById("sliderCurrentValue").innerHTML = maskRangeValue.toFixed(2);
                domStyle.set("areaValueMask", "color", "rgb(" + this.color[0] + "," + this.color[1] + "," + this.color[2] + ")");
                html.set(document.getElementById("areaValueMask"), parseInt((area * this.pixelSizeX * this.pixelSizeY) / (1000000 * this.scale)) + " " + this.i18n.unit + "<sup>2</sup>");
                domStyle.set("areaValueContainerMask", "display", "block");
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
        turningOffSelector: function () {
            domStyle.set("selectorDivMask", "display", "none");
            domStyle.set("maskSelector", "display", "none");

            html.set(document.getElementById("errorDivMask"), this.i18n.zoom);
            if (this.primaryLayer && this.defaultMosaicRule) {
                this.primaryLayer.setMosaicRule(this.defaultMosaicRule);
            }
            this.hideSelector = true;
        },
        clearResultLayer: function (value) {
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
            domStyle.set("areaValueContainerMask", "display", "none");
            domStyle.set("maskSettingsDiv", "display", "none");
            html.set(document.getElementById("areaValueMask"), "");
            this.maskExtent = null;
            if (!value)
                registry.byId("aoiExtentMask").set("checked", false);
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