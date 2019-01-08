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
    "error": "Kan ikke oprette kort",
    "licenseError": {
      "message": "Din konto har ikke licens til at bruge Konfigurérbare apps, der ikke er offentlige. Bed din organisationsadministrator om at knytte dig til en brugertype, der omfatter Essential Apps eller en add-on Essential Apps-licens.",
      "title": "Ikke licenseret"
    }
  },
  "nav": {
    "close": "Luk"
  },
  "basemap": {
    "title": "Galleri over baggrundskort"
  },
  "operationalLayers": {
    "title": "Operationelle lag",
    "error": "Ingen operationelle lag i kortet."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Værktøj",
    "tool1": "Maske",
    "tool2": "Ændringsdetektering",
    "layer": "Lag",
    "layerText": "Vælg dine billeder.",
    "maskImageSelector": "Vælg specifikt/specifikke billede(r)",
    "imageSelectorText": "Vælg to forskellige billeder, der skal sammenlignes.",
    "changeText": "Konfigurér registrering af ændringer.",
    "maskText": "Konfigurér maske.",
    "zoom": "Zoom ind for at vælge billeder.",
    "primary": "Primært billede",
    "comparison": "Sammenligningsbillede",
    "mode": "Visualisér ændringer som en/et",
    "method": "Metode",
    "changeMethodText": "Beregn ændringer i",
    "positive": "Positiv",
    "negative": "Negativ",
    "threshold": "Tærskel",
    "difference": "Forskel",
    "apply": "Anvend",
    "clear": "Ryd",
    "nir": "Infrarødt bånd",
    "red": "Rødt bånd",
    "green": "Grønt bånd",
    "swir": "Kortbølget infrarødt bånd",
    "band1": "Bånd A",
    "band2": "Bånd B",
    "mode1": "Forskelsbillede",
    "mode2": "Forskelsmaske",
    "mode3": "Tærskelmaske",
    "method1": "Billedes lysstyrke",
    "method2": "Vegetationsindeks",
    "method3": "Vegetation justeret for jordtype Indeks",
    "method4": "Vandindeks",
    "method5": "Brandindeks",
    "method6": "Mindre end min tærskel",
    "method7": "Større end min tærskel",
    "method8": "Enkelt bånd",
    "method9": "Brugerdefineret indeks",
    "dropDown": "Vis billeder i rulleliste.",
    "transparency": "Gennemsigtighed (resultater)",
    "slider": "Vis billeder på skyder.",
    "error1": "Felt er ikke specificeret.",
    "error2": "Intet OBJECTID-felt.",
    "error3": "Intet kategorifelt.",
    "error4": "Kan ikke udføre handling for laget.",
    "error5": "Tjenester før version 10.2.1 understøttes ikke.",
    "error6": "Ingen scener i aktuel udstrækning.",
    "error7": "Vælg to forskellige billeder.",
    "indexText": "Avancerede indeksindstillinger",
    "date": "Dato",
    "areaText": "Områdereduktion / -forøgelse",
    "areaText2": "Brændt område/ område med ny vækst efter brand",
    "areaText3": "Dækket område",
    "unit": "km",
    "swipe": "Swipe",
    "imageLabel": "billede(r)",
    "extent": "Tegn polygon(er) for at definere udstrækning",
    "colorPicker": "Farvevælger",
    "refresh": "Knappen Opdatér",
    "refreshTooltip": "Opdatér billedlisten ud fra den aktuelle udstrækning.",
    "colorpickerText": "Vælg en farve til din maske",
    "sliderText": "Indstil din tærskel",
    "maskModeText": "Hvilke værdier skal jeg maskere?",
    "positiveSliderText": "Indstil den minimumsforøgelse, der kræves mellem billederne, før området vises med grøn farve.",
    "negativeSliderText": "Indstil den minimumsreduktion, der kræves mellem billederne, før området vises med magenta farve.",
    "updateResult": "Dit billede er ændret. Klik på Anvend for at opdatere analysen."
  },
  "editor": {
    "title": "Redigering",
    "error": "Der blev ikke fundet noget redigeringslag.",
    "error1": "Adgang nægtet. Lagene kan ikke redigeres.",
    "text": "Vælg et symbol, og klik på kortet."
  },
  "measurement": {
    "title": "Billedmåling",
    "error": "Målefunktioner understøttes ikke."
  },
  "export": {
    "title": "Eksportér",
    "mode": "Gem position",
    "titleText": "Titel (obligatorisk)",
    "description": "Beskrivelse",
    "tags": "Nøgleord (obligatorisk)",
    "preview": "Eksempel",
    "submit": "Gem",
    "cancel": "Annuller",
    "pixel": "Pixelstørrelse",
    "outsr": "Output-spatial reference",
    "renderer": "TIFF-downloadindstillinger",
    "formatText1": "Som vist",
    "formatText2": "Rå data (alle bånd)",
    "extent": "Tegn polygon for at definere udstrækning",
    "drawText": "(klik på billede for at starte)",
    "text": "De rå data kan ikke vises med standard-fotovisningsprogrammer. Åbn med ArcGIS Pro.",
    "error": "Ingen synlige billedlag på kortet.",
    "error1": "Titel er påkrævet.",
    "error2": "Nøgleord er påkrævet.",
    "error3": "Pixelstørrelsen på eksporten er begrænset til",
    "error4": "for denne udstrækning",
    "error5": "Angiv en gyldig numerisk værdi.",
    "error6": "Dit billede kan ikke eksporteres på nuværende tidspunkt.",
    "thumbnailError": "Intet miniaturebillede er tilgængeligt",
    "advance": "Avancerede lagringsindstillinger",
    "modeOption1": "Gem på portal",
    "modeOption2": "Gem på disk",
    "default": "Standard",
    "utm": "WGS84 UTM zone",
    "layer": "Lag",
    "mercator": "WebMercatorAS",
    "folder": "Vælg mappe"
  },
  "imageDate": {
    "label": "Billeddato"
  },
  "about": {
    "title": "Om"
  },
  "bookmark": {
    "title": "Bogmærker",
    "default": "Standard",
    "selectBookmark": "Vælg bogmærker",
    "add": "Tilføj bogmærker",
    "addTitle": "Indtast titel",
    "addBtn": "Tilføj midlertidig"
  }
});