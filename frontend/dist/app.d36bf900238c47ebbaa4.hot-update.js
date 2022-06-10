webpackHotUpdate("app",{

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm.js\");\n\n\nvar access_token = localStorage.getItem(\"access\");\nvar base_url = \"https://www.apps.livetutor.com.bd//api/\";\nvar config = {\n  baseURL: base_url\n};\n\nif (access_token) {\n  config.headers = {\n    Authorization: \"Bearer \".concat(access_token)\n  };\n}\n\nvar api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(config);\napi.defaults.xsrfHeaderName = \"X-CSRFTOKEN\";\napi.defaults.xsrfCookieName = \"csrftoken\";\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].prototype.$api = api;\n/* harmony default export */ __webpack_exports__[\"default\"] = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL2FwaS5qcz83NDI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCBhY2Nlc3NfdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1wiKTtcblxuY29uc3QgYmFzZV91cmwgPSBcImh0dHBzOi8vd3d3LmFwcHMubGl2ZXR1dG9yLmNvbS5iZC8vYXBpL1wiO1xubGV0IGNvbmZpZyA9IHtcbiAgYmFzZVVSTDogYmFzZV91cmwsXG59O1xuXG5pZiAoYWNjZXNzX3Rva2VuKSB7XG4gIGNvbmZpZy5oZWFkZXJzID0ge1xuICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgfTtcbn1cblxuY29uc3QgYXBpID0gQXhpb3MuY3JlYXRlKGNvbmZpZyk7XG5hcGkuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSBcIlgtQ1NSRlRPS0VOXCI7XG5hcGkuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSBcImNzcmZ0b2tlblwiO1xuVnVlLnByb3RvdHlwZS4kYXBpID0gYXBpO1xuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ })

})