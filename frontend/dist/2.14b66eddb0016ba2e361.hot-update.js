webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/room/ClassDescription.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/room/ClassDescription.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ClassMeetings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClassMeetings.vue */ \"./src/components/room/ClassMeetings.vue\");\n/* harmony import */ var _components_views_edit_EditClassDescription_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/views/edit/EditClassDescription.vue */ \"./src/components/views/edit/EditClassDescription.vue\");\n/* harmony import */ var _EnrolledUsers_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnrolledUsers.vue */ \"./src/components/room/EnrolledUsers.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    EditMeeting: _ClassMeetings_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    EditClassDescription: _components_views_edit_EditClassDescription_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    EnrolledStudents: _EnrolledUsers_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  props: [\"class_id\"],\n  data: function data() {\n    return {\n      class_info: {},\n      dialogEditClassDescription: false,\n      dialog: false,\n      dialogInvite: false\n    };\n  },\n  created: function created() {\n    this.class_info = this.$store.getters[\"classes/get_current_class_info\"](this.class_id); // this.class_info = this.$store.getters[\n    //   \"assignments/assignments_for_current_class\"\n    // ](this.class_id);\n  },\n  methods: {\n    deleteRoom: function deleteRoom() {\n      this.$store.dispatch(\"classes/delete\", {\n        id: this.class_id\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvcm9vbS9DbGFzc0Rlc2NyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2xhc3NEZXNjcmlwdGlvbi52dWU/N2RkOSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNhcmQgaGVpZ2h0PVwiMzAwXCI+XG4gICAgPHYtdG9vbGJhciBjb2xvcj1cInNlY29uZGFyeVwiIGZsYXQgZGFyaz5cbiAgICAgIDx2LXRvb2xiYXItdGl0bGUgdi1odG1sPVwiY2xhc3NfaW5mby5uYW1lXCI+PC92LXRvb2xiYXItdGl0bGU+XG5cbiAgICAgIDx2LWNoaXBcbiAgICAgICAgdi1mb3I9XCIoY2F0ZWdvcnksIGluZGV4KSBpbiBjbGFzc19pbmZvLmNhdGVnb3JpZXNcIlxuICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICBjbGFzcz1cIm14LTFcIlxuICAgICAgICBjb2xvcj1cInRoaXJkXCJcbiAgICAgICAgdi1odG1sPVwiY2F0ZWdvcnkubmFtZVwiXG4gICAgICA+PC92LWNoaXA+XG4gICAgICA8di1zcGFjZXI+PC92LXNwYWNlcj5cbiAgICAgIDx2LW1lbnUgdi1pZj1cImNsYXNzX2luZm8uaXNfYXV0aG9yXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6YWN0aXZhdG9yPVwieyBvbiwgYXR0cnMgfVwiPlxuICAgICAgICAgIDx2LWJ0biBpY29uIHYtYmluZD1cImF0dHJzXCIgdi1vbj1cIm9uXCI+XG4gICAgICAgICAgICA8di1pY29uPm1kaS1jb2ctb3V0bGluZTwvdi1pY29uPlxuICAgICAgICAgIDwvdi1idG4+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx2LWxpc3Q+XG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dFZGl0Q2xhc3NEZXNjcmlwdGlvblwiIHdpZHRoPVwiODAwXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgPHYtbGlzdC1pdGVtIHRleHQgdi1iaW5kPVwiYXR0cnNcIiB2LW9uPVwib25cIiBsaW5rXG4gICAgICAgICAgICAgICAgPjx2LWljb24gY2xhc3M9XCJweC0yXCIgY29sb3I9XCJhY2NlbnRcIj5tZGktbm90ZS1lZGl0PC92LWljb25cbiAgICAgICAgICAgICAgICA+VXBkYXRlIFJvb20gSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDxlZGl0LWNsYXNzLWRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIDpjbGFzc19pbmZvPVwiY2xhc3NfaW5mb1wiXG4gICAgICAgICAgICA+PC9lZGl0LWNsYXNzLWRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dcIiB3aWR0aD1cIjgwMFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSB0ZXh0IHYtYmluZD1cImF0dHJzXCIgdi1vbj1cIm9uXCIgbGlua1xuICAgICAgICAgICAgICAgID48di1pY29uIGNsYXNzPVwicHgtMlwiIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgICAgICAgICAgICAgID5tZGktY2FsZW5kYXItbXVsdGlwbGU8L3YtaWNvblxuICAgICAgICAgICAgICAgID5VcGRhdGUgUm9vbSBNZWV0aW5nc1xuICAgICAgICAgICAgICA8L3YtbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxlZGl0LW1lZXRpbmcgOmNsYXNzX2lkPVwiY2xhc3NfaW5mby5pZFwiPjwvZWRpdC1tZWV0aW5nPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgPHYtZGlhbG9nIHYtbW9kZWw9XCJkaWFsb2dJbnZpdGVcIiB3aWR0aD1cIjgwMFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDphY3RpdmF0b3I9XCJ7IG9uLCBhdHRycyB9XCI+XG4gICAgICAgICAgICAgIDx2LWxpc3QtaXRlbSB0ZXh0IHYtYmluZD1cImF0dHJzXCIgdi1vbj1cIm9uXCIgbGlua1xuICAgICAgICAgICAgICAgID48di1pY29uIGNsYXNzPVwicHgtMlwiIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgICAgICAgICAgICAgID5tZGktYWNjb3VudC1tdWx0aXBsZTwvdi1pY29uXG4gICAgICAgICAgICAgICAgPk1hbmFnZSBSb29tIEF0dGVuZGFudHNcbiAgICAgICAgICAgICAgPC92LWxpc3QtaXRlbT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8ZW5yb2xsZWQtc3R1ZGVudHMgOmNsYXNzX2lkPVwiY2xhc3NfaWRcIj48L2Vucm9sbGVkLXN0dWRlbnRzPlxuICAgICAgICAgIDwvdi1kaWFsb2c+XG4gICAgICAgICAgPHYtbGlzdC1pdGVtXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICB2LWJpbmQ9XCJhdHRyc1wiXG4gICAgICAgICAgICB2LW9uPVwib25cIlxuICAgICAgICAgICAgbGlua1xuICAgICAgICAgICAgOnRvPVwieyBuYW1lOiAnZmVlcycsIHBhcmFtczogeyBpZDogY2xhc3NfaW5mby5pZCB9IH1cIlxuICAgICAgICAgICAgPjx2LWljb24gY2xhc3M9XCJweC0yXCIgY29sb3I9XCJhY2NlbnRcIj5tZGktY3JlZGl0LWNhcmQtb3V0bGluZTwvdi1pY29uXG4gICAgICAgICAgICA+TWFuYWdlIFJvb20gUGF5bWVudHM8di1pY29uIGNsYXNzPVwicHgtMlwiIGNvbG9yPVwiYWNjZW50XCJcbiAgICAgICAgICAgICAgPm1kaS1hcnJvdy10b3AtcmlnaHQ8L3YtaWNvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdi1saXN0LWl0ZW0+XG4gICAgICAgIDwvdi1saXN0PlxuICAgICAgPC92LW1lbnU+XG4gICAgPC92LXRvb2xiYXI+XG4gICAgPHYtcm93PlxuICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIG1kPVwiNlwiPlxuICAgICAgICA8di1jYXJkIGhlaWdodD1cIjEyMFwiPlxuICAgICAgICAgIDx2LWNhcmQtdGl0bGVcbiAgICAgICAgICAgID5Ub3RhbCBTdHVkZW50czoge3sgY2xhc3NfaW5mby51c2VyLmxlbmd0aCB9fTwvdi1jYXJkLXRpdGxlXG4gICAgICAgICAgPlxuICAgICAgICA8L3YtY2FyZD4gPC92LWNvbFxuICAgICAgPjx2LWNvbCBjb2xzPVwiMTJcIiBtZD1cIjZcIj5cbiAgICAgICAgPHYtY2FyZCBoZWlnaHQ9XCIxMjBcIj4gPC92LWNhcmQ+XG4gICAgICA8L3YtY29sPlxuICAgIDwvdi1yb3c+XG4gIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBFZGl0TWVldGluZyBmcm9tIFwiLi9DbGFzc01lZXRpbmdzLnZ1ZVwiO1xuaW1wb3J0IEVkaXRDbGFzc0Rlc2NyaXB0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvdmlld3MvZWRpdC9FZGl0Q2xhc3NEZXNjcmlwdGlvbi52dWVcIjtcbmltcG9ydCBFbnJvbGxlZFN0dWRlbnRzIGZyb20gXCIuL0Vucm9sbGVkVXNlcnMudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBFZGl0TWVldGluZywgRWRpdENsYXNzRGVzY3JpcHRpb24sIEVucm9sbGVkU3R1ZGVudHMgfSxcbiAgcHJvcHM6IFtcImNsYXNzX2lkXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc19pbmZvOiB7fSxcbiAgICAgIGRpYWxvZ0VkaXRDbGFzc0Rlc2NyaXB0aW9uOiBmYWxzZSxcbiAgICAgIGRpYWxvZzogZmFsc2UsXG4gICAgICBkaWFsb2dJbnZpdGU6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5jbGFzc19pbmZvID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1tcImNsYXNzZXMvZ2V0X2N1cnJlbnRfY2xhc3NfaW5mb1wiXShcbiAgICAgIHRoaXMuY2xhc3NfaWRcbiAgICApO1xuICAgIC8vIHRoaXMuY2xhc3NfaW5mbyA9IHRoaXMuJHN0b3JlLmdldHRlcnNbXG4gICAgLy8gICBcImFzc2lnbm1lbnRzL2Fzc2lnbm1lbnRzX2Zvcl9jdXJyZW50X2NsYXNzXCJcbiAgICAvLyBdKHRoaXMuY2xhc3NfaWQpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGVsZXRlUm9vbSgpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwiY2xhc3Nlcy9kZWxldGVcIiwgeyBpZDogdGhpcy5jbGFzc19pZCB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+PC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQW5CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/room/ClassDescription.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./src/components/room/EnrolledStudents.vue":
false

})