import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() num : any
  @Input() name :any
  constructor(private route :Router) { 
    console.log("constructor ---------- " + this.num)
  }

  ngOnInit(): void {
    console.log("ng on init------- " + this.num )

  }

  ngOnChanges(event:any){
    console.log("ng on Changes")
    console.log(event)

  }
  ngDoCheck(){
    console.log("ng on Do Check")
  }
  ngAfterContentInit(){
    console.log("ng on after content init")
  }

  ngAfterContentChecked(){
    console.log("ng on after content checked")

  }
  ngAfterViewInit(){
    console.log("ng on after view init")

  }
  ngAfterViewChecked(){
    console.log("ng on after view checked")

  }
  ngOnDestroy(){
    console.log("ng on destroy")
    localStorage.removeItem("name")
  }

  handleStorage(){
    localStorage.setItem('name' ,'nouran')
    // this.route.navigate(['gallery'])
  }


}
