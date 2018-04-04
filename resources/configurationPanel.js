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
                        "label":"Title:",
                        "fieldName":"title",
                        "type":"string",
                        "tooltip":"Provide App Name"
                },
                {
                "placeHolder":"Description",
                        "label":"Description:",
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
                        "label":"Specify active tool at app startup",
                        "tooltip":"",
                        "options":[
                        {
                        "label":"None",
                                "value":"none"
                        },
                        {
                        "label":"Change Detection",
                                "value":"change"
                        },
                        {
                        "label":"About",
                                "value":"about"
                        }
                        ]
                },
                {
                "type":"paragraph",
                        "value":"<span style='text-align: justify;font-family: verdana;'>Use the About tool to give your app context. Use this widget to explain to the user what the purpose of the app is and how to get started. Click 'Turn on the About widget when the app starts' to make your About text active any time a person opens your app.</span>"
                },
                {
                "type": "conditional",
                        "condition": false,
                        "fieldName": "aboutFlag",
                        "label": "Enable about tool",
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
                        "tooltip":"Basemap Selector"
                },
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"scalebarFlag",
                        "label":"Enable Scalebar",
                        "tooltip":"Display Scalebar",
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
                "type":"paragraph",
                        "value":"<span style='text-align: justify;font-family: verdana;'>Enable the Bookmark tool to let users select any bookmarks that are saved as a part of your web map. Additionally, users can add temporary bookmarks while they use the app (these will disappear if the app is closed or refreshed).</span>"
                },
                {
                "type":"boolean",
                        "label": "Enable Bookmark tool",
                        "fieldName": "bookmarkFlag",
                        "tooltip": "Bookmarks"
                },
                {
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;margin:20px 0px 0px 0px;'>The Export tool saves the topmost visible imagery layer, either to the user's ArcGIS Online account as an imagery layer item or to the user's computer as a TIFF file of the current area of interest.</p>"
                },
                {
                "type":"conditional",
                        "condition":false,
                        "label":"Enable Export Tool",
                        "fieldName":"exportFlag",
                        "items":[
                        {
                        "type":"paragraph",
                                "value":"<p style='text-align: justify;font-family: verdana;margin-bottom:0px;'>Select which export options will be available to the user.</p>"
                        },
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
                        "fieldName": "changeDetectionFlag",
                        "tooltip": "Enable Change Detection",
                        "label": "Enable Change Detection",
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
                }, {
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;'>Image Date will display the date of the most central image from the active layer in the theme header next to the app name.</p>"
                },
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"imageDateFlag",
                        "label":"Enable Image Date",
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
                        }  ]
                }, 
                {
                "type":"paragraph",
                        "value":"<p style='text-align:justify;font-family: verdana;'>The Image Measurement tool allows you to perform measurements on image services with mensuration capability. Mensuration applies geometric rules to find the height, area, or location of a feature.</p>"
                },
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"measurementFlag",
                        "label":"Enable Image Measurement",
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
                "type":"paragraph",
                        "value":"<p style='text-align: justify;font-family: verdana;'>The Operational Layers tool allows users to change the visibility of non-imagery layers (feature layers or tile layers, for example), as well as to view the legend of each non-imagery layer. This tool is not required if the user will be working with one operational layer and not turning it on and off.</p>"
                },
                {
                "type":"boolean",
                        "fieldName":"operationalLayersFlag",
                        "label":"Enable Operational Layers tool"
                },
                {
                "type":"paragraph",
                        "value":"<p style='text-align:justify;font-family: verdana;margin-bottom:0px;'>The Editor tool allows users to edit feature layers (to pinpoint locations, delineate boundaries, or add additional notes, among other uses).<br><br><br>Enable the Editor tool and select the feature layers that users will be able to edit in-app. This tool requires <a href='http://doc.arcgis.com/en/arcgis-online/share-maps/manage-hosted-feature-layers.htm' target='_blank'>editable hosted feature layers</a> in the app's web map.</p>"
                },
                {
                "type":"conditional",
                        "condition":false,
                        "fieldName":"editFlag",
                        "label":"Enable Edit Tool",
                        "items":[
                        {
                        "label":"Turn on the layers to allow editing.<br />For each editable feature layer, select the feature layer field in which to record the date from the active image. (optional)",
                                "fieldName":"featureLayers",
                                "type":"multilayerandfieldselector",
                                "tooltip":"Select the feature layer field in which to record the date from the active image.",
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
                        "label":"For each editable feature layer, select the feature layer field in which to record the height from the active image. (optional)",
                                "fieldName":"featureLayersHeightField",
                                "type":"multilayerandfieldselector",
                                "tooltip":"Select the feature layer field in which to record the height from the active image.",
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
                }
                ]
                }, {
"category": "Search",
        "fields": [
        {
        "type":"paragraph",
                "value":"<span style='text-align: justify;font-family: verdana;'>Enable search to allow users to find a location or data in the map. Configure the search settings to refine the experience in your app by setting the default search resource, placeholder text, etc.</span>"
        },
        {
        "type":"conditional",
                "condition":false,
                "fieldName":"search",
                "label":"Enable search tool",
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
                "changeDetectionFlag":true,
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