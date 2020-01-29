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
    "error": "Harita oluşturulamıyor",
    "licenseError": {
      "message": "Hesabınız herkese açık olmayan Yapılandırılabilir Uygulamaları kullanmak için lisanslandırılmamış. Lütfen kuruluş yöneticinizden Temel Uygulamalar veya eklenti Temel Uygulamalar lisansı içeren bir kullanıcı türü atamasını isteyin.",
      "title": "Lisanslı Değil"
    }
  },
  "nav": {
    "close": "Kapat"
  },
  "basemap": {
    "title": "Altlık Harita Galerisi"
  },
  "operationalLayers": {
    "title": "İşlem Katmanları",
    "error": "Haritada işlem katmanı yok."
  },
  "imageMask": {
    "title": "Görüntü Maskesi",
    "toolText": "Araç",
    "tool1": "Maske",
    "tool2": "Değişiklik Algılama",
    "layer": "Katman",
    "layerText": "Görüntünüzü seçin.",
    "basemap": "Altlık Harita",
    "maskImageSelector": "Belirli görüntüyü/görüntüleri seçin",
    "imageSelectorText": "Karşılaştırma için iki farklı görüntü seçin.",
    "changeText": "Değişiklik algılamayı yapılandırın.",
    "maskText": "Maskeyi yapılandırın.",
    "zoom": "Görüntü seçmek için yakınlaştır.",
    "primary": "Birincil Görüntü",
    "comparison": "Karşılaştırılacak Görüntü",
    "mode": "Değişiklikleri şu şekilde görselleştirin",
    "method": "Yöntem",
    "changeMethodText": "Değişiklikleri şu şekilde hesaplayın",
    "positive": "Pozitif",
    "negative": "Negatif",
    "threshold": "Eşik",
    "difference": "Fark",
    "apply": "Uygula",
    "clear": "Temizle",
    "nir": "Kızılötesi Bant",
    "red": "Kırmızı Bant",
    "green": "Yeşil Bant",
    "swir": "Kısa Dalga Kızılötesi Bant",
    "band1": "Bant A",
    "band2": "Bant B",
    "mode1": "Fark Görüntüsü",
    "mode2": "Fark Maskesi",
    "mode3": "Eşik Maskesi",
    "method1": "Görüntü parlaklığı",
    "method2": "Bitki Örtüsü İndeksi",
    "method3": "Toprağa Göre Ayarlanan Bit. Ör. Dizin",
    "method4": "Su İndeksi",
    "method5": "Yanma İndeksi",
    "method6": "Eşik seviyemden az",
    "method7": "Eşik seviyemden büyük",
    "method8": "Tek Bantlı",
    "method9": "Özel İndeks",
    "dropDown": "Görüntüleri açılır listede göster.",
    "transparency": "Şeffaflık (sonuçlar)",
    "slider": "Görüntüleri kaydırıcıda göster.",
    "error1": "Alan belirtilmedi.",
    "error2": "OBJECTID alanı yok.",
    "error3": "Kategori alanı yok.",
    "error4": "Katman için işlem yapılamıyor.",
    "error5": "10.2.1 öncesi servisler desteklenmiyor.",
    "error6": "Geçerli yayılımda sahne yok.",
    "error7": "Lütfen iki farklı görüntü seçin.",
    "error8": "Geçersiz tarih aralığı: Başlangıç ​​Tarihi, Bitiş Tarihinden önce olmalıdır.",
    "indexText": "Gelişmiş indeks seçenekleri",
    "date": "Tarih",
    "areaText": "Alan Küçülmesi / Büyümesi",
    "areaText2": "Yanan / Yangın Sonrası Yeniden Yetişen Alan",
    "areaText3": "Kapsanan Alan",
    "unit": "km",
    "swipe": "Kaydır",
    "imageLabel": "görüntü(ler)",
    "extent": "Kapsamı tanımlamak için çokgenler çizin",
    "colorPicker": "Renk Seçici",
    "refresh": "Yenileme Düğmesi",
    "refreshTooltip": "Görüntü listesini geçerli listeye göre yenileyin.",
    "colorpickerText": "Maskeniz için bir renk seçin",
    "sliderText": "Eşik seviyenizi ayarlayın",
    "maskModeText": "Hangi değerleri maskelemeliyim?",
    "positiveSliderText": "Alan yeşil renkte gösterilmeden önce görüntüler arasında gereken minimum artışı ayarlayın.",
    "negativeSliderText": "Alan macenta renginde gösterilmeden önce görüntüler arasında gereken minimum düşüşü ayarlayın.",
    "updateResult": "Görüntü değiştirildi; analizi güncellemek için Uygula öğesine tıklayın."
  },
  "editor": {
    "title": "Düzenleyici",
    "error": "Düzenleme Katmanı bulunamadı.",
    "error1": "Erişim reddedildi. Katmanlar düzenlenemiyor.",
    "text": "Harita üzerinde bir simge seçin ve tıklayın."
  },
  "measurement": {
    "title": "Görüntü Ölçümü",
    "error": "Ölçme Becerileri desteklenmiyor."
  },
  "export": {
    "title": "Dışa Aktar",
    "mode": "Konumu kaydet",
    "titleText": "Başlık (gerekli)",
    "description": "Açıklama",
    "tags": "Etiketler (gerekli)",
    "preview": "Önizleme",
    "submit": "Kaydet",
    "cancel": "İptal Et",
    "pixel": "Piksel Boyutu",
    "outsr": "Çıktı Mekansal Referansı",
    "renderer": "TIFF indirme seçenekleri",
    "formatText1": "Görüntülendiği gibi",
    "formatText2": "Ham veriler (tüm gruplar)",
    "extent": "Kapsamı tanımlamak için çokgen çizin",
    "drawText": "(başlamak için görüntüye tıklayın)",
    "text": "Ham veriler standart fotoğraf görüntüleyicileriyle görüntülenemez. ArcGIS Pro ile aç.",
    "error": "Haritada görünür görüntü katmanı yok.",
    "error1": "Başlık gerekli.",
    "error2": "Etiket gerekli.",
    "error3": "Aktarım için maksimum Piksel Boyutu",
    "error4": "bu yayılım için.",
    "error5": "Geçerli bir sayısal değer girin.",
    "error6": "Görüntünüz şu anda dışa aktarılamıyor.",
    "thumbnailError": "Kullanılabilir küçük resim yok",
    "advance": "Gelişmiş kaydetme seçenekleri",
    "modeOption1": "Portala kaydet",
    "modeOption2": "Diske kaydet",
    "default": "Varsayılan",
    "utm": "WGS84 UTM Zone",
    "layer": "Katman",
    "mercator": "WebMercatorAS",
    "folder": "Klasör seç"
  },
  "imageDate": {
    "label": "Görüntü Tarihi"
  },
  "about": {
    "title": "Yaklaşık"
  },
  "bookmark": {
    "title": "Yer işaretleri",
    "default": "Varsayılan",
    "selectBookmark": "Seçilen yer işaretleri",
    "add": "Yer İşareti ekle",
    "addTitle": "Başlık girin",
    "addBtn": "Geçici ekle"
  },
  "coordinate": {
    "_widgetLabel": "Koordinat",
    "hintMessage": "Koordinatları almak için haritaya tıkla",
    "defaultLabel": "Varsayılan",
    "realtimeLabel": "Koordinatları almak için fareyi hareket ettirin",
    "computing": "Hesaplıyor...",
    "latitudeLabel": "Enlem",
    "longitudeLabel": "Boylam",
    "loading": "yükleniyor...",
    "enableClick": "Koordinat almak için haritaya tıklama özelliğini etkinleştirmek için tıklayın",
    "disableClick": "Koordinat almak için haritaya tıklama özelliğini devre dışı bırakmak için tıklayın",
    "Default": "Varsayılan",
    "Inches": "İnç",
    "Foot": "Feet",
    "Foot_US": "Fit_ABD",
    "Yards": "Yarda",
    "Miles": "Mil",
    "Nautical_Miles": "Deniz mili",
    "Millimeters": "Milimetre",
    "Centimeters": "Santimetre",
    "Meter": "Metre",
    "Kilometers": "Kilometre",
    "Decimeters": "Desimetre",
    "Decimal_Degrees": "Derece",
    "Degree_Minutes_Seconds": "Derece dakika saniye",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});