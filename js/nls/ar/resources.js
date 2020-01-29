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
    "error": "يتعذر إنشاء الخريطة",
    "licenseError": {
      "message": "حسابك غير مرخص لاستخدام التطبيقات القابلة للتكوين غير العامة. رجاءً اطلب من مسئولي المؤسسة تعيينك كنوع مستخدم يتضمن التطبيقات الأساسية أو ترخيص التطبيقات الأساسية المضافة.",
      "title": "غير مرخص"
    }
  },
  "nav": {
    "close": "إغلاق"
  },
  "basemap": {
    "title": "معرض خرائط الأساس"
  },
  "operationalLayers": {
    "title": "طبقات جاهزة للعمل",
    "error": "لا توجد طبقات تشغيلية في خريطة الويب."
  },
  "imageMask": {
    "title": "قناع الصورة",
    "toolText": "أداة",
    "tool1": "قناع",
    "tool2": "تغيير الاكتشاف",
    "layer": "طبقة",
    "layerText": "اختر الصور.",
    "basemap": "خريطة الأساس",
    "maskImageSelector": "اختر صورًا محددة",
    "imageSelectorText": "اختر صورتين مختلفتين للمقارنة بينهما.",
    "changeText": "قم بتكوين تغيير الاكتشاف.",
    "maskText": "قم بتكوين القناع.",
    "zoom": "تكبير لتحديد الصور.",
    "primary": "الصورة الرئيسية",
    "comparison": "صورة المقارنة",
    "mode": "تصوُّر التغييرات على أنها",
    "method": "الطريقة",
    "changeMethodText": "حساب التغييرات في",
    "positive": "موجب",
    "negative": "سلبي",
    "threshold": "عتبة",
    "difference": "اختلاف",
    "apply": "تطبيق",
    "clear": "مسح",
    "nir": "النطاق تحت الحمراء",
    "red": "نطاق أحمر",
    "green": "نطاق أخضر",
    "swir": "نطاق تحت الحمراء قصير الموجة",
    "band1": "نطاق أ",
    "band2": "نطاق ب",
    "mode1": "صورة الاختلاف",
    "mode2": "قناع الاختلاف",
    "mode3": "قناع الحد",
    "method1": "سطوع الصورة",
    "method2": "فهرس الغطاء النباتي",
    "method3": "الغطاء النباتي المعدل للتربة. فهرس",
    "method4": "فهرس المياه",
    "method5": "فهرس الحريق",
    "method6": "أقل من الحد",
    "method7": "أكبر من الحد",
    "method8": "نطاق مفرد",
    "method9": "فهرس مخصص",
    "dropDown": "عرض الصور في قائمة منسدلة.",
    "transparency": "الشفافية (النتائج)",
    "slider": "عرض الصور على شريط التمرير.",
    "error1": "اسم الحقل غير مُحدد.",
    "error2": "لا يوجد حقل OBJECTID.",
    "error3": "لا يوجد حقل فئة.",
    "error4": "يتعذر تنفيذ إجراء في هذه الطبقة.",
    "error5": "الخدمات التي تسبق الإصدار 10.2.1 غير مدعومة.",
    "error6": "لا توجد مشاهد في المدى الحالي.",
    "error7": "يرجى تحديد صورتين مختلفتين.",
    "error8": "نطاق التاريخ غير الصالح: يجب أن يكون تاريخ البدء أقل من تاريخ الانتهاء.",
    "indexText": "خيارات الفهرس المتقدمة",
    "date": "التاريخ",
    "areaText": "ازدياد / تقليص المنطقة",
    "areaText2": "منطقة إعادة تطوير المنطقة المحروقة / مرحلة ما بعد الحريق",
    "areaText3": "المنطقة المغطاة",
    "unit": "كيلومتر",
    "swipe": "سحب",
    "imageLabel": "صورة/صور",
    "extent": "رسم المضلعات لتحديد المدى",
    "colorPicker": "منتقى الألوان",
    "refresh": "زر التحديث",
    "refreshTooltip": "قم بتحديث قائمة الصور بناءً على المدى الحالي.",
    "colorpickerText": "اختر لونًا للقناع",
    "sliderText": "تعيين الحد",
    "maskModeText": "ما هي القيم التي يجب إخفاؤها؟",
    "positiveSliderText": "تعيين أدنى زيادة مطلوبة بين الصور قبل عرض المنطقة باللون الأخضر.",
    "negativeSliderText": "تعيين أقصى نقص مطلوب بين الصور قبل عرض المنطقة باللون الأرجواني.",
    "updateResult": "تم تغيير الصورة، انقر على تحديث لتحديث التحليل."
  },
  "editor": {
    "title": "المحرر",
    "error": "لم يتم العثور على أي طبقة تحرير.",
    "error1": "‏‏تم رفض الوصول. يتعذر تحرير الطبقات.",
    "text": "حدد رمزًا، ثم انقر على الخريطة."
  },
  "measurement": {
    "title": "قياس الصورة",
    "error": "إمكانات القياس غير مدعومة."
  },
  "export": {
    "title": "تصدير",
    "mode": "حفظ الموقع",
    "titleText": "العنوان (مطلوب)",
    "description": "الوصف",
    "tags": "العلامات (مطلوبة)",
    "preview": "معاينة",
    "submit": "حفظ",
    "cancel": "إلغاء الأمر",
    "pixel": "حجم البكسل",
    "outsr": "الإسناد المكاني الناتج",
    "renderer": "خيارات تنزيل TIFF",
    "formatText1": "كما هو معروض",
    "formatText2": "البيانات الخام (كل النطاقات)",
    "extent": "رسم مضلع لتحديد المدى",
    "drawText": "(انقر على الصورة للبدء)",
    "text": "يتعذر عرض البيانات الخام بعارضي الصور القياسيين. افتح بواسطة ArcGIS Pro.",
    "error": "لا توجد طبقات صور مرئية على الخريطة.",
    "error1": "العنوان مطلوب.",
    "error2": "العلامة/العلامات مطلوبة",
    "error3": "يعد PixelSize للتصدير مقيدًا بـ",
    "error4": "لهذا المدى.",
    "error5": "يرجى إدخال قيمة رقمية صحيحة.",
    "error6": "يتعذر تصدير الصورة حاليًا.",
    "thumbnailError": "الصورة المصغرة غير متاحة",
    "advance": "خيارات الحفظ المتقدمة",
    "modeOption1": "حفظ في البوابة الإلكترونية",
    "modeOption2": "حفظ في القرص الصلب",
    "default": "الوضع الافتراضي",
    "utm": "منطقة WGS84 UTM",
    "layer": "طبقة",
    "mercator": "WebMercatorAS",
    "folder": "تحديد مجلد"
  },
  "imageDate": {
    "label": "بيانات الصورة"
  },
  "about": {
    "title": "نبذة عن"
  },
  "bookmark": {
    "title": "إشارات مرجعية",
    "default": "الوضع الافتراضي",
    "selectBookmark": "تحديد إشارات مرجعية",
    "add": "إضافة إشارات مرجعية",
    "addTitle": "أدخل عنوانًا",
    "addBtn": "إضافة مؤقت"
  },
  "coordinate": {
    "_widgetLabel": "الإحداثيات",
    "hintMessage": "انقر على الخريطة للحصول على الإحداثيات",
    "defaultLabel": "الوضع الافتراضي",
    "realtimeLabel": "حَرك الفأرة للحصول على الإحداثيات",
    "computing": "جارِ الحساب...",
    "latitudeLabel": "خط عرض",
    "longitudeLabel": "خط طول",
    "loading": "جارِ التحميل...",
    "enableClick": "انقر لتمكين النقر على الخريطة للحصول على الإحداثيات",
    "disableClick": "انقر لتعطيل النقر على الخريطة للحصول على الإحداثيات",
    "Default": "الوضع الافتراضي",
    "Inches": "بوصة",
    "Foot": "قدم",
    "Foot_US": "Feet_US",
    "Yards": "ياردة",
    "Miles": "أميال",
    "Nautical_Miles": "أميال بحرية",
    "Millimeters": "ميليميتر",
    "Centimeters": "سنتيميتر",
    "Meter": "أمتار",
    "Kilometers": "كيلومتر",
    "Decimeters": "ديسيمتر",
    "Decimal_Degrees": "الدرجات",
    "Degree_Minutes_Seconds": "الدرجات بالدقائق والثواني",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});