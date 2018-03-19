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
    "error": "Impossibile creare la mappa"
  },
  "nav": {
    "close": "Chiudi"
  },
  "basemap": {
    "title": "Galleria di mappe di base"
  },
  "operationalLayers": {
    "title": "Layer operativi",
    "error": "Nessun layer operativo nella mappa."
  },
  "layerSelector": {
    "active": "Layer attivo",
    "comparison": "Layer di confronto",
    "other": "Altro",
    "result": "Risultato",
    "title": "Selettore layer",
    "resultSave": "Aggiungi il layer del risultato nell’elenco dei layer di confronto",
    "copy": "Copia layer attivo nel layer di confronto.",
    "swap": "Passa al layer attivo e di confronto."
  },
  "renderer": {
    "title": "Renderer",
    "stretch": "Parametri di estensione",
    "stretchType": "Tipo di estensione",
    "dra": "DRA",
    "draText": "La regolazione dell’intervallo dinamico aggiorna i miglioramenti sulla base della vista attuale",
    "gamma": "Gamma",
    "apply": "Applica",
    "top": "Escludi parte superiore",
    "bottom": "Escludi parte inferiore",
    "topText": " Escludi parte superiore per percentuale di istogramma",
    "bottomText": " Escludi parte inferiore per percentuale di istogramma",
    "stdDev": "# di dev. std.",
    "layer": "Layer corrente",
    "error": "Nessun layer di immagine visibile nella mappa."
  },
  "imageSelector": {
    "title": "Selettore immagini",
    "enable": "Attiva selettore immagini",
    "secondary": "Imposta attivo come layer di confronto.",
    "dropDown": "Mostra immagini nell’elenco a discesa.",
    "refresh": "Aggiorna query sulla base dell'estensione attuale.",
    "show": "Mostra",
    "age": "Età",
    "zoom": "Effettua uno zoom in sulle immagini selezionate.",
    "error": "Nessun layer di immagine visibile nella mappa.",
    "error1": "Campo non specificato.",
    "error2": "Nessun campo OBJECTID.",
    "error3": "Nessun campo categoria.",
    "error4": "Impossibile eseguire un’azione per il layer.",
    "error5": "Servizi precedenti alla versione 10.2.1 non supportati.",
    "error6": "Nessuna scena nell’estensione attuale.",
    "error7": "Il numero di footprint selezionati supera 20. Solo i primi 20 vengono visualizzati. Premere OK per non mostrare più l'avviso.",
    "slider": "Mostra immagini sul cursore."
  },
  "changeDetection": {
    "title": "Modifica rilevamento",
    "mode": "Modalità",
    "method": "Metodo",
    "positive": "Differenza positiva",
    "negative": "Differenza negativa",
    "threshold": "Soglia",
    "difference": "Differenza",
    "apply": "Applica",
    "error": "L’opzione Modifica rilevamento funziona con due immagini di date diverse dallo stesso servizio.<br />Utilizzare prima il Selettore immagini per definire un’immagine,<br />quindi fare clic sul tasto <img src='images/down.png' height='14'/> e selezionare la seconda immagine.<br />Tornare in questa impostazione per procedere con la modifica."
  },
  "editor": {
    "title": "Editor",
    "error": "Nessun layer di modifica selezionato.",
    "error1": "Accesso negato. I layer non possono essere modificati."
  },
  "measurement": {
    "title": "Misurazione immagine",
    "error": "Funzioni di misurazione non supportate."
  },
  "export": {
    "title": "Esporta",
    "mode": "Modalità",
    "titleText": "Titolo",
    "description": "Descrizione",
    "tags": "Tag",
    "submit": "Invia",
    "pixel": "Dimensione pixel",
    "outsr": "Riferimento spaziale di output",
    "renderer": "Renderer attuale",
    "extent": "Definisci estensione",
    "text": "Se il Renderer attuale viene selezionato, il rendering<br /> viene esportato, insieme ai valori dei dati originali<br/>.",
    "error": "Nessun layer di immagine visibile nella mappa.",
    "error1": "Titolo obbligatorio.",
    "error2": "Tag obbligatori."
  },
  "compare": {
    "title": "Confronta",
    "slider": "Cursore trasparenza",
    "hSwipe": "Scorrimento orizzontale",
    "vSwipe": "Scorrimento verticale",
    "error": "Nessun layer di immagine visibile disponibile per il confronto."
  }
});