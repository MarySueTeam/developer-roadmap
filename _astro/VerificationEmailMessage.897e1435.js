import{j as e}from"./jsx-runtime.391947bd.js";import{r as s}from"./index.ed373d49.js";import{h as d}from"./http.82ebf0f1.js";import"./jwt.f0e0aa9c.js";const f={src:"/_astro/verify-letter.fe971718.svg",width:512,height:512,format:"svg"};function j(){const[t,h]=s.useState(".."),[a,r]=s.useState(""),[n,l]=s.useState(!1),[o,i]=s.useState(!1);s.useEffect(()=>{const m=new URLSearchParams(window.location.search);h(m.get("email"))},[]);const x=()=>{d("https://api.roadmap.sh/v1-send-verification-email",{email:t}).then(({response:m,error:c})=>{if(c){i(!1),r(c?.message||"Something went wrong."),l(!1);return}i(!0)}).catch(()=>{i(!1),l(!1),r("Something went wrong. Please try again later.")})};return e.jsxs("div",{className:"mx-auto max-w-md text-center",children:[e.jsx("img",{alt:"Verify Email",src:f.src,className:"mx-auto mb-4 h-20 w-40 sm:h-40"}),e.jsx("h2",{className:"my-2 text-center text-xl font-semibold sm:my-5 sm:text-2xl",children:"Verify your email address"}),e.jsxs("div",{className:"text-sm sm:text-base",children:[e.jsxs("p",{children:["We have sent you an email at"," ",e.jsx("span",{className:"font-bold",children:t}),". Please click the link to verify your account. This link will expire shortly, so please verify soon!"]}),e.jsx("hr",{className:"my-4"}),!o&&e.jsxs(e.Fragment,{children:[n&&e.jsx("p",{className:"text-gray-400",children:"Sending the email .."}),!n&&!a&&e.jsxs("p",{children:["Please make sure to check your spam folder. If you still don't have the email click to"," ",e.jsx("button",{disabled:!t,className:"inline text-blue-700",onClick:x,children:"resend verification email."})]}),a&&e.jsx("p",{className:"text-red-700",children:a})]}),o&&e.jsx("p",{className:"text-green-700",children:"Verification email has been sent!"})]})]})}export{j as VerificationEmailMessage};
