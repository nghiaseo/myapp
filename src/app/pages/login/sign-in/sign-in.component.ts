import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { signinRequest } from '../models/requestBody';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;
  constructor(private auth:AuthService) {}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false),
    });
  }

  login() {
    if (this.signinForm.valid) {
      const body:signinRequest = {
        username:this.signinForm.controls['name'].value,
        password:this.signinForm.controls['password'].value,
      }
      this.auth.signin(body)
    }
  }
}
