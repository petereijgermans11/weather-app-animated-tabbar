(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".home-panel{\n    vertical-align: center;\n    font-size: 20;\n    margin: 15;\n}\n\n.description-label{\n    margin-bottom: 15;\n}\n\n.fa-regular {\n    font-family: 'Font Awesome 5 Free', 'fa-regular-400';\n    font-weight: 400;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Home\" class=\"action-bar\">\n</ActionBar>\n\n<GridLayout>\n    <GridLayout>\n        <Tabs #tabs [selectedIndex]=\"defaultSelected\" (selectedIndexChanged)=\"onSelectedIndexChanged($event)\">\n            <TabContentItem [backgroundColor]=\"tabList[0].backgroundColor\">\n                <StackLayout>\n\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[1].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 2\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[2].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 3\" class=\"h1 text-center p-t-20\"></Label>\n\n\n\n                    <StackLayout *ngIf=\"weather\">\n                        <Label text=\"{{weather.main.temp}}\"></Label>\n                    </StackLayout>\n\n\n\n\n\n\n\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[3].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 4\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n\n            <TabContentItem [backgroundColor]=\"tabList[4].backgroundColor\">\n                <StackLayout>\n                    <Label text=\"Bottom Nav Content 5\" class=\"h1 text-center p-t-20\"></Label>\n                </StackLayout>\n            </TabContentItem>\n        </Tabs>\n    </GridLayout>\n\n    <!-- bottom tabs -->\n    <GridLayout height=\"auto\" verticalAlignment=\"bottom\" columns=\"*, *, *, *, *\">\n\n        <!-- base layer -->\n        <AbsoluteLayout col=\"0\" colSpan=\"5\" verticalAlignment=\"bottom\">\n            <GridLayout #tabBGContainer columns=\"auto, 10, auto, 10, auto\">\n                <GridLayout #leftTabs col=\"0\" colSpan=\"2\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"0 68 0 0\"></GridLayout>\n                <GridLayout #centerPatch col=\"1\" colSpan=\"3\" height=\"40\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\"></GridLayout>\n                <GridLayout #rightTabs col=\"3\" colSpan=\"4\" height=\"80\"\n                    [backgroundColor]=\"tabContainer.backgroundColor\"\n                    verticalAlignment=\"bottom\" borderRadius=\"68 0 0 0\"></GridLayout>\n\n                <!-- focus circle -->\n                <GridLayout #centerCircle col=\"1\" colSpan=\"3\" height=\"100\"\n                    width=\"100\" [backgroundColor]=\"tabList[currentTabIndex].backgroundColor\"\n                    borderRadius=\"50\" verticalAlignment=\"bottom\" marginBottom=\"10\">\n                    <GridLayout verticalAlignment=\"center\"\n                        horizontalAlignment=\"center\" height=\"90\" width=\"90\"\n                        [backgroundColor]=\"tabContainer.focusColor\"\n                        borderRadius=\"45\"></GridLayout>\n                </GridLayout>\n\n            </GridLayout>\n        </AbsoluteLayout>\n\n        <!-- tab contents -->\n        <GridLayout #tabContents *ngFor=\"let item of tabList; let i = index\"\n            [col]=\"i\" marginTop=\"20\" (tap)=\"onBottomNavTap(i)\"\n            verticalAlignment=\"middle\">\n            <Label class=\"fa-regular\" [text]=\"item.text\" verticalAlignment=\"middle\"\n                horizontalAlignment=\"center\" [color]=\"item.color\" fontSize=\"20\"></Label>\n        </GridLayout>\n\n        <!-- pan layer -->\n        <GridLayout #dragCircle column=\"0\" colSpan=\"5\" (pan)=\"onCenterCirclePan($event)\"\n            verticalAlignment=\"center\" horizontalAlignment=\"center\" height=\"90\"\n            width=\"90\" backgroundColor=\"transparent\" borderRadius=\"45\"></GridLayout>\n\n    </GridLayout>\n\n</GridLayout>\n"

/***/ }),

