(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n<app-chatbot></app-chatbot>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chatbot.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chatbot.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id ='chatbot' class='chatbot' opened='false'>\r\n\r\n  <div class='top-bar'>\r\n    <p class='vertical-center'>BOT-Ryan (About me)</p>\r\n  </div>\r\n\r\n  <div class='chat' id='chat' #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\r\n    <ng-container *ngFor=\"let message of messages\">\r\n      <div class=\"message\" [ngClass]=\"{ 'from': message.sender === 'bot', 'to': message.sender === 'user'}\">\r\n        <div *ngIf=\"message.sender === 'user'\">\r\n          <p class='user'>{{message.content}}</p>\r\n        </div>\r\n        <div *ngIf=\"message.sender === 'bot'\">\r\n          <p class='bot'>{{message.content}}</p>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class='messagebox'>\r\n    <input id=\"chatbot-input\" (keyup.enter)=\"sendMessage()\" type=\"text\" placeholder=\"Your Message\" class=\"form-control chatbot-input\">\r\n    <button type=\"button\" id=\"chatbot-button\" class='btn btn-primary chatbot-sendbutton' (click)=\"sendMessage()\">Send</button>\r\n  </div>\r\n</div>\r\n\r\n<div class='chatbot-button' id='chatbot-button'>\r\n  <button id=\"chatbutton\" (click)=\"hideChat()\" type=\"button\" class=\"btn btn-primary btn-circle btn-xl waggle\"><img id=\"chatbubble\" src='./../../assets/{{picture}}.png'></button>\r\n</div>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/example.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/example/example.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='container'>\n  <div class='content row'>\n\n\n    <div class=\"col-md-12\">\n      <h1 class=\"heading\">Examples</h1>\n      <p>Below are some personal projects which I have done in JavaScript. Click on  the image to get be taken to a demo!</p>\n      <br>\n    </div>\n\n    <div class=\"col-md-12\">\n      <h1 class=\"heading\">Fireworks</h1>\n      <a href=\"/examples/fireworks\">\n        <img src=\"../../assets/fireworks.png\" class=\"responsive\">\n      </a>\n      <br>\n      <br>\n      <br>\n    </div>\n\n\n\n    <div class=\"col-md-12\">\n      <h1 class=\"heading\">Matrix Effect</h1>\n      <a href=\"/examples/matrix\">\n        <img src=\"../../assets/matrix.png\" class=\"responsive\">\n      </a>\n      <br>\n      <br>\n      <br>\n    </div>\n\n\n\n    <div class=\"col-md-12\">\n      <h1 class=\"heading\">Flow Field with Perlin Noise and Seperation</h1>\n      <a href=\"/examples/flowfield\">\n        <img src=\"../../assets/flowfield.png\" class=\"responsive\">\n      </a>\n      <br>\n      <br>\n      <br>\n    </div>\n\n\n    <div class=\"col-md-12\">\n      <h1 class=\"heading\">Marching Squares</h1>\n      <a href=\"/examples/marchingsquares\">\n        <img src=\"../../assets/marchingsquares.png\" class=\"responsive\">\n      </a>\n      <br>\n      <br>\n      <br>\n    </div>\n\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/firework/firework.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/firework/firework.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"center\" id=\"sketch-holder\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flowfield/flowfield.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flowfield/flowfield.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"center\" id=\"sketch-holder\"></div>\n<p>Improved Distance function for seperation to make simualtion run quicker</p>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id='mainContainer'>\r\n  <div id='splashContainer'>\r\n    <div class=\"header row\">\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-4 headshot\">\r\n          <img src=\"../../assets/ryan.png\" class=\"img-responsive\" id=\"headshot\" alt=\"Responsive image\">\r\n      </div>\r\n      <div class=\"col-md-7 name\">\r\n          <h1 class='title'>Hey, I'm Ryan.</h1>\r\n          <div class=\"typing\">\r\n              <span id=\"typingAnimation\"></span><span id=\"typed-cursor\">|</span>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div id='container'>\r\n    <div class='content row'>\r\n\r\n\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"heading\">About Me</h1>\r\n        <p>I am a 4th year <a href=\"https://carleton.ca/scs/\">Carleton Computer Science</a> student. I've always been interested in technology, and keeping up with the\r\n          newest trends. I have a strong interest in IT security, cryptography, and fullstack development.</p>\r\n        <br>\r\n        <p>Learning is an essential part of any job. I try to learn new skills any oppurtunity I get, even if they are difficult.</p>\r\n        <br>\r\n        <p>In my free time I like to ride mountain bikes, and work on my car. I enjoy developing scripts to help with my day to day life when I find the chance to.\r\n          I find that creating things from your own ideas results in the best learning experiences as you are developing from start to finish.\r\n        </p>\r\n        <br>\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"heading\">Code</h1>\r\n        <p>Samples of my code can be seen on my <a href=\"https://github.com/ryanabaker\">GitHub</a></p>\r\n        <p><a href=\"/examples\">Here</a> are some interative examples using <a href=\"https://p5js.org/\">P5JS</a> that I have written!</p>\r\n        <br>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"col-md-12 resume\">\r\n        <h1 class=\"heading\">Resume</h1>\r\n        <a href=\"../../assets/Ryan Baker.pdf\">\r\n          <img src=\"../../assets/resume.png\" class=\"img-responsive\" id=\"resume\" alt=\"Responsive image\">\r\n        </a>\r\n        <br>\r\n        <br>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-md-12\">\r\n        <h1 class=\"heading\">Contact</h1>\r\n\r\n        <img src='../../assets/smartphone.png' class='tinyimg'><p>(613)-410-7926 </p>\r\n        <img src='../../assets/mail.png' class='tinyimg'><p>ryanabaker@gmail.com</p>\r\n        <img src='../../assets/pin.png' class='tinyimg'><p>Ottawa, ON, Canada</p>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/marchingsquares/marchingsquares.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marchingsquares/marchingsquares.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"center\" id=\"sketch-holder\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/matrix/matrix.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/matrix/matrix.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\" id=\"sketch-holder\"></div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _firework_firework_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./firework/firework.component */ "./src/app/firework/firework.component.ts");
/* harmony import */ var _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matrix/matrix.component */ "./src/app/matrix/matrix.component.ts");
/* harmony import */ var _flowfield_flowfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./flowfield/flowfield.component */ "./src/app/flowfield/flowfield.component.ts");
/* harmony import */ var _marchingsquares_marchingsquares_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marchingsquares/marchingsquares.component */ "./src/app/marchingsquares/marchingsquares.component.ts");









