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
    "error": "Não foi possível criar mapa",
    "licenseError": {
      "message": "A sua conta não está licenciada para usar aplicações configuráveis não públicas. Peça ao administrador da sua organização para lhe atribuir um tipo de utilizador que inclua a licença para aplicações essenciais ou aplicações essenciais complementares.",
      "title": "Não licenciado"
    }
  },
  "nav": {
    "close": "Fechar"
  },
  "basemap": {
    "title": "Galeria de Mapas Base"
  },
  "operationalLayers": {
    "title": "Camadas Operacionais",
    "error": "Não existem camadas operacionais no mapa."
  },
  "imageMask": {
    "title": "Mascara de Imagem",
    "toolText": "Ferramenta",
    "tool1": "Máscara",
    "tool2": "Alterar Deteção",
    "layer": "Camada",
    "layerText": "Selecione as suas imagens.",
    "maskImageSelector": "Selecionar imagem(ens) específica(s)",
    "imageSelectorText": "Selecione duas imagens diferentes para comparar.",
    "changeText": "Configurar deteção de alterações.",
    "maskText": "Configurar máscara.",
    "zoom": "Ampliar para selecionar imagens.",
    "primary": "Imagem Primária",
    "comparison": "Imagem de Comparação",
    "mode": "Visualizar alterações como um",
    "method": "Método",
    "changeMethodText": "Calcular alterações em",
    "positive": "Positivo",
    "negative": "Negativo",
    "threshold": "Limiar",
    "difference": "Diferença",
    "apply": "Aplicar",
    "clear": "Apagar",
    "nir": "Banda de Infravermelhos",
    "red": "Banda Vermelha (Red)",
    "green": "Banda Verde (Green)",
    "swir": "Banda de Infravermelhos de onda curta",
    "band1": "Banda A",
    "band2": "Banda B",
    "mode1": "Imagem de Diferenças",
    "mode2": "Máscara de Diferenças",
    "mode3": "Máscara de Limiar",
    "method1": "Brilho da imagem",
    "method2": "Índice de Vegetação",
    "method3": "Veg. Ajustada ao Solo Índice",
    "method4": "Índice de água",
    "method5": "Índice de Área Queimada",
    "method6": "Inferior ao meu limiar",
    "method7": "Superior ao meu limiar",
    "method8": "Banda Única",
    "method9": "Índice personalizado",
    "dropDown": "Exibir imagens em lista pendente.",
    "transparency": "Transparência(resultados)",
    "slider": "Exibir imagens em slider.",
    "error1": "O campo não se encontra especificado.",
    "error2": "Não existe campo OBJECTID.",
    "error3": "Não existe campo de Categoria",
    "error4": "Não é possível aplicar ação para a camada.",
    "error5": "Serviços anteriores à versão 10.2.1 não-suportados.",
    "error6": "Não existem cenas na extensão atual.",
    "error7": "Por favor, selecione duas imagens diferentes.",
    "indexText": "Opções avançadas de índice",
    "date": "Data",
    "areaText": "Decréscimo / Aumento de Área",
    "areaText2": "Área de Reflorestação Queimada / Pós-incêndio",
    "areaText3": "Área Coberta",
    "unit": "km",
    "swipe": "Varrimento",
    "imageLabel": "Imagem(ens)",
    "extent": "Desenhar polígono(s) para definir extensão",
    "colorPicker": "Selector de Cores",
    "refresh": "Botão Atualizar",
    "refreshTooltip": "Atualize a lista de imagens com base na extensão atual.",
    "colorpickerText": "Selecionar uma cor para a máscara",
    "sliderText": "Definir o limiar",
    "maskModeText": "Que valores devo mascarar?",
    "positiveSliderText": "Defina o aumento mínimo necessário entre as imagens antes de a área ser exibida a verde.",
    "negativeSliderText": "Defina a redução mínima necessária entre as imagens antes de a área ser exibida a magenta.",
    "updateResult": "A sua imagem foi alterada; clique em Aplicar para atualizar a análise."
  },
  "editor": {
    "title": "Editor",
    "error": "Não foi encontrada qualquer Camada de Edição.",
    "error1": "Acesso negado. Não é possível editar as camadas.",
    "text": "Selecione um símbolo e clique no mapa."
  },
  "measurement": {
    "title": "Medição de Imagens",
    "error": "Funcionalidades de Mensuração não suportadas."
  },
  "export": {
    "title": "Exportar",
    "mode": "Guardar localização",
    "titleText": "Título (obrigatório)",
    "description": "Descrição",
    "tags": "Palavras-chave(obrigatórias)",
    "preview": "Pré-visualizar",
    "submit": "Guardar",
    "cancel": "Cancelar",
    "pixel": "Tamanho de Pixeis",
    "outsr": "Referência Espacial de Saída",
    "renderer": "Opções de transferência TIFF",
    "formatText1": "Como exibido",
    "formatText2": "Dados raw(todas as bandas)",
    "extent": "Desenhar polígono para definir extensão",
    "drawText": "(clique na imagem para iniciar)",
    "text": "Os dados raw não podem ser exibidos com visualizadores de fotos padrão. Abrir com o ArcGIS Pro.",
    "error": "Não existem camadas de imagens visíveis no mapa.",
    "error1": "O Título é obrigatório.",
    "error2": "Palavra(s) Chave são obrigatórias.",
    "error3": "PixelSize de exportar encontra-se restrito a",
    "error4": "para esta extensão.",
    "error5": "Por favor, introduza um valor numérico válido.",
    "error6": "Não é possível exportar a sua imagem de momento.",
    "thumbnailError": "Nenhuma miniatura disponível",
    "advance": "Opções avançadas para guardar",
    "modeOption1": "Guardar no portal",
    "modeOption2": "Guardar no disco",
    "default": "Padrão",
    "utm": "Zona WGS84 UTM",
    "layer": "Camada",
    "mercator": "WebMercatorAS",
    "folder": "Selecionar pasta"
  },
  "imageDate": {
    "label": "Data da Imagem"
  },
  "about": {
    "title": "Sobre"
  },
  "bookmark": {
    "title": "Marcadores",
    "default": "Padrão",
    "selectBookmark": "Selecionar marcadores",
    "add": "Adicionar marcadores",
    "addTitle": "Introduzir título",
    "addBtn": "Adicionar temporário"
  }
});