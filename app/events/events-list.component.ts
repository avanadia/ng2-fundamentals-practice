import { Component, OnInit } from '@angular/core';

import { EventThumbnailComponent } from './event-thumbnail.component';
import { EventService } from './shared/event.service'; 
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/event.model';

@Component({    
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div class='row'>
            <div *ngFor='let event of events' class='col-md-5'>
                <event-thumbnail (click)='handleThumbnailClick(event.name)' [event]='event'></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {

    events: IEvent[];

    constructor(private eventService: EventService, private toastrService: ToastrService) {
        
    }

    ngOnInit() {
        this.eventService.getEvents().subscribe(events => { this.events = events });
    }

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
}