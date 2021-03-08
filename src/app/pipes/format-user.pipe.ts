import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../state/user.model';

@Pipe({
  name: 'formatUser',
})
export class FormatUserPipe implements PipeTransform {
  // Make sure transformation is a pure function!
  transform(value: User): string {
    if (!value) {
      return '<empty>';
    }
    return value.name[0].toUpperCase() + value.name.substring(1) + ' is ' + value.age + ' years old';
  }
}
