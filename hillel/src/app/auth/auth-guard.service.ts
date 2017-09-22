import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      // console.log(this.authService);
      if (this.authService.isAuth) {
        return true;
      } else {
        this.authService.redirectUrl = state.url;
        this.router.navigate(['signin']);
        return false;
      }
    }
}
