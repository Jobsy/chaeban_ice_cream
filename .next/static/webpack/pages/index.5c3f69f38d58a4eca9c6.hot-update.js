webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"./node_modules/@shopify/polaris/dist/esm/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"./node_modules/@shopify/app-bridge-react/index.js\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/jobsy/chaeban_ice_cream/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // const Index = () => (\n//   <Page>\n//     <Heading>Shopify app with Node and React 🎉</Heading>\n//   </Page>\n// );\n\nfunction Index() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  }),\n      state = _useState[0],\n      setState = _useState[1]; // const [selectedProduct, setSelectedProduct] = useState({\n  //   productID: \"\",\n  //   productName: \"\",\n  // });\n\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      selectedProduct = _useState2[0],\n      setSelectedProduct = _useState2[1];\n\n  function handlSelection(resouces) {\n    // const idFromResources = resouces.selectedProduct.map((products) => product);\n    // setState({ open: false });\n    // setSelectedProduct({\n    //   productID: idFromResources.handle,\n    //   productName: idFromResources.id,\n    // });\n    // console.log(\n    //   \"idFromResources: \",\n    //   idFromResources,\n    //   idFromResources.handle,\n    //   idFromResources.id\n    // );\n    // resouces.selectedProduct.map((product) => {\n    //   setSelectedProduct({\n    //     productID: product.id,\n    //     productName: product.handle,\n    //   });\n    // });\n    console.log(\"resouces: \", resouces);\n    setSelectedProduct(resouces);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    title: \"Product selector\",\n    primaryAction: {\n      content: \"Select Products\",\n      onAction: function onAction() {\n        return setState({\n          open: true\n        });\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    open: state.open,\n    onCancel: function onCancel() {\n      return setState({\n        open: false\n      });\n    },\n    onSelection: function onSelection(resouces) {\n      return handlSelection(resouces);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), selectedProduct ? selectedProduct.selection.map(function (product) {\n    // productID: product.id;\n    // productName: product.handle;\n    // return product.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"productID: \", product.id, \"; \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 44\n      }\n    }), \"productName: \", product.handle, \";\");\n  }) : \"\"));\n}\n\n_s(Index, \"wbVCDwo304DIL54gJ7WOsd6Yne0=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwib3BlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJzZWxlY3RlZFByb2R1Y3QiLCJzZXRTZWxlY3RlZFByb2R1Y3QiLCJoYW5kbFNlbGVjdGlvbiIsInJlc291Y2VzIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImhhbmRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDV0Msc0RBQVEsQ0FBQztBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFELENBRG5CO0FBQUEsTUFDUkMsS0FEUTtBQUFBLE1BQ0RDLFFBREMsaUJBRWY7QUFDQTtBQUNBO0FBQ0E7OztBQUxlLG1CQU0rQkgsc0RBQVEsRUFOdkM7QUFBQSxNQU1SSSxlQU5RO0FBQUEsTUFNU0Msa0JBTlQ7O0FBUWYsV0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFBa0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJGLFFBQTFCO0FBQ0FGLHNCQUFrQixDQUFDRSxRQUFELENBQWxCO0FBQ0Q7O0FBQ0QsU0FDRSxtRUFDRSxNQUFDLHFEQUFEO0FBQ0UsU0FBSyxFQUFDLGtCQURSO0FBRUUsaUJBQWEsRUFBRTtBQUNiRyxhQUFPLEVBQUUsaUJBREk7QUFFYkMsY0FBUSxFQUFFO0FBQUEsZUFBTVIsUUFBUSxDQUFDO0FBQUVGLGNBQUksRUFBRTtBQUFSLFNBQUQsQ0FBZDtBQUFBO0FBRkcsS0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9FLE1BQUMsd0VBQUQ7QUFDRSxnQkFBWSxFQUFDLFNBRGY7QUFFRSxRQUFJLEVBQUVDLEtBQUssQ0FBQ0QsSUFGZDtBQUdFLFlBQVEsRUFBRTtBQUFBLGFBQU1FLFFBQVEsQ0FBQztBQUFFRixZQUFJLEVBQUU7QUFBUixPQUFELENBQWQ7QUFBQSxLQUhaO0FBSUUsZUFBVyxFQUFFLHFCQUFDTSxRQUFEO0FBQUEsYUFBY0QsY0FBYyxDQUFDQyxRQUFELENBQTVCO0FBQUEsS0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEYsRUFjR0gsZUFBZSxHQUNaQSxlQUFlLENBQUNRLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixVQUFDQyxPQUFELEVBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0EsV0FDRSxrRkFDY0EsT0FBTyxDQUFDQyxFQUR0QixRQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRDNCLG1CQUVnQkQsT0FBTyxDQUFDRSxNQUZ4QixNQURGO0FBTUQsR0FWRCxDQURZLEdBWVosRUExQk4sQ0FERixDQURGO0FBZ0NEOztHQTlEUWpCLEs7O0tBQUFBLEs7QUFnRU1BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRpbmcsIFBhZ2UgfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcbi8vICAgPFBhZ2U+XG4vLyAgICAgPEhlYWRpbmc+U2hvcGlmeSBhcHAgd2l0aCBOb2RlIGFuZCBSZWFjdCDwn46JPC9IZWFkaW5nPlxuLy8gICA8L1BhZ2U+XG4vLyApO1xuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKHtcbiAgLy8gICBwcm9kdWN0SUQ6IFwiXCIsXG4gIC8vICAgcHJvZHVjdE5hbWU6IFwiXCIsXG4gIC8vIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiBoYW5kbFNlbGVjdGlvbihyZXNvdWNlcykge1xuICAgIC8vIGNvbnN0IGlkRnJvbVJlc291cmNlcyA9IHJlc291Y2VzLnNlbGVjdGVkUHJvZHVjdC5tYXAoKHByb2R1Y3RzKSA9PiBwcm9kdWN0KTtcbiAgICAvLyBzZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIC8vIHNldFNlbGVjdGVkUHJvZHVjdCh7XG4gICAgLy8gICBwcm9kdWN0SUQ6IGlkRnJvbVJlc291cmNlcy5oYW5kbGUsXG4gICAgLy8gICBwcm9kdWN0TmFtZTogaWRGcm9tUmVzb3VyY2VzLmlkLFxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFxuICAgIC8vICAgXCJpZEZyb21SZXNvdXJjZXM6IFwiLFxuICAgIC8vICAgaWRGcm9tUmVzb3VyY2VzLFxuICAgIC8vICAgaWRGcm9tUmVzb3VyY2VzLmhhbmRsZSxcbiAgICAvLyAgIGlkRnJvbVJlc291cmNlcy5pZFxuICAgIC8vICk7XG4gICAgLy8gcmVzb3VjZXMuc2VsZWN0ZWRQcm9kdWN0Lm1hcCgocHJvZHVjdCkgPT4ge1xuICAgIC8vICAgc2V0U2VsZWN0ZWRQcm9kdWN0KHtcbiAgICAvLyAgICAgcHJvZHVjdElEOiBwcm9kdWN0LmlkLFxuICAgIC8vICAgICBwcm9kdWN0TmFtZTogcHJvZHVjdC5oYW5kbGUsXG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICBjb25zb2xlLmxvZyhcInJlc291Y2VzOiBcIiwgcmVzb3VjZXMpO1xuICAgIHNldFNlbGVjdGVkUHJvZHVjdChyZXNvdWNlcyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFBhZ2VcbiAgICAgICAgdGl0bGU9XCJQcm9kdWN0IHNlbGVjdG9yXCJcbiAgICAgICAgcHJpbWFyeUFjdGlvbj17e1xuICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IFByb2R1Y3RzXCIsXG4gICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFJlc291cmNlUGlja2VyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgb3Blbj17c3RhdGUub3Blbn1cbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9KX1cbiAgICAgICAgICBvblNlbGVjdGlvbj17KHJlc291Y2VzKSA9PiBoYW5kbFNlbGVjdGlvbihyZXNvdWNlcyl9XG4gICAgICAgIC8+XG5cbiAgICAgICAge3NlbGVjdGVkUHJvZHVjdFxuICAgICAgICAgID8gc2VsZWN0ZWRQcm9kdWN0LnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgLy8gcHJvZHVjdElEOiBwcm9kdWN0LmlkO1xuICAgICAgICAgICAgICAvLyBwcm9kdWN0TmFtZTogcHJvZHVjdC5oYW5kbGU7XG4gICAgICAgICAgICAgIC8vIHJldHVybiBwcm9kdWN0LmlkO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SUQ6IHtwcm9kdWN0LmlkfTsgPGJyIC8+XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZToge3Byb2R1Y3QuaGFuZGxlfTtcbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9QYWdlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})