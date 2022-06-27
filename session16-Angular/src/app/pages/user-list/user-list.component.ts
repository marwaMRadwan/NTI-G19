import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  handleEvent(eve:any){
    console.log(eve)
    this.users.push(eve)
  }

}
