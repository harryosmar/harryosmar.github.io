(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[829],{9739:function(e,t,r){var n={"./harry-osmar-sitohang":[5141,141],"./harry-osmar-sitohang.ts":[5141,141],"./personx":[9377,377],"./personx.ts":[9377,377]};function a(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],a=t[0];return r.e(t[1]).then(function(){return r(a)})}a.keys=function(){return Object.keys(n)},a.id=9739,e.exports=a},8324:function(e,t,r){Promise.resolve().then(r.bind(r,4315)),Promise.resolve().then(r.bind(r,6243)),Promise.resolve().then(r.bind(r,6676))},5641:function(e,t,r){"use strict";r.d(t,{default:function(){return a.a}});var n=r(127),a=r.n(n)},127:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},getImageProps:function(){return l}});let n=r(172),a=r(751),s=r(8189),i=n._(r(9189));function l(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},4315:function(e,t,r){"use strict";r.d(t,{default:function(){return o}});var n=r(251),a=r(7255),s=r(70);let i=e=>e?e.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):"",l=e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});var c=r(6231);function o(e){let{articles:t}=e,[r,o]=(0,a.useState)(""),u=t.filter(e=>{if(!r)return!0;let t=RegExp(r,"i");return t.test(e.title)||t.test(e.excerpt)});return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"divide-y divide-neutral-200 dark:divide-neutral-800",children:0===u.length?(0,n.jsx)("p",{className:"text-neutral-600 dark:text-neutral-400 py-8",children:"No articles found"}):u.map(e=>(0,n.jsx)("article",{className:"py-8 first:pt-0",children:(0,n.jsx)(s.default,{href:"/articles/".concat(e.slug),className:"group",children:(0,n.jsxs)("div",{className:"flex flex-col-reverse md:grid md:grid-cols-[1fr_200px] md:gap-8 items-start",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 text-sm mb-2",children:[(0,n.jsx)("span",{className:"text-neutral-600 dark:text-neutral-400",children:i(e.author)}),(0,n.jsx)("span",{className:"text-neutral-600 dark:text-neutral-400",children:"\xb7"}),(0,n.jsx)("time",{className:"text-neutral-600 dark:text-neutral-400",dateTime:e.published_at,children:l(e.published_at)})]}),(0,n.jsx)("h2",{className:"text-xl md:text-2xl font-serif mb-2 text-neutral-900 dark:text-neutral-100 group-hover:text-primary transition-colors",children:e.title}),(0,n.jsx)("p",{className:"text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-4",children:e.excerpt}),(0,n.jsx)("div",{className:"flex items-center gap-4",children:(0,n.jsxs)("span",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:[e.reading_time," min read"]})})]}),(0,n.jsx)("div",{className:"w-full md:w-[200px] aspect-[4/3] md:aspect-[4/3] rounded-lg overflow-hidden mb-4 md:mb-0",children:(0,n.jsx)(c.LazyImage,{src:e.image,alt:e.title,fill:!0,objectFit:"cover",className:"transition-transform group-hover:scale-105"})})]})})},e.id))})})}},6243:function(e,t,r){"use strict";r.d(t,{LastVisitedPageHandler:function(){return s}});var n=r(7255),a=r(9349);function s(){let e=(0,a.usePathname)();return(0,n.useEffect)(()=>{e&&(e.startsWith("/articles/page/")&&sessionStorage.setItem("lastVisitedArticlesPage",e),e.startsWith("/projects/page/")&&sessionStorage.setItem("lastVisitedProjectsPage",e))},[e]),null}},6231:function(e,t,r){"use strict";r.d(t,{LazyImage:function(){return i}});var n=r(251),a=r(7255),s=r(5641);function i(e){let{threshold:t=.1,rootMargin:r="50px",className:i="",objectFit:l="cover",alt:c,priority:o,fill:u,width:d,height:m,...f}=e,[x,h]=(0,a.useState)(o),[p,v]=(0,a.useState)(!1),g=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(o)return;let e=new IntersectionObserver(t=>{let[r]=t;r.isIntersecting&&(h(!0),e.disconnect())},{threshold:t,rootMargin:r});return g.current&&e.observe(g.current),()=>{e.disconnect()}},[t,r,o]);let j=u?"relative w-full h-full":d&&m?"relative":"relative inline-block";return(0,n.jsx)("div",{ref:g,className:"".concat(j," ").concat(i," ").concat(p?"":"bg-neutral-100 dark:bg-neutral-800 animate-pulse"),style:!u&&d&&m?{width:"string"==typeof d?d:"".concat(d,"px"),height:"string"==typeof m?m:"".concat(m,"px")}:void 0,children:(x||o)&&(0,n.jsx)(s.default,{...f,alt:c,priority:o,fill:u,width:u?void 0:d,height:u?void 0:m,onLoad:()=>{v(!0)},className:"".concat(p?"opacity-100":"opacity-0"," transition-opacity duration-300 object-").concat(l)})})}},6676:function(e,t,r){"use strict";r.d(t,{Pagination:function(){return c}});var n=r(251),a=r(70),s=r(4010);let i=(0,s.Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),l=(0,s.Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);function c(e){let{currentPage:t,totalPages:r,baseUrl:s}=e;return r<=1?null:(0,n.jsxs)("nav",{className:"flex justify-between items-center py-8 border-t border-neutral-200 dark:border-neutral-800","aria-label":"Pagination",children:[(0,n.jsx)("div",{className:"flex-1 min-w-0",children:t>1&&(0,n.jsxs)(a.default,{href:"".concat(s,"/page/").concat(t-1),className:"inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",children:[(0,n.jsx)(i,{className:"w-4 h-4 mr-1"}),"Previous"]})}),(0,n.jsx)("div",{className:"flex-1 flex justify-center min-w-0",children:(0,n.jsxs)("span",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:["Page ",t," of ",r]})}),(0,n.jsx)("div",{className:"flex-1 flex justify-end min-w-0",children:t<r&&(0,n.jsxs)(a.default,{href:"".concat(s,"/page/").concat(t+1),className:"inline-flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors",children:["Next",(0,n.jsx)(l,{className:"w-4 h-4 ml-1"})]})})]})}}},function(e){e.O(0,[513,189,223,429,744],function(){return e(e.s=8324)}),_N_E=e.O()}]);