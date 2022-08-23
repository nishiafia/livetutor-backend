webpackHotUpdate("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ \"./node_modules/core-js/stable/index.js\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugins/axios */ \"./src/plugins/axios.js\");\n/* harmony import */ var _plugins_axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins_axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.vue\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/index */ \"./src/store/index.js\");\n/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/vuetify */ \"./src/plugins/vuetify.js\");\n/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/dist/vuetify.min.css */ \"./node_modules/vuetify/dist/vuetify.min.css\");\n/* harmony import */ var vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuetify_dist_vuetify_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\n/* harmony import */ var vue_tel_input_vuetify_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-tel-input-vuetify/lib */ \"./node_modules/vue-tel-input-vuetify/lib/index.js\");\n\n\n\n\n // import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'\n\n\n\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vue_tel_input_vuetify_lib__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n});\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$requiredRules = [function (v) {\n  return !!v || \"This Field is Required\";\n}];\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$phoneRules = [function (v) {\n  return !!v || \"Phone is required\";\n} //(v) => /^\\d{11}$/.test(v) || \"Phone must be 11 digits\",\n];\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$api = _services_api__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.performance = true;\nnew vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  el: \"#app\",\n  router: _router__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  template: \"<App/>\",\n  vuetify: _plugins_vuetify__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  store: _store_index__WEBPACK_IMPORTED_MODULE_5__[\"store\"],\n  components: {\n    App: _App__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  created: function created() {\n    this.$store.dispatch(\"user/validate\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29yZS1qcy9zdGFibGVcIjtcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IFwiLi9wbHVnaW5zL2F4aW9zXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9yb3V0ZXJcIjtcbi8vIGltcG9ydCB7IEJvb3RzdHJhcFZ1ZSwgSWNvbnNQbHVnaW4gfSBmcm9tICdib290c3RyYXAtdnVlJ1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiQC9zdG9yZS9pbmRleFwiO1xuaW1wb3J0IHZ1ZXRpZnkgZnJvbSBcIi4vcGx1Z2lucy92dWV0aWZ5XCI7XG5pbXBvcnQgXCJ2dWV0aWZ5L2Rpc3QvdnVldGlmeS5taW4uY3NzXCI7XG5pbXBvcnQgYXBpIGZyb20gXCJAL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IFZ1ZVRlbElucHV0VnVldGlmeSBmcm9tIFwidnVlLXRlbC1pbnB1dC12dWV0aWZ5L2xpYlwiO1xuXG5WdWUudXNlKFZ1ZVRlbElucHV0VnVldGlmeSwge1xuICB2dWV0aWZ5LFxufSk7XG5cblZ1ZS5wcm90b3R5cGUuJHJlcXVpcmVkUnVsZXMgPSBbKHYpID0+ICEhdiB8fCBcIlRoaXMgRmllbGQgaXMgUmVxdWlyZWRcIl07XG5WdWUucHJvdG90eXBlLiRwaG9uZVJ1bGVzID0gW1xuICAodikgPT4gISF2IHx8IFwiUGhvbmUgaXMgcmVxdWlyZWRcIixcbiAgLy8odikgPT4gL15cXGR7MTF9JC8udGVzdCh2KSB8fCBcIlBob25lIG11c3QgYmUgMTEgZGlnaXRzXCIsXG5dO1xuVnVlLnByb3RvdHlwZS4kYXBpID0gYXBpO1xuVnVlLmNvbmZpZy5wZXJmb3JtYW5jZSA9IHRydWU7XG5cbm5ldyBWdWUoe1xuICBlbDogXCIjYXBwXCIsXG4gIHJvdXRlcixcbiAgdGVtcGxhdGU6IFwiPEFwcC8+XCIsXG4gIHZ1ZXRpZnksXG4gIHN0b3JlLFxuICBjb21wb25lbnRzOiB7XG4gICAgQXBwLFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKFwidXNlci92YWxpZGF0ZVwiKTtcbiAgfSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQVhBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/plugins/axios.js":
/*!******************************!*\
  !*** ./src/plugins/axios.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9heGlvcy5qcy5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/plugins/axios.js\n");

/***/ })

})