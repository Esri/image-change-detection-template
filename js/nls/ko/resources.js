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
    "error": "맵을 생성할 수 없음",
    "licenseError": {
      "message": "귀하의 계정에는 공개 상태가 아닌 구성 설정 앱을 사용할 수 있는 라이선스가 없습니다. 필수 앱 또는 애드온 필수 앱 라이선스가 포함된 사용자 유형을 업무 지시하려면 기관 관리자에게 문의하세요.",
      "title": "라이선스가 없음"
    }
  },
  "nav": {
    "close": "닫기"
  },
  "basemap": {
    "title": "베이스맵 갤러리"
  },
  "operationalLayers": {
    "title": "운영 레이어",
    "error": "맵에 운영 레이어가 없습니다."
  },
  "imageMask": {
    "title": "이미지 마스크",
    "toolText": "도구",
    "tool1": "마스크",
    "tool2": "변경 감지",
    "layer": "레이어",
    "layerText": "영상을 선택합니다.",
    "basemap": "베이스맵",
    "maskImageSelector": "특정 이미지 선택",
    "imageSelectorText": "비교할 두 개의 서로 다른 이미지를 선택합니다.",
    "changeText": "변경 감지를 구성합니다.",
    "maskText": "마스크를 구성합니다.",
    "zoom": "확대하여 이미지를 선택합니다.",
    "primary": "기본 이미지",
    "comparison": "비교 이미지",
    "mode": "다음으로 변경 사항 시각화",
    "method": "메소드",
    "changeMethodText": "다음의 변경 사항 계산",
    "positive": "양화",
    "negative": "음화",
    "threshold": "임계치",
    "difference": "차이",
    "apply": "적용",
    "clear": "지우기",
    "nir": "Infrared 밴드",
    "red": "Red 밴드",
    "green": "Green 밴드",
    "swir": "Short-wave Infrared 밴드",
    "band1": "밴드 A",
    "band2": "밴드 B",
    "mode1": "감산 영상",
    "mode2": "감산 마스크",
    "mode3": "임계값 마스크",
    "method1": "이미지 밝기",
    "method2": "식생 지수",
    "method3": "토양 보정 식생 색인",
    "method4": "수자원 지수",
    "method5": "화재 피해 규모 지수",
    "method6": "내 임계값보다 작음",
    "method7": "내 임계값보다 큼",
    "method8": "단일 밴드",
    "method9": "사용자 지정 색인",
    "dropDown": "이미지를 드롭다운 목록으로 보여줍니다.",
    "transparency": "투명도(결과)",
    "slider": "슬라이더의 이미지를 표시합니다.",
    "error1": "필드가 지정되지 않았습니다.",
    "error2": "OBJECTID 필드가 없습니다.",
    "error3": "범주 필드가 없습니다.",
    "error4": "레이어에 대해 작업을 수행할 수 없습니다.",
    "error5": "버전 10.2.1 이전 서비스는 지원되지 않습니다.",
    "error6": "현재 범위에 씬이 없습니다.",
    "error7": "서로 다른 두 개의 이미지를 선택하세요.",
    "error8": "유효하지 않은 날짜 범위: 시작일은 종료일보다 이전이어야 합니다.",
    "indexText": "고급 색인 옵션",
    "date": "날짜",
    "areaText": "영역 감소/증가",
    "areaText2": "화재 피해/화재 후 재생 영역",
    "areaText3": "포함된 영역",
    "unit": "킬로미터",
    "swipe": "스와이프",
    "imageLabel": "이미지",
    "extent": "폴리곤을 그려 범위 정의",
    "colorPicker": "색상 선택기",
    "refresh": "새로 고침 버튼",
    "refreshTooltip": "현재 범위를 기반으로 이미지 목록을 새로 고침합니다.",
    "colorpickerText": "마스크에 해당하는 색상을 선택합니다.",
    "sliderText": "임계값 설정",
    "maskModeText": "어떤 값을 마스킹하시겠습니까?",
    "positiveSliderText": "영역을 녹색으로 표시하기 전에 이미지 사이에 필요한 최소 증가 값을 설정합니다.",
    "negativeSliderText": "영역을 자홍색으로 표시하기 전에 이미지 사이에 필요한 최소 감소 값을 설정합니다.",
    "updateResult": "이미지가 변경되었습니다. 적용을 클릭하여 분석을 업데이트하세요."
  },
  "editor": {
    "title": "편집자",
    "error": "편집 레이어를 찾을 수 없습니다.",
    "error1": "접근 거부. 레이어는 편집할 수 없습니다.",
    "text": "맵에서 심볼을 선택한 후 클릭합니다."
  },
  "measurement": {
    "title": "이미지 측정",
    "error": "측정 기능이 지원되지 않습니다."
  },
  "export": {
    "title": "내보내기",
    "mode": "위치 저장",
    "titleText": "제목(필수)",
    "description": "설명",
    "tags": "태그(필수)",
    "preview": "미리 보기",
    "submit": "저장",
    "cancel": "취소",
    "pixel": "픽셀 크기",
    "outsr": "결과 공간 참조",
    "renderer": "TIFF 다운로드 옵션",
    "formatText1": "표시된 대로",
    "formatText2": "원시 데이터(모든 밴드)",
    "extent": "폴리곤을 그려 범위 정의",
    "drawText": "(시작할 이미지 클릭)",
    "text": "표준 사진 뷰어를 사용하여 원시 데이터를 표시할 수 없습니다. ArcGIS Pro로 엽니다.",
    "error": "맵에 보이는 이미지 레이어가 없습니다.",
    "error1": "제목이 필요합니다.",
    "error2": "태그가 필요합니다.",
    "error3": "내보내기의 픽셀 크기는",
    "error4": "이 범위로 제한됩니다.",
    "error5": "올바른 숫자 값을 입력하세요.",
    "error6": "현재 이미지를 가져올 수 없습니다.",
    "thumbnailError": "사용 가능한 썸네일이 없습니다.",
    "advance": "고급 저장 옵션",
    "modeOption1": "포털에 저장",
    "modeOption2": "디스크에 저장",
    "default": "기본",
    "utm": "WGS84 UTM 구역",
    "layer": "레이어",
    "mercator": "WebMercatorAS",
    "folder": "폴더 선택"
  },
  "imageDate": {
    "label": "이미지 날짜"
  },
  "about": {
    "title": "정보"
  },
  "bookmark": {
    "title": "북마크",
    "default": "기본",
    "selectBookmark": "북마크 선택",
    "add": "북마크 추가",
    "addTitle": "제목 입력",
    "addBtn": "임시 추가"
  },
  "coordinate": {
    "_widgetLabel": "좌표",
    "hintMessage": "좌표를 가져오려면 맵 클릭",
    "defaultLabel": "기본",
    "realtimeLabel": "좌표를 가져오려면 마우스를 이동하세요.",
    "computing": "계산 중...",
    "latitudeLabel": "위도",
    "longitudeLabel": "경도",
    "loading": "불러오는 중...",
    "enableClick": "맵을 클릭하여 좌표 가져오기를 활성화하려면 클릭",
    "disableClick": "맵을 클릭하여 좌표 가져오기를 비활성화하려면 클릭",
    "Default": "기본",
    "Inches": "인치",
    "Foot": "피트",
    "Foot_US": "피트(US)",
    "Yards": "야드",
    "Miles": "마일",
    "Nautical_Miles": "해리",
    "Millimeters": "밀리미터",
    "Centimeters": "센티미터",
    "Meter": "미터",
    "Kilometers": "킬로미터",
    "Decimeters": "데시미터",
    "Decimal_Degrees": "도",
    "Degree_Minutes_Seconds": "도분초",
    "MGRS": "MGRS",
    "USNG": "USNG"
  }
});