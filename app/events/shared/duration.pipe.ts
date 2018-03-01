import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })

export class DurationPipe implements PipeTransform {

    transform(value: number): string {
        let result: string;
        if (value === 1) {
            result = 'Half Hour';
        } else if (value === 2) {
            result = 'One Hour';
        } else if (value === 3) {
            result = 'Half Day';
        } else if (value === 4) {
            result = 'Full Day';
        }
        return result;
    }
}