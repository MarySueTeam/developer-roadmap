import{r as t}from"./index.ed373d49.js";import{D as $}from"./index.es.ebad3893.js";import{S}from"./Spinner.cc2f813e.js";import{d as z}from"./http.82ebf0f1.js";import{a as C}from"./resource-progress.e28c933e.js";/* empty css                       */import{u as I}from"./use-outside-click.54b69c89.js";import{u as T}from"./use-keydown.0305ad6b.js";import{u as D}from"./use-toast.fb52de5d.js";import{u as M}from"./index.9435383e.js";import{b as P}from"./team.12f2469e.js";import{j as e}from"./jsx-runtime.391947bd.js";import{C as q}from"./close.ad691b78.js";function _(p){const{defaultRemovedItems:o=[],resourceId:r,resourceType:n,teamId:u,setTeamResourceConfig:v,onClose:c}=p,i=t.useRef(null),f=t.useRef(null),x=D(),[d,N]=t.useState(!0),[h,w]=t.useState(!1),[s,a]=t.useState(o),g=M(P);t.useEffect(()=>{function l(b){const y=b.target.closest(".clickable-group")?.dataset?.groupId;if(!y)return;const m=y.replace(/^\d+-/,"");s.includes(m)?(a(R=>R.filter(U=>U!==m)),C(m,"reset")):(a(R=>[...R,m]),C(m,"removed"))}return document.addEventListener("click",l),()=>{document.removeEventListener("click",l)}},[s]);let j="https://roadmap.sh";n==="roadmap"?j+=`/${r}.json`:j+=`/best-practices/${r}.json`;async function L(l){const k=await(await fetch(l)).json(),y=await $(k,{fontURL:"/fonts/balsamiq.woff2"});i.current?.replaceChildren(y),s.forEach(m=>{C(m,"removed")})}T("Escape",()=>{c()}),I(f,()=>{c()});async function B(){if(s.length===0)return;w(!0);const{error:l,response:b}=await z(`https://api.roadmap.sh/v1-update-team-resource-config/${u}`,{teamId:u,resourceId:r,resourceType:n,removed:s});if(l||!b){x.error(l?.message||"Error adding roadmap");return}v(b),c()}return t.useEffect(()=>{!i.current||!j||!r||!n||!u||L(j).catch(l=>{console.error(l),x.error("Something went wrong. Please try again!")}).finally(()=>{N(!1)})},[]),e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e.jsx("div",{className:"relative mx-auto h-full w-full max-w-4xl p-4 md:h-auto",children:e.jsxs("div",{id:g?.type==="company"?"customized-roadmap":"original-roadmap",ref:f,className:"popup-body relative rounded-lg bg-white shadow",children:[e.jsxs("div",{className:"sticky top-0 mb-3 rounded-2xl border-4 border-white bg-black p-4",children:[e.jsx("p",{className:"mb-2 text-gray-300",children:"Click and select the items to remove from the roadmap."}),e.jsxs("div",{className:"flex flex-row items-center gap-1.5",children:[e.jsx("button",{disabled:s.length===0,onClick:()=>B().finally(()=>w(!1)),className:"rounded-md bg-blue-600 px-2.5 py-1.5 text-sm text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400",children:h?e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(S,{className:"h-3 w-3",innerFill:"white",isDualRing:!1})," ","Saving .."]}):"Save Changes"}),e.jsx("button",{onClick:c,className:"rounded-md bg-gray-600 px-2.5 py-1.5 text-sm text-white hover:bg-gray-700",children:"Cancel"})]})]}),e.jsx("div",{id:"resource-svg-wrap",ref:i,className:"px-4"}),d&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(S,{isDualRing:!1,className:"mb-4 mt-2 h-4 w-4 animate-spin fill-blue-600 text-gray-200 sm:h-8 sm:w-8"})})]})})})}function E(p){const{isSelected:o,onClick:r,title:n}=p;return e.jsxs("button",{className:`group flex min-h-[35px] items-stretch overflow-hidden rounded-md text-sm ${o?"bg-black text-white transition-colors hover:bg-gray-700":"border border-gray-300 hover:bg-gray-100"}`,onClick:r,children:[e.jsx("span",{className:"flex items-center px-3",children:n}),o&&e.jsx("span",{className:"flex items-center bg-gray-700 px-3 text-xs text-white transition-colors",children:"×"}),!o&&e.jsx("span",{className:"flex items-center bg-gray-100 px-2.5 text-xs text-gray-500",children:"+"})]})}function ee(p){const{onClose:o,allRoadmaps:r,onRoadmapAdd:n,onRoadmapRemove:u,teamResourceConfig:v}=p,c=t.useRef(null),i=t.useRef(null),[f,x]=t.useState(r),[d,N]=t.useState("");T("Escape",()=>{o()}),I(c,()=>{o()}),t.useEffect(()=>{i.current&&i.current.focus()},[i]),t.useEffect(()=>{if(d.length===0){x(r);return}const s=r.filter(a=>a.title.toLowerCase().includes(d.toLowerCase())||a.id.toLowerCase().includes(d.toLowerCase()));x(s)},[d,r]);const h=f.filter(s=>s?.metadata?.tags?.includes("role-roadmap")),w=f.filter(s=>s?.metadata?.tags?.includes("skill-roadmap"));return e.jsx("div",{className:"fixed left-0 right-0 top-0 z-50 h-full items-center justify-center overflow-y-auto overflow-x-hidden overscroll-contain bg-black/50",children:e.jsx("div",{className:"relative mx-auto h-full w-full max-w-2xl p-4 md:h-auto",children:e.jsxs("div",{ref:c,className:"popup-body relative mt-4 overflow-hidden rounded-lg bg-white shadow",children:[e.jsxs("button",{type:"button",className:"popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900",onClick:o,children:[e.jsx("img",{alt:"close",src:q,className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close modal"})]}),e.jsx("input",{ref:i,type:"text",placeholder:"Search roadmaps",className:"block w-full border-b px-5 pb-3.5 pt-4 outline-none placeholder:text-gray-400",value:d,onInput:s=>N(s.target.value)}),e.jsxs("div",{className:"min-h-[200px] p-4",children:[e.jsx("span",{className:"block pb-3 text-xs uppercase text-gray-400",children:"Role Based Roadmaps"}),h.length===0&&e.jsx("p",{className:"mb-1 flex h-full items-start text-sm italic text-gray-400"}),h.length>0&&e.jsx("div",{className:"mb-5 flex flex-wrap items-center gap-2",children:h.map(s=>{const a=!!v.find(g=>g.resourceId===s.id);return e.jsx(E,{title:s.title,isSelected:a,onClick:()=>{a?u(s.id):n(s.id)}})})}),e.jsx("span",{className:"block pb-3 text-xs uppercase text-gray-400",children:"Skill Based Roadmaps"}),e.jsx("div",{className:"flex flex-wrap items-center gap-2",children:w.map(s=>{const a=!!v.find(g=>g.resourceId===s.id);return e.jsx(E,{title:s.title,isSelected:a,onClick:()=>{a?u(s.id):n(s.id)}})})})]})]})})})}export{ee as S,_ as U};
