(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0abd5fda"],{"45a2":function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"d",(function(){return n})),t.d(a,"b",(function(){return r})),t.d(a,"e",(function(){return s})),t.d(a,"c",(function(){return o}));var i=t("b775");function l(e){return Object(i["a"])({method:"post",url:"/page/add",data:e})}function n(e){return Object(i["a"])({method:"post",url:"/page/list",params:e})}function r(e){return Object(i["a"])({method:"delete",url:"/page/"+e})}function s(e){return Object(i["a"])({method:"post",url:"/page/update",data:e})}function o(e){return Object(i["a"])({method:"get",url:"/page/cascader",params:{projectId:e}})}},4668:function(e,a,t){"use strict";var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("mobile-inspector",{attrs:{"canvas-id":"page-canvas","window-info":e.windowInfo,"window-hierarchy":e.savePageForm.windowHierarchy,"tree-loading":!1}}),e._v(" "),t("el-form",{attrs:{"label-width":"80px"}},[t("el-form-item",{attrs:{label:"元素"}},[t("el-button",{on:{click:e.addElement}},[e._v("+")]),e._v(" "),e._l(e.savePageForm.elements,(function(a,i){return t("el-row",{key:i,staticStyle:{"margin-top":"3px"},attrs:{gutter:2}},[t("el-col",{attrs:{span:6}},[t("el-input",{attrs:{clearable:"",placeholder:"元素名"},model:{value:a.name,callback:function(t){e.$set(a,"name","string"===typeof t?t.trim():t)},expression:"element.name"}},[t("template",{slot:"prepend"},[e._v("WebElement")])],2)],1),e._v(" "),t("el-col",{attrs:{span:5}},[t("el-cascader",{staticStyle:{width:"100%"},attrs:{options:e.findBys,placeholder:"findBy"},model:{value:a.findBy,callback:function(t){e.$set(a,"findBy",t)},expression:"element.findBy"}})],1),e._v(" "),t("el-col",{attrs:{span:10}},[t("el-input",{attrs:{clearable:"",placeholder:"value"},model:{value:a.value,callback:function(t){e.$set(a,"value","string"===typeof t?t.trim():t)},expression:"element.value"}})],1),e._v(" "),t("el-col",{attrs:{span:3}},[t("el-button-group",[t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.savePageForm.name+"_"+a.name,expression:"savePageForm.name + '_' + element.name",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}]},[e._v("引用")]),e._v(" "),t("el-button",{on:{click:function(a){return e.delElement(i)}}},[e._v("删除")])],1)],1)],1)}))],2)],1),e._v(" "),t("el-row",{attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("el-form",{attrs:{"label-width":"80px"}},[t("el-form-item",{attrs:{label:"page名",rules:[{required:!0}]}},[t("el-input",{attrs:{clearable:""},model:{value:e.savePageForm.name,callback:function(a){e.$set(e.savePageForm,"name",a)},expression:"savePageForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"分类"}},[t("el-select",{attrs:{clearable:"",filterable:"",placeholder:"选择分类"},on:{"visible-change":e.pageCategorySelectChange},model:{value:e.savePageForm.categoryId,callback:function(a){e.$set(e.savePageForm,"categoryId",a)},expression:"savePageForm.categoryId"}},e._l(e.pageCategoryList,(function(e){return t("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),e._v(" "),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{attrs:{clearable:""},model:{value:e.savePageForm.description,callback:function(a){e.$set(e.savePageForm,"description",a)},expression:"savePageForm.description"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"设备id"}},[t("el-input",{attrs:{clearable:"",disabled:e.isAdd},model:{value:e.savePageForm.deviceId,callback:function(a){e.$set(e.savePageForm,"deviceId",a)},expression:"savePageForm.deviceId"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.savePage}},[e._v("保 存")])],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form",{attrs:{"label-width":"100px"}},[t("el-form-item",{attrs:{label:"图片下载地址"}},[t("el-input",{attrs:{clearable:"",disabled:e.isAdd},model:{value:e.savePageForm.imgUrl,callback:function(a){e.$set(e.savePageForm,"imgUrl",a)},expression:"savePageForm.imgUrl"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"window高"}},[t("el-input",{attrs:{clearable:"",disabled:e.isAdd},model:{value:e.savePageForm.windowHeight,callback:function(a){e.$set(e.savePageForm,"windowHeight",a)},expression:"savePageForm.windowHeight"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"window宽"}},[t("el-input",{attrs:{clearable:"",disabled:e.isAdd},model:{value:e.savePageForm.windowWidth,callback:function(a){e.$set(e.savePageForm,"windowWidth",a)},expression:"savePageForm.windowWidth"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"window方向"}},[t("el-input",{attrs:{clearable:"",disabled:e.isAdd},model:{value:e.savePageForm.windowOrientation,callback:function(a){e.$set(e.savePageForm,"windowOrientation",a)},expression:"savePageForm.windowOrientation"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"图片布局"}},[t("el-input",{attrs:{clearable:"",disabled:e.isAdd},model:{value:e.savePageForm.windowHierarchy,callback:function(a){e.$set(e.savePageForm,"windowHierarchy",a)},expression:"savePageForm.windowHierarchy"}})],1)],1)],1)],1)],1)},l=[],n=t("45a2"),r=t("c405"),s=t("e1f1"),o=t("8325"),c={directives:{clipboard:o["a"]},props:{isAdd:Boolean},components:{MobileInspector:s["a"]},data:function(){return{savePageForm:{id:void 0,name:"",projectId:this.$store.state.project.id,categoryId:void 0,description:"",imgUrl:"",windowHeight:void 0,windowWidth:void 0,windowOrientation:void 0,deviceId:void 0,windowHierarchy:"",elements:[]},pageCategoryList:[]}},computed:{windowInfo:function(){return{windowWidth:this.savePageForm.windowWidth,windowHeight:this.savePageForm.windowHeight,windowOrientation:this.savePageForm.windowOrientation,imgUrl:this.savePageForm.imgUrl}},findBys:function(){var e=[{value:"@AndroidFindBy",label:"AndroidFindBy",children:[{value:"uiAutomator",label:"uiAutomator"},{value:"accessibility",label:"accessibility"},{value:"id",label:"id"},{value:"xpath",label:"xpath"}]},{value:"@iOSXCUITFindBy",label:"iOSFindBy",children:[{value:"iOSClassChain",label:"iOSClassChain"},{value:"iOSNsPredicate",label:"iOSNsPredicate"},{value:"accessibility",label:"accessibility"},{value:"id",label:"id"},{value:"xpath",label:"xpath"}]},{value:"@FindBy",label:"WebFindBy",children:[{value:"id",label:"id"},{value:"name",label:"name"},{value:"className",label:"className"},{value:"css",label:"css"},{value:"tagName",label:"tagName"},{value:"linkText",label:"linkText"},{value:"partialLinkText",label:"partialLinkText"},{value:"xpath",label:"xpath"}]}],a=this.$store.state.project.platform;return 1===a||3===a||4===a?e.splice(1,1):2===a?e.splice(0,1):e.splice(0,2),e}},created:function(){var e=this;this.fetchPageCategoryList(),this.isAdd?setTimeout((function(){e.savePageForm=e.$route.params}),100):Object(n["d"])({id:this.$route.params.pageId}).then((function(a){e.savePageForm=a.data[0]}))},methods:{onCopy:function(e){this.$notify.success(e.text+"复制成功")},savePageSuccess:function(e){var a=this;this.$notify.success(e),this.isAdd&&(this.$store.dispatch("tagsView/delView",this.$store.state.tagsView.visitedViews.filter((function(e){return e.path===a.$route.path}))[0]),this.$router.back())},savePage:function(){var e=this;this.isAdd?Object(n["a"])(this.savePageForm).then((function(a){e.savePageSuccess(a.msg)})):Object(n["e"])(this.savePageForm).then((function(a){e.savePageSuccess(a.msg)}))},pageCategorySelectChange:function(e){e&&this.fetchPageCategoryList()},fetchPageCategoryList:function(){var e=this;Object(r["c"])({projectId:this.$store.state.project.id,type:1}).then((function(a){e.pageCategoryList=a.data}))},addElement:function(){this.savePageForm.elements.push({name:"",findBy:[],value:""})},delElement:function(e){this.savePageForm.elements.splice(e,1)}}},d=c,u=t("2877"),m=Object(u["a"])(d,i,l,!1,null,null,null);a["a"]=m.exports},c405:function(e,a,t){"use strict";t.d(a,"c",(function(){return l})),t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var i=t("b775");function l(e){return Object(i["a"])({method:"post",url:"/category/list",params:e})}function n(e){return Object(i["a"])({method:"post",url:"/category/add",data:e})}function r(e){return Object(i["a"])({method:"delete",url:"/category/"+e})}},f346:function(e,a,t){"use strict";t.r(a);var i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("save-page",{attrs:{"is-add":!0}})],1)},l=[],n=t("4668"),r={name:"AddPage",components:{SavePage:n["a"]}},s=r,o=t("2877"),c=Object(o["a"])(s,i,l,!1,null,null,null);a["default"]=c.exports}}]);