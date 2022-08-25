webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_register_Individual_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/register/Individual.vue */ \"./src/components/register/Individual.vue\");\n/* harmony import */ var _components_register_Institution_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/register/Institution.vue */ \"./src/components/register/Institution.vue\");\n/* harmony import */ var _components_global_PhoneField_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/PhoneField.vue */ \"./src/components/global/PhoneField.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Individual: _components_register_Individual_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Institution: _components_register_Institution_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    PhoneField: _components_global_PhoneField_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  name: \"Register\",\n  data: function data() {\n    return {\n      snackbar: false,\n      valid_form1: true,\n      form1: \"\",\n      form2: \"\",\n      name: \"\",\n      mobile: \"\",\n      address: undefined,\n      email: undefined,\n      password: Math.random().toString().slice(2, 6),\n      otp: \"\",\n      pass_generated: false,\n      server_otp: \"\",\n      otp_verified: false,\n      reg_complete: false,\n      profile_completed: false\n    };\n  },\n  methods: {\n    check_mobile: function check_mobile() {\n      if (this.$refs.phoneField.validate() && this.$refs.form1.validate()) {\n        this.otp_verified = true;\n        this.$refs.form2.resetValidation();\n      }\n    },\n    register: function register() {\n      var _this = this;\n\n      if (this.$refs.form2.validate()) {\n        var data = {\n          name: this.name,\n          phone: this.mobile,\n          address: this.address,\n          password: this.password,\n          email: this.email\n        };\n        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post( false ? undefined : \"http://localhost:8000/api/users/\", data, {\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        }).then(function () {\n          return _this.$store.dispatch(\"user/login\", {\n            phone: _this.mobile,\n            password: _this.password\n          });\n        }).then(function () {\n          return _this.$router.push(\"/profile\");\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVnaXN0ZXIudnVlPzAxMDMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZmx1aWQgZmlsbC1oZWlnaHQ+XG4gICAgPHYtcm93IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIG1kPVwiNFwiPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwibXgtNCBwYS00XCI+XG4gICAgICAgICAgPHYtZm9ybVxuICAgICAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PVwiY2hlY2tfbW9iaWxlKClcIlxuICAgICAgICAgICAgcmVmPVwiZm9ybTFcIlxuICAgICAgICAgICAgdi1zaG93PVwiIW90cF92ZXJpZmllZFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwidmFsaWRfZm9ybTFcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxQaG9uZUZpZWxkIHJlZj1cInBob25lRmllbGRcIiB2LW1vZGVsPVwibW9iaWxlXCI+PC9QaG9uZUZpZWxkPlxuICAgICAgICAgICAgPHYtYWxlcnQgdHlwZT1cImluZm9cIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgUGxlYXNlIHNhdmUgdGhlIGJlbG93IHBpbiBjb2RlIGZvciB5b3VyIGxvZ2luXG4gICAgICAgICAgICA8L3YtYWxlcnQ+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgIDpydWxlcz1cIiRyZXF1aXJlZFJ1bGVzXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDx2LWJ0biB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzdWNjZXNzXCIgYmxvY2s+Q29udGludWU8L3YtYnRuPlxuICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgIDx2LWZvcm0gcmVmPVwiZm9ybTJcIiB2LXNob3c9XCJvdHBfdmVyaWZpZWRcIj5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIDpydWxlcz1cIiRyZXF1aXJlZFJ1bGVzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvdi10ZXh0LWZpZWxkPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgIDpydWxlcz1cIiRyZXF1aXJlZFJ1bGVzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiJHJlcXVpcmVkUnVsZXNcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDx2LWJ0biBAY2xpY2s9XCJyZWdpc3RlcigpXCIgY29sb3I9XCJzdWNjZXNzXCIgYmxvY2tcbiAgICAgICAgICAgICAgPkNyZWF0ZSBBY2NvdW50PC92LWJ0blxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgIDx2LXNuYWNrYmFyXG4gICAgICAgICAgICA6dGltZW91dD1cIi0xXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzbmFja2JhclwiXG4gICAgICAgICAgICBjb2xvcj1cInJlZCBsaWdodGVuLTJcIlxuICAgICAgICAgICAgYWJzb2x1dGVcbiAgICAgICAgICAgIHJpZ2h0XG4gICAgICAgICAgICByb3VuZGVkPVwicGlsbFwiXG4gICAgICAgICAgICB0b3BcbiAgICAgICAgICA+XG4gICAgICAgICAgICByb3VuZGVkPVwicGlsbFwiXG4gICAgICAgICAgPC92LXNuYWNrYmFyPlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgIDwvdi1jb2w+XG4gICAgPC92LXJvdz5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgSW5kaXZpZHVhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZWdpc3Rlci9JbmRpdmlkdWFsLnZ1ZVwiO1xuaW1wb3J0IEluc3RpdHV0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3JlZ2lzdGVyL0luc3RpdHV0aW9uLnZ1ZVwiO1xuaW1wb3J0IFBob25lRmllbGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvZ2xvYmFsL1Bob25lRmllbGQudnVlXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHsgSW5kaXZpZHVhbCwgSW5zdGl0dXRpb24sIFBob25lRmllbGQgfSxcbiAgbmFtZTogXCJSZWdpc3RlclwiLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzbmFja2JhcjogZmFsc2UsXG4gICAgICB2YWxpZF9mb3JtMTogdHJ1ZSxcbiAgICAgIGZvcm0xOiBcIlwiLFxuICAgICAgZm9ybTI6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgbW9iaWxlOiBcIlwiLFxuICAgICAgYWRkcmVzczogdW5kZWZpbmVkLFxuICAgICAgZW1haWw6IHVuZGVmaW5lZCxcbiAgICAgIHBhc3N3b3JkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwgNiksXG4gICAgICBvdHA6IFwiXCIsXG4gICAgICBwYXNzX2dlbmVyYXRlZDogZmFsc2UsXG4gICAgICBzZXJ2ZXJfb3RwOiBcIlwiLFxuICAgICAgb3RwX3ZlcmlmaWVkOiBmYWxzZSxcbiAgICAgIHJlZ19jb21wbGV0ZTogZmFsc2UsXG4gICAgICBwcm9maWxlX2NvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrX21vYmlsZSgpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLnBob25lRmllbGQudmFsaWRhdGUoKSAmJiB0aGlzLiRyZWZzLmZvcm0xLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgdGhpcy5vdHBfdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLiRyZWZzLmZvcm0yLnJlc2V0VmFsaWRhdGlvbigpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICBpZiAodGhpcy4kcmVmcy5mb3JtMi52YWxpZGF0ZSgpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIHBob25lOiB0aGlzLm1vYmlsZSxcbiAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBheGlvc1xuICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgID8gXCJodHRwczovL3d3dy5hcHBzLmxpdmV0dXRvci5jb20uYmQvYXBpL3VzZXJzL1wiXG4gICAgICAgICAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzL1wiLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ1c2VyL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgcGhvbmU6IHRoaXMubW9iaWxlLFxuICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuJHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIikpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFPQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF2Q0E7QUF0QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Register.vue?vue&type=script&lang=js&\n");

/***/ })

})