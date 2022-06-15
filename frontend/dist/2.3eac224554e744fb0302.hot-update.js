webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/views/creation/NewRoom.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/views/creation/NewRoom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewMeeting_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMeeting.vue */ \"./src/components/views/creation/NewMeeting.vue\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\nfunction initialState() {\n  return {\n    title: \"\",\n    categories: [],\n    selected_categories: []\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"NewClass\",\n  components: {\n    NewMeeting: _NewMeeting_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: [\"from_complete\"],\n  data: function data() {\n    return {\n      // id: Math.floor(Math.random() * 1000),\n      e1: 1,\n      title: \"\",\n      categories: [],\n      selected_categories: []\n    };\n  },\n  emits: [\"closeDialog\"],\n  // props: [\"selectedDate\"],\n  created: function created() {\n    var _this = this;\n\n    _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/categories/\").then(function (res) {\n      return _this.categories = res.data;\n    });\n  },\n  methods: {\n    save: function save() {\n      this.$store.dispatch(\"classes/add\", {\n        name: this.title,\n        selected_categories: this.selected_categories\n      });\n      this.e1 = 2;\n      Object.assign(this.$data, initialState());\n      this.$emit(\"closeDialog\");\n    },\n    to_next_step: function to_next_step() {\n      this.e1 += 1;\n    },\n    redirect_to_profile: function redirect_to_profile() {\n      this.$router.push(\"/profile\");\n    },\n    closeDialog: function closeDialog() {\n      this.$emit(\"closeDialog\");\n    }\n  },\n  computed: {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvdmlld3MvY3JlYXRpb24vTmV3Um9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL05ld1Jvb20udnVlPzA1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jYXJkPlxuICAgIDx2LWNhcmQtdGl0bGU+Q3JlYXRlIGEgUm9vbTwvdi1jYXJkLXRpdGxlPlxuXG4gICAgPCEtLSA8di1jYXJkPiAtLT5cbiAgICA8di1jYXJkLXRleHQ+XG4gICAgICA8di1yb3c+XG4gICAgICAgIDx2LWNvbD5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJ0aXRsZVwiIGxhYmVsPVwiVGl0bGVcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICA8di1jb21ib2JveFxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkX2NhdGVnb3JpZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXG4gICAgICAgICAgICA6aXRlbXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cIm5hbWVcIlxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICA6cmV0dXJuLW9iamVjdD1cImZhbHNlXCJcbiAgICAgICAgICA+PC92LWNvbWJvYm94PlxuICAgICAgICA8L3YtY29sPlxuICAgICAgPC92LXJvdz5cbiAgICA8L3YtY2FyZC10ZXh0PlxuICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgPHYtYnRuXG4gICAgICAgIHYtaWY9XCJmcm9tX2NvbXBsZXRlXCJcbiAgICAgICAgY29sb3I9XCJibHVlIGRhcmtlbi0xXCJcbiAgICAgICAgdGV4dFxuICAgICAgICBAY2xpY2s9XCJyZWRpcmVjdF90b19wcm9maWxlXCJcbiAgICAgID5cbiAgICAgICAgU2tpcFxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biB2LWVsc2UgY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJjbG9zZURpYWxvZ1wiPlxuICAgICAgICBDbG9zZVxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBAY2xpY2s9XCJzYXZlXCIgdGV4dD4gQ29udGludWUgPC92LWJ0bj5cbiAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IE5ld01lZXRpbmcgZnJvbSBcIi4vTmV3TWVldGluZy52dWVcIjtcbmltcG9ydCBhcGkgZnJvbSBcIkAvc2VydmljZXMvYXBpXCI7XG5mdW5jdGlvbiBpbml0aWFsU3RhdGUoKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiXCIsXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgc2VsZWN0ZWRfY2F0ZWdvcmllczogW10sXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTmV3Q2xhc3NcIixcbiAgY29tcG9uZW50czogeyBOZXdNZWV0aW5nIH0sXG4gIHByb3BzOiBbXCJmcm9tX2NvbXBsZXRlXCJdLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIGUxOiAxLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIHNlbGVjdGVkX2NhdGVnb3JpZXM6IFtdLFxuICAgIH07XG4gIH0sXG4gIGVtaXRzOiBbXCJjbG9zZURpYWxvZ1wiXSxcbiAgLy8gcHJvcHM6IFtcInNlbGVjdGVkRGF0ZVwiXSxcbiAgY3JlYXRlZCgpIHtcbiAgICBhcGkuZ2V0KFwiL2NhdGVnb3JpZXMvXCIpLnRoZW4oKHJlcykgPT4gKHRoaXMuY2F0ZWdvcmllcyA9IHJlcy5kYXRhKSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzYXZlKCkge1xuICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJjbGFzc2VzL2FkZFwiLCB7XG4gICAgICAgIG5hbWU6IHRoaXMudGl0bGUsXG4gICAgICAgIHNlbGVjdGVkX2NhdGVnb3JpZXM6IHRoaXMuc2VsZWN0ZWRfY2F0ZWdvcmllcyxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5lMSA9IDI7XG5cbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy4kZGF0YSwgaW5pdGlhbFN0YXRlKCkpO1xuICAgICAgdGhpcy4kZW1pdChcImNsb3NlRGlhbG9nXCIpO1xuICAgIH0sXG4gICAgdG9fbmV4dF9zdGVwKCkge1xuICAgICAgdGhpcy5lMSArPSAxO1xuICAgIH0sXG4gICAgcmVkaXJlY3RfdG9fcHJvZmlsZSgpIHtcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIik7XG4gICAgfSxcbiAgICBjbG9zZURpYWxvZygpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZURpYWxvZ1wiKTtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge30sXG59O1xuPC9zY3JpcHQ+XG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBdkNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/views/creation/NewRoom.vue?vue&type=script&lang=js&\n");

/***/ })

})