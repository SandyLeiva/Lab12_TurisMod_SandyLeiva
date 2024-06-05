import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  test : Date = new Date();
  focus;
  focus1;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.username === '' || this.password === '') {
      alert('Completa todos los campos');
    } else if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/perfil']);
    } else {
      alert('Credenciales incorrectas');
    }
  }

}
