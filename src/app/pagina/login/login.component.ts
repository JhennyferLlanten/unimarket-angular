import { Component } from '@angular/core';
import { Alerta } from 'app/modelo/alerta';
import { SesionDTO } from 'app/modelo/sesion-dto';
import { AuthService } from 'app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  sesion:SesionDTO;
  alerta!: Alerta;

  constructor(private authService: AuthService){
    this.sesion = new SesionDTO();
    }

  public login(){
    // console.log(this.sesion);
    const objeto = this;
    this.authService.login(this.sesion).subscribe({
      next: data => {
        objeto.alerta = new Alerta(data.respuesta, "success");
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });
  }  


}
