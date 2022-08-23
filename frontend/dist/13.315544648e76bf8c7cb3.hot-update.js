webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted: function mounted() {\n    var _this = this;\n\n    console.log(Object({\"NODE_ENV\":\"development\",\"VUE_APP_JITSI_BASEURL\":\"apps.meetingme.live\",\"BASE_URL\":\"/\"}));\n    this.loadJitsiScript().then(function () {\n      _this.embedJitsi();\n    });\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      return new Promise(function (resolve, reject) {\n        var script = document.createElement(\"script\");\n        script.src = \"https://meet.jit.si/external_api.js\";\n        script.onload = resolve;\n        script.onerror = reject;\n        document.head.appendChild(script);\n      });\n    },\n    embedJitsi: function embedJitsi() {\n      var options = {\n        roomName: \"JitsiMeetAPIExample\",\n        parentNode: this.$refs.jitsiContainer\n      };\n      this.meet = new JitsiMeetExternalAPI(\"meet.jit.si/\", options);\n      return this.meet;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuICAgIHRoaXMubG9hZEppdHNpU2NyaXB0KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmVtYmVkSml0c2koKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRKaXRzaVNjcmlwdCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vbWVldC5qaXQuc2kvZXh0ZXJuYWxfYXBpLmpzXCI7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBlbWJlZEppdHNpKCkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcm9vbU5hbWU6IFwiSml0c2lNZWV0QVBJRXhhbXBsZVwiLFxuICAgICAgICBwYXJlbnROb2RlOiB0aGlzLiRyZWZzLmppdHNpQ29udGFpbmVyLFxuICAgICAgfTtcbiAgICAgIHRoaXMubWVldCA9IG5ldyBKaXRzaU1lZXRFeHRlcm5hbEFQSShcIm1lZXQuaml0LnNpL1wiLCBvcHRpb25zKTtcbiAgICAgIHJldHVybiB0aGlzLm1lZXQ7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFqQkE7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})