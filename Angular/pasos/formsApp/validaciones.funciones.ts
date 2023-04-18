import { FormControl, ValidationErrors } from "@angular/forms";



export const firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const noAceptado = ( control: FormControl ): ValidationErrors | null => { //esto debe devolver un objeto con el error

    const valor: string = control.value.trim().toLowerCase();

    if(valor === 'pepe'){
        return { //return para el caso de que exista un error
            noValido: true,
        }
    }
    
    return null;
}