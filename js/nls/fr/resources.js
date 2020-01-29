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
    "error": "Impossible de créer la carte",
    "licenseError": {
      "message": "La licence de votre compte ne permet pas d’utiliser des applications configurables non publiques. Demandez à l’administrateur de votre organisation de vous attribuer un type d’utilisateur qui inclut une licence Essential Apps ou une licence Essential Apps additionnelle.",
      "title": "Pas de licence"
    }
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
  "imageMask": {
    "title": "Masque d’image",
    "toolText": "Outil",
    "tool1": "Masque",
    "tool2": "Détection de changement",
    "layer": "Couche",
    "layerText": "Choisissez votre imagerie.",
    "basemap": "Fond de carte",
    "maskImageSelector": "Choisir des images spécifiques",
    "imageSelectorText": "Choisissez deux images différentes à comparer.",
    "changeText": "Configurez la détection de changement.",
    "maskText": "Configurez le masque.",
    "zoom": "Faites un zoom avant pour sélectionner des images.",
    "primary": "Image principale",
    "comparison": "Image de comparaison",
    "mode": "Visualiser les modifications en tant que",
    "method": "Méthode",
    "changeMethodText": "Calculer les modifications dans",
    "positive": "Positive",
    "negative": "Négative",
    "threshold": "Seuil",
    "difference": "Différence",
    "apply": "Appliquer",
    "clear": "Effacer",
    "nir": "Canal infrarouge",
    "red": "Canal rouge",
    "green": "Canal vert",
    "swir": "Canal infrarouge de courte longueur d’onde",
    "band1": "Canal A",
    "band2": "Canal B",
    "mode1": "Image de différence",
    "mode2": "Masque de différence",
    "mode3": "Masque de seuil",
    "method1": "Luminosité de l’image",
    "method2": "Indice de végétation",
    "method3": "Index de végétation ajusté pour les sols",
    "method4": "Index d’eau",
    "method5": "Index de brûlure",
    "method6": "Inférieure à mon seuil",
    "method7": "Supérieure à mon seuil",
    "method8": "Monocanal",
    "method9": "Index personnalisé",
    "dropDown": "Affichez les images dans la liste déroulante.",
    "transparency": "Transparence (résultats)",
    "slider": "Affichez les images au niveau du curseur.",
    "error1": "Le champ n’est pas spécifié.",
    "error2": "Aucun champ OBJECTID",
    "error3": "Aucun champ de catégorie.",
    "error4": "Impossible d’appliquer une action à la couche.",
    "error5": "Les services antérieurs à 10.2.1 ne sont pas pris en charge.",
    "error6": "Aucune scène dans l’étendue actuelle.",
    "error7": "Sélectionnez deux images différentes.",
    "error8": "Plage de dates invalide : la date de début doit être antérieure à la date de fin.",
    "indexText": "Options d’index avancées",
    "date": "Date",
    "areaText": "Réduire/Augmenter la surface",
    "areaText2": "Surface brûlée/de repousse après incendie",
    "areaText3": "Surface couverte",
    "unit": "km",
    "swipe": "Balayer",
    "imageLabel": "image(s)",
    "extent": "Dessiner des polygones pour définir l’étendue",
    "colorPicker": "Sélecteur de couleurs",
    "refresh": "Bouton Actualiser",
    "refreshTooltip": "Actualisez la liste d’images en fonction de l’étendue actuelle.",
    "colorpickerText": "Choisir la couleur de votre masque",
    "sliderText": "Définir votre seuil",
    "maskModeText": "Quelles valeurs dois-je masquer ?",
    "positiveSliderText": "Définissez l’augmentation minimale requise entre les images pour que la zone s’affiche en vert.",
    "negativeSliderText": "Définissez la diminution minimale requise entre les images pour que la zone s’affiche en magenta.",
    "updateResult": "Votre image a changé ; cliquez sur Appliquer pour mettre à jour l’analyse."
  },
  "editor": {
    "title": "Editeur",
    "error": "Aucune couche à modifier trouvée.",
    "error1": "Accès refusé. Les couches ne peuvent pas être modifiées.",
    "text": "Sélectionnez un symbole et cliquez sur la carte."
  },
  "measurement": {
    "title": "Mesure de l'image",
    "error": "Fonctionnalités de mesure non prises en charge."
  },
  "export": {
    "title": "Exporter",
    "mode": "Enregistrer l’emplacement",
    "titleText": "Titre (obligatoire)",
    "description": "Description",
    "tags": "Balises (obligatoire)",
    "preview": "Aperçu",
    "submit": "Enregistrer",
    "cancel": "Annuler",
    "pixel": "Taille de pixel",
    "outsr": "Référence spatiale de sortie",
    "renderer": "Options de téléchargement TIFF",
    "formatText1": "Tel qu’à l’écran",
    "formatText2": "Données brutes (tous les canaux)",
    "extent": "Dessiner un polygone pour définir l’étendue",
    "drawText": "(cliquez sur une image pour démarrer)",
    "text": "Les données brutes ne peuvent pas s’afficher avec des visionneuses de photos standard. Ouvrez avec ArcGIS Pro.",
    "error": "Aucune couche d’imagerie visible sur la carte.",
    "error1": "Titre requis.",
    "error2": "Balise(s) requise(s).",
    "error3": "La taille de pixel de l’exportation est limitée à",
    "error4": "pour cette étendue.",
    "error5": "Saisissez une valeur numérique valide.",
    "error6": "Votre image ne peut actuellement pas être exportée.",
    "thumbnailError": "Aucune miniature disponible",
    "advance": "Options d’enregistrement avancées",
    "modeOption1": "Enregistrer sur le portail",
    "modeOption2": "Enregistrer sur le disque",
    "default": "Par défaut",
    "utm": "Zone UTM WGS84",
    "layer": "Couche",
    "mercator": "Web Mercator AS",
    "folder": "Sélectionner un dossier"
  },
  "imageDate": {
    "label": "Date de l’image"
  },
  "about": {
    "title": "A propos"
  },
  "bookmark": {
    "title": "Géosignets",
    "default": "Par défaut",
    "selectBookmark": "Sélectionner des géosignets",
    "add": "Ajouter des géosignets",
    "addTitle": "Saisir un titre",
    "addBtn": "Ajouter temporairement"
  },
  "coordinate": {
    "_widgetLabel": "Coordonnées",
    "hintMessage": "Cliquer sur la carte pour obtenir les coordonnées",
    "defaultLabel": "Par défaut",
    "realtimeLabel": "Déplacer la souris pour obtenir les coordonnées",
    "computing": "Calcul...",
    "latitudeLabel": "Latitude",
    "longitudeLabel": "Longitude",
    "loading": "chargement...",
    "enableClick": "Cliquer pour activer l’obtention des coordonnées à l’aide d’un clic sur la carte",
    "disableClick": "Cliquer pour désactiver l’obtention des coordonnées à l’aide d’un clic sur la carte",
    "Default": "Par défaut",
    "Inches": "Pouces",
    "Foot": "Pieds",
    "Foot_US": "Pieds US",
    "Yards": "Yards",
    "Miles": "Miles",
    "Nautical_Miles": "Milles nautiques",
    "Millimeters": "Millimètres",
    "Centimeters": "Centimètres",
    "Meter": "Mètres",
    "Kilometers": "Kilomètres",
    "Decimeters": "Décimètres",
    "Decimal_Degrees": "Degrés",
    "Degree_Minutes_Seconds": "Degrés minutes secondes",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});