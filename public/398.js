(self.webpackChunk=self.webpackChunk||[]).push([[398],{398:(t,s,n)=>{"use strict";n.r(s),n.d(s,{default:()=>e});var a=n(5273);const i={data:function(){return{data:{}}},mounted:function(){var t=this;axios.post("/web/vision-initialize").then((function(s){t.data=s.data})).catch((function(s){return(0,a.gP)(t,s)}))}};const e=(0,n(1900).Z)(i,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"section vision pt-6",attrs:{id:"vision"}},[n("div",{staticClass:"flex items-end w-full mb-12"},[n("img",{staticClass:"mr-4",staticStyle:{"max-height":"100px"},attrs:{src:"/img/logo only.png",alt:""}}),t._v(" "),n("p",{staticClass:"\n                text-4xl\n                font-bold\n                mb-12\n                border-bottom-blue\n                text-blue\n                w-full\n            ",domProps:{innerHTML:t._s(t.data.title)}})]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 min-xl:grid-cols-2 min-xl:gap-10"},[n("div",{staticClass:"program-picture mb-12"},[n("img",{staticClass:"rounded-full lg:mb-4",attrs:{src:"/storage/webCMS/images/"+t.data.picture,alt:"",srcset:""}})]),t._v(" "),n("div",{staticClass:"\n                flex flex-wrap\n                content-center\n                program-description\n                mt-10\n                mb-8\n            "},[n("div",[n("p",{staticClass:"text-2xl mb-4",domProps:{innerHTML:t._s(t.data.content)}})])])])])}),[],!1,null,null,null).exports}}]);