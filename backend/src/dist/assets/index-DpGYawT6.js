import{ah as a}from"./index-Ceshqiaz.js";import{d as u}from"./index-BauFKgOT.js";import{a4 as c}from"./IdurarOs-QiO0mqNX.js";import"./index-C8m0D0Z9.js";import{E as y}from"./selectors-DzM9jS4k.js";import{E as f}from"./index-BNFu_t7X.js";import{a as x,u as b}from"./useDate-DhPwrpth.js";import"./ErpApp-HOQT9QP8.js";import"./index-BRPSdnqE.js";import"./useDebounce-CMrmrAVz.js";import"./actions-CqH49u7k.js";import"./index-KrFx5yLV.js";import"./Table-BaNNn-lR.js";import"./FilePdfOutlined-BaKFpz2K.js";import"./DeleteOutlined-LIb_-jeR.js";import"./ArrowRightOutlined-zWlOlZvh.js";import"./helpers-CitMCYcM.js";import"./PlusOutlined-DgQpfvsa.js";import"./index-D_7TLVDS.js";import"./fade-BJUQsMWl.js";function E({config:t}){return a.jsx(y,{children:a.jsx(f,{config:t})})}function W(){const t=c(),{dateFormat:n}=x(),{moneyFormatter:r}=b(),o={entity:"client",displayLabels:["number"],searchFields:"number",outputValue:"_id"},i=["number"],m=[{title:t("Number"),dataIndex:"number"},{title:t("Client"),dataIndex:["client","name"]},{title:t("Amount"),dataIndex:"amount",onCell:()=>({style:{textAlign:"right",whiteSpace:"nowrap",direction:"ltr"}}),render:(e,l)=>r({amount:e,currency_code:l.currency})},{title:t("Date"),dataIndex:"date",render:e=>u(e).format(n)},{title:t("Number"),dataIndex:["invoice","number"]},{title:t("year"),dataIndex:["invoice","year"]},{title:t("Payment Mode"),dataIndex:["paymentMode","name"]}],s="payment",d={PANEL_TITLE:t("payment"),DATATABLE_TITLE:t("payment_list"),ADD_NEW_ENTITY:t("add_new_payment"),ENTITY_NAME:t("payment")},p={...{entity:s,...d},disableAdd:!0,dataTableColumns:m,searchConfig:o,deleteModalLabels:i};return a.jsx(E,{config:p})}export{W as default};