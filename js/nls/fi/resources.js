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
    "error": "Karttaa ei voi luoda",
    "licenseError": {
      "message": "Tiliäsi ei ole lisensoitu käyttämään muunneltavissa olevia sovelluksia, jotka eivät ole julkisia. Pyydä organisaatiosi pääkäyttäjää määrittämään sinulle käyttäjätyyppi, joka sisältää keskeiset sovellukset tai keskeisten sovellusten lisäosan lisenssin.",
      "title": "Ei lisenssiä"
    }
  },
  "nav": {
    "close": "Sulje"
  },
  "basemap": {
    "title": "Taustakartat"
  },
  "operationalLayers": {
    "title": "Toiminnalliset karttatasot",
    "error": "Kartassa ei ole toiminnallisia karttatasoja."
  },
  "imageMask": {
    "title": "Kuvamaski",
    "toolText": "Työkalu",
    "tool1": "Maski",
    "tool2": "Muutoksen tunnistus",
    "layer": "Karttataso",
    "layerText": "Valitse kuva-aineisto.",
    "basemap": "Taustakartta",
    "maskImageSelector": "Valitse tietyt kuvat",
    "imageSelectorText": "Valitse kaksi eri kuvaa vertailua varten.",
    "changeText": "Määritä muutoksen havaitseminen.",
    "maskText": "Määritä maski.",
    "zoom": "Valitse kuvia tarkentamalla.",
    "primary": "Ensisijainen kuva",
    "comparison": "Vertailukuva",
    "mode": "Visualisoi muutokset muodossa",
    "method": "Metodi",
    "changeMethodText": "Laske muutokset kohteessa",
    "positive": "Positiivinen",
    "negative": "Negatiivinen",
    "threshold": "Raja-arvo",
    "difference": "Ero",
    "apply": "Käytä",
    "clear": "Tyhjennä",
    "nir": "Infrapunakaista",
    "red": "Punainen kaista",
    "green": "Vihreä kaista",
    "swir": "Lyhytaaltoinfrapunakaista",
    "band1": "Kaista A",
    "band2": "Kaista B",
    "mode1": "Kahden kuvan vähennyslaskusta syntyvä kuva",
    "mode2": "Eron maski",
    "mode3": "Kynnysarvon maski",
    "method1": "Kuvan kirkkaus",
    "method2": "Kasvillisuuden indeksi",
    "method3": "Maaperäkorjattu kasvill. Hakemisto",
    "method4": "Vesi-indeksi",
    "method5": "Paloindeksi",
    "method6": "Pienempi kuin kynnysarvoni",
    "method7": "Suurempi kuin kynnysarvoni",
    "method8": "Yksikaistainen",
    "method9": "Muokattu indeksi",
    "dropDown": "Näytä kuvat avattavassa luettelossa.",
    "transparency": "Läpinäkyvyys (tulokset)",
    "slider": "Näytä kuvat liukusäätimessä.",
    "error1": "Kenttää ei ole määritetty.",
    "error2": "OBJECTID-kenttää ei ole.",
    "error3": "Luokkakenttää ei ole.",
    "error4": "Toimintoa ei voi tehdä karttatasossa.",
    "error5": "Versiota 10.2.1 edeltäviä palveluita ei tueta.",
    "error6": "Nykyisessä laajuudessa ei ole maisemia.",
    "error7": "Valitse kaksi erilaista kuvaa.",
    "error8": "Virheellinen päivämääräväli: aloituspäivämäärän on oltava lopetuspäivämäärää aiempi.",
    "indexText": "Indeksin lisäasetukset",
    "date": "Päivämäärä",
    "areaText": "Alueen kasvaminen/pienentyminen",
    "areaText2": "Palanut / Palon jälkeen uudelleen kasvanut alue",
    "areaText3": "Katettu alue",
    "unit": "km",
    "swipe": "Pyyhkäise",
    "imageLabel": "kuva(t)",
    "extent": "Määritä laajuus piirtämällä aluekohteet",
    "colorPicker": "Värinvalitsin",
    "refresh": "Päivitä-painike",
    "refreshTooltip": "Päivitä kuvaluettelo nykyisen laajuuden perusteella.",
    "colorpickerText": "Valitse maskin väri",
    "sliderText": "Määritä kynnysarvosi",
    "maskModeText": "Mitkä arvot maskaan?",
    "positiveSliderText": "Määritä vähimmäislisäys, jota edellytetään kuvien välillä, ennen kuin alue näytetään vihreänä.",
    "negativeSliderText": "Määritä vähimmäisvähennys, jota edellytetään kuvien välillä, ennen kuin alue näytetään magentan värisenä.",
    "updateResult": "Kuva on muuttunut. Päivitä analyysi napsauttamalla Käytä."
  },
  "editor": {
    "title": "Muokkaaja",
    "error": "Muokkauskarttatasoa ei löytynyt.",
    "error1": "Käyttö estetty. Karttatasoja ei voi muokata.",
    "text": "Valitse symboli ja napsauta karttaa."
  },
  "measurement": {
    "title": "Kuvan mitat",
    "error": "Mittausominaisuuksia ei tueta."
  },
  "export": {
    "title": "Vie",
    "mode": "Tallenna sijainti",
    "titleText": "Otsikko (pakollinen)",
    "description": "Kuvaus",
    "tags": "Tunnisteet (pakollinen)",
    "preview": "Esikatselu",
    "submit": "Tallenna",
    "cancel": "Peruuta",
    "pixel": "Pikselikoko",
    "outsr": "Tulosaineiston koordinaattijärjestelmä",
    "renderer": "TIFF-kuvan latausasetukset",
    "formatText1": "Näytetyssä muodossa",
    "formatText2": "Raaka-aineisto (kaikki kaistat)",
    "extent": "Määritä laajuus piirtämällä aluekohde",
    "drawText": "(aloita napsauttamalla kuvaa)",
    "text": "Raaka-aineistoa voi tarkastella vakiomuotoisilla valokuvien katseluohjelmilla. Avaa ArcGIS Prossa.",
    "error": "Kartassa ei ole näkyviä kuva-aineistokarttatasoja.",
    "error1": "Otsikko on pakollinen.",
    "error2": "Tunniste on pakollinen.",
    "error3": "Viennin pikselikoko on rajoitettu arvoon",
    "error4": "tämän laajuuden osalta.",
    "error5": "Anna kelvollinen numeroarvo.",
    "error6": "Kuvaasi ei voi viedä tällä kertaa.",
    "thumbnailError": "Pikkukuvaa ei käytettävissä",
    "advance": "Tallennuksen lisäasetukset",
    "modeOption1": "Tallenna portaaliin",
    "modeOption2": "Tallenna levylle",
    "default": "Oletusarvo",
    "utm": "WGS84 UTM -vyöhyke",
    "layer": "Karttataso",
    "mercator": "WebMercatorAS",
    "folder": "Valitse kansio"
  },
  "imageDate": {
    "label": "Kuvan päivämäärä"
  },
  "about": {
    "title": "Tietoja"
  },
  "bookmark": {
    "title": "Kirjanmerkit",
    "default": "Oletusarvo",
    "selectBookmark": "Valitse kirjanmerkit",
    "add": "Lisää kirjanmerkkejä",
    "addTitle": "Anna otsikko",
    "addBtn": "Lisää tilapäinen"
  },
  "coordinate": {
    "_widgetLabel": "Koordinaatti",
    "hintMessage": "Nouda koordinaatit napsauttamalla karttaa",
    "defaultLabel": "Oletusarvo",
    "realtimeLabel": "Nouda koordinaatit siirtämällä hiirtä",
    "computing": "Lasketaan...",
    "latitudeLabel": "Leveysaste",
    "longitudeLabel": "Pituusaste",
    "loading": "ladataan ...",
    "enableClick": "Ota käyttöön koordinaattien nouto karttaa napsauttamalla",
    "disableClick": "Poista käytöstä koordinaattien nouto karttaa napsauttamalla",
    "Default": "Oletusarvo",
    "Inches": "Tuumaa",
    "Foot": "Jalkaa",
    "Foot_US": "Jalkaa_US",
    "Yards": "Jaardia",
    "Miles": "Mailia",
    "Nautical_Miles": "Meripeninkulmaa",
    "Millimeters": "Millimetriä",
    "Centimeters": "Senttimetriä",
    "Meter": "Metriä",
    "Kilometers": "Kilometriä",
    "Decimeters": "Desimetriä",
    "Decimal_Degrees": "Asteet",
    "Degree_Minutes_Seconds": "Astetta minuuttia sekuntia",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});