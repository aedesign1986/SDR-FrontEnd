import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";
import {AngularFireAuth} from "angularfire2/auth";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){

  }

  canActivate(): Observable<boolean> {
    return this.authService.user.map(
      (auth) => {
        if(auth) {
          console.log('Autenticated');
          return true;
        }else {
          console.log('NOT AUTHENTICATED');
          this.router.navigate(['/signIn']);
          return false;
        }
      }
    ).first();
  }
}
