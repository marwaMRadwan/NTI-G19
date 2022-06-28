import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id:any
  singlePost:any
  constructor(private activated : ActivatedRoute , private global :GlobalService) {
    this.id = activated.snapshot.paramMap.get("postId")
    console.log(this.id)
    this.global.getSinglePost(this.id).subscribe(data=>{
      console.log(data)
      this.singlePost = data
    })
   }

  ngOnInit(): void {
  }

}
