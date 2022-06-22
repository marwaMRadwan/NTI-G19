import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  // const let var
  firstName : string = "Nouran" 
  lastName : any = "Fayez"
  fullName : any

  constructor() {
   }

  ngOnInit(): void {
  }
  
  getFullName(){
    return "Tamer Ahmed"
  }

  getAnotherName(){
    this.fullName = "Ahmed Mohamed"
    return this.fullName
  }

  getMaxNumber(num1 : number , num2 : number){
    return Math.max(num1 , num2)
  }


}



