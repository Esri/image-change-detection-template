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
    "error": "يتعذر إنشاء الخريطة"
  },
  "nav": {
    "close": "إغلاق"
  },
  "basemap": {
    "title": "معرض خرائط الأساس"
  },
  "operationalLayers": {
    "title": "طبقات جاهزة للعمل",
    "error": "لا توجد طبقات تشغيلية �?ي خريطة الويب."
  },
  "layerSelector": {
    "active": "الطبقة النشطة",
    "comparison": "طبقة المقارنة",
    "other": "أخرى",
    "result": "النتيجة",
    "title": "محدد الطبقة",
    "resultSave": "إضا�?ة الطبقة الناتجة إلى قائمة طبقات المقارنة",
    "copy": "نسخ الطبقة النشطة �?ي طبقة المقارنة.",
    "swap": "سحب الطبقة النشطة وطبقة المقارنة."
  },
  "renderer": {
    "title": "العارض",
    "stretch": "معلمات التمدّ�?د",
    "stretchType": "نوع التمدد",
    "dra": "DRA",
    "draText": "تحسين تحديثات تعديل النطاق الديناميكي بناءً على العرض الحالي",
    "gamma": "جاما",
    "apply": "تطبيق",
    "top": "استبعاد الأعلى",
    "bottom": "استبعاد الأس�?ل",
    "topText": " استبعاد نسبة x المئوية العلوية �?ي المدرج التكراري",
    "bottomText": " استبعاد نسبة x المئوية الس�?لية �?ي المدرج التكراري",
    "stdDev": "# من الانحرا�? المعياري",
    "layer": "الطبقة الحالية",
    "error": "لا توجد طبقات صور مرئية �?ي الخريطة."
  },
  "imageSelector": {
    "title": "محدد الصور",
    "enable": "تمكين محدد الصور",
    "secondary": "تعيين النشطة كطبقة مقارنة",
    "dropDown": "عرض الصور �?ي قائمة منسدلة.",
    "refresh": "تحديث الاستعلام بناءً على المدى الحالى.",
    "show": "إظهار",
    "age": "الع�?مر",
    "zoom": "تكبير لتحديد الصور.",
    "error": "لا توجد طبقات صور مرئية �?ي الخريطة.",
    "error1": "اسم الحقل غير م�?حدد.",
    "error2": "لا يوجد حقل OBJECTID.",
    "error3": "لا يوجد حقل �?ئة.",
    "error4": "يتعذر تن�?يذ إجراء �?ي هذه الطبقة.",
    "error5": "الخدمات التي تسبق الإصدار 10.2.1 غير مدعومة.",
    "error6": "لا توجد مشاهد �?ي المدى الحالي.",
    "error7": "عدد الآثار المحددة يتجاوز 20، ولن يتم عرض إلا أول 20 منها. اضغط على موا�?ق لعدم التحذير مجددًا.",
    "slider": "عرض الصور على شريط التمرير."
  },
  "changeDetection": {
    "title": "تغيير الاكتشا�?",
    "mode": "وضع",
    "method": "الطريقة",
    "positive": "اختلا�? إيجابي",
    "negative": "اختلا�? سلبي",
    "threshold": "عتبة",
    "difference": "اختلا�?",
    "apply": "تطبيق",
    "error": "يعمل تحديد التغيير مع صورتين من تاريخين مختل�?ين من ن�?س الخدمة.<br />استخدم محدد الصورة أولاً لتحديد صورة واحدة،<br />ثم انقر على زر <img src='images/down.png' height='14'/> ثم حدد الصورة الثانية.<br />ارجع إلى عنصر التحكم للمتابعة �?ي تحديد التغيير."
  },
  "editor": {
    "title": "المحرر",
    "error": "لم يتم تحديد أي طبقة تحرير.",
    "error1": "تم ر�?ض الوصول. يتعذر تحرير الطبقات."
  },
  "measurement": {
    "title": "قياس الصورة",
    "error": "إمكانات القياس غير مدعومة."
  },
  "export": {
    "title": "تصدير",
    "mode": "وضع",
    "titleText": "عنوان",
    "description": "الوص�?",
    "tags": "علامات",
    "submit": "إرسال",
    "pixel": "حجم البكسل",
    "outsr": "الإسناد المكاني الناتج",
    "renderer": "أداة العرض الحالية",
    "extent": "تعري�? المدى",
    "text": "إذا تم التأشير على أداة العرض الحالية، يتم تصدير العارض<br /> وإلا يتم تصدير<br/>قيم البيانات الأصلية.",
    "error": "لا توجد طبقات صور مرئية على الخريطة.",
    "error1": "العنوان مطلوب.",
    "error2": "العلامة/العلامات مطلوبة"
  },
  "compare": {
    "title": "مقارنة",
    "slider": "شريط تمرير الش�?ا�?ية",
    "hSwipe": "سحب أ�?قي",
    "vSwipe": "سحب رأسي",
    "error": "لا توجد طبقات صور مرئية للمقارنة."
  }
  
});