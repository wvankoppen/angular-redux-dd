import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../app.model";

@Pipe({
  name: "toAge"
})
export class ToAgePipe implements PipeTransform {
  transform(value: Person): string {
    // value.name = "x";
    return value.name + ' is ' + value.age + ' years old' ;
  }
}
