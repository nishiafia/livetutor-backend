webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/room/EnrolledUsers.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/room/EnrolledUsers.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\n/* harmony import */ var _views_general_InviteToRoom_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/general/InviteToRoom.vue */ \"./src/components/views/general/InviteToRoom.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    InviteToRoom: _views_general_InviteToRoom_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  props: [\"class_id\", \"class_owner\"],\n  data: function data() {\n    return {\n      users: [],\n      dialogInviteToRoom: false,\n      usersHeaders: [{\n        text: \"Name\",\n        value: \"user.name\"\n      }, {\n        text: \"Email\",\n        value: \"email\"\n      }, {\n        text: \"Role\",\n        value: \"role\"\n      }, {\n        text: \"Actions\",\n        value: \"actions\"\n      }]\n    };\n  },\n  created: function created() {\n    var _this = this;\n\n    _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"rooms/\".concat(this.class_id, \"/users/\")).then(function (res) {\n      return _this.users = res.data;\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcm9vbS9FbnJvbGxlZFVzZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vRW5yb2xsZWRVc2Vycy52dWU/ZTQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNhcmQ+XG4gICAgPHYtYXBwLWJhciBjb2xvcj1cIiM0MDY4ODJcIiBkYXJrIHNjcm9sbC10YXJnZXQ9XCIjc2Nyb2xsaW5nLXRlY2huaXF1ZXMtNlwiPlxuICAgICAgPHYtdG9vbGJhci10aXRsZT5Sb29tIEF0dGVuZGFudHM8L3YtdG9vbGJhci10aXRsZT5cbiAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dJbnZpdGVUb1Jvb21cIiB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjgwMFwiPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICA8di1idG4gdi1iaW5kPVwiYXR0cnNcIiB2LW9uPVwib25cIiBpY29uPjx2LWljb24+bWRpLXBsdXM8L3YtaWNvbj48L3YtYnRuPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8aW52aXRlLXRvLXJvb20gOmNsYXNzX2lkPVwiY2xhc3NfaWRcIj48L2ludml0ZS10by1yb29tPlxuICAgICAgPC92LWRpYWxvZz5cbiAgICA8L3YtYXBwLWJhcj5cbiAgICA8di1saXN0PlxuICAgICAgPHYtZGF0YS10YWJsZSA6aGVhZGVycz1cInVzZXJzSGVhZGVyc1wiIDppdGVtcz1cInVzZXJzXCI+IDwvdi1kYXRhLXRhYmxlPlxuXG4gICAgICA8di1idG4gaWNvbj48di1pY29uPm1kaS1kZWxldGU8L3YtaWNvbj48L3YtYnRuPlxuICAgIDwvdi1saXN0PlxuICA8L3YtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXBpIGZyb20gXCJAL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IEludml0ZVRvUm9vbSBmcm9tIFwiLi4vdmlld3MvZ2VuZXJhbC9JbnZpdGVUb1Jvb20udnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgSW52aXRlVG9Sb29tIH0sXG4gIHByb3BzOiBbXCJjbGFzc19pZFwiLCBcImNsYXNzX293bmVyXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyczogW10sXG4gICAgICBkaWFsb2dJbnZpdGVUb1Jvb206IGZhbHNlLFxuICAgICAgdXNlcnNIZWFkZXJzOiBbXG4gICAgICAgIHsgdGV4dDogXCJOYW1lXCIsIHZhbHVlOiBcInVzZXIubmFtZVwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJFbWFpbFwiLCB2YWx1ZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJSb2xlXCIsIHZhbHVlOiBcInJvbGVcIiB9LFxuICAgICAgICB7IHRleHQ6IFwiQWN0aW9uc1wiLCB2YWx1ZTogXCJhY3Rpb25zXCIgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBhcGlcbiAgICAgIC5nZXQoYHJvb21zLyR7dGhpcy5jbGFzc19pZH0vdXNlcnMvYClcbiAgICAgIC50aGVuKChyZXMpID0+ICh0aGlzLnVzZXJzID0gcmVzLmRhdGEpKTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBbkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/room/EnrolledUsers.vue?vue&type=script&lang=js&\n");

/***/ })

})