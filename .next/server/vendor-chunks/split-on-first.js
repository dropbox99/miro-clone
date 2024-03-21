"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/split-on-first";
exports.ids = ["vendor-chunks/split-on-first"];
exports.modules = {

/***/ "(ssr)/./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ splitOnFirst)\n/* harmony export */ });\nfunction splitOnFirst(string, separator) {\n    if (!(typeof string === \"string\" && typeof separator === \"string\")) {\n        throw new TypeError(\"Expected the arguments to be of type `string`\");\n    }\n    if (string === \"\" || separator === \"\") {\n        return [];\n    }\n    const separatorIndex = string.indexOf(separator);\n    if (separatorIndex === -1) {\n        return [];\n    }\n    return [\n        string.slice(0, separatorIndex),\n        string.slice(separatorIndex + separator.length)\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3BsaXQtb24tZmlyc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLGFBQWFDLE1BQU0sRUFBRUMsU0FBUztJQUNyRCxJQUFJLENBQUUsUUFBT0QsV0FBVyxZQUFZLE9BQU9DLGNBQWMsUUFBTyxHQUFJO1FBQ25FLE1BQU0sSUFBSUMsVUFBVTtJQUNyQjtJQUVBLElBQUlGLFdBQVcsTUFBTUMsY0FBYyxJQUFJO1FBQ3RDLE9BQU8sRUFBRTtJQUNWO0lBRUEsTUFBTUUsaUJBQWlCSCxPQUFPSSxPQUFPLENBQUNIO0lBRXRDLElBQUlFLG1CQUFtQixDQUFDLEdBQUc7UUFDMUIsT0FBTyxFQUFFO0lBQ1Y7SUFFQSxPQUFPO1FBQ05ILE9BQU9LLEtBQUssQ0FBQyxHQUFHRjtRQUNoQkgsT0FBT0ssS0FBSyxDQUFDRixpQkFBaUJGLFVBQVVLLE1BQU07S0FDOUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21pcm8tY2xvbmUvLi9ub2RlX21vZHVsZXMvc3BsaXQtb24tZmlyc3QvaW5kZXguanM/OTQ1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdE9uRmlyc3Qoc3RyaW5nLCBzZXBhcmF0b3IpIHtcblx0aWYgKCEodHlwZW9mIHN0cmluZyA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlcGFyYXRvciA9PT0gJ3N0cmluZycpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIGFyZ3VtZW50cyB0byBiZSBvZiB0eXBlIGBzdHJpbmdgJyk7XG5cdH1cblxuXHRpZiAoc3RyaW5nID09PSAnJyB8fCBzZXBhcmF0b3IgPT09ICcnKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y29uc3Qgc2VwYXJhdG9ySW5kZXggPSBzdHJpbmcuaW5kZXhPZihzZXBhcmF0b3IpO1xuXG5cdGlmIChzZXBhcmF0b3JJbmRleCA9PT0gLTEpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRyZXR1cm4gW1xuXHRcdHN0cmluZy5zbGljZSgwLCBzZXBhcmF0b3JJbmRleCksXG5cdFx0c3RyaW5nLnNsaWNlKHNlcGFyYXRvckluZGV4ICsgc2VwYXJhdG9yLmxlbmd0aClcblx0XTtcbn1cbiJdLCJuYW1lcyI6WyJzcGxpdE9uRmlyc3QiLCJzdHJpbmciLCJzZXBhcmF0b3IiLCJUeXBlRXJyb3IiLCJzZXBhcmF0b3JJbmRleCIsImluZGV4T2YiLCJzbGljZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/split-on-first/index.js\n");

/***/ })

};
;