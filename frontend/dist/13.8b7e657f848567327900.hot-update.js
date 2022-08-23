webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    roomName: {\n      type: String,\n      default: \"openLounge\"\n    }\n  },\n  data: function data() {\n    return {};\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    console.log(Object({\"NODE_ENV\":\"development\",\"VUE_APP_JITSI_BASEURL\":\"apps.meetingme.live\",\"BASE_URL\":\"/\"}));\n    this.loadJitsiScript().then(function () {\n      _this.embedJitsi();\n    });\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      return new Promise(function (resolve, reject) {\n        var script = document.createElement(\"script\");\n        script.src = \"apps.meetingme.live\" + \"/external_api.js\";\n        document.head.appendChild(script);\n        script.addEventListener(\"load\", function () {\n          return resolve();\n        });\n      });\n    },\n    embedJitsi: function embedJitsi() {\n      var options = {\n        roomName: this.roomName,\n        parentNode: this.$refs.jitsiContainer\n      };\n      this.meet = new JitsiMeetExternalAPI(\"apps.meetingme.live\", options);\n      return this.meet;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcm9vbU5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IFwib3BlbkxvdW5nZVwiLFxuICAgIH0sXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52KTtcbiAgICB0aGlzLmxvYWRKaXRzaVNjcmlwdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5lbWJlZEppdHNpKCk7XG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkSml0c2lTY3JpcHQoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQuc3JjID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9KSVRTSV9CQVNFVVJMICsgXCIvZXh0ZXJuYWxfYXBpLmpzXCI7XG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHJlc29sdmUoKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVtYmVkSml0c2koKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByb29tTmFtZTogdGhpcy5yb29tTmFtZSxcbiAgICAgICAgcGFyZW50Tm9kZTogdGhpcy4kcmVmcy5qaXRzaUNvbnRhaW5lcixcbiAgICAgIH07XG4gICAgICB0aGlzLm1lZXQgPSBuZXcgSml0c2lNZWV0RXh0ZXJuYWxBUEkoXG4gICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfSklUU0lfQkFTRVVSTCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLm1lZXQ7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSUE7QUFDQTtBQW5CQTtBQWhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})