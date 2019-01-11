# Image Mask
With the Image Mask configurable template, create an app to visualize change between two images in an imagery layer or to mask user-set thresholds for calculated spectral indexes, like NDVI.

Check out two example applications built with the Image Mask template: [one](https://www.arcgis.com/apps/ImageMask/index.html?appid=face7c19404342479fe2a61cb757046b) using the Change Detection tool, the [other](https://www.arcgis.com/apps/ImageMask/index.html?appid=f2ac27ff11204e9a9d3c8e34351d37f9) using the Mask tool. 

![App](https://github.com/ArcGIS/image-change-detection-template/blob/master/Image%20Mask%20screenshot.png)

>There are three configurable app templates designed for imagery: [Imagery Viewer](https://github.com/Esri/imagery-viewer-template), [Image Mask](https://github.com/Esri/image-change-detection-template), and [Image Visit](https://github.com/Esri/image-visit-template/). Explore [example applications](http://arcgis.maps.arcgis.com/apps/MinimalGallery/index.html?appid=7207e9505d3e4cd4bf33e81c57190d1d) built with these templates.

## Description
Image Mask is a configurable app template for identifying areas of an image that have changed over time or that meet user-set thresholds for calculated spectral indexes. The template also includes tools for measurement, recording locations, and more.
App users can zoom to bookmarked areas of interest (or search for their own), select any of the imagery layers from the associated web map to analyze, use a time slider or dropdown menu to select images, then choose between the Change Detection or Mask tools to produce results. 
## Features
Image Mask users can do the following:
* Zoom to bookmarked areas of interest (or bookmark their own)
* Select specific images from a layer to visualize (search by date or another attribute)
* Use the Change Detection tool to compare two images in a layer (see options, below)
* Use the Mask tool to highlight areas that meet a user-set threshold for common spectral indexes (NDVI, SAVI, a burn index, and a water index). For example, highlight all the areas in an image with NDVI values above 0.25 to find vegetation. 
* Annotate imagery using editable feature layers
* Perform image measurement on imagery layers that have mensuration capabilities
* Export an imagery layer to the user's local machine, or as a layer in the user’s ArcGIS account
### Change detection tool options
For each imagery layer, create an app that gives users one or more of the following change detection options:
* **Difference** (calculates the change in overall brightness)
* **Vegetation Index** (NDVI) (requires red and infrared bands)
* **Soil-Adjusted Vegetation Index** (SAVI) (requires red and infrared bands)
* **Water Index** (requires green and short-wave infrared bands)
* **Burn Index** (requires infrared and short-wave infrared bands)

For each of the indexes, users also have a choice between three types of analysis: 
* **Difference Image:** calculates increases and decreases for the full extent
* **Difference Mask:** users can focus on significant change by setting the minimum increase or decrease to be masked—for example, a user could mask only areas where NDVI increased by at least 0.2
* **Threshold Mask:** The user sets a threshold and magnitude for what is masked as change. The app will only identify change that’s above the user-set lower threshold and bigger than the user-set minimum magnitude. 

## Use Cases
Possible use cases include:
* A student investigating urban expansion over time using Esri’s Multispectral Landsat image service
* A vineyard owner using high-resolution satellite imagery to monitor changes in crop health
* An image analyst recording burn scar extents using multispectral satellite imagery
* An aid worker monitoring changes in drought conditions using MODIS imagery
## Supported Devices
* Apps created with this template are responsively designed for display on desktops, mobile phones, and tablets  using all [browsers supported by ArcGIS Online](http://doc.arcgis.com/en/arcgis-online/reference/browsers.htm).

## Instructions
1. To deploy this application, download the template repo and unzip it.
2. Copy the unzipped folder containing the web app template files, such as index.html, to your web server. You can rename the folder to change the URL through which users will access the application. By default the URL to the app will be `http://<Your Web Server>/<app folder name>/index.html`
3. Change the sharing host, found in defaults.js inside the config folder for the application, to the sharing URL for ArcGIS Online or Portal. For ArcGIS Online users, keep the default value of www.arcgis.com or specify the name of your organization.

	- ArcGIS Online Example:  `"sharinghost": location.protocol + "//" + <your organization name>.maps.arcgis.com`
	- Portal Example where `arcgis` is the name of the Web Adaptor: `"sharinghost": location.protocol + "//" + "webadaptor.domain.com/arcgis"`

4. If you are using Portal or a local install of the ArcGIS API for JavaScript, change all references to the ArcGIS API for JavaScript in index.html to refer to your local copy of the API. Search for the references containing `"//js.arcgis.com/3.21"` and replace this portion of the reference with the url to your local install.

	- For example: `"//webadaptor.domain.com/arcgis/jsapi/jsapi"` where `arcgis` is the name of your Web Adaptor.

5. Copy a group ID from Portal/ArcGIS Online and replace the default group ID in the application's default.js file. You can now run the application on your web server or configure the application further.

6. Read [instructions](https://doc.arcgis.com/en/arcgis-online/create-maps/create-app-templates.htm#ESRI_SECTION1_FBEEDC333D2A4765BA3F807B50AD558A) for making make the configurable template available through your organization.

> **Note:** If your application edits features in a feature service, contains secure services or web maps that aren't shared publicly, or generate requests that exceed 200 characters, you may need to set up and use a proxy page. Common situations where you may exceed the URL length are using complex polygons as input to a task or specifying a spatial reference using well-known text (WKT). For details on installing and configuring a proxy page see [Using the proxy](https://developers.arcgis.com/javascript/jshelp/ags_proxy.html). If you do not have an Internet connection, you will need to access and deploy the ArcGIS API for JavaScript documentation from [developers.arcgis.com](https://developers.arcgis.com/).

## Requirements
### Software
* ArcGIS Online subscription or ArcGIS Portal

### Data
* Creating an app with this template requires a web map with at least one imagery layer. 

## Resources
* Find more information about [Esri's configurable apps](http://www.esri.com/software/configurable-apps).
* [Esri's ArcGIS Online Help](http://resources.arcgis.com/en/help/arcgisonline/) describes how to create web maps and web map applications in the ArcGIS Online ecosystem.
* Check out the [GitHub repo for Web AppBuilder image services widgets](https://github.com/Esri/WAB-Image-Services-Widgets) for more information about building configurable imagery apps with ArcGIS.

## Issues
Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing
Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing
Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at 

http://www.apache.org/licenses/LICENSE-2.0. 

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/ArcGIS/image-change-detection-template/blob/master/LICENSE) file.