const routes = [
    { path: 'examples', component: _example_example_component__WEBPACK_IMPORTED_MODULE_4__["ExampleComponent"] },
    { path: 'examples/fireworks', component: _firework_firework_component__WEBPACK_IMPORTED_MODULE_5__["FireworkComponent"] },
    { path: 'examples/matrix', component: _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_6__["MatrixComponent"] },
    { path: 'examples/flowfield', component: _flowfield_flowfield_component__WEBPACK_IMPORTED_MODULE_7__["FlowfieldComponent"] },
    { path: 'examples/marchingsquares', component: _marchingsquares_marchingsquares_component__WEBPACK_IMPORTED_MODULE_8__["MarchingsquaresComponent"] },
    { path: '**', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
        this.title = 'Ryan Baker';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatbot/chatbot.component */ "./src/app/chatbot/chatbot.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _firework_firework_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./firework/firework.component */ "./src/app/firework/firework.component.ts");
/* harmony import */ var _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./matrix/matrix.component */ "./src/app/matrix/matrix.component.ts");
/* harmony import */ var _flowfield_flowfield_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flowfield/flowfield.component */ "./src/app/flowfield/flowfield.component.ts");
/* harmony import */ var _marchingsquares_marchingsquares_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marchingsquares/marchingsquares.component */ "./src/app/marchingsquares/marchingsquares.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
            _chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_6__["ChatbotComponent"],
            _example_example_component__WEBPACK_IMPORTED_MODULE_8__["ExampleComponent"],
            _firework_firework_component__WEBPACK_IMPORTED_MODULE_9__["FireworkComponent"],
            _matrix_matrix_component__WEBPACK_IMPORTED_MODULE_10__["MatrixComponent"],
            _flowfield_flowfield_component__WEBPACK_IMPORTED_MODULE_11__["FlowfieldComponent"],
            _marchingsquares_marchingsquares_component__WEBPACK_IMPORTED_MODULE_12__["MarchingsquaresComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chatbot/chatbot.component.scss":
/*!************************************************!*\
  !*** ./src/app/chatbot/chatbot.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chatbot {\n  z-index: 2147483000;\n  position: fixed;\n  bottom: 100px;\n  right: 20px;\n  width: 376px;\n  min-height: 250px;\n  max-height: 704px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;\n  opacity: 1;\n  height: calc(100% - 120px);\n  border-radius: 8px;\n  overflow: hidden;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  opacity: 1;\n  -webkit-transform: translate3d(0px, 0px, 0px) scale(1, 1);\n          transform: translate3d(0px, 0px, 0px) scale(1, 1);\n  -webkit-transition: opacity 0.2s ease-in, -webkit-transform 0.2s ease;\n  transition: opacity 0.2s ease-in, -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease, opacity 0.2s ease-in;\n  transition: transform 0.2s ease, opacity 0.2s ease-in, -webkit-transform 0.2s ease;\n}\n\n#chatbutton {\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n#chatbubble {\n  max-width: 48px;\n  max-height: 48px;\n  width: auto;\n  height: auto;\n}\n\n.chatbot[opened=false] {\n  -webkit-transform: translateX(25%) translateY(35%) scale(0.5, 0.5);\n          transform: translateX(25%) translateY(35%) scale(0.5, 0.5);\n  -webkit-transition: opacity 0.2s ease-in, height 0s ease 0.2s, -webkit-transform 0.2s ease;\n  transition: opacity 0.2s ease-in, height 0s ease 0.2s, -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease, opacity 0.2s ease-in, height 0s ease 0.2s;\n  transition: transform 0.2s ease, opacity 0.2s ease-in, height 0s ease 0.2s, -webkit-transform 0.2s ease;\n  opacity: 0;\n}\n\n.top-bar {\n  background-color: #d9d9d9;\n  width: 100%;\n  height: 5em;\n  border-bottom: 1px solid gray;\n}\n\n.vertical-center {\n  -ms-transform: translateY(-100%);\n  text-align: center;\n  font-weight: 750;\n  position: relative;\n  top: 30%;\n}\n\n.chat {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 1;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  padding: 10px;\n}\n\n.messagebox {\n  position: relative;\n  width: 100%;\n  bottom: 0px;\n  height: 4em;\n  background-color: #d9d9d9;\n  border-top: 1px solid gray;\n}\n\n.user {\n  margin-left: 10px;\n  background-color: RGBA(204, 204, 204, 0.5);\n  border-radius: 25px;\n  padding: 20px;\n  float: right;\n  border: 1px RGBA(204, 204, 204, 0.5);\n  max-width: 90%;\n  word-wrap: break-word;\n}\n\n.bot {\n  text-align: left;\n  margin-right: 10px;\n  background-color: RGBA(24, 207, 240, 0.5);\n  border-radius: 25px;\n  padding: 20px;\n  display: inline-block;\n  border: 1px RGBA(204, 204, 204, 0.5);\n  max-width: 90%;\n  word-wrap: break-word;\n}\n\n.chatbot-input {\n  width: 70%;\n  display: inline;\n  position: absolute;\n  margin-left: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n.chatbot-sendbutton {\n  width: 20%;\n  display: inline;\n  position: absolute;\n  margin-right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 0px;\n}\n\n.chatbot-button {\n  z-index: 2147483000;\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n\n.btn-circle.btn-sm {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  font-size: 8px;\n  text-align: center;\n}\n\n.btn-circle.btn-md {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.btn-circle.btn-xl {\n  width: 70px;\n  height: 70px;\n  border-radius: 35px;\n  font-size: 12px;\n  text-align: center;\n}\n\n.waggle {\n  -webkit-animation: waggle 10s 3s forwards ease-out;\n          animation: waggle 10s 3s forwards ease-out;\n}\n\n@-webkit-keyframes waggle {\n  0% {\n    -webkit-transform: none;\n            transform: none;\n  }\n  5% {\n    -webkit-transform: rotateZ(-20deg) scale(1.2);\n            transform: rotateZ(-20deg) scale(1.2);\n  }\n  6% {\n    -webkit-transform: rotateZ(25deg) scale(1.2);\n            transform: rotateZ(25deg) scale(1.2);\n  }\n  6.75% {\n    -webkit-transform: rotateZ(-15deg) scale(1.2);\n            transform: rotateZ(-15deg) scale(1.2);\n  }\n  7.5% {\n    -webkit-transform: rotateZ(15deg) scale(1.2);\n            transform: rotateZ(15deg) scale(1.2);\n  }\n  8.25% {\n    -webkit-transform: rotateZ(-12deg) scale(1.2);\n            transform: rotateZ(-12deg) scale(1.2);\n  }\n  8.5% {\n    -webkit-transform: rotateZ(0) scale(1.2);\n            transform: rotateZ(0) scale(1.2);\n  }\n  10.0% {\n    -webkit-transform: rotateZ(0) scale(1);\n            transform: rotateZ(0) scale(1);\n  }\n  100% {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes waggle {\n  0% {\n    -webkit-transform: none;\n            transform: none;\n  }\n  5% {\n    -webkit-transform: rotateZ(-20deg) scale(1.2);\n            transform: rotateZ(-20deg) scale(1.2);\n  }\n  6% {\n    -webkit-transform: rotateZ(25deg) scale(1.2);\n            transform: rotateZ(25deg) scale(1.2);\n  }\n  6.75% {\n    -webkit-transform: rotateZ(-15deg) scale(1.2);\n            transform: rotateZ(-15deg) scale(1.2);\n  }\n  7.5% {\n    -webkit-transform: rotateZ(15deg) scale(1.2);\n            transform: rotateZ(15deg) scale(1.2);\n  }\n  8.25% {\n    -webkit-transform: rotateZ(-12deg) scale(1.2);\n            transform: rotateZ(-12deg) scale(1.2);\n  }\n  8.5% {\n    -webkit-transform: rotateZ(0) scale(1.2);\n            transform: rotateZ(0) scale(1.2);\n  }\n  10.0% {\n    -webkit-transform: rotateZ(0) scale(1);\n            transform: rotateZ(0) scale(1);\n  }\n  100% {\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJvdC9DOlxcVXNlcnNcXFJ5YW5HYW1pbmdcXERvY3VtZW50c1xcR2l0SHViXFxaZW9saXRpYy5naXRodWIuaW8vc3JjXFxhcHBcXGNoYXRib3RcXGNoYXRib3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXRib3QvY2hhdGJvdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsY0FBQTtFQUVBLFVBQUE7RUFDQSx5REFBQTtVQUFBLGlEQUFBO0VBQ0EscUVBQUE7RUFBQSw2REFBQTtFQUFBLHFEQUFBO0VBQUEsa0ZBQUE7QUNBRjs7QURJQTtFQUNFLDJDQUFBO1VBQUEsbUNBQUE7QUNERjs7QURJQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkY7O0FES0E7RUFDRSxrRUFBQTtVQUFBLDBEQUFBO0VBQ0EsMEZBQUE7RUFBQSxrRkFBQTtFQUFBLDBFQUFBO0VBQUEsdUdBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNGRjs7QURLQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0ZGOztBREtBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0ZGOztBRE1BO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0hBOztBRE1BO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0hBOztBRE1BO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUVBLG1DQUFBO1VBQUEsMkJBQUE7QUNIRjs7QURNQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsVUFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGtEQUFBO1VBQUEsMENBQUE7QUNERjs7QURLQTtFQUNFO0lBQ0UsdUJBQUE7WUFBQSxlQUFBO0VDRkY7RURJQTtJQUNFLDZDQUFBO1lBQUEscUNBQUE7RUNGRjtFRElBO0lBQ0UsNENBQUE7WUFBQSxvQ0FBQTtFQ0ZGO0VESUE7SUFDRSw2Q0FBQTtZQUFBLHFDQUFBO0VDRkY7RURJQTtJQUNFLDRDQUFBO1lBQUEsb0NBQUE7RUNGRjtFRElBO0lBQ0UsNkNBQUE7WUFBQSxxQ0FBQTtFQ0ZGO0VESUE7SUFDRSx3Q0FBQTtZQUFBLGdDQUFBO0VDRkY7RURJQTtJQUNFLHNDQUFBO1lBQUEsOEJBQUE7RUNGRjtFRElBO0lBQ0UsdUJBQUE7WUFBQSxlQUFBO0VDRkY7QUFDRjs7QUR6QkE7RUFDRTtJQUNFLHVCQUFBO1lBQUEsZUFBQTtFQ0ZGO0VESUE7SUFDRSw2Q0FBQTtZQUFBLHFDQUFBO0VDRkY7RURJQTtJQUNFLDRDQUFBO1lBQUEsb0NBQUE7RUNGRjtFRElBO0lBQ0UsNkNBQUE7WUFBQSxxQ0FBQTtFQ0ZGO0VESUE7SUFDRSw0Q0FBQTtZQUFBLG9DQUFBO0VDRkY7RURJQTtJQUNFLDZDQUFBO1lBQUEscUNBQUE7RUNGRjtFRElBO0lBQ0Usd0NBQUE7WUFBQSxnQ0FBQTtFQ0ZGO0VESUE7SUFDRSxzQ0FBQTtZQUFBLDhCQUFBO0VDRkY7RURJQTtJQUNFLHVCQUFBO1lBQUEsZUFBQTtFQ0ZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jaGF0Ym90L2NoYXRib3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdGJvdCB7XHJcbiAgei1pbmRleDogMjE0NzQ4MzAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMDBweDtcclxuICByaWdodDogMjBweDtcclxuICB3aWR0aDogMzc2cHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LWhlaWdodDogNzA0cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggNXB4IDQwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpIHNjYWxlKDEsIDEpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIG9wYWNpdHkgMC4ycyBlYXNlLWluO1xyXG59XHJcblxyXG5cclxuI2NoYXRidXR0b24ge1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4jY2hhdGJ1YmJsZSB7XHJcblxyXG4gIG1heC13aWR0aDo0OHB4O1xyXG4gIG1heC1oZWlnaHQ6NDhweDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jaGF0Ym90W29wZW5lZD1cImZhbHNlXCJdIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKSB0cmFuc2xhdGVZKDM1JSkgc2NhbGUoMC41LCAwLjUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIG9wYWNpdHkgMC4ycyBlYXNlLWluLCBoZWlnaHQgMHMgZWFzZSAwLjJzO1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi50b3AtYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1ZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNzUwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDMwJTtcclxufVxyXG5cclxuLmNoYXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxIDE7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGhlaWdodDogNGVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcblxyXG4udXNlciB7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBSR0JBKDIwNCwgMjA0LCAyMDQsIDAuNSk7XHJcbmJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbnBhZGRpbmc6IDIwcHg7XHJcbmZsb2F0OiByaWdodDtcclxuYm9yZGVyOiAxcHggUkdCQSgyMDQsIDIwNCwgMjA0LCAwLjUpO1xyXG5tYXgtd2lkdGg6IDkwJTtcclxud29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uYm90IHtcclxudGV4dC1hbGlnbjogbGVmdDtcclxubWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBSR0JBKDI0LCAyMDcsIDI0MCwgMC41KTtcclxuYm9yZGVyLXJhZGl1czogMjVweDtcclxucGFkZGluZzogMjBweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5ib3JkZXI6IDFweCBSR0JBKDIwNCwgMjA0LCAyMDQsIDAuNSk7XHJcbm1heC13aWR0aDogOTAlO1xyXG53b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi5jaGF0Ym90LWlucHV0IHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgdG9wOiA1MCU7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5jaGF0Ym90LXNlbmRidXR0b257XHJcbiAgd2lkdGg6IDIwJTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0b3A6IDUwJTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICByaWdodDogMHB4XHJcbn1cclxuXHJcbi5jaGF0Ym90LWJ1dHRvbiB7XHJcbiAgei1pbmRleDogMjE0NzQ4MzAwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLWNpcmNsZS5idG4tc20ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLWNpcmNsZS5idG4tbWQge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJ0bi1jaXJjbGUuYnRuLXhsIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ud2FnZ2xlIHtcclxuICBhbmltYXRpb246IHdhZ2dsZSAxMHMgM3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIHdhZ2dsZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuICA1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTIwZGVnKSBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICA2JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMjVkZWcpIHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIDYuNzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTVkZWcpIHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIDcuNSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE1ZGVnKSBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICA4LjI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTEyZGVnKSBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICA4LjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKSBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICAxMC4wJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCkgc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiIsIi5jaGF0Ym90IHtcbiAgei1pbmRleDogMjE0NzQ4MzAwMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDEwMHB4O1xuICByaWdodDogMjBweDtcbiAgd2lkdGg6IDM3NnB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgbWF4LWhlaWdodDogNzA0cHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDVweCA0MHB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIGF1dG87XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgc2NhbGUoMSwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIG9wYWNpdHkgMC4ycyBlYXNlLWluO1xufVxuXG4jY2hhdGJ1dHRvbiB7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4jY2hhdGJ1YmJsZSB7XG4gIG1heC13aWR0aDogNDhweDtcbiAgbWF4LWhlaWdodDogNDhweDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNoYXRib3Rbb3BlbmVkPWZhbHNlXSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNSUpIHRyYW5zbGF0ZVkoMzUlKSBzY2FsZSgwLjUsIDAuNSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIG9wYWNpdHkgMC4ycyBlYXNlLWluLCBoZWlnaHQgMHMgZWFzZSAwLjJzO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udG9wLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi52ZXJ0aWNhbC1jZW50ZXIge1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzUwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzAlO1xufVxuXG4uY2hhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tZXNzYWdlYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogNGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkOWQ5O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcbn1cblxuLnVzZXIge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogUkdCQSgyMDQsIDIwNCwgMjA0LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogMXB4IFJHQkEoMjA0LCAyMDQsIDIwNCwgMC41KTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmJvdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogUkdCQSgyNCwgMjA3LCAyNDAsIDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggUkdCQSgyMDQsIDIwNCwgMjA0LCAwLjUpO1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2hhdGJvdC1pbnB1dCB7XG4gIHdpZHRoOiA3MCU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmNoYXRib3Qtc2VuZGJ1dHRvbiB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHRvcDogNTAlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5jaGF0Ym90LWJ1dHRvbiB7XG4gIHotaW5kZXg6IDIxNDc0ODMwMDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICByaWdodDogMjBweDtcbn1cblxuLmJ0bi1jaXJjbGUuYnRuLXNtIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1jaXJjbGUuYnRuLW1kIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG4tY2lyY2xlLmJ0bi14bCB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2FnZ2xlIHtcbiAgYW5pbWF0aW9uOiB3YWdnbGUgMTBzIDNzIGZvcndhcmRzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHdhZ2dsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMjBkZWcpIHNjYWxlKDEuMik7XG4gIH1cbiAgNiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigyNWRlZykgc2NhbGUoMS4yKTtcbiAgfVxuICA2Ljc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC0xNWRlZykgc2NhbGUoMS4yKTtcbiAgfVxuICA3LjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTVkZWcpIHNjYWxlKDEuMik7XG4gIH1cbiAgOC4yNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigtMTJkZWcpIHNjYWxlKDEuMik7XG4gIH1cbiAgOC41JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDApIHNjYWxlKDEuMik7XG4gIH1cbiAgMTAuMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwKSBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/chatbot/chatbot.component.ts":
/*!**********************************************!*\
  !*** ./src/app/chatbot/chatbot.component.ts ***!
  \**********************************************/
/*! exports provided: ChatbotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatbotComponent", function() { return ChatbotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message */ "./src/app/chatbot/message.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);





let ChatbotComponent = class ChatbotComponent {
    constructor(http) {
        this.http = http;
        this.messages = [];
        this.sessionId = uuid__WEBPACK_IMPORTED_MODULE_4__["v4"]();
        this.clicked = false;
        this.picture = 'chat';
    }
    ngOnInit() {
        // tslint:disable-next-line: max-line-length
        const message = new _message__WEBPACK_IMPORTED_MODULE_2__["Message"]('bot', 'Hey there! Welcome to my website. I am BOT-Ryan 🤖. I usually answer questions correctly, however sometimes I make mistakes. If I do not understand your question the first time, please phrase it differently and I will try and answer it the best I can!');
        this.messages.push(message);
        const messaget = new _message__WEBPACK_IMPORTED_MODULE_2__["Message"]('bot', 'If you are looking for a good starter question, may I recommend "What are your hobbies?"');
        this.messages.push(messaget);
        const that = this;
        const animation = document.getElementById('chatbutton');
        animation.addEventListener('animationiteration', function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const animation = document.getElementById('chatbutton');
                if (that.clicked) {
                    yield new Promise(resolve => setTimeout(resolve, 2000));
                    animation.style.animationPlayState = 'paused';
                }
            });
        }, false);
    }
    hideChat() {
        this.clicked = true;
        const element = document.getElementById('chatbot');
        if (element.getAttribute('opened') === 'true') {
            element.setAttribute('opened', 'false');
            this.picture = 'chat';
        }
        else {
            element.setAttribute('opened', 'true');
            this.picture = 'close';
        }
    }
    sendMessage() {
        const inputBox = document.getElementById('chatbot-input');
        const val = inputBox.value;
        if (val === '') {
            return;
        }
        const message = new _message__WEBPACK_IMPORTED_MODULE_2__["Message"]('user', val);
        this.messages.push(message);
        this.http.post(
        // tslint:disable-next-line: max-line-length
        'https://dialogflow.cloud.google.com/v1/integrations/messenger/webhook/d71f41cb-7a82-4edc-810e-c5c136612389/sessions/' + this.sessionId, {
            queryInput: { text: { text: val, languageCode: 'en' } }
        })
            .subscribe(res => {
            const message = new _message__WEBPACK_IMPORTED_MODULE_2__["Message"]('bot', res.queryResult.fulfillmentText);
            this.messages.push(message);
        });
        inputBox.value = '';
    }
};
ChatbotComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ChatbotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chatbot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chatbot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbot/chatbot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chatbot.component.scss */ "./src/app/chatbot/chatbot.component.scss")).default]
    })
], ChatbotComponent);



