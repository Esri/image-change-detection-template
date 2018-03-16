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
    "error": "Nie można utworzyć mapy"
  },
  "nav": {
    "close": "Zamknij"
  },
  "basemap": {
    "title": "Galeria map bazowych"
  },
  "operationalLayers": {
    "title": "Warstwy operacyjne",
    "error": "Brak warstw operacyjnych na mapie."
  },
  "layerSelector": {
    "active": "Aktywna warstwa",
    "comparison": "Warstwa porównania",
    "other": "Inne",
    "result": "Wynik",
    "title": "Selektor warstwy",
    "resultSave": "Dodaj warstwę wynikową do listy warstw porównania",
    "copy": "Skopiuj aktywną warstwę na warstwę porównania.",
    "swap": "Zamień warstwy aktywną i porównania."
  },
  "renderer": {
    "title": "Moduł renderowania",
    "stretch": "Parametry rozciągnięcia",
    "stretchType": "Typ rozciągnięcia",
    "dra": "DRA",
    "draText": "Dynamiczna regulacja zakresu aktualizuje usprawnienia w oparciu o bieżący widok",
    "gamma": "Gamma",
    "apply": "Zastosuj",
    "top": "Wyklucz górne",
    "bottom": "Wyklucz dolne",
    "topText": " Wyklucz górną wartość procentową x histogramu",
    "bottomText": " Wyklucz dolną wartość procentową x histogramu",
    "stdDev": "# odchylenia standardowego",
    "layer": "Bieżąca warstwa",
    "error": "Brak widocznych warstw zobrazowań na mapie."
  },
  "imageSelector": {
    "title": "Selektor obrazów",
    "enable": "Włącz selektor obrazów",
    "secondary": "Ustaw warstwę aktywną jako warstwę porównania.",
    "dropDown": "Pokaż obrazy na liście rozwijanej.",
    "refresh": "Odśwież zapytanie w oparciu o bieżący zasięg.",
    "show": "Pokaż",
    "age": "Wiek",
    "zoom": "Powiększ, aby wybrać obrazy.",
    "error": "Brak widocznych warstw zobrazowań na mapie.",
    "error1": "Nie określono pola.",
    "error2": "Brak pola OBJECTID.",
    "error3": "Brak pola Kategoria.",
    "error4": "Nie można wykonać działania dla warstwy.",
    "error5": "Usługi w wersjach starszych niż 10.2.1 nie są obsługiwane.",
    "error6": "Brak scen w bieżącym zasięgu.",
    "error7": "Liczba wybranych atrybutów przekroczyła 20. Zostanie wyświetlonych tylko pierwszych 20 atrybutów. Naciśnij przycisk OK, aby to ostrzeżenie nie było ponownie wyświetlane.",
    "slider": "Pokaż obrazy na suwaku."
  },
  "changeDetection": {
    "title": "Wykrywanie zmian",
    "mode": "Tryb",
    "method": "Metoda",
    "positive": "Różnica dodatnia",
    "negative": "Różnica ujemna",
    "threshold": "Próg",
    "difference": "Różnica",
    "apply": "Zastosuj",
    "error": "Wykrywanie zmian działa w odniesieniu do obrazów wykonanych w różnym czasie przy użyciu tej samej usługi.<br />Najpierw za pomocą selektora obrazów wybierz jeden obraz,<br />następnie kliknij przycisk <img src='images/down.png' height='14'/> i wybierz drugi obraz.<br />Wróć do tego elementu sterującego, aby kontynuować wykrywanie zmian."
  },
  "editor": {
    "title": "Edytor",
    "error": "Nie wybrano warstwy do edycji.",
    "error1": "Odmowa dostępu. Nie można edytować warstw."
  },
  "measurement": {
    "title": "Pomiar obrazu",
    "error": "Funkcja pomiarów geodezyjnych nie jest obsługiwana."
  },
  "export": {
    "title": "Eksportuj",
    "mode": "Tryb",
    "titleText": "Tytuł",
    "description": "Opis",
    "tags": "Znaczniki",
    "submit": "Zapisz",
    "pixel": "Rozmiar pikseli",
    "outsr": "Wynikowe odniesienie przestrzenne",
    "renderer": "Bieżący moduł renderowania",
    "extent": "Definiuj zasięg",
    "text": "Jeśli zaznaczono opcję Bieżący moduł renderowania, eksportowane będą wartości renderowane<br />; w przeciwnym razie wyeksportowane zostaną <br/>oryginalne wartości danych.",
    "error": "Brak widocznych warstw zobrazowań na mapie.",
    "error1": "Tytuł jest wymagany.",
    "error2": "Znacznik/znaczniki są wymagane."
  },
  "compare": {
    "title": "Porównanie",
    "slider": "Suwak przezroczystości",
    "hSwipe": "Zwijanie w poziomie",
    "vSwipe": "Zwijanie w pionie",
    "error": "Brak widocznych warstw zobrazowań dostępnych do porównania."
  }
});