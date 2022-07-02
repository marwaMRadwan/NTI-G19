import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={}
  constructor(private global : GlobalService , private route : Router) {
    // if(localStorage.getItem("token")) this.route.navigate([""])
   }

  ngOnInit(): void {
  }
  handleSubmit(){
    this.global.login(this.model).subscribe(res=>{
      console.log(res)
      localStorage.setItem("token" , res.access_token)
    })
  }

}
