import { Component } from '@angular/core';
import { QuejaDTO } from 'app/modelo/queja-dto';

@Component({
  selector: 'app-gestion-queja',
  templateUrl: './gestion-queja.component.html',
  styleUrls: ['./gestion-queja.component.css']
})
export class GestionQuejaComponent {

  queja:QuejaDTO;

  constructor(){
    this.queja = new QuejaDTO();
    }

  public crearQueja(){
    console.log(this.queja);
  }  

}