/***/ }),

/***/ "./src/app/chatbot/message.ts":
/*!************************************!*\
  !*** ./src/app/chatbot/message.ts ***!
  \************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Message {
    constructor(s, c) {
        this.sender = s;
        this.content = c;
    }
}


/***/ }),

/***/ "./src/app/example/example.component.scss":
/*!************************************************!*\
  !*** ./src/app/example/example.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Bitter:400,700);\n@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\n@import url(https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700);\np {\n  font-family: \"Bitter\", serif;\n  font-size: 20px;\n}\n.content {\n  padding-top: 70px;\n  padding-bottom: 40px;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  line-height: 30px;\n  color: #7b7b7b;\n}\n.heading {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  color: #007bff;\n  font-size: 45px;\n}\n.responsive {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\n  -webkit-transform: scale(0.95, 0.95);\n          transform: scale(0.95, 0.95);\n  max-width: 33vw;\n  max-height: 75vh;\n  width: auto;\n  height: auto;\n}\n.responsive:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9DOlxcVXNlcnNcXFJ5YW5HYW1pbmdcXERvY3VtZW50c1xcR2l0SHViXFxaZW9saXRpYy5naXRodWIuaW8vc3JjXFxhcHBcXGV4YW1wbGVcXGV4YW1wbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRUFBQTtBQUNBLHVFQUFBO0FBQ0Esa0ZBQUE7QUFJUjtFQUNFLDRCQUFBO0VBQ0UsZUFBQTtBQ0ZKO0FES0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNGRjtBREtBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRkY7QURLQTtFQUNFLHdDQUFBO0VBQUEsZ0NBQUE7RUFDQSw2RUFBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0ZGO0FES0E7RUFDRSw0RUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CaXR0ZXI6NDAwLDcwMCk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDApO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOjQwMCw3MDApO1xyXG5cclxuXHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJpdHRlclwiLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICM3YjdiN2I7XHJcbn1cclxuXHJcbi5oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbn1cclxuXHJcbi5yZXNwb25zaXZlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsMC45NSk7XHJcbiAgbWF4LXdpZHRoOjMzdnc7XHJcbiAgbWF4LWhlaWdodDo3NXZoO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnJlc3BvbnNpdmU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CaXR0ZXI6NDAwLDcwMCk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNzAwKTtcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0K0FsdGVybmF0ZXM6NDAwLDcwMCk7XG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiQml0dGVyXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM3YjdiN2I7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4ucmVzcG9uc2l2ZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcbiAgbWF4LXdpZHRoOiAzM3Z3O1xuICBtYXgtaGVpZ2h0OiA3NXZoO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVzcG9uc2l2ZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExampleComponent = class ExampleComponent {
    constructor() { }
    ngOnInit() {
    }
};
ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-example',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./example.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/example.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./example.component.scss */ "./src/app/example/example.component.scss")).default]
    })
], ExampleComponent);



/***/ }),

/***/ "./src/app/firework/firework.component.scss":
/*!**************************************************!*\
  !*** ./src/app/firework/firework.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcmV3b3JrL2ZpcmV3b3JrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/firework/firework.component.ts":
/*!************************************************!*\
  !*** ./src/app/firework/firework.component.ts ***!
  \************************************************/
/*! exports provided: FireworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireworkComponent", function() { return FireworkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firework */ "./src/app/firework/firework.ts");




let FireworkComponent = class FireworkComponent {
    constructor() { }
    ngOnInit() {
        this.createCanvas();
    }
    createCanvas() {
        this.p5 = new p5__WEBPACK_IMPORTED_MODULE_2__(this.sketch);
    }
    sketch(p) {
        p.preload = () => {
        };
        let fireworks = [];
        p.setup = () => {
            p.createCanvas(800, 400);
            p.colorMode(p.HSB);
            p.stroke(255);
            p.strokeWeight(4);
            p.background(0);
        };
        p.draw = () => {
            p.background(0, 0, 0, 0.25);
            if (fireworks.length <= 8) {
                if (p.random(1) < 0.05) {
                    fireworks.push(new _firework__WEBPACK_IMPORTED_MODULE_3__["Firework"](p, false));
                }
                if (p.random(1) < 0.005) {
                    fireworks.push(new _firework__WEBPACK_IMPORTED_MODULE_3__["Firework"](p, true));
                }
            }
            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].update();
                fireworks[i].show();
                if (fireworks[i].done()) {
                    fireworks.splice(i, 1);
                }
            }
        };
    }
};
FireworkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-firework',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./firework.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/firework/firework.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./firework.component.scss */ "./src/app/firework/firework.component.scss")).default]
    })
], FireworkComponent);



/***/ }),

/***/ "./src/app/firework/firework.ts":
/*!**************************************!*\
  !*** ./src/app/firework/firework.ts ***!
  \**************************************/
/*! exports provided: Firework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Firework", function() { return Firework; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./particle */ "./src/app/firework/particle.ts");


class Firework {
    constructor(p, flag) {
        this.exploded = false;
        this.particles = [];
        this.p = p;
        this.heartFlag = flag;
        this.gravity = this.p.createVector(0, 0.2);
        this.firework = new _particle__WEBPACK_IMPORTED_MODULE_1__["Particle"](p, p.random(p.width), p.height, true, this.hu, this.heartFlag);
        this.hu = this.p.random(255);
    }
    update() {
        if (!this.exploded) {
            this.firework.update();
            this.firework.applyForce(this.gravity);
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (let i = this.particles.length - 1; i >= 0; i--) {
            this.particles[i].applyForce(this.gravity);
            this.particles[i].update();
            if (this.particles[i].done()) {
                this.particles.splice(i, 1);
            }
        }
    }
    done() {
        return this.exploded && this.particles.length === 0;
    }
    explode() {
        // "density" is here
        for (let i = 0; i < this.p.random(50, 100); i++) {
            this.particles.push(new _particle__WEBPACK_IMPORTED_MODULE_1__["Particle"](this.p, this.firework.pos.x, this.firework.pos.y, false, this.hu, this.heartFlag));
        }
    }
    show() {
        if (!this.exploded) {
            this.firework.show();
        }
        for (const particle of this.particles) {
            particle.show();
        }
    }
}


/***/ }),

/***/ "./src/app/firework/particle.ts":
/*!**************************************!*\
  !*** ./src/app/firework/particle.ts ***!
  \**************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);


class Particle {
    constructor(p, x, y, flag, hu, hFlag) {
        this.lifespan = 255;
        this.p = p;
        this.hu = hu;
        this.heartFlag = hFlag;
        this.fireworkFlag = flag;
        this.pos = this.p.createVector(x, y);
        if (this.fireworkFlag) {
            // height is here
            this.vel = this.p.createVector(this.p.random(-1, 1), this.p.random(-7, -12));
        }
        else {
            if (hFlag) {
                const i = this.p.random(0, 360);
                // do the shape of fireworks here
                // size is here
                const xVel = 16 * Math.pow(Math.sin(i), 3);
                const yVel = 13 * Math.cos(i) - 5 * Math.cos(2 * i) - 2 * Math.cos(3 * i) - Math.cos(4 * i);
                this.vel = this.p.createVector(xVel, -yVel);
                this.vel.mult(0.5);
            }
            else {
                this.vel = p5__WEBPACK_IMPORTED_MODULE_1__["Vector"].random2D();
                this.vel.mult(this.p.random(1, 6));
            }
        }
        this.acc = this.p.createVector(0, 0);
    }
    applyForce(force) {
        this.acc.add(force);
    }
    done() {
        return this.lifespan < 0;
    }
    update() {
        if (!this.fireworkFlag) {
            this.vel.mult(0.95);
            this.lifespan -= this.p.random(-1, 10);
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    show() {
        if (!this.fireworkFlag) {
            this.p.strokeWeight(2);
            this.p.stroke(this.hu, 255, 255, this.lifespan);
        }
        else {
            this.p.strokeWeight(4);
            this.p.stroke(this.hu, 255, 255);
        }
        this.p.point(this.pos.x, this.pos.y);
    }
}


/***/ }),

/***/ "./src/app/flowfield/flowfield.component.scss":
/*!****************************************************!*\
  !*** ./src/app/flowfield/flowfield.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zsb3dmaWVsZC9mbG93ZmllbGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/flowfield/flowfield.component.ts":
/*!**************************************************!*\
  !*** ./src/app/flowfield/flowfield.component.ts ***!
  \**************************************************/
/*! exports provided: FlowfieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowfieldComponent", function() { return FlowfieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./particle */ "./src/app/flowfield/particle.ts");




