import{r as t}from"./index.ed373d49.js";import{h as p}from"./http.82ebf0f1.js";import{j as e}from"./jsx-runtime.391947bd.js";import"./jwt.f0e0aa9c.js";function y(){const[r,o]=t.useState(""),[a,n]=t.useState(!1),[i,l]=t.useState(""),[u,m]=t.useState(""),d=async s=>{s.preventDefault(),n(!0),l("");const{response:f,error:c}=await p("https://api.roadmap.sh/v1-forgot-password",{email:r});n(!1),c?l(c.message):(o(""),m("Check your email for a link to reset your password."))};return e.jsxs("form",{onSubmit:d,className:"w-full",children:[e.jsx("input",{type:"email",name:"email",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none transition duration-150 ease-in-out placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"Email Address",value:r,onInput:s=>o(s.target.value)}),i&&e.jsx("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-sm text-red-700",children:i}),u&&e.jsx("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-sm text-green-700",children:u}),e.jsx("button",{type:"submit",disabled:a,className:"mt-3 inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:a?"Please wait...":"Continue"})]})}export{y as ForgotPasswordForm};
