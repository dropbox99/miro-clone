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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmptyBoards: function() { return /* binding */ EmptyBoards; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n/* harmony import */ var _hooks_use_api_mutation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/use-api-mutation */ \"(app-pages-browser)/./hooks/use-api-mutation.ts\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ EmptyBoards auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst EmptyBoards = ()=>{\n    _s();\n    const { organization } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useOrganization)();\n    const { mutate, pending } = (0,_hooks_use_api_mutation__WEBPACK_IMPORTED_MODULE_4__.useApiMutation)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_3__.api.board.create);\n    const onClick = ()=>{\n        if (!organization) return;\n        mutate({\n            orgId: organization.id,\n            title: \"untitled\"\n        }).then((id)=>{\n            sonner__WEBPACK_IMPORTED_MODULE_5__.toast.success(\"Board created\");\n        //TODO: redirect to board / {id}\n        }).catch(()=>sonner__WEBPACK_IMPORTED_MODULE_5__.toast.error(\"Failed to create board\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-full flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                src: \"/note.svg\",\n                height: 110,\n                width: 110,\n                alt: \"Empty\"\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold mt-6\",\n                children: \"Create your first board!\"\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-muted-foreground textg-sm mt-2\",\n                children: \"Start by creating a board for your organization\"\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    disabled: pending,\n                    onClick: onClick,\n                    size: \"lg\",\n                    children: \"Create board\"\n                }, void 0, false, {\n                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/app/(dashboard)/_components/empty-boards.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EmptyBoards, \"WtLfQvLERB5LO7jJ1o1wIHUqjMo=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_6__.useOrganization,\n        _hooks_use_api_mutation__WEBPACK_IMPORTED_MODULE_4__.useApiMutation\n    ];\n});\n_c = EmptyBoards;\nvar _c;\n$RefreshReg$(_c, \"EmptyBoards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oZGFzaGJvYXJkKS9fY29tcG9uZW50cy9lbXB0eS1ib2FyZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFZ0Q7QUFDakI7QUFDZTtBQUNFO0FBQ1U7QUFDM0I7QUFFeEIsTUFBTU0sY0FBYzs7SUFDekIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBR0osOERBQWVBO0lBQ3hDLE1BQU0sRUFBQ0ssTUFBTSxFQUFFQyxPQUFPLEVBQUMsR0FBR0wsdUVBQWNBLENBQUNGLHNEQUFHQSxDQUFDUSxLQUFLLENBQUNDLE1BQU07SUFFekQsTUFBTUMsVUFBVTtRQUNkLElBQUksQ0FBQ0wsY0FBYztRQUVuQkMsT0FBTztZQUNMSyxPQUFPTixhQUFhTyxFQUFFO1lBQ3RCQyxPQUFPO1FBQ1QsR0FDR0MsSUFBSSxDQUFDLENBQUNGO1lBQ0xULHlDQUFLQSxDQUFDWSxPQUFPLENBQUM7UUFDZCxnQ0FBZ0M7UUFDbEMsR0FDQ0MsS0FBSyxDQUFDLElBQU1iLHlDQUFLQSxDQUFDYyxLQUFLLENBQUM7SUFDN0I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNwQixrREFBS0E7Z0JBQ0pxQixLQUFJO2dCQUNKQyxRQUFRO2dCQUNSQyxPQUFPO2dCQUNQQyxLQUFJOzs7Ozs7MEJBRU4sOERBQUNDO2dCQUFHTCxXQUFVOzBCQUE4Qjs7Ozs7OzBCQUc1Qyw4REFBQ007Z0JBQUVOLFdBQVU7MEJBQXNDOzs7Ozs7MEJBR25ELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3JCLHlEQUFNQTtvQkFBQzRCLFVBQVVuQjtvQkFBU0csU0FBU0E7b0JBQVNpQixNQUFLOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0vRCxFQUFFO0dBdkNXdkI7O1FBQ2NILDBEQUFlQTtRQUNkQyxtRUFBY0E7OztLQUY3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhkYXNoYm9hcmQpL19jb21wb25lbnRzL2VtcHR5LWJvYXJkcy50c3g/NjFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb252ZXgvX2dlbmVyYXRlZC9hcGlcIjtcbmltcG9ydCB7IHVzZU9yZ2FuaXphdGlvbiB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5pbXBvcnQgeyB1c2VBcGlNdXRhdGlvbiB9IGZyb20gXCJAL2hvb2tzL3VzZS1hcGktbXV0YXRpb25cIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInNvbm5lclwiO1xuXG5leHBvcnQgY29uc3QgRW1wdHlCb2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgb3JnYW5pemF0aW9uIH0gPSB1c2VPcmdhbml6YXRpb24oKTtcbiAgY29uc3Qge211dGF0ZSwgcGVuZGluZ30gPSB1c2VBcGlNdXRhdGlvbihhcGkuYm9hcmQuY3JlYXRlKVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFvcmdhbml6YXRpb24pIHJldHVybjtcblxuICAgIG11dGF0ZSh7XG4gICAgICBvcmdJZDogb3JnYW5pemF0aW9uLmlkLFxuICAgICAgdGl0bGU6IFwidW50aXRsZWRcIlxuICAgIH0pXG4gICAgICAudGhlbigoaWQpID0+IHtcbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIkJvYXJkIGNyZWF0ZWRcIilcbiAgICAgICAgLy9UT0RPOiByZWRpcmVjdCB0byBib2FyZCAvIHtpZH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4gdG9hc3QuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGJvYXJkXCIpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPEltYWdlIFxuICAgICAgICBzcmM9XCIvbm90ZS5zdmdcIlxuICAgICAgICBoZWlnaHQ9ezExMH1cbiAgICAgICAgd2lkdGg9ezExMH1cbiAgICAgICAgYWx0PVwiRW1wdHlcIlxuICAgICAgLz5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG10LTZcIj5cbiAgICAgICAgQ3JlYXRlIHlvdXIgZmlyc3QgYm9hcmQhXG4gICAgICA8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRleHRnLXNtIG10LTJcIj5cbiAgICAgICAgU3RhcnQgYnkgY3JlYXRpbmcgYSBib2FyZCBmb3IgeW91ciBvcmdhbml6YXRpb25cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxuICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtwZW5kaW5nfSBvbkNsaWNrPXtvbkNsaWNrfSBzaXplPVwibGdcIj5cbiAgICAgICAgICBDcmVhdGUgYm9hcmRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIkltYWdlIiwiYXBpIiwidXNlT3JnYW5pemF0aW9uIiwidXNlQXBpTXV0YXRpb24iLCJ0b2FzdCIsIkVtcHR5Qm9hcmRzIiwib3JnYW5pemF0aW9uIiwibXV0YXRlIiwicGVuZGluZyIsImJvYXJkIiwiY3JlYXRlIiwib25DbGljayIsIm9yZ0lkIiwiaWQiLCJ0aXRsZSIsInRoZW4iLCJzdWNjZXNzIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImhlaWdodCIsIndpZHRoIiwiYWx0IiwiaDIiLCJwIiwiZGlzYWJsZWQiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(dashboard)/_components/empty-boards.tsx\n"));

/***/ })

});