(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75b2216a"],{"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},o=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function u(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function c(t,e,n){var a=u(),o=t-a,c=20,l=0;e="undefined"===typeof e?500:e;var s=function t(){l+=c;var u=Math.easeInOutQuad(l,a,o,e);i(u),l<e?r(t):n&&"function"===typeof n&&n()};s()}var l={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&c(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&c(0,800)}}},s=l,p=(n("e498"),n("2877")),d=Object(p["a"])(s,a,o,!1,null,"6af373ef",null);e["a"]=d.exports},7456:function(t,e,n){},b0e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a=[{type:1,name:"Android"},{type:2,name:"iOS"},{type:3,name:"Android-微信web"},{type:4,name:"Android-微信小程序"}]},bbcc:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",[n("el-button",{on:{click:function(e){return t.$router.push("/project/add")}}},[t._v("添加项目")])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("el-select",{attrs:{placeholder:"平台",clearable:""},model:{value:t.queryForm.platform,callback:function(e){t.$set(t.queryForm,"platform",e)},expression:"queryForm.platform"}},t._l(t.platforms,(function(t){return n("el-option",{key:t.type,attrs:{label:t.name,value:t.type}})})),1),t._v(" "),n("el-button",{staticClass:"el-icon-search",attrs:{type:"primary"},on:{click:t.onQueryBtnClick}})],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("el-table",{attrs:{data:t.projectList,"highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"平台",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s(t.platforms.filter((function(t){return t.type===n.platform}))[0].name)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"项目名称",align:"center",prop:"name","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"项目描述",align:"center",prop:"description","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center",width:"200","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s(n.creatorNickName+" "+n.createTime)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-button",{staticClass:"el-icon-edit",attrs:{type:"primary"},on:{click:function(e){return t.updateProject(a)}}}),t._v(" "),n("el-button",{staticClass:"el-icon-delete",attrs:{type:"danger"},on:{click:function(e){return t.deleteProject(a)}}})]}}])})],1)],1),t._v(" "),n("div",[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryForm.pageNum,limit:t.queryForm.pageSize},on:{"update:page":function(e){return t.$set(t.queryForm,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryForm,"pageSize",e)},pagination:t.fetchProjectList}})],1)])},o=[],r=(n("7f7f"),n("b0e4")),i=n("24d2"),u=n("333d"),c={components:{Pagination:u["a"]},data:function(){return{platforms:r["a"],projectList:[],total:0,queryForm:{pageNum:1,pageSize:10,platform:null}}},created:function(){this.fetchProjectList()},methods:{onQueryBtnClick:function(){this.queryForm.pageNum=1,this.fetchProjectList()},updateProject:function(t){this.$router.push("/project/update/"+t.id)},deleteProject:function(t){var e=this;this.$confirm("删除"+t.name,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["b"])(t.id).then((function(t){e.$notify.success(t.msg),e.fetchProjectList()}))}))},fetchProjectList:function(){var t=this;Object(i["c"])(this.queryForm).then((function(e){t.projectList=e.data.data,t.total=e.data.total}))}}},l=c,s=n("2877"),p=Object(s["a"])(l,a,o,!1,null,"276a4fe8",null);e["default"]=p.exports},e498:function(t,e,n){"use strict";var a=n("7456"),o=n.n(a);o.a}}]);