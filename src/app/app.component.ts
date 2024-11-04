import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component'; // Asegúrate de añadir esta importación
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListadoComponent } from './heroes/listado/listado.component';
@Component({
  selector: 'app-root',
  standalone: true,  // Solo una vez
  imports: [RouterOutlet, ContadorComponent, HeroeComponent, ListadoComponent], // Todos los imports en un solo array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';
}