webpackHotUpdate(4,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/fees/FeePaymentSummary.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fees/FeePaymentSummary.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      payments: [],\n      headers: [{\n        text: \"User\",\n        value: \"user\"\n      }, {\n        text: \"January\",\n        value: \"January\"\n      }, {\n        text: \"February\",\n        value: \"February\"\n      }, {\n        text: \"March\",\n        value: \"March\"\n      }, {\n        text: \"April\",\n        value: \"April\"\n      }, {\n        text: \"May\",\n        value: \"May\"\n      }, {\n        text: \"June\",\n        value: \"June\"\n      }, {\n        text: \"July\",\n        value: \"July\"\n      }, {\n        text: \"August\",\n        value: \"August\"\n      }, {\n        text: \"September\",\n        value: \"September\"\n      }, {\n        text: \"October\",\n        value: \"October\"\n      }, {\n        text: \"November\",\n        value: \"November\"\n      }, {\n        text: \"December\",\n        value: \"December\"\n      }, // {\n      //   text: \"Total\",\n      //   value: \"total\",\n      // },\n      {\n        text: \"Action\",\n        value: \"action\"\n      }]\n    };\n  },\n  mounted: function mounted() {\n    this.loadFeeSummary();\n  },\n  methods: {\n    loadFeeSummary: function loadFeeSummary() {\n      var _this = this;\n\n      this.$api.get(\"/rooms/\".concat(this.$route.params.id, \"/payment-summary/\")).then(function (response) {\n        _this.payments = response.data;\n      });\n    }\n  },\n  computed: {\n    summary: function summary() {\n      var summary = this.payments.map(function (r) {\n        return {\n          user: r.id,\n          payments: r.room_user_fees.reduce(function (acc, fee) {\n            if (!acc[fee.month]) {\n              acc[fee.month] = {\n                paid: 0,\n                total: 0\n              };\n            }\n\n            if (fee.room_fee_payment != null) {\n              acc[fee.month].paid += fee.payment_amount;\n            }\n\n            acc[fee.month].total += fee.payment_amount;\n            return acc;\n          }, {})\n        };\n      });\n      return summary;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZmVlcy9GZWVQYXltZW50U3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ZlZVBheW1lbnRTdW1tYXJ5LnZ1ZT9hYjkxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtY2FyZD5cbiAgICA8di1jYXJkLXRpdGxlPlJvb20gRmVlIFN1bW1hcnk8L3YtY2FyZC10aXRsZT5cbiAgICA8di1kYXRhLXRhYmxlIDppdGVtcz1cInN1bW1hcnlcIiA6aGVhZGVycz1cImhlYWRlcnNcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5KYW51YXJ5PVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuSmFudWFyeVwiPlxuICAgICAgICAgIHt7IGl0ZW0ucGF5bWVudHMuSmFudWFyeS5wYWlkIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uRmVicnVhcnk9XCJ7IGl0ZW0gfVwiPlxuICAgICAgICA8c3BhbiB2LWlmPVwiaXRlbS5wYXltZW50cy5GZWJydWFyeVwiPlxuICAgICAgICAgIHt7IGl0ZW0ucGF5bWVudHMuRmVicnVhcnkucGFpZCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLk1hcmNoPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuTWFyY2hcIj4ge3sgaXRlbS5wYXltZW50cy5NYXJjaC5wYWlkIH19PC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5BcHJpbD1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkFwcmlsXCI+IHt7IGl0ZW0ucGF5bWVudHMuQXByaWwucGFpZCB9fTwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uTWF5PVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuTWF5XCI+IHt7IGl0ZW0ucGF5bWVudHMuTWF5LnBhaWQgfX0gPC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDppdGVtLkFwcmlsPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHYtY2hpcFxuICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgIGl0ZW0ucGF5bWVudHMuQXByaWwgJiZcbiAgICAgICAgICAgIGl0ZW0ucGF5bWVudHMuQXByaWwucGFpZCA9PT0gaXRlbS5wYXltZW50cy5BcHJpbC50b3RhbFxuICAgICAgICAgIFwiXG4gICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgZGFya1xuICAgICAgICAgIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMFwiXG4gICAgICAgICAgPnt7IGl0ZW0ucGF5bWVudHMuQXByaWwudG90YWwgfX08L3YtY2hpcFxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDppdGVtLk1heT1cInsgaXRlbSB9XCI+XG4gICAgICAgIDx2LXByb2dyZXNzLWxpbmVhclxuICAgICAgICAgIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICB3aWR0aD1cIjEwMHB4IFwiXG4gICAgICAgICAgOmJ1ZmZlci12YWx1ZT1cIml0ZW0ucGF5bWVudHMuTWF5LnRvdGFsXCJcbiAgICAgICAgICBkYXJrXG4gICAgICAgICAgY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgOnZhbHVlPVwiaXRlbS5wYXltZW50cy5NYXkucGFpZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0ucGF5bWVudHMuTWF5LnRvdGFsIH19PC9zdHJvbmc+PC92LXByb2dyZXNzLWxpbmVhclxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5KdW5lPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuSnVuZVwiPiB7eyBpdGVtLnBheW1lbnRzLkp1bmUucGFpZCB9fTwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uSnVseT1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkp1bHlcIj5cbiAgICAgICAgICB7eyBpdGVtLnBheW1lbnRzLkp1bHkucGFpZCB9fSAvIHt7IGl0ZW0ucGF5bWVudHMuSnVseS50b3RhbCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLkF1Z3VzdD1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkF1Z3VzdFwiPlxuICAgICAgICAgIHt7IGl0ZW0ucGF5bWVudHMuQXVndXN0LnBhaWQgfX08L3NwYW5cbiAgICAgICAgPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5TZXB0ZW1iZXI9XCJ7IGl0ZW0gfVwiPlxuICAgICAgICA8c3BhbiB2LWlmPVwiaXRlbS5wYXltZW50cy5TZXB0ZW1iZXJcIj5cbiAgICAgICAgICB7eyBpdGVtLnBheW1lbnRzLlNlcHRlbWJlci5wYWlkIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uT2N0b2Jlcj1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLk9jdG9iZXJcIj5cbiAgICAgICAgICB7eyBpdGVtLnBheW1lbnRzLk9jdG9iZXIucGFpZCB9fSAvIHt7IGl0ZW0ucGF5bWVudHMuT2N0b2Jlci50b3RhbCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLk5vdmVtYmVyPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHYtdG9vbHRpcD48L3YtdG9vbHRpcD5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuTm92ZW1iZXJcIj5cbiAgICAgICAgICB7eyBpdGVtLnBheW1lbnRzLk5vdmVtYmVyLnBhaWQgfX0gLyB7eyBpdGVtLnBheW1lbnRzLk5vdmVtYmVyLnRvdGFsIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5EZWNlbWJlcj1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkRlY2VtYmVyXCI+XG4gICAgICAgICAge3sgaXRlbS5wYXltZW50cy5EZWNlbWJlci5wYWlkIH19L3t7IGl0ZW0ucGF5bWVudHMuRGVjZW1iZXIudG90YWwgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtZGF0YS10YWJsZT5cbiAgPC92LWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXltZW50czogW10sXG4gICAgICBoZWFkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlVzZXJcIixcbiAgICAgICAgICB2YWx1ZTogXCJ1c2VyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkphbnVhcnlcIixcbiAgICAgICAgICB2YWx1ZTogXCJKYW51YXJ5XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgICAgdmFsdWU6IFwiRmVicnVhcnlcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiTWFyY2hcIixcbiAgICAgICAgICB2YWx1ZTogXCJNYXJjaFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBcHJpbFwiLFxuICAgICAgICAgIHZhbHVlOiBcIkFwcmlsXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk1heVwiLFxuICAgICAgICAgIHZhbHVlOiBcIk1heVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJKdW5lXCIsXG4gICAgICAgICAgdmFsdWU6IFwiSnVuZVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJKdWx5XCIsXG4gICAgICAgICAgdmFsdWU6IFwiSnVseVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBdWd1c3RcIixcbiAgICAgICAgICB2YWx1ZTogXCJBdWd1c3RcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiU2VwdGVtYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IFwiU2VwdGVtYmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk9jdG9iZXJcIixcbiAgICAgICAgICB2YWx1ZTogXCJPY3RvYmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk5vdmVtYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IFwiTm92ZW1iZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiRGVjZW1iZXJcIixcbiAgICAgICAgICB2YWx1ZTogXCJEZWNlbWJlclwiLFxuICAgICAgICB9LFxuICAgICAgICAvLyB7XG4gICAgICAgIC8vICAgdGV4dDogXCJUb3RhbFwiLFxuICAgICAgICAvLyAgIHZhbHVlOiBcInRvdGFsXCIsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkFjdGlvblwiLFxuICAgICAgICAgIHZhbHVlOiBcImFjdGlvblwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMubG9hZEZlZVN1bW1hcnkoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGxvYWRGZWVTdW1tYXJ5KCkge1xuICAgICAgdGhpcy4kYXBpXG4gICAgICAgIC5nZXQoYC9yb29tcy8ke3RoaXMuJHJvdXRlLnBhcmFtcy5pZH0vcGF5bWVudC1zdW1tYXJ5L2ApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGF5bWVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHN1bW1hcnkoKSB7XG4gICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5wYXltZW50cy5tYXAoKHIpID0+ICh7XG4gICAgICAgIHVzZXI6IHIuaWQsXG4gICAgICAgIHBheW1lbnRzOiByLnJvb21fdXNlcl9mZWVzLnJlZHVjZSgoYWNjLCBmZWUpID0+IHtcbiAgICAgICAgICBpZiAoIWFjY1tmZWUubW9udGhdKSB7XG4gICAgICAgICAgICBhY2NbZmVlLm1vbnRoXSA9IHtcbiAgICAgICAgICAgICAgcGFpZDogMCxcbiAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmVlLnJvb21fZmVlX3BheW1lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgYWNjW2ZlZS5tb250aF0ucGFpZCArPSBmZWUucGF5bWVudF9hbW91bnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjY1tmZWUubW9udGhdLnRvdGFsICs9IGZlZS5wYXltZW50X2Ftb3VudDtcbiAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCB7fSksXG4gICAgICB9KSk7XG4gICAgICByZXR1cm4gc3VtbWFyeTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+PC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQTNEQTtBQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBZ0JBO0FBQ0E7QUFuQkE7QUFoRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/fees/FeePaymentSummary.vue?vue&type=script&lang=js&\n");

/***/ })

})