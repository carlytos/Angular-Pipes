import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

 transform(value: string, activar: boolean = true): string {
     if (activar) {
       let result = '';
       // tslint:disable-next-line: prefer-for-of
       for ( let i = 0; i < value.length; i++) {
         result += '*';
       }
       return result;
     } else {
       return value;
     }
 }

}
