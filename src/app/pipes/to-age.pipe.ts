import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../app.model";

@Pipe({
  name: "formatPerson"
})
export class FormatPersonPipe implements PipeTransform {

  // Oops: transformation is not a pure function!
  transform(value: User): string {
    value.name = value.name[0].toUpperCase() + value.name.substring(1);
    return value.name + ' is ' + value.age + ' years old' ;
  }
}
