(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: ADD_TODO, TOGGLE_TODO, REMOVE_TODO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TODO", function() { return REMOVE_TODO; });
var ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = 'TOGGLE_TODO';
var REMOVE_TODO = 'REMOVE_TODO';


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h1 class=\"card-title\">{{title}}</h1>\n    <h5 class=\"card-subtitle\">Angular5 / Redux</h5>\n    <br />\n    <!--Laat de contents van app-todo-list zien-->\n    <app-todo-list></app-todo-list>\n    <h1>Bart van Maarschalkerweerd</h1>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TodoList';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo-list/todo-list.component.ts");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_6__["rootReducer"], _store__WEBPACK_IMPORTED_MODULE_6__["INITIAL_STATE"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgReduxModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: INITIAL_STATE, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/actions.ts");

var INITIAL_STATE = {
    todos: [],
};
function rootReducer(state, action) {
    switch (action.type) {
        //Op Create
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo))
            });
        case _actions__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]:
            var todo = state.todos.find(function (t) { return t.id === action.id; });
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    state.todos.slice(0, index),
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
                    state.todos.slice(index + 1)
                ]
            });
        //Op Delete
        case _actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TODO"]:
            return Object.assign({}, state, {
                todos: state.todos.filter(function (t) { return t.id !== action.id; })
            });
    }
    return state;
}


/***/ }),

/***/ "./src/app/todo-list/todo-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Create Todo:</h6>\n<form (ngSubmit)=\"obSubmit()\" #todoForm=\"ngForm\">\n  <div class=\"form\">\n    <div class=\"col-auto\">\n        <input \n          type=\"text\" \n          class=\"form-control\" \n          placeholder=\"Description\"\n          id=\"description\"\n          [(ngModel)]=\"model.description\"\n          name=\"description\"\n          #description=\"ngModel\">\n    </div>\n\n      <!--Als description niet is ingevult laat alert zien!-->\n      <div *ngIf=\"!model.description\" class=\"col-auto\">\n          <div class=\"alert alert-danger\">Required input!</div>\n      </div>\n\n    <div class=\"col-auto\">\n      <input \n        type=\"text\" \n        class=\"form-control\" \n        placeholder=\"Responsible\"\n        id=\"responsible\"\n        [(ngModel)]=\"model.responsible\"\n        name=\"responsible\"\n        #responsible=\"ngModel\">\n    </div>\n\n        <!--Als responsible niet is ingevult laat alert zien!-->\n        <div *ngIf=\"!model.responsible\" class=\"col-auto\">\n            <div class=\"alert alert-danger\">Required input!</div>\n        </div>\n\n    <div class=\"col-auto\">\n      <select \n        class=\"form-control\"\n        id=\"priority\"\n        [(ngModel)]=\"model.priority\"\n        name=\"priority\"\n        #priority=\"ngModel\">\n        <option value=\"low\">Low</option>\n        <option value=\"medium\">Medium</option>\n        <option value=\"high\">High</option>\n      </select>\n    </div>\n\n    <!-- Als niet alle velden zijn ingevult-->\n    <div *ngIf =\"!model.description || !model.priority || !model.responsible\" class=\"col-auto\">\n      <!--Disable btn-->\n        <button type=\"submit\" class=\"btn btn-grey\" disabled>Set Task</button>\n      </div>\n    <!-- Als alle velden zijn ingevult-->\n    <div *ngIf =\"model.description && model.priority && model.responsible\" class=\"col-auto\">\n      <!--Enable button-->\n      <button type=\"submit\" class=\"btn btn-primary\">Set Task</button>\n    </div>\n\n\n  </div>\n</form>\n<br />\n<h3>Todos List:</h3>\n<!--Als er een input is laat dan de list zien-->\n<div *ngIf=\"(todos | async).length!=0\">\n<table class=\"table\">\n  <!--Table head-->\n  <thead class=\"thead-inverse\">\n    <tr>\n      <th>#</th>\n      <th>Todo Description</th>\n      <th>Responsible</th>\n      <th>Priority</th>\n      <!--TH voor de delete button-->\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <!--Gaat door array heen en zet steeds een tablerow toe bij elk individueel item-->\n    <tr *ngFor=\"let t of todos | async\">\n      <td><span (click)=\"toggleTodo(t)\" [class.completed]=\"t.isCompleted\">{{ t.id }}</span></td>\n      <td><span (click)=\"toggleTodo(t)\" [class.completed]=\"t.isCompleted\">{{ t.description }}</span></td>\n      <td><span (click)=\"toggleTodo(t)\" [class.completed]=\"t.isCompleted\">{{ t.responsible }}</span></td>\n      <td>\n        <!--Als priority low/medium/high is verrander dan naar juiste span-->\n        <span *ngIf=\"t.priority == 'low'\" class=\"badge badge-success\">Low</span>\n        <span *ngIf=\"t.priority == 'medium'\" class=\"badge badge-warning\">Medium</span>\n        <span *ngIf=\"t.priority == 'high'\" class=\"badge badge-danger\">High</span>\n      </td>\n      <td><button class=\"btn btn-danger\" (click)=\"removeTodo(t)\">Delete</button></td>\n    </tr>\n  </tbody>\n</table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/todo-list/todo-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/todo-list/todo-list.component.ts ***!
  \**************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(ngRedux) {
        this.ngRedux = ngRedux;
        this.model = {
            id: 0,
            description: "",
            responsible: "",
            priority: "low",
            isCompleted: false
        };
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    //Nieuw item
    TodoListComponent.prototype.obSubmit = function () {
        this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"], todo: this.model });
    };
    //Event handeler
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_TODO"], id: todo.id });
    };
    //Verwijder item
    TodoListComponent.prototype.removeTodo = function (todo) {
        this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_2__["REMOVE_TODO"], id: todo.id });
    };
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["select"])(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "todos", void 0);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo-list/todo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_1__["NgRedux"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gewoo\TodoList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
