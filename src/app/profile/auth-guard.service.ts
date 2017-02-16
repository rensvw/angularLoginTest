import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _authService: AuthService) { }

  canActivate() {
    if(this._authService.isAuthenticated()){
      return true;
    }
    this._router.navigate(['profile/login']);
    return this._authService.isAuthenticated();
    }
  }


