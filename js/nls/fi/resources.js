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
    "error": "Karttaa ei voi luoda"
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
  "layerSelector": {
    "active": "Aktiivinen karttataso",
    "comparison": "Vertailukarttataso",
    "other": "Muu",
    "result": "Tulos",
    "title": "Karttatason valitsin",
    "resultSave": "Lisää tuloskarttataso vertailukarttatasojen luetteloon",
    "copy": "Kopioi aktiivinen karttataso vertailukarttatasoon.",
    "swap": "Vaihda aktiivinen karttataso ja vertailukarttataso."
  },
  "renderer": {
    "title": "Renderöinti",
    "stretch": "Venytysparametrit",
    "stretchType": "Venytystyyppi",
    "dra": "DRA",
    "draText": "Dynaamisen alueen säätö päivittää parannukset nykyisen näkymän perusteella",
    "gamma": "Gamma",
    "apply": "Käytä",
    "top": "Jätä pois yläosa",
    "bottom": "Jätä pois alaosa",
    "topText": " Jätä pois histogrammin yläosasta x prosenttia",
    "bottomText": " Jätä pois histogrammin alaosasta x prosenttia",
    "stdDev": "Keskihajontojen määrä",
    "layer": "Nykyinen taso",
    "error": "Kartassa ei ole näkyviä kuva-aineistokarttatasoja."
  },
  "imageSelector": {
    "title": "Kuvan valitsin",
    "enable": "Ota kuvan valitsin käyttöön",
    "secondary": "Määritä aktiivinen karttataso vertailukarttatasoksi.",
    "dropDown": "Näytä kuvat avattavassa luettelossa.",
    "refresh": "Päivitä kysely nykyisen laajuuden perusteella.",
    "show": "Näytä",
    "age": "Ikä",
    "zoom": "Valitse kuvia tarkentamalla.",
    "error": "Kartassa ei ole näkyviä kuva-aineistokarttatasoja.",
    "error1": "Kenttää ei ole määritetty.",
    "error2": "OBJECTID-kenttää ei ole.",
    "error3": "Luokkakenttää ei ole.",
    "error4": "Toimintoa ei voi tehdä karttatasossa.",
    "error5": "Versiota 10.2.1 edeltäviä palveluita ei tueta.",
    "error6": "Nykyisessä laajuudessa ei ole maisemia.",
    "error7": "Valittuja peittoalueita on yli 20. Vain ensimmäiset 20 näytetään. Älä varoita uudelleen valitsemalla OK.",
    "slider": "Näytä kuvat liukusäätimessä."
  },
  "changeDetection": {
    "title": "Muutoksen tunnistus",
    "mode": "Tila",
    "method": "Metodi",
    "positive": "Positiivinen ero",
    "negative": "Negatiivinen ero",
    "threshold": "Raja-arvo",
    "difference": "Ero",
    "apply": "Käytä",
    "error": "Muutosten havaitseminen toimii vertailemalla kahta saman palvelun kuvaa eri ajankohdilta.<br />Määritä ensin yksi kuva käyttämällä kuvan valitsinta,<br />napsauta sen jälkeen <img src='images/down.png' height='14'/>-painiketta ja valitse toinen kuva.<br />Jatka muutosten havaitsemista palaamalla tähän ohjausobjektiin."
  },
  "editor": {
    "title": "Muokkaaja",
    "error": "Muokkauskarttatasoa ei ole valittu.",
    "error1": "Käyttö estetty. Karttatasoja ei voi muokata."
  },
  "measurement": {
    "title": "Kuvan mitat",
    "error": "Mittausominaisuuksia ei tueta."
  },
  "export": {
    "title": "Vie",
    "mode": "Tila",
    "titleText": "Otsikko",
    "description": "Kuvaus",
    "tags": "Tunnisteet",
    "submit": "Lähetä",
    "pixel": "Pikselikoko",
    "outsr": "Tulosaineiston koordinaattijärjestelmä",
    "renderer": "Nykyinen renderöijä",
    "extent": "Määritä laajuus",
    "text": "Jos nykyinen renderöijä on valittu, renderöinti<br /> viedään, muuten alkuperäiset aineistoarvot<br/> viedään.",
    "error": "Kartassa ei ole näkyviä kuva-aineistokarttatasoja.",
    "error1": "Otsikko on pakollinen.",
    "error2": "Tunniste on pakollinen."
  },
  "compare": {
    "title": "Vertaa",
    "slider": "Läpinäkyvyyden liukusäädin",
    "hSwipe": "Vaakasuuntainen pyyhkäisy",
    "vSwipe": "Pystysuuntainen pyyhkäisy",
    "error": "Kartassa ei ole näkyviä kuva-aineistokarttatasoja vertailua varten."
  }
});