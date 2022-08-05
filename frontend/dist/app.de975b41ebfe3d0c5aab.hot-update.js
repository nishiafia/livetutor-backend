webpackHotUpdate("app",{

/***/ "./src/store/NoteStore.js":
/*!********************************!*\
  !*** ./src/store/NoteStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/api */ \"./src/services/api.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  namespaced: true,\n  state: {\n    notes: []\n  },\n  //actions called in tab-notes\n  actions: {\n    get: function get(_ref) {\n      var commit = _ref.commit;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/notes/\").then(function (response) {\n        return commit(\"load\", response.data.map(function (data) {\n          return _objectSpread(_objectSpread({}, data), {}, {\n            created_at: new Date(data.created_at).toLocaleString()\n          });\n        }));\n      });\n    },\n    add: function add(_ref2, payload) {\n      var dispatch = _ref2.dispatch;\n      var formData = new FormData();\n\n      for (var key in payload) {\n        formData.append(key, payload[key]);\n      }\n\n      for (var i = 0; i < payload.attachments.length; i++) {\n        formData.append(\"attachments[]\", payload.attachments[i]);\n      }\n\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"notes/\", formData, {\n        headers: {\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      }).then(function () {\n        return dispatch(\"get\");\n      });\n    },\n    update: function update(_ref3, _ref4) {\n      var dispatch = _ref3.dispatch;\n      var id = _ref4.id,\n          name = _ref4.name,\n          description = _ref4.description;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"notes/\", {\n        id: id,\n        name: name,\n        description: description\n      }).then(function () {\n        return dispatch(\"get\");\n      });\n    },\n    delete: function _delete(_ref5, id) {\n      var dispatch = _ref5.dispatch;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"notes/\".concat(id, \"/\")).then(function () {\n        return dispatch(\"get\");\n      });\n    },\n    getComments: function getComments(_ref6, payload) {\n      var commit = _ref6.commit,\n          getters = _ref6.getters;\n      return _services_api__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"notes/\".concat(payload.id, \"/comments/\")).then(function (response) {\n        commit(\"loadComments\", {\n          id: payload.id,\n          comments: response.data\n        });\n      }).catch(function (err) {\n        return console.log(err);\n      });\n    }\n  },\n  mutations: {\n    load: function load(state, payload) {\n      state.notes = payload;\n    },\n    loadComments: function loadComments(state, payload) {\n      state.notes.find(function (note) {\n        return assignment.id === payload.id;\n      }).comments = payload.comments;\n    }\n  },\n  getters: {\n    all_note: function all_note(state) {\n      return state.notes;\n    },\n    notes_for_current_class: function notes_for_current_class(state) {\n      return function (class_id) {\n        return state.notes.filter(function (note) {\n          return note.room == class_id;\n        });\n      };\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvTm90ZVN0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL05vdGVTdG9yZS5qcz8yMTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGkgZnJvbSBcIkAvc2VydmljZXMvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZXNwYWNlZDogdHJ1ZSxcbiAgc3RhdGU6IHtcbiAgICBub3RlczogW10sXG4gIH0sXG5cbiAgLy9hY3Rpb25zIGNhbGxlZCBpbiB0YWItbm90ZXNcbiAgYWN0aW9uczoge1xuICAgIGdldCh7IGNvbW1pdCB9KSB7XG4gICAgICByZXR1cm4gYXBpLmdldChcIi9ub3Rlcy9cIikudGhlbigocmVzcG9uc2UpID0+XG4gICAgICAgIGNvbW1pdChcbiAgICAgICAgICBcImxvYWRcIixcbiAgICAgICAgICByZXNwb25zZS5kYXRhLm1hcCgoZGF0YSkgPT4gKHtcbiAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgICAgfSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSxcbiAgICBhZGQoeyBkaXNwYXRjaCB9LCBwYXlsb2FkKSB7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBwYXlsb2FkKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHBheWxvYWRba2V5XSk7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBheWxvYWQuYXR0YWNobWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYXR0YWNobWVudHNbXVwiLCBwYXlsb2FkLmF0dGFjaG1lbnRzW2ldKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwaVxuICAgICAgICAucG9zdChcIm5vdGVzL1wiLCBmb3JtRGF0YSwgeyBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2goXCJnZXRcIikpO1xuICAgIH0sXG5cbiAgICB1cGRhdGUoeyBkaXNwYXRjaCB9LCB7IGlkLCBuYW1lLCBkZXNjcmlwdGlvbiB9KSB7XG4gICAgICByZXR1cm4gYXBpXG4gICAgICAgIC5wdXQoXCJub3Rlcy9cIiwge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKFwiZ2V0XCIpKTtcbiAgICB9LFxuICAgIGRlbGV0ZSh7IGRpc3BhdGNoIH0sIGlkKSB7XG4gICAgICByZXR1cm4gYXBpLmRlbGV0ZShgbm90ZXMvJHtpZH0vYCkudGhlbigoKSA9PiBkaXNwYXRjaChcImdldFwiKSk7XG4gICAgfSxcbiAgICBnZXRDb21tZW50cyh7IGNvbW1pdCwgZ2V0dGVycyB9LCBwYXlsb2FkKSB7XG5cbiAgICAgIHJldHVybiBhcGkuZ2V0KGBub3Rlcy8ke3BheWxvYWQuaWR9L2NvbW1lbnRzL2ApLnRoZW4oXG4gICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGNvbW1pdChcImxvYWRDb21tZW50c1wiLCB7IGlkOiBwYXlsb2FkLmlkLCBjb21tZW50czogcmVzcG9uc2UuZGF0YSB9KTtcblxuICAgICAgICB9XG4gICAgICApLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuXG4gICAgfVxuICB9LFxuXG4gIG11dGF0aW9uczoge1xuICAgIGxvYWQoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLm5vdGVzID0gcGF5bG9hZDtcbiAgICB9LFxuICAgICBsb2FkQ29tbWVudHMoc3RhdGUsIHBheWxvYWQpIHtcbiAgICAgIHN0YXRlLm5vdGVzLmZpbmQoKG5vdGUpID0+IGFzc2lnbm1lbnQuaWQgPT09IHBheWxvYWQuaWQpLmNvbW1lbnRzID0gcGF5bG9hZC5jb21tZW50cztcbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBhbGxfbm90ZTogKHN0YXRlKSA9PiBzdGF0ZS5ub3RlcyxcbiAgICBub3Rlc19mb3JfY3VycmVudF9jbGFzczogKHN0YXRlKSA9PiAoY2xhc3NfaWQpID0+XG4gICAgICBzdGF0ZS5ub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUucm9vbSA9PSBjbGFzc19pZCksXG4gIH0sXG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFGQTtBQUFBO0FBSEE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQS9DQTtBQWtEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQURBO0FBQUE7QUFGQTtBQWpFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/NoteStore.js\n");

/***/ })

})