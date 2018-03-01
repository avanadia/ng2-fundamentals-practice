import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;

    ngOnChanges() {
        // first check if sessions are set
        if (this.sessions) {
            this.filterSessions(this.filterBy);
        }
    }

    filterSessions(filterValue) {
        if (filterValue === 'all') {

        } else {
            
        }
    }
}