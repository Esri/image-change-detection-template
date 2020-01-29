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
    "error": "Kan ikke opprette kart",
    "licenseError": {
      "message": "Kontoen din er ikke lisensiert til å bruke konfigurerbare apper som ikke er offentlige. Be administratoren for organisasjonen om å tilordne deg en brukertype som omfatter Essential Apps eller en tilleggslisens for Essential Apps.",
      "title": "Ikke lisensiert"
    }
  },
  "nav": {
    "close": "Lukk"
  },
  "basemap": {
    "title": "Bakgrunnskartgalleri"
  },
  "operationalLayers": {
    "title": "Operative kartlag",
    "error": "Ingen operative lag i kartet."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Verktøy",
    "tool1": "Maske",
    "tool2": "Endringdeteksjon",
    "layer": "Lag",
    "layerText": "Velg bilder.",
    "basemap": "Bakgrunnskart",
    "maskImageSelector": "Velg ett eller flere bestemte bilder",
    "imageSelectorText": "Velg to bilder du vil sammenligne.",
    "changeText": "Konfigurer endringsdeteksjon.",
    "maskText": "Konfigurer maske.",
    "zoom": "Zoom inn for å velge bilder.",
    "primary": "Primærbilde",
    "comparison": "Sammenligningsbilde",
    "mode": "Visualiser endringer som",
    "method": "Metode",
    "changeMethodText": "Beregn endringer i",
    "positive": "Positivt",
    "negative": "Negativt",
    "threshold": "Terskel",
    "difference": "Differanse",
    "apply": "Bruk",
    "clear": "Tøm",
    "nir": "Infrarødt bånd",
    "red": "Rødt bånd",
    "green": "Grønt bånd",
    "swir": "Infrarødt kortbølgebånd",
    "band1": "Bånd A",
    "band2": "Bånd B",
    "mode1": "Differansebilde",
    "mode2": "Differansemaske",
    "mode3": "Terskelmaske",
    "method1": "Bildets lysstyrke",
    "method2": "Vegetasjonsindeks",
    "method3": "Jordjustert veg. Indeks",
    "method4": "Indeks for vann",
    "method5": "Indeks for brannskade",
    "method6": "Mindre enn terskelverdien",
    "method7": "Større enn terskelverdien",
    "method8": "Ett bånd",
    "method9": "Egendefinert indeks",
    "dropDown": "Vis bilder i nedtrekksmenyen.",
    "transparency": "Gjennomsiktighet(sresultater)",
    "slider": "Vis bilder på skyveknappen.",
    "error1": "Feltet er ikke spesifisert.",
    "error2": "Ingen OBJECTID-felt.",
    "error3": "Ingen kategorifelt.",
    "error4": "Kan ikke utføre handling for lag.",
    "error5": "Tjenester før 10.2.1 støttes ikke.",
    "error6": "Ingen scener i gjeldende utstrekning.",
    "error7": "Velg to forskjellige bilder.",
    "error8": "Ugyldig datoområde. Startdato må være før sluttdato.",
    "indexText": "Avanserte indeksalternativer",
    "date": "Dato",
    "areaText": "Områdereduksjon/-økning",
    "areaText2": "Brent område / område for gjenvekst etter brann",
    "areaText3": "Dekket areal",
    "unit": "km",
    "swipe": "Sveiping",
    "imageLabel": "bilde(r)",
    "extent": "Tegn polygon(er) for å definere utstrekning",
    "colorPicker": "Fargevelgeren",
    "refresh": "Oppdater-knapp",
    "refreshTooltip": "Oppdater bildelisten på bakgrunn av gjeldende utstrekning.",
    "colorpickerText": "Velg en maskefarge",
    "sliderText": "Angi terskelverdien",
    "maskModeText": "Hvilke verdier skal jeg maskere?",
    "positiveSliderText": "Angi minste økning som kreves mellom bildene før området vises i grønt.",
    "negativeSliderText": "Angi minste reduksjon som kreves mellom bildene før området vises i magenta.",
    "updateResult": "Bildet er endret. Klikk på Bruk for å oppdatere analysen."
  },
  "editor": {
    "title": "Redaktør",
    "error": "Finner ingen redigeringslag.",
    "error1": "Ingen tilgang. Lag kan ikke redigeres.",
    "text": "Velg et symbol og klikk på kartet."
  },
  "measurement": {
    "title": "Bildemål",
    "error": "Oppmålingsegenskaper støttes ikke."
  },
  "export": {
    "title": "Eksporter",
    "mode": "Lagre lokasjon",
    "titleText": "Tittel(påkrevd)",
    "description": "Beskrivelse",
    "tags": "Merker(påkrevd)",
    "preview": "Forhåndsvisning",
    "submit": "Lagre",
    "cancel": "Avbryt",
    "pixel": "Pikselstørrelse",
    "outsr": "Romlig referanse for utdata",
    "renderer": "Alternativer for TIFF-nedlasting",
    "formatText1": "Som vist",
    "formatText2": "Rådata(alle bånd)",
    "extent": "Tegn polygon for å definere utstrekning",
    "drawText": "(klikk på bildet for å starte)",
    "text": "Rådataene kan ikke vises på standard bildevisere. Åpne med ArcGIS Pro.",
    "error": "Ingen synlige bildelag på kartet.",
    "error1": "Du må fylle ut tittel.",
    "error2": "Merke(r) er påkrevd.",
    "error3": "Pikselstørrelse for eksport er begrenset til",
    "error4": "for denne utstrekningen.",
    "error5": "Angi en gyldig numerisk verdi.",
    "error6": "Bildet kan ikke eksporteres nå.",
    "thumbnailError": "Ingen tilgjengelige miniatyrbilder",
    "advance": "Avanserte lagringsalternativer",
    "modeOption1": "Lagre på portalen",
    "modeOption2": "Lagre på disk",
    "default": "Standard",
    "utm": "WGS84 UTM-sone",
    "layer": "Lag",
    "mercator": "WebMercatorAS",
    "folder": "Velg mappe"
  },
  "imageDate": {
    "label": "Bildedato"
  },
  "about": {
    "title": "Om"
  },
  "bookmark": {
    "title": "Bokmerker",
    "default": "Standard",
    "selectBookmark": "Velg bokmerker",
    "add": "Legg til bokmerker",
    "addTitle": "Angi tittel",
    "addBtn": "Legg til midlertidig"
  },
  "coordinate": {
    "_widgetLabel": "Koordinat",
    "hintMessage": "Klikk på kartet for å få koordinater",
    "defaultLabel": "Standard",
    "realtimeLabel": "Beveg musen for å få koordinater",
    "computing": "Behandler...",
    "latitudeLabel": "Breddegrad",
    "longitudeLabel": "Lengdegrad",
    "loading": "laster inn...",
    "enableClick": "Klikk for å aktivere funksjonen for å klikke på kartet for å få koordinater",
    "disableClick": "Klikk for å deaktivere funksjonen for å klikke på kartet for å få koordinater",
    "Default": "Standard",
    "Inches": "Tommer",
    "Foot": "Fot",
    "Foot_US": "Feet_US",
    "Yards": "Yard",
    "Miles": "Miles",
    "Nautical_Miles": "Nautiske mil",
    "Millimeters": "Millimeter",
    "Centimeters": "Centimeter",
    "Meter": "Meter",
    "Kilometers": "Kilometer",
    "Decimeters": "Desimeter",
    "Decimal_Degrees": "Grader",
    "Degree_Minutes_Seconds": "Grader minutter sekunder",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});