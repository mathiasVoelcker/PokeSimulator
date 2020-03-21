function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/sign-up/sign-up.component */
    "./src/app/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _pokemon_pokemon_search_pokemon_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pokemon/pokemon-search/pokemon-search.component */
    "./src/app/pokemon/pokemon-search/pokemon-search.component.ts");
    /* harmony import */


    var _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pokemon/pokemon-register/pokemon-register.component */
    "./src/app/pokemon/pokemon-register/pokemon-register.component.ts");
    /* harmony import */


    var _simulation_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./simulation/simulation/simulation.component */
    "./src/app/simulation/simulation/simulation.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'login',
      pathMatch: 'full',
      component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'sign_up',
      pathMatch: 'full',
      component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'search',
      component: _pokemon_pokemon_search_pokemon_search_component__WEBPACK_IMPORTED_MODULE_5__["PokemonSearchComponent"]
    }, {
      path: 'pokemon',
      component: _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_6__["PokemonRegisterComponent"]
    }, {
      path: 'pokemon/:species_id',
      component: _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_6__["PokemonRegisterComponent"]
    }, {
      path: 'pokemon/:pokemon_id/:isEdit',
      component: _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_6__["PokemonRegisterComponent"]
    }, {
      path: 'simulation',
      component: _simulation_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_7__["SimulationComponent"]
    }, {
      path: 'simulation/:id',
      component: _simulation_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_7__["SimulationComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/layouts/header/header.component */
    "./src/app/shared/layouts/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'pokeSimulatorFront';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [[1, "content-wrapper"], [1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.sass']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/layouts/header/header.component */
    "./src/app/shared/layouts/header/header.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _pokemon_pokemon_search_pokemon_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pokemon/pokemon-search/pokemon-search.component */
    "./src/app/pokemon/pokemon-search/pokemon-search.component.ts");
    /* harmony import */


    var _pokemon_pokemon_species_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pokemon/pokemon-species.service */
    "./src/app/pokemon/pokemon-species.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pokemon/pokemon-register/pokemon-register.component */
    "./src/app/pokemon/pokemon-register/pokemon-register.component.ts");
    /* harmony import */


    var _shared_layouts_basic_dropdown_basic_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/layouts/basic-dropdown/basic-dropdown.component */
    "./src/app/shared/layouts/basic-dropdown/basic-dropdown.component.ts");
    /* harmony import */


    var _nature_nature_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./nature/nature.service */
    "./src/app/nature/nature.service.ts");
    /* harmony import */


    var _shared_pipes_stat_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/pipes/stat.pipe */
    "./src/app/shared/pipes/stat.pipe.ts");
    /* harmony import */


    var _shared_pipes_move_category_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./shared/pipes/move-category.pipe */
    "./src/app/shared/pipes/move-category.pipe.ts");
    /* harmony import */


    var _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pokemon/pokemon.service */
    "./src/app/pokemon/pokemon.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _simulation_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./simulation/simulation/simulation.component */
    "./src/app/simulation/simulation/simulation.component.ts");
    /* harmony import */


    var _simulation_simulation_card_simulation_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./simulation/simulation-card/simulation-card.component */
    "./src/app/simulation/simulation-card/simulation-card.component.ts");
    /* harmony import */


    var _simulation_simulation_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./simulation/simulation.service */
    "./src/app/simulation/simulation.service.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user/sign-up/sign-up.component */
    "./src/app/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _nature_nature_dropdown_nature_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./nature/nature-dropdown/nature-dropdown.component */
    "./src/app/nature/nature-dropdown/nature-dropdown.component.ts");
    /* harmony import */


    var _shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./shared/layouts/advanced-dropdown/advanced-dropdown.component */
    "./src/app/shared/layouts/advanced-dropdown/advanced-dropdown.component.ts");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _moves_move_dropdown_move_dropdown_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./moves/move-dropdown/move-dropdown.component */
    "./src/app/moves/move-dropdown/move-dropdown.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_pokemon_pokemon_species_service__WEBPACK_IMPORTED_MODULE_8__["PokemonSpeciesService"], _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_16__["PokemonService"], _nature_nature_service__WEBPACK_IMPORTED_MODULE_13__["NatureService"], _simulation_simulation_service__WEBPACK_IMPORTED_MODULE_21__["SimulationService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"]],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _pokemon_pokemon_search_pokemon_search_component__WEBPACK_IMPORTED_MODULE_7__["PokemonSearchComponent"], _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_11__["PokemonRegisterComponent"], _shared_layouts_basic_dropdown_basic_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["BasicDropdownComponent"], _shared_pipes_stat_pipe__WEBPACK_IMPORTED_MODULE_14__["StatPipe"], _shared_pipes_move_category_pipe__WEBPACK_IMPORTED_MODULE_15__["MoveCategoryPipe"], _simulation_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_19__["SimulationComponent"], _simulation_simulation_card_simulation_card_component__WEBPACK_IMPORTED_MODULE_20__["SimulationCardComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__["SignUpComponent"], _shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["AdvancedDropdownComponent"], _nature_nature_dropdown_nature_dropdown_component__WEBPACK_IMPORTED_MODULE_25__["NatureDropdownComponent"], _moves_move_dropdown_move_dropdown_component__WEBPACK_IMPORTED_MODULE_30__["MoveDropdownComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _shared_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _pokemon_pokemon_search_pokemon_search_component__WEBPACK_IMPORTED_MODULE_7__["PokemonSearchComponent"], _pokemon_pokemon_register_pokemon_register_component__WEBPACK_IMPORTED_MODULE_11__["PokemonRegisterComponent"], _shared_layouts_basic_dropdown_basic_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["BasicDropdownComponent"], _shared_pipes_stat_pipe__WEBPACK_IMPORTED_MODULE_14__["StatPipe"], _shared_pipes_move_category_pipe__WEBPACK_IMPORTED_MODULE_15__["MoveCategoryPipe"], _simulation_simulation_simulation_component__WEBPACK_IMPORTED_MODULE_19__["SimulationComponent"], _simulation_simulation_card_simulation_card_component__WEBPACK_IMPORTED_MODULE_20__["SimulationCardComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"], _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_24__["SignUpComponent"], _shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_26__["AdvancedDropdownComponent"], _nature_nature_dropdown_nature_dropdown_component__WEBPACK_IMPORTED_MODULE_25__["NatureDropdownComponent"], _moves_move_dropdown_move_dropdown_component__WEBPACK_IMPORTED_MODULE_30__["MoveDropdownComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot()],
          providers: [_pokemon_pokemon_species_service__WEBPACK_IMPORTED_MODULE_8__["PokemonSpeciesService"], _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_16__["PokemonService"], _nature_nature_service__WEBPACK_IMPORTED_MODULE_13__["NatureService"], _simulation_simulation_service__WEBPACK_IMPORTED_MODULE_21__["SimulationService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pokemon_pokemon_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pokemon/pokemon-domain */
    "./src/app/pokemon/pokemon-domain.ts");
    /* harmony import */


    var _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pokemon/pokemon.service */
    "./src/app/pokemon/pokemon.service.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Pokemons registered yet. Click ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "here");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " to save your pokemons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_1_ng_container_25_td_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_ng_container_25_td_22_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var pokemon_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.editPokemon(pokemon_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_1_ng_container_25_td_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_ng_container_25_td_23_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var pokemon_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.deletePokemon(pokemon_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_1_ng_container_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_1_ng_container_25_Template_a_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var pokemon_r3 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.simulateBattle(pokemon_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_div_1_ng_container_25_td_22_Template, 3, 0, "td", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_div_1_ng_container_25_td_23_Template, 3, 0, "td", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var pokemon_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.getImgUrl(pokemon_r3.pokemonSpecies), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pokemon_r3.pokemonSpecies.name.toUpperCase(), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.attack);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.defense);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.spAttack);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.spDefense);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.speed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pokemon_r3.hp);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLogged());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isLogged());
      }
    }

    function HomeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pokemons");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pokemon species");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Level");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Attack");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Defense");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Special Attack");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Special Defense");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Speed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_1_ng_container_25_Template, 24, 23, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.getCSSClass());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.pokemons);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(pokemonService, authService, toastr, router) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.pokemonService = pokemonService;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.tests = ['One', 'Two', 'Three'];
        this.myControl.valueChanges.subscribe(function (newValue) {
          _this.tests = _this.testMethod();
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // if (this.isLogged()) {
          this.listPokemons(); // }
        }
      }, {
        key: "testMethod",
        value: function testMethod() {
          return ["one", "two", "three"];
        }
      }, {
        key: "listPokemons",
        value: function listPokemons() {
          var _this2 = this;

          this.pokemonService.listPokemons().subscribe(function (resp) {
            _this2.pokemons = resp;
          });
        }
      }, {
        key: "deletePokemon",
        value: function deletePokemon(pokemon_id) {
          var _this3 = this;

          this.pokemonService.deletePokemon(pokemon_id).subscribe(function (resp) {
            _this3.listPokemons();

            _this3.toastr.success('Pokemon was deleted succesfully');
          });
        }
      }, {
        key: "editPokemon",
        value: function editPokemon(pokemon_id) {
          this.router.navigate(["/pokemon", pokemon_id, "isEdit"]);
        }
      }, {
        key: "simulateBattle",
        value: function simulateBattle(id) {
          this.router.navigate(["/simulation", id]);
        }
      }, {
        key: "getCSSClass",
        value: function getCSSClass() {
          if (window.innerWidth <= 760) {
            return 'collapse';
          }

          return '';
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return this.authService.isLogged();
        }
      }, {
        key: "getImgUrl",
        value: function getImgUrl(pokemonSpecies) {
          return _pokemon_pokemon_domain__WEBPACK_IMPORTED_MODULE_2__["PokemonDomain"].getImgUrl(pokemonSpecies);
        }
      }, {
        key: "isListPokemonsEmpty",
        get: function get() {
          return !this.pokemons || this.pokemons.length == 0;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["href", "/search"], [1, "table", "table-striped"], ["colspan", "3"], [4, "ngFor", "ngForOf"], [1, "u-align-v-center"], [1, "pokemon-img-small", 3, "src"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Simulate Battle!", 1, "table-button", 3, "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-flash"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Edit Pokemon", 1, "table-button", 3, "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-pencil"], ["data-toggle", "tooltip", "data-placement", "top", "title", "Delete Pokemon", 1, "table-button", 3, "click"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-trash"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 6, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 26, 13, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isListPokemonsEmpty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isListPokemonsEmpty);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/moves/move-domain.ts":
  /*!**************************************!*\
    !*** ./src/app/moves/move-domain.ts ***!
    \**************************************/

  /*! exports provided: MoveDomain */

  /***/
  function srcAppMovesMoveDomainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveDomain", function () {
      return MoveDomain;
    });

    var MoveDomain =
    /*#__PURE__*/
    function () {
      function MoveDomain() {
        _classCallCheck(this, MoveDomain);
      }

      _createClass(MoveDomain, null, [{
        key: "setMoveName",
        value: function setMoveName(move) {
          return "".concat(move.name, " - Power: ").concat(move.basePower, " - ").concat(move.category);
        }
      }]);

      return MoveDomain;
    }();
    /***/

  },

  /***/
  "./src/app/moves/move-dropdown/move-dropdown.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/moves/move-dropdown/move-dropdown.component.ts ***!
    \****************************************************************/

  /*! exports provided: MoveDropdownComponent */

  /***/
  function srcAppMovesMoveDropdownMoveDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveDropdownComponent", function () {
      return MoveDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/layouts/advanced-dropdown/advanced-dropdown.component */
    "./src/app/shared/layouts/advanced-dropdown/advanced-dropdown.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function MoveDropdownComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r46 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r46);
      }
    }

    var MoveDropdownComponent =
    /*#__PURE__*/
    function (_shared_layouts_advan) {
      _inherits(MoveDropdownComponent, _shared_layouts_advan);

      function MoveDropdownComponent() {
        var _this4;

        _classCallCheck(this, MoveDropdownComponent);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(MoveDropdownComponent).call(this));

        _this4.list.valueChanges.subscribe(function (text) {
          _this4.setItem(text);
        });

        return _this4;
      }

      _createClass(MoveDropdownComponent, [{
        key: "setItem",
        value: function setItem(text) {
          if (!!text) {
            this.selected.emit(this.moves.find(function (x) {
              return x.name.toUpperCase().includes(text.toUpperCase());
            }));
          }
        }
      }, {
        key: "shownItems",
        get: function get() {
          var text = this.list.value;
          if (!this.moves) return null;
          if (!text) return this.moves.map(function (x) {
            return x.name;
          });
          return this.moves.filter(function (x) {
            return x.name.toUpperCase().includes(text.toUpperCase());
          }).map(function (x) {
            return x.name;
          });
        }
      }]);

      return MoveDropdownComponent;
    }(_shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["AdvancedDropdownComponent"]);

    MoveDropdownComponent.ɵfac = function MoveDropdownComponent_Factory(t) {
      return new (t || MoveDropdownComponent)();
    };

    MoveDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MoveDropdownComponent,
      selectors: [["app-move-dropdown"]],
      inputs: {
        moves: "moves"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 5,
      consts: [[2, "width", "100%"], ["type", "text", "matInput", "", 3, "ngModel", "placeholder", "formControl", "matAutocomplete", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function MoveDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MoveDropdownComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.inputLabel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MoveDropdownComponent_mat_option_4_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputLabel)("placeholder", ctx.placeholder)("formControl", ctx.list)("matAutocomplete", _r44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shownItems);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-move-dropdown',
          templateUrl: '../../shared/layouts/advanced-dropdown/advanced-dropdown.component.html'
        }]
      }], function () {
        return [];
      }, {
        moves: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/moves/move.service.ts":
  /*!***************************************!*\
    !*** ./src/app/moves/move.service.ts ***!
    \***************************************/

  /*! exports provided: MoveService */

  /***/
  function srcAppMovesMoveServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveService", function () {
      return MoveService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MoveService =
    /*#__PURE__*/
    function (_shared_services_main) {
      _inherits(MoveService, _shared_services_main);

      function MoveService(http) {
        var _this5;

        _classCallCheck(this, MoveService);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(MoveService).call(this, 'moves/'));
        _this5.http = http;
        return _this5;
      }

      _createClass(MoveService, [{
        key: "listMoves",
        value: function listMoves() {
          return this.http.get("".concat(this.url, "getAll/"));
        }
      }]);

      return MoveService;
    }(_shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]);

    MoveService.ɵfac = function MoveService_Factory(t) {
      return new (t || MoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MoveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MoveService,
      factory: MoveService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nature/nature-domain.ts":
  /*!*****************************************!*\
    !*** ./src/app/nature/nature-domain.ts ***!
    \*****************************************/

  /*! exports provided: NatureDomain */

  /***/
  function srcAppNatureNatureDomainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NatureDomain", function () {
      return NatureDomain;
    });
    /* harmony import */


    var _shared_pipes_stat_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../shared/pipes/stat.pipe */
    "./src/app/shared/pipes/stat.pipe.ts");

    var NatureDomain =
    /*#__PURE__*/
    function () {
      function NatureDomain() {
        _classCallCheck(this, NatureDomain);
      }

      _createClass(NatureDomain, null, [{
        key: "defineNatureText",
        value: function defineNatureText(nature) {
          if (!nature) return null;

          if (!nature.strongStat && !nature.weakStat) {
            return "".concat(nature.name, ": Neutral");
          }

          return "".concat(nature.name, " - Strong: ").concat(_shared_pipes_stat_pipe__WEBPACK_IMPORTED_MODULE_0__["StatPipe"].prototype.transform(nature.strongStat), " - Weak: ").concat(_shared_pipes_stat_pipe__WEBPACK_IMPORTED_MODULE_0__["StatPipe"].prototype.transform(nature.weakStat));
        }
      }]);

      return NatureDomain;
    }();
    /***/

  },

  /***/
  "./src/app/nature/nature-dropdown/nature-dropdown.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/nature/nature-dropdown/nature-dropdown.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NatureDropdownComponent */

  /***/
  function srcAppNatureNatureDropdownNatureDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NatureDropdownComponent", function () {
      return NatureDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/layouts/advanced-dropdown/advanced-dropdown.component */
    "./src/app/shared/layouts/advanced-dropdown/advanced-dropdown.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function NatureDropdownComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r43);
      }
    }

    var NatureDropdownComponent =
    /*#__PURE__*/
    function (_shared_layouts_advan2) {
      _inherits(NatureDropdownComponent, _shared_layouts_advan2);

      function NatureDropdownComponent() {
        _classCallCheck(this, NatureDropdownComponent);

        return _possibleConstructorReturn(this, _getPrototypeOf(NatureDropdownComponent).call(this));
      }

      _createClass(NatureDropdownComponent, [{
        key: "setItem",
        value: function setItem(text) {
          debugger;

          if (!!text) {
            this.selected.emit(this.natures.find(function (x) {
              return x.name.toUpperCase().includes(text.toUpperCase());
            }));
          }
        }
      }, {
        key: "shownItems",
        get: function get() {
          var text = this.list.value;
          if (!this.natures) return null;
          if (!text) return this.natures.map(function (x) {
            return x.name;
          });
          return this.natures.filter(function (x) {
            return x.name.toUpperCase().includes(text.toUpperCase());
          }).map(function (x) {
            return x.name;
          });
        }
      }]);

      return NatureDropdownComponent;
    }(_shared_layouts_advanced_dropdown_advanced_dropdown_component__WEBPACK_IMPORTED_MODULE_1__["AdvancedDropdownComponent"]);

    NatureDropdownComponent.ɵfac = function NatureDropdownComponent_Factory(t) {
      return new (t || NatureDropdownComponent)();
    };

    NatureDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NatureDropdownComponent,
      selectors: [["app-nature-dropdown"]],
      inputs: {
        natures: "natures"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 5,
      vars: 5,
      consts: [[2, "width", "100%"], ["type", "text", "matInput", "", 3, "ngModel", "placeholder", "formControl", "matAutocomplete", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function NatureDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NatureDropdownComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.inputLabel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NatureDropdownComponent_mat_option_4_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputLabel)("placeholder", ctx.placeholder)("formControl", ctx.list)("matAutocomplete", _r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shownItems);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NatureDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nature-dropdown',
          templateUrl: '../../shared/layouts/advanced-dropdown/advanced-dropdown.component.html'
        }]
      }], function () {
        return [];
      }, {
        natures: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/nature/nature.service.ts":
  /*!******************************************!*\
    !*** ./src/app/nature/nature.service.ts ***!
    \******************************************/

  /*! exports provided: NatureService */

  /***/
  function srcAppNatureNatureServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NatureService", function () {
      return NatureService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NatureService =
    /*#__PURE__*/
    function (_shared_services_main2) {
      _inherits(NatureService, _shared_services_main2);

      function NatureService(http) {
        var _this6;

        _classCallCheck(this, NatureService);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(NatureService).call(this, 'natures/'));
        _this6.http = http;
        return _this6;
      }

      _createClass(NatureService, [{
        key: "listNatures",
        value: function listNatures() {
          return this.http.get("".concat(this.url, "getAll/"));
        }
      }]);

      return NatureService;
    }(_shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]);

    NatureService.ɵfac = function NatureService_Factory(t) {
      return new (t || NatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    NatureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NatureService,
      factory: NatureService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NatureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pokemon/entities/pokemon.ts":
  /*!*********************************************!*\
    !*** ./src/app/pokemon/entities/pokemon.ts ***!
    \*********************************************/

  /*! exports provided: Pokemon */

  /***/
  function srcAppPokemonEntitiesPokemonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pokemon", function () {
      return Pokemon;
    });

    var Pokemon = function Pokemon() {
      _classCallCheck(this, Pokemon);
    };
    /***/

  },

  /***/
  "./src/app/pokemon/pokemon-domain.ts":
  /*!*******************************************!*\
    !*** ./src/app/pokemon/pokemon-domain.ts ***!
    \*******************************************/

  /*! exports provided: PokemonDomain */

  /***/
  function srcAppPokemonPokemonDomainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonDomain", function () {
      return PokemonDomain;
    });

    var PokemonDomain =
    /*#__PURE__*/
    function () {
      function PokemonDomain() {
        _classCallCheck(this, PokemonDomain);
      }

      _createClass(PokemonDomain, null, [{
        key: "getImgUrl",
        value: function getImgUrl(pokemonSpecies) {
          if (!!pokemonSpecies) {
            return "https://img.pokemondb.net/artwork/".concat(pokemonSpecies.name, ".jpg");
          }

          return '';
        }
      }]);

      return PokemonDomain;
    }();
    /***/

  },

  /***/
  "./src/app/pokemon/pokemon-register/pokemon-register.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pokemon/pokemon-register/pokemon-register.component.ts ***!
    \************************************************************************/

  /*! exports provided: PokemonRegisterComponent */

  /***/
  function srcAppPokemonPokemonRegisterPokemonRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonRegisterComponent", function () {
      return PokemonRegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_enums_stat_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/enums/stat.enum */
    "./src/app/shared/enums/stat.enum.ts");
    /* harmony import */


    var _entities_pokemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../entities/pokemon */
    "./src/app/pokemon/entities/pokemon.ts");
    /* harmony import */


    var _nature_nature_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../nature/nature-domain */
    "./src/app/nature/nature-domain.ts");
    /* harmony import */


    var _moves_move_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../moves/move-domain */
    "./src/app/moves/move-domain.ts");
    /* harmony import */


    var _pokemon_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../pokemon-domain */
    "./src/app/pokemon/pokemon-domain.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pokemon_species_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pokemon-species.service */
    "./src/app/pokemon/pokemon-species.service.ts");
    /* harmony import */


    var _pokemon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../pokemon.service */
    "./src/app/pokemon/pokemon.service.ts");
    /* harmony import */


    var _nature_nature_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../nature/nature.service */
    "./src/app/nature/nature.service.ts");
    /* harmony import */


    var _moves_move_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../moves/move.service */
    "./src/app/moves/move.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nature_nature_dropdown_nature_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../nature/nature-dropdown/nature-dropdown.component */
    "./src/app/nature/nature-dropdown/nature-dropdown.component.ts");
    /* harmony import */


    var _moves_move_dropdown_move_dropdown_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../moves/move-dropdown/move-dropdown.component */
    "./src/app/moves/move-dropdown/move-dropdown.component.ts");

    function PokemonRegisterComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("type type-", ctx_r20.pokemon_species.secondType.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx_r20.pokemon_species.secondType.name), " ");
      }
    }

    function PokemonRegisterComponent_p_104_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All IV must be informed and lower than 31");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PokemonRegisterComponent_p_137_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All EV must be informed and lower than 252");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PokemonRegisterComponent_p_138_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The some of all EV must be lower than 510");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PokemonRegisterComponent =
    /*#__PURE__*/
    function () {
      function PokemonRegisterComponent(route, pokemonSpeciesService, pokemonService, natureService, moveService, toastr, authService, fb) {
        var _this7 = this;

        _classCallCheck(this, PokemonRegisterComponent);

        this.route = route;
        this.pokemonSpeciesService = pokemonSpeciesService;
        this.pokemonService = pokemonService;
        this.natureService = natureService;
        this.moveService = moveService;
        this.toastr = toastr;
        this.authService = authService;
        this.pokemon = new _entities_pokemon__WEBPACK_IMPORTED_MODULE_3__["Pokemon"]();
        this.totalEvLeft = 510;
        this.route.params.subscribe(function (params) {
          _this7.speciesIdParam = params.species_id;
          _this7.pokemonIdParam = params.pokemon_id;
        });
        this.pokemonForm = fb.group({
          level: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)])],
          nature: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
          ivHp: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(31)])],
          ivAttack: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(31)])],
          ivDefense: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(31)])],
          ivSpAttack: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(31)])],
          ivSpDefense: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(31)])],
          ivSpeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(31)])],
          evHp: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(252)])],
          evAttack: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(252)])],
          evDefense: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(252)])],
          evSpAttack: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(252)])],
          evSpDefense: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(252)])],
          evSpeed: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(252)])],
          move1: [null],
          move2: [null],
          move3: [null],
          move4: [null]
        });
        this.initializeObjects();
        this.pokemonForm.valueChanges.subscribe(function (values) {
          _this7.refreshStats();
        });
      }

      _createClass(PokemonRegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.isLogged()) {
            this.toastr.warning('You have to log in to register a Pokemon', 'Warning', {
              disableTimeOut: true
            });
          }
        }
      }, {
        key: "getImgUrl",
        value: function getImgUrl(pokemonSpecies) {
          return _pokemon_domain__WEBPACK_IMPORTED_MODULE_6__["PokemonDomain"].getImgUrl(pokemonSpecies);
        }
      }, {
        key: "initializeObjects",
        value: function initializeObjects() {
          var _this8 = this;

          debugger;

          if (!!this.pokemonIdParam) {
            this.pokemonService.getPokemon(this.pokemonIdParam).subscribe(function (resp) {
              _this8.pokemon = resp;
              _this8.pokemon_species = resp.pokemonSpecies;

              _this8.pokemonForm.patchValue(resp);
            });
          } else {
            this.pokemonSpeciesService.getPokemonSpecies(this.speciesIdParam).subscribe(function (resp) {
              _this8.pokemon_species = resp;

              _this8.refreshStats();
            });
          }

          this.moveService.listMoves().subscribe(function (resp) {
            _this8.moves = resp;

            _this8.moves.forEach(function (move) {
              move.name = _moves_move_domain__WEBPACK_IMPORTED_MODULE_5__["MoveDomain"].setMoveName(move);
            });
          });
          this.natureService.listNatures().subscribe(function (resp) {
            _this8.natures = resp;

            _this8.natures.forEach(function (nature) {
              nature.name = _nature_nature_domain__WEBPACK_IMPORTED_MODULE_4__["NatureDomain"].defineNatureText(nature);
            });
          });
        }
      }, {
        key: "savePokemon",
        value: function savePokemon() {
          var _this9 = this;

          var newPokemon = Object.assign(this.pokemon, this.pokemonForm.value);
          newPokemon.pokemonSpecies = this.pokemon_species;

          if (!this.pokemonIdParam) {
            this.pokemonService.savePokemon(newPokemon).subscribe(function (resp) {
              _this9.toastr.success('Pokemon successfully created');
            }, function (err) {
              console.log(err);

              _this9.toastr.error(err.error.message);
            });
          } else {
            this.pokemonService.updatePokemon(newPokemon, this.pokemonIdParam).subscribe(function (resp) {
              _this9.toastr.success('Pokemon successfully updated');
            }, function (err) {
              console.log(err);

              _this9.toastr.error(err.error.message);
            });
          }
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return this.authService.isLogged();
        } //STATS

      }, {
        key: "validateIVs",
        value: function validateIVs() {
          return this.pokemonForm.get('ivHp').valid && this.pokemonForm.get('ivAttack').valid && this.pokemonForm.get('ivDefense').valid && this.pokemonForm.get('ivSpAttack').valid && this.pokemonForm.get('ivSpDefense').valid && this.pokemonForm.get('ivSpeed').valid;
        }
      }, {
        key: "validateEVs",
        value: function validateEVs() {
          return this.pokemonForm.get('evHp').valid && this.pokemonForm.get('evAttack').valid && this.pokemonForm.get('evDefense').valid && this.pokemonForm.get('evSpAttack').valid && this.pokemonForm.get('evSpDefense').valid && this.pokemonForm.get('evSpeed').valid;
        }
      }, {
        key: "validateEVsTotal",
        value: function validateEVsTotal() {
          var ev_total = this.pokemonForm.get('evHp').value + this.pokemonForm.get('evAttack').value + this.pokemonForm.get('evDefense').value + this.pokemonForm.get('evSpAttack').value + this.pokemonForm.get('evSpDefense').value + this.pokemonForm.get('evSpeed').value;
          this.totalEvLeft = 510 - ev_total;
          return ev_total <= 510;
        }
      }, {
        key: "refreshStats",
        value: function refreshStats() {
          this.pokemon.hp = Math.round(this.calculateHP());
          this.pokemon.attack = Math.round(this.calculateStat('Attack', _shared_enums_stat_enum__WEBPACK_IMPORTED_MODULE_2__["Stat"].Attack, this.pokemon_species.baseAttack));
          this.pokemon.defense = Math.round(this.calculateStat('Defense', _shared_enums_stat_enum__WEBPACK_IMPORTED_MODULE_2__["Stat"].Defense, this.pokemon_species.baseDefense));
          this.pokemon.spAttack = Math.round(this.calculateStat('SpAttack', _shared_enums_stat_enum__WEBPACK_IMPORTED_MODULE_2__["Stat"].SpecialAttack, this.pokemon_species.baseSpAttack));
          this.pokemon.spDefense = Math.round(this.calculateStat('SpDefense', _shared_enums_stat_enum__WEBPACK_IMPORTED_MODULE_2__["Stat"].SpecialDefense, this.pokemon_species.baseSpDefense));
          this.pokemon.speed = Math.round(this.calculateStat('Speed', _shared_enums_stat_enum__WEBPACK_IMPORTED_MODULE_2__["Stat"].Speed, this.pokemon_species.baseSpeed));
        }
      }, {
        key: "calculateHP",
        value: function calculateHP() {
          var iv = this.pokemonForm.get('ivHp').value;
          var ev = this.pokemonForm.get('evHp').value;
          var level = this.pokemonForm.get('level').value;
          return (this.pokemon_species.baseHp * 2 + iv + ev / 4) * level / 100 + level + 10;
        }
      }, {
        key: "calculateStat",
        value: function calculateStat(statString, stat, baseStat) {
          var iv = this.pokemonForm.get("iv".concat(statString)).value;
          var ev = this.pokemonForm.get("ev".concat(statString)).value;
          var level = this.pokemonForm.get('level').value;
          return ((baseStat * 2 + iv + ev / 4) * level / 100 + 5) * this.calculateNature(stat);
        } //MOVE

      }, {
        key: "setMove1",
        value: function setMove1(move) {
          this.pokemonForm.get("move1").setValue(move);
        }
      }, {
        key: "setMove2",
        value: function setMove2(move) {
          this.pokemonForm.get("move2").setValue(move);
        }
      }, {
        key: "setMove3",
        value: function setMove3(move) {
          this.pokemonForm.get("move3").setValue(move);
        }
      }, {
        key: "setMove4",
        value: function setMove4(move) {
          this.pokemonForm.get("move4").setValue(move);
        } //NATURE

      }, {
        key: "setNature",
        value: function setNature(natureId) {
          this.pokemonForm.get('nature').setValue(natureId);
          this.refreshStats();
        }
      }, {
        key: "calculateNature",
        value: function calculateNature(stat) {
          debugger;
          var natureSelected = this.pokemonForm.get('nature').value;

          if (!natureSelected) {
            return 1;
          }

          if (natureSelected.strongStat == stat) {
            return 1.1;
          }

          if (natureSelected.weakStat == stat) {
            return 0.9;
          }

          return 1;
        }
      }]);

      return PokemonRegisterComponent;
    }();

    PokemonRegisterComponent.ɵfac = function PokemonRegisterComponent_Factory(t) {
      return new (t || PokemonRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pokemon_species_service__WEBPACK_IMPORTED_MODULE_8__["PokemonSpeciesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pokemon_service__WEBPACK_IMPORTED_MODULE_9__["PokemonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nature_nature_service__WEBPACK_IMPORTED_MODULE_10__["NatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_moves_move_service__WEBPACK_IMPORTED_MODULE_11__["MoveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    PokemonRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PokemonRegisterComponent,
      selectors: [["app-pokemon-register"]],
      decls: 155,
      vars: 45,
      consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "panel", "panel-primary"], [1, "panel-heading"], [1, "title", "title-casual"], [1, "panel-body"], [1, "col-md-4", "col-sm-4"], [1, "image-div", "image-div-big"], [1, "pokemon-img-large", 3, "src"], [3, "class", 4, "ngIf"], [1, "col-md-4", "col-sm-4", "left-div"], [1, "field"], [1, "required-field"], ["formControlName", "level", "type", "number", 1, "form-control"], [1, "field", "u-margin-top-medium"], [3, "natures", "selectedItem", "placeholder", "selected"], [1, "col-md-4"], ["id", "pokemonHp"], ["id", "pokemonAttack"], ["id", "pokemonDefense"], ["id", "pokemonSpAttack"], ["id", "pokemonSpDefense"], ["id", "pokemonSpeed"], [1, "col-md-6"], ["formControlName", "ivAttack", "type", "number", 1, "form-control"], ["formControlName", "ivDefense", "type", "number", 1, "form-control"], ["formControlName", "ivSpAttack", "type", "number", 1, "form-control"], ["formControlName", "ivSpDefense", "type", "number", 1, "form-control"], ["formControlName", "ivSpeed", "type", "number", 1, "form-control"], ["formControlName", "ivHp", "type", "number", 1, "form-control"], ["class", "error-message", 4, "ngIf"], ["formControlName", "evAttack", "type", "number", 1, "form-control"], ["formControlName", "evDefense", "type", "number", 1, "form-control"], ["formControlName", "evSpAttack", "type", "number", 1, "form-control"], ["formControlName", "evSpDefense", "type", "number", 1, "form-control"], ["formControlName", "evSpeed", "type", "number", 1, "form-control"], ["formControlName", "evHp", "type", "number", 1, "form-control"], [1, "col-md-3"], [3, "moves", "selectedItem", "placeholder", "selected"], [1, "actions", "right-div"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "error-message"]],
      template: function PokemonRegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PokemonRegisterComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.savePokemon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PokemonRegisterComponent_span_17_Template, 3, 6, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Base Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-nature-dropdown", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PokemonRegisterComponent_Template_app_nature_dropdown_selected_39_listener($event) {
            return ctx.setNature($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Final Stats");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "HP: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Attack:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Defense:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Special Attack:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Special Defense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "IVs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "IV Attack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "IV Defense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "IV Special Attack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "IV Special Defense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "IV Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "IV HP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, PokemonRegisterComponent_p_104_Template, 2, 0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "EVs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "EV Attack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "EV Defense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "EV Special Attack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "EV Special Defense");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "EV Speed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "EV HP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](137, PokemonRegisterComponent_p_137_Template, 2, 0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, PokemonRegisterComponent_p_138_Template, 2, 0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "app-move-dropdown", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PokemonRegisterComponent_Template_app_move_dropdown_selected_142_listener($event) {
            return ctx.setMove1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "app-move-dropdown", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PokemonRegisterComponent_Template_app_move_dropdown_selected_145_listener($event) {
            return ctx.setMove2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "app-move-dropdown", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PokemonRegisterComponent_Template_app_move_dropdown_selected_148_listener($event) {
            return ctx.setMove3($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "app-move-dropdown", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function PokemonRegisterComponent_Template_app_move_dropdown_selected_151_listener($event) {
            return ctx.setMove4($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Create Pokemon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pokemonForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("#", ctx.pokemon_species.id, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 41, ctx.pokemon_species.name), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getImgUrl(ctx.pokemon_species), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("type type-", ctx.pokemon_species.firstType.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 43, ctx.pokemon_species.firstType.name), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemon_species.secondType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hp: ", ctx.pokemon_species.baseHp, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attack: ", ctx.pokemon_species.baseAttack, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defense: ", ctx.pokemon_species.baseDefense, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Special Attack: ", ctx.pokemon_species.baseSpAttack, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Special Defense: ", ctx.pokemon_species.baseSpDefense, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Speed: ", ctx.pokemon_species.baseSpeed, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("natures", ctx.natures)("selectedItem", ctx.pokemon.nature)("placeholder", "Select a nature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.hp);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.attack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.defense);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.spAttack);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.spDefense);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pokemon.speed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validateIVs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("EV points left: ", ctx.totalEvLeft, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validateEVs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validateEVsTotal());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.moves)("selectedItem", ctx.pokemon.move1)("placeholder", "Move 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.moves)("selectedItem", ctx.pokemon.move2)("placeholder", "Move 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.moves)("selectedItem", ctx.pokemon.move3)("placeholder", "Move 3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.moves)("selectedItem", ctx.pokemon.move4)("placeholder", "Move 4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.pokemonForm.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nature_nature_dropdown_nature_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["NatureDropdownComponent"], _moves_move_dropdown_move_dropdown_component__WEBPACK_IMPORTED_MODULE_16__["MoveDropdownComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bva2Vtb24vcG9rZW1vbi1yZWdpc3Rlci9wb2tlbW9uLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pokemon-register',
          templateUrl: './pokemon-register.component.html',
          styleUrls: ['./pokemon-register.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }, {
          type: _pokemon_species_service__WEBPACK_IMPORTED_MODULE_8__["PokemonSpeciesService"]
        }, {
          type: _pokemon_service__WEBPACK_IMPORTED_MODULE_9__["PokemonService"]
        }, {
          type: _nature_nature_service__WEBPACK_IMPORTED_MODULE_10__["NatureService"]
        }, {
          type: _moves_move_service__WEBPACK_IMPORTED_MODULE_11__["MoveService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pokemon/pokemon-search/pokemon-search.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pokemon/pokemon-search/pokemon-search.component.ts ***!
    \********************************************************************/

  /*! exports provided: PokemonSearchComponent */

  /***/
  function srcAppPokemonPokemonSearchPokemonSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonSearchComponent", function () {
      return PokemonSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pokemon_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pokemon-domain */
    "./src/app/pokemon/pokemon-domain.ts");
    /* harmony import */


    var _pokemon_species_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../pokemon-species.service */
    "./src/app/pokemon/pokemon-species.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PokemonSearchComponent_div_7_ng_container_2_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pokemon_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("type type-", pokemon_r17.secondType.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, pokemon_r17.secondType.name), " ");
      }
    }

    function PokemonSearchComponent_div_7_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PokemonSearchComponent_div_7_ng_container_2_span_16_Template, 4, 6, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var pokemon_r17 = ctx.$implicit;

        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "pokemon/", pokemon_r17.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, pokemon_r17.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.getImgUrl(pokemon_r17), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("type type-", pokemon_r17.firstType.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, pokemon_r17.firstType.name), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pokemon_r17.secondType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Base stats: ", ctx_r16.getBaseStatTotal(pokemon_r17), "");
      }
    }

    function PokemonSearchComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PokemonSearchComponent_div_7_ng_container_2_Template, 20, 13, "ng-container", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.pokemonSpecies);
      }
    }

    var PokemonSearchComponent =
    /*#__PURE__*/
    function () {
      function PokemonSearchComponent(pokemonSpeciesServie, fb) {
        _classCallCheck(this, PokemonSearchComponent);

        this.pokemonSpeciesServie = pokemonSpeciesServie;
        this.pokemonSearchForm = fb.group({
          name: []
        });
        pokemonSpeciesServie;
      }

      _createClass(PokemonSearchComponent, [{
        key: "searchPokemons",
        value: function searchPokemons() {
          var _this10 = this;

          this.pokemonSpeciesServie.listPokemonSpecies(this.pokemonSearchForm.get('name').value).subscribe(function (resp) {
            debugger;
            _this10.pokemonSpecies = resp;
          });
        }
      }, {
        key: "getImgUrl",
        value: function getImgUrl(pokemonSpecies) {
          return _pokemon_domain__WEBPACK_IMPORTED_MODULE_1__["PokemonDomain"].getImgUrl(pokemonSpecies);
        }
      }, {
        key: "getBaseStatTotal",
        value: function getBaseStatTotal(pokemon) {
          return pokemon.baseAttack + pokemon.baseDefense + pokemon.baseHp + pokemon.baseSpAttack + pokemon.baseSpDefense + pokemon.baseSpeed;
        }
      }]);

      return PokemonSearchComponent;
    }();

    PokemonSearchComponent.ɵfac = function PokemonSearchComponent_Factory(t) {
      return new (t || PokemonSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pokemon_species_service__WEBPACK_IMPORTED_MODULE_2__["PokemonSpeciesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    PokemonSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PokemonSearchComponent,
      selectors: [["app-pokemon-search"]],
      decls: 8,
      vars: 2,
      consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group", "col-md-3"], ["formControlName", "name", "placeholder", "Type the name of a pokemon", 1, "form-control"], [1, "form-group", "col-md-2"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "row", 4, "ngIf"], [1, "containter"], [4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-6", "col-xs-12"], [3, "href"], [1, "panel", "panel-primary", "panel-link"], [1, "panel-heading"], [1, "panel-body"], [1, "col-md-4", "col-sm-4", "image-div", "image-div-small"], [1, "pokemon-img", 3, "src"], [1, "col-md-8", "col-sm-8"], [4, "ngIf"], [1, "row", "panel-content"], [1, "panel-content-text"]],
      template: function PokemonSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PokemonSearchComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.searchPokemons();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find Pokemon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PokemonSearchComponent_div_7_Template, 3, 1, "div", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.pokemonSearchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pokemonSpecies);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bva2Vtb24vcG9rZW1vbi1zZWFyY2gvcG9rZW1vbi1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pokemon-search',
          templateUrl: './pokemon-search.component.html',
          styleUrls: ['./pokemon-search.component.css']
        }]
      }], function () {
        return [{
          type: _pokemon_species_service__WEBPACK_IMPORTED_MODULE_2__["PokemonSpeciesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pokemon/pokemon-species.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/pokemon/pokemon-species.service.ts ***!
    \****************************************************/

  /*! exports provided: PokemonSpeciesService */

  /***/
  function srcAppPokemonPokemonSpeciesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonSpeciesService", function () {
      return PokemonSpeciesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var PokemonSpeciesService =
    /*#__PURE__*/
    function (_shared_services_main3) {
      _inherits(PokemonSpeciesService, _shared_services_main3);

      function PokemonSpeciesService(http) {
        var _this11;

        _classCallCheck(this, PokemonSpeciesService);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(PokemonSpeciesService).call(this, 'pokemonSpecies/'));
        _this11.http = http;
        return _this11;
      }

      _createClass(PokemonSpeciesService, [{
        key: "listPokemonSpecies",
        value: function listPokemonSpecies(name) {
          var body = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('name', name)
          };
          return this.http.get(this.url + "getByName/", body);
        }
      }, {
        key: "getPokemonSpecies",
        value: function getPokemonSpecies(id) {
          var body = {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
          };
          return this.http.get(this.url + "getById/", body);
        }
      }]);

      return PokemonSpeciesService;
    }(_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]);

    PokemonSpeciesService.ɵfac = function PokemonSpeciesService_Factory(t) {
      return new (t || PokemonSpeciesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PokemonSpeciesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PokemonSpeciesService,
      factory: PokemonSpeciesService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonSpeciesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pokemon/pokemon.service.ts":
  /*!********************************************!*\
    !*** ./src/app/pokemon/pokemon.service.ts ***!
    \********************************************/

  /*! exports provided: PokemonService */

  /***/
  function srcAppPokemonPokemonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PokemonService", function () {
      return PokemonService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PokemonService =
    /*#__PURE__*/
    function (_shared_services_main4) {
      _inherits(PokemonService, _shared_services_main4);

      function PokemonService(http) {
        var _this12;

        _classCallCheck(this, PokemonService);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(PokemonService).call(this, 'pokemons/'));
        _this12.http = http;
        return _this12;
      }

      _createClass(PokemonService, [{
        key: "listPokemons",
        value: function listPokemons() {
          return this.http.get("".concat(this.url, "getAll"), {
            headers: this.headers
          });
        }
      }, {
        key: "getPokemon",
        value: function getPokemon(id) {
          return this.http.get("".concat(this.url, "getByid/").concat(id), {
            headers: this.headers
          });
        }
      }, {
        key: "savePokemon",
        value: function savePokemon(pokemon) {
          return this.http.post("".concat(this.url, "create"), pokemon, {
            headers: this.headers
          });
        }
      }, {
        key: "updatePokemon",
        value: function updatePokemon(pokemon, id) {
          return this.http.put("".concat(this.url, "update/").concat(id), pokemon, {
            headers: this.headers
          });
        }
      }, {
        key: "deletePokemon",
        value: function deletePokemon(id) {
          return this.http.delete("".concat(this.url, "delete/").concat(id), {
            headers: this.headers
          });
        }
      }]);

      return PokemonService;
    }(_shared_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]);

    PokemonService.ɵfac = function PokemonService_Factory(t) {
      return new (t || PokemonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PokemonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PokemonService,
      factory: PokemonService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/enums/move-category.enum.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/enums/move-category.enum.ts ***!
    \****************************************************/

  /*! exports provided: MoveCategory */

  /***/
  function srcAppSharedEnumsMoveCategoryEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveCategory", function () {
      return MoveCategory;
    });

    var MoveCategory;

    (function (MoveCategory) {
      MoveCategory[MoveCategory["Physical"] = 1] = "Physical";
      MoveCategory[MoveCategory["Special"] = 2] = "Special";
      MoveCategory[MoveCategory["Status"] = 3] = "Status";
    })(MoveCategory || (MoveCategory = {}));
    /***/

  },

  /***/
  "./src/app/shared/enums/stat.enum.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/enums/stat.enum.ts ***!
    \*******************************************/

  /*! exports provided: Stat */

  /***/
  function srcAppSharedEnumsStatEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Stat", function () {
      return Stat;
    });

    var Stat;

    (function (Stat) {
      Stat[Stat["HP"] = 1] = "HP";
      Stat[Stat["Attack"] = 2] = "Attack";
      Stat[Stat["Defense"] = 3] = "Defense";
      Stat[Stat["SpecialAttack"] = 4] = "SpecialAttack";
      Stat[Stat["SpecialDefense"] = 5] = "SpecialDefense";
      Stat[Stat["Speed"] = 6] = "Speed";
    })(Stat || (Stat = {}));
    /***/

  },

  /***/
  "./src/app/shared/layouts/advanced-dropdown/advanced-dropdown.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/layouts/advanced-dropdown/advanced-dropdown.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AdvancedDropdownComponent */

  /***/
  function srcAppSharedLayoutsAdvancedDropdownAdvancedDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvancedDropdownComponent", function () {
      return AdvancedDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function AdvancedDropdownComponent_mat_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40);
      }
    }

    var AdvancedDropdownComponent =
    /*#__PURE__*/
    function () {
      function AdvancedDropdownComponent() {
        var _this13 = this;

        _classCallCheck(this, AdvancedDropdownComponent);

        this.list = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkbox = false;
        this.list.valueChanges.subscribe(function (text) {
          _this13.setItem(text);
        });
      }

      _createClass(AdvancedDropdownComponent, [{
        key: "setItem",
        value: function setItem(text) {
          if (!!text) {
            this.selected.emit(this.items.find(function (x) {
              return text.toUpperCase().includes(x.toUpperCase());
            }));
          }
        }
      }, {
        key: "selectedItem",
        set: function set(selectedItem) {
          if (!!selectedItem) {
            this.inputLabel = selectedItem.name;
          }
        }
      }, {
        key: "shownItems",
        get: function get() {
          var text = this.list.value;
          if (!text) return this.items;
          return this.items.filter(function (x) {
            return x.includes(text);
          });
        }
      }]);

      return AdvancedDropdownComponent;
    }();

    AdvancedDropdownComponent.ɵfac = function AdvancedDropdownComponent_Factory(t) {
      return new (t || AdvancedDropdownComponent)();
    };

    AdvancedDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdvancedDropdownComponent,
      selectors: [["app-advanced-dropdown"]],
      inputs: {
        items: "items",
        placeholder: "placeholder",
        selectedItem: "selectedItem"
      },
      outputs: {
        selected: "selected"
      },
      decls: 5,
      vars: 5,
      consts: [[2, "width", "100%"], ["type", "text", "matInput", "", 3, "ngModel", "placeholder", "formControl", "matAutocomplete", "ngModelChange"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function AdvancedDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvancedDropdownComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.inputLabel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-autocomplete", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AdvancedDropdownComponent_mat_option_4_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputLabel)("placeholder", ctx.placeholder)("formControl", ctx.list)("matAutocomplete", _r38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shownItems);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-advanced-dropdown',
          templateUrl: './advanced-dropdown.component.html'
        }]
      }], function () {
        return [];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/basic-dropdown/basic-dropdown-entity.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/layouts/basic-dropdown/basic-dropdown-entity.ts ***!
    \************************************************************************/

  /*! exports provided: BasicDropdownEntity */

  /***/
  function srcAppSharedLayoutsBasicDropdownBasicDropdownEntityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicDropdownEntity", function () {
      return BasicDropdownEntity;
    });

    var BasicDropdownEntity = function BasicDropdownEntity(id, name) {
      _classCallCheck(this, BasicDropdownEntity);

      this.id = id;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/shared/layouts/basic-dropdown/basic-dropdown.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/layouts/basic-dropdown/basic-dropdown.component.ts ***!
    \***************************************************************************/

  /*! exports provided: BasicDropdownComponent */

  /***/
  function srcAppSharedLayoutsBasicDropdownBasicDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicDropdownComponent", function () {
      return BasicDropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BasicDropdownComponent_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r30 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r30.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", item_r30.id == ctx_r29.selectedItem);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r30.name, " ");
      }
    }

    var BasicDropdownComponent =
    /*#__PURE__*/
    function () {
      function BasicDropdownComponent() {
        _classCallCheck(this, BasicDropdownComponent);

        this.selectedItem = {
          id: 0
        };
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BasicDropdownComponent, [{
        key: "setItem",
        value: function setItem(id) {
          this.selectedItem = id;
          this.itemSelected.emit(id);
        }
      }]);

      return BasicDropdownComponent;
    }();

    BasicDropdownComponent.ɵfac = function BasicDropdownComponent_Factory(t) {
      return new (t || BasicDropdownComponent)();
    };

    BasicDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasicDropdownComponent,
      selectors: [["app-basic-dropdown"]],
      inputs: {
        items: "items",
        itemTitle: "itemTitle",
        selectedItem: "selectedItem"
      },
      outputs: {
        itemSelected: "itemSelected"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "form-control", 3, "change"], ["value", "0"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
      template: function BasicDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BasicDropdownComponent_Template_select_change_0_listener($event) {
            return ctx.setItem($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BasicDropdownComponent_option_3_Template, 2, 3, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("--Select one ", ctx.itemTitle, "--");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2Jhc2ljLWRyb3Bkb3duL2Jhc2ljLWRyb3Bkb3duLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic-dropdown',
          templateUrl: './basic-dropdown.component.html',
          styleUrls: ['./basic-dropdown.component.css']
        }]
      }], null, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/layouts/header/header.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/layouts/header/header.component.ts ***!
    \***********************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppSharedLayoutsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function HeaderComponent_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_25_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.showToggleItems = false;
      }

      _createClass(HeaderComponent, [{
        key: "getCSSClass",
        value: function getCSSClass() {
          if (this.showToggleItems) {
            return "navbar-collapse";
          }

          return "navbar-collapse collapse";
        }
      }, {
        key: "toggleClicked",
        value: function toggleClicked() {
          this.showToggleItems = !this.showToggleItems;
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return this.authService.isLogged();
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 26,
      vars: 4,
      consts: [[1, "navbar", "navbar-inverse", "set-radius-zero"], [1, "container"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", 1, "navbar-toggle", 3, "click"], [1, "icon-bar"], [1, "title", "title-main"], [1, "menu-section"], [1, "row"], [1, "col-md-12"], ["id", "menu-top", 1, "nav", "navbar-nav", "navbar-right"], ["href", "/", 1, "menu-top-active"], ["href", "/search"], ["href", "/simulation"], [4, "ngIf"], ["href", "/login"], ["routerLink", "/login", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener($event) {
            return ctx.toggleClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "POKE SIMULATOR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "New Pokemon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Simulate Battle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_li_24_Template, 3, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_li_25_Template, 3, 0, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getCSSClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged());
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ɵm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/move-category.pipe.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/pipes/move-category.pipe.ts ***!
    \****************************************************/

  /*! exports provided: MoveCategoryPipe */

  /***/
  function srcAppSharedPipesMoveCategoryPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveCategoryPipe", function () {
      return MoveCategoryPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_move_category_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/move-category.enum */
    "./src/app/shared/enums/move-category.enum.ts");

    var MoveCategoryPipe =
    /*#__PURE__*/
    function () {
      function MoveCategoryPipe() {
        _classCallCheck(this, MoveCategoryPipe);
      }

      _createClass(MoveCategoryPipe, [{
        key: "transform",
        value: function transform(moveCategory) {
          switch (moveCategory) {
            case _enums_move_category_enum__WEBPACK_IMPORTED_MODULE_1__["MoveCategory"].Physical:
              {
                return 'Physical';
              }

            case _enums_move_category_enum__WEBPACK_IMPORTED_MODULE_1__["MoveCategory"].Special:
              {
                return 'Special';
              }

            case _enums_move_category_enum__WEBPACK_IMPORTED_MODULE_1__["MoveCategory"].Status:
              {
                return 'Status';
              }
          }
        }
      }]);

      return MoveCategoryPipe;
    }();

    MoveCategoryPipe.ɵfac = function MoveCategoryPipe_Factory(t) {
      return new (t || MoveCategoryPipe)();
    };

    MoveCategoryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "MoveCategory",
      type: MoveCategoryPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoveCategoryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'MoveCategory'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/pipes/stat.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/pipes/stat.pipe.ts ***!
    \*******************************************/

  /*! exports provided: StatPipe */

  /***/
  function srcAppSharedPipesStatPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatPipe", function () {
      return StatPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../enums/stat.enum */
    "./src/app/shared/enums/stat.enum.ts");

    var StatPipe =
    /*#__PURE__*/
    function () {
      function StatPipe() {
        _classCallCheck(this, StatPipe);
      }

      _createClass(StatPipe, [{
        key: "transform",
        value: function transform(stat) {
          switch (stat) {
            case _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__["Stat"].Attack:
              {
                return 'Attack';
              }

            case _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__["Stat"].Defense:
              {
                return 'Defense';
              }

            case _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__["Stat"].SpecialAttack:
              {
                return 'Special Attack';
              }

            case _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__["Stat"].SpecialDefense:
              {
                return 'Special Defense';
              }

            case _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__["Stat"].Speed:
              {
                return 'Speed';
              }

            case _enums_stat_enum__WEBPACK_IMPORTED_MODULE_1__["Stat"].HP:
              {
                return 'HP';
              }

            default:
              {
                return 'None';
              }
          }
        }
      }]);

      return StatPipe;
    }();

    StatPipe.ɵfac = function StatPipe_Factory(t) {
      return new (t || StatPipe)();
    };

    StatPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "Stat",
      type: StatPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'Stat'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSharedServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./main.service */
    "./src/app/shared/services/main.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function (_main_service__WEBPAC) {
      _inherits(AuthService, _main_service__WEBPAC);

      function AuthService(http) {
        var _this14;

        _classCallCheck(this, AuthService);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(AuthService).call(this, 'Auth/'));
        _this14.http = http;
        return _this14;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user) {
          return this.http.post("".concat(this.url, "login"), user);
        }
      }, {
        key: "signUp",
        value: function signUp(user) {
          return this.http.post("".concat(this.url, "register"), user);
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem(this.TOKEN, token);
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return localStorage.getItem(this.TOKEN) != null;
        }
      }]);

      return AuthService;
    }(_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]);

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/services/main.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/main.service.ts ***!
    \*************************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppSharedServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MainService = function MainService(object) {
      _classCallCheck(this, MainService);

      this.TOKEN = 'TOKEN';
      this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + object;
      var token = localStorage.getItem(this.TOKEN);

      if (!!token) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem(this.TOKEN)
        });
      } else {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          'Content-Type': 'application/json'
        });
      }
    };
    /***/

  },

  /***/
  "./src/app/simulation/simulation-card/simulation-card.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/simulation/simulation-card/simulation-card.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SimulationCardComponent */

  /***/
  function srcAppSimulationSimulationCardSimulationCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimulationCardComponent", function () {
      return SimulationCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/layouts/basic-dropdown/basic-dropdown-entity */
    "./src/app/shared/layouts/basic-dropdown/basic-dropdown-entity.ts");
    /* harmony import */


    var _simulation_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../simulation-pokemon */
    "./src/app/simulation/simulation-pokemon.ts");
    /* harmony import */


    var _pokemon_pokemon_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pokemon/pokemon-domain */
    "./src/app/pokemon/pokemon-domain.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pokemon/pokemon.service */
    "./src/app/pokemon/pokemon.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_layouts_basic_dropdown_basic_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/layouts/basic-dropdown/basic-dropdown.component */
    "./src/app/shared/layouts/basic-dropdown/basic-dropdown.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SimulationCardComponent_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A pokemon must be selected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SimulationCardComponent_div_12_div_17_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A move must be selected");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SimulationCardComponent_div_12_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-basic-dropdown", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemSelected", function SimulationCardComponent_div_12_div_17_Template_app_basic_dropdown_itemSelected_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.setMove($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulationCardComponent_div_12_div_17_p_2_Template, 2, 0, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Modifier");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r34.movesDropdown)("itemTitle", ctx_r34.moveDROPDOWN_TITLE);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r34.validateMove());
      }
    }

    function SimulationCardComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SimulationCardComponent_div_12_div_17_Template, 7, 3, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r33.getImgUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.simulationPokemon.pokemon.pokemonSpecies.name.toUpperCase());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("HP: ", ctx_r33.simulationPokemon.pokemon.hp, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attack: ", ctx_r33.simulationPokemon.pokemon.attack, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Defense: ", ctx_r33.simulationPokemon.pokemon.defense, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Special Attack: ", ctx_r33.simulationPokemon.pokemon.spAttack, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Special Defense: ", ctx_r33.simulationPokemon.pokemon.spDefense, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Speed: ", ctx_r33.simulationPokemon.pokemon.speed, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r33.isAttacking);
      }
    }

    var SimulationCardComponent =
    /*#__PURE__*/
    function () {
      function SimulationCardComponent(authService, pokemonService) {
        _classCallCheck(this, SimulationCardComponent);

        this.authService = authService;
        this.pokemonService = pokemonService;
        this.pokemonsDropdown = [];
        this.POKEMON_DROPDOWN_TITLE = 'Pokemon';
        this.moveDROPDOWN_TITLE = 'Move';
        this.isAttacking = false;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(SimulationCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listPokemons();
        }
      }, {
        key: "listPokemons",
        value: function listPokemons() {
          var _this15 = this;

          this.pokemonService.listPokemons().subscribe(function (resp) {
            _this15.pokemons = resp;
            resp.forEach(function (pokemon) {
              var pokemonName = "".concat(pokemon.pokemonSpecies.name.toUpperCase(), " - level ").concat(pokemon.level);

              _this15.pokemonsDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](pokemon.id, pokemonName));
            });

            if (!!_this15.selectedPokemon) {
              _this15.setPokemon(_this15.selectedPokemon.toString());
            }
          });
        }
      }, {
        key: "setPokemon",
        value: function setPokemon(id) {
          var _this16 = this;

          this.clearForm();

          if (this.authService.isLogged()) {
            this.pokemonService.getPokemon(id).subscribe(function (resp) {
              _this16.simulationPokemon = new _simulation_pokemon__WEBPACK_IMPORTED_MODULE_2__["SimulationPokemon"](resp);

              if (_this16.isAttacking) {
                _this16.simulationForm.get('attacking_pokemon_id').setValue(resp.id);

                _this16.movesDropdown = [];

                if (!!resp.move1) {
                  var move1_text = "".concat(resp.move1.name, " - Power: ").concat(resp.move1.basePower, " - ").concat(resp.move1.category);

                  _this16.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](1, move1_text));
                }

                if (!!resp.move2) {
                  var move2_text = "".concat(resp.move2.name, " - Power: ").concat(resp.move2.basePower, " - ").concat(resp.move2.category);

                  _this16.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](2, move2_text));
                }

                if (!!resp.move3) {
                  var move3_text = "".concat(resp.move3.name, " - Power: ").concat(resp.move3.basePower, " - ").concat(resp.move3.category);

                  _this16.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](3, move3_text));
                }

                if (!!resp.move4) {
                  var move4_text = "".concat(resp.move4.name, " - Power: ").concat(resp.move4.basePower, " - ").concat(resp.move4.category);

                  _this16.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](4, move4_text));
                }
              } else {
                _this16.simulationForm.get('defending_pokemon_id').setValue(resp.id);
              }

              _this16.changed.emit(_this16.simulationPokemon);
            });
          } else {
            this.setPokemonCache(+id);
          }
        }
      }, {
        key: "clearForm",
        value: function clearForm() {
          this.movesDropdown = [];
          this.simulationForm.get('moveid').setValue(0);
          this.changed.emit(null);
        }
      }, {
        key: "setPokemonCache",
        value: function setPokemonCache(id) {
          var selectedPokemon = this.pokemons.find(function (x) {
            return x.id == id;
          });
          this.simulationPokemon = new _simulation_pokemon__WEBPACK_IMPORTED_MODULE_2__["SimulationPokemon"](selectedPokemon);

          if (this.isAttacking) {
            this.simulationForm.get('attacking_pokemon_id').setValue(selectedPokemon.id);

            if (!!selectedPokemon.move1) {
              var move1_text = "".concat(selectedPokemon.move1.name, " - Power: ").concat(selectedPokemon.move1.basePower, " - ").concat(selectedPokemon.move1.category);
              this.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](1, move1_text));
            }

            if (!!selectedPokemon.move2) {
              var move2_text = "".concat(selectedPokemon.move2.name, " - Power: ").concat(selectedPokemon.move2.basePower, " - ").concat(selectedPokemon.move2.category);
              this.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](2, move2_text));
            }

            if (!!selectedPokemon.move3) {
              var move3_text = "".concat(selectedPokemon.move3.name, " - Power: ").concat(selectedPokemon.move3.basePower, " - ").concat(selectedPokemon.move3.category);
              this.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](3, move3_text));
            }

            if (!!selectedPokemon.move4) {
              var move4_text = "".concat(selectedPokemon.move4.name, " - Power: ").concat(selectedPokemon.move4.basePower, " - ").concat(selectedPokemon.move4.category);
              this.movesDropdown.push(new _shared_layouts_basic_dropdown_basic_dropdown_entity__WEBPACK_IMPORTED_MODULE_1__["BasicDropdownEntity"](4, move4_text));
            }
          } else {
            this.simulationForm.get('defending_pokemon_id').setValue(selectedPokemon.id);
          }

          this.changed.emit(this.simulationPokemon);
        }
      }, {
        key: "setMove",
        value: function setMove(id) {
          var move;

          switch (id) {
            case '1':
              {
                move = this.simulationPokemon.pokemon.move1;
                break;
              }

            case '2':
              {
                move = this.simulationPokemon.pokemon.move2;
                break;
              }

            case '3':
              {
                move = this.simulationPokemon.pokemon.move3;
                break;
              }

            case '4':
              {
                move = this.simulationPokemon.pokemon.move4;
                break;
              }

            default:
              {
                move = null;
              }
          }

          this.simulationForm.get('moveid').setValue(!!move ? move.id : 0);
          this.simulationPokemon.move = move;
          this.changed.emit(this.simulationPokemon);
        }
      }, {
        key: "validatePokemon",
        value: function validatePokemon() {
          if (this.isAttacking) {
            return this.simulationForm.get('attacking_pokemon_id').valid || !this.simulationForm.get('attacking_pokemon_id').dirty;
          }

          return this.simulationForm.get('defending_pokemon_id').valid || !this.simulationForm.get('defending_pokemon_id').dirty;
        }
      }, {
        key: "validateMove",
        value: function validateMove() {
          return this.simulationForm.get('moveid').valid || !this.simulationForm.get('moveid').dirty;
        }
      }, {
        key: "getImgUrl",
        value: function getImgUrl() {
          if (!this.simulationPokemon) {
            return null;
          }

          return _pokemon_pokemon_domain__WEBPACK_IMPORTED_MODULE_3__["PokemonDomain"].getImgUrl(this.simulationPokemon.pokemon.pokemonSpecies);
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return this.authService.isLogged();
        }
      }]);

      return SimulationCardComponent;
    }();

    SimulationCardComponent.ɵfac = function SimulationCardComponent_Factory(t) {
      return new (t || SimulationCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_5__["PokemonService"]));
    };

    SimulationCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimulationCardComponent,
      selectors: [["app-simulation-card"]],
      inputs: {
        simulationForm: "simulationForm",
        title: "title",
        isAttacking: "isAttacking",
        selectedPokemon: "selectedPokemon"
      },
      outputs: {
        changed: "changed"
      },
      decls: 13,
      vars: 6,
      consts: [[3, "formGroup"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"], [1, "tab-content"], ["id", "attacking-my-pokemon", 1, "tab-pane", "fade", "active", "in"], [3, "items", "itemTitle", "itemSelected"], ["class", "error-message", 4, "ngIf"], ["class", "left-div", 4, "ngIf"], [1, "error-message"], [1, "left-div"], [1, "image-div", "image-div-small"], ["id", "attacking_pokemon_img", 1, "pokemon-img", 3, "src"], [1, "title", "title-casual"], [4, "ngIf"], ["formControlName", "modifier", "type", "number", 1, "form-control"]],
      template: function SimulationCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select your pokemon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-basic-dropdown", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemSelected", function SimulationCardComponent_Template_app_basic_dropdown_itemSelected_10_listener($event) {
            return ctx.setPokemon($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SimulationCardComponent_p_11_Template, 2, 0, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SimulationCardComponent_div_12_Template, 18, 9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.simulationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.pokemonsDropdown)("itemTitle", ctx.POKEMON_DROPDOWN_TITLE);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validatePokemon());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getImgUrl());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _shared_layouts_basic_dropdown_basic_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["BasicDropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXVsYXRpb24vc2ltdWxhdGlvbi1jYXJkL3NpbXVsYXRpb24tY2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulationCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simulation-card',
          templateUrl: './simulation-card.component.html',
          styleUrls: ['./simulation-card.component.css']
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _pokemon_pokemon_service__WEBPACK_IMPORTED_MODULE_5__["PokemonService"]
        }];
      }, {
        simulationForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAttacking: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        changed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        selectedPokemon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/simulation/simulation-pokemon.ts":
  /*!**************************************************!*\
    !*** ./src/app/simulation/simulation-pokemon.ts ***!
    \**************************************************/

  /*! exports provided: SimulationPokemon */

  /***/
  function srcAppSimulationSimulationPokemonTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimulationPokemon", function () {
      return SimulationPokemon;
    });

    var SimulationPokemon = function SimulationPokemon(pokemon) {
      _classCallCheck(this, SimulationPokemon);

      this.pokemon = pokemon;
    };
    /***/

  },

  /***/
  "./src/app/simulation/simulation.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/simulation/simulation.service.ts ***!
    \**************************************************/

  /*! exports provided: SimulationService */

  /***/
  function srcAppSimulationSimulationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimulationService", function () {
      return SimulationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/services/main.service */
    "./src/app/shared/services/main.service.ts");

    var SimulationService =
    /*#__PURE__*/
    function (_shared_services_main5) {
      _inherits(SimulationService, _shared_services_main5);

      function SimulationService(http) {
        var _this17;

        _classCallCheck(this, SimulationService);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(SimulationService).call(this, 'simulation'));
        _this17.http = http;
        return _this17;
      }

      _createClass(SimulationService, [{
        key: "getDamage",
        value: function getDamage(simulationDto) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('attackingPokemonId', simulationDto.attacking_pokemon_id.toString()).set('defendingPokemonId', simulationDto.defending_pokemon_id.toString()).set('moveId', simulationDto.moveid.toString()).set('modifier', simulationDto.modifier.toString());
          return this.http.get("".concat(this.url, "/getDamage"), {
            headers: this.headers,
            params: params
          });
        }
      }]);

      return SimulationService;
    }(_shared_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]);

    SimulationService.ɵfac = function SimulationService_Factory(t) {
      return new (t || SimulationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SimulationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SimulationService,
      factory: SimulationService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/simulation/simulation/simulation.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/simulation/simulation/simulation.component.ts ***!
    \***************************************************************/

  /*! exports provided: SimulationComponent */

  /***/
  function srcAppSimulationSimulationSimulationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimulationComponent", function () {
      return SimulationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _simulation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../simulation.service */
    "./src/app/simulation/simulation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _simulation_card_simulation_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../simulation-card/simulation-card.component */
    "./src/app/simulation/simulation-card/simulation-card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SimulationComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.battleResultsTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.battleResults);
      }
    }

    var SimulationComponent =
    /*#__PURE__*/
    function () {
      function SimulationComponent(simulationService, route, toastr, authService, fb) {
        var _this18 = this;

        _classCallCheck(this, SimulationComponent);

        this.simulationService = simulationService;
        this.route = route;
        this.toastr = toastr;
        this.authService = authService;
        this.ATTACKING_POKEMON = "Attacking Pokemon";
        this.DEFENDING_POKEMON = "Defending Pokemon";
        this.route.params.subscribe(function (params) {
          _this18.paramId = params.id;
        });
        this.simulationForm = fb.group({
          attacking_pokemon_id: [null, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          defending_pokemon_id: [null, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          moveid: [null, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          modifier: [1]
        });
      }

      _createClass(SimulationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// if (!this.isLogged()) {
          //   this.toastr.warning(
          //     'You have to log in to simulate a battle',
          //     'Warning',
          //     { disableTimeOut : true}
          //   );
          // }
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return this.authService.isLogged();
        }
      }, {
        key: "updateAttackingPokemon",
        value: function updateAttackingPokemon(attackingPokemon) {
          this.attackingPokemon = attackingPokemon;
        }
      }, {
        key: "updateDefendingPokemon",
        value: function updateDefendingPokemon(defendingPokemon) {
          this.defendingPokemon = defendingPokemon;
        }
      }, {
        key: "simulateBattle",
        value: function simulateBattle() {
          var _this19 = this;

          var simulationDto = this.simulationForm.getRawValue();
          this.simulationService.getDamage(simulationDto).subscribe(function (resp) {
            var damage = resp;
            var attacker_name = _this19.attackingPokemon.pokemon.pokemonSpecies.name;
            var defender_name = _this19.defendingPokemon.pokemon.pokemonSpecies.name;
            var movename = _this19.attackingPokemon.move.name;
            var defenderHp = _this19.defendingPokemon.pokemon.hp;
            _this19.battleResultsTitle = "Pokemon ".concat(attacker_name.toUpperCase(), " attacked ").concat(defender_name.toUpperCase(), " with ").concat(movename, ".");
            _this19.battleResults = "".concat(movename, " took ").concat(damage, " of damage.\n\n      ").concat(defender_name.toUpperCase(), " HP dropped from ").concat(defenderHp, " to ").concat(defenderHp - damage, ".\n ").concat((damage / defenderHp * 100).toFixed(0), "% of its total HP");
          });
        }
      }, {
        key: "getCSSClass",
        value: function getCSSClass() {
          if (window.innerWidth <= 760) {
            // 768px portrait
            return '';
          }

          return 'flex-row flex-row-align-strech';
        }
      }]);

      return SimulationComponent;
    }();

    SimulationComponent.ɵfac = function SimulationComponent_Factory(t) {
      return new (t || SimulationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_simulation_service__WEBPACK_IMPORTED_MODULE_2__["SimulationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SimulationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimulationComponent,
      selectors: [["app-simulation"]],
      decls: 10,
      vars: 11,
      consts: [[3, "formGroup", "ngSubmit"], [1, "col-lg-5", "col-md-12", "col-sm-12", "flex-row", "flex-row-align-strech", "flex-row-justify-center"], [2, "width", "100%", 3, "simulationForm", "isAttacking", "title", "selectedPokemon", "changed"], [1, "col-md-2", "flex-row", "flex-row-align-center", "flex-row-justify-center"], ["id", "simulate_battle", 1, "btn", "btn-danger", 2, "margin", "15px", 3, "disabled"], [2, "width", "100%", 3, "simulationForm", "title", "changed"], ["class", "flex-row flex-row-align-strech", 4, "ngIf"], [1, "flex-row", "flex-row-align-strech"], [1, "col-md-12", "col-sm-12", "flex-row", "flex-row-align-strech", "flex-row-justify-center"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"]],
      template: function SimulationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SimulationComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.simulateBattle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-simulation-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function SimulationComponent_Template_app_simulation_card_changed_3_listener($event) {
            return ctx.updateAttackingPokemon($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Simulate Battle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-simulation-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function SimulationComponent_Template_app_simulation_card_changed_8_listener($event) {
            return ctx.updateDefendingPokemon($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SimulationComponent_div_9_Template, 9, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.simulationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getCSSClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simulationForm", ctx.simulationForm)("isAttacking", true)("title", ctx.ATTACKING_POKEMON)("selectedPokemon", ctx.paramId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.simulationForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simulationForm", ctx.simulationForm)("title", ctx.DEFENDING_POKEMON);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.battleResults);
        }
      },
      directives: [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _simulation_card_simulation_card_component__WEBPACK_IMPORTED_MODULE_6__["SimulationCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbXVsYXRpb24vc2ltdWxhdGlvbi9zaW11bGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simulation',
          templateUrl: './simulation.component.html',
          styleUrls: ['./simulation.component.css']
        }]
      }], function () {
        return [{
          type: _simulation_service__WEBPACK_IMPORTED_MODULE_2__["SimulationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/entities/user.ts":
  /*!***************************************!*\
    !*** ./src/app/user/entities/user.ts ***!
    \***************************************/

  /*! exports provided: User */

  /***/
  function srcAppUserEntitiesUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User(username, password) {
      _classCallCheck(this, User);

      this.username = username;
      this.password = password;
    };
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _entities_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../entities/user */
    "./src/app/user/entities/user.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, router, toastr, fb) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.loginForm = fb.group({
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.authService.isLogged()) {
            this.router.navigateByUrl('/');
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this20 = this;

          var user = new _entities_user__WEBPACK_IMPORTED_MODULE_2__["User"](this.loginForm.get('username').value, this.loginForm.get('password').value);
          this.authService.login(user).subscribe(function (res) {
            _this20.authService.setToken(res.accessToken);

            _this20.router.navigateByUrl('/');
          }, function (err) {
            _this20.toastr.error(err.error.message);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 21,
      vars: 1,
      consts: [[3, "formGroup", "ngSubmit"], [1, "flex-column", "flex-column-align-center"], [1, "col-md-6"], [1, "col-md-12"], [1, "field"], ["formControlName", "username", 1, "form-control"], ["formControlName", "password", "type", "password", 1, "form-control"], [1, "actions", "right-div"], ["type", "submit", 1, "btn", "btn-primary"], ["href", "/sign_up", 1, "btn", "btn-success"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html'
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/sign-up/sign-up.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/sign-up/sign-up.component.ts ***!
    \***************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppUserSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _entities_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../entities/user */
    "./src/app/user/entities/user.ts");
    /* harmony import */


    var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/auth.service */
    "./src/app/shared/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignUpComponent_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm Password are not matching");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(authService, router, toastr, fb) {
        _classCallCheck(this, SignUpComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signUpForm = fb.group({
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          confirmPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(SignUpComponent, [{
        key: "signUp",
        value: function signUp() {
          var _this21 = this;

          var user = new _entities_user__WEBPACK_IMPORTED_MODULE_2__["User"](this.signUpForm.get('username').value, this.signUpForm.get('password').value);
          this.authService.signUp(user).subscribe(function (response) {
            _this21.login(user);
          }, function (error) {
            _this21.toastr.error(error.error.message);
          });
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this22 = this;

          this.authService.login(user).subscribe(function (res) {
            _this22.authService.setToken(res.jwt);

            _this22.router.navigateByUrl('/');
          });
        }
      }, {
        key: "validatePassword",
        value: function validatePassword() {
          return this.signUpForm.get('password').value === this.signUpForm.get('confirmPassword').value || !this.signUpForm.get('password').dirty || !this.signUpForm.get('confirmPassword').dirty;
        }
      }, {
        key: "validateForm",
        value: function validateForm() {
          return this.signUpForm.valid && this.validatePassword();
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
      return new (t || SignUpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignUpComponent,
      selectors: [["app-sign-up"]],
      decls: 25,
      vars: 3,
      consts: [[3, "formGroup", "ngSubmit"], [1, "flex-column", "flex-column-align-center"], [1, "col-md-6"], [1, "col-md-12"], [1, "field"], ["formControlName", "username", 1, "form-control"], ["formControlName", "password", "type", "password", 1, "form-control"], ["formControlName", "confirmPassword", "type", "password", 1, "form-control"], ["class", "error-message", 4, "ngIf"], [1, "actions", "right-div"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-message"]],
      template: function SignUpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignUpComponent_Template_form_ngSubmit_0_listener($event) {
            return ctx.signUp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SignUpComponent_p_20_Template, 2, 0, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.validatePassword());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.validateForm());
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-up',
          templateUrl: './sign-up.component.html'
        }]
      }], function () {
        return [{
          type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      baseUrl: "https://localhost:5001/api/",
      // baseUrl: "http://localhost:5000/api/",
      // baseUrl: "http://localhost:43489/api/",
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mathiasvoelcker/Desktop/Developer/C#/PokemonCalculator/PokemonSimulator/pokeSimulatorFront/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map