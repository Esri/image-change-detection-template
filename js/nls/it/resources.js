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
    "error": "Impossibile creare la mappa",
    "licenseError": {
      "message": "L’account non dispone della licenza per l’uso di app configurabili non pubbliche. È necessario richiedere all’amministratore dell'organizzazione l’assegnazione di un tipo di utente che includa le app essenziali o una licenza aggiuntiva per le app essenziali.",
      "title": "Non Licenziato"
    }
  },
  "nav": {
    "close": "Chiudere"
  },
  "basemap": {
    "title": "Galleria di basemap"
  },
  "operationalLayers": {
    "title": "Layer operativi",
    "error": "Nessun layer operativo nella mappa."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Strumento",
    "tool1": "Maschera",
    "tool2": "Modifica rilevamento",
    "layer": "Layer",
    "layerText": "Scegliere le immagini.",
    "maskImageSelector": "Scegli una o più immagini specifiche",
    "imageSelectorText": "Scegli due immagini diverse da confrontare.",
    "changeText": "Configurare il rilevamento modifiche.",
    "maskText": "Configurare la maschera.",
    "zoom": "Effettua uno zoom in sulle immagini selezionate.",
    "primary": "Immagine principale",
    "comparison": "Immagine di confronto",
    "mode": "Visualizza le modifiche come",
    "method": "Metodo",
    "changeMethodText": "Calcola le modifiche in",
    "positive": "Positiva",
    "negative": "Negativa",
    "threshold": "Soglia",
    "difference": "Differenza",
    "apply": "Applica",
    "clear": "Cancellare",
    "nir": "Banda infrarossi",
    "red": "Banda rossa",
    "green": "Banda verde",
    "swir": "Banda infrarossi a onde corte",
    "band1": "Banda A",
    "band2": "Banda B",
    "mode1": "Immagine di differenza",
    "mode2": "Maschera di differenza",
    "mode3": "Maschera di soglia",
    "method1": "Luminosità immagine",
    "method2": "Indice di vegetazione",
    "method3": "Veg. in funzione del suolo Indice",
    "method4": "Indice di acqua",
    "method5": "Indice di ustioni",
    "method6": "Meno della soglia predefinita",
    "method7": "Più grande della soglia predefinita",
    "method8": "Banda singola",
    "method9": "Indice personalizzato",
    "dropDown": "Mostra immagini nell’elenco a discesa.",
    "transparency": "Trasparenza (risultati)",
    "slider": "Mostra immagini sul cursore.",
    "error1": "Campo non specificato.",
    "error2": "Nessun campo OBJECTID.",
    "error3": "Nessun campo categoria.",
    "error4": "Impossibile eseguire un’azione per il layer.",
    "error5": "Servizi precedenti alla versione 10.2.1 non supportati.",
    "error6": "Nessuna scena nell’estensione attuale.",
    "error7": "Scegli due immagini diverse.",
    "indexText": "Opzioni di indicizzazione avanzate",
    "date": "Data",
    "areaText": "Diminuzione/aumento area",
    "areaText2": "Area bruciata/di ricrescita dopo un incendio",
    "areaText3": "Area coperta",
    "unit": "km",
    "swipe": "Swipe",
    "imageLabel": "immagine/i",
    "extent": "Disegna poligoni per definire l'estensione",
    "colorPicker": "Selettore colore",
    "refresh": "Pulsante Aggiorna",
    "refreshTooltip": "Aggiorna l’elenco delle immagini avendo come base l’estensione corrente.",
    "colorpickerText": "Seleziona una colore per la maschera",
    "sliderText": "Imposta la soglia predefinita",
    "maskModeText": "Quali valori dovrei mascherare?",
    "positiveSliderText": "Imposta l’aumento minimo richiesto tra le immagini prima che l’area diventi di color verde.",
    "negativeSliderText": "Imposta la diminuzione minima richiesta tra le immagini prima che l’area diventi di color magenta.",
    "updateResult": "L’immagine è stata modificata; fare clic su Applica per aggiornare l’analisi."
  },
  "editor": {
    "title": "Editor",
    "error": "Nessun layer di modifica trovato.",
    "error1": "Accesso negato. Impossibile modificare i layer.",
    "text": "Selezionare un simbolo e fare clic sulla mappa."
  },
  "measurement": {
    "title": "Misurazione immagine",
    "error": "Funzioni di misurazione non supportate."
  },
  "export": {
    "title": "Esporta",
    "mode": "Salva posizione",
    "titleText": "Titolo (obbligatorio)",
    "description": "Descrizione",
    "tags": "Tag (obbligatori)",
    "preview": "Anteprima",
    "submit": "Salva",
    "cancel": "Cancella",
    "pixel": "Dimensione pixel",
    "outsr": "Riferimento spaziale di output",
    "renderer": "Opzioni di download TIFF",
    "formatText1": "Come mostrato",
    "formatText2": "Dati grezzi (tutte le bande)",
    "extent": "Disegna poligono per definire l'estensione",
    "drawText": "(fai clic sull’immagine per iniziare)",
    "text": "I dati grezzi non possono essere visualizzati con dei visualizzatori di foto standard. Apri con ArcGIS Pro.",
    "error": "Nessun layer di immagine visibile nella mappa.",
    "error1": "Titolo obbligatorio.",
    "error2": "Tag obbligatori.",
    "error3": "PixelSize di esportazione è limitato a",
    "error4": "per questa estensione.",
    "error5": "Immettere un valore numerico valido.",
    "error6": "L’immagine non può essere esportata al momento.",
    "thumbnailError": "Nessuna anteprima disponibile",
    "advance": "Opzioni di salvataggio avanzate",
    "modeOption1": "Salva sul portale",
    "modeOption2": "Salva sul disco",
    "default": "Predefinito",
    "utm": "Zona UTM WGS84",
    "layer": "Layer",
    "mercator": "WebMercatorAS",
    "folder": "Seleziona cartella"
  },
  "imageDate": {
    "label": "Data immagine"
  },
  "about": {
    "title": "Informazioni su"
  },
  "bookmark": {
    "title": "Segnalibri",
    "default": "Predefinito",
    "selectBookmark": "Seleziona segnalibri",
    "add": "Aggiungi segnalibri",
    "addTitle": "Immettere titolo",
    "addBtn": "Aggiungi temporaneo"
  }
});