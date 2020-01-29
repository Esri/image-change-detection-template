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
    "error": "No es pot crear el mapa",
    "licenseError": {
      "message": "El vostre compte no té llicència per utilitzar aplicacions configurables que no siguin públiques. Demaneu a l'administrador de l'organització que us assigni un tipus d'usuari que inclogui les aplicacions bàsiques o una llicència d'aplicacions bàsiques de complement.",
      "title": "Sense llicència"
    }
  },
  "nav": {
    "close": "Tanca"
  },
  "basemap": {
    "title": "Galeria de mapes base"
  },
  "operationalLayers": {
    "title": "Capes operatives",
    "error": "No hi ha cap capa operativa al mapa."
  },
  "imageMask": {
    "title": "Màscara d'imatge",
    "toolText": "Eina",
    "tool1": "Màscara",
    "tool2": "Detecció de canvis",
    "layer": "Capa",
    "layerText": "Trieu les imatges.",
    "basemap": "Mapa base",
    "maskImageSelector": "Trieu imatges específiques",
    "imageSelectorText": "Trieu dues imatges diferents per comparar-les.",
    "changeText": "Configureu la detecció de canvis.",
    "maskText": "Configureu la màscara.",
    "zoom": "Amplieu per seleccionar imatges.",
    "primary": "Imatge principal",
    "comparison": "Imatge de comparació",
    "mode": "Visualitzeu els canvis com a",
    "method": "Mètode",
    "changeMethodText": "Calcula els canvis de",
    "positive": "Positiu",
    "negative": "Negatiu",
    "threshold": "Llindar",
    "difference": "Diferència",
    "apply": "Aplica",
    "clear": "Esborra",
    "nir": "Banda infraroja",
    "red": "Banda roja",
    "green": "Banda verda",
    "swir": "Banda infraroja d'ona curta",
    "band1": "Banda A",
    "band2": "Banda B",
    "mode1": "Imatge de diferència",
    "mode2": "Màscara de diferència",
    "mode3": "Màscara de llindar",
    "method1": "Brillantor de la imatge",
    "method2": "Índex de vegetació",
    "method3": "Vegetació ajustada al sòl Índex",
    "method4": "Índex d'aigua",
    "method5": "Índex de calcinació",
    "method6": "Menys que el meu llindar",
    "method7": "Més que el meu llindar",
    "method8": "Banda única",
    "method9": "Índex personalitzat",
    "dropDown": "Mostra les imatges en una llista desplegable.",
    "transparency": "Transparència (resultats)",
    "slider": "Mostra les imatges en un control lliscant.",
    "error1": "El camp no s'ha especificat.",
    "error2": "No hi ha cap camp OBJECTID.",
    "error3": "No hi ha cap camp Categoria.",
    "error4": "No es pot dur a terme l'acció per a la capa.",
    "error5": "Els serveis anteriors a la versió 10.2.1 no són compatibles.",
    "error6": "No hi ha cap escena a l'extensió actual.",
    "error7": "Seleccioneu dues imatges diferents.",
    "error8": "Interval de dates no vàlid: la data d'inici ha de ser anterior a la data de finalització.",
    "indexText": "Opcions d'índex avançades",
    "date": "Data",
    "areaText": "Reducció o augment de l'àrea",
    "areaText2": "Àrea de reforestació calcinada o després d'un incendi",
    "areaText3": "Àrea coberta",
    "unit": "km",
    "swipe": "Swipe",
    "imageLabel": "imatges",
    "extent": "Dibuixa polígons per definir l'extensió",
    "colorPicker": "Selector de color",
    "refresh": "Botó Actualitza",
    "refreshTooltip": "Actualitzeu la llista d'imatges en funció de l'extensió actual.",
    "colorpickerText": "Trieu un color per a la màscara",
    "sliderText": "Definiu el llindar",
    "maskModeText": "Quins valors he d'emmascarar?",
    "positiveSliderText": "Definiu l'augment mínim necessari entre les imatges abans que l'àrea es mostri de color verd.",
    "negativeSliderText": "Definiu la reducció mínima necessària entre les imatges abans que l'àrea es mostri de color magenta.",
    "updateResult": "La vostra imatge ha canviat; feu clic a Aplica per actualitzar l'anàlisi."
  },
  "editor": {
    "title": "Editor",
    "error": "No s'ha trobat cap capa d'edició.",
    "error1": "S'ha denegat l'accés. Les capes no es poden editar.",
    "text": "Seleccioneu un símbol i feu clic al mapa."
  },
  "measurement": {
    "title": "Mesura d'imatge",
    "error": "Funcions de mesura no compatibles."
  },
  "export": {
    "title": "Exporta",
    "mode": "Desa la ubicació",
    "titleText": "Títol (necessari)",
    "description": "Descripció",
    "tags": "Etiquetes (necessàries)",
    "preview": "Visualització prèvia",
    "submit": "Desa",
    "cancel": "Cancel·la",
    "pixel": "Mida de píxel",
    "outsr": "Referència espacial de sortida",
    "renderer": "Opcions de baixada de fitxers TIFF",
    "formatText1": "Tal com es mostra",
    "formatText2": "Dades sense format (totes les bandes)",
    "extent": "Dibuixa un polígon per definir l'extensió",
    "drawText": "(feu clic a la imatge per començar)",
    "text": "Les dades sense format no es poden mostrar amb visors de fotografies estàndard. Obriu-ho amb l'ArcGIS Pro.",
    "error": "No hi ha cap capa d'imatges visible al mapa.",
    "error1": "El títol és necessari.",
    "error2": "Les etiquetes són necessàries.",
    "error3": "El valor de Mida de píxel de l'exportació es limita a",
    "error4": "per a aquesta extensió.",
    "error5": "Introduïu un valor numèric vàlid.",
    "error6": "La imatge no es pot exportar en aquest moment.",
    "thumbnailError": "No hi ha cap miniatura disponible",
    "advance": "Opcions de desament avançades",
    "modeOption1": "Desa-ho al portal",
    "modeOption2": "Desa-ho al disc",
    "default": "Per defecte",
    "utm": "Zona UTM del WGS84",
    "layer": "Capa",
    "mercator": "WebMercatorAS",
    "folder": "Seleccioneu la carpeta"
  },
  "imageDate": {
    "label": "Data de la imatge"
  },
  "about": {
    "title": "Quant a"
  },
  "bookmark": {
    "title": "Marcadors",
    "default": "Per defecte",
    "selectBookmark": "Seleccioneu marcadors",
    "add": "Afegiu marcadors",
    "addTitle": "Introduïu el títol",
    "addBtn": "Afegiu-ne de temporals"
  },
  "coordinate": {
    "_widgetLabel": "Coordenada",
    "hintMessage": "Feu clic al mapa per obtenir les coordenades",
    "defaultLabel": "Per defecte",
    "realtimeLabel": "Moveu el ratolí per obtenir les coordenades",
    "computing": "S'està calculant...",
    "latitudeLabel": "Latitud",
    "longitudeLabel": "Longitud",
    "loading": "s'està carregant...",
    "enableClick": "Feu clic per habilitar l'obtenció de coordenades en fer clic al mapa",
    "disableClick": "Feu clic per deshabilitar l'obtenció de coordenades en fer clic al mapa",
    "Default": "Per defecte",
    "Inches": "Polzades",
    "Foot": "Peus",
    "Foot_US": "Feet_US",
    "Yards": "Iardes",
    "Miles": "Milles",
    "Nautical_Miles": "Milles nàutiques",
    "Millimeters": "Mil·límetres",
    "Centimeters": "Centímetres",
    "Meter": "Metres",
    "Kilometers": "Quilòmetres",
    "Decimeters": "Decímetres",
    "Decimal_Degrees": "Graus",
    "Degree_Minutes_Seconds": "Graus minuts segons",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});