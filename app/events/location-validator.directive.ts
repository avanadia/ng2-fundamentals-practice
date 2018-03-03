import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[validateLocation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }]
})

export class LocationValidator implements Validator {

    validate(formGroup: FormGroup): { [key: string]: any } {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];
        
        // If these fields are all valid, no error
        if ((addressControl && addressControl.value && cityControl 
            && cityControl.value && countryControl && countryControl.value) 
            || (onlineUrlControl && onlineUrlControl.value)) {
                return null;
        } else {
            // If those are not all valid, we will return false, ie a validation error
            return { validateLocation: false };
        }
    }
}