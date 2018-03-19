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
    "error": "无法创建地图"
  },
  "nav": {
    "close": "关闭"
  },
  "basemap": {
    "title": "底图库"
  },
  "operationalLayers": {
    "title": "业务图层",
    "error": "地图中无业务图层。"
  },
  "layerSelector": {
    "active": "活动图层",
    "comparison": "比较图层",
    "other": "其他",
    "result": "结果",
    "title": "图层选择器",
    "resultSave": "在比较图层列表中添加结果图层",
    "copy": "将活动图层复制到比较图层中。",
    "swap": "交换活动图层和比较图层。"
  },
  "renderer": {
    "title": "渲染器",
    "stretch": "拉伸参数",
    "stretchType": "拉伸类型",
    "dra": "DRA",
    "draText": "动态范围调整可根据当前视图更新增强内容",
    "gamma": "Gamma",
    "apply": "应用",
    "top": "排除顶部",
    "bottom": "排除底部",
    "topText": " 排除直方图的顶部 x 百分比",
    "bottomText": " 排除直方图的底部 x 百分比",
    "stdDev": "# 个标准差",
    "layer": "当前图层",
    "error": "地图中没有可见的影像图层。"
  },
  "imageSelector": {
    "title": "影像选择器",
    "enable": "启用影像选择器",
    "secondary": "将活动图层设置为比较图层。",
    "dropDown": "在下拉列表中显示影像。",
    "refresh": "根据当前范围刷新查询。",
    "show": "显示",
    "age": "年龄",
    "zoom": "放大以选择影像。",
    "error": "地图中没有可见的影像图层。",
    "error1": "未指定字段。",
    "error2": "无 OBJECTID 字段。",
    "error3": "无类别字段。",
    "error4": "无法对图层执行操作。",
    "error5": "不支持 10.2.1 版本前的服务。",
    "error6": "当前范围内无场景。",
    "error7": "所选覆盖区数量超过 20。将仅显示前 20 个覆盖区。按“确定”不再显示警告。",
    "slider": "在滑块上显示影像。"
  },
  "changeDetection": {
    "title": "变化检测",
    "mode": "模式",
    "method": "方法",
    "positive": "正差异",
    "negative": "负差异",
    "threshold": "阈值",
    "difference": "差异",
    "apply": "应用",
    "error": "变化检测所使用的两张影像来自同一服务的不同日期。<br />请先使用影像选择器定义一张影像，<br />然后单击 <img src='images/down.png' height='14'/> 按钮并选择第二张影像。<br />返回到此控件以继续执行变化检测。"
  },
  "editor": {
    "title": "编辑器",
    "error": "未选择编辑图层。",
    "error1": "访问被拒绝。无法编辑图层。"
  },
  "measurement": {
    "title": "影像测量",
    "error": "不支持测量功能。"
  },
  "export": {
    "title": "导出",
    "mode": "模式",
    "titleText": "标题",
    "description": "说明",
    "tags": "标签",
    "submit": "提交",
    "pixel": "像素大小",
    "outsr": "输出空间参考",
    "renderer": "当前渲染器",
    "extent": "定义范围",
    "text": "如果选中了当前渲染器，则导出渲染 <br />，否则将导出原始数据值 <br/>。",
    "error": "地图中没有可见的影像图层。",
    "error1": "标题为必填项。",
    "error2": "标签(一个或多个)为必填项。"
  },
  "compare": {
    "title": "比较",
    "slider": "透明度滑块",
    "hSwipe": "水平滑动",
    "vSwipe": "垂直滑动",
    "error": "没有可见的影像图层可供比较。"
  }
});