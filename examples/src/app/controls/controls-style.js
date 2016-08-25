"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _variables=require("app/app/variables"),_variables2=_interopRequireDefault(_variables),_mixins=require("app/app/mixins"),_mixins2=_interopRequireDefault(_mixins),buttonSize=40,inputGotoWidth=buttonSize,inputGotoHeight=buttonSize,styles=[{".slider-controls.slider-controls-controls":{position:"relative",width:_variables2.default.size+"px",height:buttonSize+20+"px",margin:"0 auto","margin-top":-1.4*buttonSize+"px",padding:"10px 0"," a.prev, a.next":[_mixins2.default.vendorize({"user-select":"none"}),_mixins2.default.vendorize({"transition-property":"opacity"}),_mixins2.default.vendorize({"transition-timing-function":"ease-out"}),_mixins2.default.vendorize({"transition-duration":"200ms"}),_mixins2.default.vendorize({"background-size":"30px"}),{display:"block",width:buttonSize+"px",height:buttonSize+"px","border-radius":buttonSize/2+"px",position:"absolute","background-color":"#eee","text-indent":"-1234em",cursor:"default","background-repeat":"no-repeat","background-position":"50%",opacity:0,"&.enabled":{opacity:1,cursor:"pointer","&:hover":{"background-color":"#ddd"}}}]," a.prev":{"background-image":"url(app/assets/svg/navigate-before.svg)",left:"10px"}," a.next":{"background-image":"url(app/assets/svg/navigate-next.svg)",right:"10px"}," input.goto":{position:"absolute","background-color":"#eee",left:"50%",height:inputGotoHeight+"px",width:inputGotoWidth+"px",margin:"0 0 0 "+-inputGotoWidth/2+"px",padding:0,"text-align":"center",border:"none","font-size":"14px","&:focus":{"background-color":"#fff"}}},'[dir="rtl"]':{" .slider-controls.slider-controls-controls":{" a.next":{right:"auto",left:"10px",transform:"scaleX(-1)"}," a.prev":{left:"auto",right:"10px",transform:"scaleX(-1)"}}}}];exports.default=styles;
//# sourceMappingURL=controls-style.js.map