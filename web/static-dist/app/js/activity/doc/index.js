webpackJsonp(["app/js/activity/doc/index"],{e3591734a7ec9a6a6c56:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}(),o=i("c04c1b91e3806f24595a"),s=a(o);!function(t){t.fn.WaterMark=function(e){function i(){var e=f();g=t('<div id="waterMark" class="watermark"></div>');var i="rotate("+h.rotate+"deg)";return g.addClass("active"),g.css({opacity:h.opacity,"-webkit-transform":i,"-moz-transform":i,"-ms-transform":i,"-o-transform":i,transform:i,filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand')"}),g.css(h.style),e>=8&&e<9&&g.css({height:60,filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678, sizingMethod='auto expand')progid:DXImageTransform.Microsoft.Alpha(opacity="+100*parseFloat(h.opacity)+")"}),g.html(h.contents),g}function a(){n()}function n(){o(),g.css({top:y,left:v}),g.show()}function r(){n(),u=setInterval(function(){n(),setTimeout(function(){g.hide()},h.duringTime)},h.interval)}function o(){h.isUseRandomPos?s():l()}function s(){var t=p.height()-g.height()-w,e=p.width()-g.width()-m;y=Math.random()*t+w,v=Math.random()*e}function l(){"left"==h.xPosition&&(v=m),"center"==h.xPosition&&(v=(p.width()-g.width())/2),"right"==h.xPosition&&(v=p.width()-g.width()-m),"top"==h.yPosition&&(y=w),"center"==h.yPosition&&(y=(p.height()-g.height())/2+w),"bottom"==h.yPosition&&(y=p.height()-g.height()-w)}function c(){h.isAlwaysShow?a():r()}function f(){var t=-1;if("Microsoft Internet Explorer"==navigator.appName){var e=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=i.exec(e)&&(t=parseFloat(RegExp.$1))}return t}function d(){p.append(i()),c()}var u,h=t.extend({duringTime:3e5,interval:6e5,isAlwaysShow:!0,xPosition:"center",yPosition:"top",isUseRandomPos:!1,opacity:.8,rotate:45,style:{},contents:""},e),p=t(this),w=40,m=15,y=w,v=m,g=null;d()}}($);var l=function(){function t(e){var i=e.element,a=e.swfUrl,r=e.pdfUrl,o=e.watermarkOptions,s=e.canCopy;n(this,t),this.element=$(i),this.swfUrl=a||"",this.pdfUrl=r||"",this.swfPlayerWidth="100%",this.swfPlayerHeight="100%",this.swfPlayerUrl="",this.watermarkOptions=o||"",this.canCopy=s||!1,this.init()}return r(t,[{key:"init",value:function(){this.isSupportHtml5()&&!this.isIE9()?this.initPDFJSViewer():this.initSwfViewer()}},{key:"isIE9",value:function(){return navigator.appVersion.indexOf("MSIE 9.")!=-1}},{key:"isSupportHtml5",value:function(){return $.support.leadingWhitespace}},{key:"initPDFJSViewer",value:function(){$("html").attr("dir","ltr");var t="http://opencdn.edusoho.net/pdf.js/v3/viewer.html#"+this.pdfUrl;this.canCopy||(t+="#false");var e=document.createElement("iframe");e.style.height="100%",e.allowfullscreen=!0,e.style.width="100%",e.id="doc-pdf-player",e.src=t,this.element.get(0).appendChild(e),this.addWatermark()}},{key:"initSwfViewer",value:function(){$.html('<div id="website"><p align="center" class="style1">'+Translator.trans("您还没有安装flash播放器 请点击")+'<a href="http://www.adobe.com/go/getflashplayer">'+Translator.trans("这里")+"</a>"+Translator.trans("安装")+"</p></div>");var t={doc_url:decodeURI(this.swfUrl.value)},e={bgcolor:"#efefef",allowFullScreen:!0,wmode:"window",allowNetworking:"all",allowscriptaccess:"always",autoPlay:!1},i={id:"website"};s.default.embedSWF(this.swfPlayerUrl,"website",this.swfPlayerWidth,this.swfPlayerHeight,"9.0.45",null,t,e,i),this.addWatermark()}},{key:"addWatermark",value:function(){this.watermarkOptions&&this.element.WaterMark(this.watermarkOptions)}}]),t}();e.default=l},0:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var n=i("e3591734a7ec9a6a6c56"),r=a(n),o=i("da32dea28c2b82c7aab1"),s=a(o),l=$("#document-content"),c=(new r.default({element:l,swfUrl:l.data("swf"),pdfUrl:l.data("pdf"),watermark:{xPosition:"center",yPosition:"center",rotate:45,contents:""}}),new s.default),f=l.data("finishType");"time"==f&&!function(){var t=l.data("finishDetail");c.receive("doing",function(e){t<=e.learnedTime&&c.emit("finish")})}()}});