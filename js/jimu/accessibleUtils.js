///////////////////////////////////////////////////////////////////////////
// Copyright © Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////
define([
  'dojo/_base/lang',
  'dojo/_base/html',
  'dojo/query',
  'dojo/keys',
  'dojo/on'
], function(lang, html, query, keys, on) {
  var mo = {};

  mo.firstFocusNodeClass = 'firstFocusNode';
  mo.lastFocusNodeClass = 'lastFocusNode';

  mo.isInNavMode = function(){
    return html.hasClass(document.body, 'jimu-nav-mode') ? true : false;
  };

  //init class and event for first/last nodes
  mo.initTabIndexAndOrder = function(widgetObj){
    var firstNode = mo.getFirstFocusNode(widgetObj.domNode, widgetObj.inPanel);
    var lastNode = mo.getLastFocusNode(widgetObj.domNode);

    //for simple inpanel widgets, they don't need to change any code
    if(firstNode && !lastNode){
      lastNode = firstNode;
    }
    if(widgetObj.isController){
      firstNode = lastNode = null;
    }
    mo.initFirstFocusNode(widgetObj.domNode, firstNode);
    mo.initLastFocusNode(widgetObj.domNode, lastNode);
  };

  //There types of widgets:
  //1. common onScreen widgets, like HomeButton, ZoomSlider, Search(can't closeable), AT, ...
  //2. special onScreen widgets, like Search(in simulated panel)
  //3. inPanel widgets, like About, Filter, Bookmark, ...
  mo.isCommonOnScreenWidget = function(widgetObject){
    //The closeable attr doesn't exist on some inPanel widget in old version, so need add offPanel condition.
    return widgetObject.isOnScreen && !widgetObject.inPanel && widgetObject.closeable !== true;
  };

  //Prevent to trigger map navigation
  //stop arrow,plus/minus events for map when mouse is hovering it.
  mo.preventMapNavigation = function(evt){
    var keyCode = evt.keyCode;
    var mapNavigationKeys = [
      //Zoom '+','-','+=','-_'
      keys.NUMPAD_PLUS, 61, 187, keys.NUMPAD_MINUS, 173, 189,
      //Pan Cardinal
      keys.UP_ARROW,    keys.NUMPAD_8,
      keys.RIGHT_ARROW, keys.NUMPAD_6,
      keys.DOWN_ARROW,  keys.NUMPAD_2,
      keys.LEFT_ARROW,  keys.NUMPAD_4,
      //Pan Diagonal
      keys.PAGE_UP,   keys.NUMPAD_9,
      keys.PAGE_DOWN, keys.NUMPAD_3,
      keys.END,       keys.NUMPAD_1,
      keys.HOME,      keys.NUMPAD_7
    ];
    if(mapNavigationKeys.indexOf(keyCode) >= 0){
      evt.stopPropagation();
    }
  };

  //add role and label to widget for screen reader
  //application role is used to resolve missing enter/space events in ff&nvda
  mo._addAttrsOnWidgetDom = function(widgetObject){
    var btnWidgets = ['MyLocation', 'HomeButton', 'FullScreen'];
    var widgetRole = btnWidgets.indexOf(widgetObject.name) >= 0 ? 'button' : 'application';
    if(!widgetObject.inPanel){//inPanel widgets use panel's role
      html.setAttr(widgetObject.domNode, 'role', widgetRole);
    }else{
      //allow to read context if no focusable nodes.
      // html.setAttr(widgetObject.domNode, 'aria-label', widgetObject.name);
    }
  };

  mo.initWidgetCancelEvent = function(widgetObject){
    this._addAttrsOnWidgetDom(widgetObject);

    on(widgetObject.domNode, 'keydown', lang.hitch(this, function(evt){
      // var isKeyboardNavigation = map.isKeyboardNavigation;
      // map.disableKeyboardNavigation();
      mo.preventMapNavigation(evt);
      var target = evt.target;
      //inPanel widgets use their panels' close event to enter or escape
      if(!widgetObject.inPanel){
        if([keys.ENTER, keys.ESCAPE].indexOf(evt.keyCode) < 0){
          return;
        }
        //cases like zoomSlider, search(one state), splash, AT, overview, ...
        if(mo.isCommonOnScreenWidget(widgetObject)){
          //enter event: focus to first node of expanded widget
          if(evt.keyCode === keys.ENTER && html.hasClass(target, widgetObject.baseClass)){
            evt.preventDefault();//prevent to trigger the enter-event for the firstNode#ie,ff
            mo.focusFirstFocusNode(widgetObject.domNode);
          }else if(evt.keyCode === keys.ESCAPE){
            var dom, isFocusMinIndex = false;
            //back to focus widgetDom if cancel operation is from widgetDom's childNode
            if(!html.hasClass(target, widgetObject.baseClass)){
              evt.stopPropagation(); //stop triggering panel's esc-event for dashboard theme
              widgetObject.domNode.focus();
              return;
            }
            if(widgetObject.name === 'Splash' && html.getStyle(widgetObject.domNode, 'display') !== 'none'){
              return; //can't use timeout in widget file because nvda reads nextContainer then splash agagin.
            }
            var parentNode = widgetObject.domNode.parentNode;
            //for widgets are on map.
            if(html.getAttr(parentNode, 'id') === 'map'){
              evt.preventDefault();
              parentNode.focus();
              return;
            }
            else if(html.getAttr(parentNode, 'id') === 'jimu-layout-manager'){//controller, AT, splash
              dom = widgetObject.domNode;
            }else{
              dom = widgetObject.domNode.parentNode;
            }
            mo.trapToNextFocusContainer(dom, isFocusMinIndex);
          }
        }
        //special cases like search(in a simulated panel)
        else if(evt.keyCode === keys.ESCAPE && !html.hasClass(target, widgetObject.baseClass)){
          widgetObject.domNode.focus();//works for screen condition
          widgetObject.onClose();//works for popup like inpanel
          evt.preventDefault();
          evt.stopPropagation();
        }
      }
      // if(isKeyboardNavigation){
      //   map.enableKeyboardNavigation();
      // }
    }));
  };

  //init class and event to first focusable node
  mo.initFirstFocusNode = function(widgetDom, firstNode){
    //empty previous firstNode's class
    // var _firstNode = query('.' + mo.firstFocusNodeClass, widgetDom)[0];
    var _firstNode = mo.getFirstFocusNode(widgetDom);
    if(_firstNode){
      html.removeClass(_firstNode, mo.firstFocusNodeClass);
      if(_firstNode.firstNodeEvent){
        _firstNode.firstNodeEvent.remove();
      }
      if(_firstNode === widgetDom){
        html.setAttr(_firstNode, 'tabindex', null);//update first node and reset widgetDom's tabindex
        html.setAttr(_firstNode, 'role', '');
      }
    }
    if(firstNode){
      if(firstNode === widgetDom){
        html.setAttr(firstNode, 'tabindex', 0);
        //nvda: read widget's content when it has no interactive nodes.
        html.setAttr(firstNode, 'role', 'document');
      }
      html.addClass(firstNode, mo.firstFocusNodeClass);
      firstNode.firstNodeEvent = on(firstNode, 'keydown', lang.hitch(this, function(evt){
        if(html.hasClass(evt.target, mo.firstFocusNodeClass) && evt.keyCode === keys.TAB){
          //Resolve the cursor is fousing on the first focusable node from other widget not current msg popup when the app starts.
          if(window.currentMsgPopup && window.currentMsgPopup.firstFocusNode){
            window.currentMsgPopup.focusedNodeBeforeOpen = evt.target;
            evt.preventDefault();
            window.currentMsgPopup.firstFocusNode.focus();
            return;
          }
          //Resolve the cursor is fousing on the first focusable node from other widget not splash widget when the app starts.
          var splashWidget = query('.jimu-widget-splash', query('#jimu-layout-manager')[0])[0];
          if(splashWidget && html.getStyle(splashWidget, 'display') !== 'none' && splashWidget !== widgetDom){
            evt.preventDefault();
            var splashFirstNode = query('.' + mo.firstFocusNodeClass, splashWidget)[0];
            splashFirstNode.focus();
          }else if(evt.shiftKey){//shift&Tab
            evt.preventDefault();
            var lastNode = mo.getLastFocusNode(widgetDom);
            if(mo.isDomFocusable(lastNode)){
              lastNode.focus();
            }else{//focusable nodes are the kids from lastNode.
              var childrenNodes = mo.getFocusNodesInDom(lastNode);
              childrenNodes[0].focus();
            }
          }
        }
      }));
    }
  };

  //init class and event to last focusable node
  mo.initLastFocusNode = function(widgetDom, lastNode){
    // var _lastNode = query('.' + mo.lastFocusNodeClass, widgetDom)[0];
    var _lastNode = mo.getLastFocusNode(widgetDom);
    if(_lastNode){
      html.removeClass(_lastNode, mo.lastFocusNodeClass);
      if(_lastNode.lastNodeEvent){
        _lastNode.lastNodeEvent.remove();
      }
      if(_lastNode === widgetDom){
        html.setAttr(_lastNode, 'tabindex', null);
      }
    }
    if(lastNode){
      if(lastNode === widgetDom){
        html.setAttr(lastNode, 'tabindex', 0);
      }
      html.addClass(lastNode, mo.lastFocusNodeClass);
      lastNode.lastNodeEvent = on(lastNode, 'keydown', lang.hitch(this, function(evt){
        if(!evt.shiftKey && evt.keyCode === keys.TAB){
          // console.log(evt.target);
          if(widgetDom === lastNode){
            evt.preventDefault();
            this.focusFirstFocusNode(widgetDom);
            return;
          }
          var innerNodes = this.getFocusNodesInDom(lastNode);
          if(innerNodes.length === 0){// no child nodes
            evt.preventDefault();
            this.focusFirstFocusNode(widgetDom);
          }else{ // has nodes
            if(!html.hasClass(evt.target, mo.lastFocusNodeClass)){
              // var lastNode = this.getAncestorDom(evt.target, function(dom){
              //   return html.hasClass(dom, mo.lastFocusNodeClass);
              // }, 10);
              // if(innerNodes.length === 1 && innerNodes[0] === evt.target){//one focusable node
              // if(innerNodes.length === 1){//one focusable node
              //   evt.preventDefault();
              //   utils.focusFirstFocusNode(widgetObject.domNode);
              // }else if(innerNodes[innerNodes.length - 1] === evt.target){
              // }
              if(innerNodes[innerNodes.length - 1] === evt.target){
                evt.preventDefault();
                this.focusFirstFocusNode(widgetDom);
              }
            }
          }
        }
      }));
    }
  };

  //focus first node, add lastTag to last node
  mo.focusFirstFocusNode = function(widgetDom){
    var firstNode = query('.' + mo.firstFocusNodeClass, widgetDom)[0];
    // var focusNode = firstNode ? firstNode : widgetDom.children[0];
    // if(focusNode){//scalebar widget does not has children
    //   focusNode.focus();
    // }
    var focusNode = firstNode ? firstNode : widgetDom;
    focusNode.focus();
  };

  mo.getFirstFocusNode = function(widgetDom, inPanel){
    var firstNode = html.hasClass(widgetDom, mo.firstFocusNodeClass) ?
      widgetDom : query('.' + mo.firstFocusNodeClass, widgetDom)[0];
    // return firstNode ? firstNode : widgetDom.children[0];
    if(!firstNode && inPanel){
      // firstNode = widgetDom.children[0];
      // if(firstNode){
      //   html.setAttr(firstNode, 'tabindex', 0);
      // }
      firstNode = widgetDom;
      //Do not rewrite current tabindex, like controller
      // if(!(html.getAttr(firstNode, 'tabindex') >= 0)){//controller doesn't need rewrite tabindex
      if(html.getAttr(firstNode, 'tabindex') === null){
        html.setAttr(firstNode, 'tabindex', '0');
      }
    }
    return firstNode;
  };

  mo.getLastFocusNode = function(widgetDom){
    var lastNode = html.hasClass(widgetDom, mo.lastFocusNodeClass) ?
      widgetDom : query('.' + mo.lastFocusNodeClass, widgetDom)[0];
    return lastNode;
  };

  mo.traversalDom = function(node, items){
    items = items ? items : [];
    var item, childNodes = node.childNodes;
    for(var i = 0; i < childNodes.length ; i++){
      item = childNodes[i];
      if(item.nodeType === 1){
        items.push(item);
        mo.traversalDom(item, items);
      }
    }
    return items;
  };

  mo.getFocusNodesInDom = function(Dom){
    var nodes = mo.traversalDom(Dom);
    var focusNodes = [];
    for(var key = 0; key < nodes.length; key ++){
      var node = nodes[key];
      if(mo.isDomFocusable(node)){
        focusNodes.push(node);
      }
    }
    return focusNodes;
  };

  mo.isDomFocusable = function (node) {
    var searchKey = ['A', 'INPUT', 'BUTTON', 'SELECT', 'TEXTAREA'];

    var noPresentation = html.getAttr(node, 'role') !== 'presentation';
    var noHidden = html.getAttr(node, 'type') !== 'hidden';
    var noDisabled = html.getAttr(node, 'disabled') !== true;
    var validTabindex = parseInt(html.getAttr(node, 'tabindex'), 10);//tabindex value could be null
    //spacial focusable tags, or div that has tabindex>=0
    if(noPresentation && noHidden && noDisabled &&
      ((searchKey.indexOf(node.tagName) >= 0 && validTabindex !== -1) || //focuasable tags
      (searchKey.indexOf(node.tagName) < 0 && validTabindex >= 0))){ //other tags with focusable attr
      return true;
    }
    return false;
  };

  mo.trapToNextFocusContainer = function(currentContainer, isFocusMinIndex){
    var frameNodes = currentContainer.parentNode.children;
    var newFrameNodesArray = [];
    for(var key = 0; key < frameNodes.length; key ++){
      var frameNode = frameNodes[key];
      var tabindex = parseInt(html.getAttr(frameNode, 'tabindex'), 10);
      //only check the visible containers(not including hidden splash widget)
      if(tabindex > 0 && html.getStyle(frameNode, 'display') !== 'none'){
        newFrameNodesArray.push(frameNode);
      }
    }
    newFrameNodesArray.sort(function(dom1, dom2){
      var value1 = parseInt(html.getAttr(dom1, 'tabindex'), 10);
      var value2 = parseInt(html.getAttr(dom2, 'tabindex'), 10);
      if(value1 < value2){
        return -1;
      }else if(value1 === value2){
        return 0;
      }else{
        return 1;
      }
    });

    var focusNode = null;
    if(isFocusMinIndex){//focus min tabindex
      focusNode = newFrameNodesArray[0];
    }else{
      //current node is hidden,like canceling splash
      if(html.getStyle(currentContainer, 'display') === 'none'){
        focusNode = newFrameNodesArray[0];
      }else{
        //focus next tabindex base on current
        var currentIndex = parseInt(html.getAttr(currentContainer, 'tabindex'), 10);
        for(var key2 = 0; key2 < newFrameNodesArray.length; key2 ++){
          var tabindex2 = parseInt(html.getAttr(newFrameNodesArray[key2], 'tabindex'), 10);
          if(tabindex2 === currentIndex){
            var isLastOne = key2 === newFrameNodesArray.length - 1;
            if(isLastOne){
              focusNode = newFrameNodesArray[0];
            }else{
              focusNode = newFrameNodesArray[key2 + 1];
            }
            break;
          }
        }
      }
    }
    if(!focusNode){//map is not a secion in Jewelry theme, focus on first skip link.
      focusNode = query('#skipContainer a')[0];
    }
    focusNode.focus();
    return focusNode;
  };

  mo._getTooltipLabel = function (domNode, label) {
    var ariaLabel = html.getAttr(domNode, "aria-label"),
      title = html.getAttr(domNode, "title");
    return ariaLabel || title || label;
  };

  mo.focusFirstFocusByTheme = function(widget, focusNode){
    var themeName = widget.appConfig.theme.name;
    //not focus on first node in the initial state
    //when widget is in Expanded panel with dashboard theme, or openAtStart=true && data is asyn.
    if((themeName === 'DashboardTheme' && widget.isOnScreen && widget.gid !== 'widgetOnScreen') ||
      (themeName === 'JewelryBoxTheme' && widget.panel && widget.panel.uri &&
      widget.panel.uri.includes('LDockablePanel'))){
      return;
    }
    if(widget.openAtStart && (!widget._isNotOpenAtStart || widget.openAtStartAysn)){//like about, share
      return;
    }
    focusNode.focus();
  };

  mo.addTooltipByDomNode = function(tooltip, domNode, label){
    tooltip.defaultPosition = ["below-centered","above-centered", "after-centered", "before-centered"];
    var tooltipContainer;
    // var tooltipRole;
    on(domNode, 'focus', lang.hitch(this, function(evt){
      if(mo.isInNavMode()){
        if(tooltipContainer){
          html.setAttr(tooltipContainer, 'role', 'presentation');
        }
        tooltip.show(mo._getTooltipLabel(domNode, label) + '&nbsp;&nbsp;', evt.target);
        if(!tooltipContainer){
          tooltipContainer = query('.dijitTooltipContainer', document.body)[0];
          // tooltipRole = html.getAttr(tooltipContainer, 'role');
          html.setAttr(tooltipContainer, 'role', 'presentation'); //instead of role='alert'
        }
      }
    }));
    on(domNode, 'blur', lang.hitch(this, function(evt){
      // if(mo.isInNavMode()){ //It can't work when changing to mouse mode.
      if(tooltip){
        tooltip.hide(evt.target);
        if(tooltipContainer){
          // html.setAttr(tooltipContainer, 'role', tooltipRole); //not reset to alert
        }
      }
    }));
  };

  return mo;
});
