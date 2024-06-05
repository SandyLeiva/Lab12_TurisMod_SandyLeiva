import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string;
  password: string;
  passwordMasked: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.updateUserData();
    this.authService.getAuthStatus().subscribe((authStatus: boolean) => {
      if (authStatus) {
        this.updateUserData();
      }
    });
    this.isLoggedIn = this.authService.isAuthenticatedUser(); 

  }
  private updateUserData(): void {
    if (this.authService.isAuthenticatedUser()) {
      this.username = this.authService.getUsername();
      this.password = this.authService.getPassword();
      this.passwordMasked = '*'.repeat(this.password.length);
    } else {
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