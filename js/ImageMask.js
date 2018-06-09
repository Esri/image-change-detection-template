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
    "dijit/registry",
    "application/ChangeDetection", "application/Mask",
    "dojo/dom-construct",
    "dojo/dom-style",
    "dijit/form/Select",
    "dijit/form/Button",
    "dijit/form/CheckBox"

], function (declare, lang, Evented, registry,
        ChangeDetection, Mask,
        domConstruct, domStyle) {

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
        postCreate: function () {
            domConstruct.place('<img id="loadingImageMask" style="position: absolute;top:0;bottom: 0;left: 0;right: 0;margin:auto;z-index:100;" src="images/loading.gif">', "imageMaskNode");
            domStyle.set("loadingImageMask", "display", "none");
            this.layerInfos = this.layers;

            registry.byId("maskTool").on("change", lang.hitch(this, this.setTool));
            registry.byId("layerSelector").on("change", lang.hitch(this, this.selectLayer));
            registry.byId("resultOpacity").on("change", lang.hitch(this, function (value) {
                if (this.map.getLayer("resultLayer"))
                    this.map.getLayer("resultLayer").setOpacity(1 - value);
            }));
            this.fillLayerSelector();

            if (this.config.tool === "both") {
                domStyle.set("maskToolOptions", "display", "block");
                this.maskFunction = new Mask({map: this.map,
                    config: this.config,
                    layers: this.layerInfos,
                    i18n: this.i18n,
                    main: this.main});
                this.maskFunction.postCreate();
                this.changeFunction = new ChangeDetection({map: this.map,
                    config: this.config,
                    layers: this.layerInfos,
                    i18n: this.i18n,
                    main: this.main});
                this.changeFunction.postCreate();
                this.setTool("mask");
            } else {
                domStyle.set("maskToolOptions", "display", "none");
                if (this.config.tool === "mask") {
                    this.maskFunction = new Mask({map: this.map,
                        config: this.config,
                        layers: this.layerInfos,
                        i18n: this.i18n,
                        main: this.main});
                    this.maskFunction.postCreate();
                    this.setTool(this.config.tool);
                } else {
                    this.changeFunction = new ChangeDetection({map: this.map,
                        config: this.config,
                        layers: this.layerInfos,
                        i18n: this.i18n,
                        main: this.main});
                    this.changeFunction.postCreate();
                    registry.byId("maskTool").set("value", this.config.tool);
                }
            }
            if (this.map) {
                this.map.on("extent-change", lang.hitch(this, this.mapExtentChange));
                this.map.on("update-start", lang.hitch(this, this.showLoading));
                this.map.on("update-end", lang.hitch(this, this.hideLoading));
                this.map.on("layer-add", lang.hitch(this, function (response) {
                    if (response.layer.id === "resultLayer") {
                        registry.byId("aoiExtentMask").set("checked", false);
                        registry.byId("aoiExtentChange").set("checked", false);
                        domStyle.set("transparencySlider", "display", "block");
                        registry.byId("resultOpacity").set("value", 1 - response.layer.opacity);
                        if (this.imageMaskTool === "change") {
                            var mode = registry.byId("changeModeList").get("value");
                            if (mode === "image") {
                                registry.byId("resultOpacity").set("value", 1 - 0.8);
                                domStyle.set("changeSettingsDiv", "display", "none");
                            } else if (mode === "mask") {
                                domStyle.set("changeSettingsDiv", "display", "block");
                                domStyle.set("maskRangeSpinners", "display", "block");
                                domStyle.set("thresholdRangeSpinners", "display", "none");
                            } else {
                                domStyle.set("changeSettingsDiv", "display", "block");
                                domStyle.set("maskRangeSpinners", "display", "none");
                                domStyle.set("thresholdRangeSpinners", "display", "block");
                            }
                        }
                    }
                }));
            }
            if (this.config.defaultLayer)
                registry.byId("layerSelector").set("value", this.config.defaultLayer);
            else
                this.selectLayer(registry.byId("layerSelector").get("value"));
        },
        setTool: function (value) {
            if (this.maskFunction)
                this.maskFunction.clearResultLayer();
            if (this.changeFunction)
                this.changeFunction.clearResultLayer();

            if (value === "mask") {
                if (this.changeFunction && this.changeFunction.secondaryLayer) {
                this.changeFunction.secondaryLayer.suspend();
                this.map.removeLayer(this.changeFunction.secondaryLayer);
                this.changeFunction.secondaryLayer = null;
                registry.byId("swipeHandler").set("checked", false);
            }
                if(this.imageMaskTool === "change" && (!this.maskFunction.primaryLayer || (this.maskFunction.primaryLayer && registry.byId("layerSelector").get("value") !==  this.maskFunction.primaryLayer.id)))
                this.maskFunction.selectLayer(registry.byId("layerSelector").get("value"));
                domStyle.set("changeNode", "display", "none");
                domStyle.set("maskNode", "display", "block");
            } else {
                domStyle.set("maskNode", "display", "none");
                domStyle.set("changeNode", "display", "block");
            
                if(this.imageMaskTool === "mask" && (!this.changeFunction.primaryLayer || (this.changeFunction.primaryLayer && registry.byId("layerSelector").get("value") !==  this.changeFunction.primaryLayer.id)))
                    this.changeFunction.selectLayer(registry.byId("layerSelector").get("value"));
                else {
                if (registry.byId("imageSelectorChange").checked)
                    this.changeFunction.setFilter(true);
                else
                    registry.byId("imageSelectorChange").set("checked", true);
                    }
            }
            this.imageMaskTool = value;
        },
        fillLayerSelector: function () {
            var layer;
            for (var a in this.layerInfos) {
                layer = this.map.getLayer(a);
                registry.byId("layerSelector").addOption({label: this.layerInfos[a].title, value: a});
                this.layerInfos[a].defaultMosaicRule = (layer.mosaicRule || layer.defaultMosaicRule || null);
                this.layerInfos[a].value = {primary: null, secondary: null};
            }
        },
        onOpen: function () {
            if (this.maskFunction)
                this.maskFunction.onOpen();
            if (this.changeFunction)
                this.changeFunction.onOpen();
        },
        selectLayer: function (value) {
            if (this.imageMaskTool === "mask")
                this.maskFunction.selectLayer(value);
            else if (this.imageMaskTool === "change")
                this.changeFunction.selectLayer(value);
        },
        mapExtentChange: function (evt) {
            if (this.imageMaskTool === "mask")
                this.maskFunction.mapExtentChange(evt);
            else if (this.imageMaskTool === "change")
                this.changeFunction.mapExtentChange(evt);
        },
        onClose: function () {
            if (this.maskFunction)
                this.maskFunction.onClose();
            if (this.changeFunction)
                this.changeFunction.onClose();
        },
        showLoading: function () {
            domStyle.set("loadingImageMask", "display", "block");
        },
        hideLoading: function () {
            domStyle.set("loadingImageMask", "display", "none");
        }
    });
});