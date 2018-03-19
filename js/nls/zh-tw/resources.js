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
    "error": "無法建立地圖"
  },
  "nav": {
    "close": "關閉"
  },
  "basemap": {
    "title": "底圖庫"
  },
  "operationalLayers": {
    "title": "操作圖層",
    "error": "地圖中沒有操作圖層。"
  },
  "layerSelector": {
    "active": "作用中圖層",
    "comparison": "比較圖層",
    "other": "其他",
    "result": "結果",
    "title": "圖層選擇器",
    "resultSave": "在比較圖層清單中新增結果圖層",
    "copy": "將作用中圖層複製到比較圖層。",
    "swap": "交換作用中和比較圖層。"
  },
  "renderer": {
    "title": "渲染器",
    "stretch": "縮放參數",
    "stretchType": "縮放類型",
    "dra": "DRA",
    "draText": "根據目前視圖的動態範圍調整更新增強功能",
    "gamma": "Gamma",
    "apply": "套用",
    "top": "排除頂部",
    "bottom": "排除底部",
    "topText": " 直方圖的排除頂部 x 百分比",
    "bottomText": " 直方圖的排除底部 x 百分比",
    "stdDev": "標準差的數量",
    "layer": "目前圖層",
    "error": "地圖中沒有可見的影像圖層。"
  },
  "imageSelector": {
    "title": "圖片選擇器",
    "enable": "啟用圖片選擇器",
    "secondary": "將作用中設為比較圖層。",
    "dropDown": "在下拉式清單中顯示圖片。",
    "refresh": "根據目前的範圍重新整理查詢。",
    "show": "顯示",
    "age": "年齡",
    "zoom": "放大以選擇圖片。",
    "error": "地圖中沒有可見的影像圖層。",
    "error1": "欄位未指定。",
    "error2": "無 OBJECTID 欄位。",
    "error3": "無類別欄位。",
    "error4": "無法執行圖層的動作。",
    "error5": "不支援依照 10.2.1 的服務。",
    "error6": "目前的範圍中沒有場景。",
    "error7": "選擇的輪廓數量超過 20。只會顯示前 20 個。按下「確定」不會再次警告。",
    "slider": "在滑桿上顯示圖片。"
  },
  "changeDetection": {
    "title": "變更偵測",
    "mode": "模式",
    "method": "方法",
    "positive": "正差異",
    "negative": "負差異",
    "threshold": "閾值",
    "difference": "差異",
    "apply": "套用",
    "error": "「變更偵測」使用來自相同服務的不同日期的兩張圖片。<br />首先使用「圖片選擇器」定義一張圖片，<br />然後按一下 <img src='images/down.png' height='14'/> 按鈕並選擇第二張圖片。<br />返回此控制項以繼續變更偵測。"
  },
  "editor": {
    "title": "編輯器",
    "error": "未選擇「編輯圖層」。",
    "error1": "拒絕存取。圖層無法編輯。"
  },
  "measurement": {
    "title": "圖像測量",
    "error": "不支援「測量能力」。"
  },
  "export": {
    "title": "匯出",
    "mode": "模式",
    "titleText": "標題",
    "description": "說明",
    "tags": "標記",
    "submit": "提交",
    "pixel": "像素大小",
    "outsr": "輸出空間參考",
    "renderer": "目前渲染器",
    "extent": "定義範圍",
    "text": "若勾選「目前渲染器」，則會匯出<br />渲染，否則將匯出<br/>原始資料值。",
    "error": "地圖上沒有可見的影像圖層。",
    "error1": "標題為必填項。",
    "error2": "標記為必填項。"
  },
  "compare": {
    "title": "比較",
    "slider": "透明度滑桿",
    "hSwipe": "水平撥動",
    "vSwipe": "垂直撥動",
    "error": "沒有可供比較的可見影像圖層。"
  }
});