webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/signup */ "./pages/signup.js");
var _jsxFileName = "C:\\playground\\reactNodebird\\nodebird\\front\\components\\LoginForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var LoginForm = function LoginForm() {
  var _useInput = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_3__["useInput"])(''),
      id = _useInput.id,
      onChangeId = _useInput.onChangeId;

  var _useInput2 = Object(_pages_signup__WEBPACK_IMPORTED_MODULE_3__["useInput"])(''),
      password = _useInput2.password,
      onChangePassword = _useInput2.onChangePassword;

  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    console.log({
      id: id,
      password: password
    });
  }, [id, password]);
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: onSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-id",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-id",
    value: id,
    onChange: onChangeId,
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "user-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    name: "user-password",
    value: password,
    onChange: onChangePassword,
    type: "password",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\uD68C\uC6D0\uAC00\uC785")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

/***/ })

})
//# sourceMappingURL=_app.js.a15ca5964a62a207d6c2.hot-update.js.map