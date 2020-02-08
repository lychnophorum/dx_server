(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b4560ac"],{"28f6":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("el-button",{on:{click:function(e){return t.$router.push("/testSuite/add")}}},[t._v("添加测试集")]),t._v(" "),n("el-button",{on:{click:function(e){return t.$router.push("/action/testcase/add")}}},[t._v("添加测试用例")])],1),t._v(" "),n("div",[n("el-tabs",{attrs:{type:"card"},on:{"tab-remove":t.deleteTestSuite,"tab-click":t.onTabClick},model:{value:t.selectedTestSuiteName,callback:function(e){t.selectedTestSuiteName=e},expression:"selectedTestSuiteName"}},t._l(t.testSuiteList,(function(t){return n("el-tab-pane",{key:t.id,attrs:{label:t.name,name:t.name,closable:"全部"!==t.name}})})),1)],1),t._v(" "),n("div",[n("el-table",{attrs:{data:t.actionList,"highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"测试集",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-select",{attrs:{clearable:"",filterable:"",placeholder:"选择测试集"},on:{change:function(e){return t.testSuiteChange(i)}},model:{value:i.testSuiteId,callback:function(e){t.$set(i,"testSuiteId",e)},expression:"row.testSuiteId"}},t._l(t.testSuiteListWithoutTotal,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"测试用例",align:"center",prop:"name","min-width":"200","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center",prop:"description","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{label:"依赖用例",align:"center",width:"300px"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-cascader",{staticStyle:{width:"100%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,multiple:!0},options:t.dependsOptions,filterable:"",clearable:"",placeholder:"选择依赖用例"},on:{change:function(e){return t.dependsChange(i)}},model:{value:i.depends,callback:function(e){t.$set(i,"depends",e)},expression:"row.depends"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建时间",align:"center",width:"200","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s(n.creatorNickName+" "+n.createTime)+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"更新时间",align:"center",width:"200","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n          "+t._s((n.updatorNickName?n.updatorNickName:"")+" "+(n.updateTime?n.updateTime:""))+"\n        ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"状态",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-select",{on:{change:function(e){return t.stateChange(i)}},model:{value:i.state,callback:function(e){t.$set(i,"state",e)},expression:"row.state"}},t._l(t.stateList,(function(t){return n("el-option",{key:t.state,attrs:{label:t.name,value:t.state}})})),1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.row;return[n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.copyAction(i)}}},[t._v("复制")]),t._v(" "),n("el-button",{staticClass:"el-icon-edit",attrs:{type:"primary"},on:{click:function(e){return t.updateAction(i.id)}}}),t._v(" "),n("el-button",{staticClass:"el-icon-delete",attrs:{type:"danger"},on:{click:function(e){return t.deleteAction(i)}}})]}}])})],1)],1),t._v(" "),n("div",[n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryActionListForm.pageNum,limit:t.queryActionListForm.pageSize},on:{"update:page":function(e){return t.$set(t.queryActionListForm,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryActionListForm,"pageSize",e)},pagination:t.fetchActionList}})],1)])},a=[],o=(n("96cf"),n("3b8d")),r=(n("7f7f"),n("8121")),c=n("333d"),u=n("d023"),s={components:{Pagination:c["a"]},data:function(){return{selectedTestSuiteName:"全部",testSuiteList:[{name:"全部",id:void 0}],actionList:[],total:0,queryActionListForm:{pageNum:1,pageSize:10,type:3,projectId:this.$store.state.project.id,testSuiteId:void 0},stateList:[{state:0,name:"禁用"},{state:1,name:"草稿"},{state:2,name:"发布"}],dependsOptions:[]}},computed:{projectId:function(){return this.$store.state.project.id},platform:function(){return this.$store.state.project.platform},testSuiteListWithoutTotal:function(){return this.testSuiteList.filter((function(t){return"全部"!==t.name}))}},created:function(){this.fetchTestSuiteList(),this.fetchActionList(),this.fetchActionCascader()},methods:{fetchActionCascader:function(){var t=this;Object(r["d"])(this.projectId,this.platform).then((function(e){var n=e.data.filter((function(t){return"测试用例"===t.name}));n.length>0&&(t.dependsOptions=n[0].children)}))},copyAction:function(t){var e=JSON.parse(JSON.stringify(t));delete e.id,delete e.createTime,delete e.creatorUid,delete e.creatorNickName,delete e.updateTime,delete e.updatorUid,delete e.updatorNickName,this.$router.push({name:"TestcaseActionAdd",params:e})},fetchActionList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["e"])(this.queryActionListForm);case 2:e=t.sent,n=e.data,this.actionList=n.data,this.total=n.total;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchTestSuiteList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["c"])({projectId:this.projectId});case 2:e=t.sent,n=e.data,this.testSuiteList=this.testSuiteList.concat(n);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onTabClick:function(t){var e=this.testSuiteList.filter((function(e){return e.name===t.label}))[0];this.queryActionListForm.testSuiteId=e.id,this.queryActionListForm.pageNum=1,this.fetchActionList()},deleteTestSuite:function(t){var e=this;this.$confirm("删除"+t+"？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n=e.testSuiteList.filter((function(e){return e.name===t}))[0];Object(u["b"])(n.id).then((function(t){e.$notify.success(t.msg),e.testSuiteList.splice(e.testSuiteList.indexOf(n),1),e.selectedTestSuiteName="全部",e.queryActionListForm.testSuiteId=void 0,e.fetchActionList()}))}))},deleteAction:function(t){var e=this;this.$confirm("删除"+t.name,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["c"])(t.id).then((function(t){e.$notify.success(t.msg),e.fetchActionList()}))}))},updateAction:function(t){this.$router.push("/action/testcase/update/"+t)},testSuiteChange:function(t){var e=this;""===t.testSuiteId&&(t.testSuiteId=null),Object(r["f"])(t).then((function(t){e.fetchActionList()}))},stateChange:function(t){var e=this;Object(r["f"])(t).then((function(t){e.fetchActionList()})).catch((function(){e.fetchActionList()}))},dependsChange:function(t){var e=this;Object(r["f"])(t).then((function(t){e.fetchActionList()})).catch((function(){e.fetchActionList()}))}}},l=s,d=n("2877"),p=Object(d["a"])(l,i,a,!1,null,null,null);e["default"]=p.exports},"333d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(t,e,n,i){return t/=i/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function r(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function c(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function u(t,e,n){var i=c(),a=t-i,u=20,s=0;e="undefined"===typeof e?500:e;var l=function t(){s+=u;var c=Math.easeInOutQuad(s,i,a,e);r(c),s<e?o(t):n&&"function"===typeof n&&n()};l()}var s={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&u(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&u(0,800)}}},l=s,d=(n("e498"),n("2877")),p=Object(d["a"])(l,i,a,!1,null,"6af373ef",null);e["a"]=p.exports},7456:function(t,e,n){},8121:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return s}));var i=n("b775");function a(t){return Object(i["a"])({method:"post",url:"/action/add",data:t})}function o(t){return Object(i["a"])({method:"post",url:"/action/update",data:t})}function r(t){return Object(i["a"])({method:"post",url:"/action/list",params:t})}function c(t){return Object(i["a"])({method:"delete",url:"/action/"+t})}function u(t,e){return Object(i["a"])({method:"get",url:"/action/cascader",params:{projectId:t,platform:e}})}function s(t){return Object(i["a"])({method:"post",url:"/action/debug",data:t})}},d023:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r}));var i=n("b775");function a(t){return Object(i["a"])({method:"post",url:"/testSuite/add",data:t})}function o(t){return Object(i["a"])({method:"delete",url:"/testSuite/"+t})}function r(t){return Object(i["a"])({method:"post",url:"/testSuite/list",params:t})}},e498:function(t,e,n){"use strict";var i=n("7456"),a=n.n(i);a.a}}]);