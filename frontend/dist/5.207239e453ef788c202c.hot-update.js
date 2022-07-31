webpackHotUpdate(5,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Register.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Register.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_register_Individual_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/register/Individual.vue */ \"./src/components/register/Individual.vue\");\n/* harmony import */ var _components_register_Institution_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/register/Institution.vue */ \"./src/components/register/Institution.vue\");\n/* harmony import */ var _components_global_PhoneField_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/PhoneField.vue */ \"./src/components/global/PhoneField.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    Individual: _components_register_Individual_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    Institution: _components_register_Institution_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    PhoneField: _components_global_PhoneField_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  name: \"Register\",\n  data: function data() {\n    return {\n      form: \"\",\n      form2: \"\",\n      name: \"\",\n      mobile: \"\",\n      address: \"\",\n      email: \"\",\n      password: Math.random().toString().slice(2, 6),\n      otp: \"\",\n      pass_generated: false,\n      server_otp: \"\",\n      otp_verified: false,\n      reg_complete: false,\n      profile_completed: false\n    };\n  },\n  methods: {\n    check_mobile: function check_mobile() {\n      if (this.$refs.form.validate()) {\n        this.otp_verified = true;\n      }\n    },\n    register: function register() {\n      var _this = this;\n\n      if (this.$refs.form2.validate()) {\n        var data = {\n          name: this.name,\n          email: this.email,\n          phone: this.mobile.replace(\"-\", \"\"),\n          address: this.address,\n          password: this.password\n        };\n        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post( false ? undefined : \"http://localhost:8000/api/users/\", data, {\n          headers: {\n            \"Content-Type\": \"application/json\"\n          }\n        }).then(function () {\n          return _this.$store.dispatch(\"user/login\", {\n            phone: _this.mobile.replace(\"-\", \"\"),\n            password: _this.password\n          });\n        }).then(function () {\n          return _this.$router.push(\"/profile\");\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3BhZ2VzL1JlZ2lzdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vUmVnaXN0ZXIudnVlPzAxMDMiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8di1jb250YWluZXIgZmx1aWQgZmlsbC1oZWlnaHQ+XG4gICAgPHYtcm93IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgPHYtY29sIG1kPVwiNlwiPlxuICAgICAgICA8di1jYXJkIGNsYXNzPVwibXgtNCBwYS00XCI+XG4gICAgICAgICAgPHYtZm9ybVxuICAgICAgICAgICAgcmVmPVwiZm9ybVwiXG4gICAgICAgICAgICB2LWlmPVwiIW90cF92ZXJpZmllZFwiXG4gICAgICAgICAgICBAc3VibWl0LnByZXZlbnQ9XCJjaGVja19tb2JpbGVcIlxuICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBob25lRmllbGQgdi1tb2RlbD1cIm1vYmlsZVwiPjwvUGhvbmVGaWVsZD5cbiAgICAgICAgICAgIDwhLS0gPHZ1ZS10ZWwtaW5wdXQtdnVldGlmeVxuICAgICAgICAgICAgICB2LW1vZGVsPVwibW9iaWxlXCJcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiJHBob25lUnVsZXNcIlxuICAgICAgICAgICAgICBjb3VudGVyPVwiMTFcIlxuICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgID48L3Z1ZS10ZWwtaW5wdXQtdnVldGlmeT4gLS0+XG4gICAgICAgICAgICA8di1hbGVydCB0eXBlPVwiaW5mb1wiIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICBQbGVhc2Ugc2F2ZSB0aGUgYmVsb3cgcGluIGNvZGUgZm9yIHlvdXIgbG9naW5cbiAgICAgICAgICAgIDwvdi1hbGVydD5cbiAgICAgICAgICAgIDwhLS0gI1RPRE86IFJFQURPTkxZIC0tPlxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIDp2YWx1ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cblxuICAgICAgICAgICAgPHYtYnRuIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInN1Y2Nlc3NcIiBibG9jaz5Db250aW51ZTwvdi1idG4+XG4gICAgICAgICAgPC92LWZvcm0+XG4gICAgICAgICAgPHYtZm9ybSB2LWlmPVwib3RwX3ZlcmlmaWVkXCIgcmVmPVwiZm9ybTJcIiBsYXp5LXZhbGlkYXRpb24+XG4gICAgICAgICAgICA8di10ZXh0LWZpZWxkXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgICA6cnVsZXM9XCIkcmVxdWlyZWRSdWxlc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3YtdGV4dC1maWVsZD5cblxuICAgICAgICAgICAgPHYtdGV4dC1maWVsZFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICAgIDpydWxlcz1cIiRyZXF1aXJlZFJ1bGVzXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJBZGRyZXNzXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cbiAgICAgICAgICAgIDx2LXRleHQtZmllbGRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIDpydWxlcz1cIiRyZXF1aXJlZFJ1bGVzXCJcbiAgICAgICAgICAgID48L3YtdGV4dC1maWVsZD5cblxuICAgICAgICAgICAgPHYtYnRuIEBjbGljaz1cInJlZ2lzdGVyXCIgY29sb3I9XCJzdWNjZXNzXCIgYmxvY2tcbiAgICAgICAgICAgICAgPkNyZWF0ZSBBY2NvdW50PC92LWJ0blxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvdi1mb3JtPlxuICAgICAgICA8L3YtY2FyZD5cbiAgICAgIDwvdi1jb2w+XG4gICAgPC92LXJvdz5cbiAgPC92LWNvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXBpIGZyb20gXCJAL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEluZGl2aWR1YWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVnaXN0ZXIvSW5kaXZpZHVhbC52dWVcIjtcbmltcG9ydCBJbnN0aXR1dGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9yZWdpc3Rlci9JbnN0aXR1dGlvbi52dWVcIjtcbmltcG9ydCBQaG9uZUZpZWxkIGZyb20gXCIuLi9jb21wb25lbnRzL2dsb2JhbC9QaG9uZUZpZWxkLnZ1ZVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7IEluZGl2aWR1YWwsIEluc3RpdHV0aW9uLCBQaG9uZUZpZWxkIH0sXG4gIG5hbWU6IFwiUmVnaXN0ZXJcIixcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9ybTogXCJcIixcbiAgICAgIGZvcm0yOiBcIlwiLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIG1vYmlsZTogXCJcIixcbiAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc2xpY2UoMiwgNiksXG4gICAgICBvdHA6IFwiXCIsXG4gICAgICBwYXNzX2dlbmVyYXRlZDogZmFsc2UsXG4gICAgICBzZXJ2ZXJfb3RwOiBcIlwiLFxuICAgICAgb3RwX3ZlcmlmaWVkOiBmYWxzZSxcbiAgICAgIHJlZ19jb21wbGV0ZTogZmFsc2UsXG4gICAgICBwcm9maWxlX2NvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGNoZWNrX21vYmlsZSgpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLmZvcm0udmFsaWRhdGUoKSkge1xuICAgICAgICB0aGlzLm90cF92ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICByZWdpc3RlcigpIHtcbiAgICAgIGlmICh0aGlzLiRyZWZzLmZvcm0yLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgcGhvbmU6IHRoaXMubW9iaWxlLnJlcGxhY2UoXCItXCIsIFwiXCIpLFxuICAgICAgICAgIGFkZHJlc3M6IHRoaXMuYWRkcmVzcyxcbiAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgfTtcbiAgICAgICAgYXhpb3NcbiAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxuICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly93d3cuYXBwcy5saXZldHV0b3IuY29tLmJkL2FwaS91c2Vycy9cIlxuICAgICAgICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2Vycy9cIixcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKCkgPT5cbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXNlci9sb2dpblwiLCB7XG4gICAgICAgICAgICAgIHBob25lOiB0aGlzLm1vYmlsZS5yZXBsYWNlKFwiLVwiLCBcIlwiKSxcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLiRyb3V0ZXIucHVzaChcIi9wcm9maWxlXCIpKVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQU9BO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXRDQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/Register.vue?vue&type=script&lang=js&\n");

/***/ })

})