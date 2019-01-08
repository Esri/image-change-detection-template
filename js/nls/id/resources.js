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
    "error": "Tidak dapat membuat peta",
    "licenseError": {
      "message": "Akun Anda tidak dilisensikan untuk menggunakan Aplikasi yang Dapat Dikonfigurasi yang bukan bersifat publik. Harap minta administrator organisasi Anda untuk menetapkan Anda jenis pengguna yang menyertakan lisensi Essential App atau add-on Essential App.",
      "title": "Tidak Dilisensikan"
    }
  },
  "nav": {
    "close": "Tutup"
  },
  "basemap": {
    "title": "Galeri Peta Dasar"
  },
  "operationalLayers": {
    "title": "Layer Operasional",
    "error": "Tidak ada layer operasional di peta."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Alat",
    "tool1": "Mask",
    "tool2": "Ubah Deteksi",
    "layer": "Layer",
    "layerText": "Pilih gambar Anda.",
    "maskImageSelector": "Pilih gambar spesifik",
    "imageSelectorText": "Pilih dua gambar yang berbeda untuk dibandingkan.",
    "changeText": "Konfigurasikan deteksi perubahan.",
    "maskText": "Konfigurasikan mask.",
    "zoom": "Perbesar untuk memilih gambar.",
    "primary": "Gambar utama",
    "comparison": "Gambar Perbandingan",
    "mode": "Visualisasikan perubahan sebagai",
    "method": "Metode",
    "changeMethodText": "Hitung perubahan dalam",
    "positive": "Positif",
    "negative": "Negatif",
    "threshold": "Ambang batas",
    "difference": "Perbedaan",
    "apply": "Terapkan",
    "clear": "Hapus",
    "nir": "Pita Inframerah",
    "red": "Pita Merah",
    "green": "Pita Hijau",
    "swir": "Pita Inframerah Gelombang Pendek",
    "band1": "Pita A",
    "band2": "Pita B",
    "mode1": "Gambar Perbedaan",
    "mode2": "Mask Perbedaan",
    "mode3": "Mask Ambang Batas",
    "method1": "Kecerahan gambar",
    "method2": "Indeks Vegetasi",
    "method3": "Veg. Disesuaikan Tanah Indeks",
    "method4": "Indeks Air",
    "method5": "Indeks Bekas Terbakar",
    "method6": "Kurang dari ambang batas saya",
    "method7": "Lebih besar dari ambang batas saya",
    "method8": "Pita Tunggal",
    "method9": "Kustom Indeks",
    "dropDown": "Tampilkan gambar di daftar drop-down.",
    "transparency": "Transparansi(hasil)",
    "slider": "Tampilkan gambar di penggeser.",
    "error1": "Kolom tidak ditentukan.",
    "error2": "Tidak ada kolom OBJECTID.",
    "error3": "Tidak ada kolom Kategori.",
    "error4": "Tidak dapat melakukan tindakan untuk layer.",
    "error5": "Service sebelum 10.2.1 tidak didukung.",
    "error6": "Tidak ada scene dalam jangkauan saat ini.",
    "error7": "Harap pilih dua gambar yang berbeda.",
    "indexText": "Opsi indeks lanjutan",
    "date": "Tanggal",
    "areaText": "Penurunan / Peningkatan Area",
    "areaText2": "Area Bekas Terbakar / Tumbuh Ulang Pascakebakaran",
    "areaText3": "Area yang Tercakup",
    "unit": "km",
    "swipe": "Geser",
    "imageLabel": "gambar",
    "extent": "Gambar poligon untuk menentukan jangkauan",
    "colorPicker": "Pengambil Warna",
    "refresh": "Tombol Muat Ulang",
    "refreshTooltip": "Muat ulang daftar gambar berdasarkan jangkauan saat ini.",
    "colorpickerText": "Pilih warna untuk mask Anda",
    "sliderText": "Tetapkan ambang batas Anda",
    "maskModeText": "Nilai mana yang harus saya mask?",
    "positiveSliderText": "Tetapkan peningkatan minimum yang diperlukan antar gambar sebelum area ditampilkan dalam warna hijau.",
    "negativeSliderText": "Tetapkan pengurangan minimum yang diperlukan antar gambar sebelum area ditampilkan dalam warna magenta.",
    "updateResult": "Citra Anda sudah diubah; klik Terapkan untuk memperbarui analisis."
  },
  "editor": {
    "title": "Editor",
    "error": "Tidak ada Layer Edit ditemukan.",
    "error1": "Akses ditolak. Layer tidak dapat diedit.",
    "text": "Pilih simbol dan klik pada peta."
  },
  "measurement": {
    "title": "Pengukuran Gambar",
    "error": "Kapabilitas pengukuran tidak didukung."
  },
  "export": {
    "title": "Ekspor",
    "mode": "Simpan lokasi",
    "titleText": "Judul (wajib)",
    "description": "Deskripsi",
    "tags": "Tag (wajib)",
    "preview": "Pratinjau",
    "submit": "Simpan",
    "cancel": "Batalkan",
    "pixel": "Ukuran Piksel",
    "outsr": "Referensi Spasial Output",
    "renderer": "Opsi unduhan TIFF",
    "formatText1": "Sebagaimana ditampilkan",
    "formatText2": "Data mentah (semua pita)",
    "extent": "Gambar poligon untuk menentukan jangkauan",
    "drawText": "(klik gambar untuk memulai)",
    "text": "Data mentah tidak dapat ditampilkan dengan penampil foto standar. Buka dengan ArcGIS Pro.",
    "error": "Tidak ada layer gambar yang terlihat di peta.",
    "error1": "Judul diperlukan.",
    "error2": "Tag diperlukan.",
    "error3": "PixelSize ekspor dibatasi hingga",
    "error4": "untuk jangkauan ini.",
    "error5": "Harap masukkan nilai numerik yang valid.",
    "error6": "Gambar Anda kali ini tidak dapat diekspor.",
    "thumbnailError": "Tidak ada gambar mini tersedia",
    "advance": "Opsi simpan lanjutan",
    "modeOption1": "Simpan ke portal",
    "modeOption2": "Simpan ke disk",
    "default": "Default",
    "utm": "Zona WGS84 UTM",
    "layer": "Layer",
    "mercator": "WebMercatorAS",
    "folder": "Pilih folder"
  },
  "imageDate": {
    "label": "Tanggal Gambar"
  },
  "about": {
    "title": "Tentang"
  },
  "bookmark": {
    "title": "Penanda Lokasi",
    "default": "Default",
    "selectBookmark": "Pilih penanda lokasi",
    "add": "Tambahkan Penanda Lokasi",
    "addTitle": "Masukkan judul",
    "addBtn": "Tambahkan sementara"
  }
});