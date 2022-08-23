webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  mounted: function mounted() {\n    console.log(Object({\"NODE_ENV\":\"development\",\"VUE_APP_JITSI_BASEURL\":\"https://apps.meetingme.live/\",\"BASE_URL\":\"/\"}));\n    this.loadJitsiScript();\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      var _this = this;\n\n      new Promise(function (resolve, reject) {\n        var script = document.createElement(\"script\");\n        script.src = \"https://apps.meetingme.live/external_api.js\";\n        script.onload = resolve;\n        script.onerror = reject;\n        document.head.appendChild(script);\n      }).then(function () {\n        var options = {\n          roomName: \"JitsiMeetAPIExample\",\n          width: 700,\n          height: 700,\n          parentNode: _this.$refs.jitsiContainer\n        };\n        new JitsiMeetExternalAPI(\"https://apps.meetingme.live/\", options);\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYpO1xuICAgIHRoaXMubG9hZEppdHNpU2NyaXB0KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkSml0c2lTY3JpcHQoKSB7XG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vYXBwcy5tZWV0aW5nbWUubGl2ZS9leHRlcm5hbF9hcGkuanNcIjtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJvb21OYW1lOiBcIkppdHNpTWVldEFQSUV4YW1wbGVcIixcbiAgICAgICAgICAgIHdpZHRoOiA3MDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDcwMCxcbiAgICAgICAgICAgIHBhcmVudE5vZGU6IHRoaXMuJHJlZnMuaml0c2lDb250YWluZXIsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBuZXcgSml0c2lNZWV0RXh0ZXJuYWxBUEkocHJvY2Vzcy5lbnYuVlVFX0FQUF9KSVRTSV9CQVNFVVJMLCBvcHRpb25zKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXJCQTtBQUxBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})