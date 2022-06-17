webpackHotUpdate("app",{

/***/ "./src/store/UserStore.js":
/*!********************************!*\
  !*** ./src/store/UserStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: {\n    access: localStorage.getItem(\"access\") || null,\n    refresh: localStorage.getItem(\"refresh\") || null,\n    username: \"\",\n    authenticated: false\n  },\n  actions: {\n    login: function login(_ref, _ref2) {\n      var commit = _ref.commit,\n          dispatch = _ref.dispatch;\n      var phone = _ref2.phone,\n          password = _ref2.password;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/token/\", {\n        phone: phone,\n        password: password\n      }).then(function (res) {\n        var _res$data = res.data,\n            access = _res$data.access,\n            refresh = _res$data.refresh;\n        commit(\"loadTokens\", {\n          access: access,\n          refresh: refresh\n        });\n      }).then(function () {\n        return dispatch(\"validate\");\n      }).catch(function (err) {\n        return alert(err);\n      }); // .then(() => {\n      //     const { access, refresh } = this.state;\n      //     localStorage.setItem(\"auth\", JSON.stringify({ access, refresh }));\n      // })\n      // .catch((err) => ;\n    },\n    validate: function validate(_ref3) {\n      var state = _ref3.state,\n          commit = _ref3.commit,\n          dispatch = _ref3.dispatch;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"users/verify/\", null, {\n        headers: {\n          Authorization: \"Bearer \".concat(state.access)\n        }\n      }).then(function (res) {\n        return commit(\"loadUser\", {\n          username: res.data.username\n        });\n      }).then(function () {\n        return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers[\"Authorization\"] = \"Bearer \".concat(state.access);\n      }).then(function () {\n        dispatch(\"assignments/get\", null, {\n          root: true\n        });\n        dispatch(\"exams/get\", null, {\n          root: true\n        });\n        dispatch(\"notes/get\", null, {\n          root: true\n        });\n        dispatch(\"classes/get\", null, {\n          root: true\n        });\n        dispatch(\"meetings/get\", null, {\n          root: true\n        });\n      }).catch(function () {\n        alert(\"Could not Login\");\n        return dispatch(\"user/logout\");\n      });\n    },\n    logout: function logout(_ref4) {\n      var commit = _ref4.commit;\n      commit(\"clear\");\n    }\n  },\n  mutations: {\n    loadTokens: function loadTokens(state, _ref5) {\n      var access = _ref5.access,\n          refresh = _ref5.refresh;\n      state.access = access;\n      state.refresh = refresh;\n      localStorage.setItem(\"access\", access);\n      localStorage.setItem(\"refresh\", refresh);\n    },\n    loadUser: function loadUser(state, _ref6) {\n      var username = _ref6.username;\n      state.username = username;\n      state.authenticated = true;\n    },\n    clear: function clear(state) {\n      state.username = \"\";\n      state.access = \"\";\n      state.refresh = \"\";\n      state.authenticated = false;\n      localStorage.removeItem(\"access\");\n      localStorage.removeItem(\"refresh\");\n      _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers[\"Authorization\"] = \"\";\n    }\n  },\n  getters: {\n    getAccessToken: function getAccessToken(state) {\n      return state.access;\n    },\n    getRefreshToken: function getRefreshToken(state) {\n      return state.refresh;\n    },\n    getUsername: function getUsername(state) {\n      return state.username;\n    },\n    userIsAuthenticated: function userIsAuthenticated(state) {\n      return state.authenticated;\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvVXNlclN0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL1VzZXJTdG9yZS5qcz9jMWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lc3BhY2VkOiB0cnVlLFxuICBzdGF0ZToge1xuICAgIGFjY2VzczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NcIikgfHwgbnVsbCxcbiAgICByZWZyZXNoOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZnJlc2hcIikgfHwgbnVsbCxcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIGxvZ2luKHsgY29tbWl0LCBkaXNwYXRjaCB9LCB7IHBob25lLCBwYXNzd29yZCB9KSB7XG4gICAgICByZXR1cm4gYXBpXG4gICAgICAgIC5wb3N0KFwiL3Rva2VuL1wiLCB7IHBob25lOiBwaG9uZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB7IGFjY2VzcywgcmVmcmVzaCB9ID0gcmVzLmRhdGE7XG4gICAgICAgICAgY29tbWl0KFwibG9hZFRva2Vuc1wiLCB7IGFjY2VzcywgcmVmcmVzaCB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goXCJ2YWxpZGF0ZVwiKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVycikpO1xuICAgICAgLy8gLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gICAgIGNvbnN0IHsgYWNjZXNzLCByZWZyZXNoIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFwiLCBKU09OLnN0cmluZ2lmeSh7IGFjY2VzcywgcmVmcmVzaCB9KSk7XG4gICAgICAvLyB9KVxuICAgICAgLy8gLmNhdGNoKChlcnIpID0+IDtcbiAgICB9LFxuXG4gICAgdmFsaWRhdGUoeyBzdGF0ZSwgY29tbWl0LCBkaXNwYXRjaCB9KSB7XG4gICAgICByZXR1cm4gYXBpXG4gICAgICAgIC5wb3N0KFwidXNlcnMvdmVyaWZ5L1wiLCBudWxsLCB7XG4gICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c3RhdGUuYWNjZXNzfWAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gY29tbWl0KFwibG9hZFVzZXJcIiwgeyB1c2VybmFtZTogcmVzLmRhdGEudXNlcm5hbWUgfSkpXG4gICAgICAgIC50aGVuKCgpID0+IChhcGkuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7c3RhdGUuYWNjZXNzfWApKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goXCJhc3NpZ25tZW50cy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICAgIGRpc3BhdGNoKFwiZXhhbXMvZ2V0XCIsIG51bGwsIHsgcm9vdDogdHJ1ZSB9KTtcbiAgICAgICAgICBkaXNwYXRjaChcIm5vdGVzL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goXCJjbGFzc2VzL2dldFwiLCBudWxsLCB7IHJvb3Q6IHRydWUgfSk7XG4gICAgICAgICAgZGlzcGF0Y2goXCJtZWV0aW5ncy9nZXRcIiwgbnVsbCwgeyByb290OiB0cnVlIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiQ291bGQgbm90IExvZ2luXCIpO1xuICAgICAgICAgIHJldHVybiBkaXNwYXRjaChcInVzZXIvbG9nb3V0XCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGxvZ291dCh7IGNvbW1pdCB9KSB7XG4gICAgICBjb21taXQoXCJjbGVhclwiKTtcbiAgICB9LFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBsb2FkVG9rZW5zKHN0YXRlLCB7IGFjY2VzcywgcmVmcmVzaCB9KSB7XG4gICAgICBzdGF0ZS5hY2Nlc3MgPSBhY2Nlc3M7XG4gICAgICBzdGF0ZS5yZWZyZXNoID0gcmVmcmVzaDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWNjZXNzXCIsIGFjY2Vzcyk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2hcIiwgcmVmcmVzaCk7XG4gICAgfSxcbiAgICBsb2FkVXNlcihzdGF0ZSwgeyB1c2VybmFtZSB9KSB7XG4gICAgICBzdGF0ZS51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgc3RhdGUuYXV0aGVudGljYXRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBjbGVhcihzdGF0ZSkge1xuICAgICAgc3RhdGUudXNlcm5hbWUgPSBcIlwiO1xuICAgICAgc3RhdGUuYWNjZXNzID0gXCJcIjtcbiAgICAgIHN0YXRlLnJlZnJlc2ggPSBcIlwiO1xuICAgICAgc3RhdGUuYXV0aGVudGljYXRlZCA9IGZhbHNlO1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NcIik7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInJlZnJlc2hcIik7XG4gICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBcIlwiO1xuICAgIH0sXG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBnZXRBY2Nlc3NUb2tlbjogKHN0YXRlKSA9PiBzdGF0ZS5hY2Nlc3MsXG4gICAgZ2V0UmVmcmVzaFRva2VuOiAoc3RhdGUpID0+IHN0YXRlLnJlZnJlc2gsXG4gICAgZ2V0VXNlcm5hbWU6IChzdGF0ZSkgPT4gc3RhdGUudXNlcm5hbWUsXG4gICAgdXNlcklzQXV0aGVudGljYXRlZDogKHN0YXRlKSA9PiBzdGF0ZS5hdXRoZW50aWNhdGVkLFxuICB9LFxufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXRDQTtBQXdDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJBO0FBcUJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFyRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/UserStore.js\n");

/***/ })

})