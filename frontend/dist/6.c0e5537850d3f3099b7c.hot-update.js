webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/PhoneField.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/PhoneField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    rules: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    }\n  },\n  data: function data() {\n    return {\n      phoneFieldForm: \"\",\n      countryCode: \"+88\",\n      requiredRules: [function (v) {\n        return !!v || \"This Field is Required\";\n      }],\n      countries: []\n    };\n  },\n  computed: {\n    phoneRules: function phoneRules() {\n      return [].concat(_toConsumableArray(this.rules), [function (v) {\n        return !!v || \"Phone is required\";\n      }, function (v) {\n        return /^\\d{11}$/.test(v) || \"Phone must be 11 digits\";\n      }]);\n    },\n    valid: function valid() {\n      return this.$refs.phoneFieldForm.validate();\n    }\n  },\n  created: function created() {\n    this.loadCountries();\n  },\n  methods: {\n    loadCountries: function loadCountries() {\n      var _this = this;\n\n      this.$api.get(\"/locations/countries/\").then(function (res) {\n        _this.countries = res.data;\n      });\n    },\n    handleInput: function handleInput(e) {\n      this.$emit(\"input\", \"\".concat(this.countryCode).concat(e));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL1Bob25lRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9QaG9uZUZpZWxkLnZ1ZT9lNjhmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSByZWY9XCJwaG9uZUZpZWxkRm9ybVwiPlxuICAgIDx2LXJvdyBjbGFzcz1cImQtZmxleC1pbmxpbmVcIj5cbiAgICAgIDx2LWNvbCBjb2xzPVwiNVwiIGxnPVwiM1wiPlxuICAgICAgICA8di1zZWxlY3RcbiAgICAgICAgICA6aXRlbXM9XCJjb3VudHJpZXNcIlxuICAgICAgICAgIHYtbW9kZWw9XCJjb3VudHJ5Q29kZVwiXG4gICAgICAgICAgaXRlbS12YWx1ZT1cInBob25lX2NvZGVcIlxuICAgICAgICAgIDpydWxlcz1cInJlcXVpcmVkUnVsZXNcIlxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlICNpdGVtPVwieyBpdGVtIH1cIj5cbiAgICAgICAgICAgIDx2LWltZyB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMTZcIiB2LWh0bWw9XCJpdGVtLmZsYWdcIj48L3YtaW1nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJteC0yXCI+IHt7IGl0ZW0ubmFtZSB9fSA8L3NwYW4+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgI3NlbGVjdGlvbj1cInsgaXRlbSB9XCI+XG4gICAgICAgICAgICA8di1pbWcgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjE2XCIgdi1odG1sPVwiaXRlbS5mbGFnXCI+PC92LWltZz5cblxuICAgICAgICAgICAgPCEtLSA8di1pY29uIGNsYXNzPVwibXgtMlwiPiB7eyBpdGVtLmljb24gfX0gPC92LWljb25cbiAgICAgICAgICAgID4gLS0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm14LTJcIj4ge3sgaXRlbS5waG9uZV9jb2RlIH19IDwvc3Bhbj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3Ytc2VsZWN0PlxuICAgICAgPC92LWNvbD5cbiAgICAgIDx2LWNvbCBjb2xzPVwiN1wiIGxnPVwiOVwiIGNsYXNzPVwibXgtbWQtMCBwbC1tZC0wXCI+XG4gICAgICAgIDx2LXRleHQtZmllbGQgQGlucHV0PVwiaGFuZGxlSW5wdXRcIiA6cnVsZXM9XCJwaG9uZVJ1bGVzXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L3YtY29sPiA8L3Ytcm93XG4gID48L3YtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgcnVsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW10sXG4gICAgfSxcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGhvbmVGaWVsZEZvcm06IFwiXCIsXG4gICAgICBjb3VudHJ5Q29kZTogXCIrODhcIixcbiAgICAgIHJlcXVpcmVkUnVsZXM6IFsodikgPT4gISF2IHx8IFwiVGhpcyBGaWVsZCBpcyBSZXF1aXJlZFwiXSxcbiAgICAgIGNvdW50cmllczogW10sXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHBob25lUnVsZXMoKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi50aGlzLnJ1bGVzLFxuICAgICAgICAodikgPT4gISF2IHx8IFwiUGhvbmUgaXMgcmVxdWlyZWRcIixcbiAgICAgICAgKHYpID0+IC9eXFxkezExfSQvLnRlc3QodikgfHwgXCJQaG9uZSBtdXN0IGJlIDExIGRpZ2l0c1wiLFxuICAgICAgXTtcbiAgICB9LFxuICAgIHZhbGlkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHJlZnMucGhvbmVGaWVsZEZvcm0udmFsaWRhdGUoKTtcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubG9hZENvdW50cmllcygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgbG9hZENvdW50cmllcygpIHtcbiAgICAgIHRoaXMuJGFwaS5nZXQoXCIvbG9jYXRpb25zL2NvdW50cmllcy9cIikudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gcmVzLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGhhbmRsZUlucHV0KGUpIHtcbiAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCBgJHt0aGlzLmNvdW50cnlDb2RlfSR7ZX1gKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuPC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBL0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/PhoneField.vue?vue&type=script&lang=js&\n");

/***/ })

})