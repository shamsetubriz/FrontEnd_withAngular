import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn: boolean = false;
  constructor(private _route: Router){

  }
  canActivate(): boolean {
    if (this.isLoggedIn === true){
      return true;
    } else {
      this._route.navigate(['/signin']);
      return false;
    }
  }
  
}
