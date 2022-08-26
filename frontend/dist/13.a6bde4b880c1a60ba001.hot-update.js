webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    roomName: {\n      type: String,\n      default: \"openLounge\"\n    },\n    jwt: {\n      type: String,\n      default: \"\"\n    }\n  },\n  data: function data() {\n    return {\n      loading: false\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    console.log(this.jwt);\n    this.loadJitsiScript().then(function () {\n      _this.loading = true;\n\n      _this.initJitsi();\n\n      _this.loading = false;\n    });\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      return new Promise(function (resolve, reject) {\n        var script = document.createElement(\"script\");\n        script.type = \"text/javascript\";\n        script.async = true;\n        script.src = \"https://\" + \"apps.meetingme.live\" + \"/external_api.js\";\n        document.head.appendChild(script);\n\n        script.onload = function () {\n          return resolve();\n        };\n\n        script.onerror = function () {\n          return reject();\n        };\n      });\n    },\n    initJitsi: function initJitsi() {\n      var options = {\n        jwt: this.jwt,\n        roomName: this.roomName,\n        startWithAudioMuted: true,\n        startWithVideoMuted: true\n      };\n      this.meet = new window.JitsiMeetExternalAPI(\"apps.meetingme.live\", options);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDx2LWNvbnRhaW5lciBmaWxsLWhlaWdodCBmbHVpZD5cbiAgICA8di1yb3c+XG4gICAgICA8IS0tIDx2LWNvbCByZWY9XCJqaXRzaUNvbnRhaW5lclwiPiA8L3YtY29sPiAtLT5cbiAgICAgIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbiAgICA8L3Ytcm93PlxuICA8L3YtY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICByb29tTmFtZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJvcGVuTG91bmdlXCIsXG4gICAgfSxcbiAgICBqd3Q6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwiXCIsXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgfTtcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmp3dCk7XG4gICAgdGhpcy5sb2FkSml0c2lTY3JpcHQoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLmluaXRKaXRzaSgpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkSml0c2lTY3JpcHQoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdC5zcmMgPVxuICAgICAgICAgIFwiaHR0cHM6Ly9cIiArIHByb2Nlc3MuZW52LlZVRV9BUFBfSklUU0lfQkFTRVVSTCArIFwiL2V4dGVybmFsX2FwaS5qc1wiO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlamVjdCgpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBpbml0Sml0c2koKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBqd3Q6IHRoaXMuand0LFxuICAgICAgICByb29tTmFtZTogdGhpcy5yb29tTmFtZSxcbiAgICAgICAgc3RhcnRXaXRoQXVkaW9NdXRlZDogdHJ1ZSxcbiAgICAgICAgc3RhcnRXaXRoVmlkZW9NdXRlZDogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMubWVldCA9IG5ldyB3aW5kb3cuSml0c2lNZWV0RXh0ZXJuYWxBUEkoXG4gICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfSklUU0lfQkFTRVVSTCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBSUE7QUE3QkE7QUF4QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})