(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./round1/round1.module": [
		"./src/app/round1/round1.module.ts",
		"round1-round1-module"
	],
	"./round2/round2.module": [
		"./src/app/round2/round2.module.ts",
		"round2-round2-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _rover_rover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rover/rover.component */ "./src/app/rover/rover.component.ts");





const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'rover',
        component: _rover_rover_component__WEBPACK_IMPORTED_MODULE_4__["RoverComponent"]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'round1',
        loadChildren: './round1/round1.module#Round1Module'
    },
    {
        path: 'round2',
        loadChildren: './round2/round2.module#Round2Module'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'protovision';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _rover_rover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rover/rover.component */ "./src/app/rover/rover.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _rover_rover_component__WEBPACK_IMPORTED_MODULE_10__["RoverComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/event.service.ts":
/*!**********************************!*\
  !*** ./src/app/event.service.ts ***!
  \**********************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let EventService = class EventService {
    constructor(afd) {
        this.afd = afd;
    }
    // Admin
    setAdmin(id, data) {
        this.afd.collection('Admin/').doc(id).set(data);
    }
    getAdmin() {
        this.users = this.afd.collection('Admin/').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            });
        }));
        return this.users;
    }
    //SetScore
    setScoreDetails(id, data) {
        return this.afd.collection('ScoreProtovision').doc(id).set(data);
    }
    addScore(id, data) {
        return this.afd.collection('ScoreProtovision').doc(id).update(data);
    }
    getScore() {
        this.users = this.afd.collection('ScoreProtovision').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            });
        }));
        return this.users;
    }
    // ScanCheck
    scan(event, id, data) {
        return this.afd.collection('Attended ' + event).doc(id).set(data);
    }
    getAttended(id) {
        this.attended = this.afd.collection(id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return { data };
            });
        }));
        return this.attended;
    }
    // Amount
    addAmount(id, data) {
        this.afd.collection('Amount/').doc(id).set(data);
    }
    getAmount() {
        this.users = this.afd.collection('Amount').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            });
        }));
        return this.users;
    }
    // Individual Events
    addEvent(id, e) {
        this.afd.collection(id).add(e);
    }
    updateEvent(event, id, p) {
        this.afd.collection(event).doc(id).update(p);
    }
    getEvent(id) {
        this.users = this.afd.collection(id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            });
        }));
        return this.users;
    }
    // Events
    add(e) {
        this.afd.collection('Events/').add(e);
    }
    update(id, p) {
        this.afd.collection('Events/').doc(id).update(p);
    }
    delete(id) {
        const path = 'Events/';
        this.afd.collection(path).doc(id).delete();
    }
    getAll() {
        this.users = this.afd.collection('Events').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            });
        }));
        return this.users;
    }
    // Users
    adduser(u) {
        this.afd.collection('Users/').add(u);
    }
    removeuser(id) {
        this.afd.collection('Users/').doc(id).delete();
    }
    getallUsers() {
        this.users = this.afd.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            });
        }));
        return this.users;
    }
};
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], EventService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-dark{height:1000px;background:url('protovison.jpg') #475d62;background-size:cover;position:relative}\r\n.login-dark form{max-width:320px;width:90%;background-color:rgba(24,29,35,.46);padding:40px;border-radius:4px;transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;color:#fff;box-shadow:3px 3px 4px rgba(0,0,0,.2)}\r\n.login-dark .illustration{text-align:center;padding:15px 0 20px;font-size:100px;color:#2980ef}\r\n.login-dark form .form-control{background:0 0;border:none;border-bottom:1px solid #434a52;border-radius:0;box-shadow:none;outline:0;color:inherit}\r\n.login-dark form .btn-primary{background:#214a80;border:none;border-radius:4px;padding:11px;box-shadow:none;margin-top:26px;text-shadow:none;outline:0}\r\n.login-dark form .btn-primary:active,.login-dark form .btn-primary:hover{background:#214a80;outline:0}\r\n.login-dark form .forgot{display:block;text-align:center;font-size:12px;color:#6f7a85;opacity:.9;text-decoration:none}\r\n.login-dark form .forgot:active,.login-dark form .forgot:hover{opacity:1;text-decoration:none}\r\n.login-dark form .btn-primary:active{transform:translateY(1px)}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLGFBQWEsQ0FBQyx3Q0FBdUQsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUI7QUFDekgsaUJBQWlCLGVBQWUsQ0FBQyxTQUFTLENBQUMsbUNBQW1DLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDLDhCQUE4QixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFDQUFxQztBQUNoTywwQkFBMEIsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLGFBQWE7QUFDN0YsK0JBQStCLGNBQWMsQ0FBQyxXQUFXLENBQUMsK0JBQStCLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsYUFBYTtBQUNqSiw4QkFBOEIsa0JBQWtCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7QUFDdEoseUVBQXlFLGtCQUFrQixDQUFDLFNBQVM7QUFDckcseUJBQXlCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0I7QUFDckgsK0RBQStELFNBQVMsQ0FBQyxvQkFBb0I7QUFDN0YscUNBQXFDLHlCQUF5QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tZGFya3toZWlnaHQ6MTAwMHB4O2JhY2tncm91bmQ6dXJsKC4uLy4uL2Fzc2V0cy9pbWcvcHJvdG92aXNvbi5qcGcpICM0NzVkNjI7YmFja2dyb3VuZC1zaXplOmNvdmVyO3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG4ubG9naW4tZGFyayBmb3Jte21heC13aWR0aDozMjBweDt3aWR0aDo5MCU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0LDI5LDM1LC40Nik7cGFkZGluZzo0MHB4O2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO2NvbG9yOiNmZmY7Ym94LXNoYWRvdzozcHggM3B4IDRweCByZ2JhKDAsMCwwLC4yKX1cclxuLmxvZ2luLWRhcmsgLmlsbHVzdHJhdGlvbnt0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjE1cHggMCAyMHB4O2ZvbnQtc2l6ZToxMDBweDtjb2xvcjojMjk4MGVmfVxyXG4ubG9naW4tZGFyayBmb3JtIC5mb3JtLWNvbnRyb2x7YmFja2dyb3VuZDowIDA7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzQzNGE1Mjtib3JkZXItcmFkaXVzOjA7Ym94LXNoYWRvdzpub25lO291dGxpbmU6MDtjb2xvcjppbmhlcml0fVxyXG4ubG9naW4tZGFyayBmb3JtIC5idG4tcHJpbWFyeXtiYWNrZ3JvdW5kOiMyMTRhODA7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo0cHg7cGFkZGluZzoxMXB4O2JveC1zaGFkb3c6bm9uZTttYXJnaW4tdG9wOjI2cHg7dGV4dC1zaGFkb3c6bm9uZTtvdXRsaW5lOjB9XHJcbi5sb2dpbi1kYXJrIGZvcm0gLmJ0bi1wcmltYXJ5OmFjdGl2ZSwubG9naW4tZGFyayBmb3JtIC5idG4tcHJpbWFyeTpob3ZlcntiYWNrZ3JvdW5kOiMyMTRhODA7b3V0bGluZTowfVxyXG4ubG9naW4tZGFyayBmb3JtIC5mb3Jnb3R7ZGlzcGxheTpibG9jazt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTJweDtjb2xvcjojNmY3YTg1O29wYWNpdHk6Ljk7dGV4dC1kZWNvcmF0aW9uOm5vbmV9XHJcbi5sb2dpbi1kYXJrIGZvcm0gLmZvcmdvdDphY3RpdmUsLmxvZ2luLWRhcmsgZm9ybSAuZm9yZ290OmhvdmVye29wYWNpdHk6MTt0ZXh0LWRlY29yYXRpb246bm9uZX1cclxuLmxvZ2luLWRhcmsgZm9ybSAuYnRuLXByaW1hcnk6YWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDFweCl9Il19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\">\r\n    <title>Login</title>\r\n    <link rel=\"stylesheet\" href=\"assets/bootstrap/css/bootstrap.min.css\">\r\n</head>\r\n\r\n<body>\r\n    <div class=\"text-center login-dark bg\" style=\"background-image: url(&quot;assets/img/protovison.jpg&quot;);height: 750px;\">\r\n        <div class=\"login-form\">\r\n            <form class=\"text-center\" method=\"post\" style=\"height: 554px;margin: 0px -200px;background-color: rgba(0,0,0,0.95);margin-left: 20px;margin-bottom: 0px;margin-top: 0px;margin-right: -192px;\">\r\n                <h2 class=\"sr-only\">Login Form</h2>\r\n                <h1 class=\"text-center\" style=\"margin-left: -5px;\">PROTOVISION</h1>\r\n                <div class=\"illustration\" style=\"height: 173px;width: 240px;\"><img height=150 width=150 src=\"assets/img/user.png\"></div>\r\n                <br>\r\n                <div class=\"form-group\" [formGroup]=\"loginForm\">\r\n                    <input class=\"form-control\" required formControlName=\"user\" type=\"text\" placeholder=\"Username\" style=\"height: 42px;\">\r\n                    <input class=\"form-control\" required formControlName=\"number\" type=\"tel\" maxLength=\"10\" minLength=\"10\" placeholder=\"Phone no\" style=\"height: 42px;background-color: rgba(214,198,198,0);\">\r\n                    <label class=\"text-left\" style=\"color: rgba(22,212,238,0.88);font-size: 12px;\">*Use the registered phone number</label>\r\n                    <button [disabled]=\"loginForm.invalid\" class=\"btn btn-primary btn-block\" (click)=\"submit()\" style=\"background-color: rgba(22,212,238,0.68);color: rgb(0,0,0);filter: brightness(99%);margin: 25px;margin-left: 3px;margin-top: 16px;\">Log In</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event.service */ "./src/app/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(eveSer, router) {
        this.eveSer = eveSer;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            user: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)
            ]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            score: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("")
        });
    }
    ngOnInit() {
        this.eveSer.getAttended("Attended Protovision").subscribe(success => {
            this.attended = success;
            console.log(success);
        }, error => {
            console.log(error);
        });
    }
    submit() {
        let i;
        for (i = 0; i < this.attended.length; i++) {
            let user = this.attended[i].data.data;
            this.currentuser = user;
            console.log(this.currentuser.number);
            if (this.currentuser.username === this.loginForm.value.user && this.currentuser.number == this.loginForm.value.number) {
                var score = 0;
                this.loginForm.controls["score"].setValue(score);
                console.log(this.attended[i].data.id);
                this.eveSer.setScoreDetails(this.attended[i].data.id, this.loginForm.value).then(success => {
                    console.log(success);
                }).catch(error => { console.log(error); });
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Login Successful");
                this.router.navigate(["/round1/rules"], {
                    queryParams: {
                        id: this.attended[i].data.id
                    }
                });
                this.loginForm.reset();
                break;
            }
            else {
                this.error = false;
                // break;
            }
        }
        // console.log(this.currentuser);
        // break;
        //   if (this.loginForm.value.user === user.data.name && this.loginForm.value.number === user.data.number) {
        //     this.router.navigate(["/round1/rules"], {
        //       queryParams: {
        //         id: this.attended[i].id
        //       }
        //     });
        //     var score: number = 0;
        //     this.loginForm.controls["score"].setValue(score);
        //     this.eveSer.setScore(this.attended[i].id, this.loginForm.value);
        //     this.loginForm.reset();
        //     break;
        //   } else {
        //     this.error = false;
        //   }
        // }
        // if (this.error == false) {
        //   alert("Invalid Details");
        // }
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/rover/rover.component.css":
/*!*******************************************!*\
  !*** ./src/app/rover/rover.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm92ZXIvcm92ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcm92ZXIvcm92ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/rover/rover.component.html":
/*!********************************************!*\
  !*** ./src/app/rover/rover.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n  <body style=\"background-color: #d65035; height: 100%;\">\r\n    <div align=\"center\">\r\n      <img src=\"assets/img/gameover.jpg\"  height=\"100%\" width=\"49%\"/>\r\n      <br>\r\n      <button (click)=\"Submit()\" style=\"background-color: #d65035; border: solid black;\">Continue To Round 2</button>\r\n    </div>\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./src/app/rover/rover.component.ts":
/*!******************************************!*\
  !*** ./src/app/rover/rover.component.ts ***!
  \******************************************/
/*! exports provided: RoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoverComponent", function() { return RoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RoverComponent = class RoverComponent {
    constructor(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            let obj = params;
            this.id = params.id;
        });
    }
    Submit() {
        this.router.navigate(["/round2/question1"], {
            queryParams: {
                id: this.id
            }
        });
    }
};
RoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rover',
        template: __webpack_require__(/*! ./rover.component.html */ "./src/app/rover/rover.component.html"),
        styles: [__webpack_require__(/*! ./rover.component.css */ "./src/app/rover/rover.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], RoverComponent);



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
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCwKXO7xEDtVpD33bV7nMiuXGTu24NTgLk",
        authDomain: "suigenerisapp.firebaseapp.com",
        databaseURL: "https://suigenerisapp.firebaseio.com",
        projectId: "suigenerisapp",
        storageBucket: "suigenerisapp.appspot.com",
        messagingSenderId: "784163068473",
        appId: "1:784163068473:web:225caa5a015c1dd6878be8"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Projects\protovision\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map