(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-260deb26"],{"074e":function(t,e,a){},"2f21":function(t,e,a){"use strict";var l=a("79e5");t.exports=function(t,e){return!!t&&l((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"527e":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{padding:"20px","font-size":"30px"}},[a("el-card",[a("span",{staticStyle:{"font-weight":"900"},attrs:{slot:"header"},slot:"header"},[t._v("\n      概况\n    ")]),t._v(" "),a("el-table",{attrs:{data:t.testTaskSummary,border:""}},[a("el-table-column",{attrs:{label:"平台",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n          "+t._s(t.platforms.filter((function(t){return t.type===a.platform}))[0].name)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"项目",prop:"projectName",align:"center","min-width":"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"环境",prop:"environmentName",align:"center","min-width":"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"测试计划",align:"center","min-width":"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n          "+t._s(a.testPlan.name)+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"提交人",prop:"commitorNickName",align:"center","min-width":"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"提交时间",prop:"commitTime",align:"center",width:"150","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"完成时间",prop:"finishTime",align:"center",width:"150","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"通过",prop:"passCaseCount",align:"center",width:"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"失败",prop:"failCaseCount",align:"center",width:"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"跳过",prop:"skipCaseCount",align:"center",width:"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"通过率",prop:"passPercent",align:"center",width:"100","show-overflow-tooltip":""}})],1),t._v(" "),a("el-table",{staticStyle:{"margin-top":"10px"},attrs:{data:t.deviceTestTaskSummary,border:""}},[a("el-table-column",{attrs:{label:"deviceId",prop:"deviceId",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"开始时间",prop:"startTime",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"结束时间",prop:"endTime",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"执行用例数",prop:"testcaseTotal",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"通过",prop:"passTestcaseCount",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"失败",prop:"failTestcaseCount",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"跳过",prop:"skipTestcaseCount",align:"center","show-overflow-tooltip":""}})],1)],1),t._v(" "),a("el-card",{staticStyle:{"margin-top":"10px"}},[a("span",{staticStyle:{"font-weight":"900"},attrs:{slot:"header"},slot:"header"},[t._v("详细信息")]),t._v(" "),a("el-tabs",t._l(t.deviceTestTaskList,(function(e){return a("el-tab-pane",{key:e.id},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-mobile-phone"}),t._v(" "+t._s(e.deviceId)+"\n        ")]),t._v(" "),a("test-case",{attrs:{data:e.testcases}})],1)})),1)],1)],1)},n=[],o=(a("55dd"),a("ac6a"),a("ca50")),s=a("90c2"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.data,border:""}},[a("el-table-column",{attrs:{label:"执行结果",align:"center",width:"80px"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[a("el-tag",{attrs:{type:0===l.status?"danger":1===l.status?"success":"warning",size:"small"}},[t._v("\n          "+t._s(0===l.status?"失败":1===l.status?"成功":"跳过")+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"测试用例",property:"name",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"开始时间",property:"startTime",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"结束时间",property:"endTime",align:"center","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"耗时",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n        "+t._s(parseInt(new Date(a.endTime)-new Date(a.startTime))/1e3+" 秒")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return t.clickDetailInfo(l)}}},[t._v("详细信息")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return t.$router.push("/action/testcase/update/"+l.id)}}},[t._v("编辑用例")])]}}])})],1),t._v(" "),a("el-drawer",{attrs:{size:"1300px",title:t.testcase.name,visible:t.showDrawer},on:{"update:visible":function(e){t.showDrawer=e}}},[a("div",{staticStyle:{padding:"5px"}},[a("div",[t.testcase.videoUrl?a("div",{staticStyle:{width:"300px",float:"left","margin-right":"5px"}},[a("video",{attrs:{src:t.testcase.videoUrl,width:"100%",controls:"controls"}},[t._v("浏览器不支持video标签")])]):t._e(),t._v(" "),a("div",{staticStyle:{width:"950px",float:"left"}},[a("el-table",{attrs:{data:t.testcase.steps,border:""}},[a("el-table-column",{attrs:{prop:"number",label:"步骤",align:"center",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"步骤名",align:"center","min-width":"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"startTime",label:"开始时间",align:"center",width:"180","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"结束时间",align:"center",width:"180","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"耗时",align:"center","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[t._v("\n                "+t._s(a.endTime?parseInt(new Date(a.endTime)-new Date(a.startTime))/1e3+"秒":"-")+"\n              ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.row;return[a("el-tag",{staticStyle:{width:"65px"},attrs:{type:l.endTime?"success":l.startTime?"danger":"info"}},[t._v("\n                  "+t._s(l.endTime?"完成":l.startTime?"失败":"未执行")+"\n                ")])]}}])})],1)],1)]),t._v(" "),a("div",{staticStyle:{clear:"both","margin-top":"5px"}},[t.testcase.failImgUrl?a("div",{staticStyle:{width:"300px",float:"left","margin-right":"5px"}},[a("img",{attrs:{src:t.testcase.failImgUrl,width:"100%"}})]):t._e(),t._v(" "),t.testcase.failInfo?a("div",{staticStyle:{width:"950px",float:"left"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.testcase.failInfo,callback:function(e){t.$set(t.testcase,"failInfo",e)},expression:"testcase.failInfo"}})],1):t._e()])])])],1)},i=[],c=(a("4ba6"),a("8c2e"),{props:{data:Array},data:function(){return{showDrawer:!1,cmOptions:{mode:"clike",theme:"base16-dark",lineNumbers:!0,line:!0,readOnly:!0},testcase:{}}},methods:{clickDetailInfo:function(t){this.testcase=t,this.showDrawer=!0}}}),u=c,d=(a("f2cf"),a("2877")),p=Object(d["a"])(u,r,i,!1,null,null,null),f=p.exports,m=a("b0e4"),v={name:"ReportTestTask",components:{TestCase:f},data:function(){return{platforms:m["a"],testTaskId:this.$route.params.testTaskId,deviceTestTaskList:[],testTaskSummary:[],deviceTestTaskSummary:[]}},created:function(){var t=this;Object(o["b"])({testTaskId:this.testTaskId}).then((function(e){var a=e.data;a.forEach((function(t){t.testcases.sort((function(t,e){return new Date(t.startTime).getTime()-new Date(e.startTime).getTime()}))})),t.deviceTestTaskList=a,t.deviceTestTaskSummary=a.map((function(t){return{deviceId:t.deviceId,testcaseTotal:t.testcases.length,startTime:t.startTime,endTime:t.endTime,passTestcaseCount:t.testcases.filter((function(t){return 1===t.status})).length,failTestcaseCount:t.testcases.filter((function(t){return 0===t.status})).length,skipTestcaseCount:t.testcases.filter((function(t){return 2===t.status})).length}}))})),Object(s["d"])(this.testTaskId).then((function(e){t.testTaskSummary.push(e.data)}))}},b=v,w=Object(d["a"])(b,l,n,!1,null,null,null);e["default"]=w.exports},"55dd":function(t,e,a){"use strict";var l=a("5ca1"),n=a("d8e8"),o=a("4bf8"),s=a("79e5"),r=[].sort,i=[1,2,3];l(l.P+l.F*(s((function(){i.sort(void 0)}))||!s((function(){i.sort(null)}))||!a("2f21")(r)),"Array",{sort:function(t){return void 0===t?r.call(o(this)):r.call(o(this),n(t))}})},"90c2":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return r}));var l=a("b775");function n(t){return Object(l["a"])({method:"get",url:"/testTask/commit",params:t})}function o(t){return Object(l["a"])({method:"delete",url:"/testTask/"+t})}function s(t){return Object(l["a"])({method:"post",url:"/testTask/list",params:t})}function r(t){return Object(l["a"])({method:"get",url:"/testTask/"+t+"/summary"})}},b0e4:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var l=[{type:1,name:"Android"},{type:2,name:"iOS"},{type:3,name:"Android-微信web"},{type:4,name:"Android-微信小程序"}]},ca50:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return o}));var l=a("b775");function n(t){return Object(l["a"])({method:"post",url:"/deviceTestTask/list",params:t})}function o(t){return Object(l["a"])({method:"delete",url:"/deviceTestTask/"+t})}},f2cf:function(t,e,a){"use strict";var l=a("074e"),n=a.n(l);n.a}}]);