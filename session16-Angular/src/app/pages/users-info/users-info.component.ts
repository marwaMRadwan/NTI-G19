import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {
  users:any[]=[]
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.getUsers().subscribe(data=>{
      console.log(data)
      this.users=data
    })
  }

}
