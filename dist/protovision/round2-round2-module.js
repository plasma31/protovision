(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["round2-round2-module"],{

/***/ "./src/app/round2/gameover/gameover.component.css":
/*!********************************************************!*\
  !*** ./src/app/round2/gameover/gameover.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdW5kMi9nYW1lb3Zlci9nYW1lb3Zlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/round2/gameover/gameover.component.html":
/*!*********************************************************!*\
  !*** ./src/app/round2/gameover/gameover.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\r\n  <body>\r\n    <h1 style=\"align-self: center\">\r\n      GAME OVER\r\n    </h1>\r\n  </body>\r\n</html>"

/***/ }),

/***/ "./src/app/round2/gameover/gameover.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/round2/gameover/gameover.component.ts ***!
  \*******************************************************/
/*! exports provided: GameoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameoverComponent", function() { return GameoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameoverComponent = class GameoverComponent {
    constructor() { }
    ngOnInit() {
    }
};
GameoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gameover',
        template: __webpack_require__(/*! ./gameover.component.html */ "./src/app/round2/gameover/gameover.component.html"),
        styles: [__webpack_require__(/*! ./gameover.component.css */ "./src/app/round2/gameover/gameover.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GameoverComponent);



/***/ }),

/***/ "./src/app/round2/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/round2/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-dark{height:1000px;background:url('protovison.jpg') #475d62;background-size:cover;position:relative}\r\n.login-dark form{max-width:320px;width:90%;background-color:rgba(24,29,35,.46);padding:40px;border-radius:4px;transform:translate(-50%,-50%);position:absolute;top:50%;left:50%;color:#fff;box-shadow:3px 3px 4px rgba(0,0,0,.2)}\r\n.login-dark .illustration{text-align:center;padding:15px 0 20px;font-size:100px;color:#2980ef}\r\n.login-dark form .form-control{background:0 0;border:none;border-bottom:1px solid #434a52;border-radius:0;box-shadow:none;outline:0;color:inherit}\r\n.login-dark form .btn-primary{background:#214a80;border:none;border-radius:4px;padding:11px;box-shadow:none;margin-top:26px;text-shadow:none;outline:0}\r\n.login-dark form .btn-primary:active,.login-dark form .btn-primary:hover{background:#214a80;outline:0}\r\n.login-dark form .forgot{display:block;text-align:center;font-size:12px;color:#6f7a85;opacity:.9;text-decoration:none}\r\n.login-dark form .forgot:active,.login-dark form .forgot:hover{opacity:1;text-decoration:none}\r\n.login-dark form .btn-primary:active{transform:translateY(1px)}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91bmQyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxhQUFhLENBQUMsd0NBQTBELENBQUMscUJBQXFCLENBQUMsaUJBQWlCO0FBQzVILGlCQUFpQixlQUFlLENBQUMsU0FBUyxDQUFDLG1DQUFtQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUM7QUFDaE8sMEJBQTBCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxhQUFhO0FBQzdGLCtCQUErQixjQUFjLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGFBQWE7QUFDakosOEJBQThCLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTO0FBQ3RKLHlFQUF5RSxrQkFBa0IsQ0FBQyxTQUFTO0FBQ3JHLHlCQUF5QixhQUFhLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsb0JBQW9CO0FBQ3JILCtEQUErRCxTQUFTLENBQUMsb0JBQW9CO0FBQzdGLHFDQUFxQyx5QkFBeUIiLCJmaWxlIjoic3JjL2FwcC9yb3VuZDIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1kYXJre2hlaWdodDoxMDAwcHg7YmFja2dyb3VuZDp1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm90b3Zpc29uLmpwZykgIzQ3NWQ2MjtiYWNrZ3JvdW5kLXNpemU6Y292ZXI7cG9zaXRpb246cmVsYXRpdmV9XHJcbi5sb2dpbi1kYXJrIGZvcm17bWF4LXdpZHRoOjMyMHB4O3dpZHRoOjkwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQsMjksMzUsLjQ2KTtwYWRkaW5nOjQwcHg7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDo1MCU7Y29sb3I6I2ZmZjtib3gtc2hhZG93OjNweCAzcHggNHB4IHJnYmEoMCwwLDAsLjIpfVxyXG4ubG9naW4tZGFyayAuaWxsdXN0cmF0aW9ue3RleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6MTVweCAwIDIwcHg7Zm9udC1zaXplOjEwMHB4O2NvbG9yOiMyOTgwZWZ9XHJcbi5sb2dpbi1kYXJrIGZvcm0gLmZvcm0tY29udHJvbHtiYWNrZ3JvdW5kOjAgMDtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjNDM0YTUyO2JvcmRlci1yYWRpdXM6MDtib3gtc2hhZG93Om5vbmU7b3V0bGluZTowO2NvbG9yOmluaGVyaXR9XHJcbi5sb2dpbi1kYXJrIGZvcm0gLmJ0bi1wcmltYXJ5e2JhY2tncm91bmQ6IzIxNGE4MDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjRweDtwYWRkaW5nOjExcHg7Ym94LXNoYWRvdzpub25lO21hcmdpbi10b3A6MjZweDt0ZXh0LXNoYWRvdzpub25lO291dGxpbmU6MH1cclxuLmxvZ2luLWRhcmsgZm9ybSAuYnRuLXByaW1hcnk6YWN0aXZlLC5sb2dpbi1kYXJrIGZvcm0gLmJ0bi1wcmltYXJ5OmhvdmVye2JhY2tncm91bmQ6IzIxNGE4MDtvdXRsaW5lOjB9XHJcbi5sb2dpbi1kYXJrIGZvcm0gLmZvcmdvdHtkaXNwbGF5OmJsb2NrO3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2NvbG9yOiM2ZjdhODU7b3BhY2l0eTouOTt0ZXh0LWRlY29yYXRpb246bm9uZX1cclxuLmxvZ2luLWRhcmsgZm9ybSAuZm9yZ290OmFjdGl2ZSwubG9naW4tZGFyayBmb3JtIC5mb3Jnb3Q6aG92ZXJ7b3BhY2l0eToxO3RleHQtZGVjb3JhdGlvbjpub25lfVxyXG4ubG9naW4tZGFyayBmb3JtIC5idG4tcHJpbWFyeTphY3RpdmV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMXB4KX0iXX0= */"

/***/ }),

/***/ "./src/app/round2/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/round2/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, shrink-to-fit=no\">\r\n    <title>Login</title>\r\n    <link rel=\"stylesheet\" href=\"assets/bootstrap/css/bootstrap.min.css\">\r\n</head>\r\n\r\n<body>\r\n    <div class=\"text-center login-dark bg\" style=\"background-image: url(&quot;assets/img/protovison.jpg&quot;);height: 750px;\">\r\n        <div class=\"login-form\">\r\n            <form class=\"text-center\" method=\"post\" style=\"height: 554px;margin: 0px -200px;background-color: rgba(0,0,0,0.95);margin-left: 20px;margin-bottom: 0px;margin-top: 0px;margin-right: -192px;\">\r\n                <h2 class=\"sr-only\">Login Form</h2>\r\n                <h1 class=\"text-center\" style=\"margin-left: -5px;\">PROTOVISION</h1>\r\n                <div class=\"illustration\" style=\"height: 173px;width: 240px;\"><img height=150 width=150 src=\"assets/img/user.png\"></div>\r\n                <br>\r\n                <div class=\"form-group\" [formGroup]=\"loginForm\">\r\n                    <input class=\"form-control\" required formControlName=\"user\" type=\"text\" placeholder=\"Username\" style=\"height: 42px;\">\r\n                    <input class=\"form-control\" required formControlName=\"number\" type=\"tel\" maxLength=\"10\" minLength=\"10\" placeholder=\"Phone no\" style=\"height: 42px;background-color: rgba(214,198,198,0);\">\r\n                    <label class=\"text-left\" style=\"color: rgba(22,212,238,0.88);font-size: 12px;\">*Use the registered phone number</label>\r\n                    <button [disabled]=\"loginForm.invalid\" class=\"btn btn-primary btn-block\" (click)=\"submit()\" style=\"background-color: rgba(22,212,238,0.68);color: rgb(0,0,0);filter: brightness(99%);margin: 25px;margin-left: 3px;margin-top: 16px;\">Log In</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/round2/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/round2/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../event.service */ "./src/app/event.service.ts");
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
                this.router.navigate(["/round2/question1"], {
                    queryParams: {
                        id: this.attended[i].data.id
                    }
                });
                sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Login Successful");
                this.loginForm.reset();
                break;
            }
            else {
                this.error = false;
                // break;
            }
        }
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! ./login.component.html */ "./src/app/round2/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/round2/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/round2/question1/question1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/round2/question1/question1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdW5kMi9xdWVzdGlvbjEvcXVlc3Rpb24xLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/round2/question1/question1.component.html":
/*!***********************************************************!*\
  !*** ./src/app/round2/question1/question1.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\t<title></title>\r\n\t<style>\r\n\t\tarea{\r\n\t\t\tcursor: default;\r\n\t\t}\r\n\t</style>\r\n</head>\r\n<body style=\"background: black; height: 1200px;\">\r\n\t<div class=\"row\">\r\n\t\t<br>\r\n\t\t<p style=\"text-align: center; color: rgb(255, 11, 11); font-size: 30px;\"><b>Solve the riddle.and find that word in the map given below and click on it.</b></p>\r\n\t\t\t<img src=\"assets/img/r2q1.jpg\" style=\"width: 450px; height: 300px; padding-left: 425px; \">\r\n\t\t\t<!-- <br> -->\r\n\t\t\t<!-- <img src=\"assets/img/Question.png\" usemap=\"#img1\" style=\"width: 1200px; padding-left: 50px; padding-top: 30px;\"> -->\r\n\t\t\t\r\n\t        <map name=\"question\">\r\n\t\t\t\t<area shape=\"rect\" coords=\"441,133,466,144\" alt=\"hello\" (click)=validate(true)>\r\n\t\t\t</map>\r\n\t\t\t<img src=\"assets/img/Question.png\" alt=\"hello\" usemap=\"#question\" style=\"margin-left:90px; margin-top: 30px;\">\r\n\t</div>\r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/round2/question1/question1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/round2/question1/question1.component.ts ***!
  \*********************************************************/
/*! exports provided: Question1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question1Component", function() { return Question1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event.service */ "./src/app/event.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





let Question1Component = class Question1Component {
    constructor(actRoute, eveSer, router) {
        this.actRoute = actRoute;
        this.eveSer = eveSer;
        this.router = router;
        this.check = false;
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            let obj = params;
            this.id = params.id;
        });
        this.eveSer.getScore().subscribe(success => {
            this.protoparticipant = success;
            console.log(success);
        }, error => {
            console.log(error);
        });
        // this.keyboard();
    }
    // keyboard() {
    //   document.addEventListener("contextmenu", event => event.preventDefault());
    //   document.addEventListener("keydown", function(e) {
    //     if (
    //       e.which === 91 ||
    //       e.which === 122 ||
    //       e.which === 73 ||
    //       e.which === 67 ||
    //       e.which === 123
    //     ) {
    //       // e.keydown = 0;
    //       e.returnValue = false;
    //       return false;
    //     }
    //   });
    // }
    validate(c) {
        // var x = (<HTMLInputElement>document.getElementById("answer")).value;
        if (c) {
            this.check = true;
        }
        else {
            this.check = false;
        }
        // console.log(this.check);
        var i;
        for (i = 0; i < this.protoparticipant.length; i++) {
            // console.log(this.protoparticipant[i].id);
            if (this.id === this.protoparticipant[i].id) {
                this.currparticipant = this.protoparticipant[i].data;
            }
        }
        let obj = { 'score': 0 };
        // obj.firstplayer = this.currparticipant.firstplayer;
        // obj.secondplayer = this.currparticipant.secondplayer;
        // obj.number = this.currparticipant.number;
        // obj.email = this.currparticipant.email;
        if (this.check === true) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("HINT: d g");
            // console.log("true and navigate");
            // let score = 5;
            obj.score = 5;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        else {
            // console.log("fasle and error");
            // let score = 0;
            obj.score = 0;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        obj.score = this.currparticipant.score + obj.score;
        console.log(obj.score);
        this.eveSer.addScore(this.id, obj).then(success => {
            console.log(success);
        }).catch(error => { console.log(error); });
        this.router.navigate(["/round2/question2"], {
            queryParams: {
                id: this.id
            }
        });
    }
};
Question1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-question1",
        template: __webpack_require__(/*! ./question1.component.html */ "./src/app/round2/question1/question1.component.html"),
        styles: [__webpack_require__(/*! ./question1.component.css */ "./src/app/round2/question1/question1.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Question1Component);



/***/ }),

/***/ "./src/app/round2/question2/question2.component.css":
/*!**********************************************************!*\
  !*** ./src/app/round2/question2/question2.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 100px;\r\n    height: 350px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\ninput[type=text] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid #0c186A;\r\n    border-radius: 4px;\r\n    background: transparent;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(20, 34, 124);\r\n    border: none;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: rgb(12, 33, 168);\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n    color: #06D85F;\r\n    margin: 80px 0;\r\n  }\r\n\r\n.box {\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    background: rgba(255,255,255,0.2);\r\n    padding: 35px;\r\n    border: 2px solid #fff;\r\n    border-radius: 20px/50px;\r\n    background-clip: padding-box;\r\n    text-align: center;\r\n  }\r\n\r\n.button {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n  }\r\n\r\n.button:hover {\r\n    background: #06D85F;\r\n  }\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    transition: opacity 500ms;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n\r\n.overlay:target {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n.popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n\r\n.popup h2 {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n\r\n.popup .close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: #333;\r\n  }\r\n\r\n.popup .close:hover {\r\n    color: #06D85F;\r\n  }\r\n\r\n.popup .content {\r\n    max-height: 30%;\r\n    overflow: auto;\r\n  }\r\n\r\n@media screen and (max-width: 700px){\r\n    .box{\r\n      width: 70%;\r\n    }\r\n    .popup{\r\n      width: 70%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91bmQyL3F1ZXN0aW9uMi9xdWVzdGlvbjIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSw0REFBNEQ7O0FBQzVEO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUU7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3VuZDIvcXVlc3Rpb24yL3F1ZXN0aW9uMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMGMxODZBO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMzQsIDEyNCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMzMsIDE2OCk7XHJcbn1cclxuICBcclxuICBoMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMDZEODVGO1xyXG4gICAgbWFyZ2luOiA4MHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4LzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzA2RDg1RjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxuICAuYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNkQ4NUY7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXM7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAub3ZlcmxheTp0YXJnZXQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3B1cCB7XHJcbiAgICBtYXJnaW46IDcwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwIGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAucG9wdXAgLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICB9XHJcbiAgLnBvcHVwIC5jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzA2RDg1RjtcclxuICB9XHJcbiAgLnBvcHVwIC5jb250ZW50IHtcclxuICAgIG1heC1oZWlnaHQ6IDMwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAuYm94e1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gICAgLnBvcHVwe1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/round2/question2/question2.component.html":
/*!***********************************************************!*\
  !*** ./src/app/round2/question2/question2.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n  </head>\r\n  <body style=\"background-color:black; height: 750px;\">\r\n    <div class=\"row\">\r\n      <div class=\"column\">\r\n        <img src=\"assets/img/q2.jpeg\" width=\"600\" />\r\n      </div>\r\n      <div class=\"column\">\r\n        <font color=\"white\">\r\n          <p><b>Answer: </b></p></font\r\n        ><input type=\"text\" id=\"answer\" />\r\n        <button (click)=\"validate()\"><b>Submit</b></button>\r\n      </div>\r\n    </div>\r\n  </body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/round2/question2/question2.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/round2/question2/question2.component.ts ***!
  \*********************************************************/
/*! exports provided: Question2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question2Component", function() { return Question2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event.service */ "./src/app/event.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





let Question2Component = class Question2Component {
    constructor(actRoute, eveSer, router) {
        this.actRoute = actRoute;
        this.eveSer = eveSer;
        this.router = router;
        this.check = false;
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            let obj = params;
            this.id = params.id;
        });
        this.eveSer.getScore().subscribe(success => {
            this.protoparticipant = success;
            console.log(success);
        }, error => {
            console.log(error);
        });
        // this.keyboard();
    }
    // keyboard() {
    //   document.addEventListener("contextmenu", event => event.preventDefault());
    //   document.addEventListener("keydown", function(e) {
    //     if (
    //       e.which === 91 ||
    //       e.which === 122 ||
    //       e.which === 73 ||
    //       e.which === 67 ||
    //       e.which === 123
    //     ) {
    //       // e.keydown = 0;
    //       e.returnValue = false;
    //       return false;
    //     }
    //   });
    // }
    validate() {
        var x = document.getElementById("answer").value;
        if (x.toLowerCase() === "f") {
            this.check = true;
        }
        else {
            this.check = false;
        }
        // console.log(this.check);
        var i;
        for (i = 0; i < this.protoparticipant.length; i++) {
            // console.log(this.protoparticipant[i].id);
            if (this.id === this.protoparticipant[i].id) {
                this.currparticipant = this.protoparticipant[i].data;
            }
        }
        let obj = { 'score': 0 };
        // obj.firstplayer = this.currparticipant.firstplayer;
        // obj.secondplayer = this.currparticipant.secondplayer;
        // obj.number = this.currparticipant.number;
        // obj.email = this.currparticipant.email;
        if (this.check === true) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("HINT: e a");
            // console.log("true and navigate");
            // let score = 5;
            obj.score = 5;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        else {
            // console.log("fasle and error");
            // let score = 0;
            obj.score = 0;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        obj.score = this.currparticipant.score + obj.score;
        console.log(obj.score);
        this.eveSer.addScore(this.id, obj).then(success => {
            console.log(success);
        }).catch(error => { console.log(error); });
        this.router.navigate(["/round2/question3"], {
            queryParams: {
                id: this.id
            }
        });
    }
};
Question2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-question2",
        template: __webpack_require__(/*! ./question2.component.html */ "./src/app/round2/question2/question2.component.html"),
        styles: [__webpack_require__(/*! ./question2.component.css */ "./src/app/round2/question2/question2.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Question2Component);



/***/ }),

/***/ "./src/app/round2/question3/question3.component.css":
/*!**********************************************************!*\
  !*** ./src/app/round2/question3/question3.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 100px;\r\n    height: 350px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\ninput[type=text] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid cyan;\r\n    border-radius: 4px;\r\n    background: transparent;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: rgb(20, 170, 170);\r\n    border: none;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: cyan;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n    color: #06D85F;\r\n    margin: 80px 0;\r\n  }\r\n\r\n.box {\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    background: rgba(255,255,255,0.2);\r\n    padding: 35px;\r\n    border: 2px solid #fff;\r\n    border-radius: 20px/50px;\r\n    background-clip: padding-box;\r\n    text-align: center;\r\n  }\r\n\r\n.button {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n  }\r\n\r\n.button:hover {\r\n    background: #06D85F;\r\n  }\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    transition: opacity 500ms;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n\r\n.overlay:target {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n.popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n\r\n.popup h2 {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n\r\n.popup .close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: #333;\r\n  }\r\n\r\n.popup .close:hover {\r\n    color: #06D85F;\r\n  }\r\n\r\n.popup .content {\r\n    max-height: 30%;\r\n    overflow: auto;\r\n  }\r\n\r\n@media screen and (max-width: 700px){\r\n    .box{\r\n      width: 70%;\r\n    }\r\n    .popup{\r\n      width: 70%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91bmQyL3F1ZXN0aW9uMy9xdWVzdGlvbjMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSw0REFBNEQ7O0FBQzVEO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUU7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3VuZDIvcXVlc3Rpb24zL3F1ZXN0aW9uMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBjeWFuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMCwgMTcwLCAxNzApO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjeWFuO1xyXG59XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzA2RDg1RjtcclxuICAgIG1hcmdpbjogODBweCAwO1xyXG4gIH1cclxuICBcclxuICAuYm94IHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwNkQ4NUY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4LzUwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDZEODVGO1xyXG4gIH1cclxuICBcclxuICAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgLm92ZXJsYXk6dGFyZ2V0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAucG9wdXAge1xyXG4gICAgbWFyZ2luOiA3MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5wb3B1cCBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LWZhbWlseTogVGFob21hLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLnBvcHVwIC5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgfVxyXG4gIC5wb3B1cCAuY2xvc2U6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwNkQ4NUY7XHJcbiAgfVxyXG4gIC5wb3B1cCAuY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgLmJveHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIC5wb3B1cHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/round2/question3/question3.component.html":
/*!***********************************************************!*\
  !*** ./src/app/round2/question3/question3.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html> \r\n<html>\r\n    <head>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    </head> \r\n    <body style=\"background-color:black; height: 730px\">\r\n        <div class=\"row\">\r\n            <div class=\"column\" >\r\n                <img src=\"assets/img/r2q3.jpeg\" width=\"600\">\r\n            </div>\r\n            <div class=\"column\">\r\n                <font color=\"white\"><h2>Solve the given riddle.<br>\r\n                    </h2>\r\n                    <p><b>Answer: </b></p></font><input type=\"text\" id=\"answer\">\r\n                    <button (click)=\"validate()\">Submit</button>\r\n            </div>\r\n        </div> \r\n    </body> \r\n</html>\r\n"

/***/ }),

/***/ "./src/app/round2/question3/question3.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/round2/question3/question3.component.ts ***!
  \*********************************************************/
/*! exports provided: Question3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question3Component", function() { return Question3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event.service */ "./src/app/event.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





let Question3Component = class Question3Component {
    constructor(actRoute, eveSer, router) {
        this.actRoute = actRoute;
        this.eveSer = eveSer;
        this.router = router;
        this.check = false;
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            let obj = params;
            this.id = params.id;
        });
        this.eveSer.getScore().subscribe(success => {
            this.protoparticipant = success;
            console.log(success);
        }, error => {
            console.log(error);
        });
        // this.keyboard();
    }
    // keyboard() {
    //   document.addEventListener('contextmenu',event=> event.preventDefault());
    //   document.addEventListener('keydown', function(e) {
    //     if(e.which === 91||e.which === 122||e.which === 73||e.which === 67||e.which === 123) {
    //       // e.keydown = 0;
    //        e.returnValue = false;
    //        return false;
    //      }
    //   });
    // }
    validate() {
        var x = document.getElementById("answer").value;
        if (x.toLowerCase() === "silence") {
            this.check = true;
        }
        else {
            this.check = false;
        }
        // console.log(this.check);
        var i;
        for (i = 0; i < this.protoparticipant.length; i++) {
            // console.log(this.protoparticipant[i].id);
            if (this.id === this.protoparticipant[i].id) {
                this.currparticipant = this.protoparticipant[i].data;
            }
        }
        let obj = { 'score': 0 };
        // obj.firstplayer = this.currparticipant.firstplayer;
        // obj.secondplayer = this.currparticipant.secondplayer;
        // obj.number = this.currparticipant.number;
        // obj.email = this.currparticipant.email;
        if (this.check === true) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("HINT: r b");
            // console.log("true and navigate");
            // let score = 5;
            obj.score = 5;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        else {
            // console.log("fasle and error");
            // let score = 0;
            obj.score = 0;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        obj.score = this.currparticipant.score + obj.score;
        console.log(obj.score);
        this.eveSer.addScore(this.id, obj).then(success => {
            console.log(success);
        }).catch(error => { console.log(error); });
        this.router.navigate(["/round2/question4"], {
            queryParams: {
                id: this.id
            }
        });
    }
};
Question3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question3',
        template: __webpack_require__(/*! ./question3.component.html */ "./src/app/round2/question3/question3.component.html"),
        styles: [__webpack_require__(/*! ./question3.component.css */ "./src/app/round2/question3/question3.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Question3Component);



/***/ }),

/***/ "./src/app/round2/question4/question4.component.css":
/*!**********************************************************!*\
  !*** ./src/app/round2/question4/question4.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 100px;\r\n    height: 350px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\ninput[type=text] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid purple;\r\n    border-radius: 4px;\r\n    background: transparent;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: purple;\r\n    border: none;\r\n    color: black;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: blueviolet;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    background: url(http://www.shukatsu-note.com/wp-content/uploads/2014/12/computer-564136_1280.jpg) no-repeat;\r\n    background-size: cover;\r\n    height: 100vh;\r\n  }\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n    color: #06D85F;\r\n    margin: 80px 0;\r\n  }\r\n\r\n.box {\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    background: rgba(255,255,255,0.2);\r\n    padding: 35px;\r\n    border: 2px solid #fff;\r\n    border-radius: 20px/50px;\r\n    background-clip: padding-box;\r\n    text-align: center;\r\n  }\r\n\r\n.button {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n  }\r\n\r\n.button:hover {\r\n    background: #06D85F;\r\n  }\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    transition: opacity 500ms;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n\r\n.overlay:target {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n.popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n\r\n.popup h2 {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n\r\n.popup .close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: #333;\r\n  }\r\n\r\n.popup .close:hover {\r\n    color: #06D85F;\r\n  }\r\n\r\n.popup .content {\r\n    max-height: 30%;\r\n    overflow: auto;\r\n  }\r\n\r\n@media screen and (max-width: 700px){\r\n    .box{\r\n      width: 70%;\r\n    }\r\n    .popup{\r\n      width: 70%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91bmQyL3F1ZXN0aW9uNC9xdWVzdGlvbjQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSw0REFBNEQ7O0FBQzVEO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMkdBQTJHO0lBQzNHLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxjQUFjO0VBQ2hCOztBQUNBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0FBRUE7SUFDRTtNQUNFLFVBQVU7SUFDWjtJQUNBO01BQ0UsVUFBVTtJQUNaO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9yb3VuZDIvcXVlc3Rpb240L3F1ZXN0aW9uNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdHdvIGVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbi5jb2x1bW4ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcblxyXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cclxuLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwOi8vd3d3LnNodWthdHN1LW5vdGUuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzEyL2NvbXB1dGVyLTU2NDEzNl8xMjgwLmpwZykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwNkQ4NUY7XHJcbiAgICBtYXJnaW46IDgwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDZEODVGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5vdmVybGF5OnRhcmdldCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwIHtcclxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAucG9wdXAgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5wb3B1cCAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAucG9wdXAgLmNsb3NlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDZEODVGO1xyXG4gIH1cclxuICAucG9wdXAgLmNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMzAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC5ib3h7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAucG9wdXB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/round2/question4/question4.component.html":
/*!***********************************************************!*\
  !*** ./src/app/round2/question4/question4.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html> \r\n<html>\r\n    <head>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    </head> \r\n    <body style=\"background-color:black;\">\r\n        <div class=\"row\">\r\n            <div class=\"column\" >\r\n                <img src=\"assets/img/q4.jpg\" width=\"600\">\r\n            </div>\r\n            <div class=\"column\">\r\n                <font color=\"white\"><h2>Decipher the given sentence using the given chart<br>Sentence: viqz vgkr iql yoct stzztkl wxz tgxfrl soat oz gfsn iql gft?  \r\n                    </h2>\r\n                    <p><b>Answer: </b></p></font><input type=\"text\" id=\"answer\">\r\n                    <button (click)=\"validate()\"><b>Submit</b></button>\r\n            </div>\r\n        </div> \r\n    </body> \r\n</html>\r\n"

/***/ }),

/***/ "./src/app/round2/question4/question4.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/round2/question4/question4.component.ts ***!
  \*********************************************************/
/*! exports provided: Question4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question4Component", function() { return Question4Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event.service */ "./src/app/event.service.ts");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_4__);





let Question4Component = class Question4Component {
    constructor(actRoute, eveSer, router) {
        this.actRoute = actRoute;
        this.eveSer = eveSer;
        this.router = router;
        this.check = false;
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            let obj = params;
            this.id = params.id;
        });
        this.eveSer.getScore().subscribe(success => {
            this.protoparticipant = success;
            console.log(success);
        }, error => {
            console.log(error);
        });
    }
    validate() {
        var x = document.getElementById("answer").value;
        if (x.toLowerCase() === "queue") {
            this.check = true;
        }
        else {
            this.check = false;
        }
        // console.log(this.check);
        var i;
        for (i = 0; i < this.protoparticipant.length; i++) {
            // console.log(this.protoparticipant[i].id);
            if (this.id === this.protoparticipant[i].id) {
                this.currparticipant = this.protoparticipant[i].data;
            }
        }
        let obj = { 'score': 0 };
        // obj.firstplayer = this.currparticipant.firstplayer;
        // obj.secondplayer = this.currparticipant.secondplayer;
        // obj.number = this.currparticipant.number;
        // obj.email = this.currparticipant.email;
        if (this.check === true) {
            sweetalert__WEBPACK_IMPORTED_MODULE_4___default()("HINT: W");
            // console.log("true and navigate");
            // let score = 5;
            obj.score = 5;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        else {
            // console.log("fasle and error");
            // let score = 0;
            obj.score = 0;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        obj.score = this.currparticipant.score + obj.score;
        console.log(obj.score);
        this.eveSer.addScore(this.id, obj).then(success => {
            console.log(success);
        }).catch(error => { console.log(error); });
        this.router.navigate(["/round2/question5"], {
            queryParams: {
                id: this.id
            }
        });
    }
};
Question4Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question4',
        template: __webpack_require__(/*! ./question4.component.html */ "./src/app/round2/question4/question4.component.html"),
        styles: [__webpack_require__(/*! ./question4.component.css */ "./src/app/round2/question4/question4.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Question4Component);



/***/ }),

/***/ "./src/app/round2/question5/question5.component.css":
/*!**********************************************************!*\
  !*** ./src/app/round2/question5/question5.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Create two equal columns that floats next to each other */\r\n\r\n.column {\r\n    float: left;\r\n    width: 50%;\r\n    padding: 100px;\r\n    height: 350px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n\r\ninput[type=text] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    box-sizing: border-box;\r\n    border: 2px solid red;\r\n    border-radius: 4px;\r\n    background: transparent;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    background-color: red;\r\n    border: none;\r\n    color: white;\r\n    padding: 20px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    border-radius: 8px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: darkred;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    background-size: cover;\r\n    height: 100vh;\r\n  }\r\n\r\nh1 {\r\n    text-align: center;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n    color: #06D85F;\r\n    margin: 80px 0;\r\n  }\r\n\r\n.box {\r\n    width: 40%;\r\n    margin: 0 auto;\r\n    background: rgba(255,255,255,0.2);\r\n    padding: 35px;\r\n    border: 2px solid #fff;\r\n    border-radius: 20px/50px;\r\n    background-clip: padding-box;\r\n    text-align: center;\r\n  }\r\n\r\n.button {\r\n    font-size: 1em;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border: 2px solid #06D85F;\r\n    border-radius: 20px/50px;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease-out;\r\n  }\r\n\r\n.button:hover {\r\n    background: #06D85F;\r\n  }\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: rgba(0, 0, 0, 0.7);\r\n    transition: opacity 500ms;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n  }\r\n\r\n.overlay:target {\r\n    visibility: visible;\r\n    opacity: 1;\r\n  }\r\n\r\n.popup {\r\n    margin: 70px auto;\r\n    padding: 20px;\r\n    background: #fff;\r\n    border-radius: 5px;\r\n    width: 30%;\r\n    position: relative;\r\n    transition: all 5s ease-in-out;\r\n  }\r\n\r\n.popup h2 {\r\n    margin-top: 0;\r\n    color: #333;\r\n    font-family: Tahoma, Arial, sans-serif;\r\n  }\r\n\r\n.popup .close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 30px;\r\n    transition: all 200ms;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    color: #333;\r\n  }\r\n\r\n.popup .close:hover {\r\n    color: #06D85F;\r\n  }\r\n\r\n.popup .content {\r\n    max-height: 30%;\r\n    overflow: auto;\r\n  }\r\n\r\n@media screen and (max-width: 700px){\r\n    .box{\r\n      width: 70%;\r\n    }\r\n    .popup{\r\n      width: 70%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91bmQyL3F1ZXN0aW9uNS9xdWVzdGlvbjUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQSw0REFBNEQ7O0FBQzVEO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsY0FBYztJQUNkLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDZCQUE2QjtFQUMvQjs7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsc0NBQXNDO0VBQ3hDOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7QUFDQTtJQUNFLGNBQWM7RUFDaEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3JvdW5kMi9xdWVzdGlvbjUvcXVlc3Rpb241LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIENyZWF0ZSB0d28gZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMDBweDtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIGgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICMwNkQ4NUY7XHJcbiAgICBtYXJnaW46IDgwcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDZEODVGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweC81MHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5idXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA2RDg1RjtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcztcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIC5vdmVybGF5OnRhcmdldCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLnBvcHVwIHtcclxuICAgIG1hcmdpbjogNzBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDVzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAucG9wdXAgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5wb3B1cCAuY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjAwbXM7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAucG9wdXAgLmNsb3NlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDZEODVGO1xyXG4gIH1cclxuICAucG9wdXAgLmNvbnRlbnQge1xyXG4gICAgbWF4LWhlaWdodDogMzAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC5ib3h7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAucG9wdXB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/round2/question5/question5.component.html":
/*!***********************************************************!*\
  !*** ./src/app/round2/question5/question5.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html> \r\n<html>\r\n    <head>\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    </head> \r\n    <body style=\"background-color:black;\">\r\n        <div class=\"row\">\r\n            <div class=\"column\" >\r\n                <img src=\"assets/img/r2q5.jpg\" width=\"600\">\r\n            </div>\r\n            <div class=\"column\">\r\n                <font color=\"white\"><h2>To solve the following riddle use the alphabets that you noted to form two words and complete the the sentence below.<br>Find the __________ under a big ___ in cse department.    \r\n                    </h2>\r\n                    <p><b>Answer: </b></p></font><input type=\"text\" id=\"answer\">\r\n                    <button (click)=\"validate()\"><b>Submit</b></button>\r\n            </div>\r\n        </div> \r\n    </body> \r\n</html>\r\n"

/***/ }),

/***/ "./src/app/round2/question5/question5.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/round2/question5/question5.component.ts ***!
  \*********************************************************/
/*! exports provided: Question5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question5Component", function() { return Question5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/event.service */ "./src/app/event.service.ts");




let Question5Component = class Question5Component {
    constructor(actRoute, eveSer, router) {
        this.actRoute = actRoute;
        this.eveSer = eveSer;
        this.router = router;
        this.check = false;
    }
    ngOnInit() {
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            let obj = params;
            this.id = params.id;
        });
        this.eveSer.getScore().subscribe(success => {
            this.protoparticipant = success;
            console.log(success);
        }, error => {
            console.log(error);
        });
        this.keyboard();
    }
    keyboard() {
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.addEventListener('keydown', function (e) {
            if (e.which === 91 || e.which === 122 || e.which === 73 || e.which === 67 || e.which === 123) {
                // e.keydown = 0;
                e.returnValue = false;
                return false;
            }
        });
    }
    validate() {
        var x = document.getElementById("answer").value;
        if (x.toLowerCase() === "wheat") {
            this.check = true;
        }
        else {
            this.check = false;
        }
        // console.log(this.check);
        var i;
        for (i = 0; i < this.protoparticipant.length; i++) {
            // console.log(this.protoparticipant[i].id);
            if (this.id === this.protoparticipant[i].id) {
                this.currparticipant = this.protoparticipant[i].data;
            }
        }
        let obj = { 'score': 0 };
        // obj.firstplayer = this.currparticipant.firstplayer;
        // obj.secondplayer = this.currparticipant.secondplayer;
        // obj.number = this.currparticipant.number;
        // obj.email = this.currparticipant.email;
        if (this.check === true) {
            // ("HINT: e l");
            // console.log("true and navigate");
            // let score = 5;
            obj.score = 5;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        else {
            // console.log("fasle and error");
            // let score = 0;
            obj.score = 0;
            // console.log(obj);
            // this.eveSer.addScore(this.id, obj);
        }
        obj.score = this.currparticipant.score + obj.score;
        console.log(obj.score);
        this.eveSer.addScore(this.id, obj).then(success => {
            console.log(success);
        }).catch(error => { console.log(error); });
        this.router.navigate(["/rover"], {
            queryParams: {
                id: this.id
            }
        });
    }
};
Question5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question5',
        template: __webpack_require__(/*! ./question5.component.html */ "./src/app/round2/question5/question5.component.html"),
        styles: [__webpack_require__(/*! ./question5.component.css */ "./src/app/round2/question5/question5.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], Question5Component);



/***/ }),

/***/ "./src/app/round2/round2.module.ts":
/*!*****************************************!*\
  !*** ./src/app/round2/round2.module.ts ***!
  \*****************************************/
/*! exports provided: Round2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Round2Module", function() { return Round2Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _question1_question1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./question1/question1.component */ "./src/app/round2/question1/question1.component.ts");
/* harmony import */ var _question2_question2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question2/question2.component */ "./src/app/round2/question2/question2.component.ts");
/* harmony import */ var _question3_question3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question3/question3.component */ "./src/app/round2/question3/question3.component.ts");
/* harmony import */ var _question4_question4_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question4/question4.component */ "./src/app/round2/question4/question4.component.ts");
/* harmony import */ var _question5_question5_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question5/question5.component */ "./src/app/round2/question5/question5.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/round2/login/login.component.ts");
/* harmony import */ var _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gameover/gameover.component */ "./src/app/round2/gameover/gameover.component.ts");












const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'question1',
        component: _question1_question1_component__WEBPACK_IMPORTED_MODULE_3__["Question1Component"]
    },
    {
        path: 'question2',
        component: _question2_question2_component__WEBPACK_IMPORTED_MODULE_4__["Question2Component"]
    },
    {
        path: 'question3',
        component: _question3_question3_component__WEBPACK_IMPORTED_MODULE_5__["Question3Component"]
    },
    {
        path: 'question4',
        component: _question4_question4_component__WEBPACK_IMPORTED_MODULE_6__["Question4Component"]
    },
    {
        path: 'question5',
        component: _question5_question5_component__WEBPACK_IMPORTED_MODULE_7__["Question5Component"]
    },
    {
        path: 'gameover',
        component: _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_11__["GameoverComponent"]
    },
    { path: '**', redirectTo: 'login' }
];
let Round2Module = class Round2Module {
};
Round2Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_question1_question1_component__WEBPACK_IMPORTED_MODULE_3__["Question1Component"], _question2_question2_component__WEBPACK_IMPORTED_MODULE_4__["Question2Component"], _question3_question3_component__WEBPACK_IMPORTED_MODULE_5__["Question3Component"], _question4_question4_component__WEBPACK_IMPORTED_MODULE_6__["Question4Component"], _question5_question5_component__WEBPACK_IMPORTED_MODULE_7__["Question5Component"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _gameover_gameover_component__WEBPACK_IMPORTED_MODULE_11__["GameoverComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes)
        ]
    })
], Round2Module);



/***/ })

}]);
//# sourceMappingURL=round2-round2-module.js.map