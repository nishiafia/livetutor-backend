webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/views/creation/NewRoom.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/views/creation/NewRoom.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewMeeting_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMeeting.vue */ \"./src/components/views/creation/NewMeeting.vue\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n // function initialState() {\n//   return {\n//     name: \"\",\n//     section: \"\",\n//     session: \"\",\n//   };\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"NewClass\",\n  components: {\n    NewMeeting: _NewMeeting_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: [\"from_complete\"],\n  data: function data() {\n    return {\n      // id: Math.floor(Math.random() * 1000),\n      e1: 1,\n      title: \"\",\n      categories: [],\n      selected_categories: []\n    };\n  },\n  emits: [\"closeDialog\"],\n  // props: [\"selectedDate\"],\n  created: function created() {\n    var _this = this;\n\n    _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"/categories\").then(function (res) {\n      return _this.categories = res.data;\n    });\n  },\n  methods: {\n    save: function save() {\n      this.$store.dispatch(\"classes/add\", {\n        name: this.title,\n        selected_categories: this.selected_categories\n      });\n      this.e1 = 2;\n      Object.assign(this.$data, initialState());\n      this.$emit(\"closeDialog\");\n    },\n    to_next_step: function to_next_step() {\n      this.e1 += 1;\n    },\n    redirect_to_profile: function redirect_to_profile() {\n      this.$router.push(\"/profile\");\n    },\n    closeDialog: function closeDialog() {\n      this.$emit(\"closeDialog\");\n    }\n  },\n  computed: {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvdmlld3MvY3JlYXRpb24vTmV3Um9vbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL05ld1Jvb20udnVlPzA1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jYXJkPlxuICAgIDx2LWNhcmQtdGl0bGU+Q3JlYXRlIGEgUm9vbTwvdi1jYXJkLXRpdGxlPlxuXG4gICAgPCEtLSA8di1jYXJkPiAtLT5cbiAgICA8di1jYXJkLXRleHQ+XG4gICAgICA8di1yb3c+XG4gICAgICAgIDx2LWNvbD5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkIHYtbW9kZWw9XCJ0aXRsZVwiIGxhYmVsPVwiVGl0bGVcIj48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICA8di1jb21ib2JveFxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkX2NhdGVnb3JpZXNcIlxuICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXG4gICAgICAgICAgICA6aXRlbXM9XCJjYXRlZ29yaWVzXCJcbiAgICAgICAgICAgIGl0ZW0tdGV4dD1cIm5hbWVcIlxuICAgICAgICAgICAgaXRlbS12YWx1ZT1cIm5hbWVcIlxuICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICA6cmV0dXJuLW9iamVjdD1cImZhbHNlXCJcbiAgICAgICAgICA+PC92LWNvbWJvYm94PlxuICAgICAgICA8L3YtY29sPlxuICAgICAgPC92LXJvdz5cbiAgICA8L3YtY2FyZC10ZXh0PlxuICAgIDx2LWNhcmQtYWN0aW9ucz5cbiAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgPHYtYnRuXG4gICAgICAgIHYtaWY9XCJmcm9tX2NvbXBsZXRlXCJcbiAgICAgICAgY29sb3I9XCJibHVlIGRhcmtlbi0xXCJcbiAgICAgICAgdGV4dFxuICAgICAgICBAY2xpY2s9XCJyZWRpcmVjdF90b19wcm9maWxlXCJcbiAgICAgID5cbiAgICAgICAgU2tpcFxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biB2LWVsc2UgY29sb3I9XCJibHVlIGRhcmtlbi0xXCIgdGV4dCBAY2xpY2s9XCJjbG9zZURpYWxvZ1wiPlxuICAgICAgICBDbG9zZVxuICAgICAgPC92LWJ0bj5cbiAgICAgIDx2LWJ0biBjb2xvcj1cImJsdWUgZGFya2VuLTFcIiBAY2xpY2s9XCJzYXZlXCIgdGV4dD4gQ29udGludWUgPC92LWJ0bj5cbiAgICA8L3YtY2FyZC1hY3Rpb25zPlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IE5ld01lZXRpbmcgZnJvbSBcIi4vTmV3TWVldGluZy52dWVcIjtcbmltcG9ydCBhcGkgZnJvbSBcIkAvc2VydmljZXMvYXBpXCI7XG4vLyBmdW5jdGlvbiBpbml0aWFsU3RhdGUoKSB7XG4vLyAgIHJldHVybiB7XG4vLyAgICAgbmFtZTogXCJcIixcbi8vICAgICBzZWN0aW9uOiBcIlwiLFxuLy8gICAgIHNlc3Npb246IFwiXCIsXG4vLyAgIH07XG4vLyB9XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTmV3Q2xhc3NcIixcbiAgY29tcG9uZW50czogeyBOZXdNZWV0aW5nIH0sXG4gIHByb3BzOiBbXCJmcm9tX2NvbXBsZXRlXCJdLFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSxcbiAgICAgIGUxOiAxLFxuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgIHNlbGVjdGVkX2NhdGVnb3JpZXM6IFtdLFxuICAgIH07XG4gIH0sXG4gIGVtaXRzOiBbXCJjbG9zZURpYWxvZ1wiXSxcbiAgLy8gcHJvcHM6IFtcInNlbGVjdGVkRGF0ZVwiXSxcbiAgY3JlYXRlZCgpIHtcbiAgICBhcGkuZ2V0KFwiL2NhdGVnb3JpZXNcIikudGhlbigocmVzKSA9PiAodGhpcy5jYXRlZ29yaWVzID0gcmVzLmRhdGEpKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHNhdmUoKSB7XG4gICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImNsYXNzZXMvYWRkXCIsIHtcbiAgICAgICAgbmFtZTogdGhpcy50aXRsZSxcbiAgICAgICAgc2VsZWN0ZWRfY2F0ZWdvcmllczogdGhpcy5zZWxlY3RlZF9jYXRlZ29yaWVzLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmUxID0gMjtcblxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRkYXRhLCBpbml0aWFsU3RhdGUoKSk7XG4gICAgICB0aGlzLiRlbWl0KFwiY2xvc2VEaWFsb2dcIik7XG4gICAgfSxcbiAgICB0b19uZXh0X3N0ZXAoKSB7XG4gICAgICB0aGlzLmUxICs9IDE7XG4gICAgfSxcbiAgICByZWRpcmVjdF90b19wcm9maWxlKCkge1xuICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvcHJvZmlsZVwiKTtcbiAgICB9LFxuICAgIGNsb3NlRGlhbG9nKCkge1xuICAgICAgdGhpcy4kZW1pdChcImNsb3NlRGlhbG9nXCIpO1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7fSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQXZDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/views/creation/NewRoom.vue?vue&type=script&lang=js&\n");

/***/ })

})