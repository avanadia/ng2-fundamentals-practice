"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var index_1 = require("./events/index");
var index_2 = require("./common/index");
var events_app_component_1 = require("./events-app.component");
var navbar_component_1 = require("./nav/navbar.component");
var routes_1 = require("./routes");
var _404_component_1 = require("./errors/404.component");
var auth_service_1 = require("./user/auth.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)
            ],
            declarations: [
                events_app_component_1.EventsAppComponent,
                index_1.EventsListComponent,
                index_1.EventThumbnailComponent,
                navbar_component_1.NavBarComponent,
                index_1.EventDetailsComponent,
                index_1.CreateEventComponent,
                _404_component_1.Error404Component,
                index_1.CreateSessionComponent,
                index_1.SessionListComponent,
                index_2.CollaspibleWellComponent,
                index_2.SimpleModalComponent,
                index_2.ModalTriggerDirective,
                index_1.LocationValidator,
                index_1.DurationPipe,
                index_1.UpvoteComponent
            ],
            providers: [
                index_1.EventService,
                { provide: index_2.TOAST_TOKEN, useValue: toastr },
                { provide: index_2.JQ_TOKEN, useValue: jQuery },
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
                auth_service_1.AuthService,
                index_1.VoterService,
                index_1.EventResolver,
                index_1.EventListResolver
            ],
            bootstrap: [events_app_component_1.EventsAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty) {
        return window.confirm("You have not saved this event, do you really want to cancel?");
    }
    return true;
}
//# sourceMappingURL=app.module.js.map