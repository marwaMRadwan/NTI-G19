import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inputVal:any
  buttonShow:any
  emailInput:string = "nouran@hotmail.com"
  constructor() { }

  ngOnInit(): void {
  }

  handleInput(eve:any){
    // console.log("typing..")
    console.log(eve.target.value)
    this.inputVal = eve.target.value
  }

  handleBtn(){
    this.buttonShow = "Angular"
  }

  handleInputEvnt(template:any){
    console.log(template.value)
  }


}
