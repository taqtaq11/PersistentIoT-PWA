webpackJsonp([0,3],{

/***/ 1148:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551);


/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(728);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return OpenSidenavAction; });
/* unused harmony export CloseSidenavAction */

var ActionTypes = {
    OPEN_SIDENAV: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Open Sidenav'),
    CLOSE_SIDENAV: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* type */])('[Layout] Close Sidenav')
};
var OpenSidenavAction = (function () {
    function OpenSidenavAction() {
        this.type = ActionTypes.OPEN_SIDENAV;
    }
    return OpenSidenavAction;
}());
var CloseSidenavAction = (function () {
    function CloseSidenavAction() {
        this.type = ActionTypes.CLOSE_SIDENAV;
    }
    return CloseSidenavAction;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/layout.action.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout_action__ = __webpack_require__(467);
/* harmony export (immutable) */ exports["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getShowSidenav; });

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout_action__["a" /* ActionTypes */].CLOSE_SIDENAV:
            return {
                showSidenav: false
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout_action__["a" /* ActionTypes */].OPEN_SIDENAV:
            return {
                showSidenav: true
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/layout.reducer.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manekinekko_angular_web_bluetooth__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BatteryLevelTestService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BatteryLevelTestService = (function () {
    function BatteryLevelTestService(ble) {
        this.ble = ble;
        this.device = null;
    }
    BatteryLevelTestService.prototype.getBatteryLevel = function () {
        // let a: any = this.ble
        //   .discover$()
        //   .mergeMap((gatt: BluetoothRemoteGATTServer) => {
        //     alert('getting server');
        //     return this.ble.getPrimaryService$(
        //       gatt,
        //       'battery_service'
        //     );
        //   })
        //   .mergeMap((primaryService: BluetoothGATTService) => {
        //     return this.ble.getCharacteristic$(
        //       primaryService,
        //       'battery_level'
        //     );
        //   })
        //   .mergeMap((characteristic: BluetoothRemoteGATTCharacteristic) => {
        //     return this.ble.readValue$(characteristic);
        //   })
        //   .map((value: DataView) => value.getInt8(0));
        //
        // return a as Observable<number>;
        var _this = this;
        if (!this.device) {
            navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
                .then(function (device) {
                alert('connecting');
                return _this.device = device.gatt.connect();
            })
                .then(function (server) {
                return server.getPrimaryService('battery_service');
            })
                .then(function (service) {
                return service.getCharacteristic('battery_level');
            })
                .then(function (characteristic) {
                return characteristic.readValue();
            })
                .then(function (value) {
                alert('Battery percentage is ' + value.getUint8(0));
            })
                .catch(function (error) { alert(error); });
        }
        else {
            this.device
                .then(function (server) {
                return server.getPrimaryService('battery_service');
            })
                .then(function (service) {
                return service.getCharacteristic('battery_level');
            })
                .then(function (characteristic) {
                return characteristic.readValue();
            })
                .then(function (value) {
                alert('Battery percentage is ' + value.getUint8(0));
            })
                .catch(function (error) { alert(error); });
        }
    };
    BatteryLevelTestService.prototype.getDevice = function () {
        var _this = this;
        var a = this.ble
            .discover$({ filters: [{ services: ['battery_service'] }] })
            .mergeMap(function (gatt) {
            alert('getting server:' + gatt);
            return _this.ble.getPrimaryService$(gatt, 'battery_service');
        })
            .mergeMap(function (primaryService) {
            alert('getting service:' + primaryService);
            return _this.ble.getCharacteristic$(primaryService, 'battery_level');
        })
            .mergeMap(function (characteristic) {
            alert('getting characteristic:' + characteristic);
            return _this.ble.readValue$(characteristic);
        })
            .map(function (value) { return value.getInt8(0); })
            .catch(function (e) {
            console.error('[BLE::Error] discover$: %o', e);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].create(e);
        })
            .subscribe(function (x) {
            alert('Next: ' + x);
        }, function (err) {
            alert('Error: ' + err);
        }, function () {
            alert('Completed');
        });
    };
    BatteryLevelTestService.prototype.getDeviceM = function () {
        var c = new __WEBPACK_IMPORTED_MODULE_2__manekinekko_angular_web_bluetooth__["BrowserWebBluetooth"]();
        var b = new __WEBPACK_IMPORTED_MODULE_2__manekinekko_angular_web_bluetooth__["BluetoothCore"](c);
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromPromise(b.discover({ filters: [{ services: ['battery_service'] }] }))
            .subscribe(function (x) {
            alert('Next: ' + x);
        }, function (err) {
            alert('Error: ' + err);
        }, function () {
            alert('Completed');
        });
    };
    BatteryLevelTestService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__manekinekko_angular_web_bluetooth__["BluetoothCore"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__manekinekko_angular_web_bluetooth__["BluetoothCore"]) === 'function' && _a) || Object])
    ], BatteryLevelTestService);
    return BatteryLevelTestService;
    var _a;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/battery-level-test.service.js.map

/***/ },

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_battery_level_test_service__ = __webpack_require__(469);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DevicesScannerPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesScannerPageComponent = (function () {
    function DevicesScannerPageComponent(batteryLevelTestService) {
        this.batteryLevelTestService = batteryLevelTestService;
    }
    DevicesScannerPageComponent.prototype.ngOnInit = function () {
    };
    DevicesScannerPageComponent.prototype.clickHandler = function ($event) {
        this.batteryLevelTestService
            .getDevice();
    };
    DevicesScannerPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-devices-scanner-page',
            template: __webpack_require__(892),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_battery_level_test_service__["a" /* BatteryLevelTestService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_battery_level_test_service__["a" /* BatteryLevelTestService */]) === 'function' && _a) || Object])
    ], DevicesScannerPageComponent);
    return DevicesScannerPageComponent;
    var _a;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/devices-scanner-page.component.js.map

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-home-page',
            template: __webpack_require__(893),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomePageComponent);
    return HomePageComponent;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/home-page.component.js.map

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HubsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HubsPageComponent = (function () {
    function HubsPageComponent() {
    }
    HubsPageComponent.prototype.ngOnInit = function () {
    };
    HubsPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-hubs-page',
            template: __webpack_require__(894),
            styles: [__webpack_require__(888)]
        }), 
        __metadata('design:paramtypes', [])
    ], HubsPageComponent);
    return HubsPageComponent;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/hubs-page.component.js.map

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotFoundPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundPageComponent = (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-not-found-page',
            template: __webpack_require__(895),
            styles: [__webpack_require__(889)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/not-found-page.component.js.map

/***/ },

/***/ 550:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 550;


/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(724);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_40" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/main.js.map

/***/ },

