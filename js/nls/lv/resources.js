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
    "error": "Nevar izveidot karti",
    "licenseError": {
      "message": "Jūsu kontam nav licences, lai izmantotu konfigurējamās lietotnes, kas nav publiskas. Pieprasiet savas organizācijas administratoram piešķirt jums lietotāja veidu, kurā iekļauts lietotņu komplekts Essential Apps vai papildinājumlietotņu Essential Apps licence.",
      "title": "Nav licences"
    }
  },
  "nav": {
    "close": "Aizvērt"
  },
  "basemap": {
    "title": "Pamatkaršu galerija"
  },
  "operationalLayers": {
    "title": "Darbību slāņi",
    "error": "Kartē nav darbību slāņu."
  },
  "imageMask": {
    "title": "Attēla maska",
    "toolText": "Rīks",
    "tool1": "Maska",
    "tool2": "Mainīt noteikšanu",
    "layer": "Slānis",
    "layerText": "Izvēlieties savu attēlu.",
    "basemap": "Pamatkarte",
    "maskImageSelector": "Izvēlieties noteiktu(s) attēlu(s)",
    "imageSelectorText": "Izvēlieties divus dažādus attēlus salīdzinājumam.",
    "changeText": "Konfigurēt izmaiņu noteikšanu.",
    "maskText": "Konfigurēt masku.",
    "zoom": "Pietuviniet, lai izvēlētos attēlus.",
    "primary": "Primārais attēls",
    "comparison": "Salīdzināšanas attēls",
    "mode": "Vizualizēt izmaiņas kā",
    "method": "Metode",
    "changeMethodText": "Aprēķināt izmaiņas",
    "positive": "Pozitīvs",
    "negative": "Negatīvs",
    "threshold": "Slieksnis",
    "difference": "Atšķirība",
    "apply": "Lietot",
    "clear": "Notīrīt",
    "nir": "Infrasarkanais kanāls",
    "red": "Sarkanā josla",
    "green": "Zaļā josla",
    "swir": "Īsviļņu infrasarkanā kanāls",
    "band1": "Kanāls A",
    "band2": "Kanāls B",
    "mode1": "Atšķirības attēls",
    "mode2": "Atšķirības maska",
    "mode3": "Sliekšņa maska",
    "method1": "Attēla spilgtums",
    "method2": "Veģetācijas indekss",
    "method3": "Augsnes pielāgotās veģ. indekss",
    "method4": "Ūdens indekss",
    "method5": "Ierakstīšanas indekss",
    "method6": "Mazāks nekā mans noteiktais slieksnis",
    "method7": "Lielāks nekā mans noteiktais slieksnis",
    "method8": "Viena josla",
    "method9": "Pielāgots rādītājs",
    "dropDown": "Rādiet attēlus izvelkamajā sarakstā.",
    "transparency": "Caurspīdīgums (rezultāts)",
    "slider": "Rādīt attēlus slīdnī.",
    "error1": "Lauks nav norādīts.",
    "error2": "Trūkst OBJECTID lauka.",
    "error3": "Trūkst kategorijas lauka.",
    "error4": "Nevar veikt darbību slānim.",
    "error5": "Servisi versijām pirms 10.2.1 netiek atbalstīti.",
    "error6": "Pašreizējā pārklājumā nav scēnu.",
    "error7": "Atlasiet divus dažādus attēlus.",
    "error8": "Nederīgs datuma diapazons: sākuma datumam ir jābūt pirms beigu datuma.",
    "indexText": "Uzlabotās indeksēšanas opcijas",
    "date": "Datums",
    "areaText": "Teritorijas samazinājums/palielinājums",
    "areaText2": "Izdegusī/ pēc ugunsgrēka ataugusī teritorija",
    "areaText3": "Aptvertā teritorija",
    "unit": "km",
    "swipe": "Pārvilkšana",
    "imageLabel": "attēls(i)",
    "extent": "Zīmēt laukumu(s), lai noteiktu pārklājumu",
    "colorPicker": "Krāsu atlasītājs",
    "refresh": "Poga Atjaunot",
    "refreshTooltip": "Atjaunojiet attēlu sarakstu, pamatojoties uz pašreizējo pārklājumu.",
    "colorpickerText": "Izvēlieties kontūras krāsu maskai",
    "sliderText": "Nosakiet sliekšņa vērtību",
    "maskModeText": "Kuras vērtības būtu jāiekļauj kā maskas?",
    "positiveSliderText": "Iestatiet minimālo palielinājumu, kāds ir nepieciešams attēliem, pirms zona tiek rādīta zaļā krāsā.",
    "negativeSliderText": "Iestatiet minimālo palielinājumu, kāds ir nepieciešams attēliem, pirms zona tiek rādīta fuksīna krāsā.",
    "updateResult": "Jūsu attēls ir mainīts; noklikšķiniet uz Lietot, lai atjauninātu analīzi."
  },
  "editor": {
    "title": "Redaktors",
    "error": "Nav atrasts neviens labošanas slānis.",
    "error1": "Piekļuve liegta. Slāņus nevar rediģēt.",
    "text": "Izvēlieties simbolu un uzklikšķiniet uz kartes"
  },
  "measurement": {
    "title": "Attēla mērījums",
    "error": "Mērīšanas iespējas netiek atbalstītas."
  },
  "export": {
    "title": "Eksportēt",
    "mode": "Saglabāt novietojumu",
    "titleText": "Virsraksts (obligāti)",
    "description": "Apraksts",
    "tags": "Atslēgas vārdi (obligāti)",
    "preview": "Priekšskatījums",
    "submit": "Saglabāt",
    "cancel": "Atcelt",
    "pixel": "Pikseļu izmērs",
    "outsr": "Izvades telpiskā atskaite",
    "renderer": "TIFF lejupielādes opcijas",
    "formatText1": "Kā attēlots",
    "formatText2": "Neapstrādāti dati (visi kanāli)",
    "extent": "Zīmēt daudzstūri, lai noteiktu pārklājumu",
    "drawText": "(noklikšķiniet uz attēla, lai sāktu)",
    "text": "Neapstrādātus datus var parādīt ar standarta fotoattēlu skatītājiem. Atvērt ar ArcGIS Pro",
    "error": "Kartē nav redzamu attēlu slāņu.",
    "error1": "Nosaukums jānorāda obligāti.",
    "error2": "Atslēgas vārds(-i) jānorāda obligāti.",
    "error3": "Eksporta PixelSize ir ierobežots",
    "error4": "šajā apjomā.",
    "error5": "Ievadiet derīgu skaitlisku vērtību.",
    "error6": "Jūsu attēlu šoreiz nevar eksportēt.",
    "thumbnailError": "Nav pieejams neviens sīktēls",
    "advance": "Uzlabotās saglabāšanas opcijas",
    "modeOption1": "Saglabāt portālā",
    "modeOption2": "Saglabāt diskā",
    "default": "Noklusējums",
    "utm": "WGS84 UTM zona",
    "layer": "Slānis",
    "mercator": "WebMercatorAS",
    "folder": "Izvēlēties mapi"
  },
  "imageDate": {
    "label": "Attēla datums"
  },
  "about": {
    "title": "Par"
  },
  "bookmark": {
    "title": "Grāmatzīmes",
    "default": "Noklusējums",
    "selectBookmark": "Izvēlēties grāmatzīmes",
    "add": "Pievienot grāmatzīmes",
    "addTitle": "Ievadīt virsrakstu",
    "addBtn": "Pievienot pagaidu"
  },
  "coordinate": {
    "_widgetLabel": "Koordināta",
    "hintMessage": "Noklikšķiniet uz kartes, lai iegūtu koordinātas",
    "defaultLabel": "Noklusējums",
    "realtimeLabel": "Pārvietojiet peli, lai iegūtu koordinātas",
    "computing": "Notiek datu apstrāde...",
    "latitudeLabel": "Platums",
    "longitudeLabel": "Garums",
    "loading": "notiek ielāde...",
    "enableClick": "Noklikšķiniet, lai aktivizētu klikšķināšanu kartē koordinātu iegūšanai",
    "disableClick": "Noklikšķiniet, lai deaktivizētu klikšķināšanu kartē koordinātu iegūšanai",
    "Default": "Noklusējums",
    "Inches": "Collas",
    "Foot": "Pēdas",
    "Foot_US": "Pēdas_ASV",
    "Yards": "Jardi",
    "Miles": "Jūdzes",
    "Nautical_Miles": "Jūras jūdzes",
    "Millimeters": "Milimetri",
    "Centimeters": "Centimetri",
    "Meter": "Metri",
    "Kilometers": "Kilometri",
    "Decimeters": "Decimetri",
    "Decimal_Degrees": "Grādi",
    "Degree_Minutes_Seconds": "Grādi minūtes sekundes",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});