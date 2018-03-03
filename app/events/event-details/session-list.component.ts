import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../shared/event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService: VoterService) {

    }

    ngOnChanges() {
        // first check if sessions are set
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAscending) : this.visibleSessions.sort(sortByVotesDescending);
        }
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDescending);
        }
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
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