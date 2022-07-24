webpackHotUpdate(4,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/fees/FeePaymentSummary.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fees/FeePaymentSummary.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      payments: [],\n      headers: [{\n        text: \"User\",\n        value: \"user\"\n      }, {\n        text: \"January\",\n        value: \"January\"\n      }, {\n        text: \"February\",\n        value: \"February\"\n      }, {\n        text: \"March\",\n        value: \"March\"\n      }, {\n        text: \"April\",\n        value: \"April\"\n      }, {\n        text: \"May\",\n        value: \"May\"\n      }, {\n        text: \"June\",\n        value: \"June\"\n      }, {\n        text: \"July\",\n        value: \"July\"\n      }, {\n        text: \"August\",\n        value: \"August\"\n      }, {\n        text: \"September\",\n        value: \"September\"\n      }, {\n        text: \"October\",\n        value: \"October\"\n      }, {\n        text: \"November\",\n        value: \"November\"\n      }, {\n        text: \"December\",\n        value: \"December\"\n      }, // {\n      //   text: \"Total\",\n      //   value: \"total\",\n      // },\n      {\n        text: \"Action\",\n        value: \"action\"\n      }]\n    };\n  },\n  created: function created() {\n    this.loadFeeSummary();\n  },\n  methods: {\n    loadFeeSummary: function loadFeeSummary() {\n      var _this = this;\n\n      this.$api.get(\"/rooms/\".concat(this.$route.params.id, \"/payment-summary/\")).then(function (response) {\n        var result = response.data.reduce(function (res, value) {\n          if (!res[value.room_user]) {\n            res[value.room_user] = {\n              user: value.room_user,\n              payments: []\n            };\n          }\n\n          res[value.room_user].payments.push(value);\n          return res;\n        }, []);\n        _this.payments = result;\n      });\n      var summary = this.payments.map(function (r) {\n        return {\n          user: r.user,\n          payments: r.payments.reduce(function (res, value) {\n            if (!res[value.month]) {\n              res[value.month] = {\n                month: value.month,\n                paid: 0,\n                total: 0\n              };\n            }\n\n            res[value.month].paid += value.payment_amount;\n            res[value.month].total += value.amount;\n            return res;\n          }, {})\n        };\n      });\n      return summary.filter(function (s) {\n        return s !== undefined;\n      });\n    }\n  },\n  computed: {\n    summary: function summary() {}\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvZmVlcy9GZWVQYXltZW50U3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL0ZlZVBheW1lbnRTdW1tYXJ5LnZ1ZT9hYjkxIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHYtY2FyZD5cbiAgICA8di1jYXJkLXRpdGxlPlJvb20gRmVlIFN1bW1hcnk8L3YtY2FyZC10aXRsZT5cbiAgICA8di1kYXRhLXRhYmxlIDppdGVtcz1cInN1bW1hcnlcIiA6aGVhZGVycz1cImhlYWRlcnNcIj5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5KYW51YXJ5PVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuSmFudWFyeVwiPlxuICAgICAgICAgIHt7IGl0ZW0ucGF5bWVudHMuSmFudWFyeS5wYWlkIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uRmVicnVhcnk9XCJ7IGl0ZW0gfVwiPlxuICAgICAgICA8c3BhbiB2LWlmPVwiaXRlbS5wYXltZW50cy5GZWJydWFyeVwiPlxuICAgICAgICAgIHt7IGl0ZW0ucGF5bWVudHMuRmVicnVhcnkucGFpZCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLk1hcmNoPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuTWFyY2hcIj4ge3sgaXRlbS5wYXltZW50cy5NYXJjaC5wYWlkIH19PC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5BcHJpbD1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkFwcmlsXCI+IHt7IGl0ZW0ucGF5bWVudHMuQXByaWwucGFpZCB9fTwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uTWF5PVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuTWF5XCI+IHt7IGl0ZW0ucGF5bWVudHMuTWF5LnBhaWQgfX0gPC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDppdGVtLkFwcmlsPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHYtY2hpcFxuICAgICAgICAgIHYtaWY9XCJcbiAgICAgICAgICAgIGl0ZW0ucGF5bWVudHMuQXByaWwgJiZcbiAgICAgICAgICAgIGl0ZW0ucGF5bWVudHMuQXByaWwucGFpZCA9PT0gaXRlbS5wYXltZW50cy5BcHJpbC50b3RhbFxuICAgICAgICAgIFwiXG4gICAgICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICAgICAgZGFya1xuICAgICAgICAgIHN0eWxlPVwiYm9yZGVyLXJhZGl1czogMFwiXG4gICAgICAgICAgPnt7IGl0ZW0ucGF5bWVudHMuQXByaWwudG90YWwgfX08L3YtY2hpcFxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgIDwhLS0gPHRlbXBsYXRlIHYtc2xvdDppdGVtLk1heT1cInsgaXRlbSB9XCI+XG4gICAgICAgIDx2LXByb2dyZXNzLWxpbmVhclxuICAgICAgICAgIGhlaWdodD1cIjI1XCJcbiAgICAgICAgICB3aWR0aD1cIjEwMHB4IFwiXG4gICAgICAgICAgOmJ1ZmZlci12YWx1ZT1cIml0ZW0ucGF5bWVudHMuTWF5LnRvdGFsXCJcbiAgICAgICAgICBkYXJrXG4gICAgICAgICAgY29sb3I9XCJhbWJlclwiXG4gICAgICAgICAgOnZhbHVlPVwiaXRlbS5wYXltZW50cy5NYXkucGFpZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0ucGF5bWVudHMuTWF5LnRvdGFsIH19PC9zdHJvbmc+PC92LXByb2dyZXNzLWxpbmVhclxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPiAtLT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5KdW5lPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuSnVuZVwiPiB7eyBpdGVtLnBheW1lbnRzLkp1bmUucGFpZCB9fTwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uSnVseT1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkp1bHlcIj4ge3sgaXRlbS5wYXltZW50cy5KdWx5LnBhaWQgfX0gPC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5BdWd1c3Q9XCJ7IGl0ZW0gfVwiPlxuICAgICAgICA8c3BhbiB2LWlmPVwiaXRlbS5wYXltZW50cy5BdWd1c3RcIj5cbiAgICAgICAgICB7eyBpdGVtLnBheW1lbnRzLkF1Z3VzdC5wYWlkIH19PC9zcGFuXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgdi1zbG90Oml0ZW0uU2VwdGVtYmVyPVwieyBpdGVtIH1cIj5cbiAgICAgICAgPHNwYW4gdi1pZj1cIml0ZW0ucGF5bWVudHMuU2VwdGVtYmVyXCI+XG4gICAgICAgICAge3sgaXRlbS5wYXltZW50cy5TZXB0ZW1iZXIucGFpZCB9fTwvc3BhblxuICAgICAgICA+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDppdGVtLk9jdG9iZXI9XCJ7IGl0ZW0gfVwiPlxuICAgICAgICA8c3BhbiB2LWlmPVwiaXRlbS5wYXltZW50cy5PY3RvYmVyXCI+XG4gICAgICAgICAge3sgaXRlbS5wYXltZW50cy5PY3RvYmVyLnBhaWQgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5Ob3ZlbWJlcj1cInsgaXRlbSB9XCI+XG4gICAgICAgIDx2LXRvb2x0aXA+PC92LXRvb2x0aXA+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLk5vdmVtYmVyXCI+XG4gICAgICAgICAge3sgaXRlbS5wYXltZW50cy5Ob3ZlbWJlci5wYWlkIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aXRlbS5EZWNlbWJlcj1cInsgaXRlbSB9XCI+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJpdGVtLnBheW1lbnRzLkRlY2VtYmVyXCI+XG4gICAgICAgICAge3sgaXRlbS5wYXltZW50cy5EZWNlbWJlci5wYWlkIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92LWRhdGEtdGFibGU+XG4gIDwvdi1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF5bWVudHM6IFtdLFxuICAgICAgaGVhZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJVc2VyXCIsXG4gICAgICAgICAgdmFsdWU6IFwidXNlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJKYW51YXJ5XCIsXG4gICAgICAgICAgdmFsdWU6IFwiSmFudWFyeVwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJGZWJydWFyeVwiLFxuICAgICAgICAgIHZhbHVlOiBcIkZlYnJ1YXJ5XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIk1hcmNoXCIsXG4gICAgICAgICAgdmFsdWU6IFwiTWFyY2hcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQXByaWxcIixcbiAgICAgICAgICB2YWx1ZTogXCJBcHJpbFwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJNYXlcIixcbiAgICAgICAgICB2YWx1ZTogXCJNYXlcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSnVuZVwiLFxuICAgICAgICAgIHZhbHVlOiBcIkp1bmVcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiSnVseVwiLFxuICAgICAgICAgIHZhbHVlOiBcIkp1bHlcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwiQXVndXN0XCIsXG4gICAgICAgICAgdmFsdWU6IFwiQXVndXN0XCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIlNlcHRlbWJlclwiLFxuICAgICAgICAgIHZhbHVlOiBcIlNlcHRlbWJlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJPY3RvYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IFwiT2N0b2JlclwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJOb3ZlbWJlclwiLFxuICAgICAgICAgIHZhbHVlOiBcIk5vdmVtYmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIkRlY2VtYmVyXCIsXG4gICAgICAgICAgdmFsdWU6IFwiRGVjZW1iZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgLy8ge1xuICAgICAgICAvLyAgIHRleHQ6IFwiVG90YWxcIixcbiAgICAgICAgLy8gICB2YWx1ZTogXCJ0b3RhbFwiLFxuICAgICAgICAvLyB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogXCJBY3Rpb25cIixcbiAgICAgICAgICB2YWx1ZTogXCJhY3Rpb25cIixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxvYWRGZWVTdW1tYXJ5KCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2FkRmVlU3VtbWFyeSgpIHtcbiAgICAgIHRoaXMuJGFwaVxuICAgICAgICAuZ2V0KGAvcm9vbXMvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuaWR9L3BheW1lbnQtc3VtbWFyeS9gKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5kYXRhLnJlZHVjZSgocmVzLCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXNbdmFsdWUucm9vbV91c2VyXSkge1xuICAgICAgICAgICAgICByZXNbdmFsdWUucm9vbV91c2VyXSA9IHtcbiAgICAgICAgICAgICAgICB1c2VyOiB2YWx1ZS5yb29tX3VzZXIsXG4gICAgICAgICAgICAgICAgcGF5bWVudHM6IFtdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzW3ZhbHVlLnJvb21fdXNlcl0ucGF5bWVudHMucHVzaCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgfSwgW10pO1xuICAgICAgICAgIHRoaXMucGF5bWVudHMgPSByZXN1bHQ7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzdW1tYXJ5ID0gdGhpcy5wYXltZW50cy5tYXAoKHIpID0+ICh7XG4gICAgICAgIHVzZXI6IHIudXNlcixcbiAgICAgICAgcGF5bWVudHM6IHIucGF5bWVudHMucmVkdWNlKChyZXMsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXNbdmFsdWUubW9udGhdKSB7XG4gICAgICAgICAgICByZXNbdmFsdWUubW9udGhdID0ge1xuICAgICAgICAgICAgICBtb250aDogdmFsdWUubW9udGgsXG4gICAgICAgICAgICAgIHBhaWQ6IDAsXG4gICAgICAgICAgICAgIHRvdGFsOiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzW3ZhbHVlLm1vbnRoXS5wYWlkICs9IHZhbHVlLnBheW1lbnRfYW1vdW50O1xuICAgICAgICAgIHJlc1t2YWx1ZS5tb250aF0udG90YWwgKz0gdmFsdWUuYW1vdW50O1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sIHt9KSxcbiAgICAgIH0pKTtcblxuICAgICAgcmV0dXJuIHN1bW1hcnkuZmlsdGVyKChzKSA9PiBzICE9PSB1bmRlZmluZWQpO1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgc3VtbWFyeSgpIHt9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+PC9zdHlsZT5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUEzREE7QUFpRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQUE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQURBO0FBN0dBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/fees/FeePaymentSummary.vue?vue&type=script&lang=js&\n");

/***/ })

})