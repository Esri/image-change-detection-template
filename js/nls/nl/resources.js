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
    "error": "Kaart kan niet gemaakt worden",
    "licenseError": {
      "message": "Uw account heeft geen licentie om configureerbare apps te gebruiken die niet openbaar zijn. Vraag uw organisatiebeheerder om u een gebruikerstype toe te wijzen dat Essential Apps of een add-on Essential Apps-licentie bevat.",
      "title": "Geen licentie"
    }
  },
  "nav": {
    "close": "Sluiten"
  },
  "basemap": {
    "title": "Basiskaartgalerij"
  },
  "operationalLayers": {
    "title": "Operationele lagen",
    "error": "Geen operationele lagen in de kaart."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Tool",
    "tool1": "Masker",
    "tool2": "Veranderdetectie",
    "layer": "Kaartlaag",
    "layerText": "Kies uw afbeeldingen.",
    "basemap": "Basemap",
    "maskImageSelector": "Specifieke afbeelding(en) kiezen",
    "imageSelectorText": "Kies twee verschillende afbeeldingen ter vergelijking.",
    "changeText": "Wijzigingsdetectie configureren.",
    "maskText": "Masker configureren.",
    "zoom": "Inzoomen om afbeeldingen te selecteren.",
    "primary": "Primaire afbeelding",
    "comparison": "Vergelijkingsafbeelding",
    "mode": "Wijzigingen visualiseren als een",
    "method": "Methode",
    "changeMethodText": "Wijzigingen berekenen in",
    "positive": "Positief",
    "negative": "Negatief",
    "threshold": "Drempel",
    "difference": "Verschil",
    "apply": "Toepassen",
    "clear": "Annuleren",
    "nir": "Infrarode band",
    "red": "Rode band",
    "green": "Groene band",
    "swir": "Kortegolf Infraroodband",
    "band1": "Band A",
    "band2": "Band B",
    "mode1": "Verschil beeld",
    "mode2": "Verschil masker",
    "mode3": "Drempel masker",
    "method1": "Helderheid van de afbeelding",
    "method2": "Vegetatie-Index",
    "method3": "Grond aangepaste veg. Index",
    "method4": "Waterindex",
    "method5": "Verbrandingsindex",
    "method6": "Minder dan mijn drempel",
    "method7": "Meer dan mijn drempel",
    "method8": "Enkele band",
    "method9": "Aangepaste index",
    "dropDown": "Toon afbeeldingen in de vervolgkeuzelijst.",
    "transparency": "Transparantie(resultaten)",
    "slider": "Toon afbeeldingen op de schuifregelaar.",
    "error1": "Veld is niet gespecificeerd.",
    "error2": "Geen OBJECTID veld.",
    "error3": "Geen categorieveld",
    "error4": "Kan geen actie uitvoeren voor de laag.",
    "error5": "Services voor 10.2.1 niet ondersteund.",
    "error6": "Geen scenes in de huidige omvang.",
    "error7": "Selecteer twee verschillende afbeeldingen.",
    "error8": "Ongeldig datumbereik: startdatum moet kleiner zijn dan de einddatum.",
    "indexText": "Geavanceerde indexopties",
    "date": "Datum",
    "areaText": "Gebied verkleinen / vergroten",
    "areaText2": "Verbrand / groei hersteld na brand",
    "areaText3": "Betroffen gebied",
    "unit": "km",
    "swipe": "Swipe",
    "imageLabel": "Afbeelding(en)",
    "extent": "Teken polygo(o)n(en) om de extent te bepalen",
    "colorPicker": "Kleurenkiezer",
    "refresh": "Vernieuwknop",
    "refreshTooltip": "Ververs de afbeeldingenlijst op basis van de huidige extent.",
    "colorpickerText": "Een kleur kiezen voor uw masker",
    "sliderText": "Uw drempel instellen",
    "maskModeText": "Welke waarden moet ik maskeren?",
    "positiveSliderText": "Stel de minimale vereiste stijging tussen de afbeeldingen in voordat het gebied in het groen wordt weergegeven.",
    "negativeSliderText": "Stel de minimale vereiste daling tussen de afbeeldingen in voordat het gebied in het magenta wordt weergegeven.",
    "updateResult": "Uw beeld is veranderd; klik op Toepassen om de analyse bij te werken."
  },
  "editor": {
    "title": "Editor",
    "error": "Geen bewerkingslaag gevonden.",
    "error1": "Toegang afgewezen. Lagen kunnen niet bewerkt worden.",
    "text": "Selecteer een symbool en klik op de kaart."
  },
  "measurement": {
    "title": "Beeldmeting",
    "error": "Mensuratiemogelijkheden niet ondersteund."
  },
  "export": {
    "title": "Exporteren",
    "mode": "Locatie opslaan",
    "titleText": "Titel (vereist)",
    "description": "Beschrijving",
    "tags": "Tags (vereist)",
    "preview": "Voorbeeld",
    "submit": "Opslaan",
    "cancel": "Afbreken",
    "pixel": "Pixelgrootte",
    "outsr": "Uitvoer ruimtelijke referentie",
    "renderer": "Downloadopties TIFF",
    "formatText1": "Als weergegeven",
    "formatText2": "Raw data (alle banden)",
    "extent": "Teken polygoon om de extent te bepalen",
    "drawText": "(op afbeelding klikken om te beginnen)",
    "text": "De raw data kunnen niet worden weergegeven met de standaard foto-viewers. Openen met ArcGIS Pro.",
    "error": "Geen zichtbare satellietbeeldlagen op de kaart.",
    "error1": "Titel is vereist.",
    "error2": "Tag(s) is verplicht.",
    "error3": "PixelSize van export is beperkt tot",
    "error4": "voor deze extent.",
    "error5": "Voer een geldige numerieke waarde in.",
    "error6": "Uw afbeelding kan nu niet worden geëxporteerd.",
    "thumbnailError": "Geen thumbnail beschikbaar",
    "advance": "Geavanceerde opties voor opslaan",
    "modeOption1": "Opslaan naar portaal",
    "modeOption2": "Opslaan op schijf",
    "default": "Standaard",
    "utm": "WGS84 UTM Zone",
    "layer": "Kaartlaag",
    "mercator": "WebMercatorAS",
    "folder": "Selecteer map"
  },
  "imageDate": {
    "label": "Beeldgegevens"
  },
  "about": {
    "title": "Over"
  },
  "bookmark": {
    "title": "Bladwijzers",
    "default": "Standaard",
    "selectBookmark": "Bladwijzers selecteren",
    "add": "Bladwijzers toevoegen",
    "addTitle": "Voer een titel in",
    "addBtn": "Voeg tijdelijk toe"
  },
  "coordinate": {
    "_widgetLabel": "Coördinaat",
    "hintMessage": "Klik op de kaart om de coördinaten te krijgen",
    "defaultLabel": "Standaard",
    "realtimeLabel": "Beweeg de muis om de coördinaten te verkrijgen",
    "computing": "Bezig met berekenen...",
    "latitudeLabel": "Breedtegraad",
    "longitudeLabel": "Lengtegraad",
    "loading": "laden...",
    "enableClick": "Klik om, coördinaten te krijgen bij het klikken op de kaart, in te schakelen",
    "disableClick": "Klik om, coördinaten te krijgen bij het klikken op de kaart, uit te schakelen",
    "Default": "Standaard",
    "Inches": "Inch",
    "Foot": "Voet",
    "Foot_US": "Voet_VS",
    "Yards": "Yard",
    "Miles": "Mijl",
    "Nautical_Miles": "Zeemijl",
    "Millimeters": "Millimeter",
    "Centimeters": "Centimeter",
    "Meter": "Meter",
    "Kilometers": "Kilometer",
    "Decimeters": "Decimeter",
    "Decimal_Degrees": "Graden",
    "Degree_Minutes_Seconds": "Graden minuten seconden",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});