/***/ 724:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manekinekko_angular_web_bluetooth__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_app_app_component__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_toolbar_header_toolbar_component__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__views_home_page_home_page_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__views_devices_scanner_page_devices_scanner_page_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__views_hubs_page_hubs_page_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_not_found_page_not_found_page_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_battery_level_test_service__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__routes__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__reducers_layout_reducer__ = __webpack_require__(468);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__views_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_header_toolbar_header_toolbar_component__["a" /* HeaderToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__views_home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__views_devices_scanner_page_devices_scanner_page_component__["a" /* DevicesScannerPageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__views_hubs_page_hubs_page_component__["a" /* HubsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__views_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__routes__["a" /* routes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["d" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_17__reducers_layout_reducer__["a" /* reducer */]),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__["b" /* RouterStoreModule */].connectRouter(),
                __WEBPACK_IMPORTED_MODULE_6__manekinekko_angular_web_bluetooth__["WebBluetoothModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__services_battery_level_test_service__["a" /* BatteryLevelTestService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__views_app_app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/app.module.js.map

/***/ },

/***/ 725:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderToolbarComponent = (function () {
    function HeaderToolbarComponent() {
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    HeaderToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"]) === 'function' && _a) || Object)
    ], HeaderToolbarComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], HeaderToolbarComponent.prototype, "open", void 0);
    HeaderToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-header-toolbar',
            template: __webpack_require__(890),
            styles: [__webpack_require__(884)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderToolbarComponent);
    return HeaderToolbarComponent;
    var _a;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/header-toolbar.component.js.map

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_reducer__ = __webpack_require__(468);
/* unused harmony export reducer */
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getShowSidenav; });




