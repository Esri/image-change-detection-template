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
    "error": "Nie można utworzyć mapy",
    "licenseError": {
      "message": "Twoje konto nie jest licencjonowane do korzystania z aplikacji konfigurowalnych, które nie są publiczne. Poproś administratora instytucji o przypisanie typu użytkownika, który obejmuje licencję na kluczowe aplikacje lub licencję na kluczowe aplikacje dodatkowe.",
      "title": "Nie licencjonowano"
    }
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
  "imageMask": {
    "title": "Maska obrazu",
    "toolText": "Narzędzie",
    "tool1": "Maska",
    "tool2": "Wykrywanie zmian",
    "layer": "Warstwa",
    "layerText": "Wybierz swoje zobrazowanie.",
    "maskImageSelector": "Wybierz określone obrazy",
    "imageSelectorText": "Wybierz dwa różne obrazy do porównania.",
    "changeText": "Konfiguruj wykrywanie zmian.",
    "maskText": "Konfiguruj maskę.",
    "zoom": "Powiększ, aby wybrać obrazy.",
    "primary": "Obraz podstawowy",
    "comparison": "Obraz porównywany",
    "mode": "Wizualizuj zmiany jako",
    "method": "Metoda",
    "changeMethodText": "Oblicz zmiany w",
    "positive": "Pozytyw",
    "negative": "Negatyw",
    "threshold": "Próg",
    "difference": "Różnica",
    "apply": "Zastosuj",
    "clear": "Wyczyść",
    "nir": "Pasmo podczerwieni",
    "red": "Pasmo czerwieni",
    "green": "Pasmo zieleni",
    "swir": "Pasmo bliskiej podczerwieni",
    "band1": "Pasmo A",
    "band2": "Pasmo B",
    "mode1": "Obraz różnicowy",
    "mode2": "Maska różnicowa",
    "mode3": "Maska progowa",
    "method1": "Jasność obrazu",
    "method2": "Wskaźnik roślinności",
    "method3": "Wskaźnik roślinności dostosowany względem gleby Indeks",
    "method4": "Wskaźnik wody",
    "method5": "Wskaźnik obszarów spalonych",
    "method6": "Mniejsza niż mój próg",
    "method7": "Większa niż mój próg",
    "method8": "Pojedyncze pasmo",
    "method9": "Indeks niestandardowy",
    "dropDown": "Pokaż obrazy na liście rozwijanej.",
    "transparency": "Przezroczystość (wyniki)",
    "slider": "Pokaż obrazy na suwaku.",
    "error1": "Nie określono pola.",
    "error2": "Brak pola OBJECTID.",
    "error3": "Brak pola Kategoria.",
    "error4": "Nie można wykonać działania dla warstwy.",
    "error5": "Usługi w wersjach starszych niż 10.2.1 nie są obsługiwane.",
    "error6": "Brak scen w bieżącym zasięgu.",
    "error7": "Wybierz dwa różne obrazy.",
    "indexText": "Zaawansowane opcje indeksowania",
    "date": "Data",
    "areaText": "Zmniejszenie / zwiększenie obszaru",
    "areaText2": "Obszar spalony / odtworzony po pożarze",
    "areaText3": "Obszar pokryty",
    "unit": "km",
    "swipe": "Zwiń",
    "imageLabel": "obrazy",
    "extent": "Narysuj poligony, aby zdefiniować zasięg",
    "colorPicker": "Okno wyboru kolorów",
    "refresh": "Przycisk Odśwież",
    "refreshTooltip": "Odśwież listę obrazów na podstawie bieżącego zasięgu.",
    "colorpickerText": "Wybierz kolor maski",
    "sliderText": "Skonfiguruj próg",
    "maskModeText": "Które wartości powinny być maskowane?",
    "positiveSliderText": "Skonfiguruj minimalny przyrost wymagany między obrazami, aby obszar był wyświetlany w kolorze zielonym.",
    "negativeSliderText": "Skonfiguruj minimalny spadek wymagany między obrazami, aby obszar był wyświetlany w kolorze różowym.",
    "updateResult": "Twój obraz zmienił się. Kliknij przycisk Zastosuj, aby zaktualizować analizę."
  },
  "editor": {
    "title": "Edytor",
    "error": "Nie znaleziono warstwy do edycji.",
    "error1": "Odmowa dostępu. Warstw nie można edytować.",
    "text": "Wybierz symbol i kliknij na mapie."
  },
  "measurement": {
    "title": "Pomiar obrazu",
    "error": "Funkcja pomiarów geodezyjnych nie jest obsługiwana."
  },
  "export": {
    "title": "Eksportuj",
    "mode": "Zapisz lokalizację",
    "titleText": "Tytuł (wymagany)",
    "description": "Opis",
    "tags": "Znaczniki (wymagane)",
    "preview": "Podgląd",
    "submit": "Zapisz",
    "cancel": "Anuluj",
    "pixel": "Rozmiar pikseli",
    "outsr": "Wynikowe odniesienie przestrzenne",
    "renderer": "Opcje pobierania obrazu TIFF",
    "formatText1": "Tak, jak jest wyświetlany",
    "formatText2": "Surowe dane (wszystkie pasma)",
    "extent": "Narysuj poligon, aby zdefiniować zasięg",
    "drawText": "(kliknij obraz, aby rozpocząć)",
    "text": "Surowych danych nie można wyświetlać w standardowych aplikacjach do przeglądania zdjęć. Otwórz w aplikacji ArcGIS Pro.",
    "error": "Brak widocznych warstw zobrazowań na mapie.",
    "error1": "Tytuł jest wymagany.",
    "error2": "Znacznik/znaczniki są wymagane.",
    "error3": "Parametr PixelSize eksportu jest ograniczony do",
    "error4": "dla tego zasięgu.",
    "error5": "Wpisz prawidłową wartość liczbową.",
    "error6": "W tej chwili nie można wyeksportować Twojego obrazu.",
    "thumbnailError": "Brak dostępnej miniatury",
    "advance": "Zaawansowane opcje zapisu",
    "modeOption1": "Zapisz w portalu",
    "modeOption2": "Zapisz na dysku",
    "default": "Domyślnie",
    "utm": "Strefa WGS84 UTM",
    "layer": "Warstwa",
    "mercator": "WebMercatorAS",
    "folder": "Wybierz folder"
  },
  "imageDate": {
    "label": "Dane obrazowe"
  },
  "about": {
    "title": "O"
  },
  "bookmark": {
    "title": "Zakładki",
    "default": "Domyślnie",
    "selectBookmark": "Wybierz zakładki",
    "add": "Dodaj zakładki",
    "addTitle": "Wprowadź tytuł",
    "addBtn": "Dodaj tymczasowe"
  }
});