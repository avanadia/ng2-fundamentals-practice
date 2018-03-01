import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        // first check if sessions are set
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAscending) : this.visibleSessions.sort(sortByVotesDescending);
        }
    }

    filterSessions(filterValue) {
        if (filterValue === 'all') {
            // the slice creates a duplicate array
            this.visibleSessions = this.sessions.slice(0);
        } else {
            // this will return an array consisting of only those that match the filter
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filterValue;
            });
        }
    }
}

function sortByNameAscending(s1: ISession, s2: ISession): number {
    if (s1.name > s2.name) {
        return 1;
    } else if (s1.name === s2.name) {
        return 0;
    } else {
        return -1;
    }
}

function sortByVotesDescending(s1: ISession, s2: ISession): number {
    /*
    * If s2 is longer, this will return a positive number
    * If they are equal, this will return 0
    * If s2 is shorter, this will return negative number
    * */
    return s2.voters.length - s1.voters.length;
}