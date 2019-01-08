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
    "error": "Nelze vytvořit mapu",
    "licenseError": {
      "message": "Váš účet nevlastní licenci k používání konfigurovatelných aplikací, které nejsou veřejné. Požádejte prosím správce své organizace, aby vám přidělil typ uživatele, jehož součástí jsou základní aplikace nebo doplňková licence základních aplikací.",
      "title": "Chybí licence"
    }
  },
  "nav": {
    "close": "Zavřít"
  },
  "basemap": {
    "title": "Galerie podkladových map"
  },
  "operationalLayers": {
    "title": "Operační vrstvy",
    "error": "V mapě nejsou k dispozici žádné operační vrstvy."
  },
  "imageMask": {
    "title": "Maska snímku",
    "toolText": "Nástroj",
    "tool1": "Maska",
    "tool2": "Detekování změn",
    "layer": "Vrstva",
    "layerText": "Zvolte snímky",
    "maskImageSelector": "Vybrat konkrétní snímky",
    "imageSelectorText": "Vyberte dva různé snímky k porovnání.",
    "changeText": "Konfigurovat detekci změn",
    "maskText": "Konfigurovat masku.",
    "zoom": "Přiblížit pro volbu snímků.",
    "primary": "Primární snímek",
    "comparison": "Srovnávací snímek",
    "mode": "Vizualizovat změny jako",
    "method": "Metoda",
    "changeMethodText": "Vypočítat změny v",
    "positive": "Kladné",
    "negative": "Záporné",
    "threshold": "Práh",
    "difference": "Rozdíl",
    "apply": "Použít",
    "clear": "Zrušit výběr",
    "nir": "Infračervené pásmo",
    "red": "Červené pásmo",
    "green": "Zelené pásmo",
    "swir": "Krátkovlnné infračervené pásmo",
    "band1": "Pásmo A",
    "band2": "Pásmo B",
    "mode1": "Diferenční snímek",
    "mode2": "Diferenční maska",
    "mode3": "Prahová maska",
    "method1": "Jas snímku",
    "method2": "Vegetační index",
    "method3": "Půdně přizpůsobená veg. Index",
    "method4": "Index vody",
    "method5": "Index spálení",
    "method6": "Méně než moje prahová hodnota",
    "method7": "Více než moje prahová hodnota",
    "method8": "Jedno pásmo",
    "method9": "Vlastní index",
    "dropDown": "Zobrazit snímky v rozbalovacím seznamu.",
    "transparency": "Průhlednost(výsledky)",
    "slider": "Zobrazit snímky na posuvníku.",
    "error1": "Pole není specifikováno.",
    "error2": "Chybí pole OBJECTID.",
    "error3": "Chybí pole kategorie.",
    "error4": "Činnost pro vrstvu nelze provést.",
    "error5": "Služby ve verzi nižší než 10.2.1 nejsou podporovány.",
    "error6": "V aktuálním rozsahu nejsou žádné scény.",
    "error7": "Vyberte prosím dva různé snímky.",
    "indexText": "Rozšířené možnosti indexů",
    "date": "Datum",
    "areaText": "Zmenšit / zvětšit oblast",
    "areaText2": "Spálená / znovu zarostlá oblast po požáru",
    "areaText3": "Pokrytá oblast",
    "unit": "km",
    "swipe": "Překrývání",
    "imageLabel": "Obrázek(y)",
    "extent": "Nakreslete polygon(y) a definujte tak rozsah.",
    "colorPicker": "Výběr barvy",
    "refresh": "Tlačítko pro obnovení",
    "refreshTooltip": "Aktualizuje seznam snímků na základě aktuálního rozsahu.",
    "colorpickerText": "Vyberte barvu masky",
    "sliderText": "Nastavte prahovou hodnotu",
    "maskModeText": "Které hodnoty mám maskovat?",
    "positiveSliderText": "Nastavte minimální zvýšení požadované mezi snímky, než se oblast zobrazí zeleně.",
    "negativeSliderText": "Nastavte minimální snížení požadované mezi snímky, než se oblast zobrazí purpurově.",
    "updateResult": "Váš snímek se změnil. Kliknutím na Použít aktualizujete analýzu."
  },
  "editor": {
    "title": "Editor",
    "error": "Nenalezena žádná vrstva pro úpravu.",
    "error1": "Přístup byl odepřen. Vrstvy nelze upravit.",
    "text": "Vyberte symbol a klikněte na mapu."
  },
  "measurement": {
    "title": "Měření snímku",
    "error": "Funkcionalita měření není povolena."
  },
  "export": {
    "title": "Exportovat",
    "mode": "Uložit umístění",
    "titleText": "Název (povinné)",
    "description": "Popis",
    "tags": "Klíčová slova (povinné)",
    "preview": "Náhled",
    "submit": "Uložit",
    "cancel": "Storno",
    "pixel": "Velikost pixelu",
    "outsr": "Výstupní souřadnicový systém",
    "renderer": "Možnosti stahování souborů TIFF",
    "formatText1": "Dle zobrazení",
    "formatText2": "Surová data (všechna pásma)",
    "extent": "Nakreslete polygon a definujte tak rozsah.",
    "drawText": "(klikněte na snímek pro spuštění)",
    "text": "Surová data nelze zobrazit v běžných prohlížečích fotografií. Otevřít v ArcGIS Pro.",
    "error": "V mapě nejsou viditelné žádné vrstvy imagery.",
    "error1": "Je požadován název.",
    "error2": "Je požadován tag(tagy).",
    "error3": "Velikost pixelu pro export je omezena na",
    "error4": "pro tento rozsah.",
    "error5": "Zadejte platnou číselnou hodnotu.",
    "error6": "Váš snímek momentálně nelze exportovat.",
    "thumbnailError": "Miniatura není k dispozici",
    "advance": "Rozšířené možnosti ukládání",
    "modeOption1": "Uložit do portálu",
    "modeOption2": "Uložit na disk",
    "default": "výchozí",
    "utm": "Zóna UTM WGS84",
    "layer": "Vrstva",
    "mercator": "WebMercatorAS",
    "folder": "Vybrat složku"
  },
  "imageDate": {
    "label": "Datum snímku"
  },
  "about": {
    "title": "Informace o aplikaci"
  },
  "bookmark": {
    "title": "Záložky",
    "default": "výchozí",
    "selectBookmark": "Vybrat záložky",
    "add": "Přidat záložky",
    "addTitle": "Zadat název",
    "addBtn": "Přidat dočasný"
  }
});