(function(window){var svgSprite='<svg><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M417.28 488.96h-106.24c-37.12 0-67.84-30.72-67.84-67.84v-106.24c0-37.12 30.72-67.84 67.84-67.84h106.24c37.12 0 67.84 30.72 67.84 67.84v106.24c0 37.12-30.72 67.84-67.84 67.84z m-106.24-203.52c-16.64 0-29.44 12.8-29.44 29.44v106.24c0 16.64 12.8 29.44 29.44 29.44h106.24c16.64 0 29.44-12.8 29.44-29.44v-106.24c0-16.64-12.8-29.44-29.44-29.44h-106.24zM417.28 776.96h-106.24c-37.12 0-67.84-30.72-67.84-67.84v-106.24c0-37.12 30.72-67.84 67.84-67.84h106.24c37.12 0 67.84 30.72 67.84 67.84v106.24c0 37.12-30.72 67.84-67.84 67.84z m-106.24-203.52c-16.64 0-29.44 12.8-29.44 29.44v106.24c0 16.64 12.8 29.44 29.44 29.44h106.24c16.64 0 29.44-12.8 29.44-29.44v-106.24c0-16.64-12.8-29.44-29.44-29.44h-106.24zM712.96 488.96h-106.24c-37.12 0-67.84-30.72-67.84-67.84v-106.24c0-37.12 30.72-67.84 67.84-67.84h106.24c37.12 0 67.84 30.72 67.84 67.84v106.24c0 37.12-30.72 67.84-67.84 67.84z m-106.24-203.52c-16.64 0-29.44 12.8-29.44 29.44v106.24c0 16.64 12.8 29.44 29.44 29.44h106.24c16.64 0 29.44-12.8 29.44-29.44v-106.24c0-16.64-12.8-29.44-29.44-29.44h-106.24zM678.4 776.96h-37.12c-56.32 0-102.4-46.08-102.4-102.4v-37.12c0-56.32 46.08-102.4 102.4-102.4H678.4c56.32 0 102.4 46.08 102.4 102.4v37.12c0 56.32-46.08 102.4-102.4 102.4z m-37.12-203.52c-35.84 0-64 28.16-64 64v37.12c0 35.84 28.16 64 64 64H678.4c35.84 0 64-28.16 64-64v-37.12c0-35.84-28.16-64-64-64h-37.12z" fill="#666666" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)