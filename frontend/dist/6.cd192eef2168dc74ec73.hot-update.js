webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Assignment.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Assignment.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\n/* harmony import */ var _components_global_Thumbnail_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/Thumbnail.vue */ \"./src/components/global/Thumbnail.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Thumbnail: _components_global_Thumbnail_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  name: \"Assignments\",\n  data: function data() {\n    return {\n      menu: false,\n      menu2: false,\n      newFiles: [],\n      transparent: \"rgba(255, 255, 255, 0)\",\n      headers: [{\n        text: \"Submitted By\",\n        value: \"room_user.name\"\n      }, {\n        text: \"Submitted At\",\n        value: \"created_at\"\n      }, {\n        text: \"Submission Status\",\n        value: \"submit_status\"\n      }, {\n        text: \"Mark\",\n        value: \"mark\"\n      }, {\n        text: \"File\",\n        value: \"files\"\n      }],\n      submissions: []\n    };\n  },\n  created: function created() {\n    this.loadSubmissions();\n  },\n  methods: {\n    loadSubmissions: function loadSubmissions() {\n      var _this = this;\n\n      _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/assignments/\".concat(this.$route.params.id, \"/submissions/\")).then(function (res) {\n        _this.submissions = res.data;\n      });\n    },\n    updateMark: function updateMark(event, _ref) {\n      var id = _ref.id;\n      this.$api.put(\"assignments/\".concat(this.$route.params.id, \"/submissions/update-mark/\"), {\n        mark: event,\n        assignment_submission_id: id\n      }).then(function (r) {\n        return console.log(r);\n      });\n    },\n    deleteFile: function deleteFile(_ref2) {\n      var id = _ref2.id,\n          assignment_id = _ref2.assignment_id;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"assignment_files/\".concat(id));\n    },\n    deleteAssignment: function deleteAssignment() {\n      return this.$store.dispatch(\"assignments/delete\", this.assignment.id);\n    },\n    addFiles: function addFiles() {\n      var formData = new FormData();\n      formData.append(\"id\", this.assignment.id);\n\n      if (this.newFiles.length > 0) {\n        for (var i = 0; i < this.newFiles.length; i++) {\n          formData.append(\"attachments[]\", this.newFiles[i]);\n        }\n      }\n\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"assignment_files/\", formData, {\n        headers: {\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      }).then(function (res) {\n        return console.log(res);\n      });\n    },\n    updateAssignment: function updateAssignment(_ref3) {\n      var id = _ref3.id,\n          class_id = _ref3.class_id,\n          name = _ref3.name,\n          description = _ref3.description,\n          due_date = _ref3.due_date,\n          due_time = _ref3.due_time,\n          mark = _ref3.mark;\n      return this.$store.dispatch(\"assignments/update\", {\n        id: id,\n        class_id: class_id,\n        name: name,\n        description: description,\n        end_date_time: end_date_time,\n        mark: mark\n      });\n    }\n  },\n  computed: {\n    assignment: function assignment() {\n      var _this2 = this;\n\n      return this.$store.state.assignments.assignments.find(function (assignment) {\n        return assignment.id == _this2.$route.params.id;\n      });\n    }\n  } // computed: {\n  //   submissions() {\n  //     // return this.$store.state.assignments.submissions;\n  //     return this.$store.getters[\"assignments/get_submission_by_assignment\"](\n  //       this.$route.params.id\n  //     );\n  //   },\n  // },\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL0Fzc2lnbm1lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Bc3NpZ25tZW50LnZ1ZT81NWQyIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtY29udGFpbmVyIGNsYXNzPVwicGEtMlwiPlxuICAgIDx2LXJvd1xuICAgICAgPjx2LWNvbCBjb2xzPVwiMTJcIiBtZD1cIjZcIj5cbiAgICAgICAgPHYtY2FyZCBjbGFzcz1cInBhLTRcIj5cbiAgICAgICAgICA8di1jYXJkLWFjdGlvbnM+XG4gICAgICAgICAgICA8di1idG4gQGNsaWNrPVwiZGVsZXRlQXNzaWdubWVudFwiIGNvbG9yPVwicmVkIGxpZ2h0ZW4tMlwiIGRhcmsgb3V0bGluZWRcbiAgICAgICAgICAgICAgPkRlbGV0ZTwvdi1idG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDx2LXNwYWNlcj48L3Ytc3BhY2VyPlxuICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgIEBjbGljaz1cInVwZGF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudClcIlxuICAgICAgICAgICAgICBjb2xvcj1cImdyZWVuIGxpZ2h0ZW4tMlwiXG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgPlNhdmU8L3YtYnRuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC92LWNhcmQtYWN0aW9ucz5cbiAgICAgICAgICA8di1yb3c+XG4gICAgICAgICAgICA8di1jb2wgY29scz1cIjhcIj5cbiAgICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhc3NpZ25tZW50Lm5hbWVcIlxuICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgICAgPHYtY29sIGNvbHM9XCI0XCI+XG4gICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk1hcmtcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhc3NpZ25tZW50Lm1hcmtcIlxuICAgICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgIDwvdi1yb3c+XG5cbiAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJhc3NpZ25tZW50LmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgPHYtcm93PlxuICAgICAgICAgICAgPHYtY29sPlxuICAgICAgICAgICAgICA8di1tZW51XG4gICAgICAgICAgICAgICAgcmVmPVwibWVudVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImFzc2lnbm1lbnQuZW5kX2RhdGVfdGltZVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj1cInNjYWxlLXRyYW5zaXRpb25cIlxuICAgICAgICAgICAgICAgIG9mZnNldC15XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoPVwiYXV0b1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFzc2lnbm1lbnQuZW5kX2RhdGVfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXNzaWdubWVudCBEdWUgRGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1kaS1jYWxlbmRhclwiXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx2LWRhdGUtcGlja2VyXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXNzaWdubWVudC5lbmRfZGF0ZV90aW1lXCJcbiAgICAgICAgICAgICAgICAgIG5vLXRpdGxlXG4gICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICA8di1idG4gdGV4dCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMubWVudS5zYXZlKGFzc2lnbm1lbnQuZW5kX2RhdGVfdGltZSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBPS1xuICAgICAgICAgICAgICAgICAgPC92LWJ0bj5cbiAgICAgICAgICAgICAgICA8L3YtZGF0ZS1waWNrZXI+XG4gICAgICAgICAgICAgIDwvdi1tZW51PlxuICAgICAgICAgICAgPC92LWNvbD5cblxuICAgICAgICAgICAgPHYtY29sPlxuICAgICAgICAgICAgICA8di1tZW51XG4gICAgICAgICAgICAgICAgcmVmPVwibWVudTJcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtZW51MlwiXG4gICAgICAgICAgICAgICAgOm51ZGdlLXJpZ2h0PVwiNDBcIlxuICAgICAgICAgICAgICAgIDpyZXR1cm4tdmFsdWUuc3luYz1cImFzc2lnbm1lbnQuZHVlX3RpbWVcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249XCJzY2FsZS10cmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICBvZmZzZXQteVxuICAgICAgICAgICAgICAgIDpjbG9zZS1vbi1jb250ZW50LWNsaWNrPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIG1heC13aWR0aD1cIjI5MHB4XCJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg9XCIyOTBweFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmFjdGl2YXRvcj1cInsgb24sIGF0dHJzIH1cIj5cbiAgICAgICAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFzc2lnbm1lbnQuZW5kX2RhdGVfdGltZVwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQXNzaWdubWVudCBEdWUgVGltZVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXBlbmQtaWNvbj1cIm1kaS1jbG9jay10aW1lLWZvdXItb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgIHYtYmluZD1cImF0dHJzXCJcbiAgICAgICAgICAgICAgICAgICAgdi1vbj1cIm9uXCJcbiAgICAgICAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDx2LXRpbWUtcGlja2VyXG4gICAgICAgICAgICAgICAgICB2LWlmPVwibWVudTJcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImFzc2lnbm1lbnQuZW5kX2RhdGVfdGltZVwiXG4gICAgICAgICAgICAgICAgICBmdWxsLXdpZHRoXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHYtc3BhY2VyPjwvdi1zcGFjZXI+XG4gICAgICAgICAgICAgICAgICA8di1idG4gdGV4dCBjb2xvcj1cInByaW1hcnlcIiBAY2xpY2s9XCJtZW51ID0gZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPlxuICAgICAgICAgICAgICAgICAgPHYtYnRuXG4gICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMubWVudTIuc2F2ZShhc3NpZ25tZW50LmR1ZV90aW1lKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgICA8L3YtYnRuPjwvdi10aW1lLXBpY2tlclxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC92LW1lbnU+XG4gICAgICAgICAgICA8L3YtY29sPlxuICAgICAgICAgIDwvdi1yb3c+XG4gICAgICAgIDwvdi1jYXJkPiA8L3YtY29sXG4gICAgICA+PHYtY29sIGNvbHM9XCIxMlwiIG1kPVwiNlwiXG4gICAgICAgID48di1jYXJkIGNsYXNzPVwicGEtNFwiPlxuICAgICAgICAgIDx2LWNhcmQtdGl0bGU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlYWRsaW5lXCI+XG4gICAgICAgICAgICAgIDx2LWljb24+bWRpLWZpbGUtaW1hZ2Utb3V0bGluZTwvdi1pY29uPlxuICAgICAgICAgICAgICA8c3Bhbj5GaWxlczwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj48L3YtY2FyZC10aXRsZVxuICAgICAgICAgID5cbiAgICAgICAgICA8di1yb3cgY2xhc3M9XCJmaWxsLWhlaWdodFwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgPHYtY29sXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGkpIGluIGFzc2lnbm1lbnQuZmlsZXNcIlxuICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgIGNvbHM9XCIxMlwiXG4gICAgICAgICAgICAgIG1kPVwiM1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2LWhvdmVyIHYtc2xvdD1cInsgaG92ZXIgfVwiPlxuICAgICAgICAgICAgICAgIDx2LWNhcmRcbiAgICAgICAgICAgICAgICAgIDplbGV2YXRpb249XCJob3ZlciA/IDEyIDogMlwiXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdvbi1ob3Zlcic6IGhvdmVyIH1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0aHVtYm5haWwgOmZpbGU9XCJpdGVtLmZpbGVcIj48L3RodW1ibmFpbD5cbiAgICAgICAgICAgICAgICA8L3YtY2FyZD5cbiAgICAgICAgICAgICAgPC92LWhvdmVyPlxuICAgICAgICAgICAgPC92LWNvbD5cbiAgICAgICAgICA8L3Ytcm93PlxuICAgICAgICAgIDx2LXJvdz5cbiAgICAgICAgICAgIDx2LWZpbGUtaW5wdXRcbiAgICAgICAgICAgICAgbXVsdGlwbGVcbiAgICAgICAgICAgICAgY2hpcHNcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm5ld0ZpbGVzXCJcbiAgICAgICAgICAgICAgYXBwZW5kLWljb249XCJtZGktY2hlY2tcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkFkZCBOZXcgRmlsZXNcIlxuICAgICAgICAgICAgICBAY2xpY2s6YXBwZW5kPVwiYWRkRmlsZXNcIlxuICAgICAgICAgICAgPjwvdi1maWxlLWlucHV0PlxuICAgICAgICAgIDwvdi1yb3c+IDwvdi1jYXJkPjwvdi1jb2xcbiAgICA+PC92LXJvdz5cblxuICAgIDx2LWNhcmQgY2xhc3M9XCJtdC00XCI+XG4gICAgICA8di1jYXJkLXRpdGxlPlN1Ym1pc3Npb25zPC92LWNhcmQtdGl0bGU+XG4gICAgICA8di1kYXRhLXRhYmxlXG4gICAgICAgIGRlbnNlXG4gICAgICAgIDpoZWFkZXJzPVwiaGVhZGVyc1wiXG4gICAgICAgIDppdGVtcz1cInN1Ym1pc3Npb25zXCJcbiAgICAgICAgaXRlbS1rZXk9XCJpZFwiXG4gICAgICAgIGNsYXNzPVwiZWxldmF0aW9uLTFcIlxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0ubWFyaz1cInsgaXRlbSB9XCI+XG4gICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgdi1tb2RlbD1cIml0ZW0ubWFya1wiXG4gICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGVNYXJrKCRldmVudCwgaXRlbSlcIlxuICAgICAgICAgICAgOm1heD1cImFzc2lnbm1lbnQubWFya1wiXG4gICAgICAgICAgICBzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgIDpzdWZmaXg9XCJgLyAke2Fzc2lnbm1lbnQubWFya31gXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC92LXRleHQtZmllbGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3YtZGF0YS10YWJsZT5cbiAgICA8L3YtY2FyZD5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXBpIGZyb20gXCJAL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWwvVGh1bWJuYWlsLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IFRodW1ibmFpbCB9LFxuICBuYW1lOiBcIkFzc2lnbm1lbnRzXCIsXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICBtZW51OiBmYWxzZSxcbiAgICBtZW51MjogZmFsc2UsXG4gICAgbmV3RmlsZXM6IFtdLFxuICAgIHRyYW5zcGFyZW50OiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcbiAgICBoZWFkZXJzOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiU3VibWl0dGVkIEJ5XCIsXG4gICAgICAgIHZhbHVlOiBcInJvb21fdXNlci5uYW1lXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlN1Ym1pdHRlZCBBdFwiLFxuICAgICAgICB2YWx1ZTogXCJjcmVhdGVkX2F0XCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIlN1Ym1pc3Npb24gU3RhdHVzXCIsXG4gICAgICAgIHZhbHVlOiBcInN1Ym1pdF9zdGF0dXNcIixcbiAgICAgIH0sXG4gICAgICB7IHRleHQ6IFwiTWFya1wiLCB2YWx1ZTogXCJtYXJrXCIgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJGaWxlXCIsXG4gICAgICAgIHZhbHVlOiBcImZpbGVzXCIsXG4gICAgICB9LFxuICAgIF0sXG4gICAgc3VibWlzc2lvbnM6IFtdLFxuICB9KSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxvYWRTdWJtaXNzaW9ucygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbG9hZFN1Ym1pc3Npb25zKCkge1xuICAgICAgYXBpXG4gICAgICAgIC5nZXQoYC9hc3NpZ25tZW50cy8ke3RoaXMuJHJvdXRlLnBhcmFtcy5pZH0vc3VibWlzc2lvbnMvYClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuc3VibWlzc2lvbnMgPSByZXMuZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGVNYXJrKGV2ZW50LCB7IGlkIH0pIHtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAucHV0KGBhc3NpZ25tZW50cy8ke3RoaXMuJHJvdXRlLnBhcmFtcy5pZH0vc3VibWlzc2lvbnMvdXBkYXRlLW1hcmsvYCwge1xuICAgICAgICAgIG1hcms6IGV2ZW50LFxuICAgICAgICAgIGFzc2lnbm1lbnRfc3VibWlzc2lvbl9pZDogaWQsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyKSA9PiBjb25zb2xlLmxvZyhyKSk7XG4gICAgfSxcbiAgICBkZWxldGVGaWxlKHsgaWQsIGFzc2lnbm1lbnRfaWQgfSkge1xuICAgICAgcmV0dXJuIGFwaS5kZWxldGUoYGFzc2lnbm1lbnRfZmlsZXMvJHtpZH1gKTtcbiAgICB9LFxuICAgIGRlbGV0ZUFzc2lnbm1lbnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJhc3NpZ25tZW50cy9kZWxldGVcIiwgdGhpcy5hc3NpZ25tZW50LmlkKTtcbiAgICB9LFxuICAgIGFkZEZpbGVzKCkge1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpZFwiLCB0aGlzLmFzc2lnbm1lbnQuaWQpO1xuICAgICAgaWYgKHRoaXMubmV3RmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmV3RmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdHRhY2htZW50c1tdXCIsIHRoaXMubmV3RmlsZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXBpXG4gICAgICAgIC5wb3N0KFwiYXNzaWdubWVudF9maWxlcy9cIiwgZm9ybURhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiAgICB9LFxuICAgIHVwZGF0ZUFzc2lnbm1lbnQoe1xuICAgICAgaWQsXG4gICAgICBjbGFzc19pZCxcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGR1ZV9kYXRlLFxuICAgICAgZHVlX3RpbWUsXG4gICAgICBtYXJrLFxuICAgIH0pIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5kaXNwYXRjaChcImFzc2lnbm1lbnRzL3VwZGF0ZVwiLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBjbGFzc19pZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGVuZF9kYXRlX3RpbWUsXG4gICAgICAgIG1hcmssXG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS5hc3NpZ25tZW50cy5hc3NpZ25tZW50cy5maW5kKFxuICAgICAgICAoYXNzaWdubWVudCkgPT4gYXNzaWdubWVudC5pZCA9PSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcbiAgICAgICk7XG4gICAgfSxcbiAgfSxcblxuICAvLyBjb21wdXRlZDoge1xuICAvLyAgIHN1Ym1pc3Npb25zKCkge1xuICAvLyAgICAgLy8gcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmFzc2lnbm1lbnRzLnN1Ym1pc3Npb25zO1xuICAvLyAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbXCJhc3NpZ25tZW50cy9nZXRfc3VibWlzc2lvbl9ieV9hc3NpZ25tZW50XCJdKFxuICAvLyAgICAgICB0aGlzLiRyb3V0ZS5wYXJhbXMuaWRcbiAgLy8gICAgICk7XG4gIC8vICAgfSxcbiAgLy8gfSxcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4udi1jYXJkIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2UtaW4tb3V0O1xufVxuLnYtY2FyZDpub3QoLm9uLWhvdmVyKSB7XG4gIG9wYWNpdHk6IDE7XG59XG4uc2hvdy1idG5zIHtcbiAgY29sb3I6IHJnYigxOTcsIDQyLCA0MikgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5TEE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBeEJBO0FBQUE7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBdkRBO0FBMERBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Assignment.vue?vue&type=script&lang=js&\n");

/***/ })

})