let FlowfieldComponent = class FlowfieldComponent {
    constructor() { }
    ngOnInit() {
        this.createCanvas();
    }
    createCanvas() {
        this.p5 = new p5__WEBPACK_IMPORTED_MODULE_2__(this.sketch);
    }
    sketch(p) {
        p.preload = () => {
        };
        const inc = 0.1;
        const scale = 20;
        let rows;
        let cols;
        let zoff = 0;
        let particles = [];
        let flowfield;
        let checkbox;
        let button;
        p.setup = () => {
            p.createCanvas(800, 800);
            p.background(255);
            cols = p.floor(p.width / scale);
            rows = p.floor(p.height / scale);
            checkbox = p.createCheckbox('Colored Mode', false);
            checkbox.changed(myCheckedEvent);
            button = p.createButton('Clear Page');
            button.mousePressed(myCheckedEventClear);
            flowfield = new Array(cols * rows);
            for (let i = 0; i < 1000; i++) {
                particles.push(new _particle__WEBPACK_IMPORTED_MODULE_3__["Particle"](p, cols, rows, scale));
            }
        };
        function myCheckedEvent() {
            if (this.checked()) {
                for (const particle of particles) {
                    particle.colFlag = true;
                }
                p.background(255);
            }
            else {
                for (const particle of particles) {
                    particle.colFlag = false;
                }
                p.background(255);
            }
        }
        function myCheckedEventClear() {
            p.background(255);
        }
        p.draw = () => {
            let yoff = 0;
            for (let y = 0; y < rows; y++) {
                let xoff = 0;
                for (let x = 0; x < cols; x++) {
                    const index = x + y * cols;
                    const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 2;
                    const v = p5__WEBPACK_IMPORTED_MODULE_2__["Vector"].fromAngle(angle);
                    flowfield[index] = v;
                    xoff += inc;
                }
                yoff += inc;
            }
            zoff += 0.01;
            for (const particle of particles) {
                particle.follow(flowfield);
                particle.seperation(particles);
                particle.update();
                particle.wrap();
                particle.show();
            }
        };
    }
};
FlowfieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flowfield',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flowfield.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flowfield/flowfield.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flowfield.component.scss */ "./src/app/flowfield/flowfield.component.scss")).default]
    })
], FlowfieldComponent);



/***/ }),

/***/ "./src/app/flowfield/particle.ts":
/*!***************************************!*\
  !*** ./src/app/flowfield/particle.ts ***!
  \***************************************/
