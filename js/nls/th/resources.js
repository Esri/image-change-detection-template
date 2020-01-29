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
    "error": "ไม่สามารถสร้างแผนที่ได้",
    "licenseError": {
      "message": "บัญชีผู้ใช้ของคุณไม่มีใบอนุญาตในการใช้งานแอปที่กำหนดค่าได้ซึ่งไม่ใช่แบบสาธารณะ โปรดขอให้ผู้ดูแลองค์กรของคุณกำหนดประเภทผู้ใช้ที่มีใบอนุญาตแอป Essential หรือแอดออนแอป Essential ให้กับคุณ",
      "title": "ไม่มีใบอนุญาต"
    }
  },
  "nav": {
    "close": "ปิด"
  },
  "basemap": {
    "title": "แกลเลอรี่แผนที่ฐาน"
  },
  "operationalLayers": {
    "title": "ชั้นข้อมูลกระบวนการทำงาน",
    "error": "ไม่มีเลเยอร์การดำเนินงานในแผนที่"
  },
  "imageMask": {
    "title": "มาสก์ภาพ",
    "toolText": "เครื่องมือ",
    "tool1": "สิ่งปกคลุม",
    "tool2": "เปลี่ยนการตรวจจับ",
    "layer": "ชั้นข้อมูล",
    "layerText": "เลือกภาพของคุณ",
    "basemap": "แผนที่ฐาน",
    "maskImageSelector": "เลือกภาพที่ต้องการ",
    "imageSelectorText": "เลือกภาพสองภาพที่แตกต่างกันเพื่อเปรียบเทียบ",
    "changeText": "กำหนดค่าการตรวจจับการเปลี่ยนแปลง",
    "maskText": "กำหนดค่ามาสก์",
    "zoom": "ขยายไปยังภาพที่เลือก",
    "primary": "ภาพหลัก",
    "comparison": "ภาพเปรียบเทียบ",
    "mode": "แสดงภาพการเปลี่ยนแปลงในรูปแบบ",
    "method": "วิธีการ",
    "changeMethodText": "คำนวณการเปลี่ยนแปลงในรูปแบบ",
    "positive": "บวก",
    "negative": "ลบ",
    "threshold": "การเริ่มต้น",
    "difference": "แตกต่าง",
    "apply": "นำไปใช้",
    "clear": "เคลียร์",
    "nir": "แบนด์อินฟราเรด",
    "red": "แบนด์สีแดง",
    "green": "แบนด์สีเขียว",
    "swir": "อินฟราเรดแบนด์คลื่นสั้น",
    "band1": "แบนด์ A",
    "band2": "แบนด์ B",
    "mode1": "ภาพความแตกต่าง",
    "mode2": "มาสก์ความแตกต่าง",
    "mode3": "มาสก์เกณฑ์",
    "method1": "ความสว่างของภาพ",
    "method2": "ดัชนีพืช",
    "method3": "พืชดินดัดแปลง อินเด็กซ์",
    "method4": "ดัชนีน้ำ",
    "method5": "ดัชนีการเผาไหม้",
    "method6": "ต่ำกว่าเกณฑ์ของฉัน",
    "method7": "สูงกว่าเกณฑ์ของฉัน",
    "method8": "แบนด์เดียว",
    "method9": "ดัชนีที่กำหนดเอง",
    "dropDown": "แสดงรูปภาพในรายการตัวเลือก",
    "transparency": "โปร่งใส (ผลลัพธ์)",
    "slider": "แสดงภาพบนแถบเลื่อน",
    "error1": "ฟิลด์ไม่ได้ถูกระบุ",
    "error2": "ไม่มีฟิลด์ OBJECTID",
    "error3": "ไม่มีฟิลด์ Category",
    "error4": "ไม่สามารถดำเนินการกับเลเยอร์ได้",
    "error5": "พรีเซอร์วิส 10.2.1 ไม่สนับสนุน",
    "error6": "ไม่มีซีนในขอบเขตปัจจุบัน",
    "error7": "โปรดเลือกภาพสองภาพที่แตกต่างกัน",
    "error8": "ช่วงวันที่ไม่ถูกต้อง: วันที่เริ่มต้นต้องน้อยกว่าวันที่สิ้นสุด",
    "indexText": "ตัวเลือกดัชนีขั้นสูง",
    "date": "วันที่",
    "areaText": "ลด / เพิ่มพื้นที่",
    "areaText2": "พื้นที่ถูกเผาไหม้ / เพาะปลูกหลังเผาไหม้",
    "areaText3": "พื้นที่ที่ครอบคลุม",
    "unit": "กม",
    "swipe": "กราดภาพ",
    "imageLabel": "ภาพ",
    "extent": "วาดโพลิกอนเพื่อกำหนดขอบเขต",
    "colorPicker": "ตัวเลือกสี",
    "refresh": "ปุ่มรีเฟรช",
    "refreshTooltip": "รีเฟรชรายการภาพโดยอิงตามขอบเขตปัจจุบัน",
    "colorpickerText": "เลือกสีสำหรับมาสก์ของคุณ",
    "sliderText": "ตั้งเกณฑ์ของคุณ",
    "maskModeText": "ฉันควรมาสก์ค่าใด",
    "positiveSliderText": "ตั้งค่าการเพิ่มขั้นต่ำที่จำเป็นระหว่างภาพ ก่อนที่จะแสดงพื้นที่เป็นสีเขียว",
    "negativeSliderText": "ตั้งค่าการลดขั้นต่ำที่จำเป็นระหว่างภาพ ก่อนที่จะแสดงพื้นที่เป็นสีม่วงแดง",
    "updateResult": "มีการเปลี่ยนแปลงภาพของคุณ คลิก ใช้ เพื่ออัปเดตการวิเคราะห์"
  },
  "editor": {
    "title": "เครื่องมือแก้ไข",
    "error": "ไม่พบชั้นการแก้ไข",
    "error1": "การเข้าถึงถูกปฏิเสธ ไม่สามารถแก้ไขชั้นได้",
    "text": "เลือกสัญลักษณ์แล้วคลิกบนแผนที่"
  },
  "measurement": {
    "title": "การวัดภาพ",
    "error": "ไม่รองรับความสามารถในการดูแลรักษา"
  },
  "export": {
    "title": "ส่งออก",
    "mode": "บันทึกตำแหน่งที่ตั้ง",
    "titleText": "ชื่อ (จำเป็น)",
    "description": "คำอธิบาย",
    "tags": "แท็ก (จำเป็น)",
    "preview": "ภาพตัวอย่าง",
    "submit": "บันทึก",
    "cancel": "ยกเลิก",
    "pixel": "ขนาดพิกเซล",
    "outsr": "ผลลัพธ์การอ้างอิงเชิงพื้นที่",
    "renderer": "ตัวเลือกดาวน์โหลด TIFF",
    "formatText1": "ตามที่ปรากฏ",
    "formatText2": "ข้อมูลดิบ (แถบทั้งหมด)",
    "extent": "วาดโพลิกอนเพื่อกำหนดขอบเขต",
    "drawText": "(คลิกที่ภาพเพื่อเริ่ม)",
    "text": "ไม่สามารถแสดงข้อมูลดิบด้วยโปรแกรมดูภาพมาตรฐานได้ เปิดด้วย ArcGIS Pro",
    "error": "ไม่มีเลเยอร์ภาพที่มองเห็นได้ในแผนที่",
    "error1": "ต้องระบุชื่อ",
    "error2": "ต้องระบุแท็ก",
    "error3": "PixelSize ของการส่งออกจะถูกจำกัดไว้ที่",
    "error4": "สำหรับขอบเขตนี้",
    "error5": "โปรดป้อนค่าตัวเลขที่ถูกต้อง",
    "error6": "ไม่สามารถส่งออกภาพของคุณได้ในครั้งนี้",
    "thumbnailError": "ไม่มีภาพขนาดย่อที่พร้อมใช้งาน",
    "advance": "ตัวเลือกการบันทึกขั้นสูง",
    "modeOption1": "บันทึกลงในพอร์ทัล",
    "modeOption2": "บันทึกลงในดิสก์",
    "default": "ค่าตั้งต้น",
    "utm": "โซน WGS84 UTM",
    "layer": "ชั้นข้อมูล",
    "mercator": "WebMercatorAS",
    "folder": "เลือกโฟลเดอร์"
  },
  "imageDate": {
    "label": "วันที่ของภาพ"
  },
  "about": {
    "title": "เกี่ยวกับ"
  },
  "bookmark": {
    "title": "บุ๊คมาร์ค",
    "default": "ค่าตั้งต้น",
    "selectBookmark": "เลือกบุ๊กมาร์ก",
    "add": "เพิ่มบุ๊กมาร์ก",
    "addTitle": "ใส่ชื่อ",
    "addBtn": "เพิ่มชั่วคราว"
  },
  "coordinate": {
    "_widgetLabel": "ค่าพิกัด",
    "hintMessage": "คลิกที่แผนที่เพื่อหาค่าพิกัด",
    "defaultLabel": "ค่าตั้งต้น",
    "realtimeLabel": "เลื่อนเม้าส์ไปบนแผนที่",
    "computing": "กำลังคำนวณ...",
    "latitudeLabel": "ละติจูด",
    "longitudeLabel": "ลองจิจูด",
    "loading": "กำลังโหลด..",
    "enableClick": "คลิกเพื่อสามารถใช้งานบนแผนที่เพื่อได้รับค่าพิกัด",
    "disableClick": "คลิกเพื่อไม่สามารถใช้งานบนแผนที่เพื่อได้รับค่าพิกัด",
    "Default": "ค่าตั้งต้น",
    "Inches": "นิ้ว",
    "Foot": "ฟุต",
    "Foot_US": "Feet_US",
    "Yards": "หลา",
    "Miles": "ไมล์",
    "Nautical_Miles": "ไมล์ทะเล",
    "Millimeters": "มิลลิเมตร",
    "Centimeters": "เซ็นติเมตร",
    "Meter": "เมตร",
    "Kilometers": "กิโลเมตร",
    "Decimeters": "เดซิเมตร",
    "Decimal_Degrees": "องศา",
    "Degree_Minutes_Seconds": "องศา ลิปดา ฟิลิปดา",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});