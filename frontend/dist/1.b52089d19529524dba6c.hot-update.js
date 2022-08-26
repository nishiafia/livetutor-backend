webpackHotUpdate(1,{

/***/ "./src/services/jwtmaker.js":
/*!**********************************!*\
  !*** ./src/services/jwtmaker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Buffer) {var crypto = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (payload_params) {\n  var header = {\n    alg: \"HS256\",\n    typ: \"JWT\"\n  };\n  var payload = {\n    payload_params: payload_params,\n    aud: \"3C68F1C9B375C34C2FB4D3CF86205254\",\n    iss: \"3C68F1C9B375C34C2FB4D3CF86205254\"\n  };\n\n  var _header = Buffer.from(JSON.stringify(header)).toString(\"base64\");\n\n  var _payload = Buffer.from(JSON.stringify(payload)).toString(\"base64\");\n\n  var signature = _header + \".\" + _payload;\n  var secret = \"FB13E8E76E8BA8ECEE6CFB955B40D472\";\n\n  var _signature = crypto.createHmac(\"sha256\", secret).update(signature).digest(\"base64\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n\n  return signature + \".\" + _signature;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ \"./node_modules/buffer/index.js\").Buffer))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvand0bWFrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvand0bWFrZXIuanM/Y2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGF5bG9hZF9wYXJhbXMpIHtcbiAgY29uc3QgaGVhZGVyID0ge1xuICAgIGFsZzogXCJIUzI1NlwiLFxuICAgIHR5cDogXCJKV1RcIixcbiAgfTtcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICBwYXlsb2FkX3BhcmFtcyxcbiAgICBhdWQ6IFwiM0M2OEYxQzlCMzc1QzM0QzJGQjREM0NGODYyMDUyNTRcIixcbiAgICBpc3M6IFwiM0M2OEYxQzlCMzc1QzM0QzJGQjREM0NGODYyMDUyNTRcIixcbiAgfTtcbiAgY29uc3QgX2hlYWRlciA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICBjb25zdCBfcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gX2hlYWRlciArIFwiLlwiICsgX3BheWxvYWQ7XG4gIGNvbnN0IHNlY3JldCA9IFwiRkIxM0U4RTc2RThCQThFQ0VFNkNGQjk1NUI0MEQ0NzJcIjtcbiAgY29uc3QgX3NpZ25hdHVyZSA9IGNyeXB0b1xuICAgIC5jcmVhdGVIbWFjKFwic2hhMjU2XCIsIHNlY3JldClcbiAgICAudXBkYXRlKHNpZ25hdHVyZSlcbiAgICAuZGlnZXN0KFwiYmFzZTY0XCIpXG4gICAgLnJlcGxhY2UoL1xcKy9nLCBcIi1cIilcbiAgICAucmVwbGFjZSgvXFwvL2csIFwiX1wiKVxuICAgIC5yZXBsYWNlKC89KyQvLCBcIlwiKTtcblxuICByZXR1cm4gc2lnbmF0dXJlICsgXCIuXCIgKyBfc2lnbmF0dXJlO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/jwtmaker.js\n");

/***/ })

})