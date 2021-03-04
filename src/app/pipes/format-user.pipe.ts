import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../app.model";

@Pipe({
  name: "formatUser"
})
export class FormatUserPipe implements PipeTransform {

  // Oops: transformation is not a pure function!
  transform(value: User): string {
    value.name = value.name[0].toUpperCase() + value.name.substring(1);
    return value.name + ' is ' + value.age + ' years old' ;
  }
}
