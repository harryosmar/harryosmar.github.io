(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9214:function(e,t,n){Promise.resolve().then(n.t.bind(n,1259,23)),Promise.resolve().then(n.t.bind(n,30,23)),Promise.resolve().then(n.t.bind(n,8900,23)),Promise.resolve().then(n.bind(n,6378))},6378:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return s}});var r=n(4297),a=n(7645);function s(e){let{children:t,...n}=e;return(0,r.jsx)(a.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,...n,children:t})}},1259:function(){},8900:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},30:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},7645:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(3812),a=(e,t,n,r,a,s,o,l)=>{let i=document.documentElement,c=["light","dark"];function m(t){(Array.isArray(e)?e:[e]).forEach(e=>{let n="class"===e,r=n&&s?a.map(e=>s[e]||e):a;n?(i.classList.remove(...r),i.classList.add(t)):i.setAttribute(e,t)}),l&&c.includes(t)&&(i.style.colorScheme=t)}if(r)m(r);else try{let e=localStorage.getItem(t)||n,r=o&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(r)}catch(e){}},s=["light","dark"],o="(prefers-color-scheme: dark)",l=r.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=r.useContext(l))?e:i},m=e=>r.useContext(l)?r.createElement(r.Fragment,null,e.children):r.createElement(d,{...e}),u=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:a=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:m=u,defaultTheme:d=a?"system":"light",attribute:_="data-theme",value:v,children:p,nonce:g,scriptProps:S}=e,[k,E]=r.useState(()=>f(c,d)),[T,w]=r.useState(()=>f(c)),C=v?Object.values(v):m,L=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&a&&(t=b());let r=v?v[t]:t,o=n?y(g):null,l=document.documentElement,c=e=>{"class"===e?(l.classList.remove(...C),r&&l.classList.add(r)):e.startsWith("data-")&&(r?l.setAttribute(e,r):l.removeAttribute(e))};if(Array.isArray(_)?_.forEach(c):c(_),i){let e=s.includes(d)?d:null,n=s.includes(t)?t:e;l.style.colorScheme=n}null==o||o()},[g]),N=r.useCallback(e=>{let t="function"==typeof e?e(k):e;E(t);try{localStorage.setItem(c,t)}catch(e){}},[k]),P=r.useCallback(e=>{w(b(e)),"system"===k&&a&&!t&&L("system")},[k,t]);r.useEffect(()=>{let e=window.matchMedia(o);return e.addListener(P),P(e),()=>e.removeListener(P)},[P]),r.useEffect(()=>{let e=e=>{e.key===c&&N(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),r.useEffect(()=>{L(null!=t?t:k)},[t,k]);let A=r.useMemo(()=>({theme:k,setTheme:N,forcedTheme:t,resolvedTheme:"system"===k?T:k,themes:a?[...m,"system"]:m,systemTheme:a?T:void 0}),[k,N,t,T,a,m]);return r.createElement(l.Provider,{value:A},r.createElement(h,{forcedTheme:t,storageKey:c,attribute:_,enableSystem:a,enableColorScheme:i,defaultTheme:d,value:v,themes:m,nonce:g,scriptProps:S}),p)},h=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:s,enableSystem:o,enableColorScheme:l,defaultTheme:i,value:c,themes:m,nonce:u,scriptProps:d}=e,h=JSON.stringify([s,n,i,t,m,c,o,l]).slice(1,-1);return r.createElement("script",{...d,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(a.toString(),")(").concat(h,")")}})}),f=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},y=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")}},function(e){e.O(0,[681,452,744],function(){return e(e.s=9214)}),_N_E=e.O()}]);