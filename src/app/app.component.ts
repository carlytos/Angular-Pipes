import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Carlos';
  nombreCompleto = 'carLos dEl Río Gimeno';
  num: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  json = {
    nombre: 'Logan',
    alias: 'Lobezno',
    habilidad: 'Regeneración',
    dirección: {
      calle: 'Calle Falsa',
      numero: '21',
      localidad: 'Misco Jones'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Llegaron los datos!'), 3500);
  });

  fecha = new Date();

  video = 'lvyLf-dh9_I';

  activar = true;
}
