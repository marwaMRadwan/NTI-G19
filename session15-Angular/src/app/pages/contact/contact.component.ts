import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  num = 6
  numArr=[0,1,2,3,4,5,6,7]
  mon = new Date().getMonth()
  constructor() { }

  ngOnInit(): void {
  }

}
