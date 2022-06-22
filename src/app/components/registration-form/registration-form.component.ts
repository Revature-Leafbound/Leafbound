import { RegistrationCredentials } from './../../models/registration-credentials';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: ' RegistrationForm',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  registerForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roleId: 1
  });
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.userService
      .register(<RegistrationCredentials>this.registerForm.value)
      .subscribe((response) => {
        localStorage.setItem('token', response.headers.get('x-auth-token'));
        this.router.navigate(['/']);
      });
  }
}
