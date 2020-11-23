module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ \"@shopify/polaris\");\n/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ \"@shopify/app-bridge-react\");\n/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/jobsy/chaeban_ice_cream/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // const Index = () => (\n//   <Page>\n//     <Heading>Shopify app with Node and React 🎉</Heading>\n//   </Page>\n// );\n\nfunction Index() {\n  const {\n    0: state,\n    1: setState\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    open: false\n  }); // const [selectedProduct, setSelectedProduct] = useState({\n  //   productID: \"\",\n  //   productName: \"\",\n  // });\n\n  const {\n    0: selectedProduct,\n    1: setSelectedProduct\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  function handlSelection(resouces) {\n    setSelectedProduct(resouces);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__[\"Page\"], {\n    title: \"Product selector\",\n    primaryAction: {\n      content: \"Select Products\",\n      onAction: () => setState({\n        open: true\n      })\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__[\"ResourcePicker\"], {\n    resourceType: \"Product\",\n    open: state.open,\n    onCancel: () => setState({\n      open: false\n    }),\n    onSelection: resouces => handlSelection(resouces),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }), selectedProduct ? selectedProduct.selection.map(product => {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, \"productID: \", product.id, \"; \", __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 44\n      }\n    }), \"productName: \", product.handle, \"; \", __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 50\n      }\n    }), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 19\n      }\n    }));\n  }) : \"\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZVN0YXRlIiwib3BlbiIsInNlbGVjdGVkUHJvZHVjdCIsInNldFNlbGVjdGVkUHJvZHVjdCIsImhhbmRsU2VsZWN0aW9uIiwicmVzb3VjZXMiLCJjb250ZW50Iiwib25BY3Rpb24iLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJoYW5kbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBRCxDQUFsQyxDQURlLENBRWY7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NILHNEQUFRLEVBQXREOztBQUVBLFdBQVNJLGNBQVQsQ0FBd0JDLFFBQXhCLEVBQWtDO0FBQ2hDRixzQkFBa0IsQ0FBQ0UsUUFBRCxDQUFsQjtBQUNEOztBQUVELFNBQ0UsbUVBQ0UsTUFBQyxxREFBRDtBQUNFLFNBQUssRUFBQyxrQkFEUjtBQUVFLGlCQUFhLEVBQUU7QUFDYkMsYUFBTyxFQUFFLGlCQURJO0FBRWJDLGNBQVEsRUFBRSxNQUFNUixRQUFRLENBQUM7QUFBRUUsWUFBSSxFQUFFO0FBQVIsT0FBRDtBQUZYLEtBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPRSxNQUFDLHdFQUFEO0FBQ0UsZ0JBQVksRUFBQyxTQURmO0FBRUUsUUFBSSxFQUFFSCxLQUFLLENBQUNHLElBRmQ7QUFHRSxZQUFRLEVBQUUsTUFBTUYsUUFBUSxDQUFDO0FBQUVFLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FIMUI7QUFJRSxlQUFXLEVBQUdJLFFBQUQsSUFBY0QsY0FBYyxDQUFDQyxRQUFELENBSjNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixFQWNHSCxlQUFlLEdBQ1pBLGVBQWUsQ0FBQ00sU0FBaEIsQ0FBMEJDLEdBQTFCLENBQStCQyxPQUFELElBQWE7QUFDekMsV0FDRSxrRkFDY0EsT0FBTyxDQUFDQyxFQUR0QixRQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRDNCLG1CQUVnQkQsT0FBTyxDQUFDRSxNQUZ4QixRQUVpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRmpDLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREY7QUFPRCxHQVJELENBRFksR0FVWixFQXhCTixDQURGLENBREY7QUE4QkQ7O0FBRWNmLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWRpbmcsIFBhZ2UgfSBmcm9tIFwiQHNob3BpZnkvcG9sYXJpc1wiO1xuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIgfSBmcm9tIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiO1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcbi8vICAgPFBhZ2U+XG4vLyAgICAgPEhlYWRpbmc+U2hvcGlmeSBhcHAgd2l0aCBOb2RlIGFuZCBSZWFjdCDwn46JPC9IZWFkaW5nPlxuLy8gICA8L1BhZ2U+XG4vLyApO1xuZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoeyBvcGVuOiBmYWxzZSB9KTtcbiAgLy8gY29uc3QgW3NlbGVjdGVkUHJvZHVjdCwgc2V0U2VsZWN0ZWRQcm9kdWN0XSA9IHVzZVN0YXRlKHtcbiAgLy8gICBwcm9kdWN0SUQ6IFwiXCIsXG4gIC8vICAgcHJvZHVjdE5hbWU6IFwiXCIsXG4gIC8vIH0pO1xuICBjb25zdCBbc2VsZWN0ZWRQcm9kdWN0LCBzZXRTZWxlY3RlZFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcblxuICBmdW5jdGlvbiBoYW5kbFNlbGVjdGlvbihyZXNvdWNlcykge1xuICAgIHNldFNlbGVjdGVkUHJvZHVjdChyZXNvdWNlcyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8UGFnZVxuICAgICAgICB0aXRsZT1cIlByb2R1Y3Qgc2VsZWN0b3JcIlxuICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgY29udGVudDogXCJTZWxlY3QgUHJvZHVjdHNcIixcbiAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8UmVzb3VyY2VQaWNrZXJcbiAgICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcbiAgICAgICAgICBvcGVuPXtzdGF0ZS5vcGVufVxuICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxuICAgICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VjZXMpID0+IGhhbmRsU2VsZWN0aW9uKHJlc291Y2VzKX1cbiAgICAgICAgLz5cblxuICAgICAgICB7c2VsZWN0ZWRQcm9kdWN0XG4gICAgICAgICAgPyBzZWxlY3RlZFByb2R1Y3Quc2VsZWN0aW9uLm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SUQ6IHtwcm9kdWN0LmlkfTsgPGJyIC8+XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZToge3Byb2R1Y3QuaGFuZGxlfTsgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9QYWdlPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/app-bridge-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCI/MDY2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/app-bridge-react\n");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@shopify/polaris\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCI/YTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAc2hvcGlmeS9wb2xhcmlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@shopify/polaris\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });