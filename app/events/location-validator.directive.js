"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LocationValidator = /** @class */ (function () {
    function LocationValidator() {
    }
    LocationValidator.prototype.validate = function (formGroup) {
        var addressControl = formGroup.controls['address'];
        var cityControl = formGroup.controls['city'];
        var countryControl = formGroup.controls['country'];
        var onlineUrlControl = formGroup.root.controls['onlineUrl'];
        // If these fields are all valid, no error
        if ((addressControl && addressControl.value && cityControl
            && cityControl.value && countryControl && countryControl.value)
            || (onlineUrlControl && onlineUrlControl.value)) {
            return null;
        }
        else {
            // If those are not all valid, we will return false, ie a validation error
            return { validateLocation: false };
        }
    };
    LocationValidator = __decorate([
        core_1.Directive({
            selector: '[validateLocation]',
        })
    ], LocationValidator);
    return LocationValidator;
}());
exports.LocationValidator = LocationValidator;
//# sourceMappingURL=location-validator.directive.js.map