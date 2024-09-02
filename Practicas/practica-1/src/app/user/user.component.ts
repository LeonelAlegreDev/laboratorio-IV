import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  isLogged:boolean = false;
  nombre:string = 'Usuario 1';
  email:string = "usuario1@email.com";
  password:string = "1234";

  inp_email:string = "";
  inp_password:string = "";

  loggin():void {
    if (this.email == this.inp_email && this.password == this.inp_password) {
      this.isLogged = true;
      alert("Inicio de session exitoso");
    }
    else {
      alert(`Datos incorrectos. El email ded usuario es "usuario1@email.com" y la contraseña es "1234".`);
    }
  }
  loggout():void {
    this.inp_email = "";
    this.inp_password = "";
    this.isLogged = false;
    alert("Cierre de session exitoso");
  }
}
