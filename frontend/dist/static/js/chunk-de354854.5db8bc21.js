(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de354854"],{"09e3":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"pa-4"},[n("v-card-title",[n("span",{staticClass:"text-h5",domProps:{innerHTML:e._s("Create New Schedule"+(this.class_id?" for "+this.class_id:""))}})]),n("v-card-subtitle",[n("span",{staticClass:"text-h7"},[e._v("Select single or multiple date")])]),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Title","hide-details":"auto"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("v-col",[e.class_id?e._e():n("v-select",{attrs:{label:"Select Class",items:e.user_created_classes,"item-text":"name","item-value":"id","persistent-hint":"",hint:"Room: "+(e.selected_class.name||"Not Selected")+" | Category: "+(e.selected_class.category||"Not Selected"),"return-object":""},model:{value:e.selected_class,callback:function(t){e.selected_class=t},expression:"selected_class"}})],1)],1),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Short Description"},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}})],1)],1),n("v-row",[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.dates,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.dates=t},"update:return-value":function(t){e.dates=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[n("v-combobox",e._g(e._b({attrs:{multiple:"",chips:"","small-chips":"",label:"Select Date(s)",hint:"You can select upto 8 weeks","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}},"v-combobox",s,!1),i))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-date-picker",{attrs:{max:e.four_weeks_from_today,min:e.today,multiple:"","no-title":"",scrollable:""},model:{value:e.dates,callback:function(t){e.dates=t},expression:"dates"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.dates)}}},[e._v(" OK ")])],1)],1)],1),n("v-row",[n("v-col",[n("v-menu",{ref:"menu2",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Meeting Start Time","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}},"v-text-field",s,!1),i))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e.menu2?n("v-time-picker",{attrs:{"ampm-in-title":"",format:"ampm",color:"red lighten-1",max:e.end},on:{"click:minute":function(t){return e.$refs.menu2.save(e.end)}},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}}):e._e()],1)],1),n("v-col",[n("v-menu",{ref:"menu3",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){e.time=t},"update:return-value":function(t){e.time=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,s=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Meeting End Time","prepend-icon":"mdi-clock-time-four-outline",readonly:""},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}},"v-text-field",s,!1),i))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e.menu3?n("v-time-picker",{attrs:{"ampm-in-title":"",format:"ampm",color:"red lighten-1",min:e.start},on:{"click:minute":function(t){return e.$refs.menu3.save(e.end)}},model:{value:e.end,callback:function(t){e.end=t},expression:"end"}}):e._e()],1)],1)],1),e.from_complete?e.from_complete?n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("skip_step")}}},[e._v(" Skip ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save_for_completion}},[e._v(" Continue ")])],1):e._e():n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){return e.$emit("closeDialog")}}},[e._v(" Close ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)},s=[],a=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={name:"NewMeeting",props:["class_id","from_complete"],data:function(){return{name:"",details:"",dates:[],start:null,end:null,menu:!1,menu2:!1,menu3:!1,selected_class:{},colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"]}},emits:["closeDialog","to_next_step"],methods:{save:function(){var e=this,t=this.dates.map((function(t){return{name:e.name,description:e.details,room:e.class_id?e.class_id:e.selected_class.id,start_date_time:"".concat(t," ").concat(e.start),end_date_time:"".concat(t," ").concat(e.end)}}));this.$store.dispatch("meetings/add",{meetings:t})},getSelectText:function(e){return e.section},save_for_completion:function(){this.save(),this.$emit("to_next_step")}},computed:l({four_weeks_from_today:function(){var e=new Date;return e.setDate(e.getDate()+84),new Date(e-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)},today:function(){return new Date(new Date-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}},Object(a["b"])({user_created_classes:"classes/get_user_owned_classes"}))},u=c,h=n("2877"),d=n("6544"),p=n.n(d),m=n("8336"),f=n("b0af"),v=n("99d9"),b=n("62ad"),g=n("2b5d"),I=n("2e4b"),S=n("e449"),y=n("0fd9"),x=n("b974"),O=n("2fa4"),w=n("8654"),D=n("c964"),_=Object(h["a"])(u,i,s,!1,null,null,null);t["a"]=_.exports;p()(_,{VBtn:m["a"],VCard:f["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardTitle:v["d"],VCol:b["a"],VCombobox:g["a"],VDatePicker:I["a"],VMenu:S["a"],VRow:y["a"],VSelect:x["a"],VSpacer:O["a"],VTextField:w["a"],VTimePicker:D["a"]})},"2b5d":function(e,t,n){"use strict";n("2bfd");var i=n("b974"),s=n("c6a6"),a=n("80d2");function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t["a"]=s["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return i["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection:function(e,t){var n=this,s=i["a"].options.methods.genChipSelection.call(this,e,t);return this.multiple&&(s.componentOptions.listeners=o(o({},s.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),s},onChipInput:function(e){i["a"].options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[a["z"].home,a["z"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.multiple&&t===a["z"].left&&0===this.$refs.input.selectionStart?this.updateSelf():t===a["z"].enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();s["a"].options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(s["a"].options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){i["a"].options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing:function(){var e=this,t=this.internalValue.slice(),n=this.selectedItems.findIndex((function(t){return e.getText(t)===e.internalSearch}));if(n>-1){var i="object"===r(t[n])?Object.assign({},t[n]):t[n];t.splice(n,1),t.push(i)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),i=n>-1&&"object"===r(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var s=this.internalValue.slice();s.splice(n,1),this.setValue(s)}if(t>-1)return this.internalSearch=null;this.selectItem(i),this.internalSearch=null}},onPaste:function(e){var t;if(this.multiple&&!this.searchIsDirty){var n=null==(t=e.clipboardData)?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),i["a"].options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,s["a"].options.methods.clearableCallback.call(this)}}})},"2bfd":function(e,t,n){},c6a6:function(e,t,n){"use strict";n("2bfd");var i=n("b974"),s=n("8654"),a=n("d9f7"),r=n("80d2");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=o(o({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return u}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return o(o({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(r["s"])(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=i["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),o(o({},u),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=i["a"].options.computed.listData.call(this);return e.props=o(o({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===r["z"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["z"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["z"].backspace&&e!==r["z"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=e!==i-1?e:e-1,a=this.selectedItems[s];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=s["a"].options.methods.genInput.call(this);return e.data=Object(a["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["q"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["q"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=i["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[r["z"].home,r["z"].end].includes(t)||i["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){i["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){i["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",s),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}})}}]);
//# sourceMappingURL=chunk-de354854.5db8bc21.js.map