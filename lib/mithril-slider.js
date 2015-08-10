"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);var _hammerjs=require("hammerjs");var _hammerjs2=_interopRequireDefault(_hammerjs);require("./mithril-slider.css!");var createView=function createView(ctrl,opts){var contentEl=ctrl.contentEl();var list=ctrl.list();var currentIndex=ctrl.index();ctrl.groupBy(opts.groupBy||1);if(contentEl){ctrl.updateContentSize(contentEl)}return(0,_mithril2["default"])("div",{"class":["slider",opts["class"]||""].join(" ")},opts.before?(0,_mithril2["default"])(".before",opts.before):null,(0,_mithril2["default"])(".content",{config:function config(el,inited,context){if(inited){return}ctrl.setContentEl(el);var mc=new _hammerjs2["default"].Manager(el,{});mc.add(new _hammerjs2["default"].Pan({orientation:opts.orientation==="vertical"?_hammerjs2["default"].DIRECTION_VERTICAL:_hammerjs2["default"].DIRECTION_HORIZONTAL,threshold:0}));mc.on("panmove",ctrl.handleDrag);mc.on("panend",ctrl.handleDragEnd);mc.on("panstart",ctrl.handleDragStart);context.onunload=function(){mc.off("panmove",ctrl.handleDrag);mc.off("panend",ctrl.handleDragEnd);mc.off("panstart",ctrl.handleDragStart)}}},list.map(function(data,listIndex){return opts.page({data:data,listIndex:listIndex,currentIndex:currentIndex})})),opts.after?(0,_mithril2["default"])(".after",opts.after):null)};var slider={};slider.controller=function(){var opts=arguments[0]===undefined?{}:arguments[0];var defaultDuration=parseInt(opts.duration,10)||250;var pageSelector=opts.pageSelector||".page";var index=_mithril2["default"].prop(opts.index||0);var list=opts.pageData();list.then(_mithril2["default"].redraw);var contentEl=_mithril2["default"].prop();var pageSize=0;var groupBy=_mithril2["default"].prop(opts.groupBy||1);var cancelDragFactor=opts.cancelDragFactor||1/5;var isVertical=opts.orientation==="vertical";var setIndex=function setIndex(idx){index(idx);_mithril2["default"].redraw()};var getPageEl=function getPageEl(el,idx){return el.querySelectorAll(pageSelector)[idx]};var setTransitionStyle=function setTransitionStyle(el,value){var style=el.style;var attrs=isVertical?"0, "+value+"px, 0":value+"px, 0, 0";var transform="translate3d("+attrs+")";style.transform=style["-webkit-transform"]=style["-moz-transform"]=style["-ms-transform"]=transform};var setTransitionDurationStyle=function setTransitionDurationStyle(duration){contentEl().style["-webkit-transition-duration"]=contentEl().style["transition-duration"]=duration+"ms"};var goTo=function goTo(idx,duration){if(idx<0||idx>list().length-1){return}if(duration!==undefined){setTransitionDurationStyle(duration)}setTransitionStyle(contentEl(),-1*idx*pageSize);setIndex(idx)};var normalizedStep=function normalizedStep(orientation){var idx=index();var size=groupBy();var min=0;var max=list().length;var next=idx+orientation*size;if(next+size>max){return max-size}if(next<min){return min}return next};var goCurrent=function goCurrent(){var duration=arguments[0]===undefined?0:arguments[0];updateContentSize(contentEl());setTransitionDurationStyle(duration);goTo(normalizedStep(0))};var goNext=function goNext(){var duration=arguments[0]===undefined?defaultDuration:arguments[0];return setTransitionDurationStyle(duration),index()<list().length?goTo(normalizedStep(1)):goTo(normalizedStep(0))};var goPrev=function goPrev(){var duration=arguments[0]===undefined?defaultDuration:arguments[0];return setTransitionDurationStyle(duration),index()>0?goTo(normalizedStep(-1)):goTo(normalizedStep(0))};var hasNext=function hasNext(){return index()+groupBy()<list().length};var hasPrevious=function hasPrevious(){return index()>0};var updateContentSize=function updateContentSize(el){var page=el.querySelector(pageSelector);var prop=isVertical?"height":"width";pageSize=page.getBoundingClientRect()[prop];el.style[prop]=list().length*pageSize+"px"};var setContentEl=function setContentEl(el){contentEl(el);updateContentSize(el);goCurrent(0)};var handleDragStart=function handleDragStart(){return setTransitionDurationStyle(0)};var handleDrag=function handleDrag(e){var el=contentEl();var page=getPageEl(el,index());var delta=isVertical?e.deltaY:e.deltaX;var origin=isVertical?page.offsetTop:page.offsetLeft;setTransitionStyle(el,delta-origin);e.preventDefault()};var calculateTransitionDuration=function calculateTransitionDuration(velocity){var speed=Math.abs(velocity);var duration=1/speed*360;if(duration<80){duration=80}if(duration>defaultDuration){duration=defaultDuration}return duration};var handleDragEnd=function handleDragEnd(e){var duration=calculateTransitionDuration(e.velocity);var delta=isVertical?e.deltaY:e.deltaX;if(Math.abs(delta)>pageSize*groupBy()*cancelDragFactor){if(delta<0){goNext(duration)}else{goPrev(duration)}}else{goCurrent(duration)}};return{list:list,contentEl:contentEl,setContentEl:setContentEl,handleDrag:handleDrag,handleDragStart:handleDragStart,handleDragEnd:handleDragEnd,groupBy:groupBy,updateContentSize:updateContentSize,index:index,hasNext:hasNext,hasPrevious:hasPrevious,goTo:goTo,goCurrent:goCurrent,goNext:goNext,goPrevious:goPrev}};slider.view=function(ctrl,opts){if(opts.sliderController){opts.sliderController(ctrl)}return createView(ctrl,opts)};exports["default"]=slider;module.exports=exports["default"];