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
    "error": "Impossible de créer la carte"
  },
  "nav": {
    "close": "Fermer"
  },
  "basemap": {
    "title": "Bibliothèque de fonds de carte"
  },
  "operationalLayers": {
    "title": "Couches opérationnelles",
    "error": "Aucune couche opérationnelle dans la carte."
  },
  "layerSelector": {
    "active": "Couche active",
    "comparison": "Couche de comparaison",
    "other": "Autre",
    "result": "Résultat",
    "title": "Sélecteur de couche",
    "resultSave": "Ajouter la couche Résultat dans la liste des couches de comparaison",
    "copy": "Copiez la couche active vers la couche de comparaison.",
    "swap": "Intervertissez la couche active et la couche de comparaison."
  },
  "renderer": {
    "title": "Moteur de rendu",
    "stretch": "Paramètres d’étirement",
    "stretchType": "Type d’étirement",
    "dra": "DRA",
    "draText": "La fonction d’ajustement dynamique de la page met à jour l’amélioration en fonction de la vue actuelle",
    "gamma": "Gamma",
    "apply": "Appliquer",
    "top": "Exclure la valeur haute",
    "bottom": "Exclure la valeur basse",
    "topText": " Exclure les x pourcentages les plus hauts de l’histogramme",
    "bottomText": " Exclure les x pourcentages les plus bas de l’histogramme",
    "stdDev": "Nb d’écarts types",
    "layer": "Couche actuelle",
    "error": "Aucune couche d’imagerie visible sur la carte."
  },
  "imageSelector": {
    "title": "Sélecteur d’image",
    "enable": "Activer le sélecteur d’image",
    "secondary": "Activez la couche active comme couche de comparaison.",
    "dropDown": "Affichez les images dans la liste déroulante.",
    "refresh": "Actualisez la requête en fonction de l’étendue actuelle.",
    "show": "Afficher",
    "age": "Age",
    "zoom": "Faites un zoom avant pour sélectionner des images.",
    "error": "Aucune couche d’imagerie visible sur la carte.",
    "error1": "Le champ n’est pas spécifié.",
    "error2": "Aucun champ OBJECTID",
    "error3": "Aucun champ de catégorie.",
    "error4": "Impossible d’appliquer une action à la couche.",
    "error5": "Les services antérieurs à 10.2.1 ne sont pas pris en charge.",
    "error6": "Aucune scène dans l’étendue actuelle.",
    "error7": "Le nombre d’emprises sélectionnées est supérieur à 20. Seules les 20 premières emprises sont affichées. Cliquez sur OK pour ne plus afficher l’avertissement.",
    "slider": "Affichez les images au niveau du curseur."
  },
  "changeDetection": {
    "title": "Détection de changement",
    "mode": "Mode",
    "method": "Méthode",
    "positive": "Différence positive",
    "negative": "Différence négative",
    "threshold": "Seuil",
    "difference": "Différence",
    "apply": "Appliquer",
    "error": "La fonction Détection de changement concerne deux images à différentes dates provenant du même service.<br />Spécifiez une image à l’aide du Sélecteur d’image,<br />cliquez sur le bouton <img src=’images/down.png’ height=’14’/>, puis sélectionnez la deuxième image.<br />Revenez ensuite à cette commande pour procéder à la détection de changement."
  },
  "editor": {
    "title": "Editeur",
    "error": "Aucune couche à modifier sélectionnée.",
    "error1": "Accès refusé. Les couches ne peuvent pas être modifiées."
  },
  "measurement": {
    "title": "Mesure de l'image",
    "error": "Fonctionnalités de mesure non prises en charge."
  },
  "export": {
    "title": "Exporter",
    "mode": "Mode",
    "titleText": "Titre",
    "description": "Description",
    "tags": "Balises",
    "submit": "Envoyer",
    "pixel": "Taille de pixel",
    "outsr": "Référence spatiale de sortie",
    "renderer": "Moteur de rendu actuel",
    "extent": "Définir l'étendue",
    "text": "Si l’option Moteur de rendu actuel est activée, le rendu<br /> est exporté. Sinon, ce sont les valeurs de données d’origine<br/>qui sont exportées.",
    "error": "Aucune couche d’imagerie visible sur la carte.",
    "error1": "Titre requis.",
    "error2": "Balise(s) requise(s)."
  },
  "compare": {
    "title": "Comparer",
    "slider": "Curseur de transparence",
    "hSwipe": "Balayage horizontal",
    "vSwipe": "Balayage vertical",
    "error": "Aucune couche d’imagerie disponible à des fins de comparaison."
  }
});