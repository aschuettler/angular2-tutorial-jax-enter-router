import { Directive, Attribute, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: 'input[ort]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => OrtValidatorDirective),
            multi: true
        }
    ]
})
export class OrtValidatorDirective implements Validator{

    orte: Array<string> = [];

    constructor(@Attribute('ort') ort: string) {
        this.orte = ort.split(',');
    }

    public validate(c: AbstractControl): any {

        if (this.orte.indexOf(c.value) > -1) {
            return {};
        }

        return {
            ort: true
        }

    }

}