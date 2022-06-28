import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    // Validators.pattern() // Validators.minLength(3) // Validators.maxLength(10)
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)])
  })

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  get loginData() { return this.loginForm.controls }

  isSubmitted = false

  errorMsg: any = null

  constructor(private global: GlobalService , private router : Router) {
    if(localStorage.getItem('token')) this.router.navigate([""])
   }
   

  ngOnInit(): void {
  }
  handleSubmit() {
    // console.log("hhjjkk")
    this.isSubmitted = true
    console.log(this.loginForm)
    if (this.loginForm.valid) {
      this.global.login(this.loginForm.value).subscribe(res => {
        console.log(res)

        if (res.error) { this.errorMsg = res.error }
        if (res.error == "Unauthorized") this.errorMsg = "incorrect password"
        if (res.access_token) {
          // this.router.navigate(['posts' , 2])
          localStorage.setItem("token" , res.access_token)
          this.global.isLogin = true
          this.router.navigateByUrl("posts/4")
        }

      }, (err)=>{
        console.log(err)
      },()=>{

      })
    }

    // this.global.login(this.loginData).subscribe(data=>{

    // },(err)=>{

    // } , ()=>{

    // })
  }

}
