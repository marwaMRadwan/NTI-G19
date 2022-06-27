import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
 
  userData ={
    userName:"",
    userEmail:""
  }

  @Output() sendingUser = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }
  handleForm(){
    console.log(this.userData)
    const user = {
      userName : this.userData.userName,
      userEmail : this.userData.userEmail,
    }

    this.sendingUser.emit(user)
  }

}
