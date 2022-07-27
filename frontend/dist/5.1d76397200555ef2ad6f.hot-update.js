webpackHotUpdate(5,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_register_Individual_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/register/Individual.vue */ \"./src/components/register/Individual.vue\");\n/* harmony import */ var _components_register_Institution_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/register/Institution.vue */ \"./src/components/register/Institution.vue\");\n/* harmony import */ var _components_global_PhoneField_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/PhoneField.vue */ \"./src/components/global/PhoneField.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Individual: _components_register_Individual_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    Institution: _components_register_Institution_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    PhoneField: _components_global_PhoneField_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  name: \"Register\",\n  data: function data() {\n    return {\n      form: \"\",\n      form2: \"\",\n      name: \"\",\n      mobile: \"\",\n      address: \"\",\n      email: \"\",\n      password: Math.random().toString().slice(2, 6),\n      otp: \"\",\n      pass_generated: false,\n      server_otp: \"\",\n      otp_verified: false,\n      reg_complete: false,\n      profile_completed: false\n    };\n  },\n  methods: {\n    check_mobile: function check_mobile() {\n      if (this.$refs.form.validate()) {\n        this.otp_verified = true;\n      }\n    },\n    register: function register() {\n      var _this = this;\n\n      if (this.$refs.form2.validate()) {\n        var data = {\n          name: this.name,\n          phone: this.mobile,\n          address: this.address,\n          password: this.password,\n          email: this.email\n        };\n        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post( false ? undefined : \"http://localhost:8000/api/users/\", data, {\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        }).then(function () {\n          return _this.$store.dispatch(\"user/login\", {\n            phone: _this.mobile.replace(\"-\", \"\"),\n            password: _this.password\n          });\n        }).then(function () {\n          return _this.$router.push(\"/profile\");\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVnaXN0ZXIudnVlPzAxMDMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZmx1aWQgZmlsbC1oZWlnaHQ+XG4gICAgPHYtcm93IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIG1kPVwiNFwiPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwibXgtNCBwYS00XCI+XG4gICAgICAgICAgPHYtZm9ybSByZWY9XCJmb3JtXCIgdi1pZj1cIiFvdHBfdmVyaWZpZWRcIj5cbiAgICAgICAgICAgIDxQaG9uZUZpZWxkIHYtbW9kZWw9XCJtb2JpbGVcIiA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiPjwvUGhvbmVGaWVsZD5cbiAgICAgICAgICAgIDx2LWFsZXJ0IHR5cGU9XCJpbmZvXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIFBsZWFzZSBzYXZlIHRoZSBiZWxvdyBwaW4gY29kZSBmb3IgeW91ciBsb2dpblxuICAgICAgICAgICAgPC92LWFsZXJ0PlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8di1idG4gQGNsaWNrPVwiY2hlY2tfbW9iaWxlXCIgY29sb3I9XCJzdWNjZXNzXCIgYmxvY2s+Q29udGludWU8L3YtYnRuPlxuICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICAgIDx2LWZvcm0gcmVmPVwiZm9ybTJcIiB2LWlmPVwib3RwX3ZlcmlmaWVkXCI+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImFkZHJlc3NcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXG4gICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiXG4gICAgICAgICAgICA+PC92LXRleHQtZmllbGQ+XG4gICAgICAgICAgICA8di1idG4gQGNsaWNrPVwicmVnaXN0ZXJcIiBjb2xvcj1cInN1Y2Nlc3NcIiBibG9ja1xuICAgICAgICAgICAgICA+Q3JlYXRlIEFjY291bnQ8L3YtYnRuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgIDwvdi1jYXJkPlxuICAgICAgPC92LWNvbD5cbiAgICA8L3Ytcm93PlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBJbmRpdmlkdWFsIGZyb20gXCIuLi9jb21wb25lbnRzL3JlZ2lzdGVyL0luZGl2aWR1YWwudnVlXCI7XG5pbXBvcnQgSW5zdGl0dXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVnaXN0ZXIvSW5zdGl0dXRpb24udnVlXCI7XG5pbXBvcnQgUGhvbmVGaWVsZCBmcm9tIFwiLi4vY29tcG9uZW50cy9nbG9iYWwvUGhvbmVGaWVsZC52dWVcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czogeyBJbmRpdmlkdWFsLCBJbnN0aXR1dGlvbiwgUGhvbmVGaWVsZCB9LFxuICBuYW1lOiBcIlJlZ2lzdGVyXCIsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm06IFwiXCIsXG4gICAgICBmb3JtMjogXCJcIixcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBtb2JpbGU6IFwiXCIsXG4gICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBwYXNzd29yZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygpLnNsaWNlKDIsIDYpLFxuICAgICAgb3RwOiBcIlwiLFxuICAgICAgcGFzc19nZW5lcmF0ZWQ6IGZhbHNlLFxuICAgICAgc2VydmVyX290cDogXCJcIixcbiAgICAgIG90cF92ZXJpZmllZDogZmFsc2UsXG4gICAgICByZWdfY29tcGxldGU6IGZhbHNlLFxuICAgICAgcHJvZmlsZV9jb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBjaGVja19tb2JpbGUoKSB7XG4gICAgICBpZiAodGhpcy4kcmVmcy5mb3JtLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgdGhpcy5vdHBfdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICBpZiAodGhpcy4kcmVmcy5mb3JtMi52YWxpZGF0ZSgpKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgIHBob25lOiB0aGlzLm1vYmlsZSxcbiAgICAgICAgICBhZGRyZXNzOiB0aGlzLmFkZHJlc3MsXG4gICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBheGlvc1xuICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgICAgICAgID8gXCJodHRwczovL3d3dy5hcHBzLmxpdmV0dXRvci5jb20uYmQvYXBpL3VzZXJzL1wiXG4gICAgICAgICAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJzL1wiLFxuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoKSA9PlxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goXCJ1c2VyL2xvZ2luXCIsIHtcbiAgICAgICAgICAgICAgcGhvbmU6IHRoaXMubW9iaWxlLnJlcGxhY2UoXCItXCIsIFwiXCIpLFxuICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuJHJvdXRlci5wdXNoKFwiL3Byb2ZpbGVcIikpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBT0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBdENBO0FBcEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Register.vue?vue&type=script&lang=js&\n");

/***/ })

})