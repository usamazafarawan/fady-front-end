import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private authServiceService: AuthServiceService,
    private router: Router
  ) {

  }


  canActivate(): boolean {

    if (this.authServiceService.isLoggedIn()) {
      return true
    }


    this.router.navigate(['/login']);
    return false

  }
}
