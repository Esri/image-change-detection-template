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
    "error": "No se puede crear el mapa",
    "licenseError": {
      "message": "Su cuenta no tiene licencia para utilizar aplicaciones configurables que no son públicas. Pídale al administrador de su organización que le asigne un tipo de usuario que incluya aplicaciones esenciales o una licencia complementaria de aplicaciones esenciales.",
      "title": "Sin licencia"
    }
  },
  "nav": {
    "close": "Cerrar"
  },
  "basemap": {
    "title": "Galería de mapas base"
  },
  "operationalLayers": {
    "title": "Capas operativas",
    "error": "No hay capas operativas en el mapa."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Herramienta",
    "tool1": "Máscara",
    "tool2": "Detección de cambio",
    "layer": "Capa",
    "layerText": "Elegir sus imágenes.",
    "maskImageSelector": "Elegir imágenes específicas",
    "imageSelectorText": "Elegir dos imágenes diferentes para su comparación.",
    "changeText": "Configurar la detección de cambios.",
    "maskText": "Configurar una máscara.",
    "zoom": "Acercar para seleccionar imágenes.",
    "primary": "Imagen principal",
    "comparison": "Imagen de comparación",
    "mode": "Visualizar cambios como",
    "method": "Método",
    "changeMethodText": "Calcular cambios en",
    "positive": "Positivo",
    "negative": "Negativo",
    "threshold": "Umbral",
    "difference": "Diferencia",
    "apply": "Solicitar participación",
    "clear": "Borrar",
    "nir": "Banda infrarroja",
    "red": "Banda roja",
    "green": "Banda verde",
    "swir": "Banda infrarroja de onda corta",
    "band1": "Banda A",
    "band2": "Banda B",
    "mode1": "Imagen de diferencia",
    "mode2": "Máscara de diferencia",
    "mode3": "Máscara de umbral",
    "method1": "Brillo de imagen",
    "method2": "Índice de vegetación",
    "method3": "Índice de vegetación ajustado de suelo",
    "method4": "Índice de agua",
    "method5": "Índice de quema",
    "method6": "Inferior a mi umbral",
    "method7": "Superior a mi umbral",
    "method8": "Banda única",
    "method9": "Índice personalizado",
    "dropDown": "Mostrar imágenes en la lista desplegable.",
    "transparency": "Transparencia (resultados)",
    "slider": "Mostrar imágenes en un control deslizante.",
    "error1": "Campo no especificado.",
    "error2": "Sin campo OBJECTID.",
    "error3": "Sin campo Categoría.",
    "error4": "Imposible realizar una acción para la capa.",
    "error5": "Servicios anteriores a 10.2.1 no compatibles.",
    "error6": "Sin escenas en la extensión actual.",
    "error7": "Seleccione dos imágenes diferentes.",
    "indexText": "Opciones avanzadas de índice",
    "date": "Date",
    "areaText": "Reducción / aumento de área",
    "areaText2": "Quemado / área de reforestación tras incendio",
    "areaText3": "Área cubierta",
    "unit": "km",
    "swipe": "Swipe",
    "imageLabel": "imagen(es)",
    "extent": "Dibujar polígonos para definir la extensión",
    "colorPicker": "Selector de color",
    "refresh": "Botón Refrescar",
    "refreshTooltip": "Refresque la lista de imágenes en función de la extensión actual.",
    "colorpickerText": "Elegir un color para la máscara",
    "sliderText": "Definir el umbral",
    "maskModeText": "¿Qué valores debería enmascarar?",
    "positiveSliderText": "Defina el aumento mínimo obligatorio entre las imágenes antes de que el área se muestre en verde.",
    "negativeSliderText": "Defina la reducción mínima obligatoria entre las imágenes antes de que el área se muestre en magenta.",
    "updateResult": "Su imagen ha cambiado; haga clic en Aplicar para actualizar el análisis."
  },
  "editor": {
    "title": "Editor",
    "error": "No se encontró ninguna capa de edición.",
    "error1": "Acceso denegado. Las capas no se pueden editar.",
    "text": "Seleccione un símbolo y haga clic en el mapa."
  },
  "measurement": {
    "title": "Medición de imagen",
    "error": "Funciones de medición no compatibles."
  },
  "export": {
    "title": "Exportar",
    "mode": "Guardar ubicación",
    "titleText": "Título (obligatorio)",
    "description": "Descripción",
    "tags": "Etiquetas (obligatorias)",
    "preview": "Previsualización",
    "submit": "Guardar",
    "cancel": "Cancelar",
    "pixel": "Tamaño de píxel",
    "outsr": "Referencia espacial de salida",
    "renderer": "Opciones de descarga de TIFF",
    "formatText1": "Como se muestra",
    "formatText2": "Datos sin procesar (todas las bandas)",
    "extent": "Dibujar polígono para definir la extensión",
    "drawText": "(haga clic en la imagen para empezar)",
    "text": "No es posible mostrar los datos sin procesar con visores de imágenes estándar. Abrir con ArcGIS Pro.",
    "error": "No hay capas de imágenes visibles en el mapa.",
    "error1": "Se requiere un título.",
    "error2": "Se requieren una o varias etiquetas.",
    "error3": "Valor PixelSize de la exportación restringido a",
    "error4": "para esta extensión.",
    "error5": "Introduzca un valor numérico válido.",
    "error6": "No es posible exportar su imagen en estos momentos.",
    "thumbnailError": "Vista en miniatura no disponible",
    "advance": "Opciones avanzadas de guardado",
    "modeOption1": "Guardar en el portal",
    "modeOption2": "Guardar en el disco",
    "default": "Predeterminado",
    "utm": "Zona UTM WGS84",
    "layer": "Capa",
    "mercator": "WebMercatorAS",
    "folder": "Seleccionar carpeta"
  },
  "imageDate": {
    "label": "Fecha de imágenes"
  },
  "about": {
    "title": "Acerca de"
  },
  "bookmark": {
    "title": "Marcadores",
    "default": "Predeterminado",
    "selectBookmark": "Seleccionar marcadores",
    "add": "Agregar marcadores",
    "addTitle": "Introducir título",
    "addBtn": "Agregar temporal"
  }
});