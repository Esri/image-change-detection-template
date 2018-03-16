/*global define */
/*
 | Copyright 2014 Esri
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
    "error": "Nelze vytvořit mapu"
  },
  "nav": {
    "close": "Zavřít"
  },
  "basemap": {
    "title": "Galerie podkladových map"
  },
  "operationalLayers": {
    "title": "Operační vrstvy",
    "error": "V mapě nejsou k dispozici žádné operační vrstvy."
  },
  "layerSelector": {
    "active": "Aktivní vrstva",
    "comparison": "Srovnávací vrstva",
    "other": "Ostatní",
    "result": "Výsledek",
    "title": "Nástroj pro výběr vrstev",
    "resultSave": "Přidat výslednou vrstvu do seznamu srovnávacích vrstev",
    "copy": "Kopírovat aktivní vrstvu do srovnávací vrstvy.",
    "swap": "Přehodit aktivní vrstvu a srovnávací vrstvu"
  },
  "renderer": {
    "title": "Vykreslovač",
    "stretch": "Parametry roztažení",
    "stretchType": "Typ roztažení hodnot pro použití barevné škály",
    "dra": "Dynamické roztažení",
    "draText": "Vylepšení aktualizace dynamického roztažení na základě aktuálního zobrazení",
    "gamma": "Gama",
    "apply": "Použít",
    "top": "Vyloučit horní část",
    "bottom": "Vyloučit spodní část",
    "topText": " Vyloučit horní část x procenta z histogramu",
    "bottomText": " Vyloučit spodní část x procenta z histogramu",
    "stdDev": "Č. směr. odch.",
    "layer": "Aktuální vrstva",
    "error": "V mapě nejsou viditelné žádné vrstvy imagery."
  },
  "imageSelector": {
    "title": "Nástroj pro volbu snímků",
    "enable": "Povolit nástroj pro volbu snímků",
    "secondary": "Nastavit aktivní vrstvu jako srovnávací vrstvu.",
    "dropDown": "Zobrazit snímky v rozbalovacím seznamu.",
    "refresh": "Obnovit dotaz podle aktuálního rozsahu.",
    "show": "Zobrazit",
    "age": "Věk",
    "zoom": "Přiblížit pro volbu snímků.",
    "error": "V mapě nejsou viditelné žádné vrstvy imagery.",
    "error1": "Pole není specifikováno.",
    "error2": "Chybí pole OBJECTID.",
    "error3": "Chybí pole kategorie.",
    "error4": "Činnost pro vrstvu nelze provést.",
    "error5": "Služby ve verzi nižší než 10.2.1 nejsou podporovány.",
    "error6": "V aktuálním rozsahu nejsou žádné scény.",
    "error7": "Počet zvolených obrysů je větší než 20. Bude zobrazeno pouze prvních 20. Aby se toto varování již nezobrazovalo, stiskněte OK.",
    "slider": "Zobrazit snímky na posuvníku."
  },
  "changeDetection": {
    "title": "Detekování změn",
    "mode": "Režim",
    "method": "Metoda",
    "positive": "Pozitivní rozdíl",
    "negative": "Negativní rozdíl",
    "threshold": "Práh",
    "difference": "Rozdíl",
    "apply": "Použít",
    "error": "Funkce detekování změn pracuje se dvěma snímky s různými daty ze stejné služby.<br />Nejprve použijte nástroj pro volbu snímků pro volbu jednoho snímku a poté <br />klikněte na tlačítko <img src='images/down.png' height='14'/> a zvolte druhý snímek. <br />Poté se vraťte k tomuto ovladači pro pokračování v detekování změn."
  },
  "editor": {
    "title": "Editor",
    "error": "Není vybrána žádná vrstva pro úpravu.",
    "error1": "Přístup odepřen. Vrstvy nelze editovat."
  },
  "measurement": {
    "title": "Měření snímku",
    "error": "Funkcionalita měření není povolena."
  },
  "export": {
    "title": "Exportovat",
    "mode": "Režim",
    "titleText": "Název",
    "description": "Popis",
    "tags": "Štítky",
    "submit": "Odeslat",
    "pixel": "Velikost pixelu",
    "outsr": "Výstupní souřadnicový systém",
    "renderer": "Aktuální vykreslovač",
    "extent": "Definovat rozsah",
    "text": "Pokud je zaškrtnuto pole Aktuální vykreslovač,<br /> vykreslení se vyexportuje, jinak se vyexportují hodnoty <br/> původních dat.",
    "error": "V mapě nejsou viditelné žádné vrstvy imagery.",
    "error1": "Je požadován název.",
    "error2": "Je požadován tag(tagy)."
  },
  "compare": {
    "title": "Porovnání",
    "slider": "Ovladač průhlednosti",
    "hSwipe": "Horizontální překrytí",
    "vSwipe": "Vertikální překrytí",
    "error": "V mapě nejsou dostupné žádné vrstvy imagery pro porovnání."
  }
});