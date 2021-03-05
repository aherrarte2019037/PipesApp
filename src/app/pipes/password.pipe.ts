import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, show: boolean = true): string {
    let result = show? value : '*'.repeat(value.length); 
    return result;
  }

}
