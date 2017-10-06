import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



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

  submitForm() {

    this.logIn(this.authForm.value.login, this.authForm.value.pass);
  }

  logIn(login: string, password: string) {
    this.authService.signin(login, password)
      .subscribe(() => {
        this.router.navigate([this.authService.redirectUrl]);
      });
  }

  logOut() {
    this.authService.signout();
  }
}
