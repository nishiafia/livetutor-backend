webpackHotUpdate(1,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/views/creation/NewAssignment.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/views/creation/NewAssignment.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nfunction initialState() {\n  return {\n    name: \"\",\n    details: \"\",\n    due_date: null,\n    start: null,\n    due_time: null,\n    menu: false,\n    menu2: false,\n    mark: 0,\n    selected_class: {},\n    attachments: {},\n    colors: [\"blue\", \"indigo\", \"deep-purple\", \"cyan\", \"green\", \"orange\", \"grey darken-1\"]\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: [\"class_id\"],\n  data: function data() {\n    return {\n      name: \"\",\n      details: \"\",\n      due_date: null,\n      start: null,\n      due_time: null,\n      menu: false,\n      menu2: false,\n      selected_class: {},\n      attachments: {},\n      mark: 0,\n      classes: this.$store.state.classes.classes,\n      colors: [\"blue\", \"indigo\", \"deep-purple\", \"cyan\", \"green\", \"orange\", \"grey darken-1\"]\n    };\n  },\n  emits: [\"closeDialog\"],\n  // props: [\"selectedDate\"],\n  methods: {\n    save: function save() {\n      this.$store.dispatch(\"assignments/add\", {\n        name: this.name,\n        description: this.details,\n        attachments: this.attachments,\n        room: this.class_id ? this.class_id : this.selected_class.id,\n        submission_date_time: \"\".concat(this.due_date, \" \").concat(this.due_time),\n        mark: this.mark\n      });\n      Object.assign(this.data, initialState());\n      this.$emit(\"closeDialog\");\n    },\n    getSelectText: function getSelectText(item) {\n      return item.section;\n    }\n  },\n  computed: {\n    today: function today() {\n      return new Date(new Date() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvdmlld3MvY3JlYXRpb24vTmV3QXNzaWdubWVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL05ld0Fzc2lnbm1lbnQudnVlPzMwYmIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jYXJkIGNsYXNzPVwicGEtNFwiPlxuICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtaDVcIj5DcmVhdGUgTmV3IEFzc2lnbm1lbnQge3sgdGhpcy5jbGFzc19pZCB9fTwvc3Bhbj5cbiAgICA8L3YtY2FyZC10aXRsZT5cbiAgICA8di1mb3JtIHYtb246c3VibWl0LnByZXZlbnQ9XCJzYXZlXCI+XG4gICAgICA8di1yb3c+XG4gICAgICAgIDx2LWNvbD5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICB2LW1vZGVsPVwibmFtZVwiXG4gICAgICAgICAgICBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgIGhpZGUtZGV0YWlscz1cImF1dG9cIlxuICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPC92LWNvbD5cbiAgICAgICAgPHYtY29sPlxuICAgICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgICAgdi1pZj1cIiFjbGFzc19pZFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRfY2xhc3NcIlxuICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgQ2xhc3NcIlxuICAgICAgICAgICAgOml0ZW1zPVwiY2xhc3Nlc1wiXG4gICAgICAgICAgICBpdGVtLXRleHQ9XCJuYW1lXCJcbiAgICAgICAgICAgIGl0ZW0tdmFsdWU9XCJpZFwiXG4gICAgICAgICAgICBwZXJzaXN0ZW50LWhpbnRcbiAgICAgICAgICAgIDpoaW50PVwiYFJvb206ICR7c2VsZWN0ZWRfY2xhc3MubmFtZSB8fCAnTm90IFNlbGVjdGVkJ30gfCBTZWN0aW9uOiAke1xuICAgICAgICAgICAgICBzZWxlY3RlZF9jbGFzcy5zZWN0aW9uIHx8ICdOb3QgU2VsZWN0ZWQnXG4gICAgICAgICAgICB9IHwgU2Vzc2lvbjogJHtzZWxlY3RlZF9jbGFzcy5zZXNzaW9uIHx8ICdOb3QgU2VsZWN0ZWQnfWBcIlxuICAgICAgICAgICAgcmV0dXJuLW9iamVjdFxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6c2VsZWN0aW9uPVwieyBpdGVtIH1cIlxuICAgICAgICAgICAgICA+e3sgaXRlbS5uYW1lIH19IC0ge3sgaXRlbS5zZWN0aW9uIH19XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtPVwieyBpdGVtIH1cIlxuICAgICAgICAgICAgICA+e3sgaXRlbS5uYW1lIH19IC0ge3sgaXRlbS5zZWN0aW9uIH19XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICAgIDwvdi1jb2w+XG4gICAgICA8L3Ytcm93PlxuICAgICAgPHYtcm93PlxuICAgICAgICA8di1jb2w+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cImRldGFpbHNcIlxuICAgICAgICAgICAgbGFiZWw9XCJTaG9ydCBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICA8L3YtY29sPlxuICAgICAgICA8di1jb2w+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICB2LW1vZGVsPVwibWFya1wiXG4gICAgICAgICAgICBsYWJlbD1cIk1hcmtcIlxuICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgPC92LWNvbD5cbiAgICAgIDwvdi1yb3c+XG4gICAgICA8di1yb3c+XG4gICAgICAgIDx2LWZpbGUtaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIkF0dGFjaG1lbnRzXCJcbiAgICAgICAgICB2LW1vZGVsPVwiYXR0YWNobWVudHNcIlxuICAgICAgICAgIGFjY2VwdD1cIi5kb2MsLmRvY3gsLnBkZiwuanBnLC5qcGVnLC5wbmdcIlxuICAgICAgICAgIGNoaXBzXG4gICAgICAgICAgc2hvdy1zaXplXG4gICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICBjb3VudGVyXG4gICAgICAgID48L3YtZmlsZS1pbnB1dD5cbiAgICAgIDwvdi1yb3c+XG4gICAgICA8di1yb3c+XG4gICAgICAgIDx2LWNvbD5cbiAgICAgICAgICA8di1tZW51XG4gICAgICAgICAgICByZWY9XCJtZW51XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJtZW51XCJcbiAgICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwiZHVlX2RhdGVcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgb2Zmc2V0LXlcbiAgICAgICAgICAgIG1pbi13aWR0aD1cImF1dG9cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImR1ZV9kYXRlXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFzc2lnbm1lbnQgRHVlIERhdGVcIlxuICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1kaS1jYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgPjwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyIHYtbW9kZWw9XCJkdWVfZGF0ZVwiIDptaW49XCJ0b2RheVwiIG5vLXRpdGxlIHNjcm9sbGFibGU+XG4gICAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgICA8di1idG4gdGV4dCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj4gQ2FuY2VsIDwvdi1idG4+XG4gICAgICAgICAgICAgIDx2LWJ0biB0ZXh0IGNvbG9yPVwicHJpbWFyeVwiIEBjbGljaz1cIiRyZWZzLm1lbnUuc2F2ZShkdWVfZGF0ZSlcIj5cbiAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgPC92LWRhdGUtcGlja2VyPlxuICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICA8L3YtY29sPlxuICAgICAgICA8di1jb2w+XG4gICAgICAgICAgPHYtbWVudVxuICAgICAgICAgICAgcmVmPVwibWVudTJcIlxuICAgICAgICAgICAgdi1tb2RlbD1cIm1lbnUyXCJcbiAgICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgOnJldHVybi12YWx1ZS5zeW5jPVwiZHVlX3RpbWVcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgb2Zmc2V0LXlcbiAgICAgICAgICAgIG1heC13aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgICAgIG1pbi13aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkdWVfdGltZVwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBc3NpZ25tZW50IER1ZSBUaW1lXCJcbiAgICAgICAgICAgICAgICBwcmVwZW5kLWljb249XCJtZGktY2xvY2stdGltZS1mb3VyLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgdi1iaW5kPVwiYXR0cnNcIlxuICAgICAgICAgICAgICAgIHYtb249XCJvblwiXG4gICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8di10aW1lLXBpY2tlclxuICAgICAgICAgICAgICB2LWlmPVwibWVudTJcIlxuICAgICAgICAgICAgICBhbXBtLWluLXRpdGxlXG4gICAgICAgICAgICAgIGZvcm1hdD1cImFtcG1cIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwiZHVlX3RpbWVcIlxuICAgICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICAgIEBjbGljazptaW51dGU9XCIkcmVmcy5tZW51Mi5zYXZlKGR1ZV90aW1lKVwiXG4gICAgICAgICAgICA+PC92LXRpbWUtcGlja2VyPlxuICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICA8L3YtY29sPlxuICAgICAgPC92LXJvdz5cblxuICAgICAgPHYtY2FyZC1hY3Rpb25zPlxuICAgICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgICAgPHYtYnRuIGNvbG9yPVwiYmx1ZSBkYXJrZW4tMVwiIHRleHQgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlRGlhbG9nJylcIj5cbiAgICAgICAgICBDbG9zZVxuICAgICAgICA8L3YtYnRuPlxuICAgICAgICA8di1idG4gY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgdHlwZT1cInN1Ym1pdFwiIHRleHQ+IFNhdmUgPC92LWJ0bj5cbiAgICAgIDwvdi1jYXJkLWFjdGlvbnM+XG4gICAgPC92LWZvcm0+XG4gIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5mdW5jdGlvbiBpbml0aWFsU3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJcIixcbiAgICBkZXRhaWxzOiBcIlwiLFxuICAgIGR1ZV9kYXRlOiBudWxsLFxuICAgIHN0YXJ0OiBudWxsLFxuICAgIGR1ZV90aW1lOiBudWxsLFxuICAgIG1lbnU6IGZhbHNlLFxuICAgIG1lbnUyOiBmYWxzZSxcbiAgICBtYXJrOiAwLFxuICAgIHNlbGVjdGVkX2NsYXNzOiB7fSxcbiAgICBhdHRhY2htZW50czoge30sXG4gICAgY29sb3JzOiBbXG4gICAgICBcImJsdWVcIixcbiAgICAgIFwiaW5kaWdvXCIsXG4gICAgICBcImRlZXAtcHVycGxlXCIsXG4gICAgICBcImN5YW5cIixcbiAgICAgIFwiZ3JlZW5cIixcbiAgICAgIFwib3JhbmdlXCIsXG4gICAgICBcImdyZXkgZGFya2VuLTFcIixcbiAgICBdLFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiY2xhc3NfaWRcIl0sXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGRldGFpbHM6IFwiXCIsXG4gICAgICBkdWVfZGF0ZTogbnVsbCxcbiAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgZHVlX3RpbWU6IG51bGwsXG4gICAgICBtZW51OiBmYWxzZSxcbiAgICAgIG1lbnUyOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkX2NsYXNzOiB7fSxcbiAgICAgIGF0dGFjaG1lbnRzOiB7fSxcbiAgICAgIG1hcms6IDAsXG4gICAgICBjbGFzc2VzOiB0aGlzLiRzdG9yZS5zdGF0ZS5jbGFzc2VzLmNsYXNzZXMsXG4gICAgICBjb2xvcnM6IFtcbiAgICAgICAgXCJibHVlXCIsXG4gICAgICAgIFwiaW5kaWdvXCIsXG4gICAgICAgIFwiZGVlcC1wdXJwbGVcIixcbiAgICAgICAgXCJjeWFuXCIsXG4gICAgICAgIFwiZ3JlZW5cIixcbiAgICAgICAgXCJvcmFuZ2VcIixcbiAgICAgICAgXCJncmV5IGRhcmtlbi0xXCIsXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIGVtaXRzOiBbXCJjbG9zZURpYWxvZ1wiXSxcbiAgLy8gcHJvcHM6IFtcInNlbGVjdGVkRGF0ZVwiXSxcblxuICBtZXRob2RzOiB7XG4gICAgc2F2ZSgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiYXNzaWdubWVudHMvYWRkXCIsIHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXRhaWxzLFxuICAgICAgICBhdHRhY2htZW50czogdGhpcy5hdHRhY2htZW50cyxcbiAgICAgICAgcm9vbTogdGhpcy5jbGFzc19pZCA/IHRoaXMuY2xhc3NfaWQgOiB0aGlzLnNlbGVjdGVkX2NsYXNzLmlkLFxuICAgICAgICBzdWJtaXNzaW9uX2RhdGVfdGltZTogYCR7dGhpcy5kdWVfZGF0ZX0gJHt0aGlzLmR1ZV90aW1lfWAsXG4gICAgICAgIG1hcms6IHRoaXMubWFyayxcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmRhdGEsIGluaXRpYWxTdGF0ZSgpKTtcbiAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZURpYWxvZ1wiKTtcbiAgICB9LFxuICAgIGdldFNlbGVjdFRleHQoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0uc2VjdGlvbjtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHRvZGF5KCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5ldyBEYXRlKCkgLSBuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMClcbiAgICAgICAgLnRvSVNPU3RyaW5nKClcbiAgICAgICAgLnN1YnN0cigwLCAxMCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZT48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQXFCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQXNCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUdBO0FBTEE7QUE5Q0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/views/creation/NewAssignment.vue?vue&type=script&lang=js&\n");

/***/ })

})