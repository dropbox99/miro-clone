"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/page",{

/***/ "(app-pages-browser)/./app/(dashboard)/_components/board-card/footer.tsx":
/*!***********************************************************!*\
  !*** ./app/(dashboard)/_components/board-card/footer.tsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Star_lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Star!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/star.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n\n\n\nconst Footer = (param)=>{\n    let { title, authorLabel, createdAtLabel, isFavorite, onClick, disabled } = param;\n    const handleClick = (event)=>{\n        event.stopPropagation();\n        event.preventDefault();\n        onClick();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative bg-white p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-[13px] truncate max-w-[calc(100%-20px)]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/board-card/footer.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate\",\n                children: [\n                    authorLabel,\n                    \", \",\n                    createdAtLabel\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/board-card/footer.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                disabled: disabled,\n                onClick: onClick,\n                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-blue-600\", disabled && \"cursor-not-allowed opacity-75\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Star_lucide_react__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"h-4 w-4\", isFavorite && \"fill-blue-600 text-blue-600\")\n                }, void 0, false, {\n                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/board-card/footer.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/board-card/footer.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/board-card/footer.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9fY29tcG9uZW50cy9ib2FyZC1jYXJkL2Zvb3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFFSDtBQVcxQixNQUFNRSxTQUFTO1FBQUMsRUFDckJDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxjQUFjLEVBQ2RDLFVBQVUsRUFDVkMsT0FBTyxFQUNQQyxRQUFRLEVBQ0k7SUFDWixNQUFNQyxjQUFjLENBQ2xCQztRQUVBQSxNQUFNQyxlQUFlO1FBQ3JCRCxNQUFNRSxjQUFjO1FBRXBCTDtJQUNGO0lBQ0EscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBRUQsV0FBVTswQkFDVlg7Ozs7OzswQkFFSCw4REFBQ1k7Z0JBQUVELFdBQVU7O29CQUNWVjtvQkFBWTtvQkFBR0M7Ozs7Ozs7MEJBRWxCLDhEQUFDVztnQkFDRFIsVUFBVUE7Z0JBQ1ZELFNBQVNBO2dCQUNUTyxXQUFXYiw4Q0FBRUEsQ0FDWCxpSEFDQU8sWUFBWTswQkFHWiw0RUFBQ1IsZ0ZBQUlBO29CQUNMYyxXQUFXYiw4Q0FBRUEsQ0FDWCxXQUNBSyxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQU14QixFQUFDO0tBekNZSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKGRhc2hib2FyZCkvX2NvbXBvbmVudHMvYm9hcmQtY2FyZC9mb290ZXIudHN4PzNiZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhciB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuaW50ZXJmYWNlIEZvb3RlclByb3BzIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgYXV0aG9yTGFiZWw6IHN0cmluZztcbiAgY3JlYXRlZEF0TGFiZWw6IHN0cmluZztcbiAgaXNGYXZvcml0ZTogYm9vbGVhbjtcbiAgb25DbGljazogKCkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoe1xuICB0aXRsZSxcbiAgYXV0aG9yTGFiZWwsXG4gIGNyZWF0ZWRBdExhYmVsLFxuICBpc0Zhdm9yaXRlLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZFxufTogRm9vdGVyUHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBvbkNsaWNrKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIHAtM1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTNweF0gdHJ1bmNhdGUgbWF4LXctW2NhbGMoMTAwJS0yMHB4KV1cIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwib3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24tb3BhY2l0eSB0ZXh0LVsxMXB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmQgdHJ1bmNhdGVcIj5cbiAgICAgICAge2F1dGhvckxhYmVsfSwge2NyZWF0ZWRBdExhYmVsfVxuICAgICAgPC9wPlxuICAgICAgPGJ1dHRvblxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIGNsYXNzTmFtZT17Y24oXG4gICAgICAgIFwib3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIHRyYW5zaXRpb24gYWJzb2x1dGUgdG9wLTMgcmlnaHQtMyB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1ibHVlLTYwMFwiLFxuICAgICAgICBkaXNhYmxlZCAmJiBcImN1cnNvci1ub3QtYWxsb3dlZCBvcGFjaXR5LTc1XCJcbiAgICAgICl9XG4gICAgICA+XG4gICAgICAgIDxTdGFyIFxuICAgICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICAgIFwiaC00IHctNFwiLFxuICAgICAgICAgIGlzRmF2b3JpdGUgJiYgXCJmaWxsLWJsdWUtNjAwIHRleHQtYmx1ZS02MDBcIlxuICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiU3RhciIsImNuIiwiRm9vdGVyIiwidGl0bGUiLCJhdXRob3JMYWJlbCIsImNyZWF0ZWRBdExhYmVsIiwiaXNGYXZvcml0ZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/_components/board-card/footer.tsx\n"));

/***/ })

});