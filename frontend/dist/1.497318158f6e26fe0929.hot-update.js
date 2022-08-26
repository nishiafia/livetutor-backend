webpackHotUpdate(1,{

/***/ "./src/services/jwtmaker.js":
/*!**********************************!*\
  !*** ./src/services/jwtmaker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Buffer) {function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar crypto = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (payload_params) {\n  var header = {\n    alg: \"HS256\",\n    typ: \"JWT\"\n  };\n\n  var payload = _objectSpread(_objectSpread({}, payload_params), {}, {\n    aud: \"3C68F1C9B375C34C2FB4D3CF86205254\",\n    iss: \"3C68F1C9B375C34C2FB4D3CF86205254\",\n    iat: \"1661531070\",\n    nbf: \"1661531070\",\n    exp: 1661534670\n  });\n\n  var _header = Buffer.from(JSON.stringify(header)).toString(\"base64url\");\n\n  var _payload = Buffer.from(JSON.stringify(payload)).toString(\"base64url\");\n\n  var signature = _header + \".\" + _payload;\n  var secret = \"FB13E8E76E8BA8ECEE6CFB955B40D472\";\n\n  var _signature = crypto.createHmac(\"sha256\", secret).update(signature).digest(\"base64url\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n\n  return signature + \".\" + _signature;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ \"./node_modules/buffer/index.js\").Buffer))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvand0bWFrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvand0bWFrZXIuanM/Y2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGF5bG9hZF9wYXJhbXMpIHtcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIGFsZzogXCJIUzI1NlwiLFxuICAgIHR5cDogXCJKV1RcIixcbiAgfTtcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAuLi5wYXlsb2FkX3BhcmFtcyxcbiAgICBhdWQ6IFwiM0M2OEYxQzlCMzc1QzM0QzJGQjREM0NGODYyMDUyNTRcIixcbiAgICBpc3M6IFwiM0M2OEYxQzlCMzc1QzM0QzJGQjREM0NGODYyMDUyNTRcIixcbiAgICBpYXQ6IFwiMTY2MTUzMTA3MFwiLFxuICAgIG5iZjogXCIxNjYxNTMxMDcwXCIsXG4gICAgZXhwOiAxNjYxNTM0NjcwLFxuICB9O1xuICBjb25zdCBfaGVhZGVyID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoaGVhZGVyKSkudG9TdHJpbmcoXCJiYXNlNjR1cmxcIik7XG4gIGNvbnN0IF9wYXlsb2FkID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpLnRvU3RyaW5nKFwiYmFzZTY0dXJsXCIpO1xuICBjb25zdCBzaWduYXR1cmUgPSBfaGVhZGVyICsgXCIuXCIgKyBfcGF5bG9hZDtcbiAgY29uc3Qgc2VjcmV0ID0gXCJGQjEzRThFNzZFOEJBOEVDRUU2Q0ZCOTU1QjQwRDQ3MlwiO1xuICBjb25zdCBfc2lnbmF0dXJlID0gY3J5cHRvXG4gICAgLmNyZWF0ZUhtYWMoXCJzaGEyNTZcIiwgc2VjcmV0KVxuICAgIC51cGRhdGUoc2lnbmF0dXJlKVxuICAgIC5kaWdlc3QoXCJiYXNlNjR1cmxcIilcbiAgICAucmVwbGFjZSgvXFwrL2csIFwiLVwiKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpXG4gICAgLnJlcGxhY2UoLz0rJC8sIFwiXCIpO1xuXG4gIHJldHVybiBzaWduYXR1cmUgKyBcIi5cIiArIF9zaWduYXR1cmU7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/jwtmaker.js\n");

/***/ })

})