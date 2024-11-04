import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  template: `
    <h1>{{ title }}</h1>
<h3>La base es de {{base}}</h3>
<!-- 
<button (click)="restar();">-1</button>
<span>{{ numero }}</span>
<button (click)="sumar();">+1</button> -->
<button (click)="acumular(-base);">-5</button>
<span>{{ numero }}</span>
<button (click)="acumular(base);">+5</button>      
  `
})
export class ContadorComponent {
  public title: string = 'Contador App';
  numero: number=10;
  base: number=5;
// sumar(){
//   this.numero+=1
// }
// restar(){
//   this.numero-=1
// }

acumular(valor: number){
  this.numero+=valor;
}

  
}