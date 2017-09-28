import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  isAuth: boolean;

  redirectUrl = 'todo';

  signout() {
    this.isAuth = false;
  }

  signin(login: string, password: string) {
    return Observable
      .of(true)
      .delay(100)
      .do(val => {
        if (login === 'admin' && password === 'admin') {
          this.isAuth = true;
          return this.isAuth;
        }
      });
  }
}
