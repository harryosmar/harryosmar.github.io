(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9161:function(e,t,n){Promise.resolve().then(n.t.bind(n,6384,23)),Promise.resolve().then(n.t.bind(n,8346,23)),Promise.resolve().then(n.t.bind(n,8663,23)),Promise.resolve().then(n.bind(n,4387))},4387:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return s}});var r=n(251),a=n(2417);function s(e){let{children:t,...n}=e;return(0,r.jsx)(a.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,...n,children:t})}},8663:function(){},8346:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},6384:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},2417:function(e,t,n){"use strict";n.d(t,{F:function(){return m},f:function(){return u}});var r=n(7255),a=(e,t,n,r,a,s,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&s?a.map(e=>s[e]||e):a;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},s=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,i=r.createContext(void 0),c={setTheme:e=>{},themes:[]},m=()=>{var e;return null!=(e=r.useContext(i))?e:c},u=e=>r.useContext(i)?r.createElement(r.Fragment,null,e.children):r.createElement(h,{...e}),d=["light","dark"],h=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=a?"system":"light",attribute:h="data-theme",value:p,children:v,nonce:g,scriptProps:w}=e,[S,k]=r.useState(()=>y(c,u)),[E,T]=r.useState(()=>y(c)),C=p?Object.values(p):m,L=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=_());let r=p?p[t]:t,o=n?b(g):null,i=document.documentElement,c=e=>{"class"===e?(i.classList.remove(...C),r&&i.classList.add(r)):e.startsWith("data-")&&(r?i.setAttribute(e,r):i.removeAttribute(e))};if(Array.isArray(h)?h.forEach(c):c(h),l){let e=s.includes(u)?u:null,n=s.includes(t)?t:e;i.style.colorScheme=n}null==o||o()},[g]),N=r.useCallback(e=>{let t="function"==typeof e?e(S):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[S]),P=r.useCallback(e=>{T(_(e)),"system"===S&&a&&!t&&L("system")},[S,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===c&&N(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),r.useEffect(()=>{L(null!=t?t:S)},[t,S]);let A=r.useMemo(()=>({theme:S,setTheme:N,forcedTheme:t,resolvedTheme:"system"===S?E:S,themes:a?[...m,"system"]:m,systemTheme:a?E:void 0}),[S,N,t,E,a,m]);return r.createElement(i.Provider,{value:A},r.createElement(f,{forcedTheme:t,storageKey:c,attribute:h,enableSystem:a,enableColorScheme:l,defaultTheme:u,value:p,themes:m,nonce:g,scriptProps:w}),v)},f=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:u,scriptProps:d}=e,h=JSON.stringify([s,n,i,t,m,c,o,l]).slice(1,-1);return r.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?u:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},b=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},_=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[526,223,429,744],function(){return e(e.s=9161)}),_N_E=e.O()}]);