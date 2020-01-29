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
    "error": "Không thể tạo bản đồ",
    "licenseError": {
      "message": "Tài khoản của bạn không được cấp phép để sử dụng ứng dụng có thể cấu hình mà không được công khai. Vui lòng yêu cầu quản trị viên của tổ chức bạn gán cho bạn loại người dùng nào có bao gồm các ứng dụng thiết yếu hoặc có giấy phép sử dụng các ứng dụng thiết yếu bổ trợ.",
      "title": "Không được cấp phép"
    }
  },
  "nav": {
    "close": "Đóng"
  },
  "basemap": {
    "title": "Bộ sưu tập bản đồ nền"
  },
  "operationalLayers": {
    "title": "Các lớp chuyên đề",
    "error": "Không có lớp chuyên đề nào trong bản đồ."
  },
  "imageMask": {
    "title": "Image Mask",
    "toolText": "Công cụ",
    "tool1": "Mặt nạ",
    "tool2": "Phát hiện Thay đổi",
    "layer": "Lớp",
    "layerText": "Chọn hình ảnh của bạn.",
    "basemap": "Bản đồ nền",
    "maskImageSelector": "Chọn hình ảnh cụ thể",
    "imageSelectorText": "Chọn hai hình ảnh khác nhau để so sánh.",
    "changeText": "Cấu hình phát hiện thay đổi.",
    "maskText": "Cấu hình mặt nạ.",
    "zoom": "Phóng to để chọn hình ảnh.",
    "primary": "Hình ảnh chính",
    "comparison": "Hình ảnh so sánh",
    "mode": "Trực quan hóa các thay đổi dưới dạng",
    "method": "Phương pháp",
    "changeMethodText": "Tính toán các thay đổi theo",
    "positive": "Tích cực",
    "negative": "Tiêu cực",
    "threshold": "Ngưỡng",
    "difference": "Chênh lệch",
    "apply": "Áp dụng",
    "clear": "Xóa",
    "nir": "Dải sóng hồng ngoại",
    "red": "Dải sóng Red",
    "green": "Dải sóng Green",
    "swir": "Dải sóng hồng ngoại sóng ngắn",
    "band1": "Dải sóng A",
    "band2": "Dải sóng B",
    "mode1": "Sai phân ảnh",
    "mode2": "Sai phân mặt nạ",
    "mode3": "Ngưỡng mặt nạ",
    "method1": "Độ sáng của hình ảnh",
    "method2": "Chỉ số Thảm thực vật",
    "method3": "Thảm thực vật được điều chỉnh đất Chỉ số",
    "method4": "Chỉ số Nước",
    "method5": "Chỉ số Đốt cháy",
    "method6": "Thấp hơn ngưỡng của tôi",
    "method7": "Cao hơn ngưỡng của tôi",
    "method8": "Dải sóng đơn",
    "method9": "Chỉ mục Tùy chỉnh",
    "dropDown": "Hiển thị hình ảnh trong danh sách xổ xuống.",
    "transparency": "Độ trong suốt (kết quả)",
    "slider": "Hiển thị hình ảnh trên thanh trượt.",
    "error1": "Trường không được chỉ định.",
    "error2": "Không có trường OBJECTID.",
    "error3": "Không có trường Thể loại.",
    "error4": "Không thể thực hiện hoạt động cho lớp dữ liệu.",
    "error5": "Các dịch vụ trước phiên bản 10.2.1 sẽ không được hỗ trợ.",
    "error6": "Không có scene nào trong phạm vi hiện tại.",
    "error7": "Vui lòng chọn hai hình ảnh khác nhau.",
    "error8": "Phạm vi ngày không hợp lệ: Ngày Bắt đầu phải sớm hơn Ngày Kết thúc.",
    "indexText": "Tùy chọn chỉ số nâng cao",
    "date": "Ngày",
    "areaText": "Tăng / Giảm Khu vực",
    "areaText2": "Khu vực tái sinh Bị cháy / Sau cháy",
    "areaText3": "Khu vực được bao phủ",
    "unit": "km",
    "swipe": "Trượt nhanh",
    "imageLabel": "hình ảnh",
    "extent": "Vẽ vùng để xác định phạm vi",
    "colorPicker": "Trình chọn màu",
    "refresh": "Nút Làm mới",
    "refreshTooltip": "Làm mới danh sách hình ảnh dựa trên phạm vi hiện tại.",
    "colorpickerText": "Chọn màu sắc cho mặt nạ của bạn",
    "sliderText": "Đặt ngưỡng của bạn",
    "maskModeText": "Tôi nên che những giá trị nào?",
    "positiveSliderText": "Thiết lập mức tăng tối thiểu phải có giữa các hình ảnh khi khu vực được hiển thị màu xanh lục.",
    "negativeSliderText": "Thiết lập mức tăng tối thiểu phải có giữa các hình ảnh khi khu vực được hiển thị bằng màu đỏ tươi.",
    "updateResult": "Hình ảnh của bạn đã được thay đổi; bấm vào Apply (Áp dụng) để cập nhật phân tích."
  },
  "editor": {
    "title": "Trình biên tập",
    "error": "Không tìm thấy Lớp Chỉnh sửa nào.",
    "error1": "Truy cập bị từ chối. Không thể chỉnh sửa lớp.",
    "text": "Chọn một biểu tượng và bấm vào bản đồ."
  },
  "measurement": {
    "title": "Đo lường Hình ảnh",
    "error": "Khả năng Đo lường không được hỗ trợ."
  },
  "export": {
    "title": "Xuất",
    "mode": "Lưu vị trí",
    "titleText": "Tiêu đề (bắt buộc)",
    "description": "Mô tả",
    "tags": "Thẻ (bắt buộc)",
    "preview": "Xem trước",
    "submit": "Lưu",
    "cancel": "Hủy",
    "pixel": "Kích thước Pixel",
    "outsr": "Tham chiếu Không gian Đầu ra",
    "renderer": "Tùy chọn tải về TIFF",
    "formatText1": "Như hiển thị",
    "formatText2": "Dữ liệu thô (tất cả các dải sóng)",
    "extent": "Vẽ đa giác để xác định phạm vi",
    "drawText": "(bấm vào hình ảnh để bắt đầu)",
    "text": "Không thể hiển thị dữ liệu thô bằng chương trình xem ảnh thông thường. Vui lòng mở bằng ArcGIS Pro.",
    "error": "Không có lớp hình ảnh nào hiển thị trên bản đồ.",
    "error1": "Cần có tiêu đề.",
    "error2": "Cần có (các) Thẻ.",
    "error3": "Kích thước pixel của nội dung xuất ra được giới hạn đến",
    "error4": "cho phạm vi này.",
    "error5": "Vui lòng nhập giá trị số hợp lệ.",
    "error6": "Không thể xuất hình ảnh của bạn lúc này.",
    "thumbnailError": "Không có hình thu nhỏ",
    "advance": "Tùy chọn lưu nâng cao",
    "modeOption1": "Lưu vào cổng thông tin",
    "modeOption2": "Lưu vào ổ đĩa",
    "default": "Mặc định",
    "utm": "Khu vực UTM WGS84",
    "layer": "Lớp",
    "mercator": "WebMercatorAS",
    "folder": "Chọn thư mục"
  },
  "imageDate": {
    "label": "Ngày chụp hình ảnh"
  },
  "about": {
    "title": "Về"
  },
  "bookmark": {
    "title": "Đánh dấu",
    "default": "Mặc định",
    "selectBookmark": "Chọn đánh dấu",
    "add": "Thêm đánh dấu",
    "addTitle": "Nhập tiêu đề",
    "addBtn": "Thêm tạm thời"
  },
  "coordinate": {
    "_widgetLabel": "Tọa độ",
    "hintMessage": "Bấm vào bản đồ để lấy tọa độ",
    "defaultLabel": "Mặc định",
    "realtimeLabel": "Di chuyển chuột để lấy tọa độ",
    "computing": "Đang tính toán...",
    "latitudeLabel": "Vĩ độ",
    "longitudeLabel": "Kinh độ",
    "loading": "đang tải...",
    "enableClick": "Bấm để bật tùy chọn bấm vào bản đồ để nhận tọa độ",
    "disableClick": "Bấm để tắt tùy chọn bấm vào bản đồ để nhận tọa độ",
    "Default": "Mặc định",
    "Inches": "Inch",
    "Foot": "Bộ",
    "Foot_US": "Feet_US",
    "Yards": "Yard",
    "Miles": "Dặm",
    "Nautical_Miles": "Hải lý",
    "Millimeters": "Milimét",
    "Centimeters": "Xentimét",
    "Meter": "Mét",
    "Kilometers": "Kilômét",
    "Decimeters": "Đềximét",
    "Decimal_Degrees": "Độ",
    "Degree_Minutes_Seconds": "Độ phút giây",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});