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
    "error": "Kreiranje mape nije moguće",
    "licenseError": {
      "message": "Vaš nalog nema licencu za korišćenje aplikacija koje mogu da se konfigurišu i nisu javne. Zatražite od administratora organizacije da vam dodeli onaj tip korisnika koji uključuje osnovne aplikacije ili licencu za dodatne osnovne aplikacije.",
      "title": "Nema licencu"
    }
  },
  "nav": {
    "close": "Zatvori"
  },
  "basemap": {
    "title": "Galerija pozadinskih mapa"
  },
  "operationalLayers": {
    "title": "Operativni slojevi",
    "error": "Nema operativnih slojeva u mapi."
  },
  "imageMask": {
    "title": "Maska snimka",
    "toolText": "Alat",
    "tool1": "Maska",
    "tool2": "Promeni otkrivanje",
    "layer": "Sloj",
    "layerText": "Odaberite snimke.",
    "basemap": "Pozadinska mapa",
    "maskImageSelector": "Izaberite određene slike",
    "imageSelectorText": "Izaberite dve različite slike za poređenje.",
    "changeText": "Konfigurišite detekciju promene.",
    "maskText": "Konfigurišite masku.",
    "zoom": "Uvećajte za izbor snimaka.",
    "primary": "Primarni snimak",
    "comparison": "Snimak poređenja",
    "mode": "Vizuelizuj promene kao",
    "method": "Metod",
    "changeMethodText": "Izračunaj promene u",
    "positive": "Pozitivno",
    "negative": "Negativno",
    "threshold": "Prag",
    "difference": "Razlika",
    "apply": "Primeni",
    "clear": "Obriši",
    "nir": "Infracrveni opseg",
    "red": "Crveni opseg",
    "green": "Zeleni opseg",
    "swir": "Kratko-talasni infracrveni opseg",
    "band1": "Opseg A",
    "band2": "Opseg B",
    "mode1": "Snimak razlike",
    "mode2": "Maska razlike",
    "mode3": "Prag maske",
    "method1": "Osvetljenost slike",
    "method2": "Indeks vegetacije",
    "method3": "Veg. prilagođena zemljištu Indeks",
    "method4": "Indeks vode",
    "method5": "Indeks izgorelosti",
    "method6": "Manje od moje granične vrednosti",
    "method7": "Veće od moje granične vrednosti",
    "method8": "Jedan opseg",
    "method9": "Prilagođeni indeks",
    "dropDown": "Prikaži snimke u padajućoj listi.",
    "transparency": "Transparentnost (rezultati)",
    "slider": "Prikažite snimke na klizaču.",
    "error1": "Polje nije navedeno.",
    "error2": "Nema OBJECTID polja.",
    "error3": "Nema polja kategorije.",
    "error4": "Nije moguće izvršiti radnju za sloj.",
    "error5": "Servisi pre 10.2.1 nisu podržani.",
    "error6": "Nema scena u trenutnom obuhvatu.",
    "error7": "Izaberite dve različite slike.",
    "error8": "Nevažeći opseg datuma: datum početka mora da bude pre datuma završetka",
    "indexText": "Napredne opcije indeksa",
    "date": "Datum",
    "areaText": "Smanjenje/povećanje oblasti",
    "areaText2": "Oblast koja je izgorela / obnavlja se nakon požara",
    "areaText3": "Pokrivena oblast",
    "unit": "km",
    "swipe": "Brzo prevlačenje",
    "imageLabel": "snimak(-ci)",
    "extent": "Nacrtajte poligon(e) za definisanje obuhvata",
    "colorPicker": "Birač boja",
    "refresh": "Dugme za osvežavanje",
    "refreshTooltip": "Osvežite listu slika na osnovu trenutnog opsega.",
    "colorpickerText": "Izaberite boju za masku",
    "sliderText": "Postavi graničnu vrednost",
    "maskModeText": "Koje vrednosti da maskiram?",
    "positiveSliderText": "Podesite minimalno potrebno povećanje između slika pre nego što se oblast prikaže zeleno.",
    "negativeSliderText": "Podesite minimalno potrebno smanjenje između slika pre nego što se oblast prikaže magenta bojom.",
    "updateResult": "Vaš snimak se promenio; kliknite na Primeni da biste ažurirali analizu."
  },
  "editor": {
    "title": "Uređivač",
    "error": "„Uredi sloj“ nije pronađeno.",
    "error1": "Pristup je odbijen. Slojevi ne mogu da se uređuju.",
    "text": "Odaberite simbol i kliknite na mapu."
  },
  "measurement": {
    "title": "Mere snimka",
    "error": "Mogućnosti merenja nisu podržane."
  },
  "export": {
    "title": "Izvezi",
    "mode": "Sačuvaj lokaciju",
    "titleText": "Naslov (obavezno)",
    "description": "Opis",
    "tags": "Oznake (obavezno)",
    "preview": "Prikaži",
    "submit": "Sačuvaj",
    "cancel": "Otkaži",
    "pixel": "Veličina piksela",
    "outsr": "Izlazna prostorna referenca",
    "renderer": "Opcije za TIFF preuzimanje",
    "formatText1": "Kao što je prikazano",
    "formatText2": "Sirovi podaci (svi opsezi)",
    "extent": "Nacrtajte poligon za definisanje obuhvata",
    "drawText": "(kliknite na sliku da biste započeli)",
    "text": "Sirovi podaci ne mogu da se prikažu pomoću standardnih pregledača slika. Otvorite pomoću ArcGIS Pro.",
    "error": "Na mapi nema vidljivih slojeva snimka.",
    "error1": "Naslov je obavezan.",
    "error2": "Oznaka/oznake je/su obavezni.",
    "error3": "Veličina piksela izvoza je ograničena na",
    "error4": "za ovaj obuhvat.",
    "error5": "Unesite važeću numeričku vrednost.",
    "error6": "Trenutno nije moguće izvesti sliku.",
    "thumbnailError": "Nema dostupnih sličica",
    "advance": "Napredne opcije čuvanja",
    "modeOption1": "Sačuvaj na portal",
    "modeOption2": "Sačuvaj na disk",
    "default": "Podrazumevano",
    "utm": "WGS84 UTM Zone",
    "layer": "Sloj",
    "mercator": "WebMercatorAS",
    "folder": "Selektujte fasciklu"
  },
  "imageDate": {
    "label": "Datum snimka"
  },
  "about": {
    "title": "Osnovni podaci"
  },
  "bookmark": {
    "title": "Obeleživači",
    "default": "Podrazumevano",
    "selectBookmark": "Izaberite obeleživače",
    "add": "Dodaj obeleživače",
    "addTitle": "Unesite naslov",
    "addBtn": "Dodaj privremeno"
  },
  "coordinate": {
    "_widgetLabel": "Koordinata",
    "hintMessage": "Kliknite na mapu da biste dobili koordinate",
    "defaultLabel": "Podrazumevano",
    "realtimeLabel": "Pomerajte miša da biste dobili koordinate",
    "computing": "Računanje...",
    "latitudeLabel": "Geografska širina",
    "longitudeLabel": "Geografska dužina",
    "loading": "učitavanje...",
    "enableClick": "Kliknite da biste omogućili klik na mapu za dobijanje koordinata",
    "disableClick": "Kliknite da biste onemogućili klik na mapu za dobijanje koordinata",
    "Default": "Podrazumevano",
    "Inches": "Inči",
    "Foot": "Stope",
    "Foot_US": "Feet_US",
    "Yards": "Jardi",
    "Miles": "Milje",
    "Nautical_Miles": "Nautičke milje",
    "Millimeters": "Milimetri",
    "Centimeters": "Centimetri",
    "Meter": "Metri",
    "Kilometers": "Kilometri",
    "Decimeters": "Decimetri",
    "Decimal_Degrees": "Stepeni",
    "Degree_Minutes_Seconds": "Stepeni minuti sekunde",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});