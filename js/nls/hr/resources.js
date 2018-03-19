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
    "error": "Nije moguće stvoriti kartu"
  },
  "nav": {
    "close": "Zatvori"
  },
  "basemap": {
    "title": "Galerija kartografskih podloga"
  },
  "operationalLayers": {
    "title": "Operativni slojevi",
    "error": "Nema operativnih slojeva na karti."
  },
  "layerSelector": {
    "active": "Aktivni sloj",
    "comparison": "Sloj za usporedbu",
    "other": "Ostalo",
    "result": "Rezultat",
    "title": "Odabirač slojeva",
    "resultSave": "Dodaj sloj rezultata u popis slojeva za usporedbu",
    "copy": "Kopiraj aktivni sloj u sloj za usporedbu.",
    "swap": "Zamijeni aktivni sloj i sloj za usporedbu."
  },
  "renderer": {
    "title": "Renderer",
    "stretch": "Parametri rastezanja",
    "stretchType": "Vrsta rastezanja",
    "dra": "DRA",
    "draText": "Podešavanje dinamičkog raspona (en. Dynamic Range Adjustment) ažurira poboljšanje na temelju trenutačnog prikaza",
    "gamma": "Gama",
    "apply": "Primijeni",
    "top": "Isključi vrh",
    "bottom": "Isključi dno",
    "topText": " Isključi gornji postotak od x histograma",
    "bottomText": " Isključi donji postotak od x histograma",
    "stdDev": "# st. dev.",
    "layer": "Trenutačni sloj",
    "error": "Nema vidljivih slojeva slika na karti."
  },
  "imageSelector": {
    "title": "Odabirač slika",
    "enable": "Omogući odabirača slika",
    "secondary": "Postavi aktivni kao sloj za usporedbu.",
    "dropDown": "Prikaži slike u padajućem izborniku.",
    "refresh": "Osvježi upit na temelju trenutačnog obuhvata.",
    "show": "Prikaži",
    "age": "Dob",
    "zoom": "Uvećajte za odabir slika.",
    "error": "Nema vidljivih slojeva slika na karti.",
    "error1": "Polje nije određeno.",
    "error2": "Nema polja OBJECTID.",
    "error3": "Nema polja kategorije.",
    "error4": "Ne može se izvršiti radnja za sloj.",
    "error5": "Usluge prije 10.2.1 nisu podržane.",
    "error6": "Nema scena u trenutačnom obuhvatu.",
    "error7": "Broj odabranih tragova premašio je 20. Prikazat će se samo prvih 20. Pritisnite U redu za poništavanje upozorenja.",
    "slider": "Prikaži slike na klizaču."
  },
  "changeDetection": {
    "title": "Otkrivanje promjena",
    "mode": "Način",
    "method": "Metoda",
    "positive": "Pozitivna razlika",
    "negative": "Negativna razlika",
    "threshold": "Prag",
    "difference": "Razlika",
    "apply": "Primijeni",
    "error": "Funkcija Otkrivanje promjena djeluje s dvjema slikama s različitim datumima iz iste usluge.<br />Prvo upotrijebite Odabirač slika za određivanje jedne slike,<br />zatim kliknite na gumb <img src='images/down.png' height='14'/> i odaberite drugu sliku.<br />Vratite se na ovu kontrolu za nastavak otkrivanja promjena."
  },
  "editor": {
    "title": "Uređivač",
    "error": "Nije odabran sloj za uređivanje.",
    "error1": "Pristup onemogućen. Slojevi se ne mogu urediti."
  },
  "measurement": {
    "title": "Izmjere slike",
    "error": "Mogućnosti mjerenja nisu podržane."
  },
  "export": {
    "title": "Izvezi",
    "mode": "Način",
    "titleText": "Naslov",
    "description": "Opis",
    "tags": "Oznake",
    "submit": "Podnesi",
    "pixel": "Veličina piksela",
    "outsr": "Izvoz prostorne reference",
    "renderer": "Trenutačni renderer",
    "extent": "Definiraj obuhvat",
    "text": "Ako je trenutačni renderer označen, renderiranje<br /> se izvozi ili će se izvesti izvorne vrijednosti podataka<br/>.",
    "error": "Nema vidljivih slojeva slika na karti.",
    "error1": "Potreban je naslov.",
    "error2": "Potrebne su oznake."
  },
  "compare": {
    "title": "Usporedi",
    "slider": "Klizač za prozirnost",
    "hSwipe": "Vodoravno klizanje",
    "vSwipe": "Okomito klizanje",
    "error": "Nema vidljivih slojeva slika na karti koji su dostupni za usporedbu."
  }
});