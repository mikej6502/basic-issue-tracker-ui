import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'ConvertStatus'
})
export class ConvertStatusPipe implements PipeTransform {

    transform(value: string): string {
        if(value == "IN_PROGRESS") {
            return "IN PROGRESS"
        }
        return value
    }
}