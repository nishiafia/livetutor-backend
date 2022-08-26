webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    roomName: {\n      type: String,\n      default: \"openLounge\"\n    },\n    jwt: {\n      type: String,\n      default: \"\"\n    }\n  },\n  data: function data() {\n    return {\n      loading: false\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.loadJitsiScript().then(function () {\n      _this.loading = true;\n\n      _this.initJitsi();\n\n      _this.loading = false;\n    });\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      return new Promise(function (resolve, reject) {\n        var script = document.createElement(\"script\");\n        script.type = \"text/javascript\";\n        script.async = true;\n        script.src = \"https://\" + \"apps.meetingme.live\" + \"/external_api.js\";\n        document.head.appendChild(script);\n\n        script.onload = function () {\n          return resolve();\n        };\n\n        script.onerror = function () {\n          return reject();\n        };\n      });\n    },\n    initJitsi: function initJitsi() {\n      var options = {\n        jwt: this.jwt // roomName: this.roomName,\n        // startWithAudioMuted: true,\n        // startWithVideoMuted: true,\n\n      };\n      this.meet = new window.JitsiMeetExternalAPI(\"apps.meetingme.live\", options);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNvbnRhaW5lciBmaWxsLWhlaWdodCBmbHVpZD5cbiAgICA8di1yb3c+XG4gICAgICA8di1jb2wgcmVmPVwiaml0c2lDb250YWluZXJcIj4gPC92LWNvbD5cbiAgICAgIDwhLS0gPGRpdiByZWY9XCJqaXRzaUNvbnRhaW5lclwiIHN0eWxlPVwiaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJVwiPjwvZGl2PiAtLT5cbiAgICA8L3Ytcm93PlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICByb29tTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJvcGVuTG91bmdlXCIsXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmxvYWRKaXRzaVNjcmlwdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuaW5pdEppdHNpKCk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRKaXRzaVNjcmlwdCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LnNyYyA9XG4gICAgICAgICAgXCJodHRwczovL1wiICsgcHJvY2Vzcy5lbnYuVlVFX0FQUF9KSVRTSV9CQVNFVVJMICsgXCIvZXh0ZXJuYWxfYXBpLmpzXCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0KCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRKaXRzaSgpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGp3dDogdGhpcy5qd3QsXG4gICAgICAgIC8vIHJvb21OYW1lOiB0aGlzLnJvb21OYW1lLFxuICAgICAgICAvLyBzdGFydFdpdGhBdWRpb011dGVkOiB0cnVlLFxuICAgICAgICAvLyBzdGFydFdpdGhWaWRlb011dGVkOiB0cnVlLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5tZWV0ID0gbmV3IHdpbmRvdy5KaXRzaU1lZXRFeHRlcm5hbEFQSShcbiAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9KSVRTSV9CQVNFVVJMLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUxBO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBSUE7QUE3QkE7QUF2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})