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
    "error": "Det går inte att skapa kartan",
    "licenseError": {
      "message": "Ditt konto har ingen licens för att använda konfigurerbara appar som inte är tillgängliga för allmänheten. Be din organisations administratör att tilldela dig en användartyp som omfattar Essential Apps eller en tilläggslicens för Essential Apps.",
      "title": "Inte licensierad"
    }
  },
  "nav": {
    "close": "Stäng"
  },
  "basemap": {
    "title": "Baskartgalleri"
  },
  "operationalLayers": {
    "title": "Funktionslager",
    "error": "Inga funktionslager i kartan."
  },
  "imageMask": {
    "title": "Bildmask",
    "toolText": "Verktyg",
    "tool1": "Maska",
    "tool2": "Identifiera ändring",
    "layer": "Lager",
    "layerText": "Välj dina bilder.",
    "basemap": "Baskarta",
    "maskImageSelector": "Välj en eller flera specifika bilder",
    "imageSelectorText": "Välj två olika bilder för jämförelse.",
    "changeText": "Konfigurera förändringsdetektion.",
    "maskText": "Konfigurera mask.",
    "zoom": "Zooma in för att välja bilder.",
    "primary": "Primärbild",
    "comparison": "Jämförelsebild",
    "mode": "Visualisera ändringar som en",
    "method": "Metod",
    "changeMethodText": "Beräkna ändringar i",
    "positive": "Positivt",
    "negative": "Negativt",
    "threshold": "Tröskel",
    "difference": "Skillnad",
    "apply": "Verkställ",
    "clear": "Avmarkera",
    "nir": "Infrarött band",
    "red": "Rött band",
    "green": "Grönt band",
    "swir": "Infrarött kortvågsband",
    "band1": "Band A",
    "band2": "Band B",
    "mode1": "Differensbild",
    "mode2": "Differensmask",
    "mode3": "Tröskelmask",
    "method1": "Bildens ljusstyrka",
    "method2": "Vegetation Index",
    "method3": "Markjusterad veg. Index",
    "method4": "Vattenindex",
    "method5": "Förbränningsindex",
    "method6": "Lägre än mitt tröskelvärde",
    "method7": "Högre än mitt tröskelvärde",
    "method8": "Ett band",
    "method9": "Anpassat index",
    "dropDown": "Visa bilder i listrutan.",
    "transparency": "Transparens(resultat)",
    "slider": "Visa bilder i skjutreglaget.",
    "error1": "Fältet är inte angivet.",
    "error2": "Inget OBJECTID-fält.",
    "error3": "Inget kategorifält.",
    "error4": "Det går inte att utföra åtgärden för lagret.",
    "error5": "Tjänster tidigare än 10.2.1 stöds inte.",
    "error6": "Inga scener i den aktuella utbredningen.",
    "error7": "Välj två olika bilder.",
    "error8": "Ogiltigt datumintervall: startdatum måste vara mindre än slutdatum.",
    "indexText": "Avancerade alternativ för att skapa index",
    "date": "Datum",
    "areaText": "Ökning/minskning av område",
    "areaText2": "Bränt område/återväxtområde",
    "areaText3": "Genomgånget område",
    "unit": "km",
    "swipe": "Svep",
    "imageLabel": "bilder",
    "extent": "Rita polygoner för att definiera utbredning",
    "colorPicker": "Färgurval",
    "refresh": "Knappen Uppdatera",
    "refreshTooltip": "Uppdatera bildlistan baserat på den aktuella utbredningen.",
    "colorpickerText": "Välj en färg för masken",
    "sliderText": "Ange tröskelvärde",
    "maskModeText": "Vilka värden ska jag maska?",
    "positiveSliderText": "Ange den minsta ökningen som krävs mellan bilderna innan området visas i grönt.",
    "negativeSliderText": "Ange den minsta minskningen som krävs mellan bilderna innan området visas i magenta.",
    "updateResult": "Bilden har ändrats. Klicka på Tillämpa för att uppdatera analysen."
  },
  "editor": {
    "title": "Redigerare",
    "error": "Inget redigeringslager hittades.",
    "error1": "Åtkomst nekad. Lagren kan inte att redigeras.",
    "text": "Välj en symbol och klicka på kartan."
  },
  "measurement": {
    "title": "Bildmätning",
    "error": "Mätfunktionerna stöds inte."
  },
  "export": {
    "title": "Exportera",
    "mode": "Spara plats",
    "titleText": "Titel (obligatoriskt)",
    "description": "Beskrivning",
    "tags": "Taggar (obligatoriskt)",
    "preview": "Förhandsgranska",
    "submit": "Spara",
    "cancel": "Avbryt",
    "pixel": "Pixelstorlek",
    "outsr": "Geografisk referens för utdata",
    "renderer": "Hämtningsalternativ för TIFF",
    "formatText1": "Som visas",
    "formatText2": "Rådata (alla band)",
    "extent": "Rita polygon för att definiera utbredning",
    "drawText": "(klicka på bilden för att starta)",
    "text": "Rådata kan inte visas med standardbildvisare. Öppna med ArcGIS Pro.",
    "error": "Inga synliga bildlager i kartan.",
    "error1": "Titel krävs.",
    "error2": "Tagg(ar) krävs.",
    "error3": "Pixelstorleken i exporten begränsas till",
    "error4": "för denna utbredning.",
    "error5": "Ange ett giltigt numeriskt värde.",
    "error6": "Bilden kan inte exporteras för närvarande.",
    "thumbnailError": "Ingen miniatyrbild finns tillgänglig",
    "advance": "Avancerade alternativ för att spara",
    "modeOption1": "Spara i portal",
    "modeOption2": "Spara på disk",
    "default": "Standard",
    "utm": "WGS84 UTM-zon",
    "layer": "Lager",
    "mercator": "WebMercatorAS",
    "folder": "Välj mapp"
  },
  "imageDate": {
    "label": "Bilddatum"
  },
  "about": {
    "title": "Om"
  },
  "bookmark": {
    "title": "Bokmärken",
    "default": "Standard",
    "selectBookmark": "Välj bokmärken",
    "add": "Lägg till bokmärken",
    "addTitle": "Ange en titel",
    "addBtn": "Lägg till temporär"
  },
  "coordinate": {
    "_widgetLabel": "Koordinat",
    "hintMessage": "Klicka på kartan för att hämta koordinater",
    "defaultLabel": "Standard",
    "realtimeLabel": "Flytta musen för att hämta koordinater",
    "computing": "Beräknar ...",
    "latitudeLabel": "Latitud",
    "longitudeLabel": "Longitud",
    "loading": "läser in...",
    "enableClick": "Klicka om du vill aktivera att få koordinater genom att klicka på kartan",
    "disableClick": "Klicka om du vill inaktivera att få koordinater genom att klicka på kartan",
    "Default": "Standard",
    "Inches": "Tum",
    "Foot": "Fot",
    "Foot_US": "Fot_US",
    "Yards": "Yard",
    "Miles": "Mile",
    "Nautical_Miles": "Nautiska mil",
    "Millimeters": "Millimetrar",
    "Centimeters": "Centimeter",
    "Meter": "Meter",
    "Kilometers": "Kilometer",
    "Decimeters": "Decimeter",
    "Decimal_Degrees": "Grader",
    "Degree_Minutes_Seconds": "Grader minuter sekunder",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});