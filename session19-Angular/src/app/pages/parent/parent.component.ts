import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  numParent = 20
  obj:any
  firstName = "nouran"
  constructor(private activated : ActivatedRoute) { 
    this.obj = this.activated.snapshot.queryParamMap
    console.log(this.obj.params)
    let id = this.activated.snapshot.paramMap.get("id")
    console.log(id)
  }

  ngOnInit(): void {
  }
  handleNum(){
    this.numParent++
    this.firstName = "marwa"
  }

}
