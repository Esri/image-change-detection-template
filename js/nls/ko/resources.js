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
    "error": "맵을 생성할 수 없음"
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
  "layerSelector": {
    "active": "활성 레이어",
    "comparison": "비교 레이어",
    "other": "기타",
    "result": "결과",
    "title": "레이어 선택기",
    "resultSave": "비교 레이어 목록에서 결과 레이어 추가",
    "copy": "활성 레이어를 비교 레이어에 복사합니다.",
    "swap": "활성 레이어와 비교 레이어를 서로 바꿉니다."
  },
  "renderer": {
    "title": "렌더러",
    "stretch": "스트래치 매개변수",
    "stretchType": "스트래치 유형",
    "dra": "DRA",
    "draText": "현재 뷰를 기반으로 한 동적 범위 조정 업데이트 개선 사항",
    "gamma": "감마",
    "apply": "적용",
    "top": "위쪽 제외",
    "bottom": "아래쪽 제외",
    "topText": " 히스토그램의 상위 x 백분율(%) 제외",
    "bottomText": " 히스토그램의 하위 x 백분율(%) 제외",
    "stdDev": "표준 편차의 수",
    "layer": "현재 레이어",
    "error": "맵에 보이는 이미지 레이어가 없습니다."
  },
  "imageSelector": {
    "title": "이미지 선택기",
    "enable": "이미지 선택기 활성화",
    "secondary": "활성 레이어를 비교 레이어로 설정합니다.",
    "dropDown": "이미지를 드롭다운 목록으로 보여줍니다.",
    "refresh": "현재 범위를 기반으로 쿼리를 새로 고침합니다.",
    "show": "보기",
    "age": "나이",
    "zoom": "확대하여 이미지를 선택합니다.",
    "error": "맵에 보이는 이미지 레이어가 없습니다.",
    "error1": "필드가 지정되지 않았습니다.",
    "error2": "OBJECTID 필드가 없습니다.",
    "error3": "범주 필드가 없습니다.",
    "error4": "레이어에 대해 작업을 수행할 수 없습니다.",
    "error5": "버전 10.2.1 이전 서비스는 지원되지 않습니다.",
    "error6": "현재 범위에 씬이 없습니다.",
    "error7": "선택한 풋프린트의 수가 20개를 넘습니다. 처음 20개만 표시됩니다. 경고 메시지를 다시 보지 않으려면 확인을 누르세요.",
    "slider": "슬라이더의 이미지를 표시합니다."
  },
  "changeDetection": {
    "title": "변경 감지",
    "mode": "모드",
    "method": "메소드",
    "positive": "양의 차이",
    "negative": "음의 차이",
    "threshold": "임계치",
    "difference": "차이",
    "apply": "적용",
    "error": "변경 감지는 서비스는 동일하지만 날짜가 다른 2개의 이미지에 사용됩니다.<br />먼저, 이미지 선택기를 사용하여 첫 번째 이미지를 선택합니다.<br />그런 다음, <img src='images/down.png' height='14'/> 버튼을 클릭하여 두 번째 이미지를 선택합니다.<br />이 컨트롤로 돌아가서 변경 감지를 진행합니다."
  },
  "editor": {
    "title": "편집자",
    "error": "편집 레이어를 선택하지 않았습니다.",
    "error1": "접근이 거부되었습니다. 레이어를 편집할 수 없습니다."
  },
  "measurement": {
    "title": "이미지 측정",
    "error": "측정 기능이 지원되지 않습니다."
  },
  "export": {
    "title": "내보내기",
    "mode": "모드",
    "titleText": "제목",
    "description": "Description",
    "tags": "태그",
    "submit": "제출",
    "pixel": "픽셀 크기",
    "outsr": "결과 공간 참조",
    "renderer": "현재 렌더러",
    "extent": "범위 정의",
    "text": "현재 렌더러를 선택한 경우 렌더링이<br /> 내보내지며 , 선택하지 않은 경우에는 원본 데이터 값이<br/> 내보내집니다.",
    "error": "맵에 보이는 이미지 레이어가 없습니다.",
    "error1": "제목이 필요합니다.",
    "error2": "태그가 필요합니다."
  },
  "compare": {
    "title": "비교",
    "slider": "투명도 슬라이더",
    "hSwipe": "수평 스와이프",
    "vSwipe": "수직 스와이프",
    "error": "비교할 이미지 레이어가 보이지 않습니다."
  }
});