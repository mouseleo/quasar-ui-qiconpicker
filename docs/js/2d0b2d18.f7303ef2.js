(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b2d18"],{2675:function(a,t,n){"use strict";n.r(t);var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[n("q-card",[n("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[n("q-tab",{attrs:{name:"template",label:"Template"}}),n("q-tab",{attrs:{name:"script",label:"Script"}})],1),n("q-separator"),n("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[n("q-tab-panel",{attrs:{name:"template"}},[n("q-markdown",{attrs:{src:a.template}})],1),n("q-tab-panel",{attrs:{name:"script"}},[n("q-markdown",{attrs:{src:a.script}})],1)],1)],1)],1),n("q-separator"),n("q-icon-picker",{staticStyle:{height:"220px"},attrs:{"icon-set":"material-icons",pagination:a.pagination},on:{"update:pagination":function(t){a.pagination=t}},model:{value:a.value,callback:function(t){a.value=t},expression:"value"}})],1)},i=[],r='```\n<template>\n  <q-icon-picker\n    v-model="value"\n    icon-set="material-icons"\n    :pagination.sync="pagination"\n    style="height: 220px;"\n  />\n</template>\n```\n',l="```\n<script>\nexport default {\n  data () {\n    return {\n      value: ''\n    }\n  }\n}\n<\/script>\n```\n",o={data:function(){return{tab:"template",template:r,script:l,value:"",pagination:{itemsPerPage:60,page:0}}}},s=o,p=n("2877"),c=Object(p["a"])(s,e,i,!1,null,null,null);t["default"]=c.exports}}]);