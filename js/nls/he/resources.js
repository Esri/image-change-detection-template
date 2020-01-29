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
    "error": "לא ניתן ליצור מפה",
    "licenseError": {
      "message": "החשבון שלך אינו מורשה להשתמש באפליקציות הניתנות להגדרה שאינן ציבוריות. בקש ממנהל המערכת בארגון שלך להקצות לך סוג משתמש שכולל את Essential Apps או רישיון הרחבה ל-Essential Apps.",
      "title": "ללא רישיון"
    }
  },
  "nav": {
    "close": "סגור"
  },
  "basemap": {
    "title": "גלרית מפות בסיס"
  },
  "operationalLayers": {
    "title": "שכבות תפעוליות",
    "error": "אין שכבות פעילות במפה."
  },
  "imageMask": {
    "title": "ניתוח הדמאות",
    "toolText": "כלי",
    "tool1": "מסכה",
    "tool2": "זיהוי שינויים",
    "layer": "שכבה",
    "layerText": "בחר את התצלומים שלך.",
    "basemap": "מפת בסיס",
    "maskImageSelector": "בחר תצלומים ספציפיים",
    "imageSelectorText": "בחר שני תצלומים שונים להשוואה.",
    "changeText": "הגדר זיהוי שינויים.",
    "maskText": "הגדר מיסוך.",
    "zoom": "התמקד בתמונות מסוימות.",
    "primary": "תצלום ראשי",
    "comparison": "תצלום להשוואה",
    "mode": "הצג את השינויים כ-",
    "method": "שיטה",
    "changeMethodText": "חשב את השינויים ב-",
    "positive": "חיובי",
    "negative": "שלילי",
    "threshold": "ערך סף",
    "difference": "שונות",
    "apply": "בצע",
    "clear": "נקה",
    "nir": "ערוץ אינפרא-אדום",
    "red": "ערוץ אדום",
    "green": "ערוץ ירוק",
    "swir": "ערוץ אינפרא-אדום בגלים קצרים",
    "band1": "ערוץ A",
    "band2": "ערוץ B",
    "mode1": "תמונת הבדלים",
    "mode2": "מיסוך הבדלים",
    "mode3": "מיסוך סף",
    "method1": "בהירות התצלום",
    "method2": "אינדקס צמחייה",
    "method3": "צמחיה מותאמת לקרקע. אינדקס",
    "method4": "אינדקס מים",
    "method5": "אינדקס שריפה",
    "method6": "פחות מהסף שלי",
    "method7": "יותר מהסף שלי",
    "method8": "ערוץ יחיד",
    "method9": "אינדקס מותאם אישית",
    "dropDown": "הצג תמונות ברשימה נפתחת.",
    "transparency": "שקיפות (תוצאות)",
    "slider": "הצג תמונות בסרגל.",
    "error1": "השדה לא צוין.",
    "error2": "אין שדה OBJECTID.",
    "error3": "אין שדה קטגוריה.",
    "error4": "לא ניתן לבצע פעולה על שכבה.",
    "error5": "שירותים לפני 10.2.1 לא נתמכים.",
    "error6": "אין סצנות בתיחום הנוכחי.",
    "error7": "בחר שני תצלומים שונים.",
    "error8": "טווח תאריכים לא חוקי: תאריך ההתחלה צריך להיות מוקדם מתאריך הסיום.",
    "indexText": "אפשרויות אינדקס מתקדמות",
    "date": "תאריך",
    "areaText": "צמצום / הגדלת אזור",
    "areaText2": "אזור שרוף / לאחר שריפה של צמיחה מחדש",
    "areaText3": "אזור מכוסה",
    "unit": "ק\"מ",
    "swipe": "החלף",
    "imageLabel": "תמונות",
    "extent": "צייר פוליגונים כדי להגדיר את התיחום",
    "colorPicker": "בורר צבעים",
    "refresh": "לחצן רענון",
    "refreshTooltip": "רענן את רשימת התצלומים על בסיס התיחום הנוכחי.",
    "colorpickerText": "בחר צבע עבור המיסוך שלך",
    "sliderText": "הגדר את הסף שלך",
    "maskModeText": "אילו ערכים עלי למסך?",
    "positiveSliderText": "הגדר את הגידול המינימלי הנדרש בין התצלומים, לפני שהאזור יוצג בצבע ירוק.",
    "negativeSliderText": "הגדר את הצמצום המינימלי הנדרש בין התצלומים, לפני שהאזור יוצג בצבע מג'נטה.",
    "updateResult": "התמונה שלך השתנתה; לחץ על 'החל' לעדכון הניתוח."
  },
  "editor": {
    "title": "עריכה",
    "error": "לא נמצאה שכבה לעריכה.",
    "error1": "הגישה נדחתה. לא ניתן לערוך את השכבות.",
    "text": "בחר סמל ולחץ על המפה."
  },
  "measurement": {
    "title": "מדידת תמונות",
    "error": "אפשרויות מדידה אינן נתמכות."
  },
  "export": {
    "title": "ייצא",
    "mode": "שמור מיקום",
    "titleText": "כותרת (נדרשת)",
    "description": "תאור",
    "tags": "תגים (נדרשים)",
    "preview": "תצוגה מקדימה",
    "submit": "שמירה",
    "cancel": "בטל",
    "pixel": "גודל פיקסל",
    "outsr": "יחוס מרחבי לנתוני הפלט",
    "renderer": "אפשרויות הורדת TIFF",
    "formatText1": "כפי שמוצג",
    "formatText2": "נתונים גולמיים (כל הערוצים)",
    "extent": "צייר פוליגון כדי להגדיר את התיחום",
    "drawText": "(לחץ על תצלום כדי להתחיל)",
    "text": "לא ניתן להציג נתונים גולמיים במציגי תמונות סטנדרטיים. פתח ב-ArcGIS Pro.",
    "error": "אין שכבות גלויות של תצלומים במפה.",
    "error1": "הכותרת היא שדה חובה.",
    "error2": "התגים נדרשים.",
    "error3": "הערך PixelSize של הייצוא מוגבל ל-",
    "error4": "עבור תיחום זה.",
    "error5": "הזן ערך מספרי חוקי.",
    "error6": "לא ניתן לייצא את התצלום שלך כעת.",
    "thumbnailError": "אין תמונה ממוזערת זמינה",
    "advance": "אפשרויות שמירה מתקדמות",
    "modeOption1": "שמור בפורטל",
    "modeOption2": "שמור בדיסק",
    "default": "ברירת מחדל",
    "utm": "אזור WGS84 UTM",
    "layer": "שכבה",
    "mercator": "WebMercatorAS",
    "folder": "בחר תיקייה"
  },
  "imageDate": {
    "label": "תאריך תמונה"
  },
  "about": {
    "title": "אודות"
  },
  "bookmark": {
    "title": "סימניות",
    "default": "ברירת מחדל",
    "selectBookmark": "בחר סימניות",
    "add": "הוסף סימניות",
    "addTitle": "הזן כותרת",
    "addBtn": "הוסף זמני"
  },
  "coordinate": {
    "_widgetLabel": "מערכת קואורדינטות",
    "hintMessage": "הקש על המפה כדי לקבל קואורדינטות.",
    "defaultLabel": "ברירת מחדל",
    "realtimeLabel": "הזז את העכבר כדי לקבל קואורדינטות",
    "computing": "מחשב...",
    "latitudeLabel": "קו רוחב",
    "longitudeLabel": "קו אורך",
    "loading": "טוען...",
    "enableClick": "לחץ כדי להפעיל לחיצה על המפה לקבלת קואורדינטות",
    "disableClick": "לחץ כדי לבטל לחיצה על המפה לקבלת קואורדינטות",
    "Default": "ברירת מחדל",
    "Inches": "אינצ׳ים",
    "Foot": "רגליים",
    "Foot_US": "Feet_US",
    "Yards": "יארדים",
    "Miles": "מייל",
    "Nautical_Miles": "מיילים ימיים",
    "Millimeters": "מילימטרים",
    "Centimeters": "סנטימטרים",
    "Meter": "מטרים",
    "Kilometers": "קילומטרים",
    "Decimeters": "דצימטרים",
    "Decimal_Degrees": "מעלות",
    "Degree_Minutes_Seconds": "מעלות דקות שניות",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});