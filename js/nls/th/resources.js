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
    "error": "ไม่สามารถสร้างแผนที่ได้"
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
  "layerSelector": {
    "active": "เลเยอร์ที่ทำงานอยู่",
    "comparison": "เลเยอร์เปรียบเทียบ",
    "other": "อื่นๆ",
    "result": "ผลลัพธ์",
    "title": "ตัวเลือกเลเยอร์",
    "resultSave": "เพิ่มเลเยอร์ผลลัพธ์ในรายการเลเยอร์เปรียบเทียบ",
    "copy": "คัดลอกเลเยอร์ที่ใช้งานเป็นเลเยอร์เปรียบเทียบ",
    "swap": "สลับเลเยอร์ที่ใช้งาน และเลเยอร์เปรียบเทียบ"
  },
  "renderer": {
    "title": "แสดง",
    "stretch": "Stretch พารามิเตอร์",
    "stretchType": "ประเภท Stretch",
    "dra": "ดีอาร์เอ",
    "draText": "การปรับช่วงไดนามิก อัปเดตตามมุมมองปัจจุบัน",
    "gamma": "แกรมม่า",
    "apply": "ใช้",
    "top": "ยกเว้นด้านบน",
    "bottom": "ยกเว้นด้านล่าง",
    "topText": " ยกเว้นด้านบน x เปอร์เซ็นต์ของฮิสโทแกรม",
    "bottomText": " ยกเว้นด้านล่าง x เปอร์เซ็นต์ของฮิสโทแกรม",
    "stdDev": "# of Std. Dev",
    "layer": "เลเยอร์ปัจจุบัน",
    "error": "ไม่มีเลเยอร์ภาพที่มองเห็นได้ในแผนที่"
  },
  "imageSelector": {
    "title": "ตัวเลือกรูปภาพ",
    "enable": "เปิดใช้งานตัวเลือกรูปภาพ",
    "secondary": "ตั้งค่าใช้งานเป็นเลเยอร์เปรียบเทียบ",
    "dropDown": "แสดงรูปภาพในรายการตัวเลือก",
    "refresh": "รีเฟรชข้อความค้นหาตามขอบเขตปัจจุบัน",
    "show": "แสดง",
    "age": "อายุ",
    "zoom": "ขยายไปยังภาพที่เลือก",
    "error": "ไม่มีเลเยอร์ภาพที่มองเห็นได้ในแผนที่",
    "error1": "ฟิลด์ไม่ได้ถูกระบุ",
    "error2": "ไม่มีฟิลด์ OBJECTID",
    "error3": "ไม่มีฟิลด์ Category",
    "error4": "ไม่สามารถดำเนินการกับเลเยอร์ได้",
    "error5": "พรีเซอร์วิส 10.2.1 ไม่สนับสนุน",
    "error6": "ไม่มีซีนในขอบเขตปัจจุบัน",
    "error7": "จำนวนทางเดินเท้าที่เลือกเกินกว่า 20 ตัว จะแสดงเฉพาะ 20 ตัวแรกเท่านั้น กดตกลงเพื่อไม่ให้เตือนอีกครั้ง",
    "slider": "แสดงภาพบนแถบเลื่อน"
  },
  "changeDetection": {
    "title": "เปลี่ยนการตรวจจับ",
    "mode": "โหมด",
    "method": "วิธีการ",
    "positive": "ความแตกต่างในเชิงบวก",
    "negative": "ความแตกต่างในเชิงลบ",
    "threshold": "การเริ่มต้น",
    "difference": "แตกต่าง",
    "apply": "ใช้",
    "error": "การตรวจจับการเปลี่ยนแปลงการทำงานร่วมกับภาพสองภาพ จากวันที่ต่างกันด้วยเซอร์วิสเดียวกัน.<br />ขั้นตอนแรกใช้ Image Selector เพื่อระบุภาพแรก,<br />จากนั้นคลิกบน <img src='images/down.png' height='14'/> ปุ่ม และเลือกภาพที่สอง.<br />กลับไปที่ตัวควบคุมนี้เพื่อดำเนินการตรวจหาการเปลี่ยนแปลง"
  },
  "editor": {
    "title": "เครื่องมือแก้ไข",
    "error": "ไม่ได้เลือกเลเยอร์การแก้ไข",
    "error1": "ปฏิเสธการเข้าใช้. ไม่สามารถแก้ไขเลเยอร์ได้"
  },
  "measurement": {
    "title": "การวัดภาพ",
    "error": "ไม่รองรับความสามารถในการดูแลรักษา"
  },
  "export": {
    "title": "ส่งออก",
    "mode": "โหมด",
    "titleText": "ชื่อ",
    "description": "คำอธิบาย",
    "tags": "แท็ก",
    "submit": "ส่ง",
    "pixel": "ขนาดพิกเซล",
    "outsr": "ผลลัพธ์การอ้างอิงเชิงพื้นที่",
    "renderer": "เครื่องแสดงผลปัจจุบัน",
    "extent": "กำหนดขอบเขต",
    "text": "หากเครื่องแสดงผลปัจจุบันมีการตรวจสอบ การแสดงผล<br /> ถูกส่องออก , ค่าข้อมูลเดิม<br/>จะถูกส่งออก",
    "error": "ไม่มีเลเยอร์ภาพที่มองเห็นได้ในแผนที่",
    "error1": "ต้องระบุชื่อ",
    "error2": "ต้องระบุแท็ก"
  },
  "compare": {
    "title": "เปรียบเทียบ",
    "slider": "ตัวเลื่อนโปร่งแสง",
    "hSwipe": "การเลื่อนกวาดในแนวนอน",
    "vSwipe": "การเลื่อนกวาดในแนวตั้ง",
    "error": "ไม่มีเลเยอร์ภาพที่สามารถมองเห็นได้สำหรับการเปรียบเทียบ"
  }
});