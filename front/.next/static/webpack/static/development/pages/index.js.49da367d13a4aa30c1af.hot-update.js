webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _jsxFileName = "C:\\playground\\reactNodebird\\nodebird\\front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      nickname: '삼바림'
    },
    content: '첫 번째 게시물',
    img: 'https://i.imgur.com/DxH71p6.png'
  }]
};

var Home = function Home() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn,
      user = _useSelector.user;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["loginAction"]); // dispatch(logoutAction)
  }, []);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, user ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uB85C\uADF8\uC778 \uD588\uC2B5\uB2C8\uB2E4: ", user.nickname) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uB85C\uADF8\uC544\uC6C3 \uD588\uC2B5\uB2C8\uB2E4."), __jsx(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), dummy.isLoggedIn && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), dummy.mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: c,
      post: c,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.49da367d13a4aa30c1af.hot-update.js.map