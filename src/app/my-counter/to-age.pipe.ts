import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../app.model";

@Pipe({
  name: "formatPerson"
})
export class FormatPersonPipe implements PipeTransform {
  transform(value: Person): string {
    value.name = value.name.toUpperCase();
    return value.name + ' is ' + value.age + ' years old' ;
  }
}
