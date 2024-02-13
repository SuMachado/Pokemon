import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  login(username: string, password: string): boolean {
    
    if (username === 'pokemon' && password === 'pokemonLover') {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}
