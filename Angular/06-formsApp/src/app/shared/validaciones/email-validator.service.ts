import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ValidacionCorreo implements AsyncValidator {
    
    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
       
        const correo = control.value;
        

        const httpCallObservable = new Observable<ValidationErrors | null >( (subscriber) => {
            //subscriber hace que nos subscribamos a los cambios de este observable

            console.log(correo);

            if( correo === 'pepe@pepemail.com'){
              subscriber.next({ correoExistente: true}); //en next debemos indicar el mensaje a emitir
              subscriber.complete(); //cerramos subscriber  
            }else{ //esta parte también puede ir sin un else
                subscriber.next(null);
                subscriber.complete();
            }

        }).pipe(
            delay( 4000 )
        );

        return httpCallObservable;

       
    }
    /* abstractControl similar a FormControl 
        ValidationErrors objeto con clave - valor, que define el error y que es.
        Observable */
    /* validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
        

        const correo = control.value;
        console.log(correo);

        return of({
            correoCorrecto: true //esta devolución es como gestionamos el mensaje de error
        }).pipe(
            delay( 2000 )
        );
    } */
    
}

//TODO: mirar la versión final de register.page.component y copiar el ejemplo de como sería recuperar un correo desde el backend y ponerlo dentro de las notas.
