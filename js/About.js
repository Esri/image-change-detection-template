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
    'dojo/_base/declare',
    "dojo/Evented",
    "dojo/dom",
    'dojo/_base/lang', "dojo/html",
    "dojo/dom-style", "dijit/registry"

],
        function (
                declare, Evented,
                dom,
                lang, html,domStyle, registry
                

                ) {
            return declare("application.About", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null,
                        aboutText: ""
                    };
                    lang.mixin(this, defaults, parameters);
                },
                startup: function () {
                    this.inherited(arguments);
                },
                resize: function () {
                    domStyle.set(dom.byId("aboutDialog").children[1], "maxWidth", (0.2 * window.innerWidth) + "px");
                    if (window.innerWidth > 1200) {
                        domStyle.set(dom.byId("aboutDialog").children[1], "maxHeight", window.innerHeight - 280 + "px");
                        domStyle.set("aboutDialog", "left", "auto");
                        domStyle.set("aboutDialog", "right", "20px");
                        domStyle.set("aboutDialog", "top", "210px");
                    } else if (window.innerWidth > 1000) {
                        domStyle.set(dom.byId("aboutDialog").children[1], "maxHeight", window.innerHeight - 280 + "px");
                        domStyle.set("aboutDialog", "left", "auto");
                        domStyle.set("aboutDialog", "right", "20px");
                        domStyle.set("aboutDialog", "top", "210px");
                    } else if (window.innerWidth > 800) {
                        domStyle.set(dom.byId("aboutDialog").children[1], "maxHeight", window.innerHeight - 278 + "px");
                        domStyle.set("aboutDialog", "left", "auto");
                        domStyle.set("aboutDialog", "right", "20px");
                        domStyle.set("aboutDialog", "top", "208px");
                    } else if (window.innerWidth > 600) {
                        domStyle.set(dom.byId("aboutDialog").children[1], "maxHeight", window.innerHeight - 276 + "px");
                        domStyle.set("aboutDialog", "left", "auto");
                        domStyle.set("aboutDialog", "right", "20px");
                        domStyle.set("aboutDialog", "top", "206px");
                    } else if (window.innerWidth > 400) {
                        domStyle.set(dom.byId("aboutDialog").children[1], "maxHeight", window.innerHeight - 274 + "px");
                        domStyle.set("aboutDialog", "left", "auto");
                        domStyle.set("aboutDialog", "right", "20px");
                        domStyle.set("aboutDialog", "top", "204px");
                    } else {
                        domStyle.set(dom.byId("aboutDialog").children[1], "maxHeight", window.innerHeight - 274 + "px");
                        domStyle.set("aboutDialog", "left", "auto");
                        domStyle.set("aboutDialog", "right", "20px");
                        domStyle.set("aboutDialog", "top", "204px");
                    }
                },
                postCreate: function () {
                    html.set(document.getElementById("aboutDivContainer"), this.aboutText,{parseContent: true});
                    window.addEventListener("resize", lang.hitch(this, this.resize));
                    domStyle.set(dom.byId("aboutDialog").children[1], "minWidth", "150px");
                    domStyle.set(dom.byId("aboutDialog").children[1], "minHeight", "80px");
                    this.resize();
                }
            });

        });