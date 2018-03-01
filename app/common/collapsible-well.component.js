"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CollaspibleWellComponent = /** @class */ (function () {
    function CollaspibleWellComponent() {
        this.visible = true;
    }
    CollaspibleWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    CollaspibleWellComponent = __decorate([
        core_1.Component({
            selector: 'collapsible-well',
            template: "\n        <div (click)='toggleContent()' class='well pointable'>\n            <h4>\n                <ng-content select='[well-title]'></ng-content>\n            </h4>\n            <ng-content select='[well-body]' *ngIf='visible'></ng-content>\n        </div>\n    "
        })
    ], CollaspibleWellComponent);
    return CollaspibleWellComponent;
}());
exports.CollaspibleWellComponent = CollaspibleWellComponent;
//# sourceMappingURL=collapsible-well.component.js.map