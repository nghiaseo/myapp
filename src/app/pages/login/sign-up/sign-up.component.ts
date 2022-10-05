import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordConfirmed } from 'src/app/core/validations/formValidator';
import { ToastrService } from 'ngx-toastr';
import { signupRequest } from '../models/requestBody';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private authService:AuthService) { }
get passwordGroup(){
  return this.registerForm.controls['passwordGroup']
}
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      passwordGroup:new FormGroup({
      password:new FormControl('',Validators.required),
      rePassword:new FormControl('',Validators.required),
      },[passwordConfirmed]),
      agreeTerms:new FormControl(false,Validators.required)
  })
  }
  register(){
    const body:signupRequest = {
      name:this.registerForm.controls['name'].value,
      password:this.passwordGroup.get('password')?.value,
      email:this.registerForm.controls['email'].value
    }
    this.authService.signup(body)
  }

}
