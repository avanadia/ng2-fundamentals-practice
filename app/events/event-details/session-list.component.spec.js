"use strict";
exports.__esModule = true;
var session_list_component_1 = require("./session-list.component");
describe('SessionListComponent', function () {
    var component;
    var mockAuthService, mockVoterService;
    beforeEach(function () {
        component = new session_list_component_1.SessionListComponent(mockAuthService, mockVoterService);
    });
    describe('ngOnChanges', function () {
        it('should filter the sessions correctly', function () {
            component.sessions = [
                { name: 'session 1', level: 'intermediate' },
                { name: 'session 2', level: 'beginner' },
                { name: 'session 3', level: 'intermediate' }
            ];
            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            expect(component.visibleSessions.length).toBe(2);
        });
        it('should sort the sessions correctly', function () {
            component.sessions = [
                { name: 'session 2', level: 'intermediate' },
                { name: 'session 3', level: 'beginner' },
                { name: 'session 1', level: 'intermediate' }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();
            expect(component.visibleSessions[2].name).toBe('session 3');
        });
    });
});
