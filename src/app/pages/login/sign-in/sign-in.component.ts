import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      remember: new FormControl(false),
    });
  }
  login() {
    if (this.signinForm.valid) {
      console.log('submit')
    }
  }
}
