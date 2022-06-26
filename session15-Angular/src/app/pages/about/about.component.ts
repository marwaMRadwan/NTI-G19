import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  inputValue:boolean = true
  showText:boolean = true
  invalid : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
