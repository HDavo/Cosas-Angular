import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ValidacionCorreo implements AsyncValidator {
    
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        /*abstractControl similar a FormControl 
        ValidationErrors objeto con clave - valor, que define el error y que es.
        Observable
        */

        const correo = control.value;
        console.log(correo);

        return of({
            correoCorrecto: true
        }).pipe(
            delay( 2000 )
        );
    }
    /* validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        // abstractControl similar a FormControl 
        // ValidationErrors objeto con clave - valor, que define el error y que es.
        // Observable
        

        const correo = control.value;
        console.log(correo);

        return of({
            correoCorrecto: true
        }).pipe(
            delay( 2000 )
        );
    } */
    
}