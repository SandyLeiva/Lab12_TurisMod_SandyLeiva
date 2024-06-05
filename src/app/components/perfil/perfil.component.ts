import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {
  isLoggedIn: boolean = false; // Bandera para verificar si el usuario está autenticado
  username: string;
  password: string;
  passwordMasked: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.updateUserData();
    // Escucha los cambios en el estado de autenticación
    this.authService.getAuthStatus().subscribe((authStatus: boolean) => {
      if (authStatus) {
        this.updateUserData();
      }
    });
    this.isLoggedIn = this.authService.isAuthenticatedUser(); // Verificar el estado de autenticación al inicializar el componente

  }
  private updateUserData(): void {
    // Verifica si el usuario está autenticado
    if (this.authService.isAuthenticatedUser()) {
      // Obtiene el nombre de usuario y la contraseña del servicio AuthService
      this.username = this.authService.getUsername();
      this.password = this.authService.getPassword();
      // Enmascara la contraseña
      this.passwordMasked = '*'.repeat(this.password.length);
    } else {
      // Si el usuario no está autenticado, establece los datos en blanco
      this.username = '';
      this.password = '';
      this.passwordMasked = '';
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  
}