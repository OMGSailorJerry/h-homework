import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm: FormGroup;

  constructor(  private authService: AuthService,
                private router: Router,
                private fb: FormBuilder ) {
                  this.createForm();
                 }
  createForm() {
    this.authForm = this.fb.group({
      login: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    });
  }

  logOut() {
    this.authService.signout();
  }

  submitForm(form: NgForm) {
    this.authService.signin(this.authForm.value.login, this.authForm.value.pass)
      .subscribe(() => {
        this.router.navigate([this.authService.redirectUrl]);
      });
  }
}
