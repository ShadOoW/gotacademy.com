webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobx-react.module.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services */ "./src/services/index.js");
/* harmony import */ var partials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! partials */ "./src/partials/index.js");
/* harmony import */ var layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! layout */ "./src/layout/index.js");
/* harmony import */ var typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! typography */ "./src/typography/index.js");
/* harmony import */ var common_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/button */ "./src/common/button/index.js");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components */ "./src/components/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




 // Services

 // Parials

 // Layout

 // Typography

 // Common

 // Components



function HomePage(_ref) {
  var t = _ref.t,
      language = _ref.language;

  var _useMobxServices = Object(services__WEBPACK_IMPORTED_MODULE_6__["useMobxServices"])(),
      languageService = _useMobxServices.languageService;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, __jsx("title", null, "Home Page")), __jsx(layout__WEBPACK_IMPORTED_MODULE_8__["Container"], null, __jsx(partials__WEBPACK_IMPORTED_MODULE_7__["Header"], null), __jsx(layout__WEBPACK_IMPORTED_MODULE_8__["Content"], null, __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["H3"], {
    pb: "2rem"
  }, "Introduction"), __jsx(layout__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
    flexDirection: "column"
  }, __jsx("p", null, "This is a demo website, to showcase a nextjs starter kit in action."), __jsx("p", null, "Read more about it in the ", __jsx("a", {
    href: "/readme"
  }, "readme page"), ", or on", ' ', __jsx("a", {
    href: "https://github.com/ShadOoW/web-starter-kit"
  }, "github"))), __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["H3"], {
    py: "2rem"
  }, "Translation / CSS Direction"), __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    bold: true
  }, t('Hello')), __jsx(layout__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
    pt: "1rem",
    justifyContent: "space-between",
    width: "30rem"
  }, __jsx(common_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    className: language === 'en' ? 'active' : '',
    onClick: function onClick() {
      return languageService.changeLanguage('en');
    },
    "aria-label": "Change Language to English"
  }, "English"), __jsx(common_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    type: "button",
    className: language === 'fr' ? 'active' : '',
    onClick: function onClick() {
      return languageService.changeLanguage('fr');
    },
    "aria-label": "Change Language to French"
  }, "French"), __jsx(common_button__WEBPACK_IMPORTED_MODULE_10__["Button"], {
    type: "button",
    className: language === 'ar' ? 'active' : '',
    onClick: function onClick() {
      return languageService.changeLanguage('ar');
    },
    "aria-label": "Change Language to Arabic"
  }, "Arabic")), __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["H3"], {
    py: "2rem"
  }, "i18n aware Routing"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/readme"
  }, __jsx("a", null, "This link will magically prepend locale subpaths in the url.")), __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["H3"], {
    py: "2rem"
  }, "Mobx & REST"), __jsx(layout__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
    flexDirection: "column"
  }, __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["Text"], null, "This is a demo to show how to create a ", __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    bold: true
  }, "mobx"), ' ', "service to retrieve data from a ", __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    bold: true
  }, "REST Api"), " and generate ", __jsx(typography__WEBPACK_IMPORTED_MODULE_9__["Text"], {
    bold: true
  }, "computed"), " states based on it.", __jsx("br", null), "The last 30 commits of this repository."), __jsx(components__WEBPACK_IMPORTED_MODULE_11__["HTTPDemo"], null)))));
}

HomePage.getInitialProps = function _callee(_ref2) {
  var mobxServices;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          mobxServices = _ref2.mobxServices;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(mobxServices.githubService.fetch());

        case 3:
          return _context.abrupt("return", {
            namespacesRequired: ['common']
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

HomePage.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.89590eb99095ddc4e9ce.hot-update.js.map