/***/ "./home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@nativescript/core/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@nativescript/core/ui/enums/enums.js");
/* harmony import */ var ui_enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ui_enums__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./home/shared/services/weather.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(weatherService) {
        this.weatherService = weatherService;
        // Pan Helper
        this.prevDeltaX = 0;
        this.animationCurve = ui_enums__WEBPACK_IMPORTED_MODULE_2__["AnimationCurve"].cubicBezier(.38, .47, 0, 1);
        // Tab Contents and Properties
        this.tabContainer = {
            backgroundColor: '#fff',
            focusColor: '#fff'
        };
        this.tabList = [
            { text: String.fromCharCode(0xf080), backgroundColor: '#5B37B7', color: '#000' },
            { text: String.fromCharCode(0xf075), backgroundColor: '#E6A938', color: '#000' },
            { text: String.fromCharCode(0xf259), backgroundColor: '#C9449D', color: '#000' },
            { text: String.fromCharCode(0xf1d8), backgroundColor: '#4195AA', color: '#000' },
            { text: String.fromCharCode(0xf073), backgroundColor: '#4A9F6E', color: '#000' }
        ];
        this.currentTabIndex = 2;
        this.defaultSelected = 2;
    }
    // searchWeather(keyword: any): void {
    //     const w = keyword.object as SearchBar;
    //     this.weather$ = this.weatherService.searchWeather(w);
    // }
    // --------------------------------------------------------------------
    // Hooks
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initializeTabBar();
        //this.weather$ = this.weatherService.searchWeather('Culemborg');
        this.weatherService.searchWeather('Culemborg')
            .subscribe(function (data) {
            _this.weather = data; // 1. success handler, mapped on client-sided Model
        }, function (err) { return console.log(err); }, // 2. error handler
        function () { return console.log('Getting Weather complete...'); } // 3. complete handler
        );
    };
    // --------------------------------------------------------------------
    // User Interaction
    // MY: Tabs selected index is changed, e.g. when swipe to navigate.
    HomeComponent.prototype.onSelectedIndexChanged = function (args) {
        if (args.newIndex !== this.currentTabIndex) {
            this.onBottomNavTap(args.newIndex);
        }
    };
    // Tap on a one of the tabs
    HomeComponent.prototype.onBottomNavTap = function (index, duration) {
        if (duration === void 0) { duration = 300; }
        if (this.currentTabIndex !== index) {
            var tabContentsArr = this.tabContents.toArray();
            // set unfocus to previous index
            tabContentsArr[this.currentTabIndex].nativeElement.animate(this.getUnfocusAnimation(this.currentTabIndex, duration));
            // set focus to current index
            tabContentsArr[index].nativeElement.animate(this.getFocusAnimation(index, duration));
        }
        // MY: Change the selected index of Tabs when tap on tab strip
        if (this.tabs.nativeElement.selectedIndex !== index) {
            this.tabs.nativeElement.selectedIndex = index;
        }
        this.centerCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.leftTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.rightTabs.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.centerPatch.nativeElement.animate(this.getSlideAnimation(index, duration));
        this.dragCircle.nativeElement.animate(this.getSlideAnimation(index, duration));
        // set current index to new index
        this.currentTabIndex = index;
    };
    // Drag the focus circle to one of the tabs
    HomeComponent.prototype.onCenterCirclePan = function (args) {
        var grdLayout = args.object;
        var newX = grdLayout.translateX + args.deltaX - this.prevDeltaX;
        if (args.state === 0) {
            // finger down
            this.prevDeltaX = 0;
        }
        else if (args.state === 2) {
            // finger moving
            grdLayout.translateX = newX;
            this.leftTabs.nativeElement.translateX = newX;
            this.rightTabs.nativeElement.translateX = newX;
            this.centerPatch.nativeElement.translateX = newX;
            this.centerCircle.nativeElement.translateX = newX;
            this.prevDeltaX = args.deltaX;
        }
        else if (args.state === 3) {
            // finger up
            this.prevDeltaX = 0;
            var tabWidth = platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / this.tabList.length;
            var tabSelected = Math.round(Math.abs(newX / tabWidth));
            var translateX = tabSelected * tabWidth;
            if (newX < 0) {
                // pan left
                this.onBottomNavTap(this.defaultSelected - tabSelected, 50);
                // MY: Change the selected index of Tabs when pan left
                this.tabs.nativeElement.selectedIndex = this.defaultSelected - tabSelected;
            }
            else {
                // pan right
                this.onBottomNavTap(this.defaultSelected + tabSelected, 50);
                // MY: Change the selected index of Tabs when pan right
                this.tabs.nativeElement.selectedIndex = this.defaultSelected + tabSelected;
            }
        }
    };
    // --------------------------------------------------------------------
    // Tab bar helpers
    HomeComponent.prototype.initializeTabBar = function () {
        // set up base layer
        this.leftTabs.nativeElement.width = platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs;
        this.rightTabs.nativeElement.width = platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs;
        this.centerPatch.nativeElement.width = 100;
        this.tabBGContainer.nativeElement.translateX = -(platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / 2) - (80 / 2);
        // set default selected tab
        var tabContentsArr = this.tabContents.toArray();
        tabContentsArr[this.defaultSelected].nativeElement.scaleX = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.scaleY = 1.5;
        tabContentsArr[this.defaultSelected].nativeElement.translateY = -15;
        this.currentTabIndex = this.defaultSelected;
    };
    HomeComponent.prototype.getSlideAnimation = function (index, duration) {
        return {
            translate: { x: this.getTabTranslateX(index), y: 0 },
            curve: this.animationCurve,
            duration: duration
        };
    };
    HomeComponent.prototype.getFocusAnimation = function (index, duration) {
        return {
            scale: { x: 1.5, y: 1.5 },
            translate: { x: 0, y: -15 },
            duration: duration
        };
    };
    HomeComponent.prototype.getUnfocusAnimation = function (index, duration) {
        return {
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration
        };
    };
    HomeComponent.prototype.getTabTranslateX = function (index) {
        return index * platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / this.tabList.length - (platform__WEBPACK_IMPORTED_MODULE_1__["screen"].mainScreen.widthDIPs / 2) + (80 / 2);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _home_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "tabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('centerCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "centerCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dragCircle', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "dragCircle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('leftTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "leftTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rightTabs', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "rightTabs", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('centerPatch', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "centerPatch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabBGContainer', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "tabBGContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('tabContents', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeComponent.prototype, "tabContents", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __importDefault(__webpack_require__("./home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__("./home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_home_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-calendar/angular");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-chart/angular");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-ui-dataform/angular");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-autocomplete/angular");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-gauge/angular");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_services_weather_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./home/shared/services/weather.service.ts");













// Import services

var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_12__["NativeScriptHttpClientModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [_shared_services_weather_service__WEBPACK_IMPORTED_MODULE_13__["WeatherService"]] // DI voor service
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./home/shared/model/weather.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherModel", function() { return WeatherModel; });
var WeatherModel = /** @class */ (function () {
    function WeatherModel(coord, weather, base, main, wind, clouds, dt, sys, id, name, cod) {
        this.coord = coord;
        this.weather = weather;
        this.base = base;
        this.main = main;
        this.wind = wind;
        this.clouds = clouds;
        this.dt = dt;
        this.sys = sys;
        this.id = id;
        this.name = name;
        this.cod = cod;
    }
    return WeatherModel;
}());



/***/ }),

