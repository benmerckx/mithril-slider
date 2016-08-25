"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _mithril=require("mithril"),_mithril2=_interopRequireDefault(_mithril),_mithrilSlider=require("mithril-slider"),_mithrilSlider2=_interopRequireDefault(_mithrilSlider),_common=require("app/app/common"),_common2=_interopRequireDefault(_common),_preloader=require("app/preloader/preloader"),_preloader2=_interopRequireDefault(_preloader),_github=require("app/app/github"),_github2=_interopRequireDefault(_github),_styler=require("app/app/styler"),_styler2=_interopRequireDefault(_styler),_verticalStyle=require("./vertical-style"),_verticalStyle2=_interopRequireDefault(_verticalStyle);_styler2.default.add("vertical",_verticalStyle2.default);var createPage=function(opts){var currentIndex=opts.currentIndex,listIndex=opts.listIndex,data=opts.data,inRange=Math.abs(currentIndex-listIndex)<2,content=inRange?(0,_mithril2.default)(".image-container",[(0,_mithril2.default)(".image",{config:function(el,inited){inited||_common2.default.fadeInImage(el,data)}}),_preloader2.default]):null;return(0,_mithril2.default)(".page",{key:listIndex},content)},example={};example.view=function(ctrl){var opts=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return(0,_mithril2.default)("div",[_mithril2.default.component(_mithrilSlider2.default,{pageData:_common2.default.getPageData,page:createPage,class:"example vertical",orientation:"vertical"}),(0,_mithril2.default)(".slider-placeholder"),opts.hideGithub?null:(0,_github2.default)()])},exports.default=example;
//# sourceMappingURL=vertical.js.map