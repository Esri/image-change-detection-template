/*global define */
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
    root: ({
        map: {
            error: "Unable to create map",
			licenseError: {
				message: "Your account is not licensed to use Configurable Apps that are not public. Please ask your organization administrator to assign you a user type that includes Essential Apps or an add-on Essential Apps license.",
				title: "Not Licensed"
			}
        },
        nav: {
            "close": "Close"
        },
        basemap: {
          title: "Basemap Gallery"
          
        },
        operationalLayers: {
          title: "Operational Layers",
          error: "No operational layers in the map."
        },
        imageMask: {
            title: "Image Mask",
            toolText:"Tool",
            tool1:"Mask",
            tool2:"Change Detection",
            layer: "Layer",
            layerText: "Choose your imagery.",
            maskImageSelector: "Choose specific image(s)",
            imageSelectorText: "Choose two different images to compare.",
            changeText: "Configure change detection.",
            maskText: "Configure mask.",
            zoom: "Zoom in to select images.",
            primary: "Primary Image",
            comparison: "Comparison Image",
            mode: "Visualize changes as a",
            method: "Method",
            changeMethodText:"Calculate changes in",
            positive: "Positive",
            negative: "Negative",
            threshold: "Threshold",
            difference: "Difference",
            apply: "Apply",
            clear: "Clear",
            "nir": "Infrared Band",
            "red": "Red Band",
            "green":"Green Band",
            "swir": "Short-wave Infrared Band",
            "band1": "Band A",
            "band2": "Band B",
            mode1: "Difference Image",
            mode2: "Difference Mask",
            mode3: "Threshold Mask",
            method1: "Image brightness",
            method2: "Vegetation Index",
            method3: "Soil Adjusted Veg. Index",
            method4: "Water Index",
            method5: "Burn Index",
            method6: "Less than my threshold",
            method7: "Greater than my threshold",
            method8: "Single Band",
            method9: "Custom Index",
            dropDown: "Show images in drop down list.",
            transparency: "Transparency(results)",
            slider: "Show images on slider.",
            error1: "Field is not specified.",
            error2: "No OBJECTID field.",
            error3: "No Category field.",
            error4: "Cannot perform action for layer.",
            error5: "Services pre 10.2.1 not supported.",
            error6: "No scenes in current extent.",
            error7: "Please select two different images.",
            indexText: "Advanced index options",
            date: "Date",
            areaText: "Area Decrease / Increase",
            areaText2: "Burnt / Post Fire Regrowth Area",
            areaText3: "Area Covered",
            unit: "km",
            swipe:"Swipe",
            imageLabel: "image(s)",
            extent: "Draw polygon(s) to define extent",
            colorPicker: "Color Picker",
            refresh: "Refresh Button",
            refreshTooltip: "Refresh the image list based on the current extent.",
            colorpickerText: "Choose a color for your mask",
            sliderText: "Set your threshold",
            maskModeText: "Which values should I mask?",
            positiveSliderText: "Set the minimum increase required between the images before the area is shown in green.",
            negativeSliderText: "Set the minimum decrease required between the images before the area is shown in magenta.",
            updateResult: "Your image has changed; click Apply to update analysis."
        },
        editor: {
            title: "Editor",
            error: "No Edit Layer found.",
            error1: "Access denied. Layers cannot be edited.",
            text:"Select a symbol and click on the map."
        },
        measurement: {
            title: "Image Measurement",
            error: "Mensuration Capabilities not supported."
        },
        export: {
             title: "Export",
            mode: "Save location",
            titleText: "Title(required)",
            description: "Description",
            tags: "Tags(required)",
             preview: "Preview",
            submit: "Save",
             cancel: "Cancel",
            pixel: "Pixel Size",
            outsr: "Output Spatial Reference",
            renderer: "TIFF download options",
            formatText1: "As displayed",
            formatText2: "Raw data(all bands)",
            extent: "Draw polygon to define extent",
            drawText:"(click image to start)",
            text: "The raw data can't be displayed with standard photo viewers. Open with ArcGIS Pro.",
            error: "No visible imagery layers on the map.",
            error1: "Title is required.",
            error2: "Tag(s) is required.",
            error3: "PixelSize of export is restricted to",
            error4: "for this extent.",
            error5: "Please enter a valid numeric value.",
            error6: "Your image can't be exported at this time.",
            thumbnailError: "No thumbnail available",
            advance: "Advanced save options",
            modeOption1: "Save to portal",
            modeOption2: "Save to disk",
            default:"Default",
            utm: "WGS84 UTM Zone",
            layer: "Layer",
            mercator: "WebMercatorAS",
             folder: "Select folder"
        },
        imageDate: {
            label: "Image Date"
        },
        about: {
            title: "About"
        },
        bookmark: {
            title: "Bookmarks",
            default: "Default",
            selectBookmark: "Select bookmarks",
            add: "Add Bookmarks",
            addTitle: "Enter title",
            addBtn: "Add temporary"
        }
    }),
    "ar": 1,
	"bs": 1,
	"ca": 1,
	"cs": 1,
	"da": 1,
	"de": 1,
	"el": 1,
	"es": 1,
	"et": 1,
	"fi": 1,
	"fr": 1,
	"he": 1,
	"hi": 1,
	"hr": 1,
	"hu": 1,
	"id": 1,
	"it": 1,
	"ja": 1,
	"ko": 1,
	"lt": 1,
	"lv": 1,
	"nl": 1,
	"nb": 1,
	"pl": 1,
	"pt-br": 1,
	"pt-pt": 1,
	"ro": 1,
	"ru": 1,
	"sl": 1,
	"sr": 1,
	"sv": 1,
	"th": 1,
	"tr": 1,
	"vi": 1,
	"zh-cn": 1,
	"zh-hk": 1,
	"zh-tw": 1
});
