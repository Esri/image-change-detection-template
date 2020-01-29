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
    "error": "Nem sikerült létrehozni a térképet",
    "licenseError": {
      "message": "Az Ön fiókjának licence nem terjed ki a nem nyilvános konfigurálható alkalmazásokra. Igényelje a szervezete adminisztrátorától, hogy rendeljen Önhöz olyan felhasználótípust, amely tartalmazza az alapvető alkalmazásokat, vagy egy kiegészítő alapvető alkalmazásokra vonatkozó licencet.",
      "title": "Nincs licence"
    }
  },
  "nav": {
    "close": "Bezárás"
  },
  "basemap": {
    "title": "Alaptérkép-galéria"
  },
  "operationalLayers": {
    "title": "Operatív rétegek",
    "error": "Nincsenek operatív rétegek a térképen."
  },
  "imageMask": {
    "title": "Képmaszk",
    "toolText": "Eszköz",
    "tool1": "Maszk",
    "tool2": "Változáskövetés",
    "layer": "Réteg",
    "layerText": "Válassza ki a távérzékelt felvételt.",
    "basemap": "Alaptérkép",
    "maskImageSelector": "Meghatározott kép(ek) kiválasztása",
    "imageSelectorText": "Válasszon ki két különböző képet az összehasonlításhoz.",
    "changeText": "Konfigurálja a változásészlelést.",
    "maskText": "Konfigurálja a maszkot.",
    "zoom": "Nagyítás a képek kiválasztásához.",
    "primary": "Elsődleges kép",
    "comparison": "Összehasonlító kép",
    "mode": "Változtatások megjelenítése mint",
    "method": "Módszer",
    "changeMethodText": "Változtatások számítása ebben",
    "positive": "Pozitív",
    "negative": "Negatív",
    "threshold": "Küszöbérték",
    "difference": "Különbség",
    "apply": "Alkalmaz",
    "clear": "Törlés",
    "nir": "Infravörös sáv",
    "red": "Vörös sáv",
    "green": "Zöld sáv",
    "swir": "Rövid hullámhosszú infravörös sáv",
    "band1": "„A” sáv",
    "band2": "„B” sáv",
    "mode1": "Különbségkép",
    "mode2": "Különbségmaszk",
    "mode3": "Küszöbérték-maszk",
    "method1": "Kép fényereje",
    "method2": "Vegetációs index",
    "method3": "Talajhoz igazított vegetációIndex",
    "method4": "Nyíil vízfelület index",
    "method5": "Tűz által érintett terület aránya",
    "method6": "Kisebb, mint a küszöbértékem",
    "method7": "Nagyobb, mint a küszöbértékem",
    "method8": "Egycsatornás sáv",
    "method9": "Egyéni Index",
    "dropDown": "Képek megjelenítése a legördülő listán.",
    "transparency": "Átlátszóság (eredmények)",
    "slider": "Képek megjelenítése a csúszkán.",
    "error1": "A mező nincs megadva.",
    "error2": "Nincs OBJECTID mező.",
    "error3": "Nincs Kategória mező.",
    "error4": "Nem hajtható végre művelet a rétegre vonatkozóan.",
    "error5": "A 10.2.1-es verzió előtti szolgáltatások nem támogatottak.",
    "error6": "Nincsenek 3D térképek az aktuális kiterjedésben.",
    "error7": "Jelöljön ki két különböző képet.",
    "error8": "Érvénytelen dátumtartomány: A kezdési dátum a befejezési dátumnál korábbi kell legyen.",
    "indexText": "Speciális indexelési beállítások",
    "date": "Dátum",
    "areaText": "Terület csökkentése / növelése",
    "areaText2": "Leégett / tűz utáni újranövekedési terület",
    "areaText3": "Lefedett terület",
    "unit": "km",
    "swipe": "Csúszka",
    "imageLabel": "kép(ek)",
    "extent": "Polygon(ok) rajzolása kiterjedés meghatározására",
    "colorPicker": "Színválasztó",
    "refresh": "Frissítés gomb",
    "refreshTooltip": "A képlista frissítése az aktuális kiterjedés alapján.",
    "colorpickerText": "Szín megadása a maszkhoz",
    "sliderText": "Küszöbérték beállítása",
    "maskModeText": "Melyik értékeket kell maszkolnom?",
    "positiveSliderText": "Állítsa be a képek közötti minimális növekedést, mielőtt a terület zöld színnel jelenik meg.",
    "negativeSliderText": "Állítsa be a képek közötti minimális csökkenést, mielőtt a terület magenta színnel jelenik meg.",
    "updateResult": "A kép megváltozott; Az elemzés frissítéséhez kattintson az Alkalmaz lehetőségre."
  },
  "editor": {
    "title": "Szerkesztő",
    "error": "Nem található szerkesztési réteg.",
    "error1": "A hozzáférés megtagadva. A rétegek nem szerkeszthetők.",
    "text": "Válasszon egy szimbólumot, és kattintson a térképre."
  },
  "measurement": {
    "title": "Képmérés",
    "error": "A mérési lehetőségek nem támogatottak."
  },
  "export": {
    "title": "Exportálás",
    "mode": "Hely mentése",
    "titleText": "Cím (kötelező)",
    "description": "Leírás",
    "tags": "Címkék (kötelező)",
    "preview": "Előnézet",
    "submit": "Mentés",
    "cancel": "Mégse",
    "pixel": "Képpontméret",
    "outsr": "Kimeneti koordináta-rendszer",
    "renderer": "TIFF-letöltési beállítások",
    "formatText1": "Ahogy megjelenik",
    "formatText2": "Nyers adat (összes sáv)",
    "extent": "Polygon rajzolása kiterjedés meghatározására",
    "drawText": "(az indításhoz kattintson a képre)",
    "text": "A nyers adat nem jeleníthető meg szabványos fényképmegtekintővel. Megnyitás ArcGIS Pro-val.",
    "error": "Nincsenek látható távérzékelési rétegek a térképen.",
    "error1": "A címet meg kell adni.",
    "error2": "A címké(ke)t meg kell adni.",
    "error3": "Az export pixelmérete korlátozva:",
    "error4": "ehhez a kiterjedéshez.",
    "error5": "Érvényes numerikus értéket adjon meg",
    "error6": "A képe jelenleg nem exportálható.",
    "thumbnailError": "Bélyegkép nem áll rendelkezésre",
    "advance": "Speciális mentési beállítások",
    "modeOption1": "Mentés portálra",
    "modeOption2": "Mentés lemezre",
    "default": "Alapértelmezett",
    "utm": "WGS84 UTM zóna",
    "layer": "Réteg",
    "mercator": "WebMercatorAS",
    "folder": "Válassza ki a mappát"
  },
  "imageDate": {
    "label": "Kép dátuma"
  },
  "about": {
    "title": "További információ"
  },
  "bookmark": {
    "title": "Könyvjelzők",
    "default": "Alapértelmezett",
    "selectBookmark": "Könyvjelzők kiválasztása",
    "add": "Könyvjelzők hozzáadása",
    "addTitle": "Cím megadása",
    "addBtn": "Ideiglenes hozzáadás"
  },
  "coordinate": {
    "_widgetLabel": "Koordináta",
    "hintMessage": "Kattintson a térképre a koordináták meghatározásához",
    "defaultLabel": "Alapértelmezett",
    "realtimeLabel": "Mozgassa az egeret a koordináták meghatározásához",
    "computing": "Kiszámítás...",
    "latitudeLabel": "Szélesség",
    "longitudeLabel": "Hosszúság",
    "loading": "betöltés...",
    "enableClick": "Ide kattintva engedélyezheti a koordinátáknak a térképre való kattintással történő meghatározását",
    "disableClick": "Ide kattintva letilthatja a koordinátáknak a térképre való kattintással történő meghatározását",
    "Default": "Alapértelmezett",
    "Inches": "Hüvelyk",
    "Foot": "Láb",
    "Foot_US": "Feet_US",
    "Yards": "Yard",
    "Miles": "Mérföld",
    "Nautical_Miles": "Tengeri mérföld",
    "Millimeters": "Milliméter",
    "Centimeters": "Centiméter",
    "Meter": "Méter",
    "Kilometers": "Kilométer",
    "Decimeters": "Deciméter",
    "Decimal_Degrees": "Fok",
    "Degree_Minutes_Seconds": "Fokok, fokpercek és fokmásodpercek",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});