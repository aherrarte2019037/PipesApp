import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraph'
})
export class ParagraphPipe implements PipeTransform {

  transform(value: string): string {
    let primerLetra:string = value[0].toUpperCase();
    let texto: string = value.substr(1, value.length).toLocaleLowerCase();
    let resultado = primerLetra + texto;
    if( resultado[resultado.length-1] !== '.' ){
      resultado = resultado + "."
    }
    return resultado;
  }


}