/*! exports provided: Particle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_1__);


class Particle {
    constructor(p, c, r, s) {
        this.colFlag = false;
        this.p = p;
        this.cols = c;
        this.rows = r;
        this.scale = s;
        this.red = this.p.random(255); // r is a random number between 0 - 255
        this.green = this.p.random(255); // g is a random number betwen 100 - 200
        this.blue = this.p.random(255); // b is a random number between 0 - 100
        this.pos = this.p.createVector(p.random(p.width), p.random(p.height));
        this.vel = this.p.createVector(0, 0);
        this.acc = this.p.createVector(0, 0);
        this.prevPos = this.pos.copy();
    }
    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    follow(vectors) {
        const x = this.p.floor(this.pos.x / this.scale);
        const y = this.p.floor(this.pos.y / this.scale);
        const index = x + y * this.cols;
        this.applyForce(vectors[index]);
    }
    seperation(particles) {
        const perceptionRadius = 1;
        const steering = this.p.createVector();
        const total = 0;
        for (const particle of particles) {
            const d = this.dumbDistance(this.pos, particle.pos);
            if (particle !== this && d < perceptionRadius * perceptionRadius * 2) {
                const diff = p5__WEBPACK_IMPORTED_MODULE_1__["Vector"].sub(this.pos, particle.pos);
                diff.div(d);
                steering.add(diff);
            }
        }
        this.applyForce(steering);
    }
    dumbDistance(a, b) {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        return dx * dx + dy * dy;
    }
    applyForce(force) {
        this.acc.add(force);
        this.vel.limit(5);
    }
    show() {
        if (this.colFlag) {
            this.p.stroke(this.red, this.blue, this.green, 25);
        }
        else {
            this.p.stroke(0, 5);
        }
        this.p.strokeWeight(1);
        this.p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.updatePrev();
        // this.p.point(this.pos.x, this.pos.y);
    }
    updatePrev() {
        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;
    }
    wrap() {
        if (this.pos.x > this.p.width) {
            this.pos.x = 0;
            this.updatePrev();
        }
        else if (this.pos.x < 0) {
            this.pos.x = this.p.width;
            this.updatePrev();
        }
        else if (this.pos.y > this.p.height) {
            this.pos.y = 0;
            this.updatePrev();
        }
        else if (this.pos.y < 0) {
            this.pos.y = this.p.height;
            this.updatePrev();
        }
    }
}


/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Bitter:400,700);\n@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\n@import url(https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,700);\n@media screen and (max-width: 991px) {\n  /* line 19, scss/main.scss */\n  body .header {\n    margin-top: 25px;\n  }\n\n  /* line 23, scss/main.scss */\n  body #logo {\n    display: none;\n  }\n\n  /* line 27, scss/main.scss */\n  body .name {\n    margin-top: 25px;\n  }\n\n  /* line 31, scss/main.scss */\n  body .name h1 {\n    font-size: 40pt;\n  }\n\n  /* line 37, scss/main.scss */\n  body .content {\n    padding-right: 5px;\n    padding-left: 5px;\n    padding-top: 40px;\n  }\n}\n@media screen and (max-width: 500px) {\n  /* line 48, scss/main.scss */\n  body #main-container {\n    background-attachment: scroll;\n  }\n\n  /* line 52, scss/main.scss */\n  body .heading {\n    font-size: 32px;\n  }\n\n  /* line 56, scss/main.scss */\n  body #logo {\n    display: none;\n  }\n\n  /* line 60, scss/main.scss */\n  body .content {\n    padding-top: 25px;\n    font-size: 17px;\n  }\n\n  /* line 65, scss/main.scss */\n  body .footer {\n    font-size: 13px;\n  }\n\n  /* line 69, scss/main.scss */\n  body .logos {\n    font-size: 40px;\n  }\n}\n/* line 75, scss/main.scss */\n#main-container {\n  color: #007bff;\n  z-index: 0;\n}\n/* line 80, scss/main.scss */\nbody {\n  color: #7b7b7b;\n  font-family: \"Bitter\", serif;\n  font-size: 20px;\n}\n/* line 86, scss/main.scss */\n#splashContainer {\n  background: url('background.jpeg') no-repeat center center;\n  background-size: cover;\n  height: 100vh;\n  width: 100vw;\n  display: table-cell;\n  vertical-align: middle;\n}\n/* line 95, scss/main.scss */\n.typing {\n  max-width: 400px;\n  height: auto;\n  font-size: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center;\n  background-color: rgba(123, 123, 123, 0.2);\n  border-radius: 10px;\n  padding: 5px;\n}\n/* line 107, scss/main.scss */\n#typingAnimation {\n  color: #ffffff;\n}\n/* line 111, scss/main.scss */\n.header {\n  padding: 40px 15px;\n  height: auto;\n  margin: auto;\n}\n/* line 117, scss/main.scss */\n#headshot {\n  top: 0;\n  left: 0;\n  margin-left: auto;\n  margin-right: auto;\n  max-height: 300px;\n  border-radius: 50%;\n}\n/* line 127, scss/main.scss */\n.name {\n  max-height: 380px;\n  position: relative;\n  text-align: center;\n  margin-top: 90px;\n}\n/* line 134, scss/main.scss */\n.name h1 {\n  font-size: 50pt;\n  font-family: \"Montserrat Alternates\", sans-serif;\n  font-weight: bold;\n}\n.tinyimg {\n  max-width: 11%;\n  max-height: 11%;\n  float: left;\n  margin-right: 10px;\n}\np {\n  font-family: \"Bitter\", serif;\n  font-size: 20px;\n}\n/* line 145, scss/main.scss */\n.tagline p {\n  font-weight: 500;\n  font-size: 22px;\n  color: #7b7b7b;\n  font-family: \"Montserrat\", sans-serif;\n}\n/* line 152, scss/main.scss */\n.content {\n  padding-top: 70px;\n  padding-bottom: 40px;\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  line-height: 30px;\n  color: #7b7b7b;\n}\n/* line 186, scss/main.scss */\n.heading {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  color: #007bff;\n  font-size: 45px;\n}\n.title {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 600;\n  color: #ffffff;\n  font-size: 60px;\n}\n/* line 202, scss/main.scss */\n#typed-cursor {\n  opacity: 1;\n  font-weight: 100;\n  -webkit-animation: blink 1s infinite;\n  animation: blink 1s infinite;\n  color: #ffffff;\n}\n@keyframes blink {\n  /* line 213, scss/main.scss */\n  0% {\n    opacity: 1;\n  }\n  /* line 214, scss/main.scss */\n  50% {\n    opacity: 0;\n  }\n  /* line 215, scss/main.scss */\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes blink {\n  /* line 218, scss/main.scss */\n  0% {\n    opacity: 1;\n  }\n  /* line 219, scss/main.scss */\n  50% {\n    opacity: 0;\n  }\n  /* line 220, scss/main.scss */\n  100% {\n    opacity: 1;\n  }\n}\n.blog-posts {\n  display: -webkit-box;\n  display: flex;\n  margin: 20px 0;\n}\n.contact-icon {\n  width: 10px;\n  padding-right: 25px;\n}\n#resume {\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 10px 0 rgba(0, 0, 0, 0.19);\n  -webkit-transform: scale(0.95, 0.95);\n          transform: scale(0.95, 0.95);\n  max-width: 33vw;\n  max-height: 75vh;\n  width: auto;\n  height: auto;\n}\n#resume:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n}\n.pixels-photo img {\n  max-width: 100%;\n}\n.mobile {\n  display: none;\n}\n@media (max-width: 1100px) {\n  .mobile {\n    display: block;\n  }\n\n  .non-mobile {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXFJ5YW5HYW1pbmdcXERvY3VtZW50c1xcR2l0SHViXFxaZW9saXRpYy5naXRodWIuaW8vc3JjXFxhcHBcXG1haW5cXG1haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRUFBQTtBQUNBLHVFQUFBO0FBQ0Esa0ZBQUE7QUFDUjtFQUNFLDRCQUFBO0VBQ0E7SUFDRSxnQkFBQTtFQ0NGOztFRENBLDRCQUFBO0VBQ0E7SUFDRSxhQUFBO0VDRUY7O0VEQUEsNEJBQUE7RUFDQTtJQUNFLGdCQUFBO0VDR0Y7O0VEREEsNEJBQUE7RUFDQTtJQUNFLGVBQUE7RUNJRjs7RURGQSw0QkFBQTtFQUNBO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VDS0Y7QUFDRjtBREhBO0VBQ0UsNEJBQUE7RUFDQTtJQUNFLDZCQUFBO0VDS0Y7O0VESEEsNEJBQUE7RUFDQTtJQUNFLGVBQUE7RUNNRjs7RURKQSw0QkFBQTtFQUNBO0lBQ0UsYUFBQTtFQ09GOztFRExBLDRCQUFBO0VBQ0E7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUNRRjs7RUROQSw0QkFBQTtFQUNBO0lBQ0UsZUFBQTtFQ1NGOztFRFBBLDRCQUFBO0VBQ0E7SUFDRSxlQUFBO0VDVUY7QUFDRjtBRFJBLDRCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ1VGO0FEUEEsNEJBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUNVRjtBRFBBLDRCQUFBO0FBQ0E7RUFDRSwwREFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDVUY7QURQQSw0QkFBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDVUY7QURQQSw2QkFBQTtBQUNBO0VBQ0UsY0FBQTtBQ1VGO0FEUEEsNkJBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNVRjtBRFBBLDZCQUFBO0FBQ0E7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVUY7QURQQSw2QkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNVRjtBRFBBLDZCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtBQ1VGO0FEUEE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ1VGO0FEUEE7RUFDRSw0QkFBQTtFQUNFLGVBQUE7QUNVSjtBRFJBLDZCQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUNXRjtBRFJBLDZCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNXRjtBRFBBLDZCQUFBO0FBQ0E7RUFDRSxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNVRjtBRFBBO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDVUY7QUROQSw2QkFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFJQSw0QkFBQTtFQUNBLGNBQUE7QUNTRjtBRE5BO0VBQ0UsNkJBQUE7RUFDQTtJQUNFLFVBQUE7RUNTRjtFRE5BLDZCQUFBO0VBQ0E7SUFDRSxVQUFBO0VDUUY7RURMQSw2QkFBQTtFQUNBO0lBQ0UsVUFBQTtFQ09GO0FBQ0Y7QURKQTtFQUNFLDZCQUFBO0VBQ0E7SUFDRSxVQUFBO0VDTUY7RURIQSw2QkFBQTtFQUNBO0lBQ0UsVUFBQTtFQ0tGO0VERkEsNkJBQUE7RUFDQTtJQUNFLFVBQUE7RUNJRjtBQUNGO0FEZ0JBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtBQ0FGO0FER0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREdBO0VBQ0Usd0NBQUE7RUFBQSxnQ0FBQTtFQUNBLDZFQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7QURHQTtFQUNFLDRFQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0FGO0FER0E7RUFDRSxlQUFBO0FDQUY7QURHQTtFQUNFLGFBQUE7QUNBRjtBREdBO0VBQ0U7SUFDRSxjQUFBO0VDQUY7O0VERUE7SUFDRSxhQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CaXR0ZXI6NDAwLDcwMCk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjQwMCw3MDApO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOjQwMCw3MDApO1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC8qIGxpbmUgMTksIHNjc3MvbWFpbi5zY3NzICovXHJcbiAgYm9keSAuaGVhZGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgfVxyXG4gIC8qIGxpbmUgMjMsIHNjc3MvbWFpbi5zY3NzICovXHJcbiAgYm9keSAjbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAvKiBsaW5lIDI3LCBzY3NzL21haW4uc2NzcyAqL1xyXG4gIGJvZHkgLm5hbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICB9XHJcbiAgLyogbGluZSAzMSwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICBib2R5IC5uYW1lIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDBwdDtcclxuICB9XHJcbiAgLyogbGluZSAzNywgc2Nzcy9tYWluLnNjc3MgKi9cclxuICBib2R5IC5jb250ZW50IHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLyogbGluZSA0OCwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICBib2R5ICNtYWluLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcclxuICB9XHJcbiAgLyogbGluZSA1Miwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICBib2R5IC5oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICB9XHJcbiAgLyogbGluZSA1Niwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICBib2R5ICNsb2dvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC8qIGxpbmUgNjAsIHNjc3MvbWFpbi5zY3NzICovXHJcbiAgYm9keSAuY29udGVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgLyogbGluZSA2NSwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICBib2R5IC5mb290ZXIge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAvKiBsaW5lIDY5LCBzY3NzL21haW4uc2NzcyAqL1xyXG4gIGJvZHkgLmxvZ29zIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICB9XHJcbn1cclxuLyogbGluZSA3NSwgc2Nzcy9tYWluLnNjc3MgKi9cclxuI21haW4tY29udGFpbmVyIHtcclxuICBjb2xvcjogIzAwN2JmZjtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4vKiBsaW5lIDgwLCBzY3NzL21haW4uc2NzcyAqL1xyXG5ib2R5IHtcclxuICBjb2xvcjogIzdiN2I3YjtcclxuICBmb250LWZhbWlseTogXCJCaXR0ZXJcIiwgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4vKiBsaW5lIDg2LCBzY3NzL21haW4uc2NzcyAqL1xyXG4jc3BsYXNoQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGVnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiBsaW5lIDk1LCBzY3NzL21haW4uc2NzcyAqL1xyXG4udHlwaW5nIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMywgMTIzLCAxMjMsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi8qIGxpbmUgMTA3LCBzY3NzL21haW4uc2NzcyAqL1xyXG4jdHlwaW5nQW5pbWF0aW9uIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLyogbGluZSAxMTEsIHNjc3MvbWFpbi5zY3NzICovXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDQwcHggMTVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vKiBsaW5lIDExNywgc2Nzcy9tYWluLnNjc3MgKi9cclxuI2hlYWRzaG90IHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBsaW5lIDEyNywgc2Nzcy9tYWluLnNjc3MgKi9cclxuLm5hbWUge1xyXG4gIG1heC1oZWlnaHQ6IDM4MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogOTBweDtcclxufVxyXG5cclxuLyogbGluZSAxMzQsIHNjc3MvbWFpbi5zY3NzICovXHJcbi5uYW1lIGgxIHtcclxuICBmb250LXNpemU6IDUwcHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdCBBbHRlcm5hdGVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50aW55aW1ne1xyXG4gIG1heC13aWR0aDogMTElO1xyXG4gIG1heC1oZWlnaHQ6IDExJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQml0dGVyXCIsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi8qIGxpbmUgMTQ1LCBzY3NzL21haW4uc2NzcyAqL1xyXG4udGFnbGluZSBwIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogIzdiN2I3YjtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIGxpbmUgMTUyLCBzY3NzL21haW4uc2NzcyAqL1xyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiA3MDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBjb2xvcjogIzdiN2I3YjtcclxufVxyXG5cclxuXHJcbi8qIGxpbmUgMTg2LCBzY3NzL21haW4uc2NzcyAqL1xyXG4uaGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG59XHJcblxyXG5cclxuLyogbGluZSAyMDIsIHNjc3MvbWFpbi5zY3NzICovXHJcbiN0eXBlZC1jdXJzb3Ige1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMXMgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xyXG4gIC1tcy1hbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogYmxpbmsgMXMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgLyogbGluZSAyMTMsIHNjc3MvbWFpbi5zY3NzICovXHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC8qIGxpbmUgMjE0LCBzY3NzL21haW4uc2NzcyAqL1xyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgLyogbGluZSAyMTUsIHNjc3MvbWFpbi5zY3NzICovXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcclxuICAvKiBsaW5lIDIxOCwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLyogbGluZSAyMTksIHNjc3MvbWFpbi5zY3NzICovXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAvKiBsaW5lIDIyMCwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmxpbmsge1xyXG4gIC8qIGxpbmUgMjIzLCBzY3NzL21haW4uc2NzcyAqL1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAvKiBsaW5lIDIyNCwgc2Nzcy9tYWluLnNjc3MgKi9cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIC8qIGxpbmUgMjI1LCBzY3NzL21haW4uc2NzcyAqL1xyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbi5ibG9nLXBvc3RzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4uY29udGFjdC1pY29uIHtcclxuICB3aWR0aDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4jcmVzdW1lIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUsMC45NSk7XHJcbiAgbWF4LXdpZHRoOjMzdnc7XHJcbiAgbWF4LWhlaWdodDo3NXZoO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuI3Jlc3VtZTpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEsMSk7XHJcbn1cclxuXHJcbi5waXhlbHMtcGhvdG8gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAubW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAubm9uLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Qml0dGVyOjQwMCw3MDApO1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7XG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdCtBbHRlcm5hdGVzOjQwMCw3MDApO1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLyogbGluZSAxOSwgc2Nzcy9tYWluLnNjc3MgKi9cbiAgYm9keSAuaGVhZGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICB9XG5cbiAgLyogbGluZSAyMywgc2Nzcy9tYWluLnNjc3MgKi9cbiAgYm9keSAjbG9nbyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGxpbmUgMjcsIHNjc3MvbWFpbi5zY3NzICovXG4gIGJvZHkgLm5hbWUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cblxuICAvKiBsaW5lIDMxLCBzY3NzL21haW4uc2NzcyAqL1xuICBib2R5IC5uYW1lIGgxIHtcbiAgICBmb250LXNpemU6IDQwcHQ7XG4gIH1cblxuICAvKiBsaW5lIDM3LCBzY3NzL21haW4uc2NzcyAqL1xuICBib2R5IC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC8qIGxpbmUgNDgsIHNjc3MvbWFpbi5zY3NzICovXG4gIGJvZHkgI21haW4tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IHNjcm9sbDtcbiAgfVxuXG4gIC8qIGxpbmUgNTIsIHNjc3MvbWFpbi5zY3NzICovXG4gIGJvZHkgLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgfVxuXG4gIC8qIGxpbmUgNTYsIHNjc3MvbWFpbi5zY3NzICovXG4gIGJvZHkgI2xvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAvKiBsaW5lIDYwLCBzY3NzL21haW4uc2NzcyAqL1xuICBib2R5IC5jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICAvKiBsaW5lIDY1LCBzY3NzL21haW4uc2NzcyAqL1xuICBib2R5IC5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxuXG4gIC8qIGxpbmUgNjksIHNjc3MvbWFpbi5zY3NzICovXG4gIGJvZHkgLmxvZ29zIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbi8qIGxpbmUgNzUsIHNjc3MvbWFpbi5zY3NzICovXG4jbWFpbi1jb250YWluZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbiAgei1pbmRleDogMDtcbn1cblxuLyogbGluZSA4MCwgc2Nzcy9tYWluLnNjc3MgKi9cbmJvZHkge1xuICBjb2xvcjogIzdiN2I3YjtcbiAgZm9udC1mYW1pbHk6IFwiQml0dGVyXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIGxpbmUgODYsIHNjc3MvbWFpbi5zY3NzICovXG4jc3BsYXNoQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBlZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4vKiBsaW5lIDk1LCBzY3NzL21haW4uc2NzcyAqL1xuLnR5cGluZyB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIzLCAxMjMsIDEyMywgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4vKiBsaW5lIDEwNywgc2Nzcy9tYWluLnNjc3MgKi9cbiN0eXBpbmdBbmltYXRpb24ge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLyogbGluZSAxMTEsIHNjc3MvbWFpbi5zY3NzICovXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogNDBweCAxNXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLyogbGluZSAxMTcsIHNjc3MvbWFpbi5zY3NzICovXG4jaGVhZHNob3Qge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8qIGxpbmUgMTI3LCBzY3NzL21haW4uc2NzcyAqL1xuLm5hbWUge1xuICBtYXgtaGVpZ2h0OiAzODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG59XG5cbi8qIGxpbmUgMTM0LCBzY3NzL21haW4uc2NzcyAqL1xuLm5hbWUgaDEge1xuICBmb250LXNpemU6IDUwcHQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQgQWx0ZXJuYXRlc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRpbnlpbWcge1xuICBtYXgtd2lkdGg6IDExJTtcbiAgbWF4LWhlaWdodDogMTElO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiQml0dGVyXCIsIHNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIGxpbmUgMTQ1LCBzY3NzL21haW4uc2NzcyAqL1xuLnRhZ2xpbmUgcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICM3YjdiN2I7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLyogbGluZSAxNTIsIHNjc3MvbWFpbi5zY3NzICovXG4uY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjN2I3YjdiO1xufVxuXG4vKiBsaW5lIDE4Niwgc2Nzcy9tYWluLnNjc3MgKi9cbi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwN2JmZjtcbiAgZm9udC1zaXplOiA0NXB4O1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDYwcHg7XG59XG5cbi8qIGxpbmUgMjAyLCBzY3NzL21haW4uc2NzcyAqL1xuI3R5cGVkLWN1cnNvciB7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGluayAxcyBpbmZpbml0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAvKiBsaW5lIDIxMywgc2Nzcy9tYWluLnNjc3MgKi9cbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgLyogbGluZSAyMTQsIHNjc3MvbWFpbi5zY3NzICovXG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAvKiBsaW5lIDIxNSwgc2Nzcy9tYWluLnNjc3MgKi9cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgLyogbGluZSAyMTgsIHNjc3MvbWFpbi5zY3NzICovXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC8qIGxpbmUgMjE5LCBzY3NzL21haW4uc2NzcyAqL1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgLyogbGluZSAyMjAsIHNjc3MvbWFpbi5zY3NzICovXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBibGluayB7XG4gIC8qIGxpbmUgMjIzLCBzY3NzL21haW4uc2NzcyAqL1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAvKiBsaW5lIDIyNCwgc2Nzcy9tYWluLnNjc3MgKi9cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC8qIGxpbmUgMjI1LCBzY3NzL21haW4uc2NzcyAqL1xuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uYmxvZy1wb3N0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uY29udGFjdC1pY29uIHtcbiAgd2lkdGg6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbiNyZXN1bWUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSwgMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMC45NSk7XG4gIG1heC13aWR0aDogMzN2dztcbiAgbWF4LWhlaWdodDogNzV2aDtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn1cblxuI3Jlc3VtZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG59XG5cbi5waXhlbHMtcGhvdG8gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xuICAubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5ub24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainComponent = class MainComponent {
    constructor() {
        this.index = -1;
        this.array = ['Car enthusiast', 'Moutain biker', 'Computer science major', 'Buisness minor'];
    }
    typeWriter() {
        const element = document.getElementById('typingAnimation');
        this.startTimer(this.wordChoser(), element);
    }
    startTimer(word, element) {
        let counter = 0;
        this.interval = setInterval(() => {
            if (counter === word.length) {
                clearInterval(this.interval);
                this.pause(word, element);
            }
            else {
                element.innerHTML += word.charAt(counter);
                counter++;
            }
        }, 150);
    }
    pause(word, element) {
        let counter = 0;
        this.interval = setInterval(() => {
            if (counter === 1) {
                clearInterval(this.interval);
                this.erase(word, element);
            }
            else {
                counter++;
            }
        }, 1000);
    }
    erase(word, element) {
        let counter = 0;
        this.interval = setInterval(() => {
            if (counter === word.length) {
                clearInterval(this.interval);
                this.typeWriter();
            }
            else {
                let temp = element.innerHTML;
                temp = temp.substring(0, temp.length - 1);
                element.innerHTML = temp;
                counter++;
            }
        }, 90);
    }
    wordChoser() {
        this.index++;
        this.index = this.index % this.array.length;
        const word = this.array[this.index];
        return word;
    }
    ngOnInit() {
        this.typeWriter();
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")).default]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/marchingsquares/helper.ts":
/*!*******************************************!*\
  !*** ./src/app/marchingsquares/helper.ts ***!
  \*******************************************/
/*! exports provided: Helper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helper", function() { return Helper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Helper {
    constructor() {
    }
    // 1 is white
    // 0 is black
    static clean(map) {
        for (let x = 1; x < map.length - 1; x++) {
            for (let y = 1; y < map[x].length - 1; y++) {
                let counter = 0;
                // look at a 3x3 grid around yourself
                for (let i = x - 1; i <= x + 1; i++) {
                    for (let j = y - 1; j <= y + 1; j++) {
                        if (map[x][y] !== map[i][j]) {
                            if (map[x][y].val === map[i][j].val) {
                                counter++;
                            }
                        }
                    }
                }
                if (counter < 4) {
                    if (map[x][y].val === 0) {
                        map[x][y].val = 1;
                    }
                    else {
                        map[x][y].val = 0;
                    }
                }
            }
        }
        for (let x = 1; x < map.length - 1; x++) {
            for (let y = 1; y < map[x].length - 1; y++) {
                let counter = 0;
                // look at a 3x3 grid around yourself
                for (let i = x - 1; i <= x + 1; i++) {
                    for (let j = y - 1; j <= y + 1; j++) {
                        if (map[x][y] !== map[i][j]) {
                            if (map[x][y].val === map[i][j].val) {
                                counter++;
                            }
                        }
                    }
                }
                if (counter <= 2) {
                    if (map[x][y].val === 0) {
                        map[x][y].val = 1;
                    }
                    else {
                        map[x][y].val = 0;
                    }
                }
            }
        }
        return map;
    }
}


/***/ }),

