import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model : any ={}
  constructor(private global :GlobalService) { }

  ngOnInit(): void {
  }

  handleRegister(form:NgForm){
    console.log(form)
    console.log(this.model)
    this.model.role = 5
    if(form.valid){
      this.global.register(this.model).subscribe(data=>{
        console.log(data)
      })

    }
  }

}
