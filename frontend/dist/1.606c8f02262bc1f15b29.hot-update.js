webpackHotUpdate(1,{

/***/ "./src/services/jwtmaker.js":
/*!**********************************!*\
  !*** ./src/services/jwtmaker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Buffer) {var crypto = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (payload) {\n  var header = {\n    alg: \"HS256\",\n    typ: \"JWT\"\n  };\n\n  var _header = Buffer.from(JSON.stringify(header)).toString(\"base64\");\n\n  var _payload = Buffer.from(JSON.stringify(payload)).toString(\"base64\");\n\n  var signature = _header + \".\" + _payload;\n  var secret = \"FB13E8E76E8BA8ECEE6CFB955B40D472\";\n\n  var _signature = crypto.createHmac(\"sha256\", secret).update(signature).digest(\"base64\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n\n  return signature + \".\" + _signature;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ \"./node_modules/buffer/index.js\").Buffer))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvand0bWFrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvand0bWFrZXIuanM/Y2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGF5bG9hZCkge1xuICBjb25zdCBoZWFkZXIgPSB7XG4gICAgYWxnOiBcIkhTMjU2XCIsXG4gICAgdHlwOiBcIkpXVFwiLFxuICB9O1xuICBjb25zdCBfaGVhZGVyID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkoaGVhZGVyKSkudG9TdHJpbmcoXCJiYXNlNjRcIik7XG4gIGNvbnN0IF9wYXlsb2FkID0gQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICBjb25zdCBzaWduYXR1cmUgPSBfaGVhZGVyICsgXCIuXCIgKyBfcGF5bG9hZDtcbiAgY29uc3Qgc2VjcmV0ID0gXCJGQjEzRThFNzZFOEJBOEVDRUU2Q0ZCOTU1QjQwRDQ3MlwiO1xuICBjb25zdCBfc2lnbmF0dXJlID0gY3J5cHRvXG4gICAgLmNyZWF0ZUhtYWMoXCJzaGEyNTZcIiwgc2VjcmV0KVxuICAgIC51cGRhdGUoc2lnbmF0dXJlKVxuICAgIC5kaWdlc3QoXCJiYXNlNjRcIilcbiAgICAucmVwbGFjZSgvXFwrL2csIFwiLVwiKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgXCJfXCIpXG4gICAgLnJlcGxhY2UoLz0rJC8sIFwiXCIpO1xuXG4gIHJldHVybiBzaWduYXR1cmUgKyBcIi5cIiArIF9zaWduYXR1cmU7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/jwtmaker.js\n");

/***/ })

})