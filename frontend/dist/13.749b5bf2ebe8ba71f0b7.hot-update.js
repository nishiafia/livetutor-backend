webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted: function mounted() {\n    console.log(Object({\"NODE_ENV\":\"development\",\"VUE_APP_JITSI_BASEURL\":\"https://apps.meetingme.live/\",\"BASE_URL\":\"/\"}));\n    this.loadJitsiScript();\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      var _this = this;\n\n      var script = document.createElement(\"script\");\n      script.src = \"https://meet.jit.si/external_api.js\";\n      document.head.appendChild(script);\n      var options = {\n        roomName: \"JitsiMeetAPIExample\",\n        parentNode: this.$refs.jitsiContainer\n      };\n      script.addEventListener(\"load\", function () {\n        return _this.meet = new JitsiMeetExternalAPI(\"https://meet.jit.si/\", options);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuICAgIHRoaXMubG9hZEppdHNpU2NyaXB0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkSml0c2lTY3JpcHQoKSB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9tZWV0LmppdC5zaS9leHRlcm5hbF9hcGkuanNcIjtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJvb21OYW1lOiBcIkppdHNpTWVldEFQSUV4YW1wbGVcIixcbiAgICAgICAgcGFyZW50Tm9kZTogdGhpcy4kcmVmcy5qaXRzaUNvbnRhaW5lcixcbiAgICAgIH07XG5cbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImxvYWRcIixcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICAodGhpcy5tZWV0ID0gbmV3IEppdHNpTWVldEV4dGVybmFsQVBJKFxuICAgICAgICAgICAgXCJodHRwczovL21lZXQuaml0LnNpL1wiLFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICkpXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUVBO0FBQUE7QUFNQTtBQWxCQTtBQUxBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})