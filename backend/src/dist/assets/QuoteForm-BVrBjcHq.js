import{ai as S,ah as e,a as r}from"./index-Ceshqiaz.js";import{d as f}from"./index-BauFKgOT.js";import{A as E}from"./index-BRPSdnqE.js";import{I as P,M as m}from"./index-By4uyn7m.js";import{a as v,S as O}from"./ErpApp-HOQT9QP8.js";import{a as Q}from"./useDate-DhPwrpth.js";import{a4 as _,a2 as c,a1 as s,ai as a,aj as Y,af as y,V as w}from"./IdurarOs-QiO0mqNX.js";import{c as x}from"./calculate-Dn_E62tH.js";import{D as N,S as M}from"./index-DEN0yfq5.js";import{S as B}from"./index-BN823Yk9.js";import{T as b}from"./index-Hbyzj37N.js";import{P as I}from"./PlusOutlined-DgQpfvsa.js";function ae({subTotal:l=0,current:i=null}){const{last_quote_number:t}=S(v);return t===void 0?e.jsx(e.Fragment,{}):e.jsx(z,{subTotal:l,current:i})}function z({subTotal:l=0,current:i=null}){const t=_(),{dateFormat:p}=Q(),{last_quote_number:T}=S(v),[F,R]=r.useState(()=>T+1),[D,A]=r.useState(0),[u,j]=r.useState(0),[L,q]=r.useState(0),[C,V]=r.useState(()=>new Date().getFullYear()),k=n=>{j(n/100)};r.useEffect(()=>{if(i){const{taxRate:n=0,year:d,number:o}=i;j(n/100),V(d),R(o)}},[i]),r.useEffect(()=>{const n=x.add(x.multiply(l,u),l);q(Number.parseFloat(x.multiply(l,u))),A(Number.parseFloat(n))},[l,u]);const h=r.useRef(!1);return r.useEffect(()=>{h.current.click()},[]),e.jsxs(e.Fragment,{children:[e.jsxs(c,{gutter:[12,0],children:[e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(a.Item,{name:"client",label:t("Client"),rules:[{required:!0}],children:e.jsx(E,{entity:"client",displayLabels:["name"],searchFields:"name",redirectLabel:"Add New Client",withRedirect:!0,urlToRedirect:"/customer"})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(a.Item,{label:t("number"),name:"number",initialValue:F,rules:[{required:!0}],children:e.jsx(b,{min:1,style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:3,children:e.jsx(a.Item,{label:t("year"),name:"year",initialValue:C,rules:[{required:!0}],children:e.jsx(b,{style:{width:"100%"}})})}),e.jsx(s,{className:"gutter-row",span:6,children:e.jsx(B,{})}),e.jsx(s,{className:"gutter-row",span:4,children:e.jsx(a.Item,{label:t("status"),name:"status",rules:[{required:!1}],initialValue:"draft",children:e.jsx(O,{options:[{value:"draft",label:t("Draft")},{value:"pending",label:t("Pending")},{value:"sent",label:t("Sent")},{value:"accepted",label:t("Accepted")},{value:"declined",label:t("Declined")}]})})}),e.jsx(s,{className:"gutter-row",span:8,children:e.jsx(a.Item,{name:"date",label:t("Date"),rules:[{required:!0,type:"object"}],initialValue:f(),children:e.jsx(N,{style:{width:"100%"},format:p})})}),e.jsx(s,{className:"gutter-row",span:6,children:e.jsx(a.Item,{name:"expiredDate",label:t("Expire Date"),rules:[{required:!0,type:"object"}],initialValue:f().add(30,"days"),children:e.jsx(N,{style:{width:"100%"},format:p})})}),e.jsx(s,{className:"gutter-row",span:10,children:e.jsx(a.Item,{label:t("Note"),name:"notes",children:e.jsx(Y,{})})})]}),e.jsx(y,{dashed:!0}),e.jsxs(c,{gutter:[12,12],style:{position:"relative"},children:[e.jsx(s,{className:"gutter-row",span:5,children:e.jsx("p",{children:t("Item")})}),e.jsx(s,{className:"gutter-row",span:7,children:e.jsx("p",{children:t("Description")})}),e.jsxs(s,{className:"gutter-row",span:3,children:[e.jsx("p",{children:t("Quantity")})," "]}),e.jsx(s,{className:"gutter-row",span:4,children:e.jsx("p",{children:t("Price")})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx("p",{children:t("Total")})})]}),e.jsx(a.List,{name:"items",children:(n,{add:d,remove:o})=>e.jsxs(e.Fragment,{children:[n.map(g=>e.jsx(P,{remove:o,field:g,current:i},g.key)),e.jsx(a.Item,{children:e.jsx(w,{type:"dashed",onClick:()=>d(),block:!0,icon:e.jsx(I,{}),ref:h,children:t("Add field")})})]})}),e.jsx(y,{dashed:!0}),e.jsxs("div",{style:{position:"relative",width:" 100%",float:"right"},children:[e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(a.Item,{children:e.jsx(w,{type:"primary",htmlType:"submit",icon:e.jsx(I,{}),block:!0,children:t("Save")})})}),e.jsx(s,{className:"gutter-row",span:4,offset:10,children:e.jsxs("p",{style:{paddingLeft:"12px",paddingTop:"5px",margin:0,textAlign:"right"},children:[t("Sub Total")," :"]})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:l})})]}),e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:4,offset:15,children:e.jsx(a.Item,{name:"taxRate",rules:[{required:!0}],children:e.jsx(M,{value:u,onChange:k,entity:"taxes",outputValue:"taxValue",displayLabels:["taxName"],withRedirect:!0,urlToRedirect:"/taxes",redirectLabel:t("Add New Tax"),placeholder:t("Select Tax Value")})})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:L})})]}),e.jsxs(c,{gutter:[12,-5],children:[e.jsx(s,{className:"gutter-row",span:4,offset:15,children:e.jsxs("p",{style:{paddingLeft:"12px",paddingTop:"5px",margin:0,textAlign:"right"},children:[t("Total")," :"]})}),e.jsx(s,{className:"gutter-row",span:5,children:e.jsx(m,{readOnly:!0,value:D})})]})]})]})}export{ae as Q};