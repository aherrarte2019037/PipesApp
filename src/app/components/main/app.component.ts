import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  entrada: string = 'Cápitan América';
  entrada2: string = 'AnGeL HeRRarTe';
  parrafo: string = 'lorem ipsum dena er y pdar tr ari pism uer sda';
  arreglo_entrada: number[] = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.325;
  moneda: number = 8930.50;
  fecha: Date = new Date();
  idioma: string = 'es';
  videoURL: string = 'https://www.youtube.com/embed/dcV4l3JtZmE';
  showPass: boolean = true;

  promesa = new Promise<string> ( (resolve) => {
    setTimeout( () => resolve('Promesa cumplica'), 1500)
  });

  entrada_heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 200
  }

  setEs() {
    this.idioma = 'es'
  }

  setEn() {
    this.idioma = 'en'
  }

  setFr() {
    this.idioma = 'fr'
  }


}
