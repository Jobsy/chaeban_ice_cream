webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/jobsy/chaeban_ice_cream/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // const Index = () => (\n//   <Page>\n//     <Heading>Shopify app with Node and React 🎉</Heading>\n//   </Page>\n// );\n\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  }),\n      state = _useState[0],\n      setState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    productID: \"\",\n    productName: \"\"\n  }),\n      selection = _useState2[0],\n      setSelection = _useState2[1];\n\n  function handlSelection(resouces) {\n    // const idFromResources = resouces.selection.map((products) => product);\n    // setState({ open: false });\n    // setSelection({\n    //   productID: idFromResources.handle,\n    //   productName: idFromResources.id,\n    // });\n    // console.log(\n    //   \"idFromResources: \",\n    //   idFromResources,\n    //   idFromResources.handle,\n    //   idFromResources.id\n    // );\n    resouces.selection.map(function (product) {\n      setSelection({\n        productID: product.id,\n        productName: product.handle\n      });\n    });\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    title: \"Product selector\",\n    primaryAction: {\n      content: \"Select Products\",\n      onAction: function onAction() {\n        return setState({\n          open: true\n        });\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    open: state.open,\n    onCancel: function onCancel() {\n      return setState({\n        open: false\n      });\n    },\n    onSelection: function onSelection(resouces) {\n      return handlSelection(resouces);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), \"Product ID: \", selection.productID, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }), \"Product Name: \", selection.productName));\n}\n\n_s(Index, \"j+EXwAJJYRip0eYXYhXVOXjFtGA=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJwcm9kdWN0SUQiLCJwcm9kdWN0TmFtZSIsInNlbGVjdGlvbiIsInNldFNlbGVjdGlvbiIsImhhbmRsU2VsZWN0aW9uIiwicmVzb3VjZXMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJoYW5kbGUiLCJjb250ZW50Iiwib25BY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQURuQjtBQUFBLE1BQ1JDLEtBRFE7QUFBQSxNQUNEQyxRQURDOztBQUFBLG1CQUVtQkgsc0RBQVEsQ0FBQztBQUN6Q0ksYUFBUyxFQUFFLEVBRDhCO0FBRXpDQyxlQUFXLEVBQUU7QUFGNEIsR0FBRCxDQUYzQjtBQUFBLE1BRVJDLFNBRlE7QUFBQSxNQUVHQyxZQUZIOztBQU9mLFdBQVNDLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxZQUFRLENBQUNILFNBQVQsQ0FBbUJJLEdBQW5CLENBQXVCLFVBQUNDLE9BQUQsRUFBYTtBQUNsQ0osa0JBQVksQ0FBQztBQUNYSCxpQkFBUyxFQUFFTyxPQUFPLENBQUNDLEVBRFI7QUFFWFAsbUJBQVcsRUFBRU0sT0FBTyxDQUFDRTtBQUZWLE9BQUQsQ0FBWjtBQUlELEtBTEQ7QUFNRDs7QUFDRCxTQUNFLG1FQUNFLE1BQUMscURBQUQ7QUFDRSxTQUFLLEVBQUMsa0JBRFI7QUFFRSxpQkFBYSxFQUFFO0FBQ2JDLGFBQU8sRUFBRSxpQkFESTtBQUViQyxjQUFRLEVBQUU7QUFBQSxlQUFNWixRQUFRLENBQUM7QUFBRUYsY0FBSSxFQUFFO0FBQVIsU0FBRCxDQUFkO0FBQUE7QUFGRyxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyx3RUFBRDtBQUNFLGdCQUFZLEVBQUMsU0FEZjtBQUVFLFFBQUksRUFBRUMsS0FBSyxDQUFDRCxJQUZkO0FBR0UsWUFBUSxFQUFFO0FBQUEsYUFBTUUsUUFBUSxDQUFDO0FBQUVGLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBZDtBQUFBLEtBSFo7QUFJRSxlQUFXLEVBQUUscUJBQUNRLFFBQUQ7QUFBQSxhQUFjRCxjQUFjLENBQUNDLFFBQUQsQ0FBNUI7QUFBQSxLQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixrQkFhZUgsU0FBUyxDQUFDRixTQWJ6QixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixvQkFlaUJFLFNBQVMsQ0FBQ0QsV0FmM0IsQ0FERixDQURGO0FBcUJEOztHQWhEUU4sSzs7S0FBQUEsSztBQWtETUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZGluZywgUGFnZSB9IGZyb20gXCJAc2hvcGlmeS9wb2xhcmlzXCI7XG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciB9IGZyb20gXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI7XG5cbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxuLy8gICA8UGFnZT5cbi8vICAgICA8SGVhZGluZz5TaG9waWZ5IGFwcCB3aXRoIE5vZGUgYW5kIFJlYWN0IPCfjok8L0hlYWRpbmc+XG4vLyAgIDwvUGFnZT5cbi8vICk7XG5mdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICBjb25zdCBbc2VsZWN0aW9uLCBzZXRTZWxlY3Rpb25dID0gdXNlU3RhdGUoe1xuICAgIHByb2R1Y3RJRDogXCJcIixcbiAgICBwcm9kdWN0TmFtZTogXCJcIixcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxTZWxlY3Rpb24ocmVzb3VjZXMpIHtcbiAgICAvLyBjb25zdCBpZEZyb21SZXNvdXJjZXMgPSByZXNvdWNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0cykgPT4gcHJvZHVjdCk7XG4gICAgLy8gc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgICAvLyBzZXRTZWxlY3Rpb24oe1xuICAgIC8vICAgcHJvZHVjdElEOiBpZEZyb21SZXNvdXJjZXMuaGFuZGxlLFxuICAgIC8vICAgcHJvZHVjdE5hbWU6IGlkRnJvbVJlc291cmNlcy5pZCxcbiAgICAvLyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcbiAgICAvLyAgIFwiaWRGcm9tUmVzb3VyY2VzOiBcIixcbiAgICAvLyAgIGlkRnJvbVJlc291cmNlcyxcbiAgICAvLyAgIGlkRnJvbVJlc291cmNlcy5oYW5kbGUsXG4gICAgLy8gICBpZEZyb21SZXNvdXJjZXMuaWRcbiAgICAvLyApO1xuICAgIHJlc291Y2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgIHNldFNlbGVjdGlvbih7XG4gICAgICAgIHByb2R1Y3RJRDogcHJvZHVjdC5pZCxcbiAgICAgICAgcHJvZHVjdE5hbWU6IHByb2R1Y3QuaGFuZGxlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhZ2VcbiAgICAgICAgdGl0bGU9XCJQcm9kdWN0IHNlbGVjdG9yXCJcbiAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IFByb2R1Y3RzXCIsXG4gICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgb3Blbj17c3RhdGUub3Blbn1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291Y2VzKSA9PiBoYW5kbFNlbGVjdGlvbihyZXNvdWNlcyl9XG4gICAgICAgIC8+XG4gICAgICAgIFByb2R1Y3QgSUQ6IHtzZWxlY3Rpb24ucHJvZHVjdElEfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgUHJvZHVjdCBOYW1lOiB7c2VsZWN0aW9uLnByb2R1Y3ROYW1lfVxuICAgICAgPC9QYWdlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})