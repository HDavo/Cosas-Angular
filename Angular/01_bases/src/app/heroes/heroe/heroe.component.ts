import { Component } from "@angular/core";

/* Pasos para crear un componente de forma manual:
importar el Componente
definir el decorador
configurar el decorador
definir el componente (clase)
template
importar al módulo respectivo
 */

/* Pasos de forma automática
Terminal
Se puede poner c o component
ng g c ruta/nbComponente

ng g c heroes/listado
*/




@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Pepeman';
    edad: number= 45;

    //dentro de estas clases también podemos tener setters y getters
    get NombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this. nombre } - ${ this.edad }`;
    }

    cambiarNombre():void{
        this.nombre = "Super Pepe";
    }

    cambiarEdad():void{
        this.edad = 23;
    }
}