/***/ "./src/app/marchingsquares/marchingsquares.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/marchingsquares/marchingsquares.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmNoaW5nc3F1YXJlcy9tYXJjaGluZ3NxdWFyZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/marchingsquares/marchingsquares.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/marchingsquares/marchingsquares.component.ts ***!
  \**************************************************************/
/*! exports provided: MarchingsquaresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarchingsquaresComponent", function() { return MarchingsquaresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ "./src/app/marchingsquares/helper.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./point */ "./src/app/marchingsquares/point.ts");





let MarchingsquaresComponent = class MarchingsquaresComponent {
    constructor() { }
    ngOnInit() {
        this.createCanvas();
    }
    createCanvas() {
        this.p5 = new p5__WEBPACK_IMPORTED_MODULE_2__(this.sketch);
    }
    sketch(p) {
        p.preload = () => {
        };
        const scale = 10;
        let rows;
        let cols;
        let field = [];
        let lines;
        let button;
        p.setup = () => {
            p.createCanvas(800, 800);
            rows = p.floor(p.height / scale);
            cols = p.floor(p.width / scale);
            button = p.createButton('New');
            button.mousePressed(clickEvent);
            for (let x = 0; x < cols; x++) {
                let tempArr = [];
                for (let y = 0; y < rows; y++) {
                    if (x === 0 || x === cols - 1 || y === 0 || y === rows - 1) {
                        tempArr.push(new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](0));
                    }
                    else {
                        tempArr.push(p.random(1) > 0.45 ? new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](1) : new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](0));
                    }
                }
                field.push(tempArr);
            }
            for (let i = 0; i < 10; i++) {
                _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].clean(field);
            }
        };
        function clickEvent() {
            let replacearr = [];
            for (let x = 0; x < cols; x++) {
                let tempArr = [];
                for (let y = 0; y < rows; y++) {
                    if (x === 0 || x === cols - 1 || y === 0 || y === rows - 1) {
                        tempArr.push(new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](0));
                    }
                    else {
                        tempArr.push(p.random(1) > 0.45 ? new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](1) : new _point__WEBPACK_IMPORTED_MODULE_4__["Point"](0));
                    }
                }
                replacearr.push(tempArr);
            }
            for (let i = 0; i < 10; i++) {
                _helper__WEBPACK_IMPORTED_MODULE_3__["Helper"].clean(replacearr);
            }
            field = replacearr;
        }
        p.draw = () => {
            p.background(127);
            p.strokeWeight(scale * 0.4);
            for (let i = 0; i < cols; i++) {
                let tempArr = field[i];
                for (let j = 0; j < rows; j++) {
                    p.stroke(tempArr[j].val * 255);
                    p.point(i * scale, j * scale);
                }
            }
            for (let i = 0; i < cols - 1; i++) {
                for (let j = 0; j < rows - 1; j++) {
                    const xVal = i * scale;
                    const yVal = j * scale;
                    const a = { x: xVal + scale * 0.5, y: yVal };
                    const b = { x: xVal + scale, y: yVal + scale * 0.5 };
                    const c = { x: xVal + scale * 0.5, y: yVal + scale };
                    const d = { x: xVal, y: yVal + scale * 0.5 };
                    const state = 8 * field[i][j].val + 4 * field[i + 1][j].val + 2 * field[i + 1][j + 1].val + field[i][j + 1].val;
                    p.strokeWeight(1);
                    p.stroke(255);
                    switch (state) {
                        case 1:
                            p.line(c.x, c.y, d.x, d.y);
                            break;
                        case 2:
                            p.line(b.x, b.y, c.x, c.y);
                            break;
                        case 3:
                            p.line(d.x, d.y, b.x, b.y);
                            break;
                        case 4:
                            p.line(a.x, a.y, b.x, b.y);
                            break;
                        case 5:
                            p.line(b.x, b.y, c.x, c.y);
                            p.line(a.x, a.y, d.x, d.y);
                            break;
                        case 6:
                            p.line(a.x, a.y, c.x, c.y);
                            break;
                        case 7:
                            p.line(a.x, a.y, d.x, d.y);
                            break;
                        case 8:
                            p.line(a.x, a.y, d.x, d.y);
                            break;
                        case 9:
                            p.line(a.x, a.y, c.x, c.y);
                            break;
                        case 10:
                            p.line(d.x, d.y, c.x, c.y);
                            p.line(a.x, a.y, b.x, b.y);
                            break;
                        case 11:
                            p.line(a.x, a.y, b.x, b.y);
                            break;
                        case 12:
                            p.line(d.x, d.y, b.x, b.y);
                            break;
                        case 13:
                            p.line(c.x, c.y, b.x, b.y);
                            break;
                        case 14:
                            p.line(c.x, c.y, d.x, d.y);
                            break;
                    }
                }
            }
        };
    }
};
MarchingsquaresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marchingsquares',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./marchingsquares.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/marchingsquares/marchingsquares.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./marchingsquares.component.scss */ "./src/app/marchingsquares/marchingsquares.component.scss")).default]
    })
], MarchingsquaresComponent);



