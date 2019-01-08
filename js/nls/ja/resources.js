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
    "error": "マップを作成できません",
    "licenseError": {
      "message": "パブリックでないテンプレートを使用するためのライセンスがアカウントに付与されていません。 組織の管理者に Essential Apps またはアドオン Essential Apps ライセンスを含むユーザー タイプを割り当てるよう依頼してください。",
      "title": "ライセンスがありません。"
    }
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
  "imageMask": {
    "title": "Image Mask",
    "toolText": "ツール",
    "tool1": "マスク",
    "tool2": "変化の検出",
    "layer": "レイヤー",
    "layerText": "画像を選択します。",
    "maskImageSelector": "特定の画像の選択",
    "imageSelectorText": "2 つの異なる画像を比較するために選択します。",
    "changeText": "変更検出を構成します。",
    "maskText": "マスクを構成します。",
    "zoom": "拡大して画像を選択します。",
    "primary": "プライマリ画像",
    "comparison": "比較画像",
    "mode": "変化を次として視覚化",
    "method": "手法",
    "changeMethodText": "次の変化の計算",
    "positive": "正",
    "negative": "ネガ(N)",
    "threshold": "閾値",
    "difference": "差分",
    "apply": "適用",
    "clear": "解除",
    "nir": "近赤外バンド",
    "red": "赤バンド",
    "green": "緑バンド",
    "swir": "短波長赤外バンド",
    "band1": "バンド A",
    "band2": "バンド B",
    "mode1": "差分画像",
    "mode2": "差分マスク",
    "mode3": "閾値マスク",
    "method1": "画像の明るさ",
    "method2": "植生指数",
    "method3": "土壌調整植生指数",
    "method4": "水指数",
    "method5": "燃焼指数",
    "method6": "閾値より小さい",
    "method7": "閾値より大きい",
    "method8": "シングル バンド",
    "method9": "カスタム インデックス",
    "dropDown": "画像をドロップ ダウン リストに表示します。",
    "transparency": "透過表示 (結果)",
    "slider": "画像をスライダー上に表示します。",
    "error1": "フィールドが指定されていません。",
    "error2": "OBJECTID フィールドがありません。",
    "error3": "カテゴリ フィールドがありません。",
    "error4": "レイヤーに対してアクションを実行できません。",
    "error5": "10.2.1 より前のサービスはサポートされていません。",
    "error6": "現在の範囲内にシーンがありません。",
    "error7": "2 つの異なる画像を選択してください。",
    "indexText": "高度なインデックス オプション",
    "date": "日付",
    "areaText": "エリアの増加/減少",
    "areaText2": "燃焼/火災後の再生エリア",
    "areaText3": "対象エリア",
    "unit": "キロメートル",
    "swipe": "スワイプ",
    "imageLabel": "画像",
    "extent": "ポリゴンを描画して範囲を定義",
    "colorPicker": "カラー パレット",
    "refresh": "更新ボタン",
    "refreshTooltip": "現在の範囲に基づいて画像リストを更新します。",
    "colorpickerText": "マスクの色の選択",
    "sliderText": "閾値の設定",
    "maskModeText": "どの値をマスクするべきですか？",
    "positiveSliderText": "エリアが緑色で表示される前に画像間で必要な最小の増加分を設定します。",
    "negativeSliderText": "エリアがマゼンタ色で表示される前に画像間で必要な最小の減少分を設定します。",
    "updateResult": "画像が変更されました。[適用] をクリックすると解析が更新されます。"
  },
  "editor": {
    "title": "エディター",
    "error": "編集レイヤーが見つかりません。",
    "error1": "アクセスが拒否されました。レイヤーを編集できません。",
    "text": "シンボルを選択し、マップをクリックします。"
  },
  "measurement": {
    "title": "画像計測",
    "error": "計測機能がサポートされていません。"
  },
  "export": {
    "title": "エクスポート",
    "mode": "位置の保存",
    "titleText": "タイトル (必須)",
    "description": "説明",
    "tags": "タグ (必須)",
    "preview": "プレビュー",
    "submit": "保存",
    "cancel": "キャンセル",
    "pixel": "ピクセル サイズ",
    "outsr": "出力データの空間参照",
    "renderer": "TIFF ダウンロード オプション",
    "formatText1": "表示",
    "formatText2": "未処理データ (すべてのバンド)",
    "extent": "ポリゴンを描画して範囲を定義",
    "drawText": "(画像をクリックすると開始します)",
    "text": "標準の写真ビューアーを使用して未処理データを表示することはできません。 ArcGIS Pro で開きます。",
    "error": "マップに表示可能なイメージ レイヤーがありません。",
    "error1": "タイトルの指定が必須です。",
    "error2": "タグが必要です。",
    "error3": "この範囲の場合、エクスポートのピクセルサイズは、",
    "error4": "に制限されます。",
    "error5": "有効な数値を入力してください。",
    "error6": "この時点で画像をエクスポートすることはできません。",
    "thumbnailError": "利用可能なサムネイルがありません",
    "advance": "高度な保存オプション",
    "modeOption1": "ポータルに保存",
    "modeOption2": "ディスクに保存",
    "default": "既定",
    "utm": "WGS84 UTM ゾーン",
    "layer": "レイヤー",
    "mercator": "WebMercatorAS",
    "folder": "フォルダー選択"
  },
  "imageDate": {
    "label": "画像の日付"
  },
  "about": {
    "title": "情報"
  },
  "bookmark": {
    "title": "ブックマーク",
    "default": "既定",
    "selectBookmark": "ブックマークの選択",
    "add": "ブックマークの追加",
    "addTitle": "タイトルの入力",
    "addBtn": "一時的な追加"
  }
});