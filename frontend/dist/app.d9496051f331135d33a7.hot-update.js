webpackHotUpdate("app",{

/***/ "./src/store/UserStore.js":
/*!********************************!*\
  !*** ./src/store/UserStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: {\n    access: localStorage.getItem(\"access\") || null,\n    refresh: localStorage.getItem(\"refresh\") || null,\n    username: \"\",\n    fullName: \"\",\n    authenticated: false\n  },\n  actions: {\n    login: function login(_ref, _ref2) {\n      var commit = _ref.commit,\n          dispatch = _ref.dispatch;\n      var phone = _ref2.phone,\n          password = _ref2.password;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/token/\", {\n          phone: phone,\n          password: password\n        }).then(function (res) {\n          var _res$data = res.data,\n              access = _res$data.access,\n              refresh = _res$data.refresh;\n          commit(\"loadTokens\", {\n            access: access,\n            refresh: refresh\n          });\n        }).then(function () {\n          return dispatch(\"validate\").then(function () {\n            return resolve();\n          });\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    },\n    register: function register(_ref3, _ref4) {\n      var commit = _ref3.commit,\n          dispatch = _ref3.dispatch;\n      var phone = _ref4.phone,\n          password = _ref4.password;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/register/\", {\n          phone: phone,\n          password: password\n        }).then(function () {\n          dispatch(\"login\", {\n            phone: phone,\n            password: password\n          }).then(function () {\n            return resolve();\n          });\n        });\n      }).catch(function (err) {\n        return reject(err);\n      });\n    },\n    validate: function validate(_ref5) {\n      var state = _ref5.state,\n          commit = _ref5.commit,\n          dispatch = _ref5.dispatch;\n      return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"users/verify/\", null, {\n        headers: {\n          Authorization: \"Bearer \".concat(state.access)\n        }\n      }).then(function (res) {\n        return commit(\"loadUser\", {\n          username: res.data.username\n        });\n      }).then(function () {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers[\"Authorization\"] = \"Bearer \".concat(state.access);\n      }).then(function () {\n        dispatch(\"assignments/get\", null, {\n          root: true\n        });\n        dispatch(\"exams/get\", null, {\n          root: true\n        });\n        dispatch(\"notes/get\", null, {\n          root: true\n        });\n        dispatch(\"classes/get\", null, {\n          root: true\n        });\n        dispatch(\"meetings/get\", null, {\n          root: true\n        });\n      }).catch(function () {\n        return dispatch(\"logout\");\n      });\n    },\n    logout: function logout(_ref6) {\n      var commit = _ref6.commit;\n      commit(\"clear\");\n    }\n  },\n  mutations: {\n    loadTokens: function loadTokens(state, _ref7) {\n      var access = _ref7.access,\n          refresh = _ref7.refresh;\n      state.access = access;\n      state.refresh = refresh;\n      localStorage.setItem(\"access\", access);\n      localStorage.setItem(\"refresh\", refresh);\n    },\n    loadUser: function loadUser(state, _ref8) {\n      var username = _ref8.username;\n      state.username = username;\n      state.authenticated = true;\n    },\n    clear: function clear(state) {\n      state.username = \"\";\n      state.access = \"\";\n      state.refresh = \"\";\n      state.authenticated = false;\n      localStorage.removeItem(\"access\");\n      localStorage.removeItem(\"refresh\");\n      _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers[\"Authorization\"] = \"\";\n    }\n  },\n  getters: {\n    getAccessToken: function getAccessToken(state) {\n      return state.access;\n    },\n    getRefreshToken: function getRefreshToken(state) {\n      return state.refresh;\n    },\n    getUsername: function getUsername(state) {\n      return state.username;\n    },\n    userIsAuthenticated: function userIsAuthenticated(state) {\n      return state.authenticated;\n    },\n    getUserId: function getUserId(state) {\n      return state.id;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvVXNlclN0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1VzZXJTdG9yZS5qcz9jMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGFjY2VzczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIikgfHwgbnVsbCxcbiAgICByZWZyZXNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgfHwgbnVsbCxcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBmdWxsTmFtZTogXCJcIixcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvZ2luKHsgY29tbWl0LCBkaXNwYXRjaCB9LCB7IHBob25lLCBwYXNzd29yZCB9KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpXG4gICAgICAgICAgLnBvc3QoXCIvdG9rZW4vXCIsIHsgcGhvbmU6IHBob25lLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGFjY2VzcywgcmVmcmVzaCB9ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb21taXQoXCJsb2FkVG9rZW5zXCIsIHsgYWNjZXNzLCByZWZyZXNoIH0pO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goXCJ2YWxpZGF0ZVwiKS50aGVuKCgpID0+IHJlc29sdmUoKSkpXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVnaXN0ZXIoeyBjb21taXQsIGRpc3BhdGNoIH0sIHsgcGhvbmUsIHBhc3N3b3JkIH0pIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBhcGkucG9zdChcIi9yZWdpc3Rlci9cIiwgeyBwaG9uZTogcGhvbmUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICBkaXNwYXRjaChcImxvZ2luXCIsIHsgcGhvbmU6IHBob25lLCBwYXNzd29yZDogcGFzc3dvcmQgfSkudGhlbigoKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcbiAgICB9LFxuICAgIHZhbGlkYXRlKHsgc3RhdGUsIGNvbW1pdCwgZGlzcGF0Y2ggfSkge1xuICAgICAgcmV0dXJuIGFwaVxuICAgICAgICAucG9zdChcInVzZXJzL3ZlcmlmeS9cIiwgbnVsbCwge1xuICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3N0YXRlLmFjY2Vzc31gIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IGNvbW1pdChcImxvYWRVc2VyXCIsIHsgdXNlcm5hbWU6IHJlcy5kYXRhLnVzZXJuYW1lIH0pKVxuICAgICAgICAudGhlbigoKSA9PiAoYXBpLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3N0YXRlLmFjY2Vzc31gKSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKFwiYXNzaWdubWVudHMvZ2V0XCIsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KTtcbiAgICAgICAgICBkaXNwYXRjaChcImV4YW1zL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goXCJub3Rlcy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKFwiY2xhc3Nlcy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKFwibWVldGluZ3MvZ2V0XCIsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goXCJsb2dvdXRcIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgbG9nb3V0KHsgY29tbWl0IH0pIHtcbiAgICAgIGNvbW1pdChcImNsZWFyXCIpO1xuICAgIH0sXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIGxvYWRUb2tlbnMoc3RhdGUsIHsgYWNjZXNzLCByZWZyZXNoIH0pIHtcbiAgICAgIHN0YXRlLmFjY2VzcyA9IGFjY2VzcztcbiAgICAgIHN0YXRlLnJlZnJlc2ggPSByZWZyZXNoO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NcIiwgYWNjZXNzKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicmVmcmVzaFwiLCByZWZyZXNoKTtcbiAgICB9LFxuICAgIGxvYWRVc2VyKHN0YXRlLCB7IHVzZXJuYW1lIH0pIHtcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGVkID0gdHJ1ZTtcbiAgICB9LFxuICAgIGNsZWFyKHN0YXRlKSB7XG4gICAgICBzdGF0ZS51c2VybmFtZSA9IFwiXCI7XG4gICAgICBzdGF0ZS5hY2Nlc3MgPSBcIlwiO1xuICAgICAgc3RhdGUucmVmcmVzaCA9IFwiXCI7XG4gICAgICBzdGF0ZS5hdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFjY2Vzc1wiKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwicmVmcmVzaFwiKTtcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IFwiXCI7XG4gICAgfSxcbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGdldEFjY2Vzc1Rva2VuOiAoc3RhdGUpID0+IHN0YXRlLmFjY2VzcyxcbiAgICBnZXRSZWZyZXNoVG9rZW46IChzdGF0ZSkgPT4gc3RhdGUucmVmcmVzaCxcbiAgICBnZXRVc2VybmFtZTogKHN0YXRlKSA9PiBzdGF0ZS51c2VybmFtZSxcbiAgICB1c2VySXNBdXRoZW50aWNhdGVkOiAoc3RhdGUpID0+IHN0YXRlLmF1dGhlbnRpY2F0ZWQsXG4gICAgZ2V0VXNlcklkOiAoc3RhdGUpID0+IHN0YXRlLmlkLFxuICB9LFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXhDQTtBQTBDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUF4RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/UserStore.js\n");

/***/ })

})