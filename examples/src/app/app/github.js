"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);require("./github.css!");var content=function content(){var opts=arguments[0]===undefined?{}:arguments[0];return(0,_mithril2["default"])(".github",{dir:"ltr"},[!opts.home?(0,_mithril2["default"])("a",{href:"/",config:_mithril2["default"].route},"All examples"):null,(0,_mithril2["default"])("hr"),_mithril2["default"].trust('mithril-slider, Content Slider for Mithril on mobile and desktop. Project page on <a href="https://github.com/ArthurClemens/mithril-slider">Github</a>.')])};exports["default"]=content;module.exports=exports["default"];