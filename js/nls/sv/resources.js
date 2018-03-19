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
    "error": "Det går inte att skapa kartan"
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
  "layerSelector": {
    "active": "Aktivt lager",
    "comparison": "Jämförelselager",
    "other": "Annat",
    "result": "Resultat",
    "title": "Lagerväljare",
    "resultSave": "Lägg till resultatlagret i jämförelselagerlistan",
    "copy": "Kopiera aktivt lager till jämförelselager.",
    "swap": "Växla aktivt lager och jämförelselager."
  },
  "renderer": {
    "title": "Renderare",
    "stretch": "Sträckparametrar",
    "stretchType": "Sträckningstyp",
    "dra": "DRA",
    "draText": "Dynamisk intervalljustering uppdaterar förbättringen baserat på aktuell vy",
    "gamma": "Gamma",
    "apply": "Verkställ",
    "top": "Uteslut översta",
    "bottom": "Uteslut nedersta",
    "topText": " Uteslut översta x procent av histogrammet",
    "bottomText": " Uteslut nedersta x procent av histogrammet",
    "stdDev": "# av stdavvik.",
    "layer": "Aktuellt lager",
    "error": "Inga synliga bildlager i kartan."
  },
  "imageSelector": {
    "title": "Bildväljare",
    "enable": "Aktivera bildväljare",
    "secondary": "Ange aktivt som jämförelselager.",
    "dropDown": "Visa bilder i listrutan.",
    "refresh": "Uppdatera frågan baserat på den aktuella utbredningen.",
    "show": "Visa",
    "age": "Ålder",
    "zoom": "Zooma in för att välja bilder.",
    "error": "Inga synliga bildlager i kartan.",
    "error1": "Fältet är inte angivet.",
    "error2": "Inget OBJECTID-fält.",
    "error3": "Inget kategorifält.",
    "error4": "Det går inte att utföra åtgärden för lagret.",
    "error5": "Tjänster tidigare än 10.2.1 stöds inte.",
    "error6": "Inga scener i den aktuella utbredningen.",
    "error7": "Antalet valda avtryck överstiger 20. Endast de 20 första visas. Tryck på OK om varningen inte ska visas igen.",
    "slider": "Visa bilder i skjutreglaget."
  },
  "changeDetection": {
    "title": "Identifiera ändring",
    "mode": "Läge",
    "method": "Metod",
    "positive": "Positiv skillnad",
    "negative": "Negativ skillnad",
    "threshold": "Tröskel",
    "difference": "Skillnad",
    "apply": "Verkställ",
    "error": "Identifiera ändring fungerar med två bilder med olika datum från samma tjänst.<br />Använd först Bildväljaren för att definiera en bild,<br />klicka sedan på <img src='images/down.png' height='14'/> och välj den andra bilden.<br />Återgå till den här kontrollen för att fortsätta identifiera ändringar."
  },
  "editor": {
    "title": "Redigerare",
    "error": "Inget redigeringslager är markerat.",
    "error1": "Åtkomst nekad. Det går inte att redigera lager."
  },
  "measurement": {
    "title": "Bildmätning",
    "error": "Mätfunktionerna stöds inte."
  },
  "export": {
    "title": "Exportera",
    "mode": "Läge",
    "titleText": "Titel",
    "description": "Beskrivning",
    "tags": "Taggar",
    "submit": "Utför",
    "pixel": "Pixelstorlek",
    "outsr": "Geografisk referens för utdata",
    "renderer": "Aktuell renderare",
    "extent": "Definiera utbredning",
    "text": "Om Aktuell renderare är markerat exporteras renderingen<br />, annars exporteras de ursprungliga datavärderna<br/>.",
    "error": "Inga synliga bildlager i kartan.",
    "error1": "Titel krävs.",
    "error2": "Tagg(ar) krävs."
  },
  "compare": {
    "title": "Jämför",
    "slider": "Skjutreglage för transparens",
    "hSwipe": "Svep vågrätt",
    "vSwipe": "Svep lodrätt",
    "error": "Inga synliga bildlager tillgängliga för jämförelse."
  }
});