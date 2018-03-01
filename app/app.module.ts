import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { TOAST_TOKEN, Toastr } from './common/toastr.service';
import { CollaspibleWellComponent } from './common/collapsible-well.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { LoginComponent } from './user/login.component';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollaspibleWellComponent,
        DurationPipe
    ],
    providers: [
        EventService,
        { provide: TOAST_TOKEN, useValue: toastr },
        EventRouteActivator,
        { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm("You have not saved this event, do you really want to cancel?");
    } 
    return true;
}