{
"configurationSettings":[
{
"category":"General",
        "fields":[
        {
        "type":"webmap",
                "conditions":["imagelayer"]
        },
        {
        "placeHolder":"Enter the title",
                "label":"Title for ArcGIS Online item:",
                "fieldName":"title",
                "type":"string",
                "tooltip":"Provide App Name"
        },
        {
        "placeHolder":"Description",
                "label":"Description for ArcGIS Online item:",
                "fieldName":"description",
                "type":"string",
                "tooltip":"Provide exciting info for the App title tooltip.",
                "stringFieldOption":"textarea"
        }, {
        "type": "appproxies"
        }

        ]
},
{
"category":"Theme",
        "fields":[
        {
        "type":"paragraph",
                "value":"<span style='text-align: justify;font-family: verdana;'>Define title header color for the app</span>"
        },
        {
        "type":"color",
                "fieldName":"background",
                "tooltip":"Choose a title header color",
                "label":"Title Header color"
        },
        {
        "type":"color",
                "fieldName":"color",
                "tooltip":"Choose a text color for the app",
                "label":"Text color"
        },
        {
        "type":"color",
                "fieldName":"widgetTitleColor",
                "tooltip":"Choose a title header color",
                "label":"Widget header color"
        },
        {
        "type":"color",
                "fieldName":"toolsIconColor",
                "tooltip":"Choose an icon background color",
                "label":"Icon background color"
        },
        {
        "type":"paragraph",
                "value":"<span style='text-align: justify;font-family: verdana;'>Use the Custom css option to paste css that overwrites rules in the app.</span>"
        },
        {
        "type":"string",
                "fieldName":"customstyle",
                "tooltip":"Enter custom css",
                "label":"Custom css"
        }

        ]
},
{
"category": "Options",
        "fields": [
        {
        "type":"options",
                "fieldName":"toolOnByDefault",
                "label":"Pick a tool to open automatically when the app loads:",
                "options":[
                {
                "label":"None",
                        "value":"none"
                },
                {
                "label":"Image Mask",
                        "value":"change"
                },
                {
                "label":"About",
                        "value":"about"
                }
                ]
        },
        {
        "type": "conditional",
                "condition": false,
                "fieldName": "aboutFlag",
                "label": "Add the About tool to tell users what your app does",
                "items": [
                {
                "type": "string",
                        "fieldName": "aboutText",
                        "label": "Text",
                        "stringFieldOption": "richtext",
                        "placeHolder": "Enter about text here."
                }
                ]
        },
        {
        "type":"boolean",
                "label":"Add the Basemap Gallery to let users choose a basemap",
                "fieldName":"basemapFlag"
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"scalebarFlag",
                "label":"Add a scalebar to your map",
                "items":[
                {
                "type":"options",
                        "fieldName":"scalebarPosition",
                        "label":"Scalebar Position",
                        "toolbar":"Select the Scalebar position on the map.",
                        "options":[
                        {
                        "label":"Top Left",
                                "value":"top-left"
                        },
                        {
                        "label":"Top Right",
                                "value":"top-right"
                        },
                        {
                        "label":"Bottom Left",
                                "value":"bottom-left"
                        },
                        {
                        "label":"Bottom Right",
                                "value":"bottom-right"
                        },
                        {
                        "label":"Top Center",
                                "value":"top-center"
                        },
                        {
                        "label":"Bottom Center",
                                "value":"bottom-center"
                        }
                        ]
                },
                {
                "type":"options",
                        "fieldName":"scalebarStyle",
                        "label":"Scalebar Style",
                        "toolbar":"Select the style for the scalebar.",
                        "options":[
                        {
                        "label":"Ruler",
                                "value":"ruler"
                        },
                        {
                        "label":"Line",
                                "value":"line"
                        }
                        ]
                },
                {
                "type":"options",
                        "fieldName":"scalebarUnit",
                        "label":"Scalebar Unit",
                        "toolbar":"Select the Scalebar units.",
                        "options":[
                        {
                        "label":"English",
                                "value":"english"
                        },
                        {
                        "label":"Metric",
                                "value":"metric"
                        },
                        {
                        "label":"Both",
                                "value":"dual"
                        }
                        ]
                }
                ]
        },
        {
        "type":"boolean",
                "label": "Add the Bookmark tool to access your web map's bookmarks",
                "fieldName": "bookmarkFlag"
        },
        {
        "type":"conditional",
                "condition":false,
                "label":"Add the Export tool to save imagery layers",
                "fieldName":"exportFlag",
                "items":[

                {
                "type":"options",
                        "fieldName":"exportType",
                        "label":"Set default Mode: ",
                        "tooltip":"Let users export images to their local machine or to their ArcGIS Online portal",
                        "options":[
                        {
                        "label":"Save to portal",
                                "value":"agol"
                        },
                        {
                        "label":"Save to disk",
                                "value":"disk"
                        },
                        {
                        "label":"Select in app",
                                "value":"both"
                        }
                        ]
                }
                ]
        }
        ]
},
{
"category": "Imagery",
        "fields": [

        {
        "type": "conditional",
                "condition": false,
                "fieldName": "imageMaskFlag",
                "label": "Add a masking tool to your app",
                "items": [
                {
                "type":"layerAndFieldSelector",
                        "fieldName":"primaryLayer",
                        "label": "Choose a default imagery layer:",
                        "layerOptions":{
                        "supportedTypes":[
                                "ImageServiceLayer"
                        ]
                        }
                },
                {
                "type":"options",
                        "fieldName":"maskToolOptions",
                        "label":"Choose an image masking tool (Mask identifies areas given a range of index values; Change Detection identifies areas of change betweem two images):",
                        "options":[
                        {
                        "label":"Mask",
                                "value":"mask"
                        },
                        {
                        "label":"Change Detection",
                                "value":"change"
                        },
                        {
                        "label":"Select in app",
                                "value":"both"
                        }
                        ]
                },
                {
                "placeHolder":"Image Mask",
                        "label":"Give your tool a name:",
                        "fieldName":"imageMaskTitle",
                        "type":"string",
                        "tooltip":"Try 'Image Mask' or'Change Detection'"
                },
                {
                "type":"options",
                        "fieldName":"displayOptions",
                        "label":"Decide how users choose which images to analyze:",
                        "options":[
                        {
                        "label":"Slider",
                                "value":"slider"
                        },
                        {
                        "label":"Dropdown List",
                                "value":"dropdown"
                        },
                        {
                        "label":"Slider and Dropdown List",
                                "value":"both"
                        }
                        ]
                },
                {
                "type": "conditional",
                        "condition": false,
                        "fieldName": "advanceOptions",
                        "label": "Add advanced image search options to the image masking tool",
                        "items": [
                        {
                        "type":"Number",
                                "fieldName":"zoomLevel",
                                "label":"Minimum Zoom Level",
                                "tooltip":"A higher number requires users to zoom in more before they can search for images.",
                                "constraints":{
                                "min":0,
                                        "max":23,
                                        "places":0
                                }
                        },
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align: justify;font-family: verdana;margin:20px 0px -10px; 0px;'><u>Note</u>:  Use Minimum Zoom Level to limit requests to the server for images, and to focus users on the appropriate scale for your app.</p>"
                        },
                        {
                        "type":"Number",
                                "fieldName":"searchScreenExtent",
                                "label":"Search Screen Extent (%)",
                                "tooltip":"A lower % will only search for images at the center of the screen extent.",
                                "constraints":{
                                "min":1,
                                        "max":100,
                                        "places":0
                                }
                        },
                        {
                        "type":"boolean",
                                "fieldName":"enableAutoRefresh",
                                "label":"Automatically refresh search results if the user pans or zooms"
                        }
                        ]
                },
                {
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;margin-bottom:0px;'>Select which pre-calculated indexes users can analyze:</p>"
                },
                {
                "type":"boolean",
                        "fieldName":"difference",
                        "label":"Overall image brightness"
                },
                {
                "type":"boolean",
                        "fieldName":"veg",
                        "label":"Vegetation Index",
                        "tooltip":"Normalized Difference Vegetation Index, or NDVI"
                },
                {
                "type":"boolean",
                        "fieldName":"savi",
                        "label":"Soil Adjusted Vegetation Index",
                        "tooltip":"SAVI"
                },
                {
                "type":"boolean",
                        "fieldName":"water",
                        "label":"Water Index",
                        "tooltip":"Normalized Difference Water Index, or NDWI"
                },
                {
                "type":"boolean",
                        "fieldName":"burn",
                        "label":"Burn Index",
                        "tooltip":"Normalized Burn Ratio, or NBR"
                },
                {
                "type":"conditional",
                "condition": false,
                        "fieldName":"customIndex",
                        "label":"Custom Index",
                        "items":[
                {
                "type": "string",
                        "fieldName": "customIndexLabel",
                        "label": "Label: ",
                        "tooltip": "",
                        "stringFieldOption": "textbox",
                        "placeHolder": "Give a name to custom index"
                },
                {
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;margin-bottom:0px;'>Specify the formula for custom index. Example - For landsat service, Vegetation Index formula is (B5 - B4)/ (B5 + B4) where B5 denotes Infrared band and B4 denotes red band.</p>"
                },
                {
                "type": "string",
                        "fieldName": "customFormula",
                        "label": "Index equation: ",
                        "tooltip": "",
                        "stringFieldOption": "textbox",
                        "placeHolder": ""
                }
                ]
                },
                {
                "type":"multilayerandfieldselector",
                        "fieldName":"imageSelectorLayer",
                        "label":"Choose which layers will be searchable for specific images, then choose one field per layer that users can use to search (e.g. search by Acquisition Date)",
                        "layerOptions":{
                        "supportedTypes":[
                                "ImageServiceLayer"
                        ]
                        },
                        "fieldOptions":{
                        "supportedTypes":[
                                "esriFieldTypeSmallInteger",
                                "esriFieldTypeInteger",
                                "esriFieldTypeSingle",
                                "esriFieldTypeDouble",
                                "esriFieldTypeString",
                                "esriFieldTypeDate",
                                "esriFieldTypeOID",
                                "esriFieldTypeGeometry",
                                "esriFieldTypeBlob",
                                "esriFieldTypeRaster",
                                "esriFieldTypeGUID",
                                "esriFieldTypeGlobalID",
                                "esriFieldTypeXML"
                        ]
                        }
                }

                ]
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"imageDateFlag",
                "label":"Show the active image's date in the app header",
                "items":[
                {
                "type": "string",
                        "fieldName": "imageDateLabel",
                        "label": "Label: ",
                        "tooltip": "",
                        "stringFieldOption": "textbox",
                        "placeHolder": ""
                },
                {
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;margin-bottom:0px;'>Check the box next to all the imagery layers that will display a date when selected as the app's active layer, then select one date field for each layer.</p>"
                },
                {
                "type":"multilayerandfieldselector",
                        "fieldName":"imageDateLayer",
                        "label":"Imagery Layers",
                        "tooltip":"Select date field for each imagery layer.",
                        "layerOptions":{
                        "supportedTypes":[
                                "ImageServiceLayer"
                        ]
                        },
                        "fieldOptions":{
                        "supportedTypes":[
                                "esriFieldTypeDate"
                        ]
                        }
                }
                ]
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"measurementFlag",
                "label":"Add the Image Measurement tool",
                "items":[
                {
                "type":"paragraph",
                        "value":"<p style='text-align:justify;font-family: verdana;margin-bottom:0px;'>Select the units that will be displayed in-app using the dropdown menus.</p>"
                },
                {
                "type":"options",
                        "fieldName":"angularUnit",
                        "label":"Default Angular Unit",
                        "tooltip":"Unit of measure for angular measurement.",
                        "options":[
                        {
                        "label":"Radians",
                                "value":"esriDURadians"
                        },
                        {
                        "label":"Degrees",
                                "value":"esriDUDecimalDegrees"
                        }
                        ]
                },
                {
                "type":"options",
                        "fieldName":"linearUnit",
                        "label":"Default Linear Unit",
                        "tooltip":"Unit of measure for linear measurement.",
                        "options":[
                        {
                        "label":"Inches",
                                "value":"esriInches"
                        },
                        {
                        "label":"Feet",
                                "value":"esriFeet"
                        },
                        {
                        "label":"Yards",
                                "value":"esriYards"
                        },
                        {
                        "label":"Miles",
                                "value":"esriMiles"
                        },
                        {
                        "label":"Nautical Miles",
                                "value":"esriNauticalMiles"
                        },
                        {
                        "label":"Millimeters",
                                "value":"esriMillimeters"
                        },
                        {
                        "label":"Centimeters",
                                "value":"esriCentimeters"
                        },
                        {
                        "label":"Decimeters",
                                "value":"esriDecimeters"
                        },
                        {
                        "label":"Meters",
                                "value":"esriMeters"
                        },
                        {
                        "label":"Kilometers",
                                "value":"esriKilometers"
                        }
                        ]
                },
                {
                "type":"options",
                        "fieldName":"areaUnit",
                        "label":"Default Area Unit",
                        "tooltip":"Unit of measure for area measurement.",
                        "options":[
                        {
                        "label":"Sq Inches",
                                "value":"esriSquareInches"
                        },
                        {
                        "label":"Sq Feet",
                                "value":"esriSquareFeet"
                        },
                        {
                        "label":"Sq Yards",
                                "value":"esriSquareYards"
                        },
                        {
                        "label":"Acres",
                                "value":"esriAcres"
                        },
                        {
                        "label":"Sq Miles",
                                "value":"esriSquareMiles"
                        },
                        {
                        "label":"Sq Millimeters",
                                "value":"esriSquareMillimeters"
                        },
                        {
                        "label":"Sq Centimeters",
                                "value":"esriSquareCentimeters"
                        },
                        {
                        "label":"Sq Decimeters",
                                "value":"esriSquareDecimeters"
                        },
                        {
                        "label":"Sq Meters",
                                "value":"esriSquareMeters"
                        },
                        {
                        "label":"Ares",
                                "value":"esriAres"
                        },
                        {
                        "label":"Hectares",
                                "value":"esriHectares"
                        },
                        {
                        "label":"Sq Kilometers",
                                "value":"esriSquareKilometers"
                        }
                        ]
                }
                ]
        }
        ]
},
{
"category":"Operational Layers",
        "fields":[

        {
        "type":"boolean",
                "fieldName":"operationalLayersFlag",
                "label":"Add the Operational Layers tool so users can turn non-imagery layers on and off"
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"editFlag",
                "label":"Add the Editor tool so users can edit hosted feature layers in-app",
                "items":[
                {
                "label":"Turn on at least one feature layer(s) to allow editing.<br />Optional: Select a field to record the active image's date for each feature the user adds.",
                        "fieldName":"featureLayers",
                        "type":"multilayerandfieldselector",
                        "layerOptions":{
                        "supportedTypes":[
                                "FeatureLayer"
                        ]
                        },
                        "fieldOptions":{
                        "supportedTypes":[
                                "esriFieldTypeDate"
                        ]
                        }
                },
                {
                "label":"Optional: Select a layer and field to record the active image's height for each feature the user adds(if the imagery supports it).",
                        "fieldName":"featureLayersHeightField",
                        "type":"multilayerandfieldselector",
                        "layerOptions":{
                        "supportedTypes":[
                                "FeatureLayer"
                        ]
                        },
                        "fieldOptions":{
                        "supportedTypes":[
                                "esriFieldTypeSmallInteger",
                                "esriFieldTypeInteger",
                                "esriFieldTypeSingle",
                                "esriFieldTypeDouble",
                                "esriFieldTypeString"
                        ]
                        }
                }
                ]
        },
        {
        "type":"paragraph",
                "value":"<p style='text-align: justify;font-family: verdana;margin:20px 0px -10px; 0px;'><u>Note</u>:  The Editor tool requires <a href='http://doc.arcgis.com/en/arcgis-online/manage-data/manage-hosted-feature-layers.htm' target='_blank'>editable hosted feature layers</a> in the app's web map.</p>"
        }
        ]
}, {
"category": "Search",
        "fields": [
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"search",
                "label":"Add the Search tool so users can search for a location or data in the app",
                "items":[
                {
                "type":"search",
                        "fieldName":"searchConfig",
                        "label":"Configure search tool"
                }
                ]
        }
        ]


        }
],
        "values":{
        "background":"#000",
                "widgetTitleColor":"#008299",
                "toolsIconColor":"#008299",
                "color":"#fff",
                "includelayeropacity":false,
                "basemapFlag":false,
                "bookmarkFlag": false,
                "scalebarFlag":false,
                "scalebarUnit":"metric",
                "scalebarStyle":"ruler",
                "scalebarPosition":"bottom-left",
                "aboutFlag": false,
                "toolOnByDefault": "none",
                "aboutText": "",
                "operationalLayersFlag":false,
                "imageMaskFlag":true,
                "maskToolOptions":"mask",
                "imageMaskTitle": "",
                "difference":true,
                "veg":false,
                "savi":false,
                "water":false,
                "burn":false,
                "customIndex": false,
                "customIndexLabel":"",
                "customFormula":"",
                "primaryLayer": {"id": null},
                "displayOptions":"both",
                "advanceOptions":false,
                "zoomLevel":8,
                "searchScreenExtent":15,
                "enableAutoRefresh": true,
                "imageSelectorLayer":"[]",
                "imageDateFlag":false,
                "imageDateLabel":"",
                "imageDateLayer":"[]",
                "exportFlag":false,
                "exportType":"disk",
                "measurementFlag":false,
                "angularUnit":"esriDUDecimalDegrees",
                "linearUnit":"esriMeters",
                "areaUnit":"esriSquareMeters",
                "editFlag":false,
                "featureLayers":"[]",
                "featureLayersHeightField":"",
                "search":false,
                "units":"english"
        }
}