/* eslint-disable no-trailing-spaces */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authSerice: AuthService,
    private router: Router
  ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authSerice.userIsAuthenticated){
       this.router.navigateByUrl('/auth');
    }

    return this.authSerice.userIsAuthenticated;
  }
}
