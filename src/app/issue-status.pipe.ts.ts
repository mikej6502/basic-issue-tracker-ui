import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'convertStatus'
})
export class convertStatusPipe implements PipeTransform {

    transform(value: string): string {
        if(value == "IN_PROGRESS") {
            return "IN PROGRESS"
        }
        return value
    }
}