import { Component } from '@angular/core';
import { QuejaGetDTO } from 'app/modelo/queja-get-dto';

@Component({
  selector: 'app-listar-quejas',
  templateUrl: './listar-quejas.component.html',
  styleUrls: ['./listar-quejas.component.css']
})
export class ListarQuejasComponent {

  quejas:QuejaGetDTO[];

  constructor(){
    this.quejas = [];
  }

}
