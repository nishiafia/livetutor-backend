webpackHotUpdate("app",{

/***/ "./src/store/AssignmentStore.js":
/*!**************************************!*\
  !*** ./src/store/AssignmentStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: {\n    assignments: []\n  },\n  actions: {\n    get: function get(_ref) {\n      var commit = _ref.commit;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/assignments/\").then(function (response) {\n        return commit(\"load\", response.data.map(function (data) {\n          return _objectSpread(_objectSpread({}, data), {}, {\n            created_at: new Date(data.created_at).toLocaleString()\n          });\n        }));\n      });\n    },\n    add: function add(_ref2, payload) {\n      var dispatch = _ref2.dispatch;\n      var formData = new FormData();\n\n      for (var key in payload) {\n        formData.append(key, payload[key]);\n      }\n\n      if (payload.attachments) {\n        for (var i = 0; i < payload.attachments.length; i++) {\n          formData.append(\"attachments[]\", payload.attachments[i]);\n        }\n      }\n\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/assignments/\", formData, {\n          headers: {\n            \"Content-Type\": \"multipart/form-data\"\n          }\n        }).then(function (response) {\n          dispatch(\"get\");\n        }).then(resolve).catch(reject);\n      });\n    },\n    update: function update(_ref3, _ref4) {\n      var dispatch = _ref3.dispatch;\n      var id = _ref4.id,\n          name = _ref4.name,\n          description = _ref4.description,\n          due_date = _ref4.due_date,\n          due_time = _ref4.due_time,\n          mark = _ref4.mark;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"assignments/\", {\n        id: id,\n        name: name,\n        description: description,\n        submission_date_time: \"\".concat(due_date, \"' '\").concat(due_time),\n        mark: mark\n      }).then(function () {\n        return dispatch(\"get\");\n      });\n    },\n    delete: function _delete(_ref5, id) {\n      var dispatch = _ref5.dispatch;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"assignments/\".concat(id)).then(function () {\n        return dispatch(\"get\");\n      });\n    },\n    submit: function submit(_ref6, payload) {\n      var commit = _ref6.commit;\n      var assignment_id = payload.assignment_id,\n          assignment_submission_files = payload.assignment_submission_files;\n      var formData = new FormData();\n      formData.append('assignment_id', assignment_id);\n\n      for (var i = 0; i < assignment_submission_files.length; i++) {\n        formData.append(\"assignment_submission_files[]\", assignment_submission_files[i]);\n      }\n\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"assignments/\".concat(assignment_id, \"/submissions/\"), formData, {\n        headers: {\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      }).then(function (res) {\n        return console.log(res);\n      });\n    },\n    getComments: function getComments(_ref7, payload) {\n      var commit = _ref7.commit;\n      return new Promise(function (resolve, reject) {\n        return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"assignments/\".concat(payload.id, \"/comments/\")).then(function (response) {\n          return commit(\"loadComments\", {\n            id: payload.id,\n            comments: response.data\n          });\n        }).then(resolve).catch(reject);\n      });\n    }\n  },\n  mutations: {\n    load: function load(state, payload) {\n      state.assignments = payload;\n    },\n    loadComments: function loadComments(state, payload) {\n      state.assignments.find(function (assignment) {\n        return assignment.id === payload.id;\n      }).comments = payload.comments;\n    }\n  },\n  getters: {\n    all_assignment: function all_assignment(state) {\n      return state.assignments;\n    },\n    assignments_for_current_class: function assignments_for_current_class(state) {\n      return function (class_id) {\n        return state.assignments.filter(function (assignment) {\n          return assignment.room == class_id;\n        });\n      };\n    },\n    get_submission_by_assignment: function get_submission_by_assignment(state) {\n      return function (assignment_id) {\n        return state.submissions.filter(function (submission) {\n          return submission.assignment_id === assignment_id;\n        });\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvQXNzaWdubWVudFN0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL0Fzc2lnbm1lbnRTdG9yZS5qcz84NzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIkAvc2VydmljZXMvYXBpXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWVzcGFjZWQ6IHRydWUsXG4gIHN0YXRlOiB7XG4gICAgYXNzaWdubWVudHM6IFtdLFxuICB9LFxuXG4gIGFjdGlvbnM6IHtcbiAgICBnZXQoeyBjb21taXQgfSkge1xuICAgICAgcmV0dXJuIGFwaS5nZXQoXCIvYXNzaWdubWVudHMvXCIpLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICBjb21taXQoXG4gICAgICAgICAgXCJsb2FkXCIsXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGRhdGEpID0+ICh7XG4gICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogbmV3IERhdGUoZGF0YS5jcmVhdGVkX2F0KS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgICAgIH0pKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0sXG5cbiAgICBhZGQoeyBkaXNwYXRjaCB9LCBwYXlsb2FkKSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwYXlsb2FkKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBheWxvYWRba2V5XSk7XG4gICAgICB9XG4gICAgICBpZiAocGF5bG9hZC5hdHRhY2htZW50cykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBheWxvYWQuYXR0YWNobWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdHRhY2htZW50c1tdXCIsIHBheWxvYWQuYXR0YWNobWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoXG4gICAgICAgIChyZXNvbHZlLCByZWplY3QpID0+XG4gICAgICAgICAgYXBpLnBvc3QoXCIvYXNzaWdubWVudHMvXCIsIGZvcm1EYXRhLCB7IGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goXCJnZXRcIilcbiAgICAgICAgICB9KS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCkpO1xuICAgIH0sXG5cblxuICAgIHVwZGF0ZSh7IGRpc3BhdGNoIH0sIHsgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVfZGF0ZSwgZHVlX3RpbWUsIG1hcmsgfSkge1xuICAgICAgcmV0dXJuIGFwaVxuICAgICAgICAucHV0KFwiYXNzaWdubWVudHMvXCIsIHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIHN1Ym1pc3Npb25fZGF0ZV90aW1lOiBgJHtkdWVfZGF0ZX0nICcke2R1ZV90aW1lfWAsXG4gICAgICAgICAgbWFyayxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goXCJnZXRcIikpO1xuICAgIH0sXG4gICAgZGVsZXRlKHsgZGlzcGF0Y2ggfSwgaWQpIHtcbiAgICAgIHJldHVybiBhcGkuZGVsZXRlKGBhc3NpZ25tZW50cy8ke2lkfWApLnRoZW4oKCkgPT4gZGlzcGF0Y2goXCJnZXRcIikpO1xuXG4gICAgfSxcbiAgICBzdWJtaXQoeyBjb21taXQgfSwgcGF5bG9hZCkge1xuICAgICAgY29uc3QgeyBhc3NpZ25tZW50X2lkLCBhc3NpZ25tZW50X3N1Ym1pc3Npb25fZmlsZXMgfSA9IHBheWxvYWRcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKCdhc3NpZ25tZW50X2lkJywgYXNzaWdubWVudF9pZClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzaWdubWVudF9zdWJtaXNzaW9uX2ZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFzc2lnbm1lbnRfc3VibWlzc2lvbl9maWxlc1tdXCIsIGFzc2lnbm1lbnRfc3VibWlzc2lvbl9maWxlc1tpXSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXBpXG4gICAgICAgIC5wb3N0KGBhc3NpZ25tZW50cy8ke2Fzc2lnbm1lbnRfaWR9L3N1Ym1pc3Npb25zL2AsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiBjb25zb2xlLmxvZyhyZXMpKTtcbiAgICB9LFxuICAgIGdldENvbW1lbnRzKHsgY29tbWl0IH0sIHBheWxvYWQpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxuICAgICAgICBhcGkuZ2V0KGBhc3NpZ25tZW50cy8ke3BheWxvYWQuaWR9L2NvbW1lbnRzL2ApLnRoZW4oKHJlc3BvbnNlKSA9PlxuICAgICAgICAgIGNvbW1pdChcImxvYWRDb21tZW50c1wiLCB7IGlkOiBwYXlsb2FkLmlkLCBjb21tZW50czogcmVzcG9uc2UuZGF0YSwgfSlcbiAgICAgICAgKS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCkpXG4gICAgfVxuICB9LFxuXG4gIG11dGF0aW9uczoge1xuICAgIGxvYWQoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLmFzc2lnbm1lbnRzID0gcGF5bG9hZDtcbiAgICB9LFxuICAgIGxvYWRDb21tZW50cyhzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUuYXNzaWdubWVudHMuZmluZCgoYXNzaWdubWVudCkgPT4gYXNzaWdubWVudC5pZCA9PT0gcGF5bG9hZC5pZCkuY29tbWVudHMgPSBwYXlsb2FkLmNvbW1lbnRzO1xuICAgIH1cbiAgfSxcblxuICBnZXR0ZXJzOiB7XG4gICAgYWxsX2Fzc2lnbm1lbnQ6IChzdGF0ZSkgPT4gc3RhdGUuYXNzaWdubWVudHMsXG5cbiAgICBhc3NpZ25tZW50c19mb3JfY3VycmVudF9jbGFzczogKHN0YXRlKSA9PiAoY2xhc3NfaWQpID0+XG4gICAgICBzdGF0ZS5hc3NpZ25tZW50cy5maWx0ZXIoKGFzc2lnbm1lbnQpID0+IGFzc2lnbm1lbnQucm9vbSA9PSBjbGFzc19pZCksXG4gICAgZ2V0X3N1Ym1pc3Npb25fYnlfYXNzaWdubWVudDogKHN0YXRlKSA9PiAoYXNzaWdubWVudF9pZCkgPT5cbiAgICAgIHN0YXRlLnN1Ym1pc3Npb25zLmZpbHRlcigoc3VibWlzc2lvbikgPT4gc3VibWlzc2lvbi5hc3NpZ25tZW50X2lkID09PSBhc3NpZ25tZW50X2lkKSxcbiAgfSxcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFGQTtBQUFBO0FBSEE7QUFTQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFJQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFJQTtBQWhFQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBREE7QUFBQTtBQUxBO0FBbEZBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/AssignmentStore.js\n");

/***/ })

})