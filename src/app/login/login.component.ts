// login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  login() {
    if (this.authService.login(this.username, this.password)) {
      this.isLoggedIn = true;
      const redirectUrl = this.authService.getIsLoggedIn() ? '/private' : '/home';
      this.router.navigate([redirectUrl]);
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
