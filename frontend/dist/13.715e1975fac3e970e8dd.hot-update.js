webpackHotUpdate(13,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    roomName: {\n      type: String,\n      required: true,\n      default: \"lounge\"\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    this.loadJitsiScript().then(function () {\n      _this.embedJitsi();\n    });\n  },\n  methods: {\n    loadJitsiScript: function loadJitsiScript() {\n      var _this2 = this;\n\n      return new Promise(function (resolve, reject) {\n        if (_this2.$refs.jitsiContainer.firstChild) {\n          resolve();\n        } else {\n          var script = document.createElement(\"script\");\n          script.src = \"https://meet.jit.si/external_api.js\";\n\n          script.onload = function () {\n            resolve();\n          };\n\n          script.onerror = function () {\n            reject();\n          };\n\n          _this2.$refs.jitsiContainer.appendChild(script);\n        }\n      });\n    },\n    embedJitsi: function embedJitsi() {\n      var options = {\n        roomName: this.roomName,\n        parentNode: this.$refs.jitsiContainer\n      };\n      new JitsiMeetExternalAPI(\"https://apps.meetingme.live/\", options);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL0ppdHNpTWVldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ppdHNpTWVldC52dWU/YWU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgcmVmPVwiaml0c2lDb250YWluZXJcIiBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCVcIj48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcm9vbU5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogXCJsb3VuZ2VcIixcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZEppdHNpU2NyaXB0KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLmVtYmVkSml0c2koKTtcbiAgICB9KTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRKaXRzaVNjcmlwdCgpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiRyZWZzLmppdHNpQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL21lZXQuaml0LnNpL2V4dGVybmFsX2FwaS5qc1wiO1xuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy4kcmVmcy5qaXRzaUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGVtYmVkSml0c2koKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICByb29tTmFtZTogdGhpcy5yb29tTmFtZSxcbiAgICAgICAgcGFyZW50Tm9kZTogdGhpcy4kcmVmcy5qaXRzaUNvbnRhaW5lcixcbiAgICAgIH07XG4gICAgICBuZXcgSml0c2lNZWV0RXh0ZXJuYWxBUEkocHJvY2Vzcy5lbnYuVlVFX0FQUF9KSVRTSV9CQVNFVVJMLCBvcHRpb25zKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQXhCQTtBQWJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/JitsiMeet.vue?vue&type=script&lang=js&\n");

/***/ })

})