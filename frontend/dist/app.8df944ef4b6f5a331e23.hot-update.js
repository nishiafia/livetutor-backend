webpackHotUpdate("app",{

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\n\nvar access_token = localStorage.getItem(\"access\"); // const base_url = \"https://apps.livetutor.com.bd/api/\";\n\nvar base_url = \"http://localhost:8000/api/\";\nvar config = {\n  baseURL: base_url\n};\n\nif (access_token) {\n  config.headers = {\n    Authorization: \"Bearer \".concat(access_token)\n  };\n}\n\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config);\napi.defaults.xsrfHeaderName = \"X-CSRFTOKEN\";\napi.defaults.xsrfCookieName = \"csrftoken\";\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$api = api;\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS5qcz83NDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCBhY2Nlc3NfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1wiKTtcblxuLy8gY29uc3QgYmFzZV91cmwgPSBcImh0dHBzOi8vYXBwcy5saXZldHV0b3IuY29tLmJkL2FwaS9cIjtcblxuY29uc3QgYmFzZV91cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvXCI7XG5sZXQgY29uZmlnID0ge1xuICBiYXNlVVJMOiBiYXNlX3VybCxcbn07XG5cbmlmIChhY2Nlc3NfdG9rZW4pIHtcbiAgY29uZmlnLmhlYWRlcnMgPSB7XG4gICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxuICB9O1xufVxuXG5jb25zdCBhcGkgPSBBeGlvcy5jcmVhdGUoY29uZmlnKTtcbmFwaS5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9IFwiWC1DU1JGVE9LRU5cIjtcbmFwaS5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9IFwiY3NyZnRva2VuXCI7XG5WdWUucHJvdG90eXBlLiRhcGkgPSBhcGk7XG5leHBvcnQgZGVmYXVsdCBhcGk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ })

})