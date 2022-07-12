webpackHotUpdate("app",{

/***/ "./src/store/UserStore.js":
/*!********************************!*\
  !*** ./src/store/UserStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: {\n    access: localStorage.getItem(\"access\") || null,\n    refresh: localStorage.getItem(\"refresh\") || null,\n    username: \"\",\n    authenticated: false\n  },\n  actions: {\n    login: function login(_ref, _ref2) {\n      var _this = this;\n\n      var commit = _ref.commit,\n          dispatch = _ref.dispatch;\n      var phone = _ref2.phone,\n          password = _ref2.password;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/token/\", {\n          phone: phone,\n          password: password\n        }).then(function (res) {\n          console.log(_this);\n          var _res$data = res.data,\n              access = _res$data.access,\n              refresh = _res$data.refresh;\n          commit(\"loadTokens\", {\n            access: access,\n            refresh: refresh\n          });\n        }).then(function () {\n          return dispatch(\"validate\").then(function () {\n            return resolve();\n          });\n        }).catch(function (err) {\n          return reject(err);\n        });\n      });\n    },\n    register: function register(_ref3, _ref4) {\n      var commit = _ref3.commit,\n          dispatch = _ref3.dispatch;\n      var phone = _ref4.phone,\n          password = _ref4.password;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"/register/\", {\n          phone: phone,\n          password: password\n        }).then(function () {\n          dispatch(\"login\", {\n            phone: phone,\n            password: password\n          }).then(function () {\n            return resolve();\n          });\n        });\n      }).catch(function (err) {\n        return reject(err);\n      });\n    },\n    validate: function validate(_ref5) {\n      var state = _ref5.state,\n          commit = _ref5.commit,\n          dispatch = _ref5.dispatch;\n      return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"users/verify/\", null, {\n        headers: {\n          Authorization: \"Bearer \".concat(state.access)\n        }\n      }).then(function (res) {\n        return commit(\"loadUser\", {\n          username: res.data.username\n        });\n      }).then(function () {\n        return _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers[\"Authorization\"] = \"Bearer \".concat(state.access);\n      }).then(function () {\n        dispatch(\"assignments/get\", null, {\n          root: true\n        });\n        dispatch(\"exams/get\", null, {\n          root: true\n        });\n        dispatch(\"notes/get\", null, {\n          root: true\n        });\n        dispatch(\"classes/get\", null, {\n          root: true\n        });\n        dispatch(\"meetings/get\", null, {\n          root: true\n        });\n      }).catch(function () {\n        return dispatch(\"logout\");\n      });\n    },\n    logout: function logout(_ref6) {\n      var commit = _ref6.commit;\n      commit(\"clear\");\n    }\n  },\n  mutations: {\n    loadTokens: function loadTokens(state, _ref7) {\n      var access = _ref7.access,\n          refresh = _ref7.refresh;\n      state.access = access;\n      state.refresh = refresh;\n      localStorage.setItem(\"access\", access);\n      localStorage.setItem(\"refresh\", refresh);\n    },\n    loadUser: function loadUser(state, _ref8) {\n      var username = _ref8.username;\n      state.username = username;\n      state.authenticated = true;\n    },\n    clear: function clear(state) {\n      state.username = \"\";\n      state.access = \"\";\n      state.refresh = \"\";\n      state.authenticated = false;\n      localStorage.removeItem(\"access\");\n      localStorage.removeItem(\"refresh\");\n      _services_api__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults.headers[\"Authorization\"] = \"\";\n    }\n  },\n  getters: {\n    getAccessToken: function getAccessToken(state) {\n      return state.access;\n    },\n    getRefreshToken: function getRefreshToken(state) {\n      return state.refresh;\n    },\n    getUsername: function getUsername(state) {\n      return state.username;\n    },\n    userIsAuthenticated: function userIsAuthenticated(state) {\n      return state.authenticated;\n    },\n    getUserId: function getUserId(state) {\n      return state.id;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvVXNlclN0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1VzZXJTdG9yZS5qcz9jMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGFjY2VzczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIikgfHwgbnVsbCxcbiAgICByZWZyZXNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgfHwgbnVsbCxcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvZ2luKHsgY29tbWl0LCBkaXNwYXRjaCB9LCB7IHBob25lLCBwYXNzd29yZCB9KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gYXBpXG4gICAgICAgICAgLnBvc3QoXCIvdG9rZW4vXCIsIHsgcGhvbmU6IHBob25lLCBwYXNzd29yZDogcGFzc3dvcmQgfSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IHsgYWNjZXNzLCByZWZyZXNoIH0gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNvbW1pdChcImxvYWRUb2tlbnNcIiwgeyBhY2Nlc3MsIHJlZnJlc2ggfSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoKSA9PiBkaXNwYXRjaChcInZhbGlkYXRlXCIpLnRoZW4oKCkgPT4gcmVzb2x2ZSgpKSlcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICByZWdpc3Rlcih7IGNvbW1pdCwgZGlzcGF0Y2ggfSwgeyBwaG9uZSwgcGFzc3dvcmQgfSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGFwaS5wb3N0KFwiL3JlZ2lzdGVyL1wiLCB7IHBob25lOiBwaG9uZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGRpc3BhdGNoKFwibG9naW5cIiwgeyBwaG9uZTogcGhvbmUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KS50aGVuKCgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSkuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xuICAgIH0sXG4gICAgdmFsaWRhdGUoeyBzdGF0ZSwgY29tbWl0LCBkaXNwYXRjaCB9KSB7XG4gICAgICByZXR1cm4gYXBpXG4gICAgICAgIC5wb3N0KFwidXNlcnMvdmVyaWZ5L1wiLCBudWxsLCB7XG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c3RhdGUuYWNjZXNzfWAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gY29tbWl0KFwibG9hZFVzZXJcIiwgeyB1c2VybmFtZTogcmVzLmRhdGEudXNlcm5hbWUgfSkpXG4gICAgICAgIC50aGVuKCgpID0+IChhcGkuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7c3RhdGUuYWNjZXNzfWApKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goXCJhc3NpZ25tZW50cy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKFwiZXhhbXMvZ2V0XCIsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KTtcbiAgICAgICAgICBkaXNwYXRjaChcIm5vdGVzL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goXCJjbGFzc2VzL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goXCJtZWV0aW5ncy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHJldHVybiBkaXNwYXRjaChcImxvZ291dFwiKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBsb2dvdXQoeyBjb21taXQgfSkge1xuICAgICAgY29tbWl0KFwiY2xlYXJcIik7XG4gICAgfSxcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgbG9hZFRva2VucyhzdGF0ZSwgeyBhY2Nlc3MsIHJlZnJlc2ggfSkge1xuICAgICAgc3RhdGUuYWNjZXNzID0gYWNjZXNzO1xuICAgICAgc3RhdGUucmVmcmVzaCA9IHJlZnJlc2g7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjY2Vzc1wiLCBhY2Nlc3MpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWZyZXNoXCIsIHJlZnJlc2gpO1xuICAgIH0sXG4gICAgbG9hZFVzZXIoc3RhdGUsIHsgdXNlcm5hbWUgfSkge1xuICAgICAgc3RhdGUudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgY2xlYXIoc3RhdGUpIHtcbiAgICAgIHN0YXRlLnVzZXJuYW1lID0gXCJcIjtcbiAgICAgIHN0YXRlLmFjY2VzcyA9IFwiXCI7XG4gICAgICBzdGF0ZS5yZWZyZXNoID0gXCJcIjtcbiAgICAgIHN0YXRlLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJyZWZyZXNoXCIpO1xuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gXCJcIjtcbiAgICB9LFxuICB9LFxuICBnZXR0ZXJzOiB7XG4gICAgZ2V0QWNjZXNzVG9rZW46IChzdGF0ZSkgPT4gc3RhdGUuYWNjZXNzLFxuICAgIGdldFJlZnJlc2hUb2tlbjogKHN0YXRlKSA9PiBzdGF0ZS5yZWZyZXNoLFxuICAgIGdldFVzZXJuYW1lOiAoc3RhdGUpID0+IHN0YXRlLnVzZXJuYW1lLFxuICAgIHVzZXJJc0F1dGhlbnRpY2F0ZWQ6IChzdGF0ZSkgPT4gc3RhdGUuYXV0aGVudGljYXRlZCxcbiAgICBnZXRVc2VySWQ6IChzdGF0ZSkgPT4gc3RhdGUuaWQsXG4gIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXpDQTtBQTJDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUF4RUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/UserStore.js\n");

/***/ })

})