(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ad8c70c"],{"0c18":function(t,e,r){},"2db4":function(t,e,r){"use strict";r("ca71");var n=r("8dd9"),i=r("a9ad"),o=r("7560"),s=r("f2e7"),a=r("fe6c"),c=r("58df"),l=r("80d2"),u=r("d9bd");function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=Object(c["a"])(n["a"],i["a"],s["a"],Object(a["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,r=t.bottom,n=t.footer,i=t.insetFooter,o=t.left,s=t.right,a=t.top;return{paddingBottom:Object(l["h"])(r+n+i),paddingLeft:Object(l["h"])(o),paddingRight:Object(l["h"])(s),paddingTop:Object(l["h"])(e+a)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(u["e"])("auto-height",this),0==this.timeout&&Object(u["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["t"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:d({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["t"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,r=e(this.color,{staticClass:"v-snack__wrapper",class:n["a"].options.computed.classes.call(this),style:n["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",r,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"4bd4":function(t,e,r){"use strict";var n=r("58df"),i=r("7e2b"),o=r("3206");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=Object(n["a"])(i["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:a({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},"56b4":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-card",{staticClass:"mx-4 pa-4"},[r("v-form",{directives:[{name:"show",rawName:"v-show",value:!t.otp_verified,expression:"!otp_verified"}],ref:"form1",on:{submit:function(e){return e.preventDefault(),t.check_mobile()}},model:{value:t.valid_form1,callback:function(e){t.valid_form1=e},expression:"valid_form1"}},[r("PhoneField",{ref:"phoneField",model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),r("v-alert",{staticClass:"d-flex align-items-center",attrs:{type:"info"}},[t._v(" Please save the below pin code for your login ")]),r("v-text-field",{attrs:{readonly:"",rules:t.$requiredRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),r("v-btn",{attrs:{type:"submit",color:"success",block:""}},[t._v("Continue")])],1),r("v-form",{directives:[{name:"show",rawName:"v-show",value:t.otp_verified,expression:"otp_verified"}],ref:"form2"},[r("v-text-field",{attrs:{label:"Full Name",rules:t.$requiredRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),r("v-text-field",{attrs:{rules:t.$requiredRules,label:"Address"},model:{value:t.address,callback:function(e){t.address=e},expression:"address"}}),r("v-text-field",{attrs:{type:"email",rules:t.$requiredRules,label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),r("v-btn",{attrs:{color:"success",block:""},on:{click:function(e){return t.register()}}},[t._v("Create Account")])],1)],1),r("v-snackbar",{attrs:{timeout:5e3,color:t.snackbar_color,bottom:"",left:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbar_text)+" ")])],1)],1)],1)},i=[],o=r("bc3a"),s=r.n(o),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-text-field",{attrs:{label:"Last Education"},model:{value:t.education,callback:function(e){t.education=e},expression:"education"}})],1)},c=[],l={name:"Individual",emits:["set_education"],data:function(){return{education:""}},watch:{education:function(t,e){t!==e&&this.$emit("set_education",this.education)}}},u=l,d=r("2877"),h=r("6544"),f=r.n(h),p=r("8654"),m=Object(d["a"])(u,a,c,!1,null,null,null),v=m.exports;f()(m,{VTextField:p["a"]});var b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-text-field",{attrs:{label:"Institution Name"},model:{value:t.org_name,callback:function(e){t.org_name=e},expression:"org_name"}}),r("v-select",{attrs:{items:t.org_types,"item-text":"label","item-value":"value",label:"Company Type"},model:{value:t.org_type,callback:function(e){t.org_type=e},expression:"org_type"}})],1)},g=[],y={name:"Institution",emits:["set_org_name","set_org_type"],data:function(){return{org_name:"",org_type:"",org_types:[]}},mounted:function(){var t=this;s.a.get(this.$apiAdress+"/api/orgtypes").then((function(e){return t.org_types=e.data.map((function(t){return{label:t.name,value:t.id}}))}))},watch:{org_name:function(t,e){t!==e&&this.$emit("set_org_name",this.org_name)},org_type:function(t,e){t!==e&&this.$emit("set_org_type",this.org_type)}}},_=y,w=r("b974"),O=Object(d["a"])(_,b,g,!1,null,null,null),k=O.exports;f()(O,{VSelect:w["a"],VTextField:p["a"]});var j=r("df00"),C={components:{Individual:v,Institution:k,PhoneField:j["a"]},name:"Register",data:function(){return{snackbar:!1,snackbar_text:"",snackbar_color:"",valid_form1:!0,form1:"",form2:"",name:"",mobile:"",address:void 0,email:void 0,password:Math.random().toString().slice(2,6),otp:"",pass_generated:!1,server_otp:"",otp_verified:!1,reg_complete:!1,profile_completed:!1}},methods:{check_mobile:function(){this.$refs.phoneField.validate()&&this.$refs.form1.validate()&&(this.otp_verified=!0,this.$refs.form2.resetValidation())},register:function(){var t=this;if(this.$refs.form2.validate()){var e={name:this.name,phone:this.mobile,address:this.address,password:this.password,email:this.email};return s.a.post("https://www.apps.livetutor.com.bd/api/users/",e,{headers:{"Content-Type":"application/json"}}).then((function(){return t.$store.dispatch("user/login",{phone:t.mobile,password:t.password})})).then((function(){return t.$router.push("/profile")})).catch((function(e){console.log(e),t.snackbar=!0,t.snackbar_text=e,t.snackbar_color="red lighten-2"}))}}}},x=C,$=(r("0c18"),r("10d2")),B=r("afdd"),P=r("9d26"),S=r("f2e7"),E=r("7560"),T=r("a026"),A=T["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),V=r("58df"),I=r("d9bd");function D(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?D(Object(r),!0).forEach((function(e){R(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var L=Object(V["a"])($["a"],S["a"],A).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:R({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(B["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(P["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(P["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=F(F({},$["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||E["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(I["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),q=r("8336"),N=r("b0af"),W=r("62ad"),M=r("a523"),z=r("4bd4"),H=r("0fd9"),J=r("2db4"),U=Object(d["a"])(x,n,i,!1,null,null,null);e["default"]=U.exports;f()(U,{VAlert:L,VBtn:q["a"],VCard:N["a"],VCol:W["a"],VContainer:M["a"],VForm:z["a"],VRow:H["a"],VSnackbar:J["a"],VTextField:p["a"]})},"615b":function(t,e,r){},a523:function(t,e,r){"use strict";r("20f6"),r("4b85");var n=r("a026");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,r){var n=r.props,i=r.data,o=r.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));a.length&&(i.staticClass+=" ".concat(a.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,o)}})}var o=r("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,i=e.data,s=e.children,a=i.attrs;return a&&(i.attrs={},r=Object.keys(a).filter((function(t){if("slot"===t)return!1;var e=a[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),s)}})},afdd:function(t,e,r){"use strict";var n=r("8336");e["a"]=n["a"]},b0af:function(t,e,r){"use strict";r("615b");var n=r("10d2"),i=r("297c"),o=r("1c87"),s=r("58df");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=Object(s["a"])(i["a"],o["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return c(c({"v-card":!0},o["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=c({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=i["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,n=e.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},ca71:function(t,e,r){},df00:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"phoneFieldForm"},[r("v-row",{staticClass:"d-flex-inline"},[r("v-col",{attrs:{cols:"5",sm:"3"}},[r("v-select",{attrs:{items:t.countries,"item-value":"phone_code",rules:t.requiredRules},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[r("v-img",{attrs:{width:"32",height:"16"},domProps:{innerHTML:t._s(n.flag)}}),r("span",{staticClass:"mx-2"},[t._v(" "+t._s(n.name)+" ")])]}},{key:"selection",fn:function(e){var n=e.item;return[r("v-img",{attrs:{width:"32",height:"16"},domProps:{innerHTML:t._s(n.flag)}}),r("span",{staticClass:"mx-2"},[t._v(" "+t._s(n.phone_code)+" ")])]}}]),model:{value:t.countryCode,callback:function(e){t.countryCode=e},expression:"countryCode"}})],1),r("v-col",{staticClass:"mx-md-0 pl-md-0",attrs:{cols:"7",sm:"9"}},[r("v-text-field",{attrs:{rules:t.phoneRules,label:"Mobile"},on:{input:t.handleInput}})],1)],1)],1)},i=[];function o(t){return l(t)||c(t)||a(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function c(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function l(t){if(Array.isArray(t))return u(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d={props:{rules:{type:Array,default:function(){return[]}}},data:function(){return{phoneFieldForm:"",countryCode:"+88",requiredRules:[function(t){return!!t||"This Field is Required"}],countries:[]}},computed:{phoneRules:function(){return[].concat(o(this.rules),[function(t){return!!t||"Phone is required"},function(t){return/^\d{11}$/.test(t)||"Phone must be 11 digits"}])}},created:function(){this.loadCountries()},methods:{loadCountries:function(){var t=this;this.$api.get("/locations/countries/").then((function(e){t.countries=e.data}))},handleInput:function(t){this.$emit("input","".concat(this.countryCode).concat(t))},validate:function(){return this.$refs.phoneFieldForm.validate()}}},h=d,f=r("2877"),p=r("6544"),m=r.n(p),v=r("62ad"),b=r("4bd4"),g=r("adda"),y=r("0fd9"),_=r("b974"),w=r("8654"),O=Object(f["a"])(h,n,i,!1,null,"360f7163",null);e["a"]=O.exports;m()(O,{VCol:v["a"],VForm:b["a"],VImg:g["a"],VRow:y["a"],VSelect:_["a"],VTextField:w["a"]})}}]);
//# sourceMappingURL=chunk-5ad8c70c.1de87add.js.map