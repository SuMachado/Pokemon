import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class VerifyAuthService implements CanActivate {

  constructor(private authservice: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authservice.isAuthenticated();
  }
}
