webpackHotUpdate(3,{

/***/ "./src/services/jwtmaker.js":
/*!**********************************!*\
  !*** ./src/services/jwtmaker.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(Buffer) {var crypto = __webpack_require__(/*! crypto */ \"./node_modules/crypto-browserify/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var header = {\n    alg: \"HS256\",\n    typ: \"JWT\"\n  };\n  var payload = {\n    name: \"John Doer\"\n  };\n\n  var _header = Buffer.from(JSON.stringify(header)).toString(\"base64\");\n\n  var _payload = Buffer.from(JSON.stringify(payload)).toString(\"base64\");\n\n  var signature = _header + \".\" + _payload;\n  var secret = \"secret\";\n\n  var _signature = crypto.createHmac(\"sha256\", secret).update(signature).digest(\"base64\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\").replace(/=+$/, \"\");\n\n  return signature + \".\" + _signature;\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ \"./node_modules/buffer/index.js\").Buffer))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvand0bWFrZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvand0bWFrZXIuanM/Y2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGhlYWRlciA9IHtcbiAgICBhbGc6IFwiSFMyNTZcIixcbiAgICB0eXA6IFwiSldUXCIsXG4gIH07XG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgbmFtZTogXCJKb2huIERvZXJcIixcbiAgfTtcbiAgY29uc3QgX2hlYWRlciA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLnRvU3RyaW5nKFwiYmFzZTY0XCIpO1xuICBjb25zdCBfcGF5bG9hZCA9IEJ1ZmZlci5mcm9tKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKS50b1N0cmluZyhcImJhc2U2NFwiKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gX2hlYWRlciArIFwiLlwiICsgX3BheWxvYWQ7XG4gIGNvbnN0IHNlY3JldCA9IFwic2VjcmV0XCI7XG4gIGNvbnN0IF9zaWduYXR1cmUgPSBjcnlwdG9cbiAgICAuY3JlYXRlSG1hYyhcInNoYTI1NlwiLCBzZWNyZXQpXG4gICAgLnVwZGF0ZShzaWduYXR1cmUpXG4gICAgLmRpZ2VzdChcImJhc2U2NFwiKVxuICAgIC5yZXBsYWNlKC9cXCsvZywgXCItXCIpXG4gICAgLnJlcGxhY2UoL1xcLy9nLCBcIl9cIilcbiAgICAucmVwbGFjZSgvPSskLywgXCJcIik7XG5cbiAgcmV0dXJuIHNpZ25hdHVyZSArIFwiLlwiICsgX3NpZ25hdHVyZTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/jwtmaker.js\n");

/***/ })

})