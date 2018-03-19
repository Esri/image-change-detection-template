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
    "error": "No se puede crear el mapa"
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
  "layerSelector": {
    "active": "Capa activa",
    "comparison": "Capa de comparación",
    "other": "Otro",
    "result": "Resultado",
    "title": "Selector de capas",
    "resultSave": "Agregar la capa Resultado a la lista de capas de comparación",
    "copy": "Copiar la capa activa a la capa de comparación.",
    "swap": "Intercambiar la capa activa y la capa de comparación."
  },
  "renderer": {
    "title": "Renderizador",
    "stretch": "Parámetros de extensión",
    "stretchType": "Tipo de extensión",
    "dra": "DRA",
    "draText": "Realce de las actualizaciones de Ajuste de rango dinámico en la vista actual",
    "gamma": "Gamma",
    "apply": "Aplicar",
    "top": "Excluir superior",
    "bottom": "Excluir inferior",
    "topText": " Excluir el x por ciento superior del histograma",
    "bottomText": " Excluir el x por ciento inferior del histograma",
    "stdDev": "N.º de desv. est.",
    "layer": "Capa actual",
    "error": "Capas de imágenes no visibles en el mapa."
  },
  "imageSelector": {
    "title": "Selector de imágenes",
    "enable": "Activar selector de imágenes",
    "secondary": "Usar la activa como Capa de comparación.",
    "dropDown": "Mostrar imágenes en la lista desplegable.",
    "refresh": "Actualizar la consulta basándose en la extensión actual.",
    "show": "Mostrar",
    "age": "Edad",
    "zoom": "Acercar para seleccionar imágenes.",
    "error": "Capas de imágenes no visibles en el mapa.",
    "error1": "Campo no especificado.",
    "error2": "Sin campo OBJECTID.",
    "error3": "Sin campo Categoría.",
    "error4": "Imposible realizar una acción para la capa.",
    "error5": "Servicios anteriores a 10.2.1 no compatibles.",
    "error6": "Sin escenas en la extensión actual.",
    "error7": "El número de huellas seleccionadas rebasa las 20. Solo se visualizarán las primeras 20. Pulse Aceptar para no volver a ver esta advertencia.",
    "slider": "Mostrar imágenes en un control deslizante."
  },
  "changeDetection": {
    "title": "Detección de cambio",
    "mode": "Modo",
    "method": "Método",
    "positive": "Diferencia positiva",
    "negative": "Diferencia negativa",
    "threshold": "Umbral",
    "difference": "Diferencia",
    "apply": "Aplicar",
    "error": "La Detección de cambios funciona con dos imágenes de distintas fechas y del mismo servicio.<br />Primero use el Selector de imágenes para definir una imagen,<br />luego haga clic en el botón <img src='images/down.png' height='14'/>y seleccione la segunda imagen.<br />Vuelva a este control para ejecutar la detección de cambio."
  },
  "editor": {
    "title": "Editor",
    "error": "No seleccionó ninguna capa de edición.",
    "error1": "Acceso denegado. No es posible editar las capas."
  },
  "measurement": {
    "title": "Medición de imagen",
    "error": "Funciones de medición no compatibles."
  },
  "export": {
    "title": "Exportar",
    "mode": "Modo",
    "titleText": "Título",
    "description": "Descripción",
    "tags": "Etiquetas",
    "submit": "Enviar",
    "pixel": "Tamaño de píxel",
    "outsr": "Referencia espacial de salida",
    "renderer": "Renderizador actual",
    "extent": "Definir extensión",
    "text": "Si Renderizador actual está activado, se exporta la representación en pantalla<br />; de lo contrario, se exportan los valores originales de los datos<br/>.",
    "error": "No hay capas de imágenes visibles en el mapa.",
    "error1": "Se requiere un título.",
    "error2": "Se requieren una o varias etiquetas."
  },
  "compare": {
    "title": "Comparar",
    "slider": "Control deslizante de transparencia",
    "hSwipe": "Barrido horizontal",
    "vSwipe": "Barrido vertical",
    "error": "No hay capas de imágenes visibles disponibles para su comparación."
  }
});