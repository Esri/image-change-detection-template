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
    "error": "Imposibil de creat harta"
  },
  "nav": {
    "close": "Închidere"
  },
  "basemap": {
    "title": "Galerie de hărţi fundal"
  },
  "operationalLayers": {
    "title": "Straturi tematice operaţionale",
    "error": "Niciun strat tematic operațional pe hartă."
  },
  "layerSelector": {
    "active": "Strat tematic activ",
    "comparison": "Strat tematic de comparație",
    "other": "Altul",
    "result": "Rezultat",
    "title": "Selector de straturi tematice",
    "resultSave": "Adăugare strat tematic de rezultate în lista cu straturi tematice de comparație",
    "copy": "Copiere strat tematic activ pe strat tematic de comparație.",
    "swap": "Schimb între strat tematic activ și strat tematic de comparație."
  },
  "renderer": {
    "title": "Reprezentare",
    "stretch": "Parametri de întindere",
    "stretchType": "Tip întindere",
    "dra": "DRA",
    "draText": "Ajustarea de domeniu dinamic actualizează intensificarea în baza vizualizării curente",
    "gamma": "Gamma",
    "apply": "Aplicare",
    "top": "Excludere zonă superioară",
    "bottom": "Excludere zonă inferioară",
    "topText": " Excludere x procente din zona superioară a histogramei",
    "bottomText": " Excludere x procente din zona inferioară a histogramei",
    "stdDev": "# din abatere standard",
    "layer": "Strat tematic curent",
    "error": "Niciun strat tematic imagistic vizibil pe hartă."
  },
  "imageSelector": {
    "title": "Selector imagine",
    "enable": "Activare selector imagine",
    "secondary": "Setare Activ drept strat tematic de comparație.",
    "dropDown": "Vizualizare imagini în listă derulantă.",
    "refresh": "Împrospătare căutare pe baza extinderii curente.",
    "show": "Afişare",
    "age": "Vârstă",
    "zoom": "Focalizare pentru selectare imagini.",
    "error": "Niciun strat tematic imagistic vizibil pe hartă.",
    "error1": "Câmpul nu este specificat.",
    "error2": "Niciun câmp OBJECTID.",
    "error3": "Niciun câmp pentru categorie.",
    "error4": "Nu se poate efectua acțiunea pentru stratul tematic.",
    "error5": "Servicii anterioare 10.2.1 nesuportate.",
    "error6": "Nicio scenă în extinderea curentă.",
    "error7": "Numărul de urme selectate depășește 20. Doare primele 20 se vor afișa. Apăsați OK pentru a nu recepționa din nou avertizarea.",
    "slider": "Prezentare imagini pe cursor."
  },
  "changeDetection": {
    "title": "Detectare modificare",
    "mode": "Mod",
    "method": "Metodă",
    "positive": "Diferență pozitivă",
    "negative": "Diferență negativă",
    "threshold": "Prag",
    "difference": "Diferență",
    "apply": "Aplicare",
    "error": "Detectarea modificării lucrează cu două imagini din date diferite pentru același serviciu.<br />Mai întâi utilizați selector de imagini pentru a defini o imagine,<br />apoi faceți clic pe butonul <img src='images/down.png' height='14'/> și selectați a doua imagine.<br />Reveniți la această comandă pentru a continua cu detectarea modificării."
  },
  "editor": {
    "title": "Editor",
    "error": "Niciun strat tematic de editare selectat.",
    "error1": "Acces respins. Straturile tematice nu se pot edita."
  },
  "measurement": {
    "title": "Măsurare imagine",
    "error": "Capacități de măsurare nesuportate."
  },
  "export": {
    "title": "Export",
    "mode": "Mod",
    "titleText": "Titlu",
    "description": "Descriere",
    "tags": "Etichete",
    "submit": "Trimitere",
    "pixel": "Dimensiune pixeli",
    "outsr": "Referinţă spaţială de ieşire",
    "renderer": "Reprezentare curentă",
    "extent": "Definire extindere",
    "text": "Dacă se verifică reprezentarea curentă, se exportă<br /> reprezentare, în caz contrar se exportă valorile datelor originale<br/>.",
    "error": "Niciun strat tematic imagistic vizibil pe hartă.",
    "error1": "Este necesar un titlu.",
    "error2": "Este necesară o etichetă."
  },
  "compare": {
    "title": "Comparare",
    "slider": "Cursor transparență",
    "hSwipe": "Trecere orizontală",
    "vSwipe": "Trecere verticală",
    "error": "Niciun strat tematic imagistic disponibil pentru comparație."
  }
});