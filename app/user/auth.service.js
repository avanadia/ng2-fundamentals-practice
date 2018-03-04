"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginUser = function (userName, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        // name of username property must be all lowercase
        var loginInfo = {
            username: userName,
            password: password
        };
        return this.http.post('api/login', JSON.stringify(loginInfo), options)["do"](function (resp) {
            if (resp) {
                _this.currentUser = resp.json().user;
            }
        })["catch"](function (error) {
            // if the login is unsuccessful, we get an observable of false
            return Rx_1.Observable.of(false);
        });
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.checkAuthenticationStatus = function () {
        var _this = this;
        return this.http.get('/api/currentIdentity').map(function (response) {
            if (response._body) {
                return response.json();
            }
            else {
                return {};
            }
        })["do"](function (currentUser) {
            if (!!currentUser.userName) {
                _this.currentUser = currentUser;
            }
        }).subscribe();
    };
    AuthService.prototype.updateCurrentUser = function (firstName, lastName) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put("/api/users/" + this.currentUser.id, JSON.stringify(this.currentUser), options);
    };
    AuthService.prototype.logout = function () {
        this.currentUser = undefined;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/logout', JSON.stringify({}), options);
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
