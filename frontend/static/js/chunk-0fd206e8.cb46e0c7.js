(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd206e8"],{"153d":function(t,e,n){},"1f53":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return s}));var a=n("b775");function i(t){return Object(a["a"])({method:"post",url:"/globalVar/add",data:t})}function o(t){return Object(a["a"])({method:"post",url:"/globalVar/update",data:t})}function r(t){return Object(a["a"])({method:"post",url:"/globalVar/list",params:t})}function s(t){return Object(a["a"])({method:"delete",url:"/globalVar/"+t})}},"2f21":function(t,e,n){"use strict";var a=n("79e5");t.exports=function(t,e){return!!t&&a((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"36a3":function(t,e,n){},4144:function(t,e,n){},"45a2":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return s})),n.d(e,"c",(function(){return l}));var a=n("b775");function i(t){return Object(a["a"])({method:"post",url:"/page/add",data:t})}function o(t){return Object(a["a"])({method:"post",url:"/page/list",params:t})}function r(t){return Object(a["a"])({method:"delete",url:"/page/"+t})}function s(t){return Object(a["a"])({method:"post",url:"/page/update",data:t})}function l(t){return Object(a["a"])({method:"get",url:"/page/cascader",params:{projectId:t}})}},5061:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("sticky",{attrs:{"z-index":10,"class-name":"sub-navbar"}},[n("div",{staticStyle:{float:"left","margin-left":"5px"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{size:"mini"},on:{change:t.selectedEnv,"visible-change":t.envSelectChange},model:{value:t.env,callback:function(e){t.env=e},expression:"env"}},t._l(t.environmentList,(function(t){return n("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1),t._v(" "),n("el-button",{attrs:{type:"warning",loading:t.debugBtnLoading,size:"mini"},on:{click:t.debugAction}},[t._v("调试(ctrl+d)")]),t._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:t.code,expression:"code"}],staticStyle:{"margin-left":"-1px"},attrs:{size:"mini"},on:{click:function(e){t.showCode=!0}}},[t._v("code")]),t._v(" "),n("debug-action-code",{attrs:{code:t.code,visible:t.showCode},on:{"update:visible":function(e){t.showCode=e}}})],1),t._v(" "),n("span",{staticClass:"required"}),n("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"名称",clearable:"",size:"mini"},model:{value:t.saveActionForm.name,callback:function(e){t.$set(t.saveActionForm,"name",e)},expression:"saveActionForm.name"}}),t._v(" "),n("el-select",{staticStyle:{width:"80px"},attrs:{size:"mini"},model:{value:t.saveActionForm.state,callback:function(e){t.$set(t.saveActionForm,"state",e)},expression:"saveActionForm.state"}},t._l(t.stateList,(function(t){return n("el-option",{key:t.state,attrs:{label:t.name,value:t.state}})})),1),t._v(" "),n("el-button",{attrs:{type:"success",size:"mini"},on:{click:t.saveAction}},[t._v("保存(ctrl+s)")])],1),t._v(" "),n("div",{staticClass:"app-container"},[n("el-tabs",{attrs:{"tab-position":"top"}},[n("el-tab-pane",{attrs:{label:"更多信息"}},[n("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[t.isTestCase?t._e():n("el-form-item",{attrs:{label:"所属分类"}},[n("el-select",{staticStyle:{width:"500px"},attrs:{clearable:"",filterable:"",placeholder:"选择分类"},on:{"visible-change":t.actionCategorySelectChange},model:{value:t.saveActionForm.categoryId,callback:function(e){t.$set(t.saveActionForm,"categoryId",e)},expression:"saveActionForm.categoryId"}},t._l(t.categories,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),t.isTestCase?t._e():n("el-form-item",{attrs:{label:"所属Page"}},[n("el-cascader",{staticStyle:{width:"500px"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1},options:t.pages,filterable:"",clearable:"",placeholder:"选择page"},on:{"visible-change":t.pageSelectChange},model:{value:t.saveActionForm.pageId,callback:function(e){t.$set(t.saveActionForm,"pageId",e)},expression:"saveActionForm.pageId"}})],1),t._v(" "),t.isTestCase?n("el-form-item",{attrs:{label:"所属测试集"}},[n("el-select",{staticStyle:{width:"500px"},attrs:{clearable:"",filterable:"",placeholder:"选择测试集"},on:{"visible-change":t.testsuiteSelectChange},model:{value:t.saveActionForm.testSuiteId,callback:function(e){t.$set(t.saveActionForm,"testSuiteId",e)},expression:"saveActionForm.testSuiteId"}},t._l(t.testSuites,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1):t._e(),t._v(" "),t.isTestCase?n("el-form-item",{attrs:{label:"依赖用例"}},[n("el-cascader",{staticStyle:{width:"500px"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,multiple:!0},options:t.dependsOptions,filterable:"",clearable:"",placeholder:"选择用例"},model:{value:t.saveActionForm.depends,callback:function(e){t.$set(t.saveActionForm,"depends",e)},expression:"saveActionForm.depends"}})],1):t._e(),t._v(" "),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea"},model:{value:t.saveActionForm.description,callback:function(e){t.$set(t.saveActionForm,"description",e)},expression:"saveActionForm.description"}})],1)],1)],1),t._v(" "),n("el-tab-pane",{attrs:{label:"方法参数"}},[n("action-param-list",{ref:"paramList",attrs:{"is-add":t.isAdd}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"局部变量"}},[n("action-local-var-list",{ref:"localVarList",attrs:{"environment-list":t.environmentList}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"全局变量"}},[n("global-var-list",{attrs:{"environment-list":t.environmentList}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"返回值类型"}},[n("el-input",{attrs:{clearable:"",placeholder:"返回值类型"},model:{value:t.saveActionForm.returnValue,callback:function(e){t.$set(t.saveActionForm,"returnValue","string"===typeof e?e.trim():e)},expression:"saveActionForm.returnValue"}}),t._v(" "),n("el-input",{staticStyle:{"margin-top":"5px"},attrs:{clearable:"",placeholder:"返回值描述"},model:{value:t.saveActionForm.returnValueDesc,callback:function(e){t.$set(t.saveActionForm,"returnValueDesc",e)},expression:"saveActionForm.returnValueDesc"}})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"import java类"}},[n("action-import-list",{ref:"importList"})],1),t._v(" "),n("el-tab-pane",{attrs:{label:"import action"}},[n("el-cascader",{staticStyle:{width:"100%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1,multiple:!0},options:t.importActionOptions,filterable:"",clearable:"",placeholder:"import action"},model:{value:t.saveActionForm.actionImports,callback:function(e){t.$set(t.saveActionForm,"actionImports",e)},expression:"saveActionForm.actionImports"}})],1)],1),t._v(" "),n("action-step-list",{ref:"stepList",staticStyle:{"margin-top":"5px"},attrs:{"cur-action-id":t.saveActionForm.id},on:{selectableActionsChange:t.onSelectableActionsChange}})],1)],1)},i=[],o=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{size:"mini"},on:{click:t.addJavaImport}},[t._v("+ import java")]),t._v(" "),t._l(t.javaImports,(function(e,a){return n("el-input",{key:a,staticStyle:{"margin-top":"3px"},attrs:{placeholder:"请输入内容"},model:{value:t.javaImports[a],callback:function(e){t.$set(t.javaImports,a,"string"===typeof e?e.trim():e)},expression:"javaImports[index]"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-delete"},on:{click:function(e){return t.deleteJavaImport(a)}},slot:"append"})],1)}))],2)}),r=[],s={data:function(){return{javaImports:[]}},methods:{addJavaImport:function(){this.javaImports.push(";")},deleteJavaImport:function(t){this.javaImports.splice(t,1)}}},l=s,c=n("2877"),u=Object(c["a"])(l,o,r,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{attrs:{data:t.params,border:""}},[n("el-table-column",{attrs:{align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{clearable:""},model:{value:a.type,callback:function(e){t.$set(a,"type","string"===typeof e?e.trim():e)},expression:"row.type"}})]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},on:{click:t.addParam}}),t._v("\n        方法参数类型\n      ")],1)],2),t._v(" "),n("el-table-column",{attrs:{label:"方法参数名",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{clearable:""},model:{value:a.name,callback:function(e){t.$set(a,"name","string"===typeof e?e.trim():e)},expression:"row.name"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{clearable:""},model:{value:a.description,callback:function(e){t.$set(a,"description","string"===typeof e?e.trim():e)},expression:"row.description"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"el-icon-delete",attrs:{type:"text"},on:{click:function(n){return t.deleteParam(e.$index)}}})]}}])})],1)],1)},m=[],f={props:{isAdd:Boolean},data:function(){return{params:[]}},methods:{addParam:function(){this.params.push({type:"String",name:"",description:""})},deleteParam:function(t){this.params.splice(t,1)}}},v=f,h=Object(c["a"])(v,p,m,!1,null,null,null),b=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{attrs:{data:t.localVars,border:""}},[n("el-table-column",{attrs:{align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{clearable:""},model:{value:a.type,callback:function(e){t.$set(a,"type","string"===typeof e?e.trim():e)},expression:"row.type"}})]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},on:{click:t.addLocalVar}}),t._v("\n        局部变量类型\n      ")],1)],2),t._v(" "),n("el-table-column",{attrs:{label:"局部变量名",align:"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{clearable:""},model:{value:a.name,callback:function(e){t.$set(a,"name","string"===typeof e?e.trim():e)},expression:"row.name"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"局部变量值",align:"center",width:"920"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return t._l(a.environmentValues,(function(e,i){return n("el-row",{key:e.environmentId,staticStyle:{"margin-bottom":"5px"},attrs:{gutter:5}},[n("el-col",{attrs:{span:5}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择环境"},model:{value:e.environmentId,callback:function(n){t.$set(e,"environmentId",n)},expression:"environmentValue.environmentId"}},t._l(t.environmentList,(function(t){return n("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1)],1),t._v(" "),n("el-col",{attrs:{span:16}},[n("el-input",{attrs:{clearable:""},model:{value:e.value,callback:function(n){t.$set(e,"value","string"===typeof n?n.trim():n)},expression:"environmentValue.value"}})],1),t._v(" "),n("el-col",{attrs:{span:3}},[n("el-button",{on:{click:function(e){return t.addEnvironmentValue(a)}}},[t._v("+")]),t._v(" "),n("el-button",{attrs:{disabled:0===i},on:{click:function(e){return t.delEnvironmentValue(a,i)}}},[t._v("-")])],1)],1)}))}}])}),t._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{attrs:{clearable:""},model:{value:a.description,callback:function(e){t.$set(a,"description","string"===typeof e?e.trim():e)},expression:"row.description"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"el-icon-delete",attrs:{type:"text"},on:{click:function(n){return t.deleteLocalVar(e.$index)}}})]}}])})],1)],1)},w=[],y={props:{environmentList:Array},data:function(){return{returnValue:null,localVars:[]}},methods:{addLocalVar:function(){this.localVars.push({type:"String",name:"",environmentValues:[{environmentId:-1,value:""}],description:""})},deleteLocalVar:function(t){this.localVars.splice(t,1)},addEnvironmentValue:function(t){t.environmentValues.push({environmentId:void 0,value:""})},delEnvironmentValue:function(t,e){t.environmentValues.splice(e,1)}}},_=y,A=Object(c["a"])(_,g,w,!1,null,null,null),S=A.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{attrs:{data:t.globalVarList,border:""}},[n("el-table-column",{attrs:{align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n        "+t._s(n.type)+"\n      ")]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-refresh",attrs:{type:"text"},on:{click:t.fetchGlobalVarList}}),t._v("\n        全局变量类型\n      ")],1)],2),t._v(" "),n("el-table-column",{attrs:{align:"center",property:"name",label:"全局变量名",width:"200","show-overflow-tooltip":""}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"全局变量值",width:"800"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-table",{attrs:{data:a.environmentValues,border:"",fit:""}},[n("el-table-column",{attrs:{label:"环境",align:"center",width:"200","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[t._v("\n              "+t._s(t.environmentList.filter((function(t){return t.id===n.environmentId}))[0].name)+"\n            ")]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"值",align:"center",prop:"value"}})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",property:"description",label:"描述","show-overflow-tooltip":""}})],1)],1)},k=[],V=n("1f53"),$={props:{environmentList:Array},data:function(){return{globalVarList:[]}},created:function(){this.fetchGlobalVarList()},methods:{fetchGlobalVarList:function(){var t=this;Object(V["c"])({projectId:this.$store.state.project.id}).then((function(e){t.globalVarList=e.data}))}}},I=$,j=Object(c["a"])(I,x,k,!1,null,null,null),F=j.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"closepopover"}),t._v(" "),n("el-table",{attrs:{data:t.steps,border:""},on:{"selection-change":t.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",type:"selection",width:"50"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.stepNumber(e.row,e.$index+1))+"\n        "),n("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66"},model:{value:e.row.status,callback:function(n){t.$set(e.row,"status",n)},expression:"scope.row.status"}})]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},on:{click:t.addStep}}),t._v(" "),n("span",{staticClass:"required"},[t._v("步骤")])],1)],2),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-input",{staticStyle:{"margin-bottom":"5px"},attrs:{placeholder:"步骤名",type:"textarea",autosize:{minRows:1}},model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"row.name"}}),t._v(" "),n("el-cascader",{staticStyle:{width:"100%"},attrs:{props:{value:"id",label:"name",children:"children",emitPath:!1},options:t.selectableActions,filterable:"",clearable:"","show-all-levels":!1,placeholder:"支持模糊搜索"},on:{change:function(e){return t.actionSelected(e,a)},"visible-change":t.actionSelectChange},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var a=e.data;return[a.returnValue?n("span",[t._v(t._s(t.returnValue(a)))]):t._e(),t._v(" "),a.returnValue?n("el-divider",{attrs:{direction:"vertical"}}):t._e(),t._v(" "),n("span",[t._v(t._s(a.name))])]}}],null,!0),model:{value:a.actionId,callback:function(e){t.$set(a,"actionId",e)},expression:"row.actionId"}})]}}])},[n("template",{slot:"header"},[n("span",[t._v("Action")]),t._v(" "),n("el-button",{attrs:{type:"text"},on:{click:function(e){t.showActionDetail=!0}}},[t._v("detail")])],1)],2),t._v(" "),n("el-table-column",{attrs:{label:"Action参数",align:"center","min-width":"300"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[n("el-table",{attrs:{data:a.paramValues,border:""}},[n("el-table-column",{attrs:{label:"参数名",width:"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-popover",{attrs:{placement:"top-start",trigger:"click"}},[t._v("\n                "+t._s(t.paramNameDesc(a.actionId,e.row.paramName))+"\n                "),t.hasPossibleValue(a.actionId,e.row.paramName)?n("el-table",{staticStyle:{"margin-top":"5px",width:"500px"},attrs:{data:t.possibleValues(a.actionId,e.row.paramName),border:""}},[n("el-table-column",{attrs:{align:"center",label:"可选值"},scopedSlots:t._u([{key:"default",fn:function(i){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.clickPossibleValue(a,e.row.paramName,i.row.value)}}},[t._v(t._s(i.row.value))])]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{property:"description",align:"center",label:"描述"}})],1):t._e(),t._v(" "),n("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v(t._s(e.row.paramName))])],1)]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"参数类型",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s(e.row.paramType)+"\n            ")]}}],null,!0)}),t._v(" "),n("el-table-column",{attrs:{label:"参数值"},scopedSlots:t._u([{key:"default",fn:function(e){return[1!==a.actionId?n("div",[n("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:10}},nativeOn:{paste:function(n){return t.onpaste(n,e)}},model:{value:e.row.paramValue,callback:function(n){t.$set(e.row,"paramValue",n)},expression:"scope_paramValues.row.paramValue"}}),t._v(" "),t.isImg(e.row.paramValue)?n("img",{attrs:{src:e.row.paramValue}}):t._e()],1):n("codemirror",{attrs:{options:t.cmOptions},model:{value:e.row.paramValue,callback:function(n){t.$set(e.row,"paramValue",n)},expression:"scope_paramValues.row.paramValue"}})]}}],null,!0)})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{disabled:t.evaluationDisabled(e.row.actionId),type:"textarea",autosize:{minRows:1},placeholder:"赋值"},model:{value:e.row.evaluation,callback:function(n){t.$set(e.row,"evaluation",n)},expression:"scope.row.evaluation"}}),t._v(" "),n("el-select",{staticStyle:{"margin-top":"5px"},model:{value:e.row.handleException,callback:function(n){t.$set(e.row,"handleException",n)},expression:"scope.row.handleException"}},[n("el-option",{attrs:{label:"失败时:中断执行",value:null}}),t._v(" "),n("el-option",{attrs:{label:"失败时:忽略，继续执行",value:0}}),t._v(" "),n("el-option",{attrs:{label:"失败时:抛出跳过异常",value:1}})],1),t._v(" "),n("el-button",{staticStyle:{width:"100%","margin-top":"5px"},attrs:{size:"mini"},on:{click:function(n){return t.copyStep(e.$index,e.row)}}},[t._v("复制")]),t._v(" "),n("el-button-group",{staticStyle:{"margin-top":"5px"}},[n("el-button",{staticClass:"el-icon-plus",attrs:{size:"mini"},on:{click:function(n){return t.addNextStep(e.$index)}}}),t._v(" "),n("el-button",{staticClass:"el-icon-minus",attrs:{size:"mini"},on:{click:function(n){return t.deleteStep(e.$index)}}})],1),t._v(" "),n("el-button-group",{staticStyle:{"margin-top":"5px"}},[n("el-button",{staticClass:"el-icon-top",attrs:{size:"mini",disabled:t.moveUpDisable(e.$index)},on:{click:function(n){return t.moveUp(e.$index)}}}),t._v(" "),n("el-button",{staticClass:"el-icon-bottom",attrs:{size:"mini",disabled:t.moveDownDisable(e.$index)},on:{click:function(n){return t.moveDown(e.$index)}}})],1)]}}])})],1),t._v(" "),n("action-detail",{attrs:{"show-action-detail":t.showActionDetail,"selectable-actions":t.selectableActions},on:{"update:showActionDetail":function(e){t.showActionDetail=e},"update:show-action-detail":function(e){t.showActionDetail=e}}})],1)},C=[],O=(n("ac6a"),n("55dd"),n("4917"),n("f559"),n("c5f6"),n("8121")),D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-drawer",{attrs:{title:"Action Detail",visible:t.outerDrawer,direction:"rtl","show-close":!1,size:"50%"},on:{"update:visible":function(e){t.outerDrawer=e}}},[n("div",{staticStyle:{padding:"5px","font-size":"8px"}},[n("el-input",{staticStyle:{width:"40%","margin-bottom":"10px"},attrs:{placeholder:"输入关键字进行过滤",clearable:""},model:{value:t.actionTreeFilterText,callback:function(e){t.actionTreeFilterText=e},expression:"actionTreeFilterText"}}),t._v(" "),n("el-tree",{ref:"tree",attrs:{data:t.selectableActions,props:{children:"children",label:"name"},"default-expand-all":"","filter-node-method":t.filterNode},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.node,i=e.data;return n("span",{},[n("span",[t._v(t._s(a.label))]),t._v(" "),a.isLeaf?n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showInnerDrawer(i)}}},[t._v("查看详情")]):t._e(),t._v(" "),a.isLeaf?n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.copyJavaInvoke(i),expression:"copyJavaInvoke(data)",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],attrs:{type:"text"}},[t._v("复制java调用")]):t._e()],1)}}])})],1),t._v(" "),n("el-drawer",{attrs:{size:"40%","append-to-body":!0,visible:t.innerDrawer},on:{"update:visible":function(e){t.innerDrawer=e}}},[n("codemirror",{attrs:{options:t.cmOptions},model:{value:t.codemirrorContent,callback:function(e){t.codemirrorContent=e},expression:"codemirrorContent"}})],1)],1)},N=[],z=(n("f9d4"),n("8c2e"),n("8325")),E={props:{selectableActions:Array,showActionDetail:Boolean},directives:{clipboard:z["a"]},watch:{actionTreeFilterText:function(t){this.$refs.tree.filter(t)},showActionDetail:function(t){this.outerDrawer=t},outerDrawer:function(t){this.$emit("update:showActionDetail",t)}},data:function(){return{actionTreeFilterText:"",outerDrawer:!1,innerDrawer:!1,codemirrorContent:"",cmOptions:{mode:"javascript",theme:"base16-dark",lineNumbers:!0,line:!0,readOnly:!0}}},methods:{filterNode:function(t,e){return!t||-1!==e.name.indexOf(t)},showInnerDrawer:function(t){this.innerDrawer=!0,this.codemirrorContent=JSON.stringify(t,null,"\t")},copyJavaInvoke:function(t){var e="";t.params&&t.params.length>0&&(e=t.params.map((function(t){return t.type+" "+t.name})).join(","));var n="";return n=1===t.type?t.invoke:"action_"+t.id,n+"("+e+")"},onCopy:function(t){this.$notify.success(t.text+"复制成功")}}},T=E,P=(n("ac99"),Object(c["a"])(T,D,N,!1,null,null,null)),J=P.exports,R=(n("4ba6"),{props:{curActionId:Number},components:{ActionDetail:J},data:function(){return{steps:[],selectedSteps:[],selectableActions:[],showActionDetail:!1,cmOptions:{mode:"text/x-java",theme:"default",lineNumbers:!0,line:!0}}},computed:{possibleValues:function(){return function(t,e){var n=this.findActionInSelectableActions(t),a=n.params.filter((function(t){return t.name===e}))[0].possibleValues;return a}},hasPossibleValue:function(){return function(t,e){var n=this.findActionInSelectableActions(t);if(n&&n.params&&n.params.length>0){var a=n.params.filter((function(t){return t.name===e}))[0];return!!(a&&a.possibleValues&&a.possibleValues.length>0)}return!1}},paramNameDesc:function(){return function(t,e){var n=this.findActionInSelectableActions(t);if(n&&n.params&&n.params.length>0)return n.params.filter((function(t){return t.name===e}))[0].description}},evaluationDisabled:function(){return function(t){if(!t)return!0;var e=this.findActionInSelectableActions(t);return e?"void"===e.returnValue:void 0}},returnValue:function(){return function(t){return t.returnValueDesc?t.returnValue+"("+t.returnValueDesc+")":t.returnValue}},projectId:function(){return this.$store.state.project.id},platform:function(){return this.$store.state.project.platform},stepNumber:function(){return function(t,e){return t.number=e,t.number}},moveUpDisable:function(){return function(t){return 0===t}},moveDownDisable:function(){return function(t){return t===this.steps.length-1}}},created:function(){this.fetchActionCascader()},methods:{isImg:function(t){return!!t&&t.startsWith("data:image/")},onpaste:function(t,e){if(console.log("paramValue onpaste"),t.clipboardData&&t.clipboardData.items){var n=t.clipboardData.items[0];if(n&&"file"===n.kind&&n.type.match(/^image\//i)){console.log("paste img to base64");var a=n.getAsFile(),i=new FileReader;i.onload=function(t){e.row.paramValue=t.target.result},i.readAsDataURL(a)}}},moveUp:function(t){this.steps[t-1]=this.steps.splice(t,1,this.steps[t-1])[0]},moveDown:function(t){this.steps[t+1]=this.steps.splice(t,1,this.steps[t+1])[0]},deleteStep:function(t){this.steps.splice(t,1)},addStep:function(){this.steps.push({paramValues:[],handleException:null,status:1})},addNextStep:function(t){this.steps.splice(t+1,0,{paramValues:[],handleException:null,status:1})},copyStep:function(t,e){var n=JSON.parse(JSON.stringify(e));delete n.number,this.steps.splice(t,0,n)},handleSelectionChange:function(t){this.selectedSteps=this.steps.filter((function(e){return-1!==t.indexOf(e)})).sort((function(t,e){return t.number-e.number}))},clickPossibleValue:function(t,e,n){var a=t.paramValues.filter((function(t){return t.paramName===e}))[0];a.paramValue=n,this.$refs.closepopover.click()},actionSelectChange:function(t){t&&this.fetchActionCascader()},fetchActionCascader:function(){var t=this;Object(O["d"])(this.projectId,this.platform).then((function(e){t.selectableActions=e.data,t.curActionId&&t.disableCurActionInSelectableActions(t.curActionId),t.$emit("selectableActionsChange",t.selectableActions)}))},actionSelected:function(t,e){if(e.paramValues=[],console.log("cascader selected",t),t){var n=this.findActionInSelectableActions(t);console.log("selected action",n),n&&n.params&&n.params.length>0&&n.params.forEach((function(t){e.paramValues.push({paramName:t.name,paramType:t.type,paramValue:""})}))}},findActionInSelectableActions:function(t){return this.findAction(this.selectableActions,t)},findAction:function(t,e){for(var n=0;n<t.length;n++)if(t[n].children){var a=this.findAction(t[n].children,e);if(a)return a}else if(t[n].id===e)return t[n]},disableAction:function(t,e){for(var n=0;n<t.length;n++)t[n].children?this.disableAction(t[n].children,e):t[n].id===e&&(console.log("disable action",t[n].id),t[n].disabled=!0)},disableCurActionInSelectableActions:function(t){this.disableAction(this.selectableActions,t)}}}),B=R,U=(n("81ff"),Object(c["a"])(B,L,C,!1,null,"cfec9798",null)),G=U.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-drawer",{attrs:{title:"code",visible:t.drawerVisible,direction:"rtl","destroy-on-close":"","show-close":!1,size:"50%"},on:{"update:visible":function(e){t.drawerVisible=e}}},[n("div",{staticStyle:{padding:"5px","font-size":"8px"}},[n("codemirror",{attrs:{options:t.cmOptions},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)])},q=[],K={props:{visible:Boolean,code:String},watch:{visible:function(t){this.drawerVisible=t},drawerVisible:function(t){this.$emit("update:visible",t)}},data:function(){return{drawerVisible:!1,cmOptions:{mode:"text/x-java",theme:"base16-dark",lineNumbers:!0,line:!0,readOnly:!0}}}},M=K,H=(n("9ef3"),Object(c["a"])(M,W,q,!1,null,null,null)),Q=H.exports,X=n("b804"),Y=n("45a2"),Z=n("c405"),tt=n("d023"),et=n("6d17"),nt={components:{ActionImportList:d,ActionParamList:b,ActionLocalVarList:S,GlobalVarList:F,ActionStepList:G,DebugActionCode:Q,Sticky:X["a"]},props:{isAdd:Boolean,isTestCase:Boolean},data:function(){return{env:this.$store.state.project.env,environmentList:[{id:-1,name:"默认"}],stateList:[{state:0,name:"禁用"},{state:1,name:"草稿"},{state:2,name:"发布"}],saveActionForm:{id:void 0,name:"",description:"",type:this.isTestCase?3:2,returnValue:"void",returnValueDesc:null,params:[],localVars:[],steps:[],javaImports:[],actionImports:[],platforms:[this.$store.state.project.platform],pageId:void 0,projectId:this.$store.state.project.id,testSuiteId:void 0,categoryId:void 0,state:2,depends:void 0},categories:[],pages:[],testSuites:[],debugBtnLoading:!1,startSaveActionFormString:"",dependsOptions:[],importActionOptions:[],showCode:!1,code:""}},destroyed:function(){window.onbeforeunload=null,document.onkeydown=null},mounted:function(){var t=this;window.onbeforeunload=function(){if(t.saveActionFormChanged())return"提示"},document.onkeydown=function(){var e=window.event;83===e.keyCode&&e.ctrlKey?(t.saveAction(),e.preventDefault()):68===e.keyCode&&e.ctrlKey&&(t.debugAction(),e.preventDefault())}},created:function(){var t=this;this.fetchEnvironmentList(),this.isTestCase?this.fetTestSuiteList():(this.fetActionCategoryList(),this.fetchPageCascader()),this.isAdd?this.$route.params.name?setTimeout((function(){t.saveActionForm=t.$route.params,t.$refs.paramList.params=t.saveActionForm.params,t.$refs.localVarList.localVars=t.saveActionForm.localVars,t.$refs.stepList.steps=t.saveActionForm.steps,t.$refs.importList.javaImports=t.saveActionForm.javaImports,t.startSaveActionFormString=JSON.stringify(t.saveActionForm)}),100):this.startSaveActionFormString=JSON.stringify(this.saveActionForm):Object(O["e"])({id:this.$route.params.actionId}).then((function(e){t.saveActionForm=e.data[0],t.$refs.paramList.params=t.saveActionForm.params,t.$refs.localVarList.localVars=t.saveActionForm.localVars,t.$refs.stepList.steps=t.saveActionForm.steps,t.$refs.importList.javaImports=t.saveActionForm.javaImports,t.startSaveActionFormString=JSON.stringify(t.saveActionForm)}))},methods:{onSelectableActionsChange:function(t){if(!(this.dependsOptions.length>0)){console.log("selectableActions",t);var e=t.filter((function(t){return"基础组件"!==t.name}));e.length>0&&(this.importActionOptions=e);var n=t.filter((function(t){return"测试用例"===t.name}));n.length>0&&(this.dependsOptions=n[0].children)}},testsuiteSelectChange:function(t){t&&this.fetTestSuiteList()},fetTestSuiteList:function(){var t=this;Object(tt["c"])({projectId:this.saveActionForm.projectId}).then((function(e){t.testSuites=e.data}))},pageSelectChange:function(t){t&&this.fetchPageCascader()},fetchPageCascader:function(){var t=this;Object(Y["c"])(this.saveActionForm.projectId).then((function(e){t.pages=e.data}))},actionCategorySelectChange:function(t){t&&this.fetActionCategoryList()},fetActionCategoryList:function(){var t=this;Object(Z["c"])({projectId:this.saveActionForm.projectId,type:2}).then((function(e){t.categories=e.data}))},saveAction:function(){var t=this;this.saveActionForm.params=this.$refs.paramList.params,this.saveActionForm.localVars=this.$refs.localVarList.localVars,this.saveActionForm.steps=this.$refs.stepList.steps,this.saveActionForm.javaImports=this.$refs.importList.javaImports,this.isAdd?Object(O["a"])(this.saveActionForm).then((function(e){t.saveActionSuccess(e.msg)})):Object(O["f"])(this.saveActionForm).then((function(e){t.saveActionSuccess(e.msg)}))},saveActionSuccess:function(t){var e=this;this.$notify.success(t),this.$store.dispatch("tagsView/delView",this.$store.state.tagsView.visitedViews.filter((function(t){return t.path===e.$route.path}))[0]),this.$router.back()},debugAction:function(){var t=this;if(!this.debugBtnLoading)if(this.$store.state.device.show)if(0!==this.$refs.stepList.selectedSteps.length)if(this.$store.state.device.appiumSessionId){this.debugBtnLoading=!0;var e={};e.name=this.saveActionForm.name,e.projectId=this.saveActionForm.projectId,e.platforms=this.saveActionForm.platforms,e.returnValue=this.saveActionForm.returnValue,e.type=this.saveActionForm.type,e.javaImports=this.$refs.importList.javaImports,e.actionImports=this.saveActionForm.actionImports,e.params=this.$refs.paramList.params,e.localVars=this.$refs.localVarList.localVars,e.steps=this.$refs.stepList.selectedSteps,Object(O["b"])({action:e,debugInfo:{agentIp:this.$store.state.device.agentIp,agentPort:this.$store.state.device.agentPort,env:this.$store.state.project.env,deviceId:this.$store.state.device.id}}).then((function(e){t.$message.success(e.msg),t.code=e.data.code})).catch((function(e){t.code=e.data.code})).finally((function(){t.debugBtnLoading=!1}))}else this.$notify.error("appium正在初始化，请稍后");else this.$notify.error("至少勾选一个步骤");else this.$notify.error("先选择一台设备使用后才能调试")},saveActionFormChanged:function(){return this.saveActionForm.params=this.$refs.paramList.params,this.saveActionForm.localVars=this.$refs.localVarList.localVars,this.saveActionForm.steps=this.$refs.stepList.steps,this.saveActionForm.javaImports=this.$refs.importList.javaImports,JSON.stringify(this.saveActionForm)!==this.startSaveActionFormString},envSelectChange:function(t){t&&this.fetchEnvironmentList()},fetchEnvironmentList:function(){var t=this;Object(et["c"])({projectId:this.$store.state.project.id}).then((function(e){t.environmentList=[{id:-1,name:"默认"}].concat(e.data),0===t.environmentList.filter((function(e){return e.id===t.env})).length&&(console.log("重置env为-1"),t.$store.dispatch("project/setEnv",-1),t.env=-1)}))},selectedEnv:function(t){var e=this.environmentList.filter((function(e){return e.id===t}))[0];this.$store.dispatch("project/setEnv",e.id)}}},at=nt,it=(n("8889"),Object(c["a"])(at,a,i,!1,null,"d3d97f5c",null));e["a"]=it.exports},"55dd":function(t,e,n){"use strict";var a=n("5ca1"),i=n("d8e8"),o=n("4bf8"),r=n("79e5"),s=[].sort,l=[1,2,3];a(a.P+a.F*(r((function(){l.sort(void 0)}))||!r((function(){l.sort(null)}))||!n("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(o(this)):s.call(o(this),i(t))}})},"6d17":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return s}));var a=n("b775");function i(t){return Object(a["a"])({method:"post",url:"/environment/add",data:t})}function o(t){return Object(a["a"])({method:"delete",url:"/environment/"+t})}function r(t){return Object(a["a"])({method:"post",url:"/environment/update",data:t})}function s(t){return Object(a["a"])({method:"post",url:"/environment/list",params:t})}},8121:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return r})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return c}));var a=n("b775");function i(t){return Object(a["a"])({method:"post",url:"/action/add",data:t})}function o(t){return Object(a["a"])({method:"post",url:"/action/update",data:t})}function r(t){return Object(a["a"])({method:"post",url:"/action/list",params:t})}function s(t){return Object(a["a"])({method:"delete",url:"/action/"+t})}function l(t,e){return Object(a["a"])({method:"get",url:"/action/cascader",params:{projectId:t,platform:e}})}function c(t){return Object(a["a"])({method:"post",url:"/action/debug",data:t})}},"81ff":function(t,e,n){"use strict";var a=n("153d"),i=n.n(a);i.a},8889:function(t,e,n){"use strict";var a=n("36a3"),i=n.n(a);i.a},"9ef3":function(t,e,n){"use strict";var a=n("4144"),i=n.n(a);i.a},ac99:function(t,e,n){"use strict";var a=n("c3ff"),i=n.n(a);i.a},b804:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[n("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[n("div",[t._v("sticky")])])],2)])},i=[],o=(n("c5f6"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),r=o,s=n("2877"),l=Object(s["a"])(r,a,i,!1,null,null,null);e["a"]=l.exports},c3ff:function(t,e,n){},c405:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var a=n("b775");function i(t){return Object(a["a"])({method:"post",url:"/category/list",params:t})}function o(t){return Object(a["a"])({method:"post",url:"/category/add",data:t})}function r(t){return Object(a["a"])({method:"delete",url:"/category/"+t})}},d023:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r}));var a=n("b775");function i(t){return Object(a["a"])({method:"post",url:"/testSuite/add",data:t})}function o(t){return Object(a["a"])({method:"delete",url:"/testSuite/"+t})}function r(t){return Object(a["a"])({method:"post",url:"/testSuite/list",params:t})}},f559:function(t,e,n){"use strict";var a=n("5ca1"),i=n("9def"),o=n("d2c8"),r="startsWith",s=""[r];a(a.P+a.F*n("5147")(r),"String",{startsWith:function(t){var e=o(this,t,r),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return s?s.call(e,a,n):e.slice(n,n+a.length)===a}})}}]);