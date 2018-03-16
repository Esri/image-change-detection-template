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
    "error": "Karte kann nicht erstellt werden"
  },
  "nav": {
    "close": "Schließen"
  },
  "basemap": {
    "title": "Grundkartengalerie"
  },
  "operationalLayers": {
    "title": "Operationale Layer",
    "error": "Keine funktionsfähigen Layer in der Karte."
  },
  "layerSelector": {
    "active": "Aktiver Layer",
    "comparison": "Vergleichs-Layer",
    "other": "Andere",
    "result": "Ergebnis",
    "title": "Layer-Auswahl",
    "resultSave": "Den Ergebnis-Layer der Liste von Vergleichs-Layern hinzufügen",
    "copy": "Kopieren Sie den aktiven Layer in den Vergleichs-Layer.",
    "swap": "Tauschen Sie den aktiven Layer und den Vergleichs-Layer aus."
  },
  "renderer": {
    "title": "Renderer",
    "stretch": "Streckungsparameter",
    "stretchType": "Streckungstyp",
    "dra": "DRA",
    "draText": "Die dynamische Bereichsanpassung aktualisiert Verbesserungen basierend auf der aktuellen Ansicht",
    "gamma": "Gamma",
    "apply": "Anwenden",
    "top": "Obere ausschließen",
    "bottom": "Untere ausschließen",
    "topText": " Obere x Prozent des Histogramms ausschließen",
    "bottomText": " Untere x Prozent des Histogramms ausschließen",
    "stdDev": "# der Std.-Abw.",
    "layer": "Aktueller Layer",
    "error": "Keine sichtbaren Bilddaten-Layer auf der Karte."
  },
  "imageSelector": {
    "title": "Bildauswahl",
    "enable": "Bildauswahl aktivieren",
    "secondary": "Legen Sie den aktiven Layer als Vergleichs-Layer fest.",
    "dropDown": "Zeigen Sie Bilder in der Dropdown-Liste an.",
    "refresh": "Aktualisieren Sie die Abfrage basierend auf der aktuellen Ausdehnung.",
    "show": "Anzeigen",
    "age": "Alter",
    "zoom": "Vergrößern Sie die Ansicht, um Bilder auszuwählen.",
    "error": "Keine sichtbaren Bilddaten-Layer auf der Karte.",
    "error1": "Das Feld wurde nicht angegeben.",
    "error2": "Kein ObjectID-Feld.",
    "error3": "Kein Kategoriefeld.",
    "error4": "Die Aktion kann für den Layer nicht ausgeführt werden.",
    "error5": "Services vor 10.2.1 werden nicht unterstützt.",
    "error6": "Keine Szenen in der aktuellen Ausdehnung.",
    "error7": "Es wurden mehr als 20 Footprints ausgewählt. Nur die ersten 20 werden angezeigt. Drücken Sie auf 'OK', damit die Warnung nicht wieder angezeigt wird.",
    "slider": "Zeigen Sie Bilder auf dem Schieberegler an."
  },
  "changeDetection": {
    "title": "Änderungserkennung",
    "mode": "Modus",
    "method": "Methode",
    "positive": "Positiver Unterschied",
    "negative": "Negativer Unterschied",
    "threshold": "Schwellenwert",
    "difference": "Differenz",
    "apply": "Anwenden",
    "error": "Die Änderungserkennung verwendet zwei Bilder mit unterschiedlichen Datumswerten aus einem Service.<br />Definieren Sie zuerst in der Bildauswahl ein Bild,<br />klicken Sie dann auf die Schaltfläche <img src='images/down.png' height='14'/>, und wählen Sie das zweite Bild aus.<br />Kehren Sie zu diesem Steuerelement zurück, um mit der Änderungserkennung fortzufahren."
  },
  "editor": {
    "title": "Editor",
    "error": "Kein Bearbeitungs-Layer ausgewählt.",
    "error1": "Zugriff verweigert. Layer können nicht bearbeitet werden."
  },
  "measurement": {
    "title": "Bildmessung",
    "error": "Messfunktionen werden nicht unterstützt."
  },
  "export": {
    "title": "Exportieren",
    "mode": "Modus",
    "titleText": "Titel",
    "description": "Beschreibung",
    "tags": "Tags",
    "submit": "Senden",
    "pixel": "Pixelgröße",
    "outsr": "Ausgabe-Raumbezug",
    "renderer": "Aktueller Renderer",
    "extent": "Ausdehnung definieren",
    "text": "Wenn \"Aktueller Renderer\" aktiviert ist, werden die gerenderten Daten<br /> exportiert, andernfalls werden die Originaldatenwerte <br/>exportiert.",
    "error": "Keine sichtbaren Bilddaten-Layer auf der Karte.",
    "error1": "Titel ist erforderlich.",
    "error2": "Tags sind erforderlich."
  },
  "compare": {
    "title": "Vergleich",
    "slider": "Transparenz-Schieberegler",
    "hSwipe": "Horizontaler Vergleich",
    "vSwipe": "Vertikaler Vergleich",
    "error": "Keine sichtbaren Bilddaten-Layer für den Vergleich verfügbar."
  }
});