(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d799191"],{"615b":function(e,t,i){},"6d3d":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-card-title",[e._v("Lets Complete Your Profile")]),i("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[i("v-stepper-header",[i("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v(" Add Profile Picture ")]),i("v-divider"),i("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v(" Add personal information")]),i("v-divider"),i("v-stepper-step",{attrs:{step:"3"}},[e._v(" Create a Room ")])],1),i("v-stepper-items",[i("v-stepper-content",{attrs:{step:"1"}},[i("v-container",[i("v-row",{attrs:{justify:"center"}},[i("v-avatar",{staticClass:"profile",attrs:{color:"grey",size:"164",rounded:""}},[i("v-img",{attrs:{src:e.dp}})],1)],1)],1),i("v-file-input",{attrs:{accept:".jpg, .png",label:"Add Profile Picture"},on:{change:e.loadImage},model:{value:e.dp,callback:function(t){e.dp=t},expression:"dp"}}),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=2}}},[e._v(" Continue ")]),i("v-btn",{attrs:{text:""}},[e._v(" Cancel ")])],1),i("v-stepper-content",{attrs:{step:"2"}},[i("v-container",[i("v-text-field",{attrs:{label:"Profession"}}),i("v-autocomplete",{attrs:{items:e.categories,"item-text":"name",chips:"",label:"Interests (i.e: Bangla, IELTS, HR)","full-width":"","hide-details":"","hide-no-data":"","hide-selected":"",multiple:"","single-line":""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),i("v-btn",{attrs:{text:""},on:{click:function(t){e.e1=3}}},[e._v(" Skip ")]),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v(" Continue ")])],1),i("v-stepper-content",{attrs:{step:"3"}},[i("new-room",{attrs:{from_complete:!0}}),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=3}}},[e._v(" Continue ")]),i("v-btn",{attrs:{text:""}},[e._v(" Cancel ")])],1),i("v-stepper-content",{attrs:{step:"3"}},[i("v-text-field",{attrs:{label:"Add Recepients email",hint:"use (,) to separate emails"}})],1)],1)],1)],1)},r=[],n=i("851f"),a=i("7424"),o={components:{NewRoom:n["a"]},data:function(){return{e1:1,dp:"",selected:"",categories:[]}},created:function(){var e=this;a["a"].get("/categories").then((function(t){return e.categories=t.data}))},methods:{loadImage:function(e){this.dp=URL.createObjectURL(e),URL.revokeObjectURL(e)}}},c=o,l=i("2877"),p=i("6544"),u=i.n(p),d=i("c6a6"),h=i("8212"),v=i("8336"),f=i("99d9"),m=i("a523"),b=i("ce7e"),g=i("23a7"),_=i("adda"),y=i("0fd9"),O=(i("8836"),i("10d2")),j=i("3206"),k=i("a452"),V=i("58df"),C=i("d9bd");function w(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function x(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?w(Object(i),!0).forEach((function(t){$(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):w(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function $(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var S=Object(V["a"])(O["a"],Object(j["b"])("stepper"),k["a"]),P=S.extend({name:"v-stepper",provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{altLabels:Boolean,nonLinear:Boolean,flat:Boolean,vertical:Boolean},data:function(){var e={isBooted:!1,steps:[],content:[],isReverse:!1};return e.internalLazyValue=null!=this.value?this.value:(e[0]||{}).step||1,e},computed:{classes:function(){return x({"v-stepper--flat":this.flat,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},O["a"].options.computed.classes.call(this))},styles:function(){return x({},O["a"].options.computed.styles.call(this))}},watch:{internalValue:function(e,t){this.isReverse=Number(e)<Number(t),t&&(this.isBooted=!0),this.updateView()}},created:function(){this.$listeners.input&&Object(C["a"])("@input","@change",this)},mounted:function(){this.updateView()},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter((function(t){return t!==e})):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter((function(t){return t!==e})))},stepClick:function(e){var t=this;this.$nextTick((function(){return t.internalValue=e}))},updateView:function(){for(var e=this.steps.length;--e>=0;)this.steps[e].toggle(this.internalValue);for(var t=this.content.length;--t>=0;)this.content[t].toggle(this.internalValue,this.isReverse)}},render:function(e){return e(this.tag,{staticClass:"v-stepper",class:this.classes,style:this.styles},this.$slots.default)}}),A=i("0789"),I=i("80d2"),R=Object(V["a"])(Object(j["a"])("stepper","v-stepper-content","v-stepper")),B=R.extend().extend({name:"v-stepper-content",inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{computedTransition:function(){var e=this.$vuetify.rtl?!this.isReverse:this.isReverse;return e?A["e"]:A["f"]},styles:function(){return this.isVertical?{height:Object(I["h"])(this.height)}:{}}},watch:{isActive:function(e,t){e&&null==t?this.height="auto":this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame((function(){t=e.$refs.wrapper.scrollHeight})),this.height=0,setTimeout((function(){return e.isActive&&(e.height=t||"auto")}),450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout((function(){return e.height=0}),10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={staticClass:"v-stepper__content"},i={staticClass:"v-stepper__wrapper",style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var s=e("div",i,[this.$slots.default]),r=e("div",t,[s]);return e(this.computedTransition,{on:this.$listeners},[r])}}),E=i("9d26"),D=i("a9ad"),L=i("5607"),T=Object(V["a"])(D["a"],Object(j["a"])("stepper","v-stepper-step","v-stepper")),N=T.extend().extend({name:"v-stepper-step",directives:{ripple:L["a"]},inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},errorIcon:{type:String,default:"$error"},rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error error--text":this.hasError,"v-stepper__step--complete":this.complete}},hasError:function(){return this.rules.some((function(e){return!0!==e()}))}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},genIcon:function(e){return this.$createElement(E["a"],e)},genLabel:function(){return this.$createElement("div",{staticClass:"v-stepper__label"},this.$slots.default)},genStep:function(){var e=!(this.hasError||!this.complete&&!this.isActive)&&this.color;return this.$createElement("span",this.setBackgroundColor(e,{staticClass:"v-stepper__step__step"}),this.genStepContent())},genStepContent:function(){var e=[];return this.hasError?e.push(this.genIcon(this.errorIcon)):this.complete?this.editable?e.push(this.genIcon(this.editIcon)):e.push(this.genIcon(this.completeIcon)):e.push(String(this.step)),e},keyboardClick:function(e){e.keyCode===I["z"].space&&this.click(e)},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){return e("div",{attrs:{tabindex:this.editable?0:-1},staticClass:"v-stepper__step",class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click,keydown:this.keyboardClick}},[this.genStep(),this.genLabel()])}}),F=Object(I["j"])("v-stepper__header"),H=Object(I["j"])("v-stepper__items"),U=i("8654"),q=Object(l["a"])(c,s,r,!1,null,null,null);t["default"]=q.exports;u()(q,{VAutocomplete:d["a"],VAvatar:h["a"],VBtn:v["a"],VCardTitle:f["d"],VContainer:m["a"],VDivider:b["a"],VFileInput:g["a"],VImg:_["a"],VRow:y["a"],VStepper:P,VStepperContent:B,VStepperHeader:F,VStepperItems:H,VStepperStep:N,VTextField:U["a"]})},"851f":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",[i("v-form",{ref:"form"},[i("v-card-title",[e._v("Create a Room")]),i("v-card-text",[i("v-row",[i("v-col",[i("v-text-field",{attrs:{label:"Title",rules:e.$requiredRules},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),i("v-combobox",{attrs:{label:"Category",items:e.categories,"item-text":"title","item-value":"title",chips:"",multiple:"","return-object":!1},model:{value:e.selected_categories,callback:function(t){e.selected_categories=t},expression:"selected_categories"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),e.from_complete?i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.redirect_to_profile}},[e._v(" Skip ")]):i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialog}},[e._v(" Close ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Continue ")])],1)],1)],1)},r=[],n=i("09e3"),a=i("7424");function o(){return{title:"",form:"",categories:[],selected_categories:[]}}var c={name:"NewClass",components:{NewMeeting:n["a"]},props:["from_complete"],data:function(){return{form:"",e1:1,title:"",categories:[],selected_categories:[]}},emits:["closeDialog"],created:function(){var e=this;a["a"].get("categories/").then((function(t){return e.categories=t.data}))},methods:{save:function(){this.$refs.form.validate()&&(this.$store.dispatch("classes/add",{name:this.title,selected_categories:this.selected_categories}),this.e1=2,Object.assign(this.$data,o()),this.$emit("closeDialog"))},to_next_step:function(){this.e1+=1},redirect_to_profile:function(){this.$router.push("/profile")},closeDialog:function(){this.$emit("closeDialog")}},computed:{}},l=c,p=i("2877"),u=i("6544"),d=i.n(u),h=i("8336"),v=i("b0af"),f=i("99d9"),m=i("62ad"),b=i("2b5d"),g=i("4bd4"),_=i("0fd9"),y=i("2fa4"),O=i("8654"),j=Object(p["a"])(l,s,r,!1,null,null,null);t["a"]=j.exports;d()(j,{VBtn:h["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["c"],VCardTitle:f["d"],VCol:m["a"],VCombobox:b["a"],VForm:g["a"],VRow:_["a"],VSpacer:y["a"],VTextField:O["a"]})},8836:function(e,t,i){},"99d9":function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"d",(function(){return c}));var s=i("b0af"),r=i("80d2"),n=Object(r["j"])("v-card__actions"),a=Object(r["j"])("v-card__subtitle"),o=Object(r["j"])("v-card__text"),c=Object(r["j"])("v-card__title");s["a"]},afdd:function(e,t,i){"use strict";var s=i("8336");t["a"]=s["a"]},b0af:function(e,t,i){"use strict";i("615b");var s=i("10d2"),r=i("297c"),n=i("1c87"),a=i("58df");function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t["a"]=Object(a["a"])(r["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return c(c({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var e=c({},s["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=r["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,s=t.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-6d799191.779ae080.js.map