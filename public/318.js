(self.webpackChunk=self.webpackChunk||[]).push([[318],{8748:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var n=s(3645),a=s.n(n)()((function(t){return t[1]}));a.push([t.id,".padding-top-63px[data-v-01444f88]{padding-top:63px}",""]);const r=a},7318:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>f});var n=s(629),a=s(5273),r=s(2280),o=(s(7673),s(6158),s(4155));function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const u={data:function(){return{isOpen:!1,guestRoutes:r.Z,hostname:window.location.hostname,launched:!1}},computed:l({},(0,n.rn)(["auth","general"])),methods:l(l({},(0,n.nv)(["logoutUser"])),{},{isEmpty:a.xb,drawer:function(){this.isOpen=!this.isOpen}}),watch:{isOpen:{immediate:!0,handler:function(t){o.client&&(t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow"))}}},mounted:function(){var t=this;axios.post("/web/check-if-launched").then((function(e){"Go"==e.data.button&&(t.launched=!0)}))},components:{Footer:function(){return s.e(369).then(s.bind(s,7369))}}};var p=s(3379),d=s.n(p),v=s(8748),h={insert:"head",singleton:!1};d()(v.Z,h);v.Z.locals;const f=(0,s(1900).Z)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{class:{"nav-bar":!0,"primary-red":!0}},[s("div",{staticClass:"flex items-center"},[t.isOpen?t._e():[s("img",{class:{"h-8 transition-all ease-in-out duration-300 rounded":!0},attrs:{src:"/storage/webCMS/images/"+t.general.round_logo,alt:"Logo"}}),t._v(" "),s("p",{class:{"ml-4 font-bold transition-all ease-in-out duration-300 text-white":!0}},[t._v("\n                    PLE-REAP\n                ")])]],2),t._v(" "),s("div",{staticClass:"flex items-center pr-6"},[s("div",{staticClass:"flex justify-between bg-transparent xl:hidden"},[s("router-link",{attrs:{to:"/home"}},[s("span",{staticClass:"nav-link"},[s("span",[t._v("Home")])])]),t._v(" "),s("div",{staticClass:"group inline-block dropdown"},[s("a",{staticClass:"nav-link"},[s("span",{staticClass:"cursor-pointer"},[t._v("Who we are")]),t._v(" "),s("span",[s("svg",{staticClass:"\n                                    fill-current\n                                    h-4\n                                    w-4\n                                    transform\n                                    group-hover:-rotate-180\n                                    transition\n                                    duration-150\n                                    ease-in-out\n                                ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),t._v(" "),s("ul",{staticClass:"dropdown-ul primary-blue"},[s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/welcome-message"}},[t._v("Welcome message")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/vision"}},[t._v("Vision")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/mission"}},[t._v("Mission")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/content-partners"}},[t._v("Content partners")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/content-editors"}},[t._v("Content editors")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/leadership-profile"}},[t._v("Our team")])],1)])]),t._v(" "),s("div",{staticClass:"group inline-block dropdown"},[s("a",{staticClass:"nav-link"},[s("span",{staticClass:"cursor-pointer"},[t._v("What we offer")]),t._v(" "),s("span",[s("svg",{staticClass:"\n                                    fill-current\n                                    h-4\n                                    w-4\n                                    transform\n                                    group-hover:-rotate-180\n                                    transition\n                                    duration-150\n                                    ease-in-out\n                                ",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])]),t._v(" "),s("ul",{staticClass:"dropdown-ul primary-blue"},[s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/about-the-program"}},[t._v("About the program")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/payments"}},[t._v("Payments")])],1),t._v(" "),s("li",{staticClass:"dropdown-li"},[s("router-link",{staticClass:"block",attrs:{to:"/future-offerings"}},[t._v("Future offerings")])],1)])]),t._v(" "),s("router-link",{attrs:{to:"/contact-us"}},[s("span",{staticClass:"nav-link"},[s("span",[t._v("Contact us")])])]),t._v(" "),s("a",{attrs:{href:t.launched?"https://med.ple-reap.com/login":"",target:"_blank"},on:{click:function(e){t.launched||e.preventDefault()}}},[t._m(0)]),t._v(" "),t.isEmpty(t.auth.user)?t._e():s("router-link",{attrs:{to:"/cms/general"}},[s("span",{staticClass:"btn btn-ghost"},[t._v("Go to CMS")])])],1),t._v(" "),s("button",{staticClass:"ml-2 mr-2 min-xl:hidden text-white",attrs:{"aria-label":"Open Menu"},on:{click:t.drawer}},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),s("aside",{class:{"transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 border-r-2 ":!0,"translate-x-0 opacity-100":t.isOpen,"-translate-x-full opacity-0":!t.isOpen}},[s("span",{staticClass:"\n                    flex\n                    w-full\n                    items-center\n                    justify-between\n                    border-b\n                    p-4\n                "},[s("img",{staticClass:"h-8 rounded",attrs:{src:"/storage/webCMS/images/"+t.general.round_logo,alt:"Logo"}}),t._v(" "),s("p",{staticClass:"ml-4 font-bold"},[t._v("\n                    "+t._s(t.isEmpty(t.$route.meta.topBar)?"":t.$route.meta.topBar)+"\n                ")]),t._v(" "),s("button",{staticClass:"ml-2 mr-2 text-black",attrs:{"aria-label":"Open Menu"},on:{click:t.drawer}},[s("svg",{staticClass:"w-8 h-8",attrs:{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])]),t._v(" "),t._l(t.guestRoutes,(function(e,n){return[e.hidden||""==e.path?""==e.path?s("span",{key:"guestRoute-"+n,staticClass:"p-4 font-bold text-black"},[t._v("\n                    "+t._s(e.title))]):t._e():s("router-link",{key:"guestRoute-"+n,attrs:{to:e.path},nativeOn:{click:function(e){t.isOpen=!1}}},[s("span",{staticClass:"\n                            flex\n                            items-center\n                            p-4\n                            text-black\n                            hover:bg-blue-900\n                            hover:text-white\n                        "},[s("span",{staticClass:"mr-2"},[s("i",{class:t.isEmpty(e.icon)?"far fa-user":e.icon})]),t._v(" "),s("span",[t._v(t._s(e.title))])])])]})),t._v(" "),s("a",{attrs:{href:t.launched?"https://med.ple-reap.com/login":"",target:"_blank"},on:{click:function(e){t.launched||e.preventDefault()}}},[t._m(1)]),t._v(" "),t.isEmpty(t.auth.user)?t._e():s("router-link",{attrs:{to:"/cms/general"}},[s("span",{staticClass:"btn btn-ghost"},[t._v("Go to CMS")])])],2)]),t._v(" "),s("div",{class:{"page-content":!0},attrs:{id:"page-content"}},[s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1),t._v(" "),s("Footer")],1)])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"nav-link"},[s("span",[t._v("Log in")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"nav-link"},[s("span",[t._v("Log in")])])}],!1,null,"01444f88",null).exports}}]);