/***/ }),

/***/ "./src/app/marchingsquares/point.ts":
/*!******************************************!*\
  !*** ./src/app/marchingsquares/point.ts ***!
  \******************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Point {
    constructor(v) {
        this.seen = false;
        this.val = v;
    }
    clean() {
    }
}


/***/ }),

/***/ "./src/app/matrix/matrix.component.scss":
/*!**********************************************!*\
  !*** ./src/app/matrix/matrix.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdHJpeC9tYXRyaXguY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/matrix/matrix.component.ts":
/*!********************************************!*\
  !*** ./src/app/matrix/matrix.component.ts ***!
  \********************************************/
/*! exports provided: MatrixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixComponent", function() { return MatrixComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream */ "./src/app/matrix/stream.ts");




let MatrixComponent = class MatrixComponent {
    constructor() { }
    ngOnInit() {
        this.createCanvas();
    }
    createCanvas() {
        this.p5 = new p5__WEBPACK_IMPORTED_MODULE_2__(this.sketch);
    }
    sketch(p) {
        p.preload = () => {
        };
        let streams = [];
        let fadeInterval = 1.6;
        let symbolSize = 18;
        p.setup = () => {
            p.createCanvas(800, 800);
            let x = 0;
            for (let i = 0; i <= p.width / symbolSize; i++) {
                let stream = new _stream__WEBPACK_IMPORTED_MODULE_3__["Stream"](p, fadeInterval, symbolSize);
                stream.generateSymbols(x, p.random(-2000, 0));
                streams.push(stream);
                x += symbolSize;
            }
            p.textFont('Consolas');
            p.textSize(symbolSize);
        };
        p.draw = () => {
            p.background(0, 150);
            streams.forEach(function (stream) {
                stream.render();
            });
        };
    }
};
MatrixComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matrix',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./matrix.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/matrix/matrix.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./matrix.component.scss */ "./src/app/matrix/matrix.component.scss")).default]
    })
], MatrixComponent);



/***/ }),

/***/ "./src/app/matrix/stream.ts":
/*!**********************************!*\
  !*** ./src/app/matrix/stream.ts ***!
  \**********************************/
/*! exports provided: Stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return Stream; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./symbol */ "./src/app/matrix/symbol.ts");


class Stream {
    constructor(p, fade, symbol) {
        this.p = p;
        this.fadeInterval = fade;
        this.symbolSize = symbol;
        this.symbols = [];
        this.totalSymbols = p.round(p.random(5, 35));
        this.speed = p.random(5, 22);
    }
    generateSymbols(x, y) {
        let opacity = 255;
        let first = this.p.round(this.p.random(0, 4)) === 1;
        for (let i = 0; i <= this.totalSymbols; i++) {
            let symbol = new _symbol__WEBPACK_IMPORTED_MODULE_1__["Symbol"](this.p, x, y, this.speed, first, opacity);
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            opacity -= (255 / this.totalSymbols) / this.fadeInterval;
            y -= this.symbolSize;
            first = false;
        }
    }
    render() {
        let $ = this;
        this.symbols.forEach(function (symbol) {
            if (symbol.first) {
                $.p.fill(140, 255, 170, symbol.opacity);
            }
            else {
                $.p.fill(0, 255, 70, symbol.opacity);
            }
            $.p.text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();
        });
    }
}


/***/ }),

/***/ "./src/app/matrix/symbol.ts":
/*!**********************************!*\
  !*** ./src/app/matrix/symbol.ts ***!
  \**********************************/
/*! exports provided: Symbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return Symbol; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Symbol {
    constructor(p, x, y, speed, first, opacity) {
        this.p = p;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.first = first;
        this.opacity = opacity;
        this.switchInterval = this.p.round(this.p.random(2, 25));
    }
    setToRandomSymbol() {
        const charType = this.p.round(this.p.random(0, 5));
        if (this.p.frameCount % this.switchInterval === 0) {
            if (charType > 1) {
                // set it to Katakana
                this.value = String.fromCharCode(0x0020 + this.p.floor(this.p.random(0, 95)));
            }
            else {
                // set it to numeric
                this.value = this.p.floor(this.p.random(0, 10));
            }
        }
    }
    rain() {
        this.y = (this.y >= this.p.height) ? 0 : this.y += this.speed;
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\RyanGaming\Documents\GitHub\Zeolitic.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map