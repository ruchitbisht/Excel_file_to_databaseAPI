(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Ruchit\Desktop\angular\coreui-free-angular-admin-template-master\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3QLC": function QLC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
        return ForgetPasswordComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "iMCu");
      /* harmony import */


      var _forget_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./forget-password.component.scss */
      "cSaB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ForgetPasswordComponent = /*#__PURE__*/function () {
        function ForgetPasswordComponent() {
          _classCallCheck(this, ForgetPasswordComponent);
        }

        _createClass(ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ForgetPasswordComponent;
      }();

      ForgetPasswordComponent.ctorParameters = function () {
        return [];
      };

      ForgetPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forget-password',
        template: _raw_loader_forget_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forget_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ForgetPasswordComponent);
      /***/
    },

    /***/
    "4J/P": function JP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./file.service */
      "shLW");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(fileService, router) {
          _classCallCheck(this, AuthGuard);

          this.fileService = fileService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            if (this.fileService.isLoggedIn) {
              return true;
            }

            this.router.navigate(['/login']);
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AuthGuard);
      /***/
    },

    /***/
    "4XPS": function XPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bVw4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RegisterComponent = function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      };

      RegisterComponent.ctorParameters = function () {
        return [];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegisterComponent);
      /***/
    },

    /***/
    "7x+4": function x4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".temp {\n  padding-bottom: 50px;\n  text-align: center;\n  padding-bottom: 50 px;\n}\n\n.card {\n  padding-top: 50px;\n  padding-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBRUoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1we1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAgcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "8gg5": function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false
      };
      /***/
    },

    /***/
    "DodC": function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p": function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "JPqG": function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent(fileService) {
          _classCallCheck(this, DefaultLayoutComponent);

          this.fileService = fileService;
          this.sidebarMinimized = false;
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_4__["navItems"];
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            this.sidebarMinimized = e;
          }
        }, {
          key: "logout",
          value: function logout() {
            this.fileService.logout();
            window.location.href = "/#/login";
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent.ctorParameters = function () {
        return [{
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]
        }];
      };

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"]])], DefaultLayoutComponent);
      /***/
    },

    /***/
    "Lrxh": function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "M+Zk": function MZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"card shadow p-3 mb-5 bg-white rounded\">\n      <h1 style=\"text-align: center; font-weight: 600; padding: 15px;\">Update Data</h1>\n      <form (ngSubmit)=\"onSubmit()\" >\n\n          <div class=\"form-group row\">\n            <label  class=\"col-sm-2 col-form-label\" >Customer Name </label>\n            <div class=\"col-sm-10\">\n            <input \n              type=\"text\"\n              name=\"customerName\"\n              class=\"form-control cns \"\n              [(ngModel)]=\"file.customerName\"\n            />\n          </div>\n        </div>\n  \n          <div class=\"form-group row\">\n            <label  class=\"col-sm-2 col-form-label\">Customer Code</label>\n            <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"customerCode\"\n              class=\"form-control\"\n              placeholder=\"Customer Code\"\n              [(ngModel)]=\"file.customerCode\"\n            />\n          </div>\n\n        </div>\n  \n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Site Name</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"siteName\"\n              class=\"form-control\"\n              placeholder=\"Site Name\"\n              [(ngModel)]=\"file.siteName\"\n            />\n          </div>\n        </div>\n  \n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Site Address </label>\n          <div class=\"col-sm-10\">\n            <textarea\n              class=\"form-control\"\n              name=\"siteAddress\"\n              [(ngModel)]=\"file.siteAddress\"\n            ></textarea>\n          </div>\n        </div>\n  \n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">City</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"city\"\n              class=\"form-control\"\n              placeholder=\"City\"\n              [(ngModel)]=\"file.city\"\n            />\n          </div>\n        </div>\n  \n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">State</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"state\"\n              class=\"form-control\"\n              placeholder=\"State\"\n              [(ngModel)]=\"file.state\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Local Contact Person Name</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"localContactPersonName\"\n              class=\"form-control\"\n              placeholder=\"Local Contact Person Name\"\n              [(ngModel)]=\"file.localContactPersonName\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Local Person Contact </label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"number\"\n              name=\"localPersonContact\"\n              class=\"form-control\"\n              placeholder=\"Local Person Contact\"\n              [(ngModel)]=\"file.localPersonContact\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Type of Charger</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"typeOfCharger\"\n              class=\"form-control\"\n              placeholder=\"Type of Charger\"\n              [(ngModel)]=\"file.typeOfCharger\"\n            />\n          </div>\n        </div>\n  \n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Model</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"model\"\n              class=\"form-control\"\n              placeholder=\"Model\"\n              [(ngModel)]=\"file.model\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Serial Number</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"serialNumber\"\n              class=\"form-control\"\n              placeholder=\"D91810242830016\"\n              [(ngModel)]=\"file.serialNumber\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Date of Invoice</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"date\"\n              name=\"dateOfInvoice\"\n              class=\"form-control\"\n              placeholder=\"Invoice Date\"\n              [(ngModel)]=\"file.dateOfInvoice\"\n            />\n          </div>\n          </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Final Installation Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"finalInstallationStatus\"\n              class=\"form-control\"\n              placeholder=\"Final Installation Status\"\n              [(ngModel)]=\"file.finalInstallationStatus\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Installation Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"installationStatus\"\n              class=\"form-control\"\n              placeholder=\"Installation Status\"\n              [(ngModel)]=\"file.installationStatus\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Commissioning status </label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"commissioningStatus\"\n              class=\"form-control\"\n              placeholder=\"Commissioning status\"\n              [(ngModel)]=\"file.commissioningStatus\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\"\n            >Commissioned By (Exicom Eng Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"commissionedBy\"\n              class=\"form-control\"\n              placeholder=\"Exicom Eng Name\"\n              [(ngModel)]=\"file.commissionedBy\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Commissioning Date</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"date\"\n              name=\"commissioningDate\"\n              class=\"form-control\"\n              placeholder=\"DD-MMM-YYYY\"\n              [(ngModel)]=\"file.commissioningDate\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Warranty/AMC Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"commissioningDate\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.warrantyAmcStatus\"\n            />\n          </div>\n          </div>\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Warranty/AMC (in month)</label>\n            <div class=\"col-sm-10\">\n              <input\n                type=\"date\"\n                name=\"warrantyAmcInMonth\"\n                class=\"form-control\"\n                placeholder=\"In month\"\n                [(ngModel)]=\"file.warrantyAmcInMonth\"\n              />\n            </div>\n            </div>\n\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Warranty/AMC validity date</label>\n              <div class=\"col-sm-10\">\n                <input\n                  type=\"date\"\n                  name=\"warrantyAmcValidityDate\"\n                  class=\"form-control\"\n                  placeholder=\"Validity Date\"\n                  [(ngModel)]=\"file.warrantyAmcValidityDate\"\n                />\n              </div> \n              </div>\n              <div class=\"form-group row\">\n                <label class=\"col-sm-2 col-form-label\">PM Frequency</label>\n                <div class=\"col-sm-10\">\n                  <input\n                    type=\"text\"\n                    name=\"pMFrequency\"\n                    class=\"form-control\"\n                    placeholder=\"Commissioning Date\"\n                    [(ngModel)]=\"file.pMFrequency\"\n                  />\n                </div>   \n                </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 1 Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM1Status\"\n              class=\"form-control\"\n              placeholder=\"PM 1 Status\"\n              [(ngModel)]=\"file.pM1Status\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 1 Done On</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"date\"\n              name=\"pM1DoneOn\"\n              class=\"form-control\"\n              placeholder=\"Done On\"\n              [(ngModel)]=\"file.pM1DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 1 Done (Engineer Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM1Done\"\n              class=\"form-control\"\n              placeholder=\"Engineer Name\"\n              [(ngModel)]=\"file.pM1Done\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 1 Remarks</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM1Remarks\"\n              class=\"form-control\"\n              placeholder=\"Remarks\"\n              [(ngModel)]=\"file.pM1Remarks\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\"> SW Update</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"sWUpdate\"\n              class=\"form-control\"\n              placeholder=\"SW Update\"\n              [(ngModel)]=\"file.sWUpdate\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\"> PM Due Date</label>\n          <div class=\"colxf-sm-10\">\n            <input\n              type=\"date\"\n              name=\"pMDueDate\"\n              class=\"form-control\"\n              placeholder=\"PM Due Date\"\n              [(ngModel)]=\"file.pMDueDate\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 2 Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM2Status\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.pM2Status\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 2 Done On</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM2DoneOn\"\n              class=\"form-control\"\n              placeholder=\"Done On\"\n              [(ngModel)]=\"file.pM2DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 2 Done (Engineer Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM2Done\"\n              class=\"form-control\"\n              placeholder=\"Engineer Name\"\n              [(ngModel)]=\"file.pM2Done\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 2 Remarks</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM2Remarks\"\n              class=\"form-control\"\n              placeholder=\"Remarks\"\n              [(ngModel)]=\"file.pM2Remarks\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 3 Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM3Status\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.pM3DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 3 Done On</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              pM3DoneOn\n              class=\"form-control\"\n              placeholder=\"Done On\"\n              [(ngModel)]=\"file.pM3DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 3 Done (Engineer Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM3Done\"\n              class=\"form-control\"\n              placeholder=\"Engineer Name\"\n              [(ngModel)]=\"file.pM3Done\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 3 Remarks</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM3Remarks\"\n              class=\"form-control\"\n              placeholder=\"Remarks\"\n              [(ngModel)]=\"file.pM3Remarks\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 4 Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM4Status\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.pM4Status\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 4 Done On</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              pM4DoneOn\n              class=\"form-control\"\n              placeholder=\"Done On\"\n              [(ngModel)]=\"file.pM4DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 4 Done (Engineer Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM4Done\"\n              class=\"form-control\"\n              placeholder=\"Engineer Name\"\n              [(ngModel)]=\"file.pM4Done\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 4 Remarks</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM4Remarks\"\n              class=\"form-control\"\n              placeholder=\"Remarks\"\n              [(ngModel)]=\"file.pM4Remarks\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 5 Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM5Status\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.pM5Status\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 5 Done On</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              pM5DoneOn\n              class=\"form-control\"\n              placeholder=\"Done On\"\n              [(ngModel)]=\"file.pM5DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 5 Done (Engineer Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM5Done\"\n              class=\"form-control\"\n              placeholder=\"Engineer Name\"\n              [(ngModel)]=\"file.pM5Done\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 5 Remarks</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM5Remarks\"\n              class=\"form-control\"\n              placeholder=\"Remarks\"\n              [(ngModel)]=\"file.pM5Remarks\"\n            />\n          </div>\n        </div>\n  \n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 6 Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM6Status\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.pM6Status\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 6 Done On</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              pM6DoneOn\n              class=\"form-control\"\n              placeholder=\"Done On\"\n              [(ngModel)]=\"file.pM6DoneOn\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 6 Done (Engineer Name)</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM6Done\"\n              class=\"form-control\"\n              placeholder=\"Engineer Name\"\n              [(ngModel)]=\"file.pM6Done\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">PM 6 Remarks</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"pM6Remarks\"\n              class=\"form-control\"\n              placeholder=\"Remarks\"\n              [(ngModel)]=\"file.pM6Remarks\"\n            />\n          </div>\n        </div>\n        <div class=\"button\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-success\" \n          style=\"margin: 15px\"\n          >\n         Update\n        </button>\n        <button type=\"reset\" (click)=\"onCancel()\" class=\"btn btn-secondary\">Cancel</button>\n      </div>\n      </form>\n    </div>\n  </div>\n  \n\n  \n  <ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n    <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n  </ngx-spinner>\n";
      /***/
    },

    /***/
    "OSZB": function OSZB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkb3dubG9hZC1zYW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKIiwiZmlsZSI6ImRvd25sb2FkLXNhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "QB/w": function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LoginComponent = function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoginComponent);
      /***/
    },

    /***/
    "RnhZ": function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SC6f": function SC6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button {\n  text-align: center;\n}\n\n.card {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1cGRhdGUtZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUoiLCJmaWxlIjoidXBkYXRlLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5jYXJke1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG59ICAgIl19 */";
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "VB8A": function VB8A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".button {\n  text-align: center;\n}\n\ninput {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  color: black;\n}\n\n.no-outline:focus {\n  outline: none;\n}\n\n.cn {\n  padding: 4px;\n  font-weight: 600;\n  width: 500px;\n  color: black;\n  margin: auto;\n}\n\n.cns {\n  background-color: white;\n}\n\n.card {\n  padding: 30px;\n  width: 1200px;\n}\n\n.head {\n  padding-bottom: 40px;\n  font-weight: 600;\n}\n\n.area {\n  background-color: white;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUVFO0VBQ0UsYUFBQTtBQUNKOztBQUNFO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRU47O0FBQUU7RUFDRSx1QkFBQTtBQUdKOztBQURFO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFJTjs7QUFGRTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUFLTjs7QUFIRTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBTUoiLCJmaWxlIjoidmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICBcclxuXHJcbiAgfVxyXG4gIC5uby1vdXRsaW5lOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5jbntcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgbWFyZ2luOiBhdXRvOyAgXHJcbiAgfVxyXG4gIC5jbnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLmNhcmR7XHJcbiAgICAgIHBhZGRpbmc6MzBweDtcclxuICAgICAgd2lkdGg6IDEyMDBweDtcclxuICB9XHJcbiAgLmhlYWR7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAuYXJlYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gfSJdfQ== */";
      /***/
    },

    /***/
    "W7NM": function W7NM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DownloadSampleComponent", function () {
        return DownloadSampleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_download_sample_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./download-sample.component.html */
      "qHSS");
      /* harmony import */


      var _download_sample_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./download-sample.component.scss */
      "OSZB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");

      var DownloadSampleComponent = /*#__PURE__*/function () {
        function DownloadSampleComponent(fileService, spinner) {
          _classCallCheck(this, DownloadSampleComponent);

          this.fileService = fileService;
          this.spinner = spinner;
        }

        _createClass(DownloadSampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadFile",
          value: function downloadFile() {
            this.spinner.show();
            this.fileService.downloadFile().subscribe(function (blob) {
              return Object(file_saver__WEBPACK_IMPORTED_MODULE_5__["saveAs"])(blob, "Sample" + ".xlsx");
            });
            console.log("HEE");
            this.spinner.hide();
          }
        }]);

        return DownloadSampleComponent;
      }();

      DownloadSampleComponent.ctorParameters = function () {
        return [{
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      DownloadSampleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-download-sample',
        template: _raw_loader_download_sample_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_download_sample_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])], DownloadSampleComponent);
      /***/
    },

    /***/
    "WVZb": function WVZb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginRequest", function () {
        return LoginRequest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileRequest", function () {
        return FileRequest;
      });

      var LoginRequest = function LoginRequest() {
        _classCallCheck(this, LoginRequest);
      };

      var FileRequest = function FileRequest() {
        _classCallCheck(this, FileRequest);
      };
      /***/

    },

    /***/
    "WuJX": function WuJX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
        return ViewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./view.component.html */
      "at95");
      /* harmony import */


      var _view_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./view.component.scss */
      "VB8A");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _model_file_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model/file.model */
      "WVZb");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");

      var ViewComponent = /*#__PURE__*/function () {
        function ViewComponent(fileService, router, route, spinner) {
          _classCallCheck(this, ViewComponent);

          this.fileService = fileService;
          this.router = router;
          this.route = route;
          this.spinner = spinner;
          this.file = new _model_file_model__WEBPACK_IMPORTED_MODULE_6__["FileRequest"]();
        }

        _createClass(ViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.file = new _model_file_model__WEBPACK_IMPORTED_MODULE_6__["FileRequest"]();
            this.srNo = this.route.snapshot.params['srNo'];
            this.fileService.getFileById(this.srNo).subscribe(function (data) {
              console.log(JSON.stringify(data));
              _this.file = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "updateItem",
          value: function updateItem(srNo) {
            this.spinner.show();
            this.router.navigate(['update', srNo]);
            this.spinner.hide();
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.spinner.show();
            this.router.navigate(['/show']);
            this.spinner.hide();
          }
        }]);

        return ViewComponent;
      }();

      ViewComponent.ctorParameters = function () {
        return [{
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }];
      };

      ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view',
        template: _raw_loader_view_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])], ViewComponent);
      /***/
    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/paginator */
      "5QHs");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "Ynp+");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "44PX");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _file_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./file/file-list/file-list.component */
      "xpCK");
      /* harmony import */


      var _file_home_home_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./file/home/home.component */
      "ntXb");
      /* harmony import */


      var _file_view_view_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./file/view/view.component */
      "WuJX");
      /* harmony import */


      var _file_insert_row_insert_row_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./file/insert-row/insert-row.component */
      "eXs0");
      /* harmony import */


      var _file_update_file_update_file_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./file/update-file/update-file.component */
      "bmaA");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./service/file.service */
      "shLW");
      /* harmony import */


      var _file_download_sample_download_sample_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./file/download-sample/download-sample.component */
      "W7NM");
      /* harmony import */


      var _login_pulse_login_pulse_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./login-pulse/login-pulse.component */
      "w9Of");
      /* harmony import */


      var _service_auth_guard__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./service/auth.guard */
      "4J/P");
      /* harmony import */


      var _service_auth_intercepter__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./service/auth.intercepter */
      "mSkA");
      /* harmony import */


      var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./forget-password/forget-password.component */
      "3QLC");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      }; // Import containers

      var APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutComponent"]]; // Import routing module
      // Import 3rd party components

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_21__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_23__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_24__["TabsModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_25__["ChartsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_14__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_14__["IconSetModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_31__["NgxSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]].concat(APP_CONTAINERS, [_views_error_404_component__WEBPACK_IMPORTED_MODULE_17__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_18__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"], _file_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_26__["FileListComponent"], _file_home_home_component__WEBPACK_IMPORTED_MODULE_27__["HomeComponent"], _file_view_view_component__WEBPACK_IMPORTED_MODULE_28__["ViewComponent"], _file_insert_row_insert_row_component__WEBPACK_IMPORTED_MODULE_29__["InsertRowComponent"], _file_update_file_update_file_component__WEBPACK_IMPORTED_MODULE_30__["UpdateFileComponent"], _file_download_sample_download_sample_component__WEBPACK_IMPORTED_MODULE_33__["DownloadSampleComponent"], _login_pulse_login_pulse_component__WEBPACK_IMPORTED_MODULE_34__["LoginPulseComponent"], _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgetPasswordComponent"]]),
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_14__["IconSetService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_31__["NgxSpinnerService"], _service_auth_guard__WEBPACK_IMPORTED_MODULE_35__["AuthGuard"], _service_file_service__WEBPACK_IMPORTED_MODULE_32__["FileService"], [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _service_auth_intercepter__WEBPACK_IMPORTED_MODULE_36__["AuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
        }]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "at95": function at95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"container\">\n    <div class=\"card shadow p-3 mb-5 bg-white rounded\" >\n        <form >\n          <div class=\"col-sm-11\">\n         <h1 style=\"text-align: center;font-weight: 600;\"> DETAILS OF <input class=\"cn\" type=\"text\" name=\"customerName\" disabled [(ngModel)]=\"file.customerName\"/></h1>\n        </div>\n        <div class=\"form-group row\">\n            <label  class=\"col-sm-2 col-form-label\" >Customer Name    :</label>\n            <div class=\"col-sm-10\">\n            <input disabled\n              type=\"text\"\n              name=\"customerName\"\n              class=\"form-control cns \"\n              [(ngModel)]=\"file.customerName\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">Customer Code     :</label>\n          <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"customerCode\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.customerCode\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Site Name   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"siteName\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.siteName\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Site Address    :</label>\n        <div class=\"col-sm-10\">\n          <textarea disabled\n             class=\"form-control cns area\"\n            name=\"siteAddress\"\n            [(ngModel)]=\"file.siteAddress\"\n          ></textarea>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">City   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"city\"\n             class=\"form-control cns\"\n            \n            [(ngModel)]=\"file.city\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">State   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"state\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.state\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label labels\">Local Contact Person Name   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"localContactPersonName\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.localContactPersonName\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Local Person Contact    :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"number\"\n            name=\"localPersonContact\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.localPersonContact\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Type of Charger   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"typeOfCharger\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.typeOfCharger\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Model   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"model\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.model\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Serial Number   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"serialNumber\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.serialNumber\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Date of Invoice   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"date\"\n            name=\"dateOfInvoice\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.dateOfInvoice\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Final Installation Status :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"finalInstallationStatus\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.finalInstallationStatus\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Installation Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"installationStatus\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.installationStatus\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Commissioning status    :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"commissioningStatus\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.commissioningStatus\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Commissioned By (Exicom Eng Name)</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"commissionedBy\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.commissionedBy\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Commissioning Date   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"commissioningDate\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.commissioningDate\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Warranty/AMC Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"warrantyAmcStatus\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.warrantyAmcStatus\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Warranty/AMC (In Months)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"warrantyAmcInMonth\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.warrantyAmcInMonth\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Warranty/AMC Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"warrantyAmcValidityDate\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.warrantyAmcValidityDate\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM Frequency   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pMFrequency\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pMFrequency\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM1Status\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM1Status\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Done On   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM1DoneOn\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM1DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Done (Engineer Name)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM1Done\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM1Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Remarks   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM1Remarks\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM1Remarks\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\"> SW Update   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"sWUpdate\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.sWUpdate\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\"> PM Due Date   :</label>\n        <div class=\"colxf-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pMDueDate\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pMDueDate\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM2Status\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM2Status\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Done On   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM2DoneOn\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM2DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Done (Engineer Name)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM2Done\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM2Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Remarks   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM2Remarks\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM2Remarks\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM3Status\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM3DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Done On   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            pM3DoneOn\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM3DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Done (Engineer Name)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM3Done\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM3Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Remarks   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM3Remarks\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM3Remarks\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM4Status\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM4Status\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Done On   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            pM4DoneOn\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM4DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Done (Engineer Name)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM4Done\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM4Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Remarks   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM4Remarks\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM4Remarks\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM5Status\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM5Status\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Done On   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled \n            type=\"text\"\n            pM5DoneOn\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM5DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Done (Engineer Name)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM5Done\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM5Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Remarks   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM5Remarks\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM5Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Status   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM6Status\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM6Status\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Done On   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            pM6DoneOn\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM6DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Done (Engineer Name)   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM6Done\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM6Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Remarks   :</label>\n        <div class=\"col-sm-10\">\n          <input disabled\n            type=\"text\"\n            name=\"pM6Remarks\"\n             class=\"form-control cns\"\n            [(ngModel)]=\"file.pM6Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"button\">\n      <button\n        class=\"btn btn-warning\"\n        style=\"margin: 15px;\" (click)=\"updateItem(file.srNo)\">\n        Edit\n        </button>\n        <button (click)=\"onCancel()\" class=\"btn btn-success\">Cancel</button>\n        </div>\n    </form>\n    </div>\n</div>\n\n\n\n<ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n  <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n</ngx-spinner>\n";
      /***/
    },

    /***/
    "bVIb": function bVIb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".table th,\n.table td {\n  padding: 0.4rem;\n  vertical-align: top;\n  border-bottom: 1px solid #e0e0e0;\n}\n\ntd {\n  padding: 10px;\n  margin: 0%;\n  font-size: x-small;\n  font-weight: 500;\n  text-align: left;\n}\n\nth {\n  padding-right: 0;\n  font-size: smaller;\n  color: #757575;\n}\n\nlabel {\n  vertical-align: bottom;\n}\n\n.table.sticky th {\n  position: sticky;\n  top: 0;\n}\n\n#cards {\n  background-color: #ffffff;\n  overflow: auto;\n  height: 650px;\n}\n\n.header {\n  position: sticky;\n  top: 0;\n}\n\n.mat-form-field {\n  width: 10em;\n  height: 0.1em;\n}\n\n.no1 {\n  display: block;\n  list-style-type: disc;\n  margin-block-start: 1em;\n  margin-block-end: 1em;\n  margin-inline-start: 0px;\n  margin-inline-end: 0px;\n  padding-inline-start: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaWxlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUtGIiwiZmlsZSI6ImZpbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcclxufVxyXG50ZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBtYXJnaW46IDAlO1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxudGgge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbi8vIC5wYWRkaW5nMTIge1xyXG4vLyAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gfVxyXG5sYWJlbCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG4udGFibGUuc3RpY2t5IHRoIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG4jY2FyZHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxufVxyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMGVtO1xyXG4gIGhlaWdodDogMC4xZW07XHJcbn1cclxuLm5vMXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0MHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "bVw4": function bVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <form>\n                <h1>Register</h1>\n                <p class=\"text-muted\">Create your account</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\n                </div>\n                <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n              </form>\n            </div>\n            <div class=\"card-footer p-4\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n                </div>\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "beVS": function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _file_download_sample_download_sample_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./file/download-sample/download-sample.component */
      "W7NM");
      /* harmony import */


      var _file_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./file/file-list/file-list.component */
      "xpCK");
      /* harmony import */


      var _file_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./file/home/home.component */
      "ntXb");
      /* harmony import */


      var _file_insert_row_insert_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./file/insert-row/insert-row.component */
      "eXs0");
      /* harmony import */


      var _file_update_file_update_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./file/update-file/update-file.component */
      "bmaA");
      /* harmony import */


      var _file_view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./file/view/view.component */
      "WuJX");
      /* harmony import */


      var _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./forget-password/forget-password.component */
      "3QLC");
      /* harmony import */


      var _login_pulse_login_pulse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login-pulse/login-pulse.component */
      "w9Of");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS"); // Import Containers
      // import { LoginComponent } from './login/login.component';


      var routes = [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_pulse_login_pulse_component__WEBPACK_IMPORTED_MODULE_11__["LoginPulseComponent"],
        data: {
          title: 'Login Page'
        }
      }, {
        path: 'forgetpassword',
        component: _forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_10__["ForgetPasswordComponent"],
        data: {
          title: 'Forget Page'
        }
      }, {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
        data: {
          title: 'Register Page'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        children: [// {
        //   path: 'dashboard',
        //   loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
        // },
        {
          path: 'show',
          component: _file_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_5__["FileListComponent"]
        }, {
          path: 'add',
          component: _file_insert_row_insert_row_component__WEBPACK_IMPORTED_MODULE_7__["InsertRowComponent"]
        }, {
          path: 'home',
          component: _file_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
        }, {
          path: 'view/:srNo',
          component: _file_view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"]
        }, {
          path: 'update/:srNo',
          component: _file_update_file_update_file_component__WEBPACK_IMPORTED_MODULE_8__["UpdateFileComponent"]
        }, {
          path: 'downloadSample',
          component: _file_download_sample_download_sample_component__WEBPACK_IMPORTED_MODULE_4__["DownloadSampleComponent"]
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_12__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "bmaA": function bmaA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateFileComponent", function () {
        return UpdateFileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_update_file_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./update-file.component.html */
      "M+Zk");
      /* harmony import */


      var _update_file_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./update-file.component.scss */
      "SC6f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _model_file_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model/file.model */
      "WVZb");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");

      var UpdateFileComponent = /*#__PURE__*/function () {
        function UpdateFileComponent(fileService, router, route, spinner) {
          _classCallCheck(this, UpdateFileComponent);

          this.fileService = fileService;
          this.router = router;
          this.route = route;
          this.spinner = spinner;
          this.file = new _model_file_model__WEBPACK_IMPORTED_MODULE_6__["FileRequest"]();
        }

        _createClass(UpdateFileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.file = new _model_file_model__WEBPACK_IMPORTED_MODULE_6__["FileRequest"]();
            this.srNo = this.route.snapshot.params['srNo'];
            this.fileService.getFileById(this.srNo).subscribe(function (data) {
              console.log(JSON.stringify(data));
              _this2.file = data;
            }, function (error) {
              return console.log(error);
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            this.spinner.show();
            this.fileService.updateRow(this.srNo, this.file).subscribe(function (data) {
              return console.log(data);
            }, function (error) {
              return console.error();
            }); // this.fileService.getFile();'

            this.spinner.hide();
            this.router.navigate(['/show']);
          }
        }, {
          key: "onCancel",
          value: function onCancel() {
            this.router.navigate(['/show']);
          }
        }]);

        return UpdateFileComponent;
      }();

      UpdateFileComponent.ctorParameters = function () {
        return [{
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }];
      };

      UpdateFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-file',
        template: _raw_loader_update_file_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_file_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])], UpdateFileComponent);
      /***/
    },

    /***/
    "c2Qq": function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Show Data',
        url: '/show',
        icon: 'icon-pie-chart'
      }, {
        name: 'Insert data',
        url: '/add',
        icon: 'cil-note-add'
      }, {
        name: 'Download Template',
        url: '/downloadSample',
        icon: 'cil-cloud-download'
      }, {
        name: 'Upload Report',
        url: '/home',
        icon: 'cil-cloud-upload'
      }];
      /***/
    },

    /***/
    "cSaB": function cSaB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "dxhq": function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "eXs0": function eXs0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsertRowComponent", function () {
        return InsertRowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_insert_row_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./insert-row.component.html */
      "rkd0");
      /* harmony import */


      var _insert_row_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./insert-row.component.scss */
      "p0TD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _model_file_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../model/file.model */
      "WVZb");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");

      var InsertRowComponent = /*#__PURE__*/function () {
        function InsertRowComponent(router, fileServices, spinner) {
          _classCallCheck(this, InsertRowComponent);

          this.router = router;
          this.fileServices = fileServices;
          this.spinner = spinner;
          this.file = new _model_file_model__WEBPACK_IMPORTED_MODULE_6__["FileRequest"]();
        }

        _createClass(InsertRowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doSubmitForm",
          value: function doSubmitForm() {
            this.spinner.show();
            this.fileServices.createRow(this.file).subscribe(function (response) {
              console.log(response);
            }, function (error) {
              console.log(error);
            });
            this.spinner.hide();
            this.router.navigate(['/show']);
          }
        }]);

        return InsertRowComponent;
      }();

      InsertRowComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }];
      };

      InsertRowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-insert-row',
        template: _raw_loader_insert_row_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_insert_row_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_file_service__WEBPACK_IMPORTED_MODULE_7__["FileService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])], InsertRowComponent);
      /***/
    },

    /***/
    "iLGQ": function iLGQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\n    <div class=\"temp\">\n      <button (click)=\"downloadFile()\" class=\"btn btn-success\">\n        Download Template\n      </button>\n    </div>\n    <!-- <div style=\"background-color: lightskyblue;width :fit-content;height: 500px; align-self: center;\"> -->\n      <div class=\"row\">\n        <div class=\"col order-last\"></div>\n        <div class=\"col order-first\"></div>\n      <div class=\"col shadow p-3 mb-5 bg-white rounded\" style=\"background-color: #ECE9D9;\">\n      <div class=\"text-center\" style=\"margin: 12%;\n      padding: 20px 20px;\n      /* background-color: #ECE9D9; */\n      border-radius: 13px;\">  \n        <input type=\"file\" id=\"file\" (change)=\"onChange($event)\" />\n        <button (click)=\"onUpload()\" class=\"btn btn-success\">Upload</button>\n      </div>\n    </div>\n      <div class=\"container\" *ngIf=\"loading\">\n        <h3 style=\"text-align: center; font-weight: 400\">Loading ...</h3>\n        <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n      </div>\n    </div>\n    <!-- </div> -->\n\n  </div>\n</div>\n\n\n<ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n  <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n</ngx-spinner>\n\n";
      /***/
    },

    /***/
    "iMCu": function iMCu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n    <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n</ngx-spinner>\n<br>\n<br>\n<div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <strong>Recover Your Password</strong>\n            </div>\n            <div class=\"card-body\">\n                <table style=\"width: 100%;\" >\n                    <tr>\n                        <td>\n                            Email Id\n                        </td>\n                        <td style=\"padding: 3px 6px;\">\n                            <input type=\"text\"  class=\"form-control\" >\n                        </td>\n                    </tr>\n                    <!-- <tr *ngIf=\"userdetails.disableemail\">\n                        <td>\n                            OTP\n                        </td>\n                        <td style=\"padding: 3px 6px;\">\n                            <input type=\"text\"  class=\"form-control\" placeholder=\"OTP\">\n                        </td>\n                    </tr> -->\n                    <tr>\n                        <td>\n\n                        </td>\n                        <td style=\"padding: 3px 6px;\">\n                            <button type=\"button\" class=\"btn btn-primary\" >Submit</button>\n                        </td>\n                    </tr>\n                </table>\n                <!-- <p *ngIf=\"userdetails.resetdone\">\n                    Your password has been send to your mail. <a [routerLink]=\"['/login']\">Login ?</a>\n                </p> -->\n            </div>\n        </div>\n    </div>\n</div>";
      /***/
    },

    /***/
    "lm8q": function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\n  [navbarBrandRouterLink]=\"['/show']\"\n  [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/exicom-icon/logo.png', width: 89, height: 25, alt: 'Exicom'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/exicom-icon/logo.png', width: 30, height: 30, alt: 'Exicom'}\"\n  [sidebarToggler]=\"'lg'\"\n  [asideMenuToggler]=\"'lg'\">\n  \n  <ul class=\"nav navbar-nav ml-auto\">\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\"  href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\n        <img src=\"assets/exicom-icon/avtar.png\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <a class=\"dropdown-item\" > Admin</a>\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Change Password</a>\n        <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n</app-header>\n\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\" style=\"background-color: #ECECEC;margin-top: 15px;\">\n    <!-- Breadcrumb -->\n    <!-- breaking change 'cui-breadcrumb' -->\n    <!-- <cui-breadcrumb>\n     \n    </cui-breadcrumb> -->\n   \n    <div class=\"container-fluid\" style=\"background-color: #ECECEC;\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n  <app-aside [fixed]=\"true\" [display]=\"false\">\n  </app-aside>\n</div>\n";
      /***/
    },

    /***/
    "mSkA": function mSkA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file.service */
      "shLW");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(fileService) {
          _classCallCheck(this, AuthInterceptor);

          this.fileService = fileService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var token = this.fileService.getToken();
            console.log("Interceptor ", token);

            if (token != null) {
              req = req.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(token)
                }
              });
            }

            return next.handle(req);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])], AuthInterceptor);
      /***/
    },

    /***/
    "nAJl": function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <a class=\"\" href=\"#\">Go To Home</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "nLrA": function nLrA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <p>login works!</p>\n<div class=\"modal fade\" bsModal #fail=\"bs-modal\" [config]=\"{backdrop: 'static'}\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"create-account\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\"> -->\n      <!-- Modal body \n      <div class=\"modal-body\" style=\"text-align: center\">\n        {{message}}\n        <br>\n        <div class=\"text-right\">\n          <button type=\"button\" class=\"btn btn-danger btn-sm\" data-dismiss=\"modal\" (click)=\"fail.hide()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n  <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n</ngx-spinner>\n<br>\n<br>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div style=\"margin: 12%;\n                  padding: 20px 20px;\n                  background-color: rgba(255, 255, 255, .8);\n                  border-radius: 13px;\">\n        <div class=\"image text-center\">\n          <img src=\"assets/exicom-icon/logo.png\" alt=\"\">\n        </div>\n        <br>\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n            <span>\n              Username\n            </span>\n            <input  type=\"text\" [(ngModel)]=\"loginDetails.username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"email\" />\n            <br>\n            <span>\n              Password\n            </span>\n            <input type=\"password\" [(ngModel)]=\"loginDetails.password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"Password\" />\n            <br>\n            <button type=\"button\" (click)=\"doLogin()\" class=\"btn btn-block btn-primary\">Login</button>\n            <br>\n            <div>\n              <a [routerLink]=\"['/forgetpassword']\" routerLinkActive=\"router-link-active\" >Forgot password ?</a>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    </div>\n    <div class=\"col-md-6 logo\">\n      <img src=\"assets/exicom-icon/pulse.png\" style=\"width: 100%;height: auto;\" alt=\"\">\n    </div>\n  </div>\n</div>";
      /***/
    },

    /***/
    "nSew": function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Sign In to your account</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Sign up</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                  <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n";
      /***/
    },

    /***/
    "ntXb": function ntXb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.component.html */
      "iLGQ");
      /* harmony import */


      var _home_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.component.scss */
      "7x+4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(fileService, router, spinner) {
          _classCallCheck(this, HomeComponent);

          this.fileService = fileService;
          this.router = router;
          this.spinner = spinner;
          this.message = "";
          this.loading = false;
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadFile",
          value: function downloadFile() {
            this.spinner.show();
            this.fileService.downloadFile().subscribe(function (blob) {
              return Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, "Sample" + ".xlsx");
            });
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.file = event.target.files[0];
          }
        }, {
          key: "onUpload",
          value: function onUpload() {
            var _this3 = this;

            this.spinner.show();

            if (this.file != null) {
              this.loading = true;
              console.log(this.file);
              this.fileService.saveFile(this.file).subscribe(function (event) {
                if (typeof event === 'object') {
                  _this3.spinner.hide();

                  _this3.router.navigate(['/show']);

                  _this3.loading = false;
                }
              });
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [{
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]
        }];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])], HomeComponent);
      /***/
    },

    /***/
    "p0TD": function p0TD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".buttons {\n  text-align: center;\n}\n\n.card {\n  background: white;\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnNlcnQtcm93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjs7QUFFRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJpbnNlcnQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5idXR0b25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2FyZHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "qHSS": function qHSS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n           <ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n            <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n          </ngx-spinner>\n        \n<div class=\"container shadow p-3 mb-5 bg-white rounded\">\n    <div style=\"text-align:center;margin-bottom: 20px;\">\n    <button mat-raised-button style=\"background-color: #217346;color: aliceblue;\" (click)=\"downloadFile()\">\n        Download Template\n    </button>\n    </div> \n    <img src='assets/exicom-icon/sampleimg.png'  width=\"1000\">\n</div>\n";
      /***/
    },

    /***/
    "rkd0": function rkd0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"container\">\n  <div class=\"card shadow p-3 mb-5 bg-white rounded\">\n    <h1 style=\"text-align: center;font-weight: 600;padding: 15px;\">Add data</h1>\n    <form (ngSubmit)=\"doSubmitForm()\" >\n\n          <div class=\"form-group row\">\n            <label  class=\"col-sm-2 col-form-label\" >Customer Name</label>\n            <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"customerName\"\n              class=\"form-control\"\n              placeholder=\"Customer Name\"\n              [(ngModel)]=\"file.customerName\"\n            />\n          </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label  class=\"col-sm-2 col-form-label\">Customer Code</label>\n          <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"customerCode\"\n            class=\"form-control\"\n            placeholder=\"Customer Code\"\n            [(ngModel)]=\"file.customerCode\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Site Name</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"siteName\"\n            class=\"form-control\"\n            placeholder=\"Site Name\"\n            [(ngModel)]=\"file.siteName\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Site Address </label>\n        <div class=\"col-sm-10\">\n          <textarea\n            class=\"form-control\"\n            name=\"siteAddress\"\n            [(ngModel)]=\"file.siteAddress\"\n          ></textarea>\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">City</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"city\"\n            class=\"form-control\"\n            placeholder=\"City\"\n            [(ngModel)]=\"file.city\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">State</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"state\"\n            class=\"form-control\"\n            placeholder=\"State\"\n            [(ngModel)]=\"file.state\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Local Contact Person Name</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"localContactPersonName\"\n            class=\"form-control\"\n            placeholder=\"Local Contact Person Name\"\n            [(ngModel)]=\"file.localContactPersonName\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Local Person Contact </label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"number\"\n            name=\"localPersonContact\"\n            class=\"form-control\"\n            placeholder=\"Local Person Contact\"\n            [(ngModel)]=\"file.localPersonContact\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Type of Charger</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"typeOfCharger\"\n            class=\"form-control\"\n            placeholder=\"Type of Charger\"\n            [(ngModel)]=\"file.typeOfCharger\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Model</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"model\"\n            class=\"form-control\"\n            placeholder=\"Model\"\n            [(ngModel)]=\"file.model\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Serial Number</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"serialNumber\"\n            class=\"form-control\"\n            placeholder=\"D91810242830016\"\n            [(ngModel)]=\"file.serialNumber\"\n          />\n        </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Date of Invoice</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"date\"\n              name=\"dateOfInvoice\"\n              class=\"form-control\"\n              placeholder=\"Invoice Date\"\n              [(ngModel)]=\"file.dateOfInvoice\"\n            />\n          </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Final Installation Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"finalInstallationStatus\"\n            class=\"form-control\"\n            placeholder=\"Final Installation Status\"\n            [(ngModel)]=\"file.finalInstallationStatus\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Installation Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"installationStatus\"\n            class=\"form-control\"\n            placeholder=\"Installation Status\"\n            [(ngModel)]=\"file.installationStatus\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Commissioning status </label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"commissioningStatus\"\n            class=\"form-control\"\n            placeholder=\"Commissioning status\"\n            [(ngModel)]=\"file.commissioningStatus\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\"\n          >Commissioned By (Exicom Eng Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"commissionedBy\"\n            class=\"form-control\"\n            placeholder=\"Exicom Eng Name\"\n            [(ngModel)]=\"file.commissionedBy\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">Commissioning Date</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            name=\"commissioningDate\"\n            class=\"form-control\"\n            placeholder=\"Commissioning Date\"\n            [(ngModel)]=\"file.commissioningDate\"\n          />\n        </div>\n        </div>\n\n        <div class=\"form-group row\">\n          <label class=\"col-sm-2 col-form-label\">Warranty/AMC Status</label>\n          <div class=\"col-sm-10\">\n            <input\n              type=\"text\"\n              name=\"warrantyAmcStatus\"\n              class=\"form-control\"\n              placeholder=\"Status\"\n              [(ngModel)]=\"file.warrantyAmcStatus\"\n            />\n          </div>\n          </div>\n\n          <div class=\"form-group row\">\n            <label class=\"col-sm-2 col-form-label\">Warranty/AMC (in month)</label>\n            <div class=\"col-sm-10\">\n              <input\n                type=\"date\"\n                name=\"warrantyAmcInMonth\"\n                class=\"form-control\"\n                placeholder=\"In Months\"\n                [(ngModel)]=\"file.warrantyAmcInMonth\"\n              />\n            </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label class=\"col-sm-2 col-form-label\">Warranty/AMC validity date</label>\n              <div class=\"col-sm-10\">\n                <input\n                  type=\"date\"\n                  name=\"warrantyAmcValidityDate\"\n                  class=\"form-control\"\n                  placeholder=\"Validity date\"\n                  [(ngModel)]=\"file.warrantyAmcValidityDate\"\n                />\n              </div>   \n              </div> \n\n              <div class=\"form-group row\">\n                <label class=\"col-sm-2 col-form-label\">PM Frequency</label>\n                <div class=\"col-sm-10\">\n                  <input\n                    type=\"text\"\n                    name=\"commissioningDate\"\n                    class=\"form-control\"\n                    placeholder=\"PM Frequency\"\n                    [(ngModel)]=\"file.pMFrequency\"\n                  />\n                </div>  \n           </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM1Status\"\n            class=\"form-control\"\n            placeholder=\"PM 1 Status\"\n            [(ngModel)]=\"file.pM1Status\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Done On</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            name=\"pM1DoneOn\"\n            class=\"form-control\"\n            placeholder=\"Done On\"\n            [(ngModel)]=\"file.pM1DoneOn\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Done (Engineer Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM1Done\"\n            class=\"form-control\"\n            placeholder=\"Engineer Name\"\n            [(ngModel)]=\"file.pM1Done\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 1 Remarks</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM1Remarks\"\n            class=\"form-control\"\n            placeholder=\"Remarks\"\n            [(ngModel)]=\"file.pM1Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\"> SW Update</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"sWUpdate\"\n            class=\"form-control\"\n            placeholder=\"SW Update\"\n            [(ngModel)]=\"file.sWUpdate\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\"> PM Due Date</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            name=\"pMDueDate\"\n            class=\"form-control\"\n            placeholder=\"PM Due Date\"\n            [(ngModel)]=\"file.pMDueDate\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM2Status\"\n            class=\"form-control\"\n            placeholder=\"Status\"\n            [(ngModel)]=\"file.pM2Status\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Done On</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            name=\"pM2DoneOn\"\n            class=\"form-control\"\n            placeholder=\"Done On\"\n            [(ngModel)]=\"file.pM2DoneOn\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Done (Engineer Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM2Done\"\n            class=\"form-control\"\n            placeholder=\"Engineer Name\"\n            [(ngModel)]=\"file.pM2Done\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 2 Remarks</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM2Remarks\"\n            class=\"form-control\"\n            placeholder=\"Remarks\"\n            [(ngModel)]=\"file.pM2Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM3Status\"\n            class=\"form-control\"\n            placeholder=\"Status\"\n            [(ngModel)]=\"file.pM3DoneOn\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Done On</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            pM3DoneOn\n            class=\"form-control\"\n            placeholder=\"Done On\"\n            [(ngModel)]=\"file.pM3DoneOn\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Done (Engineer Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM3Done\"\n            class=\"form-control\"\n            placeholder=\"Engineer Name\"\n            [(ngModel)]=\"file.pM3Done\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 3 Remarks</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM3Remarks\"\n            class=\"form-control\"\n            placeholder=\"Remarks\"\n            [(ngModel)]=\"file.pM3Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM4Status\"\n            class=\"form-control\"\n            placeholder=\"Status\"\n            [(ngModel)]=\"file.pM4Status\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Done On</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            pM4DoneOn\n            class=\"form-control\"\n            placeholder=\"Done On\"\n            [(ngModel)]=\"file.pM4DoneOn\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Done (Engineer Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM4Done\"\n            class=\"form-control\"\n            placeholder=\"Engineer Name\"\n            [(ngModel)]=\"file.pM4Done\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 4 Remarks</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM4Remarks\"\n            class=\"form-control\"\n            placeholder=\"Remarks\"\n            [(ngModel)]=\"file.pM4Remarks\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM5Status\"\n            class=\"form-control\"\n            placeholder=\"Status\"\n            [(ngModel)]=\"file.pM5Status\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Done On</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            pM5DoneOn\n            class=\"form-control\"\n            placeholder=\"Done On\"\n            [(ngModel)]=\"file.pM5DoneOn\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Done (Engineer Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM5Done\"\n            class=\"form-control\"\n            placeholder=\"Engineer Name\"\n            [(ngModel)]=\"file.pM5Done\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 5 Remarks</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM5Remarks\"\n            class=\"form-control\"\n            placeholder=\"Remarks\"\n            [(ngModel)]=\"file.pM5Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Status</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM6Status\"\n            class=\"form-control\"\n            placeholder=\"Status\"\n            [(ngModel)]=\"file.pM6Status\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Done On</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"date\"\n            pM6DoneOn\n            class=\"form-control\"\n            placeholder=\"Done On\"\n            [(ngModel)]=\"file.pM6DoneOn\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Done (Engineer Name)</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM6Done\"\n            class=\"form-control\"\n            placeholder=\"Engineer Name\"\n            [(ngModel)]=\"file.pM6Done\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label class=\"col-sm-2 col-form-label\">PM 6 Remarks</label>\n        <div class=\"col-sm-10\">\n          <input\n            type=\"text\"\n            name=\"pM6Remarks\"\n            class=\"form-control\"\n            placeholder=\"Remarks\"\n            [(ngModel)]=\"file.pM6Remarks\"\n          />\n        </div>\n      </div>\n\n      <div class=\"buttons\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-success\"\n          style=\"margin: 15px\">\n          Add\n        </button>\n        <button type=\"reset\" class=\"btn btn-secondary\">Reset</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n\n\n\n<ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n  <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n</ngx-spinner>\n\n";
      /***/
    },

    /***/
    "shLW": function shLW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileService", function () {
        return FileService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var FileService = /*#__PURE__*/function () {
        function FileService(http) {
          _classCallCheck(this, FileService);

          this.http = http;
          this.baseUrl = '';
        }

        _createClass(FileService, [{
          key: "getFiles",
          value: function getFiles() {
            return this.http.get("".concat(this.baseUrl, "/filess"));
          }
        }, {
          key: "getFileByKeyword",
          value: function getFileByKeyword(keyword, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/word?keyword=") + keyword + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByCustomerName",
          value: function getFileByCustomerName(customerName, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/customerName?customerName=") + customerName + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByCustomerCode",
          value: function getFileByCustomerCode(customerCode, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/customerCode?customerCode=") + customerCode + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileBySiteName",
          value: function getFileBySiteName(siteName, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/siteName/?siteName=") + siteName + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByState",
          value: function getFileByState(state, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/state/?state=") + state + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileBySiteAddress",
          value: function getFileBySiteAddress(siteAddress, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/siteAddress/?siteAddress=") + siteAddress + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByCity",
          value: function getFileByCity(city, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/city/?city=") + city + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByLocalContactPersonName",
          value: function getFileByLocalContactPersonName(localContactPersonName, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/localContactPersonName/?localContactPersonName=") + localContactPersonName + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByTypeOfCharger",
          value: function getFileByTypeOfCharger(typeOfCharger, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/typeOfCharger/?typeOfCharger=") + typeOfCharger + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByLocalPersonContact",
          value: function getFileByLocalPersonContact(localPersonContact, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/localPersonContact/?localPersonContact=") + localPersonContact + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByModel",
          value: function getFileByModel(model, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/model/?model=") + model + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileBySerialNumber",
          value: function getFileBySerialNumber(serialNumber, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/serialNumber/?serialNumber=") + serialNumber + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByFinalInstallationStatus",
          value: function getFileByFinalInstallationStatus(finalInstallationStatus, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/finalInstallationStatus/?finalInstallationStatus=") + finalInstallationStatus + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFileByInstallationStatus",
          value: function getFileByInstallationStatus(installationStatus, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/installationStatus/?installationStatus=") + installationStatus + "&page=" + pageNumber + "&size=" + pageSize);
          } // getFileByCommissioningStatus(commissioningStatus:any,pageNumber:number,pageSize:number):Observable<GetResponseProductList>{
          //   return this.http.get<GetResponseProductList>(`${this.baseUrl}/filter/commissioningStatus/?commissioningStatus=`+commissioningStatus+`&page=`+pageNumber+`&size=`+pageSize)
          // }

        }, {
          key: "getFileByCommissionedBy",
          value: function getFileByCommissionedBy(commissionedBy, pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/filter/commissionedBy/?commissionedBy=") + commissionedBy + "&page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "getFile",
          value: function getFile(pageNumber, pageSize) {
            return this.http.get("".concat(this.baseUrl, "/files") + "?page=" + pageNumber + "&size=" + pageSize);
          }
        }, {
          key: "createRow",
          value: function createRow(file) {
            return this.http.post("".concat(this.baseUrl, "/files"), file);
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(id) {
            return this.http["delete"]("".concat(this.baseUrl, "/files/") + id);
          }
        }, {
          key: "updateRow",
          value: function updateRow(id, file) {
            return this.http.put("".concat(this.baseUrl, "/files/") + id, file);
          }
        }, {
          key: "getFileById",
          value: function getFileById(id) {
            return this.http.get("".concat(this.baseUrl, "/files/") + id);
          }
        }, {
          key: "downloadFile",
          value: function downloadFile() {
            return this.http.get("".concat(this.baseUrl, "/download") + "?fileName=Sample.xlsx", {
              responseType: 'blob'
            });
          } //Download Excel File

        }, {
          key: "getDownloadReport",
          value: function getDownloadReport() {
            return this.http.get("".concat(this.baseUrl, "/report"), {
              responseType: 'blob'
            });
          }
        }, {
          key: "saveFile",
          value: function saveFile(file) {
            var formData = new FormData();
            formData.append("file", file, file.name);
            return this.http.post("".concat(this.baseUrl, "/file"), formData);
          } //

        }, {
          key: "login",
          value: function login(loginDetails) {
            return this.http.post("".concat(this.baseUrl, "/login"), loginDetails, {
              responseType: 'text'
            });
          }
        }, {
          key: "loginUser",
          value: function loginUser(response) {
            localStorage.setItem("token", response);
            return true;
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            var token = localStorage.getItem('token');

            if (token == undefined || token === '' || token == null) {
              return false;
            } else {
              return true;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('token');
            return true;
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return localStorage.getItem('token');
          }
        }]);

        return FileService;
      }();

      FileService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      FileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FileService);
      /***/
    },

    /***/
    "vXQB": function vXQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@media only screen and (max-width: 456px) {\n  .logo {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLXB1bHNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxhQUFBO0VBQ047QUFDRiIsImZpbGUiOiJsb2dpbi1wdWxzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo0NTZweCl7XHJcbiAgICAubG9nb3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "w9Of": function w9Of(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPulseComponent", function () {
        return LoginPulseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_pulse_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login-pulse.component.html */
      "nLrA");
      /* harmony import */


      var _login_pulse_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-pulse.component.scss */
      "vXQB");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _model_file_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../model/file.model */
      "WVZb");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../service/file.service */
      "shLW");

      var LoginPulseComponent = /*#__PURE__*/function () {
        function LoginPulseComponent(spinner, fileService) {
          _classCallCheck(this, LoginPulseComponent);

          this.spinner = spinner;
          this.fileService = fileService;
          this.loginDetails = new _model_file_model__WEBPACK_IMPORTED_MODULE_5__["LoginRequest"]();
        }

        _createClass(LoginPulseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "doLogin",
          value: function doLogin() {
            var _this4 = this;

            this.spinner.show();

            if (this.loginDetails.username != '' && this.loginDetails.password != '' && this.loginDetails.username != null && this.loginDetails.password != null) {
              console.log("Login Called");
              this.fileService.login(this.loginDetails).subscribe(function (response) {
                console.log(response);

                _this4.fileService.loginUser(response);

                window.location.href = "/#/show";
              }, function (error) {
                console.error(error);
              });
            }

            this.spinner.hide();
          }
        }]);

        return LoginPulseComponent;
      }();

      LoginPulseComponent.ctorParameters = function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }, {
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"]
        }];
      };

      LoginPulseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-pulse',
        template: _raw_loader_login_pulse_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_pulse_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"], _service_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"]])], LoginPulseComponent);
      /***/
    },

    /***/
    "wnn4": function wnn4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n           <ngx-spinner size=\"medium\" color=\"#fff\" type=\"line-scale-party\">\n            <p style=\"font-size: 20px; color: rgb(255, 255, 255)\">Loading...</p>\n          </ngx-spinner>\n        \n        <input hidden  type=\"search\" style=\"height: 15px;font-size: medium;\" #search (keyup)=\"filterData()\"  placeholder=\"Search\">\n      <div class=\"panel panel-primary shadow p-3 mb-5 bg-white rounded\" id=\"cards\" >\n\n        <nav class=\"navbar\" style=\"background-color: #FFFFFF;\">\n          <div class=\"container-fluid\" style=\"background-color: #FFFFFF;\">\n            <a class=\"navbar-brand\">\n              <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n               \n                <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n                  <mat-button-toggle value=\"bold\" style=\"color: #695050;margin-right: 10px;\">All Data</mat-button-toggle>\n                  <mat-button-toggle value=\"italic\">PM due data</mat-button-toggle>\n                  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n                </mat-button-toggle-group>\n                \n              </div>\n            </a>\n            <form class=\"d-flex\">\n              <img src=\"assets/exicom-icon/file-earmark-arrow-down-fill.svg\" style=\"cursor: pointer;color:black;float: left;width: 30px;\" (click)=\"downloadReport()\">\n\n              <!-- <mat-icon style=\"cursor: pointer;color:black;float: left;\" (click)=\"downloadReport()\">cloud_download</mat-icon>  -->\n              <label (click)=\"downloadReport()\" style=\"cursor: pointer;float:left;padding-top: 10px;\">Download Report</label>\n            </form>\n          </div>\n        </nav>\n\n          <div class=\"panel-body \" style=\"overflow-x: scroll;margin-top: 20px;overflow-y: auto;\">\n              <table class=\"table\" cellspaceing=\"0\" style=\"width:max-content;table-layout: fixed;margin-bottom: 20px;\"  >\n                  <thead style=\"text-align: center;position: sticky;top: 0\">\n                      <tr>\n                         <th class=\"padding12\">Actions</th>\n                          <th class=\"padding12\" >Sr.No  </th>\n      \n                          <th  >\n                            <label *ngIf=\"tick1==false\" >Customer Name</label>\n                            <mat-form-field  *ngIf=\"tick1==true\">\n                            <input  matInput  type=\"search\"  #cName (keyup)=\"filterCustomerName()\" placeholder=\"Customer Name\"\n                            name=\"customerName\">\n                            <mat-icon matSuffix (click)=\"elseClick1()\" style=\"cursor: pointer;\" >highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick1()\" *ngIf=\"tick1==false\" > <span style=\"cursor: pointer;\" > search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick2==false\">Customer Code</label>\n                            <mat-form-field  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick2==true\">\n                            <input  matInput  type=\"search\" style=\"height: 15px;font-size: medium;\" #cCode (keyup)=\"filterCustomerCode()\" >\n                            <mat-icon matSuffix (click)=\"elseClick2()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick2()\" *ngIf=\"tick2==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick3==false\">Site Name</label>\n                            <mat-form-field appearance=\"outline\" style=\"margin-bottom: -1.25em;\" *ngIf=\"tick3==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #sName (keyup)=\"filterSiteName()\">\n                            <mat-icon matSuffix (click)=\"elseClick3()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick3()\" *ngIf=\"tick3==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" style=\"width: 10cm\">\n                            <label *ngIf=\"tick4==false\">Site Address</label>\n                            <mat-form-field appearance=\"outline\" style=\"margin-bottom: -1.25em;\" *ngIf=\"tick4==true\">\n                            <input  matInput  type=\"search\" style=\"height: 15px;font-size: medium;\" #sAddress (keyup)=\"filterSiteAddress()\">\n                            <mat-icon matSuffix (click)=\"elseClick4()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick4()\" *ngIf=\"tick4==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick5==false\">City</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick5==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #city (keyup)=\"filterCity()\">\n                            <mat-icon matSuffix (click)=\"elseClick5()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick5()\" *ngIf=\"tick5==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick6==false\">State</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick6==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #state (keyup)=\"filterState()\">\n                            <mat-icon matSuffix (click)=\"elseClick6()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick6()\" *ngIf=\"tick6==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick7==false\">Local Contact Person Name</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick7==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #lCPName (keyup)=\"filterLocalContactPersonName()\">\n                            <mat-icon matSuffix (click)=\"elseClick7()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick7()\" *ngIf=\"tick7==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick8==false\">Local Person Contact</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick8==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #lPContact (keyup)=\"filterLocalPersonContact()\">\n                            <mat-icon matSuffix (click)=\"elseClick8()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick8()\" *ngIf=\"tick8==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick9==false\">Type of Charger</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick9==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #tOCharger (keyup)=\"filterTypeOfCharger()\">\n                            <mat-icon matSuffix (click)=\"elseClick9()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick9()\" *ngIf=\"tick9==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick10==false\">Model</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick10==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #model (keyup)=\"filterModel()\">\n                            <mat-icon matSuffix (click)=\"elseClick10()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick10()\" *ngIf=\"tick10==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick11==false\">Serial Number</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick11==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #sNumber (keyup)=\"filterSerialNumber()\">\n                            <mat-icon matSuffix (click)=\"elseClick11()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick11()\" *ngIf=\"tick11==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n\n                          <th>Date of Invoce</th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick12==false\">Final Installation Status</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick12==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #fIStatus (keyup)=\"filterFinalInstallationStatus()\">\n                            <mat-icon matSuffix (click)=\"elseClick12()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick12()\" *ngIf=\"tick12==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick13==false\">Installation Status</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick13==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #iStatus (keyup)=\"filterInstallationStatus()\">\n                            <mat-icon matSuffix (click)=\"elseClick13()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick13()\" *ngIf=\"tick13==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n      \n                          <!-- <th class=\"padding12\" >\n                            <label *ngIf=\"tick14==false\">Commissioning status</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick14==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #cStatus (keyup)=\"filterCommissioningStatus()\">\n                            <mat-icon matSuffix (click)=\"elseClick14()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick14()\" *ngIf=\"tick14==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th> -->\n      \n                          <th class=\"padding12\" >\n                            <label *ngIf=\"tick15==false\">Commissioned By (Exicom Eng Name)</label>\n                            <mat-form-field appearance=\"outline\"  style=\"margin-bottom: -1.25em;\"  *ngIf=\"tick15==true\">\n                            <input  matInput  type=\"search\"  style=\"height: 15px;font-size: medium;\"  #cBy (keyup)=\"filterCommissionedBy()\">\n                            <mat-icon matSuffix (click)=\"elseClick15()\" style=\"cursor: pointer;\">highlight_off</mat-icon>\n                            </mat-form-field>\n                            <mat-icon  (click)=\"ifClick15()\" *ngIf=\"tick15==false\"> <span style=\"cursor: pointer;\"> search</span></mat-icon>\n                          </th>\n                          <th class=\"padding12\">Commissioning Date </th>\n                          <th class=\"padding12\">Warranty/AMC Status </th>\n                          <th class=\"padding12\"> Warranty/AMC (In Month)</th>\n                          <th class=\"padding12\">Warranty/AMC Validity Date</th>\n                          <th class=\"padding12\">PM Frequency </th>\n\n                        \n                          \n                      </tr>\n                  </thead >\n                  <tbody style=\"text-align: center;\">\n                      <tr *ngFor=\"let file of filee\">\n                          <td style=\"vertical-align: middle;\" >\n                              <button (click)=\"viewItem(file.srNo)\" style=\"margin: 5px;font-size: x-small;\" class=\"btn btn-success\" [routerLink]=\"['/view']\" routerLinkActive=\"router-link-active\" >View</button>\n                              <button (click)=\"updateItem(file.srNo)\" style=\"margin: 5px;font-size: x-small;\" class=\"btn btn-warning\" [routerLink]=\"['/update']\" routerLinkActive=\"router-link-active\" >Edit</button>\n                              </td>\n                          <td style=\"vertical-align: middle;\" >{{file.srNo}} <img src=\"assets/exicom-icon/green.png\" width=\"20px\" height=\"20px\"> <img src=\"assets/exicom-icon/redflag.png\" width=\"30px\" height=\"30px\"> </td>\n                          <td style=\"vertical-align: middle;\">{{file.customerName}}</td>\n                          <td>{{file.customerCode}}</td>\n                          <td>{{file.siteName}}</td>\n                          <td>{{file.siteAddress}}</td>\n                          <td>{{file.city}}</td>\n                          <td>{{file.state}}</td>\n                          <td>{{file.localContactPersonName}}</td>\n                          <td>{{file.localPersonContact}}</td>\n                          <td>{{file.typeOfCharger}}</td>\n                          <td>{{file.model}}</td>\n                          <td>{{file.serialNumber}}</td>\n                          <td>{{file.dateOfInvoice}}</td>\n                          <td>{{file.finalInstallationStatus}}</td>\n                          <td>{{file.installationStatus}}</td>\n                          <td>{{file.commissioningStatus}}</td>\n                          <td>{{file.commissionedBy}}</td>\n                          <td>{{file.commissioningDate}}</td> \n                          <td>{{file.warrantyAmcStatus}}</td>\n                          <td>{{file.warrantyAmcInMonth}}</td>\n                          <td>{{file.warrantyAmcValidityDate}}</td>\n                          <td>{{file.pMFrequency}}</td>      \n                      </tr>\n                  </tbody>\n              </table>\n          </div>\n          <div  style=\"margin: 0;padding: 0;\">\n            <mat-paginator [length]=\"totalElement\"\n                        style=\"background-color: #FFFFFF;\"\n                        [pageSize]=\"10\"\n                        [pageSizeOptions]=\"[10, 20, 25, 100]\"\n                        showFirstLastButtons\n                        aria-label=\"Select page\"\n                        (page)=\"onPagenation($event)\" >\n          </mat-paginator>\n          </div>\n      </div>\n\n   \n      \n\n      ";
      /***/
    },

    /***/
    "xpCK": function xpCK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileListComponent", function () {
        return FileListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_file_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./file-list.component.html */
      "wnn4");
      /* harmony import */


      var _file_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./file-list.component.scss */
      "bVIb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-spinner */
      "JqCM");
      /* harmony import */


      var _service_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/file.service */
      "shLW");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! file-saver */
      "Iab2");
      /* harmony import */


      var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);

      var FileListComponent = /*#__PURE__*/function () {
        function FileListComponent(router, fileService, spinner) {
          _classCallCheck(this, FileListComponent);

          this.router = router;
          this.fileService = fileService;
          this.spinner = spinner;
          this.filee = [];
          this.files = [];
          this.pageSize = 10;
          this.totalElement = 0;
          this.totalPage = 0;
          this.pageNumber = 0;
          this.globalTotalPage = 0;
          this.clicks = false;
          this.tick1 = false;
          this.tick2 = false;
          this.tick3 = false;
          this.tick4 = false;
          this.tick5 = false;
          this.tick6 = false;
          this.tick7 = false;
          this.tick8 = false;
          this.tick9 = false;
          this.tick10 = false;
          this.tick11 = false;
          this.tick12 = false;
          this.tick13 = false;
          this.tick14 = false;
          this.tick15 = false;
          this.showList();
        }

        _createClass(FileListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "downloadReport",
          value: function downloadReport() {
            this.spinner.show();
            this.fileService.getDownloadReport().subscribe(function (blob) {
              return Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, "PM TRACKER" + ".xlsx");
            });
            console.log("Download Report");
            this.spinner.hide();
          }
        }, {
          key: "filterData",
          value: function filterData() {
            var _this5 = this;

            this.spinner.show();
            this.fileService.getFileByKeyword(this.search.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log(_this5.search.nativeElement.value);
              _this5.totalElement = data.totalElements;
              _this5.filee = data.content;
            });
            this.spinner.hide();
          }
        }, {
          key: "filterCustomerName",
          value: function filterCustomerName() {
            var _this6 = this;

            this.spinner.show();
            this.fileService.getFileByCustomerName(this.cName.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log(_this6.cName.nativeElement.value);
              _this6.totalElement = data.totalElements;
              _this6.filee = data.content;
            });
            this.spinner.hide();
          }
        }, {
          key: "filterCustomerCode",
          value: function filterCustomerCode() {
            var _this7 = this;

            this.fileService.getFileByCustomerCode(this.cCode.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log(_this7.cCode.nativeElement.value);
              _this7.filee = data.content;
            });
          }
        }, {
          key: "filterSiteName",
          value: function filterSiteName() {
            var _this8 = this;

            this.fileService.getFileBySiteName(this.sName.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log(_this8.sName.nativeElement.value);
              _this8.filee = data.content;
            });
          }
        }, {
          key: "filterSiteAddress",
          value: function filterSiteAddress() {
            var _this9 = this;

            this.fileService.getFileBySiteAddress(this.sAddress.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this9.filee = data.content;
            });
          }
        }, {
          key: "filterCity",
          value: function filterCity() {
            var _this10 = this;

            this.fileService.getFileByCity(this.city.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this10.filee = data.content;
            });
          }
        }, {
          key: "filterState",
          value: function filterState() {
            var _this11 = this;

            this.fileService.getFileByState(this.state.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this11.filee = data.content;
            });
          }
        }, {
          key: "filterLocalContactPersonName",
          value: function filterLocalContactPersonName() {
            var _this12 = this;

            this.fileService.getFileByLocalContactPersonName(this.lCPName.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this12.filee = data.content;
            });
          }
        }, {
          key: "filterLocalPersonContact",
          value: function filterLocalPersonContact() {
            var _this13 = this;

            this.fileService.getFileByLocalPersonContact(this.lPContact.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this13.filee = data.content;
            });
          }
        }, {
          key: "filterTypeOfCharger",
          value: function filterTypeOfCharger() {
            var _this14 = this;

            this.fileService.getFileByTypeOfCharger(this.tOCharger.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this14.filee = data.content;
            });
          }
        }, {
          key: "filterModel",
          value: function filterModel() {
            var _this15 = this;

            this.fileService.getFileByModel(this.model.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this15.filee = data.content;
            });
          }
        }, {
          key: "filterSerialNumber",
          value: function filterSerialNumber() {
            var _this16 = this;

            this.fileService.getFileBySerialNumber(this.sNumber.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this16.filee = data.content;
            });
          }
        }, {
          key: "filterFinalInstallationStatus",
          value: function filterFinalInstallationStatus() {
            var _this17 = this;

            this.fileService.getFileByFinalInstallationStatus(this.fIStatus.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this17.filee = data.content;
            });
          }
        }, {
          key: "filterInstallationStatus",
          value: function filterInstallationStatus() {
            var _this18 = this;

            this.fileService.getFileByInstallationStatus(this.iStatus.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this18.filee = data.content;
            });
          } // filterCommissioningStatus() {
          //   this.fileService.getFileByCommissioningStatus(this.cStatus.nativeElement.value, this.pageNumber, this.pageSize).subscribe((data: any) => {
          //     console.log();
          //     this.filee = data.content;
          //   })
          // }

        }, {
          key: "filterCommissionedBy",
          value: function filterCommissionedBy() {
            var _this19 = this;

            this.spinner.show();
            this.fileService.getFileByCommissionedBy(this.cBy.nativeElement.value, this.pageNumber, this.pageSize).subscribe(function (data) {
              console.log();
              _this19.filee = data.content;
            });
            this.spinner.hide();
          }
        }, {
          key: "onPagenation",
          value: function onPagenation(event) {
            var _this20 = this;

            console.log(event);
            console.log(event.pageIndex);

            if (this.tick1 == false) {
              console.log("IF block");
              this.spinner.show();
              this.fileService.getFile(event.pageIndex, event.pageSize).subscribe(function (data) {
                _this20.filee = data['content'];
              });
              this.spinner.hide();
            } else {
              console.log("ELSE BLOCK");

              if (this.cName == null) {
                console.log("cName null hai");
              }

              this.fileService.getFileByCustomerName(this.cName.nativeElement.value, event.pageIndex, event.pageSize).subscribe(function (data) {
                _this20.totalElement = data.totalElements;
                console.log("data" + data.totalElements);
                console.log("this" + _this20.totalElement);
                _this20.filee = data['content'];
              });
            }
          }
        }, {
          key: "showList",
          value: function showList() {
            var _this21 = this;

            this.spinner.show();
            this.fileService.getFile(this.pageNumber, this.pageSize).subscribe(function (data) {
              _this21.filee = data.content;
              _this21.pageNumber = data.number;
              _this21.pageSize = data.size;
              _this21.totalElement = data.totalElements;
              _this21.totalPage = data.totalPages - 1;
              _this21.isEmpty = data.empty;
              console.log("data ", data);
            });
            this.spinner.hide();
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(srNo) {
            var _this22 = this;

            this.fileService.deleteRow(srNo).subscribe(function (data) {
              console.log(data);
              alert("Deleted");

              _this22.showList();
            });
          }
        }, {
          key: "updateItem",
          value: function updateItem(srNo) {
            this.router.navigate(['update', srNo]);
          }
        }, {
          key: "viewItem",
          value: function viewItem(srNo) {
            this.router.navigate(['view', srNo]);
          } // downloadFile() {
          //   this.fileService.downloadFile().subscribe(blob => saveAs (blob, "Sample" + ".xlsx"));
          // }

        }, {
          key: "ifClick1",
          value: function ifClick1() {
            var _this23 = this;

            this.tick1 = true;
            setTimeout(function () {
              return _this23.cName.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick1",
          value: function elseClick1() {
            console.log("False");
            this.tick1 = false;
            this.showList();
          }
        }, {
          key: "ifClick2",
          value: function ifClick2() {
            var _this24 = this;

            this.tick2 = true;
            setTimeout(function () {
              return _this24.cCode.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick2",
          value: function elseClick2() {
            console.log("False");
            this.tick2 = false;
            this.showList();
          }
        }, {
          key: "ifClick3",
          value: function ifClick3() {
            var _this25 = this;

            this.tick3 = true;
            setTimeout(function () {
              return _this25.sName.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick3",
          value: function elseClick3() {
            console.log("False");
            this.tick3 = false;
            this.showList();
          }
        }, {
          key: "ifClick4",
          value: function ifClick4() {
            var _this26 = this;

            this.tick4 = true;
            this.showList();
            setTimeout(function () {
              return _this26.sAddress.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick4",
          value: function elseClick4() {
            console.log("False");
            this.tick4 = false;
            this.showList();
          }
        }, {
          key: "ifClick5",
          value: function ifClick5() {
            var _this27 = this;

            this.tick5 = true;
            setTimeout(function () {
              return _this27.city.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick5",
          value: function elseClick5() {
            console.log("False");
            this.tick5 = false;
            this.showList();
          }
        }, {
          key: "ifClick6",
          value: function ifClick6() {
            var _this28 = this;

            this.tick6 = true;
            setTimeout(function () {
              return _this28.state.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick6",
          value: function elseClick6() {
            console.log("False");
            this.tick6 = false;
            this.showList();
          }
        }, {
          key: "ifClick7",
          value: function ifClick7() {
            var _this29 = this;

            this.tick7 = true;
            setTimeout(function () {
              return _this29.lCPName.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick7",
          value: function elseClick7() {
            console.log("False");
            this.tick7 = false;
            this.showList();
          }
        }, {
          key: "ifClick8",
          value: function ifClick8() {
            var _this30 = this;

            this.tick8 = true;
            setTimeout(function () {
              return _this30.lPContact.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick8",
          value: function elseClick8() {
            console.log("False");
            this.tick8 = false;
            this.showList();
          }
        }, {
          key: "ifClick9",
          value: function ifClick9() {
            var _this31 = this;

            this.tick9 = true;
            setTimeout(function () {
              return _this31.tOCharger.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick9",
          value: function elseClick9() {
            console.log("False");
            this.tick9 = false;
            this.showList();
          }
        }, {
          key: "ifClick10",
          value: function ifClick10() {
            var _this32 = this;

            this.tick10 = true;
            setTimeout(function () {
              return _this32.model.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick10",
          value: function elseClick10() {
            console.log("False");
            this.tick10 = false;
            this.showList();
          }
        }, {
          key: "ifClick11",
          value: function ifClick11() {
            var _this33 = this;

            this.tick11 = true;
            setTimeout(function () {
              return _this33.sNumber.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick11",
          value: function elseClick11() {
            console.log("False");
            this.tick11 = false;
            this.showList();
          }
        }, {
          key: "ifClick12",
          value: function ifClick12() {
            var _this34 = this;

            this.tick12 = true;
            setTimeout(function () {
              return _this34.fIStatus.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick12",
          value: function elseClick12() {
            console.log("False");
            this.tick12 = false;
            this.showList();
          }
        }, {
          key: "ifClick13",
          value: function ifClick13() {
            var _this35 = this;

            this.tick13 = true;
            setTimeout(function () {
              return _this35.iStatus.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick13",
          value: function elseClick13() {
            console.log("False");
            this.tick13 = false;
            this.showList();
          }
        }, {
          key: "ifClick14",
          value: function ifClick14() {
            var _this36 = this;

            this.tick14 = true;
            setTimeout(function () {
              return _this36.cStatus.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick14",
          value: function elseClick14() {
            console.log("False");
            this.tick14 = false;
            this.showList();
          }
        }, {
          key: "ifClick15",
          value: function ifClick15() {
            var _this37 = this;

            this.tick15 = true;
            setTimeout(function () {
              return _this37.cBy.nativeElement.focus();
            });
          }
        }, {
          key: "elseClick15",
          value: function elseClick15() {
            console.log("False");
            this.tick15 = false;
            this.showList();
          }
        }]);

        return FileListComponent;
      }();

      FileListComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _service_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]
        }];
      };

      FileListComponent.propDecorators = {
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['search']
        }],
        cName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cName']
        }],
        cCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cCode']
        }],
        sName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sName']
        }],
        sAddress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sAddress']
        }],
        city: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['city']
        }],
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['state']
        }],
        lCPName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['lCPName']
        }],
        lPContact: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['lPContact']
        }],
        tOCharger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['tOCharger']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['model']
        }],
        sNumber: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['sNumber']
        }],
        fIStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['fIStatus']
        }],
        iStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['iStatus']
        }],
        cStatus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cStatus']
        }],
        cBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cBy']
        }],
        cDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['cDate']
        }]
      };
      FileListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-file-list',
        template: _raw_loader_file_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_file_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_file_service__WEBPACK_IMPORTED_MODULE_6__["FileService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]])], FileListComponent);
      /***/
    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map