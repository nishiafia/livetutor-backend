(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d14a8bf"],{"00e1":function(e,t,n){"use strict";n("950a")},"950a":function(e,t,n){},ce87:function(e,t,n){"use strict";var a=n("16b7"),s=n("f2e7"),i=n("58df"),r=n("d9bd");t["a"]=Object(i["a"])(a["a"],s["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(e=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(r["c"])("v-hover should only contain a single element",this),e)):(Object(r["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var e}})},e9be:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-2"},[n("v-row",[n("v-col",[n("v-card",{staticClass:"pa-4"},[n("v-card-actions",[n("v-btn",{attrs:{color:"red lighten-2",dark:"",outlined:""},on:{click:e.deleteAssignment}},[e._v("Delete")]),n("v-spacer"),n("v-btn",{attrs:{color:"green lighten-2",dark:"",outlined:""},on:{click:function(t){return e.updateAssignment(e.assignment)}}},[e._v("Save")])],1),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-text-field",{attrs:{label:"Title"},model:{value:e.assignment.name,callback:function(t){e.$set(e.assignment,"name",t)},expression:"assignment.name"}})],1),n("v-col",{attrs:{cols:"4"}},[n("v-text-field",{attrs:{label:"Mark",type:"number"},model:{value:e.assignment.mark,callback:function(t){e.$set(e.assignment,"mark",t)},expression:"assignment.mark"}})],1)],1),n("v-text-field",{attrs:{label:"Description"},model:{value:e.assignment.description,callback:function(t){e.$set(e.assignment,"description",t)},expression:"assignment.description"}}),n("v-row",[n("v-col",[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.assignment.end_date_time,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.assignment,"end_date_time",t)},"update:return-value":function(t){return e.$set(e.assignment,"end_date_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Assignment Due Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.assignment.end_date_time,callback:function(t){e.$set(e.assignment,"end_date_time",t)},expression:"assignment.end_date_time"}},"v-text-field",s,!1),a))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.assignment.end_date_time,callback:function(t){e.$set(e.assignment,"end_date_time",t)},expression:"assignment.end_date_time"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.assignment.end_date_time)}}},[e._v(" OK ")])],1)],1)],1),n("v-col",[n("v-menu",{ref:"menu2",attrs:{"nudge-right":40,"return-value":e.assignment.due_time,transition:"scale-transition","offset-y":"","close-on-content-click":!1,"max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.assignment,"due_time",t)},"update:return-value":function(t){return e.$set(e.assignment,"due_time",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,s=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Assignment Due Time","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.assignment.end_date_time,callback:function(t){e.$set(e.assignment,"end_date_time",t)},expression:"assignment.end_date_time"}},"v-text-field",s,!1),a))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e.menu2?n("v-time-picker",{attrs:{"full-width":""},model:{value:e.assignment.end_date_time,callback:function(t){e.$set(e.assignment,"end_date_time",t)},expression:"assignment.end_date_time"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu2.save(e.assignment.due_time)}}},[e._v(" OK ")])],1):e._e()],1)],1)],1)],1)],1),n("v-col",[n("v-card",{staticClass:"pa-4"},[n("v-card-title",[e._v("Attachments")]),n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[e._l(e.assignment.files,(function(t,a){return[n("v-col",{key:a,attrs:{cols:"12",md:"3"}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var s=a.hover;return[n("v-card",{class:{"on-hover":s},attrs:{elevation:s?12:2}},[n("v-img",{attrs:{src:t.file_url,height:"100px",contain:""}},[n("v-card-title",{staticClass:"text-h6 white--text"},[n("v-row",{staticClass:"fill-height flex-column",attrs:{justify:"space-between"}},[n("div",{staticClass:"align-self-center"},[n("v-btn",{class:{"show-btns":s},attrs:{color:e.transparent,icon:""},on:{click:function(n){return e.deleteFile(t)}}},[n("v-icon",[e._v(" mdi-delete ")])],1)],1)])],1)],1)],1)]}}],null,!0)})],1)]}))],2),n("v-row",[n("v-file-input",{attrs:{multiple:"",chips:"","append-icon":"mdi-check",label:"Add New Files"},on:{"click:append":e.addFiles},model:{value:e.newFiles,callback:function(t){e.newFiles=t},expression:"newFiles"}})],1)],1)],1)],1),n("v-card",{staticClass:"mt-4"},[n("v-card-title",[e._v("Submissions")]),n("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.submissions,"item-key":"id"},scopedSlots:e._u([{key:"item.mark",fn:function(t){var a=t.item;return[n("v-text-field",{attrs:{type:"number",max:e.assignment.mark,step:"0.1",suffix:"/ "+e.assignment.mark},on:{change:function(t){return e.updateMark(t,a)}},model:{value:a.mark,callback:function(t){e.$set(a,"mark",t)},expression:"item.mark"}})]}}])})],1)],1)},s=[],i=n("7424"),r={name:"Assignments",data:function(){return{menu:!1,menu2:!1,newFiles:[],transparent:"rgba(255, 255, 255, 0)",headers:[{text:"Submitted By",value:"room_user.name"},{text:"Submitted At",value:"created_at"},{text:"Submission Status",value:"submit_status"},{text:"Mark",value:"mark"},{text:"File",value:"files"}],submissions:[]}},created:function(){this.loadSubmissions()},methods:{loadSubmissions:function(){var e=this;i["a"].get("/assignments/".concat(this.$route.params.id,"/submissions/")).then((function(t){e.submissions=t.data}))},updateMark:function(e,t){var n=t.id;i["a"].put("assignment_submissions/",{mark:e,id:n}).then((function(e){return console.log(e)}))},deleteFile:function(e){var t=e.id;e.assignment_id;return i["a"].delete("assignment_files/".concat(t))},deleteAssignment:function(){return this.$store.dispatch("assignments/delete",this.assignment.id)},addFiles:function(){var e=new FormData;if(e.append("id",this.assignment.id),this.newFiles.length>0)for(var t=0;t<this.newFiles.length;t++)e.append("attachments[]",this.newFiles[t]);return console.log(e),i["a"].post("assignment_files/",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return console.log(e)}))},updateAssignment:function(e){var t=e.id,n=e.class_id,a=e.name,s=e.description,i=(e.due_date,e.due_time,e.mark);return this.$store.dispatch("assignments/update",{id:t,class_id:n,name:a,description:s,end_date_time:end_date_time,mark:i})}},computed:{assignment:function(){var e=this;return this.$store.state.assignments.assignments.find((function(t){return t.id==e.$route.params.id}))}}},o=r,l=(n("00e1"),n("2877")),c=n("6544"),u=n.n(c),d=n("8336"),m=n("b0af"),v=n("99d9"),f=n("62ad"),p=n("a523"),g=n("8fea"),_=n("2e4b"),h=n("23a7"),b=n("ce87"),k=n("132d"),x=n("adda"),w=n("e449"),y=n("0fd9"),$=n("2fa4"),V=n("8654"),C=n("c964"),S=Object(l["a"])(o,a,s,!1,null,"13960561",null);t["default"]=S.exports;u()(S,{VBtn:d["a"],VCard:m["a"],VCardActions:v["a"],VCardTitle:v["d"],VCol:f["a"],VContainer:p["a"],VDataTable:g["a"],VDatePicker:_["a"],VFileInput:h["a"],VHover:b["a"],VIcon:k["a"],VImg:x["a"],VMenu:w["a"],VRow:y["a"],VSpacer:$["a"],VTextField:V["a"],VTimePicker:C["a"]})}}]);
//# sourceMappingURL=chunk-5d14a8bf.86788fdb.js.map