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
    'dojo/_base/declare',
    "dojo/Evented",
    "dijit/_WidgetBase", "dijit/_TemplatedMixin",
    "dijit/registry",
    "dojo/_base/lang","esri/geometry/Extent","dijit/popup"

],
        function (
                declare, Evented, _WidgetBase, _TemplatedMixin,
                registry, lang, Extent,popup) {
            return declare("application.Bookmark", [Evented], {
                constructor: function (parameters) {
                    var defaults = {
                        map: null,
                        bookmarks: [],
                        i18n: null
                    };
                    lang.mixin(this, defaults, parameters);
                },
                bookmarkExtentList: [],
                postCreate: function () {
                registry.byId("bookmarkOptions").on("change", lang.hitch(this, this.changeExtent));
                registry.byId("addBtn").on("click", lang.hitch(this, this.addBookmark));
                registry.byId("bookmarkOptions").addOption({label: this.i18n.selectBookmark, value :"Select"});
                for(var a =0;a<this.bookmarks.length;a++){
                registry.byId("bookmarkOptions").addOption({label: this.bookmarks[a].name, value: a.toString()});
                this.bookmarkExtentList[a.toString()] = this.bookmarks[a].extent;
                }
                this.index = this.bookmarks.length - 1;
                },
                addBookmark: function() {
                    var title = registry.byId("bookmarkTitle").get("value");
                    if(title){
                        this.index++;
                        this.bookmarkExtentList[this.index.toString()] = this.map.extent;
                        registry.byId("bookmarkOptions").addOption({label: title, value: this.index.toString()});
                        popup.close(registry.byId("addBookmarkTooltipDialog"));
                    }
                },
                changeExtent: function(value){
                  if(value !== "Select"){
                      this.map.setExtent(new Extent(this.bookmarkExtentList[value]));
                  }  
                },
                onOpen: function () {
                
                },
                onClose: function () {
                
                }
               
            });

        });