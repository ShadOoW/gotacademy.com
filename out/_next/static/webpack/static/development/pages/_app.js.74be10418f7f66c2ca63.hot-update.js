webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: getServices, ServiceProvider, useMobxServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return getServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProvider", function() { return ServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMobxServices", function() { return useMobxServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/isServer */ "./src/utils/isServer.js");
/* harmony import */ var _github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./github */ "./src/services/github.js");
/* harmony import */ var _readme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./readme */ "./src/services/readme.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var clientSideServices;

var getServices = function getServices() {
  var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    github: {}
  };

  if (_utils_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"]) {
    return {
      githubService: new _github__WEBPACK_IMPORTED_MODULE_3__["default"](initialData.github),
      readmeService: new _readme__WEBPACK_IMPORTED_MODULE_4__["default"](initialData.readme)
    };
  }

  if (!clientSideServices) {
    clientSideServices = {
      githubService: new _github__WEBPACK_IMPORTED_MODULE_3__["default"](initialData.github),
      readmeService: new _readme__WEBPACK_IMPORTED_MODULE_4__["default"](initialData.readme)
    };
  }

  return clientSideServices;
};

var ServiceContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var ServiceProvider = function ServiceProvider(_ref) {
  var value = _ref.value,
      children = _ref.children;
  return __jsx(ServiceContext.Provider, {
    value: value
  }, children);
};

ServiceProvider.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    languageService: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    githubService: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    readmeService: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};

var useMobxServices = function useMobxServices() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(ServiceContext);
};



/***/ })

})
//# sourceMappingURL=_app.js.74be10418f7f66c2ca63.hot-update.js.map