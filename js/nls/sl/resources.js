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
    "error": "Karte ni mogoče ustvariti",
    "licenseError": {
      "message": "Vaš račun ni licenciran za uporabo konfigurabilnih aplikacij, ki niso javne. Prosite administratorja v vaši organizaciji, da vam dodeli tip uporabnika, ki vsebuje aplikacije Essential Apps ali licenco za dodatne aplikacije Essential Apps.",
      "title": "Brez licence"
    }
  },
  "nav": {
    "close": "Zapri"
  },
  "basemap": {
    "title": "Galerija temeljnih kart"
  },
  "operationalLayers": {
    "title": "Operativni sloji",
    "error": "Na karti ni operativnih slojev."
  },
  "imageMask": {
    "title": "Maska slike",
    "toolText": "Orodje",
    "tool1": "Maska",
    "tool2": "Zaznavanje sprememb",
    "layer": "Sloj",
    "layerText": "Izberite svoje slikovje.",
    "maskImageSelector": "Izberite določene slike",
    "imageSelectorText": "Izberite dve različni sliki za primerjavo.",
    "changeText": "Konfiguriraj zaznavanje sprememb.",
    "maskText": "Konfigurirajte masko.",
    "zoom": "Povečaj za izbiranje slik.",
    "primary": "Primarna slika",
    "comparison": "Primerjalna slika",
    "mode": "Vizualizirajte spremembe kot",
    "method": "Metoda",
    "changeMethodText": "Izračunajte spremembe v",
    "positive": "Pozitivno",
    "negative": "Negativno",
    "threshold": "Prag",
    "difference": "Razlika",
    "apply": "Uporabi",
    "clear": "Počisti",
    "nir": "Infrardeči pas",
    "red": "Rdeči pas",
    "green": "Zeleni pas",
    "swir": "Kratkovalovni infrardeči pas",
    "band1": "Pas A",
    "band2": "Pas B",
    "mode1": "Slika razlik",
    "mode2": "Maska razlik",
    "mode3": "Maska praga",
    "method1": "Svetlost slike",
    "method2": "Vegetacijski indeks",
    "method3": "Indeks vegetacije glede na talni tip",
    "method4": "Vodni indeks",
    "method5": "Indeks zgorevanja",
    "method6": "Nižje od mojega praga",
    "method7": "Višje od mojega praga",
    "method8": "Enojni pas",
    "method9": "Indeks po meri",
    "dropDown": "Pokaži slike na spustnem seznamu.",
    "transparency": "Prosojnost (rezultati)",
    "slider": "Pokaži slike na drsniku.",
    "error1": "Polje ni določeno.",
    "error2": "Ni polja OBJECTID.",
    "error3": "Ni polja kategorije.",
    "error4": "Dejanja za sloj ni mogoče izvajati.",
    "error5": "Storitve pred različico 10.2.1 niso podprte.",
    "error6": "V trenutnem obsegu ni 3D-prizorov.",
    "error7": "Izberite dve različni sliki.",
    "indexText": "Napredne možnosti indeksiranja",
    "date": "Datum",
    "areaText": "Zmanjšanje/povečanje območja",
    "areaText2": "Območje požganega/ponovne rasti po požaru",
    "areaText3": "Pokrita površina",
    "unit": "km",
    "swipe": "Drsnik",
    "imageLabel": "slike",
    "extent": "Nariši poligone za določanje obsega",
    "colorPicker": "Izbirnik barve",
    "refresh": "Gumb Osveži",
    "refreshTooltip": "Osvežite seznam slik glede na trenutni obseg.",
    "colorpickerText": "Izberite barvo svoje maske",
    "sliderText": "Nastavite svoj prag",
    "maskModeText": "Katere vrednosti naj maskiram?",
    "positiveSliderText": "Nastavite minimalno povečanje, ki je zahtevano med slikami, preden bo območje prikazano zeleno.",
    "negativeSliderText": "Nastavite minimalno zmanjšanje, ki je zahtevano med slikami, preden bo območje prikazano škrlatno.",
    "updateResult": "Vaša slika je bila spremenjena, kliknite Uporabi za posodobitev analize."
  },
  "editor": {
    "title": "Urejevalnik",
    "error": "Možnost Uredi sloj ni bila najdena.",
    "error1": "Dostop zavrnjen. Slojev ni mogoče urejati.",
    "text": "Izberite simbol in kliknite na karto."
  },
  "measurement": {
    "title": "Meritve slikovja",
    "error": "Metrične zmožnosti niso podprte."
  },
  "export": {
    "title": "Izvoz",
    "mode": "Shrani lokacijo",
    "titleText": "Ime (zahtevano)",
    "description": "Opis",
    "tags": "Oznake (zahtevano)",
    "preview": "Predogled",
    "submit": "Shrani",
    "cancel": "Prekliči",
    "pixel": "Velikost pikslov",
    "outsr": "Izhodni koordinatni sistem",
    "renderer": "Možnosti prenosa TIFF",
    "formatText1": "Kot je prikazano",
    "formatText2": "Neobdelani podatki (vsi pasovi)",
    "extent": "Nariši poligon za določanje obsega",
    "drawText": "(kliknite sliko za začetek)",
    "text": "Neobdelanih podatkov ni mogoče prikazati s standardnimi pregledovalniki slik. Odpri z ArcGIS Pro.",
    "error": "Na karti ni vidnih slikovnih slojev.",
    "error1": "Zahtevano je ime.",
    "error2": "Zahtevane so oznake.",
    "error3": "PixelSize izvoza je omejen na",
    "error4": "za ta obseg.",
    "error5": "Vnesite veljavno številsko vrednost.",
    "error6": "Vaše slike trenutno ni mogoče izvoziti.",
    "thumbnailError": "Sličica ni na voljo",
    "advance": "Napredne možnosti shranjevanja",
    "modeOption1": "Shrani na portal",
    "modeOption2": "Shrani na disk",
    "default": "Privzeto",
    "utm": "WGS84 UTM cona",
    "layer": "Sloj",
    "mercator": "WebMercatorAS",
    "folder": "Izberi mapo"
  },
  "imageDate": {
    "label": "Datum slike"
  },
  "about": {
    "title": "Več o tem"
  },
  "bookmark": {
    "title": "Zaznamki",
    "default": "Privzeto",
    "selectBookmark": "Izberi zaznamke",
    "add": "Dodaj zaznamke",
    "addTitle": "Vnesite ime",
    "addBtn": "Dodaj začasno"
  }
});