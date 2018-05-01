/*global define,location */
/*jslint sloppy:true */
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
define({
//Default configuration settings for the application. This is where you'll define things like a bing maps key,
//default web map, default app color theme and more. These values can be overwritten by template configuration settings and url parameters.
    "appid": "",
    "webmap": "d5e02a0c1f2b4ec399823fdd3c2fdebd",
    "oauthappid": null,
    //Group templates must support a group url parameter. This will contain the id of the group.
    "group": "",
    //Enter the url to the proxy if needed by the application. See the 'Using the proxy page' help topic for details
    //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    "bingKey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    // Define the title and description text that appears on the panel
    "title": "Image Mask",
    "description": "Configurable App containing imagery tools.",
    "background": "#000",
    "color": "#fff",
    "widgetTitleColor": "#008299",
    "toolsIconColor": "#008299",
    "basemapFlag": false,
    "bookmarkFlag": false,
    "includelayeropacity": false,
    "scalebarFlag": false,
    "scalebarUnit": "metric",
    "scalebarStyle": "ruler",
    "scalebarPosition": "bottom-left",
    "aboutFlag": false,
    "toolOnByDefault": "none",
    "aboutText": "",
    "operationalLayersFlag": false,
    "imageMaskFlag": true,
    "maskToolOptions":"mask",
    "imageMaskTitle": "Image Mask",
    "primaryLayer": {"id": null},
    "displayOptions": "both",
    "zoomLevel": 8,
    "searchScreenExtent": 15,
    "enableAutoRefresh": true,
    "imageSelectorLayer": "[]",
    "imageDateFlag": false,
    "imageDateLabel": "Image Date",
    "imageDateLayer": "[]",
    "difference": true,
    "veg": false,
    "savi": false,
    "water": false,
    "burn": false,
    "exportFlag": false,
    "exportType": "disk",
    "measurementFlag": false,
    "angularUnit": "esriDUDecimalDegrees",
    "linearUnit": "esriMeters",
    "areaUnit": "esriSquareMeters",
    "editFlag": false,
    "featureLayers": "[]",
    "featureLayersHeightField": "",
    "editable": true,
    "disableGeometryUpdate": false,
    // Define background and text colors for the app.
    "mapZoom": true, // set to false to disable map zoom slider
    "search": false, // Search Tool
    "searchExtent": true,
    "searchLayers": [{
            "id": "",
            "fields": []
        }],
    "find": null,
    //Replace these with your own bitly key
    "bitlyLogin": "arcgis",
    "bitlyKey": "R_b8a169f3a8b978b9697f64613bf1db6d",
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
                "url": null
            }]
    },
    "customstyle": null
});
