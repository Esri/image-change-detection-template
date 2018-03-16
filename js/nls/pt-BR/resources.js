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
    "error": "Não foi possível criar o mapa"
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
  "layerSelector": {
    "active": "Camada Ativa",
    "comparison": "Camada de Comparação",
    "other": "Outro",
    "result": "Resultado",
    "title": "Seletor de Camada",
    "resultSave": "Adicione a camada Resultado na lista da camada de comparação",
    "copy": "Copie a camada ativa na camada de comparação.",
    "swap": "Alterne a camada ativa e de comparação."
  },
  "renderer": {
    "title": "Renderizador",
    "stretch": "Parâmetros de Contraste",
    "stretchType": "Tipo de Constraste",
    "dra": "DRA",
    "draText": "O Ajuste de Intervalo Dinâmico atualiza as melhorias com base na visualização atual",
    "gamma": "Gama",
    "apply": "Aplicar",
    "top": "Excluir superior",
    "bottom": "Excluir inferior",
    "topText": " Excluir superior x percentagem do histograma",
    "bottomText": " Excluir inferior x percentagem do histograma",
    "stdDev": "# de Desvio Padrão",
    "layer": "Camada Atual",
    "error": "Nenhuma Camada de Imagem visível no mapa."
  },
  "imageSelector": {
    "title": "Seletor de Imagem",
    "enable": "Habilitar Seletor de Imagem",
    "secondary": "Define Ativo como Camada de Comparação.",
    "dropDown": "Mostra imagens na lista suspensa.",
    "refresh": "Atualiza a consulta com base na extensão atual.",
    "show": "Mostrar",
    "age": "Idade",
    "zoom": "Amplia nas imagens selecionadas.",
    "error": "Nenhuma Camada de Imagem visível no mapa.",
    "error1": "O campo não está especificado.",
    "error2": "Sem campo de OBJECTID.",
    "error3": "Sem campo de Categoria.",
    "error4": "Não é possível executar a ação na camada.",
    "error5": "Serviços pré 10.2.1 não suportados.",
    "error6": "Nenhuma cena na extensão atual.",
    "error7": "O número de pegadas selecionadas excede 20. Somente as primeiras 20 serão exibidas. Pressione OK para não avisar novamente.",
    "slider": "Mostra imagens no controle deslizante."
  },
  "changeDetection": {
    "title": "Detecção de Alteração",
    "mode": "Modo",
    "method": "Método",
    "positive": "Diferença Positiva",
    "negative": "Diferença Negativa",
    "threshold": "Limite",
    "difference": "Diferença",
    "apply": "Aplicar",
    "error": "A Detecção de Alteração funciona com duas imagens de datas diferentes do mesmo serviço.<br />Primeiro utilize o Seletor de Imagem para definir uma imagem,<br />então clique no botão <img src='images/down.png' height='14'/> e selecione a segunda imagem.<br />Retorne a este controle para prosseguir com a detecção de alterações."
  },
  "editor": {
    "title": "Editor",
    "error": "Nenhuma Camada de Edição selecionada.",
    "error1": "Acesso negado. As camadas não podem ser editadas."
  },
  "measurement": {
    "title": "Medida da Imagem",
    "error": "Recursos de Medição não suportados."
  },
  "export": {
    "title": "Exportar",
    "mode": "Modo",
    "titleText": "Título",
    "description": "Descrição",
    "tags": "Tags",
    "submit": "Enviar",
    "pixel": "Tamanho do Pixel",
    "outsr": "Referência Espacial de Saída",
    "renderer": "Renderizador Atual",
    "extent": "Definir Extensão",
    "text": "Se o Renderizador Atual estiver selecionado, a renderização<br /> será exportada, senão os valores de dados originais<br/>serão exportados.",
    "error": "Nenhuma camada de imagem visível no mapa.",
    "error1": "O título é necessário.",
    "error2": "Tags são exigidas."
  },
  "compare": {
    "title": "Comparar",
    "slider": "Controle Deslizante da Transparência",
    "hSwipe": "Oscilação Horizontal",
    "vSwipe": "Oscilação Vertical",
    "error": "Nenhuma Camada de Imagem visível disponível para comparação."
  }
});