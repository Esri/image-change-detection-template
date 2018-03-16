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
    "error": "Não foi possível criar mapa"
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
  "layerSelector": {
    "active": "Camada Ativa",
    "comparison": "Camada de Comparação",
    "other": "Outro",
    "result": "Resultado",
    "title": "Seletor de Camadas",
    "resultSave": "Adicionar a camada Resultado à lista de camadas de comparação",
    "copy": "Copiar camada ativa para camada de comparação.",
    "swap": "Alternar entre camada ativa e de comparação."
  },
  "renderer": {
    "title": "Renderizador",
    "stretch": "Parâmetros de Esticamento",
    "stretchType": "Tipo de Esticamento",
    "dra": "DRA",
    "draText": "Melhoria das atualizações de Dynamic Range Adjustment com base na visualização atual",
    "gamma": "Gama",
    "apply": "Aplicar",
    "top": "Excluir superior",
    "bottom": "Excluir inferior",
    "topText": " Excluir a percentagem x superior do histograma",
    "bottomText": " Excluir a percentagem x inferior do histograma",
    "stdDev": "# de Desvio Padrão",
    "layer": "Camada Atual",
    "error": "Não existem Camadas de Imagens visíveis no mapa."
  },
  "imageSelector": {
    "title": "Seletor de Imagens",
    "enable": "Ativar Seletor de Imagens",
    "secondary": "Definir Ativo como Camada de Comparação.",
    "dropDown": "Exibir imagens em lista pendente.",
    "refresh": "Atualizar consulta com base na extensão atual.",
    "show": "Mostrar",
    "age": "Idade",
    "zoom": "Ampliar para selecionar imagens.",
    "error": "Não existem Camadas de Imagens visíveis no mapa.",
    "error1": "O campo não se encontra especificado.",
    "error2": "Não existe campo OBJECTID.",
    "error3": "Não existe campo de Categoria",
    "error4": "Não é possível aplicar ação para a camada.",
    "error5": "Serviços anteriores à versão 10.2.1 não-suportados.",
    "error6": "Não existem cenas na extensão atual.",
    "error7": "Número de pegadas selecionadas excede as 20. Apenas serão exibidas as primeiras 20. Pressione OK para não voltar a avisar.",
    "slider": "Exibir imagens em slider."
  },
  "changeDetection": {
    "title": "Alterar Deteção",
    "mode": "Modo",
    "method": "Método",
    "positive": "Diferença Positiva",
    "negative": "Diferença Negativa",
    "threshold": "Limiar",
    "difference": "Diferença",
    "apply": "Aplicar",
    "error": "Alterar Deteção funciona com duas imagens com datas diferentes do mesmo serviço.<br />Primeiro, utilize o Seletor de Imagens para definir uma imagem,<br />depois clique no botão <img src='images/down.png' height='14'/> e selecione a segunda imagem.<br />Regresse a este controlo para prosseguir com a alteração de deteção."
  },
  "editor": {
    "title": "Editor",
    "error": "Não se encontra selecionada qualquer Camada de Edição.",
    "error1": "Acesso negado. Não é possível editar as camadas."
  },
  "measurement": {
    "title": "Medição de Imagens",
    "error": "Funcionalidades de Mensuração não suportadas."
  },
  "export": {
    "title": "Exportar",
    "mode": "Modo",
    "titleText": "Título",
    "description": "Descrição",
    "tags": "Palavras-chave",
    "submit": "Enviar",
    "pixel": "Tamanho de Pixeis",
    "outsr": "Referência Espacial de Saída",
    "renderer": "Renderizador Atual",
    "extent": "Definir Extensão",
    "text": "Caso Renderizador Atual se encontre selecionado, a renderização<br /> é exportada, de outro modo, os valores de dados originais<br/>serão exportados.",
    "error": "Não existem camadas de imagens visíveis no mapa.",
    "error1": "O Título é obrigatório.",
    "error2": "Palavra(s) Chave são obrigatórias."
  },
  "compare": {
    "title": "Comparar Narrativa",
    "slider": "Controlo Deslizante de Transparência",
    "hSwipe": "Varrimento Horizontal",
    "vSwipe": "Varrimento Vertical",
    "error": "Não existem Camadas de Imagens disponíveis para comparação."
  }
});