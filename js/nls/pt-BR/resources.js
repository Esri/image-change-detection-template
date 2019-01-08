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
    "error": "Não foi possível criar o mapa",
    "licenseError": {
      "message": "Sua conta não está licenciada para utilizar Aplicativos Configuráveis que não sejam públicos. Solicite ao administrador da sua organização que lhe atribua um tipo de usuário que inclua os Aplicativos Fundamentais ou uma licença complementar dos Aplicativos Fundamentais.",
      "title": "Não Licenciado"
    }
  },
  "nav": {
    "close": "Fechar"
  },
  "basemap": {
    "title": "Galeria de Mapa Base"
  },
  "operationalLayers": {
    "title": "Camadas Operacionais",
    "error": "Nenhuma camada operacional no mapa."
  },
  "imageMask": {
    "title": "Máscara da Imagem",
    "toolText": "Ferramenta",
    "tool1": "Máscara",
    "tool2": "Detecção de Alteração",
    "layer": "Camada",
    "layerText": "Escolha suas imagens.",
    "maskImageSelector": "Escolha imagens específicas",
    "imageSelectorText": "Escolha duas imagens diferentes para comparar.",
    "changeText": "Configura a detecção de alterações.",
    "maskText": "Configura a máscara.",
    "zoom": "Amplia nas imagens selecionadas.",
    "primary": "Imagem Primária",
    "comparison": "Imagem de Comparação",
    "mode": "Visualize as alterações como uma",
    "method": "Método",
    "changeMethodText": "Calcule as alterações em",
    "positive": "Positivo",
    "negative": "Negativo",
    "threshold": "Limite",
    "difference": "Diferença",
    "apply": "Aplicar",
    "clear": "Apagar",
    "nir": "Banda do Infravermelho",
    "red": "Banda Vermelha",
    "green": "Banda Verde",
    "swir": "Banda do Infravermelho de Onda Curta",
    "band1": "Banda A",
    "band2": "Banda B",
    "mode1": "Imagem de Diferença",
    "mode2": "Máscara de Diferença",
    "mode3": "Máscara de Limite",
    "method1": "Brilho da imagem",
    "method2": "Índice de Vegetação",
    "method3": "Vegetação Ajustada ao Solo Índice",
    "method4": "Índice de Água",
    "method5": "Índice de Queimada",
    "method6": "Menos que meu limite",
    "method7": "Maior que meu limite",
    "method8": "Banda Única",
    "method9": "Índice Personalizado",
    "dropDown": "Mostra imagens na lista suspensa.",
    "transparency": "Transparência (resultados)",
    "slider": "Mostra imagens no controle deslizante.",
    "error1": "O campo não está especificado.",
    "error2": "Sem campo de OBJECTID.",
    "error3": "Sem campo de Categoria.",
    "error4": "Não é possível executar a ação na camada.",
    "error5": "Serviços pré 10.2.1 não suportados.",
    "error6": "Nenhuma cena na extensão atual.",
    "error7": "Selecione duas imagens diferentes.",
    "indexText": "Opções de índice avançadas",
    "date": "Data",
    "areaText": "Redução / Aumento de Área",
    "areaText2": "Área de Recrescimento Pós Incêndio / Queimada",
    "areaText3": "Área Coberta",
    "unit": "km",
    "swipe": "Oscilar",
    "imageLabel": "imagens",
    "extent": "Desenhar polígonos para definir a extensão",
    "colorPicker": "Seletor de Cores",
    "refresh": "Botão Atualizar",
    "refreshTooltip": "Atualize a lista de imagem baseado na extensão atual.",
    "colorpickerText": "Escolha uma cor para sua máscara",
    "sliderText": "Configure seu limite",
    "maskModeText": "Quais valores devo mascarar?",
    "positiveSliderText": "Configure o aumento mínimo exigido entre as imagens antes da área ser exibida em verde.",
    "negativeSliderText": "Configure a diminuição mínima exigida entre as imagens antes da área ser exibida em magenta.",
    "updateResult": "Sua imagem foi alterada; clique em Aplicar para atualizar análise."
  },
  "editor": {
    "title": "Editor",
    "error": "Nenhuma Camada de Edição encontrada.",
    "error1": "Acesso negado. As camadas não podem ser editadas.",
    "text": "Selecione um símbolo e clique no mapa."
  },
  "measurement": {
    "title": "Medida da Imagem",
    "error": "Recursos de Medição não suportados."
  },
  "export": {
    "title": "Exportar",
    "mode": "Salvar localização",
    "titleText": "Título(exigido)",
    "description": "Descrição",
    "tags": "Tags(exigida)",
    "preview": "Visualizar",
    "submit": "Salvar",
    "cancel": "Cancelar",
    "pixel": "Tamanho do Pixel",
    "outsr": "Referência Espacial de Saída",
    "renderer": "Opções de download de TIFF",
    "formatText1": "Como exibido",
    "formatText2": "Dados brutos(todas as bandas)",
    "extent": "Desenhar polígono para definir a extensão",
    "drawText": "(clique na imagem para iniciar)",
    "text": "Os dados brutos não podem ser exibidos com visualizadores de fotos padrão. Abra com ArcGIS Pro.",
    "error": "Nenhuma camada de imagem visível no mapa.",
    "error1": "O título é necessário.",
    "error2": "Tags são exigidas.",
    "error3": "O Tamanho do Pixel de exportação é restrito a",
    "error4": "desta extensão.",
    "error5": "Insira um valor numérico válido.",
    "error6": "Sua imagem não pode ser exportada neste momento.",
    "thumbnailError": "Nenhuma miniatura disponível",
    "advance": "Opções avançadas para salvar",
    "modeOption1": "Salvar no portal",
    "modeOption2": "Salvar no disco",
    "default": "Padrão",
    "utm": "Zona WGS84 UTM",
    "layer": "Camada",
    "mercator": "WebMercatorAS",
    "folder": "Selecionar Pasta"
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
    "addTitle": "Inserir título",
    "addBtn": "Adicionar temporário"
  }
});