(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0183b297"],{a7e8:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{attrs:{data:t.project,"label-width":"60px"}},[r("el-form-item",{attrs:{label:"名称",rules:[{required:!0}]}},[r("el-input",{staticStyle:{width:"300px"},attrs:{clearable:""},model:{value:t.project.name,callback:function(e){t.$set(t.project,"name","string"===typeof e?e.trim():e)},expression:"project.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"平台",rules:[{required:!0}]}},[r("el-radio-group",{attrs:{disabled:!t.isAdd},model:{value:t.project.platform,callback:function(e){t.$set(t.project,"platform",e)},expression:"project.platform"}},t._l(t.platforms,(function(e){return r("el-radio",{key:e.type,attrs:{label:e.type}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea"},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description","string"===typeof e?e.trim():e)},expression:"project.description"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.saveProject}},[t._v("保 存")])],1)],1)},s=[],i=r("24d2"),n=r("b0e4"),o={props:{isAdd:Boolean},data:function(){return{platforms:n["a"],project:{id:null,name:"",description:"",platform:null}}},created:function(){var t=this;this.isAdd||Object(i["c"])({id:this.$route.params.projectId}).then((function(e){t.project=e.data[0]}))},methods:{saveProjectSuccess:function(t){var e=this;this.$notify.success(t),this.$store.dispatch("tagsView/delView",this.$store.state.tagsView.visitedViews.filter((function(t){return t.path===e.$route.path}))[0]),this.$router.back()},saveProject:function(){var t=this;this.isAdd?Object(i["a"])(this.project).then((function(e){t.saveProjectSuccess(e.msg)})):Object(i["d"])(this.project).then((function(e){t.saveProjectSuccess(e.msg)}))}}},c=o,l=r("2877"),p=Object(l["a"])(c,a,s,!1,null,null,null);e["a"]=p.exports},b0e4:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var a=[{type:1,name:"Android"},{type:2,name:"iOS"},{type:3,name:"Android-微信web"},{type:4,name:"Android-微信小程序"}]},b30d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("save-project",{attrs:{"is-add":!1}})],1)},s=[],i=r("a7e8"),n={name:"UpdateProject",components:{SaveProject:i["a"]}},o=n,c=r("2877"),l=Object(c["a"])(o,a,s,!1,null,"7b713b0c",null);e["default"]=l.exports}}]);