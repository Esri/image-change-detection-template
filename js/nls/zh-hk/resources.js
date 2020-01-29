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
    "error": "無法建立地圖",
    "licenseError": {
      "message": "您的帳號未經授權，無法使用非公開的可配置應用程式。 請聯繫您的組織管理員，請其將包含基礎應用程式或附加元件基礎應用程式授權的使用者類型指派給您。",
      "title": "未經許可"
    }
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
  "imageMask": {
    "title": "圖片遮罩",
    "toolText": "工具",
    "tool1": "遮罩",
    "tool2": "變更偵測",
    "layer": "圖層",
    "layerText": "選擇影像。",
    "basemap": "底圖",
    "maskImageSelector": "選擇特定的圖片",
    "imageSelectorText": "選擇兩張不同的圖片以進行比較。",
    "changeText": "配置變更偵測。",
    "maskText": "配置遮罩。",
    "zoom": "放大以選擇圖片。",
    "primary": "主要圖片",
    "comparison": "比較圖片",
    "mode": "將變更視覺化為",
    "method": "方法",
    "changeMethodText": "計算變更",
    "positive": "正",
    "negative": "負",
    "threshold": "閾值",
    "difference": "差異",
    "apply": "套用",
    "clear": "清除",
    "nir": "紅外線頻段",
    "red": "紅色頻段",
    "green": "綠色頻段",
    "swir": "短波紅外線頻段",
    "band1": "頻段 A",
    "band2": "頻段 B",
    "mode1": "差別圖片",
    "mode2": "差別遮罩",
    "mode3": "閾值遮罩",
    "method1": "圖片亮度",
    "method2": "植被索引",
    "method3": "泥土調整的植被 索引",
    "method4": "水份指數",
    "method5": "燃燒指數",
    "method6": "小於我的閾值",
    "method7": "大於我的閾值",
    "method8": "單一頻段",
    "method9": "自訂索引",
    "dropDown": "在下拉式清單中顯示圖片。",
    "transparency": "透明度 (結果)",
    "slider": "在滑桿上顯示圖片。",
    "error1": "欄位未指定。",
    "error2": "無 OBJECTID 欄位。",
    "error3": "無類別欄位。",
    "error4": "無法執行圖層的動作。",
    "error5": "不支援依照 10.2.1 的服務。",
    "error6": "目前的範圍中沒有場景。",
    "error7": "請選擇兩張不同的圖片",
    "error8": "日期範圍無效: 開始日期不可少於結束日期。",
    "indexText": "進階索引選項",
    "date": "日期",
    "areaText": "區域減少/增加",
    "areaText2": "燃燒/火災後生長區",
    "areaText3": "覆蓋的區域",
    "unit": "公里",
    "swipe": "撥動",
    "imageLabel": "圖片",
    "extent": "繪製多邊形以定義範圍",
    "colorPicker": "顏色選取器",
    "refresh": "重新整理按鈕",
    "refreshTooltip": "根據目前的範圍重新整理圖片清單。",
    "colorpickerText": "選擇遮罩的顏色",
    "sliderText": "設定您的閾值",
    "maskModeText": "我應遮罩哪些值?",
    "positiveSliderText": "先設定圖片之間的必要增量下限，再以綠色顯示區域。",
    "negativeSliderText": "先設定圖片之間的必要減量下限，再以洋紅色顯示區域。",
    "updateResult": "您的圖片已變更；按一下「套用」以更新分析。"
  },
  "editor": {
    "title": "編輯器",
    "error": "找不到「編輯圖層」。",
    "error1": "拒絕存取。 無法編輯圖層。",
    "text": "選擇符號並按一下地圖。"
  },
  "measurement": {
    "title": "圖像測量",
    "error": "不支援「測量能力」。"
  },
  "export": {
    "title": "匯出",
    "mode": "儲存位置",
    "titleText": "標題 (必填項)",
    "description": "描述",
    "tags": "標記 (必填項)",
    "preview": "預覽",
    "submit": "儲存",
    "cancel": "取消",
    "pixel": "像素大小",
    "outsr": "輸出空間參考",
    "renderer": "TIFF 下載選項",
    "formatText1": "如圖所示",
    "formatText2": "原生資料 (所有頻帶)",
    "extent": "繪製多邊形以定義範圍",
    "drawText": "(按一下圖片以開始)",
    "text": "無法使用標準相片檢視器來顯示原生資料。 使用 ArcGIS Pro 開啟。",
    "error": "地圖上沒有可見的影像圖層。",
    "error1": "標題為必填項。",
    "error2": "標記為必填項。",
    "error3": "匯出的 PixelSize 限制",
    "error4": "此範圍。",
    "error5": "請輸入有效的數值。",
    "error6": "目前無法匯出您的圖片。",
    "thumbnailError": "無可用的縮圖",
    "advance": "進階儲存選項",
    "modeOption1": "儲存到入口網站",
    "modeOption2": "儲存到磁碟",
    "default": "預設",
    "utm": "WGS84 UTM 區域",
    "layer": "圖層",
    "mercator": "WebMercatorAS",
    "folder": "選擇資料夾"
  },
  "imageDate": {
    "label": "圖片日期"
  },
  "about": {
    "title": "關於"
  },
  "bookmark": {
    "title": "書籤",
    "default": "預設",
    "selectBookmark": "選擇書籤",
    "add": "新增書籤",
    "addTitle": "輸入標題",
    "addBtn": "新增臨時"
  },
  "coordinate": {
    "_widgetLabel": "坐標",
    "hintMessage": "按一下地圖以取得坐標",
    "defaultLabel": "預設",
    "realtimeLabel": "移動滑鼠以取得坐標",
    "computing": "正在計算...",
    "latitudeLabel": "緯度",
    "longitudeLabel": "經度",
    "loading": "正在載入...",
    "enableClick": "按一下啟用點選地圖以取得坐標",
    "disableClick": "按一下停用點選地圖以取得坐標",
    "Default": "預設",
    "Inches": "英吋",
    "Foot": "英呎",
    "Foot_US": "Feet_US",
    "Yards": "碼",
    "Miles": "英哩",
    "Nautical_Miles": "海浬",
    "Millimeters": "公釐",
    "Centimeters": "公分",
    "Meter": "公尺",
    "Kilometers": "公里",
    "Decimeters": "公寸",
    "Decimal_Degrees": "度",
    "Degree_Minutes_Seconds": "度分秒",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});