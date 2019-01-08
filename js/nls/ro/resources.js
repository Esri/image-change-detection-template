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
    "error": "Imposibil de creat harta",
    "licenseError": {
      "message": "Contul dvs. nu este licențiat să utilizeze aplicații configurabile care nu sunt publice. Solicitați-i administratorului organizației să vă aloce un tip de utilizator care include aplicații esențiale sau o licență pentru aplicații esențiale de completare.",
      "title": "Nelicențiat"
    }
  },
  "nav": {
    "close": "Închidere"
  },
  "basemap": {
    "title": "Galeria de hărți de fundal"
  },
  "operationalLayers": {
    "title": "Straturi tematice operaționale",
    "error": "Niciun strat tematic operațional pe hartă."
  },
  "imageMask": {
    "title": "Mască de imagine",
    "toolText": "Instrument",
    "tool1": "Mască",
    "tool2": "Detectare modificare",
    "layer": "Strat tematic",
    "layerText": "Alegeți imaginile dvs.",
    "maskImageSelector": "Alegerea unei imagini specifice/unor imagini specifice",
    "imageSelectorText": "Alegeți două imagini diferite pentru a le compara.",
    "changeText": "Configurați detectarea modificării.",
    "maskText": "Configurați masca.",
    "zoom": "Focalizați pentru a selecta imagini.",
    "primary": "Imagine primară",
    "comparison": "Imagine de comparație",
    "mode": "Vizualizarea modificărilor ca",
    "method": "Metodă",
    "changeMethodText": "Calcularea modificărilor în",
    "positive": "Pozitiv",
    "negative": "Negativ",
    "threshold": "Prag",
    "difference": "Diferență",
    "apply": "Aplicare",
    "clear": "Golire",
    "nir": "Bandă infraroșu",
    "red": "Bandă roșie",
    "green": "Bandă verde",
    "swir": "Bandă infraroșu de undă scurtă",
    "band1": "Banda A",
    "band2": "Banda B",
    "mode1": "Imagine diferențe",
    "mode2": "Mască diferențe",
    "mode3": "Mască praguri",
    "method1": "Luminozitatea imaginilor",
    "method2": "Indice de vegetație",
    "method3": "Indice de veg. ajustat cu solul",
    "method4": "Indice de apă",
    "method5": "Indice de ardere",
    "method6": "Mai mică decât pragul meu",
    "method7": "Mai mare decât pragul meu",
    "method8": "Bandă unică",
    "method9": "Indice particularizat",
    "dropDown": "Vor fi afișate imaginile în lista derulantă.",
    "transparency": "Transparență (rezultate)",
    "slider": "Vor fi afișate imaginile pe cursor.",
    "error1": "Câmpul nu este specificat.",
    "error2": "Niciun câmp OBJECTID.",
    "error3": "Niciun câmp Categorie.",
    "error4": "Nu se poate efectua acțiunea pentru stratul tematic.",
    "error5": "Servicii anterioare 10.2.1 neacceptate.",
    "error6": "Nicio scenă în extinderea curentă.",
    "error7": "Selectați două imagini diferite.",
    "indexText": "Opțiuni de indexare avansate",
    "date": "Data",
    "areaText": "Diminuare/creștere suprafață",
    "areaText2": "Suprafață refăcută după incendiu/arsă",
    "areaText3": "Suprafață acoperită",
    "unit": "km",
    "swipe": "Glisare",
    "imageLabel": "imagine (imagini)",
    "extent": "Trasați un poligon (poligoane) pentru a defini extinderea",
    "colorPicker": "Instrument de selectare a culorilor",
    "refresh": "Butonul Reîmprospătare",
    "refreshTooltip": "Reîmprospătați lista cu imagini pe baza extinderii curente.",
    "colorpickerText": "Alegerea unei culori pentru masca dvs.",
    "sliderText": "Setarea pragului dvs.",
    "maskModeText": "Ce valori ar trebui să maschez?",
    "positiveSliderText": "Setați creșterea maximă necesară între imagini înainte ca suprafața să fie afișată cu verde.",
    "negativeSliderText": "Setați creșterea minimă necesară între imagini înainte ca suprafața să fie afișată cu magenta.",
    "updateResult": "Imaginea dvs. s-a modificat; faceți clic pe Aplicare pentru a actualiza analiza."
  },
  "editor": {
    "title": "Editor",
    "error": "Niciun strat tematic de editare găsit.",
    "error1": "Acces refuzat. Straturile tematice nu pot fi editate.",
    "text": "Selectați un simbol și faceți clic pe hartă."
  },
  "measurement": {
    "title": "Măsurare imagine",
    "error": "Capacități de măsurare neacceptate."
  },
  "export": {
    "title": "Export",
    "mode": "Salvare locație",
    "titleText": "Titlu(obligatoriu)",
    "description": "Descriere",
    "tags": "Etichete(obligatorii)",
    "preview": "Previzualizare",
    "submit": "Salvare",
    "cancel": "Anulare",
    "pixel": "Dimensiune pixeli",
    "outsr": "Referință spațială de ieșire",
    "renderer": "Opțiuni descărcare TIFF",
    "formatText1": "Conform afișării",
    "formatText2": "Date brute(toate benzile)",
    "extent": "Trasați un poligon pentru a defini extinderea",
    "drawText": "(faceți clic pe imagine pentru a începe)",
    "text": "Datele brute nu pot fi afișate cu aplicații standard de vizualizare a fotografiilor. Deschideți cu ArcGIS Pro.",
    "error": "Niciun strat tematic imagistic vizibil pe hartă.",
    "error1": "Este necesar un titlu.",
    "error2": "Este necesară o etichetă (etichete).",
    "error3": "Dimensiunea pixelilor exportului este restricționată la",
    "error4": "pentru această extindere.",
    "error5": "Vă rugăm să introduceți o valoare numerică validă.",
    "error6": "Imaginea dvs. nu poate fi exportată în acest moment.",
    "thumbnailError": "Nicio miniatură nu este disponibilă",
    "advance": "Opțiuni de salvare avansate",
    "modeOption1": "Salvare pe portal",
    "modeOption2": "Salvare pe disc",
    "default": "Implicit",
    "utm": "Zona UTM WGS84",
    "layer": "Strat tematic",
    "mercator": "WebMercatorAS",
    "folder": "Selectaţi dosarul"
  },
  "imageDate": {
    "label": "Data imaginii"
  },
  "about": {
    "title": "Despre"
  },
  "bookmark": {
    "title": "Semne de carte",
    "default": "Implicit",
    "selectBookmark": "Selectare semne de carte",
    "add": "Adăugare semne de carte",
    "addTitle": "Introducere titlu",
    "addBtn": "Adăugare element temporar"
  }
});