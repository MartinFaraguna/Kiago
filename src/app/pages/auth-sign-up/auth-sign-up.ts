import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';

@Component({
  imports: [ReactiveFormsModule, Header, RouterLink],
  selector: 'app-auth-sign-up',
  styleUrl: './auth-sign-up.css',
  templateUrl: './auth-sign-up.html',
})
export class AuthSignUp {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  async submit() {
    if (this.form.valid) {
      const email = this.form.get('email')?.value;
      const password = this.form.get('password')?.value;
      const passwordConfirm = this.form.get('passwordConfirm')?.value;
      
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Password Confirm:', passwordConfirm);
    } else {
      console.log('Form is invalid');
    }
  }

}
