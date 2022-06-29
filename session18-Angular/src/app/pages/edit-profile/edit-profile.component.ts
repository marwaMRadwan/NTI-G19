import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  img:any = null
  constructor(private global : GlobalService , private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  handleChange(eve :any){
    console.log(eve)
    this.img = eve.target.files
  }


  handleSubmit(){
    if(this.img != null){
      let formData = new FormData()
      formData.append("image" , this.img[0])
      this.global.editProfileImage(formData).subscribe(res=>{
        console.log(res)
        this.toastr.success("added successfully" , "image uploaded")
      })

    }
  }

}