/***/ "./home/shared/services/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _model_weather_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./home/shared/model/weather.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@angular/common/http");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__);





var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        // My private key. Please sign up for your own key at www.omdbapi.com
        this.url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8566d604cd9402b65394b034e52aa2af&';
    }
    // return Weather
    WeatherService.prototype.searchWeather = function (cityname) {
        return this.http.get(this.url + ("q=" + cityname)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var weatherdata = response;
            console.log('WeatherService temp! : ', weatherdata.main.temp);
            return new _model_weather_model__WEBPACK_IMPORTED_MODULE_1__["WeatherModel"](weatherdata.coord, weatherdata.weather, weatherdata.base, weatherdata.main, weatherdata.wind, weatherdata.clouds, weatherdata.dt, weatherdata.sys, weatherdata.id, weatherdata.name, weatherdata.cod);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    WeatherService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
    };
    WeatherService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
    ]; };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true,"markingMode":"none"},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL3NoYXJlZC9tb2RlbC93ZWF0aGVyLm1vZGVsLnRzIiwid2VicGFjazovLy8uL2hvbWUvc2hhcmVkL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV0QjtBQUVqRCxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDZEQUFhLEVBQUU7Q0FDekMsQ0FBQztBQU1GO0lBQUE7SUFBaUMsQ0FBQztJQUFyQixpQkFBaUI7UUFKN0IsOERBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxvRkFBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDZDlCLDhCQUE4Qiw2QkFBNkIsb0JBQW9CLGlCQUFpQixHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyxpQkFBaUIsMkRBQTJELHVCQUF1QixHQUFHLEM7Ozs7Ozs7QUNBM1AsZytCQUFnK0IsbUJBQW1CLGc3RUFBZzdFLDZxQjs7Ozs7Ozs7QUNBbjZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RztBQUN2RTtBQUdRO0FBSThCO0FBU3hFO0lB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QW5CLFVBQW9CLEtBQXFCO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsT0FBTywrQ0FBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFuQnVCLCtEQUFVOztJQUp6QixjQUFjO1FBRDFCLGdFQUFVLEVBQUU7eUNBS2UsK0RBQVU7T0FKekIsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBO0FBekIwQiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5ob21lLXBhbmVse1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBtYXJnaW46IDE1O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tbGFiZWx7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1O1xcbn1cXG5cXG4uZmEtcmVndWxhciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZScsICdmYS1yZWd1bGFyLTQwMCc7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgdGl0bGU9XFxcIkhvbWVcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG4gICAgPEdyaWRMYXlvdXQ+XFxuICAgICAgICA8VGFicyAjdGFicyBbc2VsZWN0ZWRJbmRleF09XFxcImRlZmF1bHRTZWxlY3RlZFxcXCIgKHNlbGVjdGVkSW5kZXhDaGFuZ2VkKT1cXFwib25TZWxlY3RlZEluZGV4Q2hhbmdlZCgkZXZlbnQpXFxcIj5cXG4gICAgICAgICAgICA8VGFiQ29udGVudEl0ZW0gW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbMF0uYmFja2dyb3VuZENvbG9yXFxcIj5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0PlxcblxcblxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzFdLmJhY2tncm91bmRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCb3R0b20gTmF2IENvbnRlbnQgMlxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFsyXS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDNcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuXFxuXFxuXFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIndlYXRoZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7e3dlYXRoZXIubWFpbi50ZW1wfX1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcblxcblxcblxcblxcblxcblxcbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgIDwvVGFiQ29udGVudEl0ZW0+XFxuXFxuICAgICAgICAgICAgPFRhYkNvbnRlbnRJdGVtIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJMaXN0WzNdLmJhY2tncm91bmRDb2xvclxcXCI+XFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJCb3R0b20gTmF2IENvbnRlbnQgNFxcXCIgY2xhc3M9XFxcImgxIHRleHQtY2VudGVyIHAtdC0yMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICA8L1RhYkNvbnRlbnRJdGVtPlxcblxcbiAgICAgICAgICAgIDxUYWJDb250ZW50SXRlbSBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiTGlzdFs0XS5iYWNrZ3JvdW5kQ29sb3JcXFwiPlxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiQm90dG9tIE5hdiBDb250ZW50IDVcXFwiIGNsYXNzPVxcXCJoMSB0ZXh0LWNlbnRlciBwLXQtMjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgPC9UYWJDb250ZW50SXRlbT5cXG4gICAgICAgIDwvVGFicz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8IS0tIGJvdHRvbSB0YWJzIC0tPlxcbiAgICA8R3JpZExheW91dCBoZWlnaHQ9XFxcImF1dG9cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGNvbHVtbnM9XFxcIiosICosICosICosICpcXFwiPlxcblxcbiAgICAgICAgPCEtLSBiYXNlIGxheWVyIC0tPlxcbiAgICAgICAgPEFic29sdXRlTGF5b3V0IGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+XFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgI3RhYkJHQ29udGFpbmVyIGNvbHVtbnM9XFxcImF1dG8sIDEwLCBhdXRvLCAxMCwgYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNsZWZ0VGFicyBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGhlaWdodD1cXFwiODBcXFwiXFxuICAgICAgICAgICAgICAgICAgICBbYmFja2dyb3VuZENvbG9yXT1cXFwidGFiQ29udGFpbmVyLmJhY2tncm91bmRDb2xvclxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJib3R0b21cXFwiIGJvcmRlclJhZGl1cz1cXFwiMCA2OCAwIDBcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlclBhdGNoIGNvbD1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgaGVpZ2h0PVxcXCI0MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCI+PC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjcmlnaHRUYWJzIGNvbD1cXFwiM1xcXCIgY29sU3Bhbj1cXFwiNFxcXCIgaGVpZ2h0PVxcXCI4MFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVxcXCJ0YWJDb250YWluZXIuYmFja2dyb3VuZENvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ9XFxcImJvdHRvbVxcXCIgYm9yZGVyUmFkaXVzPVxcXCI2OCAwIDAgMFxcXCI+PC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8IS0tIGZvY3VzIGNpcmNsZSAtLT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2NlbnRlckNpcmNsZSBjb2w9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjNcXFwiIGhlaWdodD1cXFwiMTAwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XFxcIjEwMFxcXCIgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkxpc3RbY3VycmVudFRhYkluZGV4XS5iYWNrZ3JvdW5kQ29sb3JcXFwiXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XFxcIjUwXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW5Cb3R0b209XFxcIjEwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBoZWlnaHQ9XFxcIjkwXFxcIiB3aWR0aD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgW2JhY2tncm91bmRDb2xvcl09XFxcInRhYkNvbnRhaW5lci5mb2N1c0NvbG9yXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cXFwiNDVcXFwiPjwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgIDwvQWJzb2x1dGVMYXlvdXQ+XFxuXFxuICAgICAgICA8IS0tIHRhYiBjb250ZW50cyAtLT5cXG4gICAgICAgIDxHcmlkTGF5b3V0ICN0YWJDb250ZW50cyAqbmdGb3I9XFxcImxldCBpdGVtIG9mIHRhYkxpc3Q7IGxldCBpID0gaW5kZXhcXFwiXFxuICAgICAgICAgICAgW2NvbF09XFxcImlcXFwiIG1hcmdpblRvcD1cXFwiMjBcXFwiICh0YXApPVxcXCJvbkJvdHRvbU5hdlRhcChpKVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIj5cXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImZhLXJlZ3VsYXJcXFwiIFt0ZXh0XT1cXFwiaXRlbS50ZXh0XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwibWlkZGxlXFxcIlxcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtjb2xvcl09XFxcIml0ZW0uY29sb3JcXFwiIGZvbnRTaXplPVxcXCIyMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDwhLS0gcGFuIGxheWVyIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgI2RyYWdDaXJjbGUgY29sdW1uPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiAocGFuKT1cXFwib25DZW50ZXJDaXJjbGVQYW4oJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGhlaWdodD1cXFwiOTBcXFwiXFxuICAgICAgICAgICAgd2lkdGg9XFxcIjkwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInRyYW5zcGFyZW50XFxcIiBib3JkZXJSYWRpdXM9XFxcIjQ1XFxcIj48L0dyaWRMYXlvdXQ+XFxuXFxuICAgIDwvR3JpZExheW91dD5cXG5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIEFmdGVyVmlld0luaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgR3JpZExheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL2dyaWQtbGF5b3V0XCI7XG5pbXBvcnQgeyBQYW5HZXN0dXJlRXZlbnREYXRhLCBHZXN0dXJlU3RhdGVUeXBlcywgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcbmltcG9ydCB7IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgSVdlYXRoZXIgfSBmcm9tIFwifi9ob21lL3NoYXJlZC9tb2RlbC93ZWF0aGVyLm1vZGVsXCI7XG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gXCJ+L2hvbWUvc2hhcmVkL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VhcmNoLWJhclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIEBWaWV3Q2hpbGQoJ3RhYnMnLCB7IHN0YXRpYzogdHJ1ZSB9KSB0YWJzOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ2NlbnRlckNpcmNsZScsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlckNpcmNsZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdkcmFnQ2lyY2xlJywgeyBzdGF0aWM6IHRydWUgfSkgZHJhZ0NpcmNsZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdsZWZ0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIGxlZnRUYWJzOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3JpZ2h0VGFicycsIHsgc3RhdGljOiB0cnVlIH0pIHJpZ2h0VGFiczogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKCdjZW50ZXJQYXRjaCcsIHsgc3RhdGljOiB0cnVlIH0pIGNlbnRlclBhdGNoOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3RhYkJHQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgdGFiQkdDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgICBAVmlld0NoaWxkcmVuKCd0YWJDb250ZW50cycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSB0YWJDb250ZW50czogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xuICAgIHB1YmxpYyB3ZWF0aGVyJDogT2JzZXJ2YWJsZTxJV2VhdGhlcj47XG4gICAgcHVibGljIHdlYXRoZXI6IElXZWF0aGVyO1xuXG5cbiAgLy8gUGFuIEhlbHBlclxuICAgIHByZXZEZWx0YVg6IG51bWJlciA9IDA7XG5cbiAgICBhbmltYXRpb25DdXJ2ZSA9IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKC4zOCwgLjQ3LCAwLCAxKTtcblxuICAgIC8vIFRhYiBDb250ZW50cyBhbmQgUHJvcGVydGllc1xuICAgIHRhYkNvbnRhaW5lciA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgICAgIGZvY3VzQ29sb3I6ICcjZmZmJ1xuICAgIH07XG4gICAgdGFiTGlzdDogeyB0ZXh0OiBzdHJpbmcsIGljb24/OiBzdHJpbmcsIGNvbG9yPzogc3RyaW5nLCBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZywgZmFkZUNvbG9yPzogc3RyaW5nIH1bXSA9IFtcbiAgICAgICAgeyB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjA4MCksIGJhY2tncm91bmRDb2xvcjogJyM1QjM3QjcnLCBjb2xvcjogJyMwMDAnIH0sXG4gICAgICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNzUpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjRTZBOTM4JywgY29sb3I6ICcjMDAwJyB9LFxuICAgICAgICB7IHRleHQ6IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMjU5KSwgYmFja2dyb3VuZENvbG9yOiAnI0M5NDQ5RCcsIGNvbG9yOiAnIzAwMCcgfSxcbiAgICAgICAgeyB0ZXh0OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjFkOCksIGJhY2tncm91bmRDb2xvcjogJyM0MTk1QUEnLCBjb2xvcjogJyMwMDAnIH0sXG4gICAgICAgIHsgdGV4dDogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNzMpLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNEE5RjZFJywgY29sb3I6ICcjMDAwJyB9XG4gICAgXTtcblxuICAgIGN1cnJlbnRUYWJJbmRleDogbnVtYmVyID0gMjtcbiAgICBkZWZhdWx0U2VsZWN0ZWQ6IG51bWJlciA9IDI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSkge1xuICAgIH1cblxuICAgIC8vIHNlYXJjaFdlYXRoZXIoa2V5d29yZDogYW55KTogdm9pZCB7XG4gICAgLy8gICAgIGNvbnN0IHcgPSBrZXl3b3JkLm9iamVjdCBhcyBTZWFyY2hCYXI7XG4gICAgLy8gICAgIHRoaXMud2VhdGhlciQgPSB0aGlzLndlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXIodyk7XG4gICAgLy8gfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIb29rc1xuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVUYWJCYXIoKTtcbiAgICAgICAgLy90aGlzLndlYXRoZXIkID0gdGhpcy53ZWF0aGVyU2VydmljZS5zZWFyY2hXZWF0aGVyKCdDdWxlbWJvcmcnKTtcblxuICAgICAgICB0aGlzLndlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXIoJ0N1bGVtYm9yZycpXG4gICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogSVdlYXRoZXIpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy53ZWF0aGVyID0gZGF0YTtcdFx0XHRcdC8vIDEuIHN1Y2Nlc3MgaGFuZGxlciwgbWFwcGVkIG9uIGNsaWVudC1zaWRlZCBNb2RlbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVyciA9PiBjb25zb2xlLmxvZyhlcnIpLFx0XHRcdFx0XHRcdC8vIDIuIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgICgpPT4gY29uc29sZS5sb2coJ0dldHRpbmcgV2VhdGhlciBjb21wbGV0ZS4uLicpXHQvLyAzLiBjb21wbGV0ZSBoYW5kbGVyXG4gICAgICAgICAgKVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVXNlciBJbnRlcmFjdGlvblxuXG4gICAgLy8gTVk6IFRhYnMgc2VsZWN0ZWQgaW5kZXggaXMgY2hhbmdlZCwgZS5nLiB3aGVuIHN3aXBlIHRvIG5hdmlnYXRlLlxuICAgIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgaWYgKGFyZ3MubmV3SW5kZXggIT09IHRoaXMuY3VycmVudFRhYkluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKGFyZ3MubmV3SW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGFwIG9uIGEgb25lIG9mIHRoZSB0YWJzXG4gICAgb25Cb3R0b21OYXZUYXAoaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlciA9IDMwMCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VGFiSW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCB0YWJDb250ZW50c0FyciA9IHRoaXMudGFiQ29udGVudHMudG9BcnJheSgpO1xuXG4gICAgICAgICAgICAvLyBzZXQgdW5mb2N1cyB0byBwcmV2aW91cyBpbmRleFxuICAgICAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5jdXJyZW50VGFiSW5kZXhdLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFVuZm9jdXNBbmltYXRpb24odGhpcy5jdXJyZW50VGFiSW5kZXgsIGR1cmF0aW9uKSk7XG5cbiAgICAgICAgICAgIC8vIHNldCBmb2N1cyB0byBjdXJyZW50IGluZGV4XG4gICAgICAgICAgICB0YWJDb250ZW50c0FycltpbmRleF0ubmF0aXZlRWxlbWVudC5hbmltYXRlKHRoaXMuZ2V0Rm9jdXNBbmltYXRpb24oaW5kZXgsIGR1cmF0aW9uKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gdGFwIG9uIHRhYiBzdHJpcFxuICAgICAgICBpZiAodGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2VudGVyQ2lyY2xlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLmxlZnRUYWJzLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuICAgICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgdGhpcy5jZW50ZXJQYXRjaC5uYXRpdmVFbGVtZW50LmFuaW1hdGUodGhpcy5nZXRTbGlkZUFuaW1hdGlvbihpbmRleCwgZHVyYXRpb24pKTtcbiAgICAgICAgdGhpcy5kcmFnQ2lyY2xlLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh0aGlzLmdldFNsaWRlQW5pbWF0aW9uKGluZGV4LCBkdXJhdGlvbikpO1xuXG4gICAgICAgIC8vIHNldCBjdXJyZW50IGluZGV4IHRvIG5ldyBpbmRleFxuICAgICAgICB0aGlzLmN1cnJlbnRUYWJJbmRleCA9IGluZGV4O1xuICAgIH1cblxuICAgIC8vIERyYWcgdGhlIGZvY3VzIGNpcmNsZSB0byBvbmUgb2YgdGhlIHRhYnNcbiAgICBvbkNlbnRlckNpcmNsZVBhbihhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGxldCBncmRMYXlvdXQ6IEdyaWRMYXlvdXQgPSA8R3JpZExheW91dD5hcmdzLm9iamVjdDtcbiAgICAgICAgbGV0IG5ld1g6IG51bWJlciA9IGdyZExheW91dC50cmFuc2xhdGVYICsgYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVg7XG5cbiAgICAgICAgaWYgKGFyZ3Muc3RhdGUgPT09IDApIHtcbiAgICAgICAgICAgIC8vIGZpbmdlciBkb3duXG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVggPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgIC8vIGZpbmdlciBtb3ZpbmdcbiAgICAgICAgICAgIGdyZExheW91dC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMubGVmdFRhYnMubmF0aXZlRWxlbWVudC50cmFuc2xhdGVYID0gbmV3WDtcbiAgICAgICAgICAgIHRoaXMucmlnaHRUYWJzLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWCA9IG5ld1g7XG4gICAgICAgICAgICB0aGlzLmNlbnRlckNpcmNsZS5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSBuZXdYO1xuXG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVggPSBhcmdzLmRlbHRhWDtcbiAgICAgICAgfSBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICAvLyBmaW5nZXIgdXBcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWCA9IDA7XG4gICAgICAgICAgICBjb25zdCB0YWJXaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIHRoaXMudGFiTGlzdC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCB0YWJTZWxlY3RlZDogbnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLmFicyhuZXdYIC8gdGFiV2lkdGgpKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zbGF0ZVg6IG51bWJlciA9IHRhYlNlbGVjdGVkICogdGFiV2lkdGg7XG4gICAgICAgICAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyBwYW4gbGVmdFxuICAgICAgICAgICAgICAgIHRoaXMub25Cb3R0b21OYXZUYXAodGhpcy5kZWZhdWx0U2VsZWN0ZWQgLSB0YWJTZWxlY3RlZCwgNTApO1xuICAgICAgICAgICAgICAgIC8vIE1ZOiBDaGFuZ2UgdGhlIHNlbGVjdGVkIGluZGV4IG9mIFRhYnMgd2hlbiBwYW4gbGVmdFxuICAgICAgICAgICAgICAgIHRoaXMudGFicy5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSB0aGlzLmRlZmF1bHRTZWxlY3RlZCAtIHRhYlNlbGVjdGVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBwYW4gcmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLm9uQm90dG9tTmF2VGFwKHRoaXMuZGVmYXVsdFNlbGVjdGVkICsgdGFiU2VsZWN0ZWQsIDUwKTtcbiAgICAgICAgICAgICAgICAvLyBNWTogQ2hhbmdlIHRoZSBzZWxlY3RlZCBpbmRleCBvZiBUYWJzIHdoZW4gcGFuIHJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZGVmYXVsdFNlbGVjdGVkICsgdGFiU2VsZWN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFRhYiBiYXIgaGVscGVyc1xuXG4gICAgaW5pdGlhbGl6ZVRhYkJhcigpOiB2b2lkIHtcbiAgICAgICAgLy8gc2V0IHVwIGJhc2UgbGF5ZXJcbiAgICAgICAgdGhpcy5sZWZ0VGFicy5uYXRpdmVFbGVtZW50LndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgICAgICB0aGlzLnJpZ2h0VGFicy5uYXRpdmVFbGVtZW50LndpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICAgICAgICB0aGlzLmNlbnRlclBhdGNoLm5hdGl2ZUVsZW1lbnQud2lkdGggPSAxMDA7XG5cbiAgICAgICAgdGhpcy50YWJCR0NvbnRhaW5lci5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVggPSAtIChzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMgLyAyKSAtICg4MCAvIDIpO1xuXG4gICAgICAgIC8vIHNldCBkZWZhdWx0IHNlbGVjdGVkIHRhYlxuICAgICAgICBjb25zdCB0YWJDb250ZW50c0FyciA9IHRoaXMudGFiQ29udGVudHMudG9BcnJheSgpO1xuICAgICAgICB0YWJDb250ZW50c0Fyclt0aGlzLmRlZmF1bHRTZWxlY3RlZF0ubmF0aXZlRWxlbWVudC5zY2FsZVggPSAxLjU7XG4gICAgICAgIHRhYkNvbnRlbnRzQXJyW3RoaXMuZGVmYXVsdFNlbGVjdGVkXS5uYXRpdmVFbGVtZW50LnNjYWxlWSA9IDEuNTtcbiAgICAgICAgdGFiQ29udGVudHNBcnJbdGhpcy5kZWZhdWx0U2VsZWN0ZWRdLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWSA9IC0gMTU7XG4gICAgICAgIHRoaXMuY3VycmVudFRhYkluZGV4ID0gdGhpcy5kZWZhdWx0U2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgZ2V0U2xpZGVBbmltYXRpb24oaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IHRoaXMuZ2V0VGFiVHJhbnNsYXRlWChpbmRleCksIHk6IDAgfSxcbiAgICAgICAgICAgIGN1cnZlOiB0aGlzLmFuaW1hdGlvbkN1cnZlLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0Rm9jdXNBbmltYXRpb24oaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NhbGU6IHsgeDogMS41LCB5OiAxLjUgfSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAtMTUgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFVuZm9jdXNBbmltYXRpb24oaW5kZXg6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NhbGU6IHsgeDogMSwgeTogMSB9LFxuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFRhYlRyYW5zbGF0ZVgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIHRoaXMudGFiTGlzdC5sZW5ndGggLSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMikgKyAoODAgLyAyKVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbi8vIEltcG9ydCBzZXJ2aWNlc1xuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tICcuL3NoYXJlZC9zZXJ2aWNlcy93ZWF0aGVyLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbV2VhdGhlclNlcnZpY2VdIC8vIERJIHZvb3Igc2VydmljZVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIiwiLy8gV2VhdGhlci5tb2RlbC50c1xuZXhwb3J0IGludGVyZmFjZSBJV2VhdGhlciB7XG4gIGNvb3JkOiBDb29yZDtcbiAgd2VhdGhlcj86IChXZWF0aGVyRW50aXR5KVtdIHwgbnVsbDtcbiAgYmFzZTogc3RyaW5nO1xuICBtYWluOiBNYWluO1xuICB3aW5kOiBXaW5kO1xuICBjbG91ZHM6IENsb3VkcztcbiAgZHQ6IG51bWJlcjtcbiAgc3lzOiBTeXM7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgY29kOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIENvb3JkIHtcbiAgbG9uOiBudW1iZXI7XG4gIGxhdDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBXZWF0aGVyRW50aXR5IHtcbiAgaWQ6IG51bWJlcjtcbiAgbWFpbjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIE1haW4ge1xuICB0ZW1wOiBudW1iZXI7XG4gIHByZXNzdXJlOiBudW1iZXI7XG4gIGh1bWlkaXR5OiBudW1iZXI7XG4gIHRlbXBfbWluOiBudW1iZXI7XG4gIHRlbXBfbWF4OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdpbmQge1xuICBzcGVlZDogbnVtYmVyO1xuICBkZWc6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQ2xvdWRzIHtcbiAgYWxsOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN5cyB7XG4gIHR5cGU6IG51bWJlcjtcbiAgaWQ6IG51bWJlcjtcbiAgbWVzc2FnZTogbnVtYmVyO1xuICBjb3VudHJ5OiBzdHJpbmc7XG4gIHN1bnJpc2U6IG51bWJlcjtcbiAgc3Vuc2V0OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBXZWF0aGVyTW9kZWwgaW1wbGVtZW50cyBJV2VhdGhlciB7XG5cdGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgY29vcmQ6Q29vcmQsXG4gICAgICAgIHB1YmxpYyB3ZWF0aGVyOldlYXRoZXJFbnRpdHlbXSxcbiAgICAgICAgcHVibGljIGJhc2U6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgbWFpbjpNYWluLFxuICAgICAgICBwdWJsaWMgd2luZDogV2luZCxcbiAgICAgICAgcHVibGljIGNsb3VkczogQ2xvdWRzLFxuICAgICAgICBwdWJsaWMgZHQ6bnVtYmVyLFxuICAgICAgICBwdWJsaWMgc3lzOlN5cyxcbiAgICAgICAgcHVibGljIGlkOm51bWJlcixcbiAgICAgICAgcHVibGljIG5hbWU6c3RyaW5nLFxuICAgICAgICBwdWJsaWMgY29kOm51bWJlcikge1xuXHR9XG59XG5cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdlYXRoZXJNb2RlbCwgSVdlYXRoZXIgfSBmcm9tICcuLi9tb2RlbC93ZWF0aGVyLm1vZGVsJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XG4gICAgLy8gTXkgcHJpdmF0ZSBrZXkuIFBsZWFzZSBzaWduIHVwIGZvciB5b3VyIG93biBrZXkgYXQgd3d3Lm9tZGJhcGkuY29tXG4gIHVybDogc3RyaW5nID0gJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/dW5pdHM9bWV0cmljJmFwcGlkPTg1NjZkNjA0Y2Q5NDAyYjY1Mzk0YjAzNGU1MmFhMmFmJic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIC8vIHJldHVybiBXZWF0aGVyXG4gIHNlYXJjaFdlYXRoZXIoY2l0eW5hbWUpOiBPYnNlcnZhYmxlPElXZWF0aGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SVdlYXRoZXI+KHRoaXMudXJsICsgYHE9JHtjaXR5bmFtZX1gKS5waXBlKFxuICAgICAgbWFwKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlcmRhdGE6IElXZWF0aGVyID0gcmVzcG9uc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWF0aGVyU2VydmljZSB0ZW1wISA6ICcsIHdlYXRoZXJkYXRhLm1haW4udGVtcCk7XG4gICAgICAgIHJldHVybiBuZXcgV2VhdGhlck1vZGVsKFxuICAgICAgICAgIHdlYXRoZXJkYXRhLmNvb3JkLCB3ZWF0aGVyZGF0YS53ZWF0aGVyLCB3ZWF0aGVyZGF0YS5iYXNlLCB3ZWF0aGVyZGF0YS5tYWluLCB3ZWF0aGVyZGF0YS53aW5kLCB3ZWF0aGVyZGF0YS5jbG91ZHMsIHdlYXRoZXJkYXRhLmR0LCB3ZWF0aGVyZGF0YS5zeXMsIHdlYXRoZXJkYXRhLmlkLCB3ZWF0aGVyZGF0YS5uYW1lLCB3ZWF0aGVyZGF0YS5jb2RcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgICAgY29uc29sZS5lcnJvcignQXBpU2VydmljZTo6aGFuZGxlRXJyb3InLCBlcnJvcik7XG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9