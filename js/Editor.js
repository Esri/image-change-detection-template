///////////////////////////////////////////////////////////////////////////
// Copyright (c) 2013 Esri. All Rights Reserved.
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
    'dojo/_base/declare', "dojo/Evented", "dojo/_base/array",
    "dojo/on", "dojo/query",
    "esri/dijit/editing/Editor",
    "esri/dijit/editing/TemplatePicker",
    "dojo/_base/lang",
    'dojo/dom-class',
    "dojo/dom-construct",
    "dojo/dom", "esri/renderers/jsonUtils",  'dojo/json',
    "dojo/html", "dijit/focus",
    "dojo/dom-style",
],
        function (
                declare, Evented, array,
                on, query,
                Editor,
                TemplatePicker,
                lang,
                domClass,
                domConstruct,
                dom, rendererJsonUtils,Json, html, focus, domStyle) {
            return declare("application.Editor", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null,
                        itemInfo: null,
                        i18n: null
                    };
                    lang.mixin(this, defaults, parameters);
                },
                layerFields: {},
                timeFormats: ["shortDateShortTime", "shortDateLEShortTime", "shortDateShortTime24", "shortDateLEShortTime24", "shortDateLongTime", "shortDateLELongTime", "shortDateLongTime24", "shortDateLELongTime24"],
                postCreate: function () {
                    domConstruct.place('<img id="loadingEditor" style="position: absolute;top:0;bottom: 0;left: 0;right: 0;margin:auto;z-index:100;" src="images/loading.gif">', "editorContainer");
                    this.hideLoading();
                    this.editableLayers = [], this.templateLayers = [];
                    this._layerInfoParamArrayUseForRervertRenderer  = [];

                    if (this.itemInfo) {
                        array.forEach(this.itemInfo, lang.hitch(this, function (layer) {

                            if (layer.layerObject && layer.layerObject.isEditable()) {
                                this.editableLayers.push({
                                    "featureLayer": layer.layerObject
                                });
                                this.templateLayers.push(layer.layerObject);
                                this.layerFields[layer.layerObject.id] = {date: layer.dateField, height: layer.heightField};
                            }
                        }));

                        array.forEach(this.editableLayers, lang.hitch(this, function (hintLayer) {

                            if (hintLayer.featureLayer && hintLayer.featureLayer.infoTemplate && hintLayer.featureLayer.infoTemplate.info && hintLayer.featureLayer.infoTemplate.info.fieldInfos) {
                                //only display visible fields
                                var fields = hintLayer.featureLayer.infoTemplate.info.fieldInfos;

                                var fieldInfos = [];
                                array.forEach(fields, lang.hitch(this, function (field) {

                                    //add date support
                                    if (field.format && field.format.dateFormat && array.indexOf(this.timeFormats, field.format.dateFormat) > -1) {
                                        field.format = {
                                            time: true
                                        };
                                    }
                                    if (field.visible) {
                                        fieldInfos.push(field);
                                    }
                                }));
                                hintLayer.fieldInfos = fieldInfos;
                            }
                        }));

                    } else {

                        dom.byId("errorEditor").innerHTML = this.i18n.error;
                    }
                },
                createEditor: function () {
                    if (this.editable) {
                        var templatePicker = new TemplatePicker({
                            featureLayers: this.templateLayers,
                            grouping: true,
                            rows: "auto",
                            style: "width: 95%",
                            columns: 3
                        }, domConstruct.create("div"));
                        domConstruct.place(templatePicker.domNode, dom.byId("templateDiv"));
                        templatePicker.startup();
                        domStyle.set(templatePicker.domNode.childNodes[1], "width", "100%");
                        var settings = {
                            map: this.map,
                            templatePicker: templatePicker,
                            layerInfos: this.editableLayers,
                            enableUndoRedo: false,
                            toolbarVisible: false,
                            createOptions: {
                                polylineDrawTools: [Editor.CREATE_TOOL_FREEHAND_POLYLINE, Editor.CREATE_TOOL_POLYLINE],
                                polygonDrawTools: [Editor.CREATE_TOOL_FREEHAND_POLYGON, Editor.CREATE_TOOL_POLYGON, Editor.CREATE_TOOL_ELLIPSE, Editor.CREATE_TOOL_AUTOCOMPLETE,
                                    Editor.CREATE_TOOL_CIRCLE,
                                    Editor.CREATE_TOOL_TRIANGLE,
                                    Editor.CREATE_TOOL_RECTANGLE
                                ]
                            },
                            toolbarOptions: {
                                reshapeVisible: false,
                                mergeVisible: false,
                                cutVisible: false
                            }
                        };
                        this.map.enableSnapping();
                        this.editor = new Editor({
                            id: "featureEditor",
                            settings: settings
                        }, domConstruct.create("div"));
                        domConstruct.place(this.editor.domNode, dom.byId("editorDiv"));
                        this.editor.on("load", lang.hitch(this, function () {

                            query(".templatePicker .dojoxGrid")[0].tabIndex = -1;
                            query(".templatePicker .dojoxGrid")[0].children[3].tabIndex = -1;
                            var nodes = query(".dojoxGridHiddenFocus");
                            for (var a = 0; a < nodes.length; a++) {
                                nodes[a].tabIndex = -1;
                            }
                        }));
                        this.changeToServiceRenderer(settings);
                        this.editor.startup();

                        this.editor.templatePicker.on("selection-change", lang.hitch(this, this.fillDefaultValues));

                          this.editor.templatePicker.update(true);
                    }
                },
                changeToServiceRenderer: function (settings) {
                    array.forEach(settings.layerInfos, function (layerInfo) {
                        if (!layerInfo.featureLayer._json) {
                            return;
                        }
                        var layerRenderer = layerInfo.featureLayer.renderer;
                        //var layerRendererJson = layerRenderer.toJson();
                        var serviceDefJson = Json.parse(layerInfo.featureLayer._json);
                        var serviceRendererJson = serviceDefJson.drawingInfo.renderer;
                        // if (!jimuUtils.isEqual(layerRendererJson, serviceRendererJson)) {
                        layerInfo._layerRenderer = layerRenderer;
                        this._layerInfoParamArrayUseForRervertRenderer.push(layerInfo);
                        layerInfo.featureLayer.setRenderer(rendererJsonUtils.fromJson(serviceRendererJson));
                        layerInfo.featureLayer.redraw();
                        //  }
                    }, this);
                },
                fillDefaultValues: function () {
                    var selected = this.editor.templatePicker.getSelected();
                    if (selected) {
                        var featureLayer = selected.featureLayer;
                        on.once(featureLayer, "before-apply-edits", lang.hitch(this, function (evt) {
                            if (evt.adds[0] && evt.adds.length > 0) {
                                if (this.layerFields[featureLayer.id]) {
                                    if (this.layerFields[featureLayer.id].date)
                                        evt.adds[0].attributes[this.layerFields[featureLayer.id].date] = (this.map.primaryDate ? this.map.primaryDate : this.map.activeDate ? this.map.activeDate : null);
                                    if (this.layerFields[featureLayer.id].height)
                                        evt.adds[0].attributes[this.layerFields[featureLayer.id].height] = this.map.measuredHeight ? this.map.measuredHeight : null;
                                }

                                //  var regex = new RegExp(/[A-Za-z0-9_]*date[A-Za-z0-9_]*/i);
                                //   var heightRegex = new RegExp(/[A-Za-z0-9_]*height[A-Za-z0-9_]*/i);
                                /*   for (var a in evt.adds[0].attributes) {
                                 if (regex.test(a) && !evt.adds[0].attributes[a]) {
                                 evt.adds[0].attributes[a] = (this.map.primaryDate ? this.map.primaryDate : this.map.activeDate ? this.map.activeDate : null);
                                 }
                                 if (heightRegex.test(a) && !evt.adds[0].attributes[a]) {
                                 evt.adds[0].attributes[a] = this.map.measuredHeight ? this.map.measuredHeight : null;
                                 }
                                 }*/
                                this.editor.attributeInspector.refresh();
                            }
                        }));
                    }
                },
                _destroyEditor: function () {
                    if (this.editor) {
                        this.editor.destroy();
                        this.editor = null;
                    }
                },
                onOpen: function () {
                    if (this.editableLayers.length > 0) {
                        this.editable = true;
                        dom.byId("errorEditor").innerHTML = "";
                        this.createEditor();
                        this.map.setInfoWindowOnClick(false);
                    } else {
                        if (dom.byId("errorEditor").innerHTML !== this.i18n.error)
                            dom.byId("errorEditor").innerHTML = this.i18n.error1;


                        this.map.setInfoWindowOnClick(true);
                    }





                },
                onClose: function () {
                    if (this.editor) {
                        this._destroyEditor();
                        this.editor = null;
                    }
                    this.revertToLayerRenderer();
                    this.map.setInfoWindowOnClick(true);
                },
                revertToLayerRenderer: function () {
                    array.forEach(this._layerInfoParamArrayUseForRervertRenderer, function (layerInfo) {
                        if (layerInfo._layerRenderer) {
                            layerInfo.featureLayer.setRenderer(layerInfo._layerRenderer);
                            layerInfo.featureLayer.redraw();
                        }
                    }, this);
                    this._layerInfoParamArrayUseForRervertRenderer = [];
                },
                showLoading: function () {

                    domStyle.set("loadingEditor", "display", "block");

                },
                hideLoading: function () {
                    domStyle.set("loadingEditor", "display", "none");
                }
            });

        });