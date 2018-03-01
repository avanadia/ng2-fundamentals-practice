"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateSessionComponent = /** @class */ (function () {
    function CreateSessionComponent() {
    }
    CreateSessionComponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        this.abstract = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400)]);
        this.newSessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    CreateSessionComponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        };
        console.log(session);
    };
    CreateSessionComponent = __decorate([
        core_1.Component({
            templateUrl: '/app/events/event-details/create-session.component.html',
            styles: ["\n    em { float: right; color: #e05c65; padding-left: 10px; }\n    .error input { background-color: #e3c3c5; }\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :-moz-placeholder { color: #999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
        })
    ], CreateSessionComponent);
    return CreateSessionComponent;
}());
exports.CreateSessionComponent = CreateSessionComponent;
//# sourceMappingURL=create-session.component.js.map