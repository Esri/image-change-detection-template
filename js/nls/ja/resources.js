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
    "error": "マップを作成できません"
  },
  "nav": {
    "close": "閉じる"
  },
  "basemap": {
    "title": "ベースマップ ギャラリー"
  },
  "operationalLayers": {
    "title": "操作レイヤー",
    "error": "マップに操作レイヤーがありません。"
  },
  "layerSelector": {
    "active": "アクティブなレイヤー",
    "comparison": "比較レイヤー",
    "other": "その他",
    "result": "結果",
    "title": "レイヤー選択",
    "resultSave": "結果レイヤーを比較レイヤー リストに追加",
    "copy": "アクティブなレイヤーを比較レイヤーにコピーします。",
    "swap": "アクティブなレイヤーと比較レイヤーを交換します。"
  },
  "renderer": {
    "title": "レンダリング",
    "stretch": "ストレッチ パラメーター",
    "stretchType": "ストレッチ タイプ",
    "dra": "DRA",
    "draText": "[動的な範囲調整] は、現在のビューに基づいて調整機能を更新します",
    "gamma": "ガンマ",
    "apply": "申請",
    "top": "上部を除外",
    "bottom": "下部を除外",
    "topText": " ヒストグラムの上部 x パーセントを除外する",
    "bottomText": " ヒストグラムの下部 x パーセントを除外する",
    "stdDev": "標準偏差の #",
    "layer": "現在のレイヤー",
    "error": "マップに表示可能なイメージ レイヤーがありません。"
  },
  "imageSelector": {
    "title": "画像選択",
    "enable": "画像選択の有効化",
    "secondary": "比較レイヤーとしてアクティブに設定します。",
    "dropDown": "画像をドロップ ダウン リストに表示します。",
    "refresh": "現在の範囲に基づいてクエリを更新します。",
    "show": "表示(H)",
    "age": "期間",
    "zoom": "拡大して画像を選択します。",
    "error": "マップに表示可能なイメージ レイヤーがありません。",
    "error1": "フィールドが指定されていません。",
    "error2": "OBJECTID フィールドがありません。",
    "error3": "カテゴリ フィールドがありません。",
    "error4": "レイヤーに対してアクションを実行できません。",
    "error5": "10.2.1 より前のサービスはサポートされていません。",
    "error6": "現在の範囲内にシーンがありません。",
    "error7": "選択したフットプリントの数が 20 を超えました。最初の 20 個のみが表示されます。[OK] を押すと、再び警告されることがなくなります。",
    "slider": "画像をスライダー上に表示します。"
  },
  "changeDetection": {
    "title": "変化の検出",
    "mode": "最頻値",
    "method": "手法",
    "positive": "正の差分",
    "negative": "負の差分",
    "threshold": "Threshold",
    "difference": "差分",
    "apply": "申請",
    "error": "[変化の検出] は、同じサービスからの日付の異なる 2 つの画像を扱います。<br />まず、[画像選択] を使用して 1 つの画像を定義してから、<br /><img src='images/down.png' height='14'/> ボタンをクリックして、2 番目の画像を選択します。<br />このコントロールに戻って、変化の検出を進めます。"
  },
  "editor": {
    "title": "Editor",
    "error": "編集レイヤーが選択されていません。",
    "error1": "アクセスが拒否されました。レイヤーを編集できません。"
  },
  "measurement": {
    "title": "画像計測",
    "error": "計測機能がサポートされていません。"
  },
  "export": {
    "title": "エクスポート",
    "mode": "最頻値",
    "titleText": "マップの説明",
    "description": "説明",
    "tags": "タグ(T)",
    "submit": "送信",
    "pixel": "ピクセル サイズ",
    "outsr": "出力データの空間参照",
    "renderer": "現在のレンダラー",
    "extent": "範囲の定義",
    "text": "[現在のレンダラー] をオンにした場合は、レンダリング<br />がエクスポートされ、オフにした場合は、元のデータ値<br/>がエクスポートされます。",
    "error": "マップに表示可能なイメージ レイヤーがありません。",
    "error1": "タイトルの指定が必須です。",
    "error2": "タグが必要です。"
  },
  "compare": {
    "title": "Compare",
    "slider": "透過表示スライダー",
    "hSwipe": "横方向のスワイプ",
    "vSwipe": "縦方向のスワイプ",
    "error": "比較に使用できる表示可能なイメージ レイヤーがありません。"
  }
});