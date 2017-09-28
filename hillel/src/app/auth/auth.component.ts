import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.signout();
  }

  submitForm(form: NgForm) {
    this.authService.signin(form.value.login, form.value.password)
      .subscribe(() => {
        this.router.navigate([this.authService.redirectUrl]);
      });
  }
}
