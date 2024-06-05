import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private authStatusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private username: string = '';
  private password: string = '';

  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'sandyleiva' && password === '123456') {
      this.isAuthenticated = true;
      this.authStatusSubject.next(true); 
      this.username = username;
      this.password = password;
      return true;
    }
    return false;
  }
  logout(): void {
    this.isAuthenticated = false;
    this.authStatusSubject.next(false); 
  }
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
  getAuthStatus(): BehaviorSubject<boolean> {
    return this.authStatusSubject;
  }
  getUsername(): string {return this.username;}
  getPassword(): string {return this.password;}
}
