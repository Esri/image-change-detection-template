///////////////////////////////////////////////////////////////////////////
// Copyright 2018 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
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
    'dojo/_base/declare', "dojo/Evented",
    'dojo/_base/lang',
    "dojo/date/locale",
    "dojo/html",
    "esri/request","dojo/dom-class","dijit/registry"
],
        function (
                declare, Evented,
                lang,
                locale,
                html,
                esriRequest,domClass, registry) {
            return declare("application.ImageDate", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null,
                        layers: null,
                        prefix: "",
                        i18n: ""
                    };
                    lang.mixin(this, defaults, parameters);
                },
                requestCount: 0,
                primaryLayer: null,
                postCreate: function () {
                    this.layerInfos = this.layers;
                    if (this.map.layerIds) {
                        this.setPrimaryLayer();                      
                        this.map.on("update-end", lang.hitch(this, this.changeDateRange));                     
                    }
                    this.prefix = this.prefix ? this.prefix : this.i18n.label;
                },
                setPrimaryLayer: function () {

                    if (this.map.primaryLayer && this.map.getLayer(this.map.primaryLayer).visible && this.map.getLayer(this.map.primaryLayer).serviceDataType && this.map.getLayer(this.map.primaryLayer).serviceDataType.substr(0, 16) === "esriImageService") {
                        this.primaryLayer = this.map.getLayer(this.map.primaryLayer);
                        if (document.getElementById("swipewidget")) {
                            if (this.map.secondaryLayer && this.map.getLayer(this.map.secondaryLayer).visible && this.map.getLayer(this.map.secondaryLayer).serviceDataType && this.map.getLayer(this.map.secondaryLayer).serviceDataType.substr(0, 16) === "esriImageService") {
                                this.secondaryLayer = this.map.getLayer(this.map.secondaryLayer);
                            } else {
                                this.secondaryLayer = null;
                            }
                        } else {
                            this.secondaryLayer = null;
                        }
                    } else if (this.map.secondaryLayer &&  this.map.getLayer(this.map.secondaryLayer) && this.map.getLayer(this.map.secondaryLayer).visible && this.map.getLayer(this.map.secondaryLayer).serviceDataType && this.map.getLayer(this.map.secondaryLayer).serviceDataType.substr(0, 16) === "esriImageService") {
                        this.secondaryLayer = this.map.getLayer(this.map.secondaryLayer);
                        this.primaryLayer = null;
                    } else {
                        for (var a = this.map.layerIds.length - 1; a >= 0; a--) {
                            var layerObject = this.map.getLayer(this.map.layerIds[a]);
                            var title = layerObject.arcgisProps && layerObject.arcgisProps.title ? layerObject.arcgisProps.title : layerObject.title;
                            if (layerObject && layerObject.visible && layerObject.serviceDataType && layerObject.serviceDataType.substr(0, 16) === "esriImageService" && layerObject.id !== "resultLayer" &&  layerObject.id !== this.map.resultLayer && (!title || ((title).substr(title.length - 2)) !== "__")) {
                                this.primaryLayer = layerObject;
                                break;
                            } else {
                                this.primaryLayer = null;
                            }
                        }
                        if (document.getElementById("swipewidget") && this.primaryLayer) {
                            for (var a = this.map.layerIds.length - 1; a >= 0; a--) {
                                var layerObject = this.map.getLayer(this.map.layerIds[a]);
                                var title = layerObject.arcgisProps && layerObject.arcgisProps.title ? layerObject.arcgisProps.title : layerObject.title;
                                if (layerObject && layerObject.id !== this.primaryLayer.id && layerObject.visible && layerObject.serviceDataType && layerObject.serviceDataType.substr(0, 16) === "esriImageService" && layerObject.id !== "resultLayer" && layerObject.id !== "scatterResultLayer" && layerObject.id !== this.map.resultLayer && (!title || ((title).substr(title.length - 2)) !== "__")) {
                                    this.secondaryLayer = layerObject;
                                    break;
                                } else {
                                    this.secondaryLayer = null;
                                }
                            }
                        } else {
                            this.secondaryLayer = null;
                        }
                    }

                },
                onOpen: function () {
                    if (this.map.layerIds) {
                        this.changeDateRange();
                    }
                },
                clearDateRange: function () {
                    html.set("primaryDate", '');

                },
                primarydate: function ()
                {
                    if (this.dateField) {
                        var layer = this.primaryLayer;
                        var point = this.map.extent.getCenter();
                        var mosaicRule = layer.mosaicRule ? layer.mosaicRule : layer.defaultMosaicRule ? layer.defaultMosaicRule : "";

                   var request = new esriRequest({
                            url: layer.url + "/getSamples",
                            content: {
                                f: "json",
                                geometry: JSON.stringify(point),
                                geometryType: "esriGeometryPoint",
                                returnGeometry: false,
                                mosaicRule: mosaicRule ? JSON.stringify(mosaicRule.toJson()) : mosaicRule,
                                returnFirstValueOnly: true,
                                outFields: this.dateField
                            },
                            handleAs: "json",
                            callbackParamName: "callback"
                        });
                        request.then(lang.hitch(this, function (result) {
                            if (result.samples && result.samples.length > 0) {
                                this.map.primaryDate = result.samples[0].attributes[this.dateField];
                            }
                            else {
                                this.map.primaryDate = null;
                            }
                            this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                        }), lang.hitch(this, function (error) {
                            this.map.primaryDate = null;
                            this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                        }));
                    

                    } else {
                        
                        this.map.primaryDate = null;
                         this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                    }
                },
                secondaryDate: function () {
                    if (this.secondaryDateField) {
                        var point = this.map.extent.getCenter();
                        var mosaicRule = this.secondaryLayer.mosaicRule ? this.secondaryLayer.mosaicRule : this.secondaryLayer.defaultMosaicRule ? this.secondaryLayer.defaultMosaicRule : "";
                   
                        var requestSecondary = new esriRequest({
                            url: this.secondaryLayer.url + "/getSamples",
                            content: {
                                f: "json",
                                geometry: JSON.stringify(point),
                                geometryType: "esriGeometryPoint",
                                returnGeometry: false,
                                mosaicRule: mosaicRule ? JSON.stringify(mosaicRule.toJson()) : mosaicRule,
                                returnFirstValueOnly: true,
                                outFields: this.secondaryDateField
                            },
                            handleAs: "json",
                            callbackParamName: "callback"
                        });
                        requestSecondary.then(lang.hitch(this, function (data) {
                            if (data.samples && data.samples.length > 0)
                                this.map.secondaryDate = data.samples[0].attributes[this.secondaryDateField];
                            else
                                this.map.secondaryDate = null;
                            this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                        }), lang.hitch(this, function () {
                            this.map.secondaryDate = null;
                            this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                        }));
                    
                    } else {
                        this.map.secondaryDate = null;
                        this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                    }
                },
                changeDateRange: function () {
                    this.setPrimaryLayer();
                    if(this.map.secondaryLayer) {
                        this.secondaryLayer = this.map.getLayer(this.map.secondaryLayer);
                    }
                    if (this.primaryLayer && this.primaryLayer.visible) {
                        var label = this.primaryLayer.id;
                        if (this.layerInfos[label]) {
                            this.dateField = this.layerInfos[label].dateField;
                            this.primarydate();
                        } else {
                            this.map.primaryDate = null;
                            this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                        }
                    } else {
                        this.map.primaryDate = null;
                        this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                    }
                    if (this.secondaryLayer && this.secondaryLayer.visible) {
                        var label = this.secondaryLayer.id.split("_ComparisonLayer")[0];
                        if (this.layerInfos[label]) {
                            this.secondaryDateField = this.layerInfos[label].dateField;
                            this.secondaryDate();
                        } else {
                            this.map.secondaryDate = null;
                            this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                        }
                    } else {
                        this.map.secondaryDate = null;
                        this.displayDate(this.map.primaryDate, this.map.secondaryDate);
                    }
                },
                 displayDate: function (primary, secondary) {
                    if (primary || secondary) {
                        if (primary)
                            html.set("primaryDate", this.prefix + ": " + locale.format(new Date(primary), {selector: "date", formatLength: "long"}));
                        else
                            html.set("primaryDate", this.prefix + ": ");
                        if (secondary && (primary!=secondary))
                            html.set("primaryDate", document.getElementById("primaryDate").innerHTML + " vs " + locale.format(new Date(secondary), {selector: "date", formatLength: "long"}));
                    } else
                        html.set("primaryDate", '');
                        if(registry.byId("layerSelector").get("value")=="none") {
                            html.set("primaryDate", '');
                        }
                }

            });


        });