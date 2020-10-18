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
export class NoidentityGuard implements CanActivate {

  constructor(private _router: Router,
    private _userService: UserService) {
  }

  canActivate() {
    let identity = this._userService.getIdentity();

    if (identity && identity.name) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  }

}
