import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  titleColor = 'red'
  status :boolean = true
  d = new Date()

  title = "Angular session"
  title_upper = "ANGULAR"
  arr = [1,2,3,4,5,6,7,8,9,10]
  arrObj = [
    {userId:1 , name:"nouran"},
    {userId:1 , name:"nouran"},
    {userId:1 , name:"nouran"},
    {userId:1 , name:"nouran"},
  ]

  newobj ={
    name : "marwa",
    id:1
  }
  constructor() { }

  ngOnInit(): void {
  }

}
