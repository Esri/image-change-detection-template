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
    "error": "Nije moguće stvoriti kartu",
    "licenseError": {
      "message": "Vaš račun nije licenciran za upotrebu konfigurabilnih appova koji nisu javni. Obratite se administratoru svoje organizacije da vam dodijeli vrstu korisnika koja sadrži licencu za osnovne appove ili za dodatke za osnovne appove.",
      "title": "Nema licence"
    }
  },
  "nav": {
    "close": "Zatvori"
  },
  "basemap": {
    "title": "Kartografskih podloga"
  },
  "operationalLayers": {
    "title": "Operativni slojevi",
    "error": "Nema operativnih slojeva na karti."
  },
  "imageMask": {
    "title": "Maska slike",
    "toolText": "Alat",
    "tool1": "Maska",
    "tool2": "Otkrivanje promjena",
    "layer": "Sloj",
    "layerText": "Odaberite svoje slike.",
    "maskImageSelector": "Odaberite određene slike",
    "imageSelectorText": "Odaberite dvije različite slike za usporedbu.",
    "changeText": "Konfigurirajte otkrivanje promjena.",
    "maskText": "Konfigurirajte masku.",
    "zoom": "Uvećajte za odabir slika.",
    "primary": "Primarna slika",
    "comparison": "Usporedba slike",
    "mode": "Vizualiziraj promjene kao",
    "method": "Metoda",
    "changeMethodText": "Izračunaj promjene u",
    "positive": "Pozitivno",
    "negative": "Negativno",
    "threshold": "Prag",
    "difference": "Razlika",
    "apply": "Primijeni",
    "clear": "Očisti",
    "nir": "Infracrveni kanal",
    "red": "Crveni kanal",
    "green": "Zeleni kanal",
    "swir": "Kratkovalni infracrveni kanal",
    "band1": "Kanal A",
    "band2": "Kanal B",
    "mode1": "Slika razlika",
    "mode2": "Maska razlika",
    "mode3": "Maska praga",
    "method1": "Svjetlina slike",
    "method2": "Indeks vegetacije",
    "method3": "Vegetacija prilagođena tlu Indeks",
    "method4": "Indeks vode",
    "method5": "Indeks požara",
    "method6": "Manje od mog praga",
    "method7": "Više od mog praga",
    "method8": "Jedan kanal",
    "method9": "Prilagođeni indeks",
    "dropDown": "Prikaži slike u padajućem izborniku.",
    "transparency": "Transparentnost (rezultati)",
    "slider": "Prikaži slike na klizaču.",
    "error1": "Polje nije određeno.",
    "error2": "Nema polja OBJECTID.",
    "error3": "Nema polja kategorije.",
    "error4": "Ne može se izvršiti radnja za sloj.",
    "error5": "Usluge prije 10.2.1 nisu podržane.",
    "error6": "Nema scena u trenutačnom obuhvatu.",
    "error7": "Odaberite dvije različite slike.",
    "indexText": "Napredne opcije indeksa",
    "date": "Datum",
    "areaText": "Povećanje/smanjenje područja",
    "areaText2": "Područje požara / obnavljanja vegetacije nakon požara",
    "areaText3": "Pokriveno područje",
    "unit": "km",
    "swipe": "Klizač",
    "imageLabel": "slika(e)",
    "extent": "Nacrtajte poligon(e) za definiranje obuhvata",
    "colorPicker": "Birač boje",
    "refresh": "Gumb osvježi",
    "refreshTooltip": "Osvježite popis slika na temelju trenutnog obuhvata.",
    "colorpickerText": "Odaberite boju za svoju masku",
    "sliderText": "Postavite svoj prag",
    "maskModeText": "Koje vrijednosti trebam maskirati?",
    "positiveSliderText": "Postavite minimalno potrebno povećanje između slika prije nego što se područje prikaže u zelenoj boji.",
    "negativeSliderText": "Postavite minimalno potrebno smanjenje između slika prije nego što se područje prikaže u magenti.",
    "updateResult": "Vaša je slika promijenjena; kliknite Primijeni da biste ažurirali analizu."
  },
  "editor": {
    "title": "Uređivač",
    "error": "Nije pronađen sloj za uređivanje.",
    "error1": "Pristup odbijen. Slojevi se ne mogu uređivati.",
    "text": "Odaberite simbol i kliknite na kartu."
  },
  "measurement": {
    "title": "Mjere slike",
    "error": "Mogućnosti mjerenja nisu podržane."
  },
  "export": {
    "title": "Izvezi",
    "mode": "Spremi lokaciju",
    "titleText": "Naslov (obavezno)",
    "description": "Opis",
    "tags": "Oznake (obavezno)",
    "preview": "Pretpregled",
    "submit": "Spremi",
    "cancel": "Odustani",
    "pixel": "Veličina piksela",
    "outsr": "Izvoz prostorne reference",
    "renderer": "Opcije preuzimanja TIFF-a",
    "formatText1": "Kao što je prikazano",
    "formatText2": "Neobrađeni podaci (svi kanali)",
    "extent": "Nacrtajte poligon za definiranje obuhvata",
    "drawText": "(kliknite na sliku za početak)",
    "text": "Neobrađeni podaci ne mogu se prikazati sa standardnim preglednicima fotografija. Otvori s ArcGIS Pro.",
    "error": "Nema vidljivih slojeva slika na karti.",
    "error1": "Potreban je naslov.",
    "error2": "Potrebne su oznake.",
    "error3": "Veličina piksela za izvoz ograničena je na",
    "error4": "za ovaj obuhvat.",
    "error5": "Unesite valjanu brojčanu vrijednost.",
    "error6": "Vaša se slika trenutno ne može izvesti.",
    "thumbnailError": "Nema dostupnih sličica",
    "advance": "Napredne opcije spremanja",
    "modeOption1": "Spremi na portal",
    "modeOption2": "Spremi na disk",
    "default": "Zadano",
    "utm": "Zona WGS84 UTM",
    "layer": "Sloj",
    "mercator": "WebMercatorAS",
    "folder": "Odaberi mapu"
  },
  "imageDate": {
    "label": "Datum slike"
  },
  "about": {
    "title": "Informacije"
  },
  "bookmark": {
    "title": "Knjižne oznake",
    "default": "Zadano",
    "selectBookmark": "Odaberi knjižne oznake",
    "add": "Dodaj knjižne oznake",
    "addTitle": "Unesite naslov",
    "addBtn": "Dodaj privremeno"
  }
});