import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={}
  // loginForm:NgForm
  constructor(private global : GlobalService , private route : Router) {
    // if(localStorage.getItem("token")) this.route.navigate([""])
   }
   loginForm = new FormGroup(
    {
      email : new FormControl("" , [Validators.required]),
      password : new FormControl("" , [Validators.required]),
    }
   )
   isSubmitted = false

  ngOnInit(): void {
  }
  handleSubmit(){
    // this.loginForm = login
    this.isSubmitted = true
    this.global.login(this.model).subscribe(res=>{
      console.log(res)
      localStorage.setItem("token" , res.access_token)
    })
  }

  canExit() : boolean{
    
    if(this.isSubmitted == false && this.loginForm.dirty == true){
      alert('please save changes')
      return false
    }
    else 
    return true
  }



}
