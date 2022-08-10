webpackHotUpdate("app",{

/***/ "./src/store/UserStore.js":
/*!********************************!*\
  !*** ./src/store/UserStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: {\n    access: localStorage.getItem(\"access\") || null,\n    refresh: localStorage.getItem(\"refresh\") || null,\n    username: \"\",\n    fullName: \"\",\n    authenticated: false\n  },\n  actions: {\n    login: function login(_ref, _ref2) {\n      var commit = _ref.commit,\n          dispatch = _ref.dispatch;\n      var phone = _ref2.phone,\n          password = _ref2.password;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/token/\", {\n          phone: phone,\n          password: password\n        }).then(function (res) {\n          var _res$data = res.data,\n              access = _res$data.access,\n              refresh = _res$data.refresh;\n          commit(\"loadTokens\", {\n            access: access,\n            refresh: refresh\n          });\n        }).then(function () {\n          return dispatch(\"validate\").then(function () {\n            return resolve();\n          });\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    },\n    register: function register(_ref3, _ref4) {\n      var commit = _ref3.commit,\n          dispatch = _ref3.dispatch;\n      var phone = _ref4.phone,\n          password = _ref4.password;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/register/\", {\n          phone: phone,\n          password: password\n        }).then(function () {\n          dispatch(\"login\", {\n            phone: phone,\n            password: password\n          }).then(function () {\n            return resolve();\n          });\n        });\n      }).catch(function (err) {\n        return reject(err);\n      });\n    },\n    validate: function validate(_ref5) {\n      var state = _ref5.state,\n          commit = _ref5.commit,\n          dispatch = _ref5.dispatch;\n      return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"users/verify/\", null, {\n        headers: {\n          Authorization: \"Bearer \".concat(state.access)\n        }\n      }).then(function (res) {\n        return commit(\"loadUser\", {\n          username: res.data.username,\n          fullName: res.data.name\n        });\n      }).then(function () {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers[\"Authorization\"] = \"Bearer \".concat(state.access);\n      }).then(function () {\n        dispatch(\"assignments/get\", null, {\n          root: true\n        });\n        dispatch(\"exams/get\", null, {\n          root: true\n        });\n        dispatch(\"notes/get\", null, {\n          root: true\n        });\n        dispatch(\"classes/get\", null, {\n          root: true\n        });\n        dispatch(\"meetings/get\", null, {\n          root: true\n        });\n      }).catch(function () {\n        return dispatch(\"logout\");\n      });\n    },\n    logout: function logout(_ref6) {\n      var commit = _ref6.commit;\n      commit(\"clear\");\n    }\n  },\n  mutations: {\n    loadTokens: function loadTokens(state, _ref7) {\n      var access = _ref7.access,\n          refresh = _ref7.refresh;\n      state.access = access;\n      state.refresh = refresh;\n      localStorage.setItem(\"access\", access);\n      localStorage.setItem(\"refresh\", refresh);\n    },\n    loadUser: function loadUser(state, _ref8) {\n      var username = _ref8.username,\n          fullName = _ref8.fullName;\n      state.username = username;\n      state.authenticated = true;\n      state.fullName = fullName;\n    },\n    clear: function clear(state) {\n      state.username = \"\";\n      state.access = \"\";\n      state.refresh = \"\";\n      state.authenticated = false;\n      localStorage.removeItem(\"access\");\n      localStorage.removeItem(\"refresh\");\n      _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers[\"Authorization\"] = \"\";\n    }\n  },\n  getters: {\n    getAccessToken: function getAccessToken(state) {\n      return state.access;\n    },\n    getRefreshToken: function getRefreshToken(state) {\n      return state.refresh;\n    },\n    getUsername: function getUsername(state) {\n      return state.username;\n    },\n    userIsAuthenticated: function userIsAuthenticated(state) {\n      return state.authenticated;\n    },\n    getUserId: function getUserId(state) {\n      return state.id;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvVXNlclN0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1VzZXJTdG9yZS5qcz9jMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGFjY2VzczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIikgfHwgbnVsbCxcbiAgICByZWZyZXNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgfHwgbnVsbCxcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBmdWxsTmFtZTogXCJcIixcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvZ2luKHsgY29tbWl0LCBkaXNwYXRjaCB9LCB7IHBob25lLCBwYXNzd29yZCB9KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpXG4gICAgICAgICAgLnBvc3QoXCIvdG9rZW4vXCIsIHsgcGhvbmU6IHBob25lLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGFjY2VzcywgcmVmcmVzaCB9ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb21taXQoXCJsb2FkVG9rZW5zXCIsIHsgYWNjZXNzLCByZWZyZXNoIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goXCJ2YWxpZGF0ZVwiKS50aGVuKCgpID0+IHJlc29sdmUoKSkpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVnaXN0ZXIoeyBjb21taXQsIGRpc3BhdGNoIH0sIHsgcGhvbmUsIHBhc3N3b3JkIH0pIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucG9zdChcIi9yZWdpc3Rlci9cIiwgeyBwaG9uZTogcGhvbmUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcImxvZ2luXCIsIHsgcGhvbmU6IHBob25lLCBwYXNzd29yZDogcGFzc3dvcmQgfSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcbiAgICB9LFxuICAgIHZhbGlkYXRlKHsgc3RhdGUsIGNvbW1pdCwgZGlzcGF0Y2ggfSkge1xuICAgICAgcmV0dXJuIGFwaVxuICAgICAgICAucG9zdChcInVzZXJzL3ZlcmlmeS9cIiwgbnVsbCwge1xuICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3N0YXRlLmFjY2Vzc31gIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IGNvbW1pdChcImxvYWRVc2VyXCIsIHsgdXNlcm5hbWU6IHJlcy5kYXRhLnVzZXJuYW1lLCBmdWxsTmFtZTogcmVzLmRhdGEubmFtZSB9KSlcbiAgICAgICAgLnRoZW4oKCkgPT4gKGFwaS5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IGBCZWFyZXIgJHtzdGF0ZS5hY2Nlc3N9YCkpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcImFzc2lnbm1lbnRzL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goXCJleGFtcy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKFwibm90ZXMvZ2V0XCIsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KTtcbiAgICAgICAgICBkaXNwYXRjaChcImNsYXNzZXMvZ2V0XCIsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KTtcbiAgICAgICAgICBkaXNwYXRjaChcIm1lZXRpbmdzL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGRpc3BhdGNoKFwibG9nb3V0XCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxvZ291dCh7IGNvbW1pdCB9KSB7XG4gICAgICBjb21taXQoXCJjbGVhclwiKTtcbiAgICB9LFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBsb2FkVG9rZW5zKHN0YXRlLCB7IGFjY2VzcywgcmVmcmVzaCB9KSB7XG4gICAgICBzdGF0ZS5hY2Nlc3MgPSBhY2Nlc3M7XG4gICAgICBzdGF0ZS5yZWZyZXNoID0gcmVmcmVzaDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzXCIsIGFjY2Vzcyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2hcIiwgcmVmcmVzaCk7XG4gICAgfSxcbiAgICBsb2FkVXNlcihzdGF0ZSwgeyB1c2VybmFtZSwgZnVsbE5hbWUgfSkge1xuICAgICAgc3RhdGUudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgICAgc3RhdGUuZnVsbE5hbWUgPSBmdWxsTmFtZVxuICAgIH0sXG4gICAgY2xlYXIoc3RhdGUpIHtcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gXCJcIjtcbiAgICAgIHN0YXRlLmFjY2VzcyA9IFwiXCI7XG4gICAgICBzdGF0ZS5yZWZyZXNoID0gXCJcIjtcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJyZWZyZXNoXCIpO1xuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJcIjtcbiAgICB9LFxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgZ2V0QWNjZXNzVG9rZW46IChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzLFxuICAgIGdldFJlZnJlc2hUb2tlbjogKHN0YXRlKSA9PiBzdGF0ZS5yZWZyZXNoLFxuICAgIGdldFVzZXJuYW1lOiAoc3RhdGUpID0+IHN0YXRlLnVzZXJuYW1lLFxuICAgIHVzZXJJc0F1dGhlbnRpY2F0ZWQ6IChzdGF0ZSkgPT4gc3RhdGUuYXV0aGVudGljYXRlZCxcbiAgICBnZXRVc2VySWQ6IChzdGF0ZSkgPT4gc3RhdGUuaWQsXG4gIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF4Q0E7QUEwQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQXpFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/UserStore.js\n");

/***/ })

})