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

/***/ "(app-pages-browser)/./app/(dashboard)/_components/empty-boards.tsx":
/*!******************************************************!*\
  !*** ./app/(dashboard)/_components/empty-boards.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmptyBoards: function() { return /* binding */ EmptyBoards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var convex_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! convex/react */ \"(app-pages-browser)/./node_modules/convex/dist/esm/react/index.js\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* __next_internal_client_entry_do_not_use__ EmptyBoards auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EmptyBoards = ()=>{\n    _s();\n    const { organization } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.useOrganization)();\n    const create = (0,convex_react__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_4__.api.board.create);\n    const onClick = ()=>{\n        if (!organization) return;\n        create({\n            orgId: organization.id,\n            title: \"untitled\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/note.svg\",\n                height: 110,\n                width: 110,\n                alt: \"Empty\"\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mt-6\",\n                children: \"Create your first board!\"\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-muted-foreground textg-sm mt-2\",\n                children: \"Start by creating a board for your organization\"\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    size: \"lg\",\n                    children: \"Create board\"\n                }, void 0, false, {\n                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmptyBoards, \"uCBiSu5VyqOEBHkWSnQD2nTf5Zw=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.useOrganization,\n        convex_react__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = EmptyBoards;\nvar _c;\n$RefreshReg$(_c, \"EmptyBoards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9fY29tcG9uZW50cy9lbXB0eS1ib2FyZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVnRDtBQUNqQjtBQUNZO0FBQ0c7QUFDRTtBQUV6QyxNQUFNSyxjQUFjOztJQUN6QixNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHRiw4REFBZUE7SUFDeEMsTUFBTUcsU0FBU0wseURBQVdBLENBQUNDLHNEQUFHQSxDQUFDSyxLQUFLLENBQUNELE1BQU07SUFFM0MsTUFBTUUsVUFBVTtRQUNkLElBQUksQ0FBQ0gsY0FBYztRQUVuQkMsT0FBTztZQUNMRyxPQUFPSixhQUFhSyxFQUFFO1lBQ3RCQyxPQUFPO1FBQ1Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2Isa0RBQUtBO2dCQUNKYyxLQUFJO2dCQUNKQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxLQUFJOzs7Ozs7MEJBRU4sOERBQUNDO2dCQUFHTCxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUc1Qyw4REFBQ007Z0JBQUVOLFdBQVU7MEJBQXNDOzs7Ozs7MEJBR25ELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2QseURBQU1BO29CQUFDcUIsTUFBSzs4QkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUIsRUFBRTtHQWxDV2hCOztRQUNjRCwwREFBZUE7UUFDekJGLHFEQUFXQTs7O0tBRmZHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oZGFzaGJvYXJkKS9fY29tcG9uZW50cy9lbXB0eS1ib2FyZHMudHN4PzYxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiY29udmV4L3JlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb252ZXgvX2dlbmVyYXRlZC9hcGlcIjtcbmltcG9ydCB7IHVzZU9yZ2FuaXphdGlvbiB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5cbmV4cG9ydCBjb25zdCBFbXB0eUJvYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgeyBvcmdhbml6YXRpb24gfSA9IHVzZU9yZ2FuaXphdGlvbigpO1xuICBjb25zdCBjcmVhdGUgPSB1c2VNdXRhdGlvbihhcGkuYm9hcmQuY3JlYXRlKVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFvcmdhbml6YXRpb24pIHJldHVybjtcblxuICAgIGNyZWF0ZSh7XG4gICAgICBvcmdJZDogb3JnYW5pemF0aW9uLmlkLFxuICAgICAgdGl0bGU6IFwidW50aXRsZWRcIlxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SW1hZ2UgXG4gICAgICAgIHNyYz1cIi9ub3RlLnN2Z1wiXG4gICAgICAgIGhlaWdodD17MTEwfVxuICAgICAgICB3aWR0aD17MTEwfVxuICAgICAgICBhbHQ9XCJFbXB0eVwiXG4gICAgICAvPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbXQtNlwiPlxuICAgICAgICBDcmVhdGUgeW91ciBmaXJzdCBib2FyZCFcbiAgICAgIDwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLWZvcmVncm91bmQgdGV4dGctc20gbXQtMlwiPlxuICAgICAgICBTdGFydCBieSBjcmVhdGluZyBhIGJvYXJkIGZvciB5b3VyIG9yZ2FuaXphdGlvblxuICAgICAgPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02XCI+XG4gICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCI+XG4gICAgICAgICAgQ3JlYXRlIGJvYXJkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbWFnZSIsInVzZU11dGF0aW9uIiwiYXBpIiwidXNlT3JnYW5pemF0aW9uIiwiRW1wdHlCb2FyZHMiLCJvcmdhbml6YXRpb24iLCJjcmVhdGUiLCJib2FyZCIsIm9uQ2xpY2siLCJvcmdJZCIsImlkIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsImgyIiwicCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/_components/empty-boards.tsx\n"));

/***/ })

});