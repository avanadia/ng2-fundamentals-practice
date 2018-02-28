"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./events/index");
var _404_component_1 = require("./errors/404.component");
exports.appRoutes = [
    { path: 'events/new', component: index_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: index_1.EventsListComponent },
    { path: 'events/:id', component: index_1.EventDetailsComponent, canActivate: [index_1.EventRouteActivator] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];
//# sourceMappingURL=routes.js.map