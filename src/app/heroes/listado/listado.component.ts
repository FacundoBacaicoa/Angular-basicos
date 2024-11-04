import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule para usar extensiones como ngfor
@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
 
  heroes: string[]=['Hulk','Spiderman','Ironman','Batman'];

heroeBorrado: string='';
borrarHeroe(): void{
  //this.heroes.splice(1,1);
  const heroeBorrado=this.heroes.shift();//remueve el primer elemento del arreglo
  this.heroeBorrado=heroeBorrado || '';//si no borra ningun hero regresa un string vacio
  
 

}
}
