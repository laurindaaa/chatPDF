/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Navbar() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleUpgrade = async ()=>{\n        try {\n            const res = await fetch(\"/api/create-checkout-session\", {\n                method: \"POST\"\n            });\n            const data = await res.json();\n            if (data.url) {\n                window.location.href = data.url;\n            } else {\n                alert(\"Failed to get Stripe URL.\");\n            }\n        } catch (err) {\n            console.error(\"Stripe redirect error:\", err);\n            alert(\"Something went wrong.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center justify-between p-4 bg-gray-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                className: \"text-xl font-bold text-blue-600\",\n                children: \"PdfRead\"\n            }, void 0, false, {\n                fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4 items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/upload\",\n                        children: \"Upload\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleUpgrade,\n                        className: \"px-4 py-1 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition ml-2\",\n                        children: \"Upgrade \\uD83D\\uDD12\"\n                    }, void 0, false, {\n                        fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.SignedOut, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {\n                            mode: \"modal\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"px-4 py-1 bg-blue-500 text-white rounded\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.SignedIn, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.UserButton, {\n                            afterSignOutUrl: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/components/Navbar.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUNqRDtBQUNXO0FBRXpCLFNBQVNNO0lBQ3RCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixNQUFNRyxnQkFBZ0I7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxnQ0FBZ0M7Z0JBQ3REQyxRQUFRO1lBQ1Y7WUFDQSxNQUFNQyxPQUFPLE1BQU1ILElBQUlJLElBQUk7WUFDM0IsSUFBSUQsS0FBS0UsR0FBRyxFQUFFO2dCQUNaQyxPQUFPQyxRQUFRLENBQUNDLElBQUksR0FBR0wsS0FBS0UsR0FBRztZQUNqQyxPQUFPO2dCQUNMSSxNQUFNO1lBQ1I7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWkMsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkY7WUFDeENELE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDbkIsa0RBQUlBO2dCQUFDYSxNQUFLO2dCQUFJTSxXQUFVOzBCQUFrQzs7Ozs7OzBCQUkzRCw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDbkIsa0RBQUlBO3dCQUFDYSxNQUFLO2tDQUFVOzs7Ozs7a0NBRXJCLDhEQUFDUTt3QkFDQ0MsU0FBU2xCO3dCQUNUZSxXQUFVO2tDQUNYOzs7Ozs7a0NBSUQsOERBQUN0QixvREFBU0E7a0NBQ1IsNEVBQUNFLHVEQUFZQTs0QkFBQ3dCLE1BQUs7c0NBQ2pCLDRFQUFDRjtnQ0FBT0YsV0FBVTswQ0FBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTWpFLDhEQUFDdkIsbURBQVFBO2tDQUNQLDRFQUFDRSxxREFBVUE7NEJBQUMwQixpQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3RDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGRmcmVhZC13aXRoLWF1dGgtbmF2Ly4vY29tcG9uZW50cy9OYXZiYXIudHN4PzFiODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2lnbmVkSW4sIFNpZ25lZE91dCwgVXNlckJ1dHRvbiwgU2lnbkluQnV0dG9uIH0gZnJvbSBcIkBjbGVyay9uZXh0anNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGhhbmRsZVVwZ3JhZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgaWYgKGRhdGEudXJsKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChcIkZhaWxlZCB0byBnZXQgU3RyaXBlIFVSTC5cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiU3RyaXBlIHJlZGlyZWN0IGVycm9yOlwiLCBlcnIpO1xuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00IGJnLWdyYXktMTAwXCI+XG4gICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgUGRmUmVhZFxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdXBsb2FkXCI+VXBsb2FkPC9MaW5rPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVVcGdyYWRlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMSBiZy15ZWxsb3ctNDAwIHRleHQtYmxhY2sgZm9udC1zZW1pYm9sZCByb3VuZGVkIGhvdmVyOmJnLXllbGxvdy01MDAgdHJhbnNpdGlvbiBtbC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIFVwZ3JhZGUg8J+UklxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8U2lnbmVkT3V0PlxuICAgICAgICAgIDxTaWduSW5CdXR0b24gbW9kZT1cIm1vZGFsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInB4LTQgcHktMSBiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9TaWduSW5CdXR0b24+XG4gICAgICAgIDwvU2lnbmVkT3V0PlxuXG4gICAgICAgIDxTaWduZWRJbj5cbiAgICAgICAgICA8VXNlckJ1dHRvbiBhZnRlclNpZ25PdXRVcmw9XCIvXCIgLz5cbiAgICAgICAgPC9TaWduZWRJbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNpZ25lZEluIiwiU2lnbmVkT3V0IiwiVXNlckJ1dHRvbiIsIlNpZ25JbkJ1dHRvbiIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJyb3V0ZXIiLCJoYW5kbGVVcGdyYWRlIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJkYXRhIiwianNvbiIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImFsZXJ0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIm1vZGUiLCJhZnRlclNpZ25PdXRVcmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Navbar.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clerk/nextjs */ \"@clerk/nextjs\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_1__.ClerkProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wuyelin/Desktop/pdfread_with_auth_nav/pages/_app.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFFZjtBQUNXO0FBRTNCLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDOUQscUJBQ0UsOERBQUNKLHdEQUFhQTs7MEJBQ1osOERBQUNDLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BkZnJlYWQtd2l0aC1hdXRoLW5hdi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xlcmtQcm92aWRlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2xlcmtQcm92aWRlcj5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NsZXJrUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2xlcmtQcm92aWRlciIsIk5hdmJhciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@clerk/nextjs":
/*!********************************!*\
  !*** external "@clerk/nextjs" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@clerk/nextjs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();