"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b5d7cb03a742\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzcyZTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiNWQ3Y2IwM2E3NDJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/modals/rename-modal.tsx":
/*!********************************************!*\
  !*** ./components/modals/rename-modal.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RenameModal: function() { return /* binding */ RenameModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/dialog */ \"(app-pages-browser)/./components/ui/dialog.tsx\");\n/* harmony import */ var _store_use_rename_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/use-rename-modal */ \"(app-pages-browser)/./store/use-rename-modal.ts\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _hooks_use_api_mutation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/use-api-mutation */ \"(app-pages-browser)/./hooks/use-api-mutation.ts\");\n/* harmony import */ var _convex_generated_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/convex/_generated/api */ \"(app-pages-browser)/./convex/_generated/api.js\");\n/* harmony import */ var sonner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sonner */ \"(app-pages-browser)/./node_modules/sonner/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ RenameModal auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst RenameModal = ()=>{\n    _s();\n    const { mutate, pending } = (0,_hooks_use_api_mutation__WEBPACK_IMPORTED_MODULE_6__.useApiMutation)(_convex_generated_api__WEBPACK_IMPORTED_MODULE_7__.api.board.update);\n    const { isOpen, onClose, initialValues } = (0,_store_use_rename_modal__WEBPACK_IMPORTED_MODULE_3__.useRenameModal)();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialValues.title);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTitle(initialValues.title);\n    }, [\n        initialValues.title\n    ]);\n    const onSubmit = (e)=>{\n        e.preventDefault();\n        mutate({\n            id: initialValues.id,\n            title\n        }).then(()=>{\n            sonner__WEBPACK_IMPORTED_MODULE_8__.toast.success(\"Board renamed\");\n            onClose();\n        }).catch(()=>sonner__WEBPACK_IMPORTED_MODULE_8__.toast.error(\"Failed to rename board\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.Dialog, {\n        open: isOpen,\n        onOpenChange: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogContent, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogHeader, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogTitle, {\n                        children: \"Edit board title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogDescription, {\n                    children: \"Enter a new title for this board\"\n                }, void 0, false, {\n                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: onSubmit,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                            disabled: pending,\n                            required: true,\n                            maxLength: 60,\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            placeholder: \"Board title\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogFooter, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_2__.DialogClose, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        type: \"button\",\n                                        variant: \"outline\",\n                                        children: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    disabled: false,\n                                    type: \"submit\",\n                                    children: \"Save\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n            lineNumber: 52,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/andreibrahim/Documents/portofolio/miro-clone/components/modals/rename-modal.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RenameModal, \"7QfviGe1RrgDidId4eQdzf9UvnU=\", false, function() {\n    return [\n        _hooks_use_api_mutation__WEBPACK_IMPORTED_MODULE_6__.useApiMutation,\n        _store_use_rename_modal__WEBPACK_IMPORTED_MODULE_3__.useRenameModal\n    ];\n});\n_c = RenameModal;\nvar _c;\n$RefreshReg$(_c, \"RenameModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbW9kYWxzL3JlbmFtZS1tb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUU4RDtBQVM5QjtBQUMwQjtBQUNaO0FBQ0U7QUFDVTtBQUNaO0FBQ2Y7QUFFeEIsTUFBTWUsY0FBYzs7SUFDekIsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHTCx1RUFBY0EsQ0FBQ0Msc0RBQUdBLENBQUNLLEtBQUssQ0FBQ0MsTUFBTTtJQUUzRCxNQUFNLEVBQ0pDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxhQUFhLEVBQ2QsR0FBR2IsdUVBQWNBO0lBQ2xCLE1BQU0sQ0FBQ2MsT0FBT0MsU0FBUyxHQUFHdkIsK0NBQVFBLENBQUNxQixjQUFjQyxLQUFLO0lBRXREdkIsZ0RBQVNBLENBQUM7UUFDUndCLFNBQVNGLGNBQWNDLEtBQUs7SUFDOUIsR0FBRztRQUFDRCxjQUFjQyxLQUFLO0tBQUM7SUFFeEIsTUFBTUUsV0FBOEMsQ0FDbERDO1FBRUFBLEVBQUVDLGNBQWM7UUFFaEJYLE9BQU87WUFDTFksSUFBSU4sY0FBY00sRUFBRTtZQUNwQkw7UUFDRixHQUNHTSxJQUFJLENBQUM7WUFDSmYseUNBQUtBLENBQUNnQixPQUFPLENBQUM7WUFDZFQ7UUFDRixHQUNDVSxLQUFLLENBQUMsSUFBTWpCLHlDQUFLQSxDQUFDa0IsS0FBSyxDQUFDO0lBQzdCO0lBRUEscUJBQ0UsOERBQUM5Qix5REFBTUE7UUFBQytCLE1BQU1iO1FBQVFjLGNBQWNiO2tCQUNsQyw0RUFBQ2xCLGdFQUFhQTs7OEJBQ1osOERBQUNFLCtEQUFZQTs4QkFDWCw0RUFBQ0csOERBQVdBO2tDQUFDOzs7Ozs7Ozs7Ozs4QkFJZiw4REFBQ0osb0VBQWlCQTs4QkFBQzs7Ozs7OzhCQUduQiw4REFBQytCO29CQUFLVixVQUFVQTtvQkFBVVcsV0FBVTs7c0NBQ2xDLDhEQUFDMUIsdURBQUtBOzRCQUNKMkIsVUFBVXBCOzRCQUNWcUIsUUFBUTs0QkFDUkMsV0FBVzs0QkFDWEMsT0FBT2pCOzRCQUNQa0IsVUFBVSxDQUFDZixJQUFNRixTQUFTRSxFQUFFZ0IsTUFBTSxDQUFDRixLQUFLOzRCQUN4Q0csYUFBWTs7Ozs7O3NDQUdkLDhEQUFDcEMsK0RBQVlBOzs4Q0FDWCw4REFBQ0QsOERBQVdBO29DQUFDc0MsT0FBTzs4Q0FDbEIsNEVBQUNqQyx5REFBTUE7d0NBQUNrQyxNQUFLO3dDQUFTQyxTQUFRO2tEQUFVOzs7Ozs7Ozs7Ozs4Q0FJMUMsOERBQUNuQyx5REFBTUE7b0NBQUMwQixVQUFVO29DQUFPUSxNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuRCxFQUFFO0dBakVXOUI7O1FBQ2lCSCxtRUFBY0E7UUFNdENILG1FQUFjQTs7O0tBUFBNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kYWxzL3JlbmFtZS1tb2RhbC50c3g/MDM5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgRGlhbG9nLFxuICBEaWFsb2dDb250ZW50LFxuICBEaWFsb2dEZXNjcmlwdGlvbixcbiAgRGlhbG9nSGVhZGVyLFxuICBEaWFsb2dDbG9zZSxcbiAgRGlhbG9nRm9vdGVyLFxuICBEaWFsb2dUaXRsZSxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9kaWFsb2dcIjtcbmltcG9ydCB7IHVzZVJlbmFtZU1vZGFsIH0gZnJvbSBcIkAvc3RvcmUvdXNlLXJlbmFtZS1tb2RhbFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgdXNlQXBpTXV0YXRpb24gfSBmcm9tIFwiQC9ob29rcy91c2UtYXBpLW11dGF0aW9uXCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiQC9jb252ZXgvX2dlbmVyYXRlZC9hcGlcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInNvbm5lclwiO1xuXG5leHBvcnQgY29uc3QgUmVuYW1lTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbXV0YXRlLCBwZW5kaW5nIH0gPSB1c2VBcGlNdXRhdGlvbihhcGkuYm9hcmQudXBkYXRlKTtcblxuICBjb25zdCB7XG4gICAgaXNPcGVuLFxuICAgIG9uQ2xvc2UsXG4gICAgaW5pdGlhbFZhbHVlcyxcbiAgfSA9IHVzZVJlbmFtZU1vZGFsKCk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoaW5pdGlhbFZhbHVlcy50aXRsZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaXRsZShpbml0aWFsVmFsdWVzLnRpdGxlKTtcbiAgfSwgW2luaXRpYWxWYWx1ZXMudGl0bGVdKTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUV2ZW50SGFuZGxlcjxIVE1MRm9ybUVsZW1lbnQ+ID0gKFxuICAgIGUsXG4gICkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG11dGF0ZSh7XG4gICAgICBpZDogaW5pdGlhbFZhbHVlcy5pZCxcbiAgICAgIHRpdGxlLFxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJCb2FyZCByZW5hbWVkXCIpO1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHRvYXN0LmVycm9yKFwiRmFpbGVkIHRvIHJlbmFtZSBib2FyZFwiKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGlhbG9nIG9wZW49e2lzT3Blbn0gb25PcGVuQ2hhbmdlPXtvbkNsb3NlfT5cbiAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nSGVhZGVyPlxuICAgICAgICAgIDxEaWFsb2dUaXRsZT5cbiAgICAgICAgICAgIEVkaXQgYm9hcmQgdGl0bGVcbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8L0RpYWxvZ0hlYWRlcj5cbiAgICAgICAgPERpYWxvZ0Rlc2NyaXB0aW9uPlxuICAgICAgICAgIEVudGVyIGEgbmV3IHRpdGxlIGZvciB0aGlzIGJvYXJkXG4gICAgICAgIDwvRGlhbG9nRGVzY3JpcHRpb24+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBkaXNhYmxlZD17cGVuZGluZ31cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICBtYXhMZW5ndGg9ezYwfVxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJvYXJkIHRpdGxlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICA8RGlhbG9nRm9vdGVyPlxuICAgICAgICAgICAgPERpYWxvZ0Nsb3NlIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9EaWFsb2dDbG9zZT5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2ZhbHNlfSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIFNhdmVcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvRGlhbG9nRm9vdGVyPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgPC9EaWFsb2c+XG4gIClcbn07Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRGlhbG9nIiwiRGlhbG9nQ29udGVudCIsIkRpYWxvZ0Rlc2NyaXB0aW9uIiwiRGlhbG9nSGVhZGVyIiwiRGlhbG9nQ2xvc2UiLCJEaWFsb2dGb290ZXIiLCJEaWFsb2dUaXRsZSIsInVzZVJlbmFtZU1vZGFsIiwiSW5wdXQiLCJCdXR0b24iLCJ1c2VBcGlNdXRhdGlvbiIsImFwaSIsInRvYXN0IiwiUmVuYW1lTW9kYWwiLCJtdXRhdGUiLCJwZW5kaW5nIiwiYm9hcmQiLCJ1cGRhdGUiLCJpc09wZW4iLCJvbkNsb3NlIiwiaW5pdGlhbFZhbHVlcyIsInRpdGxlIiwic2V0VGl0bGUiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwidGhlbiIsInN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwib3BlbiIsIm9uT3BlbkNoYW5nZSIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYXNDaGlsZCIsInR5cGUiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/modals/rename-modal.tsx\n"));

/***/ })

});