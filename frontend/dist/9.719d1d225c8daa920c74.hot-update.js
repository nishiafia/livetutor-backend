webpackHotUpdate(9,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/PhoneField.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/PhoneField.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      phoneFieldForm: \"\",\n      countryCode: \"\",\n      requiredRules: [function (v) {\n        return !!v || \"This Field is Required\";\n      }],\n      countries: [{\n        text: \"Bangladesh\",\n        value: \"bd\",\n        phoneCode: \"+88\",\n        icon: \"flagBD\",\n        maxDigit: 11\n      }]\n    };\n  },\n  computed: {\n    countryList: function countryList() {\n      return this.countries.map(function (country) {\n        return _objectSpread(_objectSpread({}, country), {}, {\n          icon: \"$vuetify.icons.\".concat(country.icon)\n        });\n      });\n    },\n    phoneRules: function phoneRules() {\n      return [function (v) {\n        return !!v || \"Phone is required\";\n      }, function (v) {\n        return /^\\d{11}$/.test(v) || \"Phone must be 11 digits\";\n      }];\n    }\n  },\n  methods: {\n    handleInput: function handleInput(e) {\n      this.$emit(\"input\", \"\".concat(this.countryCode).concat(e));\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZ2xvYmFsL1Bob25lRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9QaG9uZUZpZWxkLnZ1ZT9lNjhmIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtZm9ybSByZWY9XCJwaG9uZUZpZWxkRm9ybVwiIGxhenktdmFsaWRhdGlvbj5cbiAgICA8di1yb3cgY2xhc3M9XCJkLWZsZXgtaW5saW5lXCI+XG4gICAgICA8di1jb2wgY29scz1cIjEyXCIgbWQ9XCIzXCI+XG4gICAgICAgIDx2LXNlbGVjdFxuICAgICAgICAgIDppdGVtcz1cImNvdW50cnlMaXN0XCJcbiAgICAgICAgICB2LW1vZGVsPVwiY291bnRyeUNvZGVcIlxuICAgICAgICAgIGl0ZW0tdmFsdWU9XCJwaG9uZUNvZGVcIlxuICAgICAgICAgIDpydWxlPVwicmVxdWlyZWRSdWxlc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgI2l0ZW09XCJ7IGl0ZW0gfVwiPlxuICAgICAgICAgICAgPHYtaWNvbiBjbGFzcz1cIm14LTJcIj4ge3sgaXRlbS5pY29uIH19IDwvdi1pY29uXG4gICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJteC0yXCI+IHt7IGl0ZW0udGV4dCB9fSA8L3NwYW4+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8dGVtcGxhdGUgI3NlbGVjdGlvbj1cInsgaXRlbSB9XCI+XG4gICAgICAgICAgICA8di1pY29uIGNsYXNzPVwibXgtMlwiPiB7eyBpdGVtLmljb24gfX0gPC92LWljb25cbiAgICAgICAgICAgID48c3BhbiBjbGFzcz1cIm14LTJcIj4ge3sgaXRlbS5waG9uZUNvZGUgfX0gPC9zcGFuPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvdi1zZWxlY3Q+XG4gICAgICA8L3YtY29sPlxuICAgICAgPHYtY29sIGNvbHM9XCIxMlwiIG1kPVwiOVwiIGNsYXNzPVwibXgtbWQtMCBwbC1tZC0wXCI+XG4gICAgICAgIDx2LXRleHQtZmllbGQgQGlucHV0PVwiaGFuZGxlSW5wdXRcIiA6cnVsZXM9XCJwaG9uZVJ1bGVzXCI+PC92LXRleHQtZmllbGQ+XG4gICAgICA8L3YtY29sPiA8L3Ytcm93XG4gID48L3YtZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBob25lRmllbGRGb3JtOiBcIlwiLFxuICAgICAgY291bnRyeUNvZGU6IFwiXCIsXG4gICAgICByZXF1aXJlZFJ1bGVzOiBbKHYpID0+ICEhdiB8fCBcIlRoaXMgRmllbGQgaXMgUmVxdWlyZWRcIl0sXG4gICAgICBjb3VudHJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQmFuZ2xhZGVzaFwiLFxuICAgICAgICAgIHZhbHVlOiBcImJkXCIsXG4gICAgICAgICAgcGhvbmVDb2RlOiBcIis4OFwiLFxuICAgICAgICAgIGljb246IFwiZmxhZ0JEXCIsXG4gICAgICAgICAgbWF4RGlnaXQ6IDExLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGNvdW50cnlMaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuY291bnRyaWVzLm1hcCgoY291bnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLmNvdW50cnksXG4gICAgICAgICAgaWNvbjogYCR2dWV0aWZ5Lmljb25zLiR7Y291bnRyeS5pY29ufWAsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgcGhvbmVSdWxlcygpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICh2KSA9PiAhIXYgfHwgXCJQaG9uZSBpcyByZXF1aXJlZFwiLFxuICAgICAgICAodikgPT4gL15cXGR7MTF9JC8udGVzdCh2KSB8fCBcIlBob25lIG11c3QgYmUgMTEgZGlnaXRzXCIsXG4gICAgICBdO1xuICAgIH0sXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVJbnB1dChlKSB7XG4gICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgYCR7dGhpcy5jb3VudHJ5Q29kZX0ke2V9YCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFMQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWxDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/global/PhoneField.vue?vue&type=script&lang=js&\n");

/***/ })

})