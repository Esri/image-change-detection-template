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
    "error": "Žemėlapio sukurti nepavyko",
    "licenseError": {
      "message": "Jūsų paskyra nelicencijuota naudoti ne viešas konfigūruojamas aplikacijas. Kreipkitės į organizacijos administratorių, kad paskirtų jums vartotojo tipą, kuris turi svarbiausias aplikacijas, arba suteiktų jums papildomą svarbiausių aplikacijų licenciją.",
      "title": "Nelicencijuota"
    }
  },
  "nav": {
    "close": "Uždaryti"
  },
  "basemap": {
    "title": "Pagrindo žemėlapiai"
  },
  "operationalLayers": {
    "title": "Darbiniai sluoksniai",
    "error": "Žemėlapyje darbinių sluoksnių nėra."
  },
  "imageMask": {
    "title": "Atvaizdų kaukė",
    "toolText": "Įrankis",
    "tool1": "Kaukė",
    "tool2": "Keisti kryptį",
    "layer": "Sluoksnis",
    "layerText": "Pasirinkite savo atvaizdus.",
    "maskImageSelector": "Pasirinkite konkretų vaizdą (vaizdus)",
    "imageSelectorText": "Pasirinkite palyginti du skirtingus vaizdus.",
    "changeText": "Konfigūruokite pokyčio aptikimą.",
    "maskText": "Konfigūruokite kaukę.",
    "zoom": "Didinti, norint pasirinkti atvaizdus.",
    "primary": "Pagrindinis atvaizdas",
    "comparison": "Palyginimo atvaizdas",
    "mode": "Vizualizuoti pokyčius kaip",
    "method": "Būdas",
    "changeMethodText": "Apskaičiuoti pokyčius naudojant",
    "positive": "Teigiama",
    "negative": "Neigiama",
    "threshold": "Ribinė vertė",
    "difference": "Skirtumas",
    "apply": "Taikyti",
    "clear": "Valyti",
    "nir": "Infraraudonųjų spindulių kanalas",
    "red": "Raudonasis kanalas",
    "green": "Žaliasis kanalas",
    "swir": "Trumpųjų infraraudonųjų spindulių bangų kanalas",
    "band1": "Kanalas A",
    "band2": "Kanalas B",
    "mode1": "Skirtumo atvaizdas",
    "mode2": "Skirtumo kaukė",
    "mode3": "Ribinės vertės kaukė",
    "method1": "Vaizdo ryškumas",
    "method2": "Augmenijos indeksas",
    "method3": "Pagal dirvožemį koreguota augmenija. Indeksas",
    "method4": "Vandens indeksas",
    "method5": "Išdegimo indeksas",
    "method6": "Mažesnė nei mano nurodyta ribinė reikšmė",
    "method7": "Didesnė nei mano nurodyta ribinė reikšmė",
    "method8": "Vienas kanalas",
    "method9": "Pasirinktinė rodyklė",
    "dropDown": "Rodyti atvaizdus išplečiamajame sąraše.",
    "transparency": "Permatomumas (rezultatai)",
    "slider": "Rodyti atvaizdus slankiklyje.",
    "error1": "Nenurodytas laukas.",
    "error2": "Nėra lauko OBJECTID.",
    "error3": "Nėra kategorijos lauko.",
    "error4": "Nepavyko atlikti veiksmo sluoksnyje.",
    "error5": "Paslaugos, kurių versija ankstesnė negu 10.2.1, nepalaikomos.",
    "error6": "Esamoje aprėptyje scenų nėra.",
    "error7": "Pasirinkite du skirtingus vaizdus.",
    "indexText": "Išplėstinės indeksavimo parinktys",
    "date": "Data",
    "areaText": "Ploto sumažėjimas / padidėjimas",
    "areaText2": "Išdegimo / ataugimo po gaisro plotas",
    "areaText3": "Apimamas plotas",
    "unit": "km",
    "swipe": "Keitiklis",
    "imageLabel": "atvaizdas (-ai)",
    "extent": "Brėžkite aprėpties poligoną (-us)",
    "colorPicker": "Spalvos parinkiklis",
    "refresh": "Atnaujinimo mygtukas",
    "refreshTooltip": "Atnaujinti vaizdų sąrašą pagal esamą aprėptį.",
    "colorpickerText": "Pasirinkite kaukės spalvą.",
    "sliderText": "Nustatykite ribinę reikšmę",
    "maskModeText": "Kokioms reikšmėms turėčiau naudoti kaukę?",
    "positiveSliderText": "Nustatykite, koks minimalus padidėjimas tarp vaizdų būtinas, kad teritorija būtų išskiriama žalia spalva.",
    "negativeSliderText": "Nustatykite, koks minimalus sumažėjimas tarp vaizdų būtinas, kad teritorija būtų išskiriama avietine spalva.",
    "updateResult": "Jūsų vaizdas pasikeitė. Norėdami atnaujinti analizę, spustelėkite Taikyti."
  },
  "editor": {
    "title": "Redaktorius",
    "error": "Nerastas redagavimo sluoksnis.",
    "error1": "Prieiga uždrausta. Sluoksnių negalima redaguoti.",
    "text": "Pasirinkite simbolį ir spustelėkite žemėlapyje."
  },
  "measurement": {
    "title": "Atvaizdo matavimas",
    "error": "Matavimas nepalaikomas."
  },
  "export": {
    "title": "Eksportuoti",
    "mode": "Įrašyti vietą",
    "titleText": "Antraštė (būtina)",
    "description": "Aprašymas",
    "tags": "Raktažodžiai (būtini).",
    "preview": "Peržiūra",
    "submit": "Išsaugoti",
    "cancel": "Atšaukti",
    "pixel": "Pikselių dydis",
    "outsr": "Išvesties koordinačių sistema",
    "renderer": "TIFF atsisiuntimo parinktys",
    "formatText1": "Kaip parodyta",
    "formatText2": "Neapdoroti duomenys (visi kanalai)",
    "extent": "Brėžkite aprėpties poligoną",
    "drawText": "(paspauskite vaizdą norėdami pradėti)",
    "text": "Standartinės nuotraukų peržiūros priemonės negali rodyti neapdorotų duomenų. Atverti naudojant ArcGIS Pro",
    "error": "Žemėlapyje matomų atvaizdų sluoksnių nėra.",
    "error1": "Būtinas pavadinimas.",
    "error2": "Būtinas raktažodis (-iai).",
    "error3": "Eksportuoto failo dydis pikseliais apribotas",
    "error4": "šiai aprėpčiai.",
    "error5": "Įveskite leistiną skaitinę reikšmę.",
    "error6": "Šiuo metu jūsų vaizdo eksportuoti neįmanoma.",
    "thumbnailError": "Nėra miniatiūros",
    "advance": "Išplėstinės įrašymo parinktys",
    "modeOption1": "Įrašyti į portalą",
    "modeOption2": "Įrašyti į diską",
    "default": "Numatytas",
    "utm": "WGS84 UTM zona",
    "layer": "Sluoksnis",
    "mercator": "WebMercatorAS",
    "folder": "Pasirinkti aplanką"
  },
  "imageDate": {
    "label": "Atvaizdo data"
  },
  "about": {
    "title": "Apie"
  },
  "bookmark": {
    "title": "Žymos",
    "default": "Numatytas",
    "selectBookmark": "Pasirinkite žymas",
    "add": "Pridėkite žymų",
    "addTitle": "Įveskite pavadinimą",
    "addBtn": "Pridėkite laikiną"
  }
});