import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  inputType : string = "password"
  inputPlaceholder : string ="enter your password"
  inputName : string = "userpassword"
  inputDisabled:boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  getInputPlaceholder(){
    return "enter your email"
  }

}
