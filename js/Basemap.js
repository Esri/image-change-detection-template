///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
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
    'dojo/_base/declare',
    "dojo/Evented",
    "dojo/dom",
    'esri/dijit/BasemapGallery',
    'dojo/_base/lang',
    "dojo/dom-style", "dijit/registry",
    "dojo/_base/html",
    "dojo/query"

],
        function (
                declare, Evented,
                dom,
                BasemapGallery,
                lang, domStyle, registry,
                html,
                query

                ) {
            return declare("application.Basemap", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null
                    };
                    lang.mixin(this, defaults, parameters);
                },
                basemapGallery: null,
                spatialRef: null,
                startup: function () {
                    /*jshint unused: false*/
                    this.inherited(arguments);
                    this.initBasemaps();
                },
                resize: function () {
                    //this._responsive();
                    if (window.innerWidth > 1200) {
                        domStyle.set(dom.byId("basemapDialog"), "width", "190px");
                        domStyle.set(dom.byId("basemapDialog"), "height", "300px");
                        domStyle.set("basemapDialog", "left", "auto");
                        domStyle.set("basemapDialog", "right", "20px");
                        domStyle.set("basemapDialog", "top", "210px");
                    } else if (window.innerWidth > 1000) {
                        domStyle.set(dom.byId("basemapDialog"), "width", "160px");
                        domStyle.set(dom.byId("basemapDialog"), "height", "200px");
                        domStyle.set("basemapDialog", "left", "auto");
                        domStyle.set("basemapDialog", "right", "20px");
                        domStyle.set("basemapDialog", "top", "210px");
                    } else if (window.innerWidth > 800) {
                        domStyle.set(dom.byId("basemapDialog"), "width", "150px");
                        domStyle.set(dom.byId("basemapDialog"), "height", "150px");
                        domStyle.set("basemapDialog", "left", "auto");
                        domStyle.set("basemapDialog", "right", "20px");
                        domStyle.set("basemapDialog", "top", "208px");
                    } else if (window.innerWidth > 600) {
                        domStyle.set(dom.byId("basemapDialog"), "width", "150px");
                        domStyle.set(dom.byId("basemapDialog"), "height", "120px");
                        domStyle.set("basemapDialog", "left", "auto");
                        domStyle.set("basemapDialog", "right", "20px");
                        domStyle.set("basemapDialog", "top", "206px");
                    } else if (window.innerWidth > 400) {
                        domStyle.set(dom.byId("basemapDialog"), "width", "130px");
                        domStyle.set(dom.byId("basemapDialog"), "height", "100px");
                        domStyle.set("basemapDialog", "left", "auto");
                        domStyle.set("basemapDialog", "right", "20px");
                        domStyle.set("basemapDialog", "top", "204px");
                    } else {
                        domStyle.set(dom.byId("basemapDialog"), "width", "110px");
                        domStyle.set(dom.byId("basemapDialog"), "height", "90px");
                        domStyle.set("basemapDialog", "left", "auto");
                        domStyle.set("basemapDialog", "right", "20px");
                        domStyle.set("basemapDialog", "top", "204px");
                    }
                },
                _responsive: function () {
                    var paneNode = dom.byId("basemapDialog");
                    var width = html.getStyle(paneNode, 'width');
                    var column = parseInt(width / 105, 10);
                    if (column > 0) {
                        var margin = width % 105;
                        var addWidth = parseInt(margin / column, 10);
                        query('.esriBasemapGalleryNode', this.id).forEach(function (node) {
                            html.setStyle(node, 'width', 85 + addWidth + 'px');
                        });
                    }
                },
                initBasemaps: function () {
                    var config = {};
                    config.map = this.map;
                    config.portalUrl = "http://www.arcgis.com/";
                    config.showArcGISBasemaps = true;
                    window.addEventListener("resize", lang.hitch(this, this.resize));

                    this.basemapGallery = new BasemapGallery(config, "basemapGalleryDiv");
                    this.basemapGallery.startup();
                    //  this._responsive();
                    this.resize();
                }




            });

        });