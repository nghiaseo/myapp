import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { signinRequest, signupRequest } from '../models/requestBody';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.baseUrl;
  constructor(private http:HttpClient,private toastr:ToastrService,private router:Router) { }
  signin(body:signinRequest){
    this.http.post('signin',body).subscribe({
      next:(res:any)=>{
        this.router.navigateByUrl('home')
      },
  error:(err:any)=>{
    this.toastr.error(err.error)
  }})
  }
  signup(body:signupRequest){
    this.http.post('register',body).subscribe({next:()=>{
      this.toastr.success("Đăng ký tài khoản thành công")
    },
  error:(err:any)=>{
    this.toastr.error(err.error)
  }})
  }
}
