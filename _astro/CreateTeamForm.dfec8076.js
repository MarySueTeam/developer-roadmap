import{h as f,_ as z,p as T}from"./hooks.module.7cc4e70a.js";import{C as A}from"./CheckIcon.ecb36f9c.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import{k as U}from"./preact.module.7b19fc78.js";import{B as E}from"./building.0debfcad.js";import{d as _,h as B,a as $}from"./http.82ebf0f1.js";import{S as j}from"./Spinner.95905af5.js";import{U as H,S as q}from"./SearchSelector.9d6b6d2c.js";import{p as R}from"./page.c1a8a472.js";import{g as D,s as C}from"./browser.bcc09af3.js";import{R as G}from"./RoleDropdown.0bcc7fe3.js";import{u as V}from"./use-toast.fb52de5d.js";import"./jwt.f0e0aa9c.js";import"./index.es.ebad3893.js";import"./resource-progress.b09662c1.js";/* empty css                       */import"./use-outside-click.85d1a62f.js";import"./use-keydown.41d75069.js";import"./index.a98c85f5.js";import"./toast.1fe7142d.js";function Y(p){const{steps:t,activeIndex:n=0,completeSteps:a=[]}=p;return e("ol",{className:"flex w-full items-center text-gray-500",children:t.map((h,b)=>{const u=a.includes(b),c=n===b,s=b===t.length-1;return e(U,{children:[e("li",{className:`flex items-center ${u||c?"text-black":"text-gray-400"}`,children:[u&&e(A,{additionalClasses:"mr-2 top-[0.5px] w-[18px] h-[18px]"}),!u&&e("span",{class:"mr-2 font-semibold",children:b+1}),e("span",{className:"flex flex-grow",children:h.label})]}),!s&&e("li",{className:"mx-5 flex flex-grow rounded-md bg-gray-200",children:e("span",{className:"h-1 w-full"})})]})})})}const F="/_astro/users.1dd5ca56.svg";function P(p){const{isLoading:t=!1,text:n="Next Step",type:a="button",loadingMessage:h="Please wait ..",onClick:b=()=>null,hasNextArrow:u=!0}=p;return e("button",{type:a,onClick:b,disabled:t,className:"rounded-md border border-black bg-black px-4 py-2 text-white disabled:opacity-50",children:t?e("span",{className:"flex items-center justify-center",children:[e(j,{}),e("span",{className:"ml-2",children:h})]}):e(U,{children:[n,u&&e("span",{className:"ml-1",children:"→"})]})})}const W=[{value:"company",label:"Company",icon:E,description:"Use roadmap.sh for your company"},{value:"study_group",label:"Study Group",icon:F,description:"Invite your friends and learn together"}];function O(p){const{team:t,selectedTeamType:n,onStepComplete:a,setSelectedTeamType:h}=p,[b,u]=f(!1),[c,s]=f();async function d(){if(!t){a();return}u(!0),s("");const{response:i,error:y}=await _(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:t.name,website:t?.links?.website||void 0,type:n,gitHubUrl:t?.links?.github||void 0,...n==="company"&&{teamSize:t.teamSize,linkedInUrl:t?.links?.linkedIn||void 0}});if(y||!i){u(!1),s(y?.message||"Something went wrong");return}u(!1),s(""),a()}return e(U,{children:[e("div",{className:"flex flex-row gap-3",children:W.map(i=>e("button",{className:`flex flex-grow flex-col items-center rounded-lg border px-5 py-12 ${i.value==n?"border-gray-400 bg-gray-100":"border-gray-300 hover:border-gray-400 hover:bg-gray-50"}`,onClick:()=>h(i.value),children:[e("img",{alt:i.label,src:i.icon,className:`mb-3 h-12 w-12 opacity-10 ${i.value===n?"opacity-100":""}`}),e("span",{className:"mb-1 block text-2xl font-bold",children:i.label}),e("span",{className:"text-sm text-gray-500",children:i.description})]}))}),c&&e("div",{className:"mt-4 text-sm text-red-500",children:c}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("a",{href:"/account",className:"rounded-md border border-red-400 bg-white px-8 py-2 text-red-500",children:"Cancel"}),e(P,{type:"button",onClick:d,isLoading:b,text:"Next Step",loadingMessage:"Updating team .."})]})]})}const J=["0-1","2-10","11-50","51-200","201-500","501-1000","1000+"];function K(p){const{team:t,selectedTeamType:n,onBack:a,onStepComplete:h}=p,[b,u]=f(""),c=z(null);T(()=>{c.current&&c.current.focus()},[c]);const[s,d]=f(!1),[i,y]=f(t?.name||""),[w,v]=f(t?.links?.website||""),[r,l]=f(t?.links?.linkedIn||""),[o,g]=f(t?.links?.github||""),[m,N]=f(t?.teamSize||"");return e("form",{onSubmit:async x=>{if(x.preventDefault(),d(!0),!i||!n){d(!1);return}let k,S;if(t?._id){if({response:k,error:S}=await _(`https://api.roadmap.sh/v1-update-team/${t._id}`,{name:i,website:w||void 0,type:n,gitHubUrl:o||void 0,...n==="company"&&{teamSize:m,linkedInUrl:r||void 0}}),S||k?.status!=="ok"){u(S?.message||"Something went wrong. Please try again."),d(!1);return}h({...t,name:i,_id:t._id,links:{website:w||t?.links?.website,linkedIn:r||t?.links?.linkedIn,github:o||t?.links?.github},type:n,teamSize:m})}else{if({response:k,error:S}=await B("https://api.roadmap.sh/v1-create-team",{name:i,website:w||void 0,type:n,gitHubUrl:o||void 0,...n==="company"&&{teamSize:m,linkedInUrl:r||void 0},roadmapIds:[],bestPracticeIds:[]}),S||!k?._id){u(S?.message||"Something went wrong. Please try again."),d(!1);return}h(k)}},children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:n==="company"?"Company Name":"Group Name"}),e("input",{type:"text",name:"name",ref:c,autofocus:!0,id:"name",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"roadmap.sh",disabled:s,required:!0,value:i,onInput:x=>y(x.target.value)})]}),n==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Website"}),e("input",{type:"url",name:"website",required:!0,id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://roadmap.sh",disabled:s,value:w,onInput:x=>v(x.target.value)})]}),n==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"LinkedIn URL"}),e("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/company/roadmapsh",disabled:s,value:r,onInput:x=>l(x.target.value)})]}),e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"GitHub Organization URL"}),e("input",{type:"url",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/roadmapsh",disabled:s,value:o,onInput:x=>g(x.target.value)})]}),n==="company"&&e("div",{className:"mt-4 flex w-full flex-col",children:[e("label",{for:"team-size",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Company Size"}),e("select",{name:"team-size",id:"team-size",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:n==="company",disabled:s,value:m,onChange:x=>N(x.target.value),children:[e("option",{value:"",selected:!0,children:"Select team size"}),J.map(x=>e("option",{value:x,children:[x," people"]}))]})]}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:a,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e(P,{isLoading:s,text:"Next Step",type:"submit",loadingMessage:"Creating team .."})]})]})}const Q="/_astro/search.b115d44e.svg";function X(p){const{team:t,teamResourceConfig:n=[],setTeamResourceConfig:a}=p,[h,b]=f([]),[u,c]=f(""),[s,d]=f("");async function i(){const{error:r,response:l}=await $("/pages.json");if(r){d(r.message||"Something went wrong. Please try again!");return}if(!l)return[];const o=l.filter(g=>g.group==="Roadmaps").sort((g,m)=>g.title==="Android"?1:g.title.localeCompare(m.title));return b(o),l}async function y(r){if(!t?._id)return;R.set("Deleting resource");const{error:l,response:o}=await _(`https://api.roadmap.sh/v1-delete-team-resource-config/${t._id}`,{resourceId:r,resourceType:"roadmap"});if(l||!o){d(l?.message||"Error deleting roadmap");return}a(o)}async function w(r){R.set("Removing roadmap"),y(r).finally(()=>{R.set("")})}async function v(r){if(!t?._id)return;R.set("Adding roadmap to team");const{error:l,response:o}=await _(`https://api.roadmap.sh/v1-update-team-resource-config/${t._id}`,{teamId:t._id,resourceId:r,resourceType:"roadmap",removed:[]});if(l||!o){d(l?.message||"Error adding roadmap");return}a(o)}return T(()=>{i().finally()},[]),e("div",{children:[u&&e(H,{onClose:()=>c(""),resourceId:u,resourceType:"roadmap",teamId:t?._id,setTeamResourceConfig:a,defaultRemovedItems:n.find(r=>r.resourceId===u)?.removed||[]}),e(q,{placeholder:"Search Roadmaps ..",onSelect:r=>{const l=r.value;v(l).finally(()=>{R.set("")})},options:h.filter(r=>!n.map(l=>l.resourceId).includes(r.id)).map(r=>({value:r.id,label:r.title})),searchInputId:"roadmap-input",inputClassName:"mt-2 block w-full rounded-md border px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"}),!n.length&&e("div",{className:"mt-4 rounded-md border px-4 py-12 text-center text-sm text-gray-700",children:[e("img",{alt:"search",src:Q,className:"mx-auto mb-5 h-[42px] w-[42px] opacity-10"}),e("span",{className:"block text-lg font-semibold text-black",children:"No roadmaps selected."}),e("p",{className:"text-sm text-gray-400",children:"Please search and add roadmaps from above"})]}),n.length>0&&e("div",{className:"mt-4 grid grid-cols-3 flex-wrap gap-2.5",children:n.map(({resourceId:r,removed:l})=>{const o=h.find(g=>g.id===r)?.title||"...";return e("div",{className:"flex flex-col items-start rounded-md border border-gray-300",children:[e("div",{className:"w-full px-3 pb-2 pt-4",children:[e("span",{className:"mb-0.5 block text-base font-medium leading-none text-black",children:o}),l.length>0?e("span",{className:"text-xs leading-none text-gray-900",children:[l.length," topic",l.length>1?"s":""," removed"]}):e("span",{className:"text-xs italic leading-none text-gray-400/60",children:"No changes made .."})]}),e("div",{className:"flex w-full justify-between p-3",children:[e("button",{type:"button",className:"text-xs text-gray-500 underline hover:text-black focus:outline-none",onClick:()=>c(r),children:"Customize"}),e("button",{type:"button",className:"text-xs text-red-500 underline hover:text-black",onClick:()=>w(r),children:"Remove"})]})]})})})]})}function Z(p){const{team:t,onBack:n,onNext:a,teamResourceConfig:h,setTeamResourceConfig:b}=p;return e(U,{children:[e("div",{className:"mt-4 flex w-full flex-col",children:[e("div",{className:"mb-1 mt-2",children:[e("h2",{className:"mb-2 text-2xl font-bold",children:"Select Roadmaps"}),e("p",{className:"text-sm text-gray-700",children:"Picks the roadmaps to be made available to your team for tracking. You can always add more later."})]}),e(X,{team:t,teamResourceConfig:h,setTeamResourceConfig:b})]}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:n,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e("button",{type:"submit",disabled:h.length===0,onClick:a,className:"rounded-md border bg-black px-4 py-2 text-white disabled:opacity-50",children:["Next Step",e("span",{className:"ml-1",children:"→"})]})]})]})}function ee(p){const{className:t=""}=p;return e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:t,children:[e("path",{d:"M3 6h18"}),e("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),e("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),e("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),e("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})}function L(){return`${new Date().getTime()}`}function te(p){const{onNext:t,onBack:n,team:a}=p,[h,b]=f(""),[u,c]=f(!1),s=z(null),[d,i]=f([{id:L(),email:"",role:"member"}]);async function y(){c(!0);const{error:r,response:l}=await B(`https://api.roadmap.sh/v1-invite-team/${a?._id}`,{members:d});if(r||!l){b(r?.message||"Something went wrong"),c(!1);return}t()}function w(){s.current&&s.current.focus()}function v(r){r.preventDefault(),y().finally(()=>null)}return T(()=>{w()},[d.length]),e("form",{className:"mt-4 flex w-full flex-col",onSubmit:v,children:[e("div",{class:"mb-1 mt-2",children:[e("h2",{class:"mb-2 text-2xl font-bold",children:"Invite your Team"}),e("p",{class:"text-sm text-gray-700",children:"Use the form below to invite your team members to your team. You can also invite them later."})]}),e("div",{className:"mt-4 flex flex-col gap-1",children:d.map((r,l)=>e("div",{className:"flex flex-row gap-2",children:[e("input",{ref:l===d.length-1?s:null,autofocus:!0,type:"email",name:"email",required:!0,id:"email",placeholder:"Email",value:r.email,onChange:o=>{const g=d.map(m=>m.id===r.id?{...m,email:o.target?.value}:m);i(g)},className:"flex-grow rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900"}),e(G,{selectedRole:r.role,setSelectedRole:o=>{const g=d.map(m=>m.id===r.id?{...m,role:o}:m);i(g)}}),e("button",{disabled:d.length<=1,type:"button",className:"rounded-md border border-red-200 bg-white px-4 py-2 text-red-500 hover:bg-red-100 disabled:opacity-30",onClick:()=>{i(d.filter(o=>o.id!==r.id))},children:e(ee,{className:"h-5 w-5"})})]},r.id))}),d.length<=30&&e("button",{onClick:()=>{i([...d,{id:L(),email:"",role:"member"}])},type:"button",className:"mt-2 rounded-md border border-dashed border-gray-400 py-2 text-sm text-gray-500 hover:border-gray-500 hover:text-gray-800",children:"+ Add another"}),h&&e("div",{className:"mt-2 text-sm font-medium text-red-500",role:"alert",children:h}),e("div",{className:"mt-4 flex flex-row items-center justify-between gap-2",children:[e("button",{type:"button",onClick:n,className:"rounded-md border border-red-400 bg-white px-4 py-2 text-red-500",children:[e("span",{className:"mr-1",children:"←"}),"Previous Step"]}),e("div",{className:"flex gap-2",children:[e("button",{type:"button",onClick:t,className:"rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-500 hover:border-gray-400 hover:text-black",children:"Skip for Now"}),e(P,{type:"submit",isLoading:u,text:"Send Invites",loadingMessage:"Updating team ..",hasNextArrow:!1})]})]})]})}function re({team:p}){return e("div",{className:"mt-4 flex flex-col rounded-xl border py-12 text-center",children:e("div",{class:"mb-1 flex flex-col items-center",children:[e(A,{additionalClasses:"h-14 w-14 mb-4 opacity-100"}),e("h2",{class:"mb-2 text-2xl font-bold",children:"Team Created"}),e("p",{class:"text-sm text-gray-700",children:"Your team has been created. Happy learning!"}),e("a",{href:`/team/progress?t=${p._id}`,class:"mt-4 rounded-md bg-black px-5 py-1.5 text-sm text-white",children:"View Team"})]})})}function Se(){const{s:p,t}=D(),n=V(),[a,h]=f(),[b,u]=f(!!t&&!a?._id),[c,s]=f(0);async function d(m,N){const{response:I,error:x}=await $(`https://api.roadmap.sh/v1-get-team/${m}`);if(x||!I){n.error(x?.message||"Error loading team"),window.location.href="/account";return}const k=parseInt(N,10),S=Array(k).fill(1).map((ae,M)=>M);h(I),r(I.type),o(S),s(k),await w(m)}const[i,y]=f([]);async function w(m){const{error:N,response:I}=await $(`https://api.roadmap.sh/v1-get-team-resource-config/${m}`);if(N||!Array.isArray(I)){console.error(N);return}y(I)}T(()=>{!t||!p||a||(R.set("Fetching team"),u(!0),d(t,p).finally(()=>{u(!1),R.set("")}))},[t,p]);const[v,r]=f(a?.type||"company"),[l,o]=f([0]);if(b)return null;let g=null;return c===0?g=e(O,{team:a,selectedTeamType:v,setSelectedTeamType:r,onStepComplete:()=>{a?._id&&C({t:a._id,s:"1"}),o([0]),s(1)}}):c===1?g=e(K,{team:a,onBack:()=>{a?._id&&C({t:a._id,s:"0"}),s(0)},onStepComplete:m=>{const N=m._id;C({t:N,s:"2"}),o([0,1]),s(2),h(m)},selectedTeamType:v}):c===2?g=e(Z,{team:a,teamResourceConfig:i,setTeamResourceConfig:y,onBack:()=>{a&&C({t:a._id,s:"1"}),s(1)},onNext:()=>{C({t,s:"3"}),o([0,1,2]),s(3)}}):c===3?g=e(te,{team:a,onBack:()=>{a&&C({t:a._id,s:"2"}),s(2)},onNext:()=>{a&&C({t:a._id,s:"4"}),o([0,1,2,3]),s(4)}}):c===4&&(g=e(re,{team:a})),e("div",{className:"mx-auto max-w-[700px] py-6",children:[e("div",{className:"mb-8 flex flex-col items-center",children:[e("h1",{className:"text-4xl font-bold",children:"Create Team"}),e("p",{className:"mt-2 text-gray-500",children:"Complete the steps below to create your team"})]}),e("div",{className:"mb-8 mt-8 flex w-full",children:e(Y,{activeIndex:c,completeSteps:l,steps:[{label:"Type"},{label:"Details"},{label:"Skills"},{label:"Members"}]})}),g]})}export{Se as CreateTeamForm};
