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
  });
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit(): void {}
}
