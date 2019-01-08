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
  "map": {
    "error": "मानचित्र दृश्य बनाने में",
    "licenseError": {
      "message": "आपके खाते को ऐसे कॉन्फ़िगर करने योग्य ऐप्स का उपयोग करने के लिए लाइसेंस प्राप्त नहीं है जो गैर-सार्वजनिक हैं। कृपया अपने संगठन व्यवस्थापक से आपको एक ऐसा उपयोगकर्ता प्रकार असाइन करने के लिए कहें जिसमें आवश्यक ऐप्स या एड-ऑन आवश्यक ऐप्स लाइसेंस शामिल है।",
      "title": "लाइसेंस प्राप्त नहीं है"
    }
  },
  "nav": {
    "close": "बंद"
  },
  "basemap": {
    "title": "Basemap गैलरी"
  },
  "operationalLayers": {
    "title": "परिचालन लेयर",
    "error": "मानचित्र में कोई भी ऑपरेशनल लेयर परत नहीं हैं।"
  },
  "imageMask": {
    "title": "छवि मास्क",
    "toolText": "टूल",
    "tool1": "मास्क",
    "tool2": "पहचान बदलें",
    "layer": "लेयर",
    "layerText": "अपनी इमेजरी चुनें।",
    "maskImageSelector": "विशिष्ट छवि (छवियों) का चयन करें",
    "imageSelectorText": "तुलना करने के लिए दो अलग छवियां चुनें।",
    "changeText": "बदलाव का पता लगाने के लिए कॉन्फ़िगर करें।",
    "maskText": "मास्क कॉन्फ़िगर करें।",
    "zoom": "चयनित इमेज में ज़ूम इन करें।",
    "primary": "मुख्य छवि",
    "comparison": "तुलना छवि",
    "mode": "परिवर्तनों को इस रूप में देखें",
    "method": "विधि",
    "changeMethodText": "इसमें परिवर्तनों को परिकलित करें या उनकी गणना करें",
    "positive": "सकारात्मक",
    "negative": "नकारात्मक",
    "threshold": "थ्रेशोल्ड",
    "difference": "अंतर",
    "apply": "लागू करें",
    "clear": "हटाएँ",
    "nir": "इन्फ्रारेड बैंड",
    "red": "लाल बैंड",
    "green": "हरा बैंड",
    "swir": "शॉर्ट-वेव इन्फ़्रारेड बैंड",
    "band1": "बैंड A",
    "band2": "बैंड B",
    "mode1": "अंतर छवि",
    "mode2": "डिफ़रेंस मास्क",
    "mode3": "थ्रेशोल्ड मास्क",
    "method1": "छवि चमक",
    "method2": "वनस्पति सूचकांक",
    "method3": "मृदा समायोजन वेज इंडेक्स",
    "method4": "वाटर इंडेक्स",
    "method5": "बर्न इंडेक्स",
    "method6": "मेरे थ्रेशोल्ड से कम",
    "method7": "मेरे थ्रेशोल्ड से अधिक",
    "method8": "एकल बैंड",
    "method9": "पसंद के मुताबिक सूची",
    "dropDown": "ड्रॉप डाउन सूची में इमेज दिखाएँ।",
    "transparency": "पारदर्शिता(परिणाम)",
    "slider": "स्लाइडर पर इमेज दर्शाएँ।",
    "error1": "फ़ील्ड निर्दिष्ट करें।",
    "error2": "कोई OBJECTID फ़ील्ड नहीं है।",
    "error3": "कोई श्रेणी फ़ील्ड नहीं है।",
    "error4": "लेयर के लिए कार्रवाई नहीं की जा सकती।",
    "error5": "10.2.1 से पहले की सेवाएँ समर्थित नहीं हैं।",
    "error6": "वर्तमान सीमा में कोई दृश्य नहीं है।",
    "error7": "कृपया गो अलग छवियों का चयन करें।",
    "indexText": "उन्नत सूचकांक विकल्प",
    "date": "दिनांक",
    "areaText": "क्षेत्र में कमी / वृद्धि",
    "areaText2": "जला हुआ / आग लगने के बाद फिर से विकास करने वाला क्षेत्र",
    "areaText3": "कवर किया गया क्षेत्र",
    "unit": "किमी",
    "swipe": "स्वाइप करें",
    "imageLabel": "छवि (छवियां)",
    "extent": "सीमा निर्धारित करने के लिए बहुभुज बनाएं",
    "colorPicker": "कलर पिकर",
    "refresh": "रीफ़्रेश बटन",
    "refreshTooltip": "वर्तमान सीमा के आधार पर छवि सूची को रिफ़्रेश करें।",
    "colorpickerText": "अपने मास्क के लिए रंग चुनें",
    "sliderText": "अपना थ्रेशोल्ड सेट करें",
    "maskModeText": "मुझे किन मूल्यों को मास्क करना चाहिए?",
    "positiveSliderText": "क्षेत्र को हंरे रंग में दिखाए जाने से पहले छवियों के बीच आवश्यक न्यूनतम वृद्धि सेट करें।",
    "negativeSliderText": "क्षेत्र को मैजेंटा रंग में दिखाए जाने से पहले छवियों के बीच आवश्यक न्यूनतम कमी सेट करें।",
    "updateResult": "आपकी छवि बदल दी गई है; विश्लेषण को अपडेट करने के लिए लागू करें पर क्लिक करें।"
  },
  "editor": {
    "title": "संपादक",
    "error": "कोई संपादन लेयर नहीं मिली।",
    "error1": "एक्सेस अस्वीकृत किया गया। लेयर संपादित नहीं की जा सकती है।",
    "text": "कोई प्रतीक चुनें और मैप पर क्लिक करें।"
  },
  "measurement": {
    "title": "छवि का माप",
    "error": "क्षेत्रमिति कार्यक्षमताएं समर्थित नहीं हैं।"
  },
  "export": {
    "title": "निर्यात करें",
    "mode": "स्थान सहेजें",
    "titleText": "शीर्षक (आवश्यक)",
    "description": "विवरण",
    "tags": "टैग (आवश्यक)",
    "preview": "पूर्वावलोकन करें",
    "submit": "सहेजें",
    "cancel": "रद्द करें",
    "pixel": "पिक्सेल आकार",
    "outsr": "आउटपुट स्पेशियल सन्दर्भ",
    "renderer": "TIFF डाउनलोड विकल्प",
    "formatText1": "जैसा प्रदर्शित है",
    "formatText2": "अपरिष्कृत डेटा (सभी बैंड)",
    "extent": "सीमा निर्धारित करने के लिए बहुभुज बनाएं",
    "drawText": "(प्रारंभ करने के लिए छवि क्लिक करें)",
    "text": "अपरिष्कृत डेटा को मानक फ़ोटो दर्शकों के साथ प्रदर्शित नहीं किया जा सकता। ArcGIS Pro के साथ खोलें।",
    "error": "मानचित्र पर कोई भी इमेजरी लेयर्स दृश्यमान नहीं हैं।",
    "error1": "शीर्षक आवश्यक है।",
    "error2": "टैग आवश्यक है।",
    "error3": "इसके लिए निर्यात का PixelSize प्रतिबंधित है",
    "error4": "इस सीमा के लिए।",
    "error5": "कृपया कोई मान्य सांख्यिक मान दर्ज करें।",
    "error6": "आपकी छवि को इस समय निर्यात नहीं किया जा सकता।",
    "thumbnailError": "कोई थंबनेल मौजूद नहीं है",
    "advance": "उन्नत सहेजने के विकल्प",
    "modeOption1": "पोर्टल पर सहेजें",
    "modeOption2": "डिस्क पर सहेजें",
    "default": "डिफॉल्ट",
    "utm": "WGS84 UTM ज़ोन",
    "layer": "लेयर",
    "mercator": "WebMercatorAS",
    "folder": "फोल्डर चुनें"
  },
  "imageDate": {
    "label": "छवि की तिथि"
  },
  "about": {
    "title": "बारे में"
  },
  "bookmark": {
    "title": "बुकमार्क्स",
    "default": "डिफॉल्ट",
    "selectBookmark": "बुकमार्क का चयन करें",
    "add": "बुकमार्क जोड़ें",
    "addTitle": "शीर्षक दर्ज करें...",
    "addBtn": "अस्थायी को जोड़ें"
  }
});