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
                        "label":"Specify the active tool at start-up",
                        "tooltip":"Pick a tool to open automatically when the app loads.",
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
                        "label": "Enable about tool",
                        "label": "Enable the About tool",
                        "tooltip": "Tell users what the app does.",
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
                "label":"Enable Basemap Gallery",
                "fieldName":"basemapFlag",
                "tooltip":"Let users choose a basemap."
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"scalebarFlag",
                "label":"Enable Scalebar",
                "tooltip":"Add a scalebar to your app.",
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
                "label": "Enable Bookmark tool",
                "fieldName": "bookmarkFlag",
                "tooltip": "Users can navigate using bookmarks from your web map."
        },
        
        {
        "type":"conditional",
                "condition":false,
                "label":"Enable Export Tool",
                "fieldName":"exportFlag",
                "tooltip":"Let users export images to their local machine or to their ArcGIS Online portal.",
                "items":[
                
                {
                "type":"options",
                        "fieldName":"exportType",
                        "label":"Set default Mode: ",
                        "options":[
                        {
                        "label":"Save to Portal",
                                "value":"agol"
                        },
                        {
                        "label":"Save to Disk",
                                "value":"disk"
                        },
                        {
                        "label":"Select in app",
                                "value":"both"
                        }
                        ]
                }
                ]
        }, {
                "type": "appproxies"
                }
                ]
        },
        {
        "category": "Imagery",
                "fields": [
                {
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;'>The Change Detection widget allows users to calculate the difference between the primary and comparison images. The result of the tool will be added as a new Results layer, which can be saved either to the user's ArcGIS Online account as an imagery layer item or to the user's computer as a TIFF file using the Export tool. Increases are shown in green and decreases are shown in magenta.<br></p>"
                },
                {
                "type": "conditional",
                        "condition": false,
                        "fieldName": "imageMaskFlag",
                        "tooltip": "Enable Image Mask",
                        "label": "Enable Image Mask",
                        "items": [
                            
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align:justify;font-family:verdana;margin-bottom:0px;'>Use the dropdown list to set the default layer in the app.</p>"
                        },
                        {
                        "type":"layerAndFieldSelector",
                                "fieldName":"primaryLayer",
                                "label": "Layer: ",
                                "tooltip":"Select the default layer",
                                "layerOptions":{
                                "supportedTypes":[
                                        "ImageServiceLayer"
                                ]
                                }
                        },
                        {
                             "type":"options",
                                "fieldName":"maskToolOptions",
                                "tooltip":"",
                                "label":"Tool:",
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
                        "label":"Tool Name:",
                        "fieldName":"imageMaskTitle",
                        "type":"string",
                        "tooltip":"Provide Tool Name"
                },
                        {
                        "type":"options",
                                "fieldName":"displayOptions",
                                "tooltip":"",
                                "label":"Display:",
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
                        "type":"Number",
                                "fieldName":"zoomLevel",
                                "label":"Minimum Zoom Level",
                                "tooltip":"",
                                "constraints":{
                                "min":0,
                                        "max":23,
                                        "places":0
                                }
                        },
                        {
                        "type":"Number",
                                "fieldName":"searchScreenExtent",
                                "label":"Search Screen Extent (%)",
                                "tooltip":"",
                                "constraints":{
                                "min":1,
                                        "max":100,
                                        "places":0
                                }
                        },
                        {
                        "type":"boolean",
                                "fieldName":"enableAutoRefresh",
                                "label":"Enable AutoRefresh",
                                "toottip":""
                        },
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align: justify;font-family: verdana;margin:20px 0px -10px; 0px;'>Help app users search for specific images. If you want a layer to be searchable, choose one attribute below for users to search. (For example, to explore imagery chronologically, choose an attribute like Acquisition Date.)</p>"
                        },
                        {
                        "type":"multilayerandfieldselector",
                                "fieldName":"imageSelectorLayer",
                                "label":"Imagery Layers",
                                "tooltip":"Set imagery layers properties.",
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
                        },
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align: justify;font-family: verdana;margin-bottom:0px;'>Select which change detection options you wish to be available to app users. Before performing the change detection, the Difference option converts both imagery layers into grayscale, while the rest of the options calculate indexes for both imagery layers. Index options include Vegetation Index (Normalized Difference Vegetation Index), Soil Adjusted Vegetation Index, Water Index (Normalized Difference Water Index), and Burn Index (Normalized Burn Ratio). </p>"
                        },
                        {
                        "type":"boolean",
                                "fieldName":"difference",
                                "label":"Difference"
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
                        }
                        ]
                }, 
                 {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"imageDateFlag",
                        "label":"Enable Image Date",
                        "tooltip": "Show the active image's Image Date in the app header.",
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
                        "label":"Enable Image Measurement tool",
                        "tooltip": "Let users find the height, area, distance, or location of a feature.",
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
                        "label":"Enable the Operational Layers tool",
                        "tooltip": "Let users turn non-imagery layers on and off."
                },
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"editFlag",
                        "label":"Enable the Editor Tool",
                        "tooltip": "Let users edit feature layers in-app.",
                        "items":[
                        {
                        "label":"Turn on feature layer(s) to allow editing.<br />Optional: Select a field to record the active image's date for each feature the user adds.",
                                "fieldName":"featureLayers",
                                "type":"multilayerandfieldselector",
                                "tooltip":"Turn on at least one layer to allow editing.",
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
                        "label":"Turn on feature layer(s) to allow editing.<br />Optional: Select a field to record the active image's height for each feature the user adds(if the imagery supports it).",
                                "fieldName":"featureLayersHeightField",
                                "type":"multilayerandfieldselector",
                                "tooltip":"Optional: Select a layer and field to record image height.",
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
                "label":"Enable the Search tool",
                 "tooltip": "Let users search for a location or data in the app.",
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
                "imageMaskTitle": "Image Mask",
                "difference":true,
                "veg":false,
                "savi":false,
                "water":false,
                "burn":false,
                "primaryLayer": {"id": null},
                "displayOptions":"both",
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