var reducers = {
    router: __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["a" /* routerReducer */],
    layout: __WEBPACK_IMPORTED_MODULE_3__layout_reducer__["a" /* reducer */]
};
function reducer(state, action) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* combineReducers */])(reducers);
}
var getLayoutState = function (state) { return state.layout; };
var getShowSidenav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_3__layout_reducer__["b" /* getShowSidenav */]);
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/app.reducer.js.map

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_home_page_home_page_component__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_devices_scanner_page_devices_scanner_page_component__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_hubs_page_hubs_page_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_not_found_page_not_found_page_component__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__views_home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__views_home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: 'devices-scanner',
        component: __WEBPACK_IMPORTED_MODULE_1__views_devices_scanner_page_devices_scanner_page_component__["a" /* DevicesScannerPageComponent */]
    },
    {
        path: 'hubs',
        component: __WEBPACK_IMPORTED_MODULE_2__views_hubs_page_hubs_page_component__["a" /* HubsPageComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__views_not_found_page_not_found_page_component__["a" /* NotFoundPageComponent */]
    }
];
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/routes.js.map

/***/ },

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = type;
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/util.js.map

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_app_reducer__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_layout_action__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
        var a = store.select(function (state) { return state.layout; });
        a.subscribe(function () { });
        this.showSidenav$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers_app_reducer__["a" /* getShowSidenav */]);
    }
    AppComponent.prototype.open = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_layout_action__["b" /* OpenSidenavAction */]());
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(891),
            styles: [__webpack_require__(885)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/app.component.js.map

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/environment.js.map

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(743);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/taqtaq11/workspace/PersistentIoT/PersistentIoT-PWA/src/polyfills.js.map

/***/ },

/***/ 884:
/***/ function(module, exports) {

module.exports = ".header-toolbar .spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n"

/***/ },

/***/ 885:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 886:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 887:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 888:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 889:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 890:
/***/ function(module, exports) {

module.exports = "<md-toolbar class=\"header-toolbar\" color=\"primary\">\n  <button md-icon-button (click)=\"open.emit()\">\n    <md-icon>more_vert</md-icon>\n  </button>\n  <span>{{title | async}}</span>\n</md-toolbar>\n"

/***/ },

/***/ 891:
/***/ function(module, exports) {

module.exports = "<app-header-toolbar title=\"\" sidenav=\"sidenav\" (open)=\"open()\"></app-header-toolbar>\n<md-sidenav-container class=\"piot-sidenav-container\">\n  <md-sidenav #sidenav [opened]=\"showSidenav$ | async\" class=\"piot-sidenav\">\n    Jolly good!\n  </md-sidenav>\n\n  <router-outlet></router-outlet>\n</md-sidenav-container>\n"

/***/ },

/***/ 892:
/***/ function(module, exports) {

module.exports = "<button md-fab\n        color=\"primary\"\n        (click)=\"clickHandler($event)\"\n        >\n  <md-icon color=\"secondary\">bluetooth_searching</md-icon>\n</button>\n"

/***/ },

/***/ 893:
/***/ function(module, exports) {

module.exports = "<p>\n  home-page works!\n</p>\n"

/***/ },

/***/ 894:
/***/ function(module, exports) {

module.exports = "<p>\n  hubs-page works!\n</p>\n"

/***/ },

/***/ 895:
/***/ function(module, exports) {

module.exports = "<p>\n  not-found-page works!\n</p>\n"

/***/ }

},[1148]);
//# sourceMappingURL=main.bundle.map