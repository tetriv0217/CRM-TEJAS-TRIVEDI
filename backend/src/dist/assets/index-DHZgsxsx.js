import{ah as t}from"./index-BxX9oQzF.js";import{C as n}from"./CrudModule-Ck03uK17.js";import{D as r}from"./index-1UFWy5ja.js";import{a4 as s}from"./IdurarOs-CQjgBJE3.js";import"./actions-DEpyQxvL.js";import"./index-BpvfEvhx.js";import"./index-DHqt5pnV.js";import"./ErpApp-CWghZTV0.js";import"./helpers-D4BobF0Y.js";import"./index-DxAM6omY.js";import"./fade-UwVswCAG.js";import"./countryList-gEXmdXv6.js";import"./index-KrFx5yLV.js";import"./color-DHucoY0N.js";import"./index-If0JhGlO.js";import"./useDate-DWLKj03u.js";import"./useDebounce-Bp03-dRO.js";import"./DeleteOutlined-V_cXazmM.js";import"./ArrowRightOutlined-DuWjr1U7.js";import"./Table-Dumz0gRW.js";import"./PlusOutlined-BN2tvqNR.js";import"./index-BVX6ArLJ.js";import"./index-B2NWdkGn.js";import"./useFetch-BCiAZt0D.js";import"./index-B4EGPytm.js";const o={type:{type:"selectWithFeedback",renderAsTag:!0,options:[{value:"people",label:"people",color:"magenta"},{value:"company",label:"company",color:"blue"}],required:!0,hasFeedback:!0},name:{type:"string",disableForForm:!0},country:{type:"country",disableForForm:!0},phone:{type:"phone",disableForForm:!0},email:{type:"email",disableForForm:!0},people:{type:"search",label:"people",entity:"people",redirectLabel:"Add New Person",withRedirect:!0,urlToRedirect:"/people",displayLabels:["firstname","lastname"],searchFields:"firstname,lastname",dataIndex:["people","firstname"],disableForTable:!0,feedback:"people"},company:{type:"search",label:"company",entity:"company",redirectLabel:"Add New Company",withRedirect:!0,urlToRedirect:"/company",displayLabels:["name"],searchFields:"name",dataIndex:["company","name"],disableForTable:!0,feedback:"company"}};function W(){const e=s(),a="client",i={displayLabels:["name"],searchFields:"name"},p=["name"],m={PANEL_TITLE:e("client"),DATATABLE_TITLE:e("client_list"),ADD_NEW_ENTITY:e("add_new_client"),ENTITY_NAME:e("client")},l={...{entity:a,...m},fields:o,searchConfig:i,deleteModalLabels:p};return t.jsx(n,{createForm:t.jsx(r,{fields:o}),updateForm:t.jsx(r,{fields:o}),config:l})}export{W as default};