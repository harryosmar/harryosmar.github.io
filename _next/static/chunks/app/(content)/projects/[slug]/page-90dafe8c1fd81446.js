(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[218],{9411:function(e,t,n){var r={"./harry-osmar-sitohang":[2130,130],"./harry-osmar-sitohang.ts":[2130,130],"./personx":[2449,449],"./personx.ts":[2449,449]};function a(e){if(!n.o(r,e))return Promise.resolve().then(function(){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=r[e],a=t[0];return n.e(t[1]).then(function(){return n(a)})}a.keys=function(){return Object.keys(r)},a.id=9411,e.exports=a},46:function(e,t,n){Promise.resolve().then(n.t.bind(n,79,23)),Promise.resolve().then(n.bind(n,2766)),Promise.resolve().then(n.bind(n,5524)),Promise.resolve().then(n.bind(n,830)),Promise.resolve().then(n.bind(n,7894)),Promise.resolve().then(n.bind(n,3701)),Promise.resolve().then(n.bind(n,6083))},4717:function(e,t,n){"use strict";n.d(t,{default:function(){return a.a}});var r=n(6547),a=n.n(r)},6547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getImageProps:function(){return i},default:function(){return s}});let r=n(4275),a=n(8135),l=n(3486),o=r._(n(5862)),i=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},s=l.Image},2766:function(e,t,n){"use strict";n.r(t),n.d(t,{ArticleContent:function(){return l}});var r=n(4297),a=n(3812);function l(e){let{content:t}=e;return(0,a.useEffect)(()=>{document.querySelectorAll("pre").forEach(e=>{var t;let n=document.createElement("div");n.className="code-block-wrapper",null===(t=e.parentNode)||void 0===t||t.insertBefore(n,e),n.appendChild(e);let r=document.createElement("button");r.className="copy-button",r.setAttribute("aria-label","Copy code");let a=document.createElement("span");a.className="copy-icon",r.appendChild(a),n.appendChild(r),r.addEventListener("click",async()=>{let t=e.textContent||"";try{await navigator.clipboard.writeText(t),r.classList.add("copied"),setTimeout(()=>{r.classList.remove("copied")},2e3)}catch(e){console.error("Failed to copy text: ",e)}})})},[t]),(0,r.jsx)("div",{className:"prose dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:t}})}},5524:function(e,t,n){"use strict";n.r(t),n.d(t,{BackButton:function(){return i}});var r=n(4297),a=n(5218),l=n(5917),o=n(3812);function i(e){let{href:t,label:n,className:i}=e,[s,c]=(0,o.useState)(t);return(0,o.useEffect)(()=>{if("/articles"===t){let e=sessionStorage.getItem("lastVisitedArticlesPage");e&&c(e)}},[t]),(0,r.jsx)(a.default,{href:s,className:(0,l.cn)("inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6",i),children:(0,r.jsx)("span",{children:n})})}},830:function(e,t,n){"use strict";n.r(t),n.d(t,{ClientShare:function(){return h}});var r=n(4297),a=n(8540);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let l=(0,a.Z)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),o=(0,a.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),i=(0,a.Z)("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),s=(0,a.Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);var c=n(3812);function d(e){let{url:t,title:n,className:a}=e,[d,u]=(0,c.useState)(!1),[h,f]=(0,c.useState)("idle"),m=(0,c.useRef)(null),x=(0,c.useRef)(null),p="https://www.linkedin.com/sharing/share-offsite/?url=".concat(encodeURIComponent(t),"&title=").concat(encodeURIComponent(n));(0,c.useEffect)(()=>{function e(e){m.current&&x.current&&!m.current.contains(e.target)&&!x.current.contains(e.target)&&u(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let v=async()=>{try{await navigator.clipboard.writeText(t),f("copied"),setTimeout(()=>{f("idle"),u(!1)},2e3)}catch(e){console.error("Failed to copy text: ",e)}};return(0,r.jsxs)("div",{className:"relative ".concat(a),children:[(0,r.jsx)("button",{ref:x,onClick:()=>u(!d),className:"inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100","aria-label":"Share article",children:(0,r.jsx)(l,{className:"w-4 h-4",strokeWidth:1.5})}),d&&(0,r.jsxs)("div",{ref:m,className:"absolute right-0 top-8 w-60 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 py-2 z-50",children:[(0,r.jsxs)("a",{href:p,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-3 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 text-sm text-neutral-700 dark:text-neutral-200",onClick:()=>u(!1),children:[(0,r.jsx)(o,{className:"w-4 h-4",strokeWidth:1.5}),"Share on LinkedIn"]}),(0,r.jsxs)("button",{onClick:v,className:"w-full flex items-center gap-3 px-4 py-2 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 text-sm text-neutral-700 dark:text-neutral-200",children:["idle"===h?(0,r.jsx)(i,{className:"w-4 h-4",strokeWidth:1.5}):(0,r.jsx)(s,{className:"w-4 h-4",strokeWidth:1.5}),"idle"===h?"Copy link":"Copied!"]})]})]})}var u=n(3025);function h(e){let{slug:t,title:n,type:a}=e,l=(0,u.usePathname)(),o="".concat(window.location.origin).concat(l);return(0,r.jsx)(d,{url:o,title:n})}},7894:function(e,t,n){"use strict";n.r(t),n.d(t,{ContributorsList:function(){return i}});var r=n(4297),a=n(4717),l=n(5218),o=n(3812);function i(e){let{contributors:t,className:i="",style:s="medium"}=e,[c,d]=(0,o.useState)([]);return((0,o.useEffect)(()=>{(async()=>{d(await Promise.all(t.map(async e=>(await n(9411)("./".concat(e))).profile)))})()},[t]),c.length)?"github"===s?(0,r.jsx)("div",{className:"flex flex-col gap-4 ".concat(i),children:(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("h2",{className:"text-sm font-medium text-neutral-700 dark:text-neutral-300",children:"Contributors"}),(0,r.jsx)("div",{className:"flex flex-wrap gap-2",children:c.map((e,n)=>(0,r.jsxs)(l.default,{href:"/about/".concat(t[n]),className:"group flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800",children:[(0,r.jsx)("div",{className:"relative",children:(0,r.jsx)(a.default,{src:e.photo,alt:e.name,width:24,height:24,className:"rounded-full"})}),(0,r.jsx)("div",{className:"flex flex-col",children:(0,r.jsx)("span",{className:"text-sm font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400",children:e.name})})]},e.name))})]})}):(0,r.jsx)("div",{className:"flex flex-col gap-4 ".concat(i),children:(0,r.jsx)("div",{className:"flex flex-col gap-3",children:(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:"flex -space-x-2",children:c.map((e,n)=>(0,r.jsx)(l.default,{href:"/about/".concat(t[n]),className:"relative rounded-full hover:z-10 transition-transform hover:scale-105",children:(0,r.jsx)(a.default,{src:e.photo,alt:e.name,width:40,height:40,className:"rounded-full border-2 border-white dark:border-neutral-900"})},e.name))}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("span",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:1===c.length?"Contributor":"Contributors"}),(0,r.jsx)("div",{className:"text-sm font-medium text-neutral-900 dark:text-neutral-100",children:c.map((e,n)=>(0,r.jsxs)("span",{children:[(0,r.jsx)(l.default,{href:"/about/".concat(t[n]),className:"hover:text-neutral-600 dark:hover:text-neutral-400",children:e.name}),n<c.length-1&&", "]},e.name))})]})]})})}):null}},3701:function(e,t,n){"use strict";n.r(t),n.d(t,{LazyImage:function(){return o}});var r=n(4297),a=n(3812),l=n(4717);function o(e){let{threshold:t=.1,rootMargin:n="50px",className:o="",objectFit:i="cover",alt:s,priority:c,fill:d,width:u,height:h,...f}=e,[m,x]=(0,a.useState)(c),[p,v]=(0,a.useState)(!1),g=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(c)return;let e=new IntersectionObserver(t=>{let[n]=t;n.isIntersecting&&(x(!0),e.disconnect())},{threshold:t,rootMargin:n});return g.current&&e.observe(g.current),()=>{e.disconnect()}},[t,n,c]);let y=d?"relative w-full h-full":u&&h?"relative":"relative inline-block";return(0,r.jsx)("div",{ref:g,className:"".concat(y," ").concat(o," ").concat(p?"":"bg-neutral-100 dark:bg-neutral-800 animate-pulse"),style:!d&&u&&h?{width:"string"==typeof u?u:"".concat(u,"px"),height:"string"==typeof h?h:"".concat(h,"px")}:void 0,children:(m||c)&&(0,r.jsx)(l.default,{...f,alt:s,priority:c,fill:d,width:d?void 0:u,height:d?void 0:h,onLoad:()=>{v(!0)},className:"".concat(p?"opacity-100":"opacity-0"," transition-opacity duration-300 object-").concat(i)})})}},6083:function(e,t,n){"use strict";n.r(t),n.d(t,{TableOfContents:function(){return l}});var r=n(4297),a=n(3812);function l(){let[e,t]=(0,a.useState)([]),[n,l]=(0,a.useState)("");(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("article h2, article h3")).map(e=>({id:e.id||"",text:e.textContent||"",level:Number(e.tagName.charAt(1))})).filter(e=>""!==e.id);if(t(e),window.location.hash){let e=window.location.hash.slice(1),t=document.getElementById(e);t&&setTimeout(()=>{let n=t.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:n,behavior:"smooth"}),l(e)},100)}let n=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting);if(t.length>0){let e=t[0];l(e.target.id);let n=new URL(window.location.href);n.hash=e.target.id,window.history.replaceState({},"",n.toString())}},{rootMargin:"-100px 0px -80% 0px",threshold:[0,1]});return e.forEach(e=>{let{id:t}=e,r=document.getElementById(t);r&&n.observe(r)}),()=>n.disconnect()},[]);let o=(e,t)=>{e.preventDefault();let n=document.getElementById(t);if(n){let e=n.getBoundingClientRect().top+window.pageYOffset-100;window.scrollTo({top:e,behavior:"smooth"}),l(t);let r=new URL(window.location.href);r.hash=t,window.history.replaceState({},"",r.toString())}};return 0===e.length?null:(0,r.jsxs)("nav",{className:"hidden lg:block",children:[(0,r.jsx)("h2",{className:"text-sm font-medium mb-4 text-neutral-900 dark:text-neutral-100",children:"Table of Contents"}),(0,r.jsx)("ul",{className:"space-y-2.5",children:e.map(e=>(0,r.jsx)("li",{style:{paddingLeft:"".concat((e.level-2)*1,"rem")},children:(0,r.jsx)("a",{href:"#".concat(e.id),className:"text-sm hover:text-primary transition-colors ".concat(n===e.id?"text-primary font-medium":"text-neutral-600 dark:text-neutral-400"),onClick:t=>o(t,e.id),children:e.text})},e.id))})]})}},5917:function(e,t,n){"use strict";n.d(t,{cn:function(){return l}});var r=n(8243),a=n(6038);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},79:function(){}},function(e){e.O(0,[214,486,788,681,452,744],function(){return e(e.s=46)}),_N_E=e.O()}]);