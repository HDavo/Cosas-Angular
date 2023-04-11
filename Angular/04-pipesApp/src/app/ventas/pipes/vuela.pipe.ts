import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'volador',
})
export class VuelaPipe implements PipeTransform{

    transform(value: boolean):string {
        return (value) ? "sí" : "no";
    }
}