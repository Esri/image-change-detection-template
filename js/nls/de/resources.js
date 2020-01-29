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
    "error": "Karte kann nicht erstellt werden",
    "licenseError": {
      "message": "Ihr Konto ist nicht für die Verwendung von nicht öffentlichen konfigurierbaren Apps lizenziert. Bitten Sie den Administrator der Organisation, Ihnen einen Benutzertyp mit Essential Apps oder eine Add-On-Lizenz für Essential Apps zuzuweisen.",
      "title": "Nicht lizenziert"
    }
  },
  "nav": {
    "close": "Schließen"
  },
  "basemap": {
    "title": "Grundkarten-Galerie"
  },
  "operationalLayers": {
    "title": "Operationale Layer",
    "error": "Keine funktionsfähigen Layer in der Karte."
  },
  "imageMask": {
    "title": "Bildmaskierung",
    "toolText": "Werkzeug",
    "tool1": "Maske",
    "tool2": "Änderungserkennung",
    "layer": "Layer",
    "layerText": "Wählen Sie Ihre Bilddaten aus.",
    "basemap": "Grundkarte",
    "maskImageSelector": "Spezifische Bilder auswählen",
    "imageSelectorText": "Wählen Sie zwei zu vergleichende Bilder aus.",
    "changeText": "Konfigurieren Sie die Änderungserkennung.",
    "maskText": "Konfigurieren Sie die Maske.",
    "zoom": "Vergrößern Sie die Ansicht, um Bilder auszuwählen.",
    "primary": "Primäres Bild",
    "comparison": "Vergleichsbild",
    "mode": "Änderungen visualisieren als",
    "method": "Methode",
    "changeMethodText": "Änderungen berechnen in",
    "positive": "Positiv",
    "negative": "Negativ",
    "threshold": "Schwellenwert",
    "difference": "Differenz",
    "apply": "Anwenden",
    "clear": "Entfernen",
    "nir": "Infrarotband",
    "red": "Rotes Band",
    "green": "Grünes Band",
    "swir": "Kurzwelleninfrarotband",
    "band1": "Band A",
    "band2": "Band B",
    "mode1": "Differenzbild",
    "mode2": "Differenzmaske",
    "mode3": "Schwellenwertmaske",
    "method1": "Bildhelligkeit",
    "method2": "Vegetationsindex",
    "method3": "Soil Adjusted Veg. Index",
    "method4": "Wasserindex",
    "method5": "Brandindex",
    "method6": "Kleiner als der Schwellenwert",
    "method7": "Größer als der Schwellenwert",
    "method8": "Einzelband",
    "method9": "Benutzerdefinierter Index",
    "dropDown": "Zeigen Sie Bilder in der Dropdown-Liste an.",
    "transparency": "Transparenz (Ergebnisse)",
    "slider": "Zeigen Sie Bilder auf dem Schieberegler an.",
    "error1": "Das Feld wurde nicht angegeben.",
    "error2": "Kein ObjectID-Feld.",
    "error3": "Kein Kategoriefeld.",
    "error4": "Die Aktion kann für den Layer nicht ausgeführt werden.",
    "error5": "Services vor 10.2.1 werden nicht unterstützt.",
    "error6": "Keine Szenen in der aktuellen Ausdehnung.",
    "error7": "Wählen Sie zwei verschiedene Bilder aus.",
    "error8": "Ungültiger Datumsbereich: Startdatum muss vor dem Enddatum liegen.",
    "indexText": "Erweiterte Indexoptionen",
    "date": "Datum",
    "areaText": "Flächenabnahme/-zunahme",
    "areaText2": "Verbrannte Fläche/Neubewuchsfläche",
    "areaText3": "Bedeckte Fläche",
    "unit": "km",
    "swipe": "Vergleichen",
    "imageLabel": "Bild(er)",
    "extent": "Zeichnen Sie ein oder mehrere Polygone, um die Ausdehnung zu definieren.",
    "colorPicker": "Farbauswahl",
    "refresh": "Schaltfläche 'Aktualisieren'",
    "refreshTooltip": "Aktualisieren Sie das Bild basierend auf der aktuellen Ausdehnung.",
    "colorpickerText": "Eine Farbe für die Maske auswählen",
    "sliderText": "Einen Schwellenwert festlegen",
    "maskModeText": "Welche Werte sollte ich maskieren?",
    "positiveSliderText": "Legen Sie die erforderliche Mindestzunahme zwischen den Bildern fest, ab der die Fläche in Grün dargestellt wird.",
    "negativeSliderText": "Legen Sie die erforderliche Mindestabnahme zwischen den Bildern fest, ab der die Fläche in Magenta dargestellt wird.",
    "updateResult": "Das Bild hat sich geändert. Klicken Sie auf \"Übernehmen\", um die Analyse zu aktualisieren."
  },
  "editor": {
    "title": "Editor",
    "error": "Kein Bearbeitungs-Layer gefunden.",
    "error1": "Zugriff verweigert Layer können nicht bearbeitet werden.",
    "text": "Wählen Sie ein Symbol, und klicken Sie auf die Karte."
  },
  "measurement": {
    "title": "Bildmessung",
    "error": "Messfunktionen werden nicht unterstützt."
  },
  "export": {
    "title": "Exportieren",
    "mode": "Position speichern",
    "titleText": "Titel (erforderlich)",
    "description": "Beschreibung",
    "tags": "Tags (erforderlich)",
    "preview": "Vorschau anzeigen",
    "submit": "Speichern",
    "cancel": "Abbrechen",
    "pixel": "Pixelgröße",
    "outsr": "Ausgabe-Raumbezug",
    "renderer": "Download-Optionen für TIFF-Dateien",
    "formatText1": "Wie angezeigt",
    "formatText2": "Rohdaten (alle Bänder)",
    "extent": "Zeichnen Sie ein Polygon, um die Ausdehnung zu definieren.",
    "drawText": "(zum Starten auf Bild klicken)",
    "text": "Die Rohdaten können nicht mit standardmäßigen Foto-Viewern angezeigt werden. Öffnen Sie diese mit ArcGIS Pro.",
    "error": "Keine sichtbaren Bilddaten-Layer auf der Karte.",
    "error1": "Titel ist erforderlich.",
    "error2": "Tags sind erforderlich.",
    "error3": "Die Pixelgröße des Exports ist beschränkt auf",
    "error4": "für diese Ausdehnung.",
    "error5": "Geben Sie einen gültigen numerischen Wert ein.",
    "error6": "Das Bild kann zurzeit nicht exportiert werden.",
    "thumbnailError": "Keine Miniaturansicht verfügbar",
    "advance": "Erweiterte Speicheroptionen",
    "modeOption1": "In Portal speichern",
    "modeOption2": "Auf Festplatte speichern",
    "default": "Standard",
    "utm": "WGS84-UTM-Zone",
    "layer": "Layer",
    "mercator": "WebMercatorAS",
    "folder": "Ordner auswählen"
  },
  "imageDate": {
    "label": "Bilddatum"
  },
  "about": {
    "title": "Info"
  },
  "bookmark": {
    "title": "Lesezeichen",
    "default": "Standard",
    "selectBookmark": "Lesezeichen auswählen",
    "add": "Lesezeichen hinzufügen",
    "addTitle": "Titel eingeben",
    "addBtn": "Temporär hinzufügen"
  },
  "coordinate": {
    "_widgetLabel": "Koordinaten",
    "hintMessage": "Zum Abrufen von Koordinaten auf die Karte klicken",
    "defaultLabel": "Standardeinstellung",
    "realtimeLabel": "Maus zum Abrufen von Koordinaten auf der Karte bewegen",
    "computing": "Wird berechnet...",
    "latitudeLabel": "Breitengrad",
    "longitudeLabel": "Längengrad",
    "loading": "wird geladen...",
    "enableClick": "Klicken Sie, um das Abrufen von Koordinaten durch Klicken auf die Karte zu aktivieren",
    "disableClick": "Klicken Sie, um das Abrufen von Koordinaten durch Klicken auf die Karte zu deaktivieren",
    "Default": "Standardeinstellung",
    "Inches": "Zoll",
    "Foot": "Fuß",
    "Foot_US": "Feet_US",
    "Yards": "Yards",
    "Miles": "Meilen",
    "Nautical_Miles": "Seemeilen",
    "Millimeters": "Millimeter",
    "Centimeters": "Zentimeter",
    "Meter": "Meter",
    "Kilometers": "Kilometer",
    "Decimeters": "Dezimeter",
    "Decimal_Degrees": "Grad",
    "Degree_Minutes_Seconds": "Grad, Minuten, Sekunden",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});