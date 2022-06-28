import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session16-Angular';
  constructor(private global:GlobalService){
    if(localStorage.getItem("token")) {
      this.global.isLogin = true
      this.global.AuthMe().subscribe(data=>{
        console.log(data[0])
        this.global.UserData = data[0]
      })
    }
    console.log("hvhvh")

  }
  
}
