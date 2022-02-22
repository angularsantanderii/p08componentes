import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  template: `
    <div class="card m">
       <h1>Ejemplo de componente en línea</h1>
       <p>{{mensaje}}</p>
    </div>
  `,
  styles: [ // Array de bloques css
    'p {color: tomato}',
    'h1 {color: blue}'
  ]
})

export class ComponenteEnLineaComponent implements OnInit {

  mensaje = 'Hola Mundo!';

  constructor() { }

  ngOnInit(): void {
  }

}
