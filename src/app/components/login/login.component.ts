import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { LoginCredentials } from 'src/app/models/login-credentials';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //Attempts login and provides response with access to the jwt.
  onSubmit(): void {
    this.userService
      .attemptLogin(<LoginCredentials>this.loginForm.value)
      .subscribe((response) => {
        //console.log(response.headers.get('x-auth-token'));
        localStorage.setItem('token', response.headers.get('x-auth-token'));
        this.router.navigate(['/']);
      });
  }
}
