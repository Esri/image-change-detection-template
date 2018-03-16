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
    "error": "Không thể tạo bản đồ"
  },
  "nav": {
    "close": "Đóng"
  },
  "basemap": {
    "title": "Bộ sưu tập bản đồ nền"
  },
  "operationalLayers": {
    "title": "Các lớp hoạt động",
    "error": "Không có lớp hoạt động nào trong bản đồ."
  },
  "layerSelector": {
    "active": "Lớp hoạt động",
    "comparison": "Lớp so sánh",
    "other": "Khác",
    "result": "Kết quả",
    "title": "Trình lựa chọn lớp",
    "resultSave": "Thêm lớp Kết quả trong danh sách lớp so sánh",
    "copy": "Sao chép lớp hoạt động vào lớp so sánh.",
    "swap": "Hoán đổi lớp hoạt động và lớp so sánh."
  },
  "renderer": {
    "title": "Trình kết xuất",
    "stretch": "Các thông số kéo giãn",
    "stretchType": "Loại Kéo giãn",
    "dra": "DRA",
    "draText": "Chức năng Điều chỉnh Phạm vi Động được cải tiến dựa trên trình xem hiện tại",
    "gamma": "Gamma",
    "apply": "Áp dụng",
    "top": "Loại trừ đỉnh",
    "bottom": "Loại trừ đáy",
    "topText": " Loại trừ tỷ lệ phần trăm đỉnh x của biểu đồ tần số",
    "bottomText": " Loại trừ tỷ lệ phần trăm đáy x của biểu đồ tần số",
    "stdDev": "# của độ lệch chuẩn",
    "layer": "Lớp hiện tại",
    "error": "Không có Lớp Hình ảnh hiển thị nào trong bản đồ."
  },
  "imageSelector": {
    "title": "Trình lựa chọn hình ảnh",
    "enable": "Bật Trình lựa chọn Hình ảnh",
    "secondary": "Thiết lập lớp hoạt động thành Lớp So sánh.",
    "dropDown": "Hiển thị hình ảnh trong danh sách xổ xuống.",
    "refresh": "Làm mới lại câu truy vấn dựa trên phạm vi hiện tại.",
    "show": "Hiển thị",
    "age": "Tuổi",
    "zoom": "Phóng to để chọn hình ảnh.",
    "error": "Không có Lớp Hình ảnh hiển thị nào trong bản đồ.",
    "error1": "Trường không được chỉ định.",
    "error2": "Không có trường OBJECTID.",
    "error3": "Không có trường Thể loại.",
    "error4": "Không thể thực hiện hoạt động cho lớp dữ liệu.",
    "error5": "Các dịch vụ trước phiên bản 10.2.1 sẽ không được hỗ trợ.",
    "error6": "Không có scene nào trong phạm vi hiện tại.",
    "error7": "Số điểm được chọn vượt quá 20 điểm. Chỉ 20 điểm đầu tiên mới được hiển thị. Nhấn OK để không bị cảnh bảo lại.",
    "slider": "Hiển thị hình ảnh trên thanh trượt."
  },
  "changeDetection": {
    "title": "Phát hiện Thay đổi",
    "mode": "Chế độ",
    "method": "Phương pháp",
    "positive": "Chênh lệch dương",
    "negative": "Chênh lệch âm",
    "threshold": "Ngưỡng",
    "difference": "Chênh lệch",
    "apply": "Áp dụng",
    "error": "Chức năng Phát hiện Thay đổi hoạt động với hai hình ảnh từ các ngày khác nhau từ cùng một dịch vụ.<br />Trước tiên sử dụng Trình lựa chọn Hình ảnh để xác định ra một hình ảnh,<br />sau đó nhấp vào nút <img src='images/down.png' height='14'/> và chọn hình ảnh thứ hai.<br />Trở lại bảng điều khiển này để tiếp tục với việc phát hiện thay đổi."
  },
  "editor": {
    "title": "Trình biên tập",
    "error": "Không có Lớp Chỉnh sửa nào được chọn.",
    "error1": "Truy cập bị từ chối. Không thể chỉnh sửa các lớp."
  },
  "measurement": {
    "title": "Đo lường Hình ảnh",
    "error": "Khả năng Đo lường không được hỗ trợ."
  },
  "export": {
    "title": "Xuất",
    "mode": "Chế độ",
    "titleText": "Tiêu đề",
    "description": "Mô tả",
    "tags": "Thẻ",
    "submit": "Gửi",
    "pixel": "Kích thước Pixel",
    "outsr": "Tham chiếu Không gian Đầu ra",
    "renderer": "Trình kết xuất Hiện tại",
    "extent": "Xác định Phạm vi",
    "text": "Nếu Trình kết xuất Hiện tại được đánh dấu chọn, việc kết xuất<br /> sẽ được xuất, nếu không giá trị dữ liệu ban đầu<br/> sẽ được xuất ra.",
    "error": "Không có lớp hình ảnh hiển thị nào trên bản đồ.",
    "error1": "Cần có tiêu đề.",
    "error2": "Cần có (các) Thẻ."
  },
  "compare": {
    "title": "So sánh",
    "slider": "Thanh trượt Trong suốt",
    "hSwipe": "Trượt Ngang",
    "vSwipe": "Trượt dọc",
    "error": "Không có Lớp Hình ảnh hiển thị nào có sẵn để so sánh."
  }
});