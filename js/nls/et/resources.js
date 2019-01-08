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
    "error": "Kaarti ei saa luua",
    "licenseError": {
      "message": "Teie kontol puudub litsents konfigureeritavate rakenduste kasutamiseks, mis ei ole avalikud. Paluge oma organisatsiooni administraatoril määrata teile kasutajatüüp, mis sisaldab olulisi rakendusi või oluliste rakenduse lisalitsentsi.",
      "title": "Litsents puudub"
    }
  },
  "nav": {
    "close": "Sulge"
  },
  "basemap": {
    "title": "Aluskaartide galerii"
  },
  "operationalLayers": {
    "title": "Töökihid",
    "error": "Kaardil ei ole töökihte."
  },
  "imageMask": {
    "title": "Pildi mask",
    "toolText": "Tööriist",
    "tool1": "Mask",
    "tool2": "Muudatuse tuvastamine",
    "layer": "Kiht",
    "layerText": "Valige pildid.",
    "maskImageSelector": "Valige konkreetsed pildid",
    "imageSelectorText": "Valige võrdlemiseks kaks erinevat pilti.",
    "changeText": "Konfigureerige muutuste tuvastamine.",
    "maskText": "Konfigureerige mask.",
    "zoom": "Piltide valimiseks suurendage.",
    "primary": "Põhipilt",
    "comparison": "Võrdluspilt",
    "mode": "Visualiseeri muudatused kui",
    "method": "Meetod",
    "changeMethodText": "Arvuta muudatused:",
    "positive": "Positiivne",
    "negative": "Negatiivne",
    "threshold": "Lävend",
    "difference": "Erinevus",
    "apply": "Rakenda",
    "clear": "Tühjenda",
    "nir": "Infrapuna spektraalriba",
    "red": "Punane spektraalriba",
    "green": "Roheline spektraalriba",
    "swir": "Lühilaine infrapuna spektraalriba",
    "band1": "Spektraalriba A",
    "band2": "Spektraalriba B",
    "mode1": "Erinevuse pilt",
    "mode2": "Erinevuse mask",
    "mode3": "Lävendi mask",
    "method1": "Pildi heledus",
    "method2": "Vegetatsiooniindeks",
    "method3": "Pinnast arvesse võttev veg indeks",
    "method4": "Vee indeks",
    "method5": "Põlenud ala indeks",
    "method6": "Minu lävest väiksem",
    "method7": "Minu lävest suurem",
    "method8": "Üks spektraalriba",
    "method9": "Kohandatud indeks",
    "dropDown": "Pilte saate kuvada ripploendis.",
    "transparency": "Läbipaistvus (tulemused)",
    "slider": "Kuva pildid liuguril.",
    "error1": "Välja pole määratud.",
    "error2": "Välja OBJECTID pole.",
    "error3": "Välja kategooria pole.",
    "error4": "Kihiga ei sa toimingut teha.",
    "error5": "ArcGIS 10.2.1 versioonist varasemaid teenuseid ei toetata.",
    "error6": "Praeguses ulatuses pole ühtegi stseeni.",
    "error7": "Valige kaks erinevat pilti.",
    "indexText": "Täpsemad indekseerimisvalikud",
    "date": "Kuupäev",
    "areaText": "Ala vähenemine / suurenemine",
    "areaText2": "Põlenud / tulekahjujärgse taastumise ala",
    "areaText3": "Hõlmatud ala",
    "unit": "km",
    "swipe": "Võrdlus",
    "imageLabel": "pilti",
    "extent": "Ulatuse määratlemiseks joonistage hulknurgad",
    "colorPicker": "Värvivalija",
    "refresh": "Värskendusnupp",
    "refreshTooltip": "Värskendage pildiloendit praeguse ulatuse põhjal.",
    "colorpickerText": "Valige maski jaoks värv",
    "sliderText": "Määrake lävi",
    "maskModeText": "Millised väärtused tuleks maskida?",
    "positiveSliderText": "Määrake minimaalne kahe pildi vaheline suurenemine, mis on nõutav, enne kui ala kuvatakse rohelisena.",
    "negativeSliderText": "Määrake minimaalne kahe pildi vaheline vähenemine, mis on nõutav, enne kui ala kuvatakse magentana.",
    "updateResult": "Teie pilt on muudetud. Klõpsake analüüsi värskendamiseks nuppu Rakenda."
  },
  "editor": {
    "title": "Redaktor",
    "error": "Muutmiskihti ei leitud.",
    "error1": "Juurdepääs on keelatud. Kihte ei saa muuta.",
    "text": "Valige sümbol ja klõpsake kaarti."
  },
  "measurement": {
    "title": "Pildi mõõtmine",
    "error": "Mõõtmise funktsioon ei ole toetatud."
  },
  "export": {
    "title": "Ekspordi",
    "mode": "Salvestuskoht",
    "titleText": "Pealkiri (nõutav)",
    "description": "Kirjeldus",
    "tags": "Märksõnad (nõutavad)",
    "preview": "Eelvaade",
    "submit": "Salvesta",
    "cancel": "Loobu",
    "pixel": "Piksli suurus",
    "outsr": "Väljundi koordinaatsüsteem",
    "renderer": "TIFF-faili allalaadimise valikud",
    "formatText1": "Kuvatud kujul",
    "formatText2": "Toorandmed (kõik spektraalribad)",
    "extent": "Ulatuse määratlemiseks joonistage hulknurk",
    "drawText": "(alustamiseks klõpsake pilti)",
    "text": "Toorandmeid ei saa standardsetes fotovaaturites kuvada. Avage rakenduses ArcGIS Pro.",
    "error": "Kaardil ei ole nähtavaid pildikihte.",
    "error1": "Pealkiri on vajalik.",
    "error2": "Märksõnad on vajalikud.",
    "error3": "Ekspordi pikslisuurus on piiratud",
    "error4": "selle ulatuse korral.",
    "error5": "Sisestage sobiv arvväärtus.",
    "error6": "Teie pilti ei saa praegu eksportida.",
    "thumbnailError": "Pisipilt pole saadaval",
    "advance": "Täpsemad salvestusvalikud",
    "modeOption1": "Salvesta portaali",
    "modeOption2": "Salvesta kettale",
    "default": "Vaikimisi",
    "utm": "WGS84 UTM-tsoon",
    "layer": "Kiht",
    "mercator": "WebMercatorAS",
    "folder": "Vali kaust"
  },
  "imageDate": {
    "label": "Pildi kuupäev"
  },
  "about": {
    "title": "Info"
  },
  "bookmark": {
    "title": "Järjehoidjad",
    "default": "Vaikimisi",
    "selectBookmark": "Vali järjehoidjad",
    "add": "Lisa järjehoidjad",
    "addTitle": "Sisesta filter",
    "addBtn": "Lisa ajutine"
  }
});