"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _appImagesImages=require("app/images/images");var _appImagesImages2=_interopRequireDefault(_appImagesImages);var _appVerticalVertical=require("app/vertical/vertical");var _appVerticalVertical2=_interopRequireDefault(_appVerticalVertical);var _appControlsControls=require("app/controls/controls");var _appControlsControls2=_interopRequireDefault(_appControlsControls);var _appLtrLtr=require("app/ltr/ltr");var _appLtrLtr2=_interopRequireDefault(_appLtrLtr);var _appGroupGroup=require("app/group/group");var _appGroupGroup2=_interopRequireDefault(_appGroupGroup);var _appPagesPages=require("app/pages/pages");var _appPagesPages2=_interopRequireDefault(_appPagesPages);var _appMultipleMultiple=require("app/multiple/multiple");var _appMultipleMultiple2=_interopRequireDefault(_appMultipleMultiple);var _appAppGithub=require("app/app/github");var _appAppGithub2=_interopRequireDefault(_appAppGithub);require("./index.css!");var menuData=[{href:"/images",title:"Simple image swipe",subtitle:"Swiping a series of images."},{href:"/vertical",title:"Vertical image swipe",subtitle:"Swiping a vertical series of images."},{href:"/controls",title:"Slider controls",subtitle:"Using controls to manage sliding and get feedback."},{href:"/ltr",title:"Left-to-right",subtitle:"Controls with left-to-right language support."},{href:"/group",title:"Dynamic groups",subtitle:"Creating dynamically sized pages."},{href:"/pages",title:"Page content",subtitle:"More diverse content."},{href:"/multiple",title:"Multiple",subtitle:"Multiple sliders on one page."}];var menu=(0,_mithril2["default"])("ul.menu",[(0,_mithril2["default"])("li.header","All examples are lazily loaded"),menuData.map(function(menuItem){return(0,_mithril2["default"])("li",(0,_mithril2["default"])("a",{href:menuItem.href,config:_mithril2["default"].route},[(0,_mithril2["default"])("span.title",menuItem.title),(0,_mithril2["default"])("span.subtitle",menuItem.subtitle)]))})]);var app={};app.view=function(){return(0,_mithril2["default"])("div",[(0,_mithril2["default"])("h1","Content Slider for Mithril"),menu,(0,_appAppGithub2["default"])({home:true})])};_mithril2["default"].route.mode="hash";_mithril2["default"].route(document.body,"/",{"/":app,"/images":_appImagesImages2["default"],"/vertical":_appVerticalVertical2["default"],"/controls":_appControlsControls2["default"],"/ltr":_appLtrLtr2["default"],"/group":_appGroupGroup2["default"],"/pages":_appPagesPages2["default"],"/multiple":_appMultipleMultiple2["default"]});