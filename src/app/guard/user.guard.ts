import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// Services
import { UserService } from '../services/user.service';
// Router
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private _router: Router,
    private _userService: UserService) {
  }

  /*canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/

  canActivate() {
    let identity = this._userService.getIdentity();

    if (identity && identity.name) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

  
}
