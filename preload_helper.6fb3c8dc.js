!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"MINKEN","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.3f0edf29.async.js",9],["components__Space__index.md.33be0665.chunk.css",54],["components__Space__index.md.6ed44991.async.js",54],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.61a3b11c.async.js",65],["components__GlobalConfig__index.md.33be0665.chunk.css",197],["components__GlobalConfig__index.md.71aa1e80.async.js",197],["components__Button__index.md.33be0665.chunk.css",220],["components__Button__index.md.4a0e445f.async.js",220],["components__Select__index.md.33be0665.chunk.css",239],["components__Select__index.md.0a58e0d2.async.js",239],["components__Pagination__index.md.33be0665.chunk.css",325],["components__Pagination__index.md.2df2f3bb.async.js",325],["components__Alert__index.md.33be0665.chunk.css",335],["components__Alert__index.md.68757f9b.async.js",335],["345.8e214c0e.chunk.css",345],["345.51d5cdd1.async.js",345],["components__Switch__index.md.33be0665.chunk.css",387],["components__Switch__index.md.b72a340d.async.js",387],["components__Skeleton__index.md.33be0665.chunk.css",413],["components__Skeleton__index.md.14a1c3a0.async.js",413],["432.dc7eae1a.async.js",432],["nm__dumi__theme-default__layouts__DocLayout__index.54d88239.async.js",519],["components__Divider__index.md.33be0665.chunk.css",547],["components__Divider__index.md.2bc6fab8.async.js",547],["components__List__index.md.33be0665.chunk.css",571],["components__List__index.md.c243527f.async.js",571],["components__Menu__index.md.33be0665.chunk.css",864],["components__Menu__index.md.7592dc46.async.js",864],["components__Layout__index.md.33be0665.chunk.css",899],["components__Layout__index.md.e864e30b.async.js",899],["dumi__tmp-production__dumi__theme__ContextWrapper.76dea066.async.js",923],["docs__index.md.33be0665.chunk.css",935],["docs__index.md.d3a68272.async.js",935],["docs__guide.md.33be0665.chunk.css",937],["docs__guide.md.30f2b35d.async.js",937]],"r":{"/*":[4,5,16,17,23,32],"/":[22,33,34,16,17,23,32],"/guide":[22,35,36,16,17,23,32],"/~demos/:id":[0,1,32],"/components/alert":[14,15,22,16,17,23,32],"/components/button":[8,9,22,16,17,23,32],"/components/divider":[22,24,25,16,17,23,32],"/components/global-config":[6,7,22,16,17,23,32],"/components/layout":[22,30,31,16,17,23,32],"/components/list":[22,26,27,16,17,23,32],"/components/menu":[22,28,29,16,17,23,32],"/components/pagination":[12,13,22,16,17,23,32],"/components/select":[10,11,22,16,17,23,32],"/components/skeleton":[20,21,22,16,17,23,32],"/components/space":[2,3,22,16,17,23,32],"/components/switch":[18,19,22,16,17,23,32]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();