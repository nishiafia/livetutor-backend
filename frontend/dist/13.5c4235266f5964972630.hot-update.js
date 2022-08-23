webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    roomName: {\n      type: String,\n      // required: true,\n      default: \"lounge\"\n    }\n  },\n  mounted: function mounted() {\n    this.loadJitsiScript().then(function () {});\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      var _this = this;\n\n      return new Promise(function (resolve, reject) {\n        if (_this.$refs.jitsiContainer.firstChild) {\n          resolve();\n        } else {\n          var script = document.createElement(\"script\");\n          script.src = \"apps.meetingme.live\" + \"/external_api.js\";\n          document.head.appendChild(script);\n          script.addEventListener(\"load\", function () {\n            var options = {\n              roomName: _this.roomName,\n              parentNode: _this.$refs.jitsiContainer\n            };\n            _this.meet = new window.JitsiMeetExternalAPI(\"apps.meetingme.live\", options);\n          });\n\n          script.onerror = function () {\n            reject();\n          };\n        }\n      });\n    },\n    embedJitsi: function embedJitsi() {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcm9vbU5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIC8vIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogXCJsb3VuZ2VcIixcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZEppdHNpU2NyaXB0KCkudGhlbigoKSA9PiB7fSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkSml0c2lTY3JpcHQoKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBpZiAodGhpcy4kcmVmcy5qaXRzaUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgc2NyaXB0LnNyYyA9IHByb2Nlc3MuZW52LlZVRV9BUFBfSklUU0lfQkFTRVVSTCArIFwiL2V4dGVybmFsX2FwaS5qc1wiO1xuICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgcm9vbU5hbWU6IHRoaXMucm9vbU5hbWUsXG4gICAgICAgICAgICAgIHBhcmVudE5vZGU6IHRoaXMuJHJlZnMuaml0c2lDb250YWluZXIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5tZWV0ID0gbmV3IHdpbmRvdy5KaXRzaU1lZXRFeHRlcm5hbEFQSShcbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9KSVRTSV9CQVNFVVJMLFxuICAgICAgICAgICAgICBvcHRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBlbWJlZEppdHNpKCkge30sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})