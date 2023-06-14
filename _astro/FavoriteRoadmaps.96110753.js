import{h as l,p as x}from"./hooks.module.a845df0c.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import{a as v}from"./http.1ee0e3a2.js";import"./preact.module.f1575aff.js";import"./jwt.2bcbdb7f.js";function p(s){const{additionalClasses:r="mr-2 top-[0.5px] w-[20px] h-[20px]"}=s;return e("svg",{className:`relative ${r}]`,stroke:"currentColor",fill:"currentColor","stroke-width":"0",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})})}function d(s){const{title:r="Start learning ..",message:t="Your progress and favorite roadmaps will show up here."}=s;return e("div",{className:"relative flex min-h-full flex-col items-start sm:items-center justify-center py-6",children:[e("h2",{className:"mb-1 flex items-center text-lg sm:text-2xl text-gray-200",children:[e(p,{additionalClasses:"mr-2 top-[0.5px] w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"}),"Start learning .."]}),e("p",{className:"text-gray-400 text-sm sm:text-base",children:t})]})}function y(s){const{progress:r}=s;return e("div",{className:"relative pt-4 sm:pt-7 pb-12",children:[e("p",{className:"mb-4 flex items-center text-sm text-gray-400",children:[e(p,{additionalClasses:"mr-1.5 w-[14px] h-[14px]"}),e("span",{className:"hidden sm:inline",children:"Your progress and favorite roadmaps."}),e("span",{className:"inline sm:hidden",children:"Your progress and favorite roadmaps."})]}),e("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2",children:r.map(t=>{const a=t.resourceType==="roadmap"?`/${t.resourceId}`:`/best-practices/${t.resourceId}`,n=(t.skipped+t.done)/t.total*100;return e("a",{href:a,className:"relative flex flex-col rounded-md border border-slate-800 bg-slate-900 p-3 text-sm text-slate-400 hover:border-slate-600 hover:text-slate-300 overflow-hidden",children:[e("span",{className:"relative z-20",children:t.resourceTitle}),e("span",{class:"absolute bottom-0 left-0 top-0 z-10 bg-[#172a3a]",style:{width:`${n}%`}})]})})})]})}function b(s){s.forEach(r=>{const t=r.resourceType==="best-practice"?`/best-practices/${r.resourceId}`:`/${r.resourceId}`,a=document.querySelector(`a[href="${t}"]`);if(!a)return;const c=(r.done+r.skipped)/r.total*100,i=a.querySelector("[data-progress]");i&&(i.style.width=`${c}%`)})}function I(){const[s,r]=l(!0),[t,a]=l(!0),[n,c]=l([]),[i,m]=l(0);function h(){const o=document.getElementById("hero-text");o&&(o.classList.add("opacity-0"),setTimeout(()=>{o.parentElement?.removeChild(o),r(!1),setTimeout(()=>{m(100)},50)},0))}async function g(){a(!0);const{response:o,error:f}=await v("https://api.roadmap.sh/v1-get-user-all-progress");f||!o||(c(o),a(!1),h(),b(o))}if(x(()=>{g().finally(()=>{a(!1)})},[]),s)return null;const u=n.length>0;return e("div",{class:`flex min-h-[192px] bg-gradient-to-b transition-opacity duration-500 sm:min-h-[280px] opacity-${i} ${u&&"border-t border-t-[#1e293c]"}`,children:e("div",{className:"container min-h-full",children:[t&&e(d,{title:"Loading progress .."}),!t&&n.length==0&&e(d,{}),!t&&n.length>0&&e(y,{progress:n})]})})}export{I as FavoriteRoadmaps};
