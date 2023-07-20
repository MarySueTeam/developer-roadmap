import{h as g,p as b}from"./hooks.module.7cc4e70a.js";import{u as v}from"./use-auth.13ac07ad.js";import{a as N}from"./http.82ebf0f1.js";import{p as k}from"./page.c1a8a472.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as C}from"./preact.module.7b19fc78.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";function y(){const[a,t]=g(!1),l=s=>{navigator.clipboard.writeText(s).then(),t(!0)};return b(()=>{let s;return a&&(s=setTimeout(()=>{t(!1)},2e3)),()=>clearTimeout(s)},[a]),{isCopied:a,copyText:l}}const w="/_astro/copy.bb4dc091.svg";function p(a){const{text:t,isDisabled:l,isSelected:s,onClick:i}=a;return e("button",{className:`rounded-md border p-1 px-2 text-sm ${s?" border-gray-500 bg-gray-300 ":""} ${l?" cursor-not-allowed opacity-40 ":" cursor-pointer "}`,onClick:i,children:t})}function S(a){const{selectedRoadmaps:t,setSelectedRoadmaps:l}=a,[s,i]=g(),c=async()=>{const{response:r,error:o}=await N("https://api.roadmap.sh/v1-get-user-all-progress");o||!r||i(r)};b(()=>{c().finally(()=>{k.set("")})},[]);const d=t.length<4,n=s?.filter(r=>r.resourceType==="roadmap")||[];return e("div",{className:"flex flex-wrap gap-1",children:[n?.length===0&&e("p",{className:"text-sm text-gray-400 italic",children:"No progress tracked so far."}),n?.map(r=>{const o=t.includes(r.resourceId),h=o||d;return e(p,{text:r.resourceTitle,isDisabled:!h,isSelected:o,onClick:()=>{o?l(t.filter(m=>m!==r.resourceId)):t.length<4&&l([...t,r.resourceId])}})})]})}function R(){return e("p",{className:"mt-3 rounded-md border p-2 text-sm w-full bg-yellow-100 border-yellow-400 text-yellow-900",children:["Add this badge to your"," ",e("a",{href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:"GitHub profile readme."})]})}async function $({url:a,name:t,extension:l="png",scale:s=1}){try{const c=await(await fetch(a)).text(),d=`data:image/svg+xml;base64,${window.btoa(c)}`,n=new Image;n.src=d,n.onload=()=>{const r=document.createElement("canvas");r.width=n.width*s,r.height=n.height*s,r.getContext("2d")?.drawImage(n,0,0,r.width,r.height);const h=r.toDataURL("image/png",1),m=document.createElement("a");m.href=h,m.download=`${t}.${l}`,m.click()}}catch{alert("Error downloading image")}}function u(a){const{step:t}=a;return e("span",{className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 text-white",children:t})}function f(a){const{text:t,title:l}=a,{isCopied:s,copyText:i}=y();return e("div",{className:"flex w-full flex-grow flex-col overflow-hidden rounded border border-gray-300 bg-gray-50",children:[e("div",{className:"flex items-center justify-between gap-2 border-b border-gray-300 px-3 py-2",children:[e("span",{className:"text-xs uppercase leading-none text-gray-400",children:l}),e("button",{className:"flex items-center",onClick:()=>i(t),children:[s&&e("span",{className:"mr-1 text-xs leading-none text-gray-700",children:"Copied!"}),e("img",{src:w,alt:"Copy",className:"inline-block h-4 w-4"})]})]}),e("textarea",{className:"no-scrollbar block h-12 w-full overflow-x-auto whitespace-nowrap bg-gray-200/70 p-3 text-sm text-gray-900 focus:bg-gray-50 focus:outline-0",readOnly:!0,onClick:c=>{c.target.select(),i(c.target.value)},children:t})]})}function x(a){const{label:t}=a;return e("span",{className:"mb-3 flex items-center gap-2 text-sm leading-none text-gray-400",children:t})}function G(){const{isCopied:a,copyText:t}=y(),[l,s]=g([]),[i,c]=g("tall"),[d,n]=g("dark"),r=v();if(!r)return null;const o=new URL(`https://api.roadmap.sh/v1-badge/${i}/${r?.id}`);return o.searchParams.set("variant",d),l.length>0&&o.searchParams.set("roadmaps",l.join(",")),e(C,{children:[e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b pt-2 pb-4",children:[e(u,{step:1}),e("div",{children:[e(x,{label:"Pick progress to show (Max. 4)"}),e("div",{className:"flex flex-wrap",children:e(S,{selectedRoadmaps:l,setSelectedRoadmaps:s})})]})]}),e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b py-4",children:[e(u,{step:2}),e("div",{children:[e(x,{label:"Select Mode (Dark vs Light)"}),e("div",{className:"flex gap-2",children:[e(p,{text:"Dark",isDisabled:!1,isSelected:d==="dark",onClick:()=>{n("dark")}}),e(p,{text:"Light",isDisabled:!1,isSelected:d==="light",onClick:()=>{n("light")}})]})]})]}),e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b py-4",children:[e(u,{step:3}),e("div",{children:[e(x,{label:"Select Version"}),e("div",{className:"flex gap-2",children:[e(p,{text:"Tall",isDisabled:!1,isSelected:i==="tall",onClick:()=>{c("tall")}}),e(p,{text:"Wide",isDisabled:!1,isSelected:i==="wide",onClick:()=>{c("wide")}})]})]})]}),e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b py-4",children:[e(u,{step:4}),e("div",{class:"flex-grow",children:[e(x,{label:"Share your #RoadCard with others"}),e("div",{className:"rounded-md border bg-gray-50 p-2 text-center",children:e("a",{href:o.toString(),target:"_blank",rel:"noopener noreferrer",className:`relative block hover:cursor-pointer ${i==="tall"?" max-w-[270px] ":" w-full "}`,children:e("img",{src:o.toString(),alt:"RoadCard"})})}),e("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[e("button",{className:"flex items-center justify-center rounded border border-gray-300 p-1.5 px-2 text-sm font-medium",onClick:()=>$({url:o.toString(),name:"road-card",scale:4}),children:"Download"}),e("button",{disabled:a,className:"flex cursor-pointer items-center justify-center rounded border border-gray-300 p-1.5 px-2 text-sm font-medium disabled:bg-blue-50",onClick:()=>t(o.toString()),children:[e("img",{alt:"Copy",src:w,className:"mr-1"}),a?"Copied!":"Copy Link"]})]}),e("div",{className:"mt-3 flex flex-col gap-3",children:[e(f,{title:"HTML",text:`<a href="https://roadmap.sh"><img src="${o}" alt="roadmap.sh"/></a>`.trim()}),e(f,{title:"Markdown",text:`[![roadmap.sh](${o})](https://roadmap.sh)`.trim()})]}),e(R,{})]})]})]})}export{G as RoadCardPage};
