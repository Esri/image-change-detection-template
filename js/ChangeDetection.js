///////////////////////////////////////////////////////////////////////////
// Copyright (c) 2017 Esri. All Rights Reserved.
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
    "dijit/registry",
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
    "esri/geometry/Polygon",
    "esri/geometry/Point",
    "esri/request", "dijit/Tooltip",
    "dijit/form/Select",
    "dijit/form/Button",
    "dijit/form/NumberSpinner",
    "dijit/form/CheckBox",
    "dijit/form/TextBox",
    "dijit/form/DropDownButton",
    "dijit/TooltipDialog",
], function (declare, lang, Evented, registry,
        html,
        domClass,
        dom,
        MosaicRule,
        Query, QueryTask, Extent, locale, html, domConstruct, HorizontalSlider, HorizontalRule, HorizontalRuleLabels, RasterFunction, mathUtils, domStyle, LayerSwipe, ArcGISImageServiceLayer, RasterLayer, ImageServiceParameters, ImageServiceIdentifyTask, ImageServiceIdentifyParameters, geometryEngine, Polygon, Point, esriRequest, Tooltip) {

    return declare("application.ChangeDetection", [Evented], {
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
            domConstruct.place('<img id="loadingChangeDetection" style="position: absolute;top:0;bottom: 0;left: 0;right: 0;margin:auto;z-index:100;" src="images/loading.gif">', "changeDetectionNode");
            domStyle.set("loadingChangeDetection", "display", "none");
            this.layerInfos = this.layers;
            window.addEventListener("resize", lang.hitch(this, this.resizeSlider));
            registry.byId("dropDownImageList").on("click", lang.hitch(this, this.imageDisplayFormat));
            registry.byId("imageSelectorDropDown").on("change", lang.hitch(this, this.sliderDropDownSelection, "dropDown"));
            registry.byId("layerSelector").on("change", lang.hitch(this, this.selectLayer));
            registry.byId("primaryImage").on("click", lang.hitch(this, function () {
                if (this.layerSwipe) {
                    this.moveSwipe(this.map.width - 5, this.layerSwipe.invertPlacement, this.layerSwipe.layers);
                }
                this.setCurrentImage("primary");
            }));
            registry.byId("comparisonImage").on("click", lang.hitch(this, function () {
                if (this.layerSwipe) {
                    this.moveSwipe(5, this.layerSwipe.invertPlacement, this.layerSwipe.layers);
                }
                this.setCurrentImage("comparison");
            }));
            registry.byId("method").on("change", lang.hitch(this, this.setChangeMethod));
            registry.byId("changeDetectionApply").on("click", lang.hitch(this, this.getMinMaxCheck));
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
            registry.byId("changeDetectionClear").on("click", lang.hitch(this, function () {
                if (this.map.getLayer("resultLayer")) {
                    this.map.getLayer("resultLayer").suspend();
                    this.map.removeLayer(this.map.getLayer('resultLayer'));

                }
                domStyle.set("transparencySlider", "display", "none");

            }));
            registry.byId("band1").on("change", lang.hitch(this, function (value) {
                if (value === registry.byId("band2").get("value"))
                    registry.byId("changeDetectionApply").set("disabled", true);
                else
                    registry.byId("changeDetectionApply").set("disabled", false);
            }));
            registry.byId("band2").on("change", lang.hitch(this, function (value) {
                if (value === registry.byId("band1").get("value"))
                    registry.byId("changeDetectionApply").set("disabled", true);
                else
                    registry.byId("changeDetectionApply").set("disabled", false);
            }));
            registry.byId("changeModeList").on("change", lang.hitch(this, function (value) {
                if (value === "mask") {
                    domStyle.set("maskRangeSpinners", "display", "block");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                } else if (value === "threshold") {
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "block");
                } else {
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                }
            }));
            this.fillLayerSelector();
            this.populateChangeMethods();
            if (this.map) {


                this.map.on("extent-change", lang.hitch(this, this.mapExtentChange));
                this.map.on("update-start", lang.hitch(this, this.showLoading));
                this.map.on("update-end", lang.hitch(this, this.hideLoading));
                this.map.on("update-end", lang.hitch(this, this.refreshSwipe));
                this.map.on("layer-add", lang.hitch(this, function (response) {
                    if (response.layer.id === "resultLayer") {
                        domStyle.set("transparencySlider", "display", "block");
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
                layer = this.map.getLayer(this.map.layerIds[a]);
                if ((layer.type && layer.type === 'ArcGISImageServiceLayer') || (layer.serviceDataType && layer.serviceDataType.substr(0, 16) === "esriImageService")) {
                    if (!this.secondaryLayerIndex)
                        this.secondaryLayerIndex = a;
                    this.resultLayerIndex = a + 1;
                }
            }

            if (this.config.defaultLayer)
                registry.byId("layerSelector").set("value", this.config.defaultLayer);
            this.resizeSlider();

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
        populateChangeMethods: function () {
            registry.byId("method").removeOption(registry.byId("method").getOptions());
            if (this.config.changeMethods.difference) {
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
            if (this.map.getLayer("resultLayer")) {
                this.map.getLayer("resultLayer").suspend();
                this.map.removeLayer(this.map.getLayer("resultLayer"));
            }
            this.valueSelected = null;
            this.primaryLayer = this.map.getLayer(value);
            this.primaryLayer.show();
            if (this.layerInfos[value].changeDetection) {
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
                domStyle.set("changeSettingsDiv", "display", "none");
                html.set(document.getElementById("errorDiv"), "");
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
                        domStyle.set("selectorDiv", "display", "block");
                        this.objectID = this.layerInfos[this.primaryLayer.id].objectID;
                        this.categoryField = this.layerInfos[this.primaryLayer.id].category;
                        html.set(document.getElementById("errorDiv"), "");
                        this.imageSliderRefresh();

                    } else {
                        if (!this.layerInfos[this.primaryLayer.id].imageField) {
                            html.set(document.getElementById("errorDiv"), this.i18n.error1);
                        } else if (!this.layerInfos[this.primaryLayer.id].objectID) {
                            html.set(document.getElementById("errorDiv"), this.i18n.error2);
                        } else {
                            html.set(document.getElementById("errorDiv"), this.i18n.error3);
                        }
                        domStyle.set("selectorDiv", "display", "none");
                        domStyle.set("changeSettingsDiv", "display", "none");
                    }
                } else {
                    this.turningOffSelector();

                }
            } else {
                domStyle.set("selectorDiv", "display", "none");
                domStyle.set("changeSettingsDiv", "display", "none");
                html.set(document.getElementById("errorDiv"), this.i18n.error5);
            }
        },
        mapExtentChange: function (evt) {

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

                        if (this.layerInfos[this.primaryLayer.id].value[registry.byId("primaryImage").checked ? "primary" : "comparison"]) {
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
                this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "primary" : "comparison")] = this.orderedDates[this.valueSelected];
                if (!this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "comparison" : "primary")])
                    this.layerInfos[this.primaryLayer.id].value[(registry.byId("primaryImage").checked ? "comparison" : "primary")] = this.orderedDates[this.valueSelected];
                var featureSelect = [];
                this.featureIds = [];
                featureSelect.push(this.orderedFeatures[this.valueSelected]);
                this.featureIds.push(this.orderedFeatures[this.valueSelected].attributes[this.objectID]);
                if (this.imageFieldType !== "esriFieldTypeDate")
                    html.set(document.getElementById("imageRange"), this.imageField + ": <b>" + aqDate + "</b>");
                else
                    html.set(document.getElementById("imageRange"), this.i18n.date + ": <b>" + locale.format(new Date(aqDate), {selector: "date", formatLength: "long"}) + "</b>");

                var mr = new MosaicRule();
                mr.method = MosaicRule.METHOD_LOCKRASTER;
                mr.ascending = true;
                mr.operation = "MT_FIRST";
                mr.lockRasterIds = this.featureIds;
                if (JSON.stringify(this.layerInfos[this.primaryLayer.id].value.primary) === JSON.stringify(this.layerInfos[this.primaryLayer.id].value.comparison)) {
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
            this.setChangeMethod(registry.byId("method").get("value"));
        },
        setChangeMethod: function (value) {
            if (value === "difference") {
                domStyle.set("bandInputs", "display", "none");
                domStyle.set("changeMode", "display", "none");
                domStyle.set("maskRangeSpinners", "display", "none");
                domStyle.set("thresholdRangeSpinners", "display", "none");
            } else {
                if (value === "ndvi" || value === "savi") {
                    document.getElementById("bandName1").innerHTML = this.i18n.nir + ":";
                    document.getElementById("bandName2").innerHTML = this.i18n.red + ":";
                } else if (value === "water") {
                    document.getElementById("bandName1").innerHTML = this.i18n.green + ":";
                    document.getElementById("bandName2").innerHTML = this.i18n.swir + ":";
                } else {
                    document.getElementById("bandName1").innerHTML = this.i18n.nir + ":";
                    document.getElementById("bandName2").innerHTML = this.i18n.swir + ":";
                }
                domStyle.set("changeMode", "display", "block");
                domStyle.set("bandInputs", "display", "block");
                if (registry.byId("changeModeList").get("value") === "mask")
                {
                    domStyle.set("maskRangeSpinners", "display", "block");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                } else if (registry.byId("changeModeList").get("value") === "threshold") {
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "block");
                } else {
                    domStyle.set("maskRangeSpinners", "display", "none");
                    domStyle.set("thresholdRangeSpinners", "display", "none");
                }
                this.setBands(value);
            }
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
            if (method !== "difference") {
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
                    this.detectChange();
                }), lang.hitch(this, function () {
                    this.min1 = 0;
                    this.max1 = 1;
                    this.min2 = 0;
                    this.max2 = 1;
                    this.detectChange();
                }));
            } else
                this.detectChange();
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
                    params.format = "lerc";
                    changeDetectionLayer = new RasterLayer(
                            this.primaryLayer.url,
                            {
                                id: "resultLayer",
                                imageServiceParameters: params,
                                pixelFilter: lang.hitch(this, this.maskPixels)
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
                    params.format = "lerc";
                    changeDetectionLayer = new RasterLayer(
                            this.primaryLayer.url,
                            {
                                id: "resultLayer",
                                imageServiceParameters: params,
                                pixelFilter: lang.hitch(this, this.maskPixels)
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
        maskPixels: function (pixelData) {


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
                    } else if (pixelScene[i] >= positiveDif) {
                        pr[i] = 0;
                        pg[i] = 252;
                        pb[i] = 0;
                        pixelData.pixelBlock.mask[i] = 1;

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

                        } else if (pixelScene1[i] > threshold && pixelScene2[i] < threshold && (pixelScene1[i] - pixelScene2[i]) > differenceThreshold) {
                            pixelData.pixelBlock.mask[i] = 1;

                            pr[i] = color[0];
                            pg[i] = color[1];
                            pb[i] = color[2];


                        } else
                            pixelData.pixelBlock.mask[i] = 0;
                    }
                }
            }
            pixelData.pixelBlock.pixels = [pr, pg, pb];
            pixelData.pixelBlock.pixelType = "U8";

        },
        checkMinMax: function (min, max) {
            var temp = min;
            min = max;
            max = temp;
            return [min, max];
        },
        refreshSwipe: function () {
            if (this.primaryLayer && this.secondaryLayer && this.primaryLayer.mosaicRule && this.secondaryLayer.mosaicRule && this.primaryLayer.mosaicRule.lockRasterIds !== this.secondaryLayer.mosaicRule.lockRasterIds) {
                if (this.primaryLayer.mosaicRule.lockRasterIds !== this.previousLayerInfo.primary || this.secondaryLayer.mosaicRule.lockRasterIds !== this.previousLayerInfo.secondary) {
                    if (this.layerSwipe) {
                        this.swipePosition = this.layerSwipe.domNode.children[0].offsetLeft;
                        this.layerSwipe.destroy();
                        this.layerSwipe = null;
                    }

                    domConstruct.place("<div id='swipewidget'></div>", "mapDiv_root", "first");
                    if (!this.swipePosition) {
                        if (registry.byId("primaryImage").checked)
                            this.swipePosition = this.map.width - 5;
                        else
                            this.swipePosition = 5;
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
                domStyle.set("changeSettingsDiv", "display", "block");
            } else {
                if (this.layerSwipe) {
                    this.layerSwipe.destroy();
                    this.layerSwipe = null;
                    this.previousLayerInfo = {primary: null, secondary: null};
                }
                domStyle.set("changeSettingsDiv", "display", "none");
            }
        },
        turningOffSelector: function () {
            domStyle.set("selectorDiv", "display", "none");
            domStyle.set("changeSettingsDiv", "display", "none");
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
        showLoading: function () {
            domStyle.set("loadingChangeDetection", "display", "block");
        },
        hideLoading: function () {
            domStyle.set("loadingChangeDetection", "display", "none");
        }
    });
});