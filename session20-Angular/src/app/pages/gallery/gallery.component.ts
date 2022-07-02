import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:any
  constructor(private global :GlobalService , private Activated : ActivatedRoute) {
    // this.global.navFlag = false
    // this.global.gallery().subscribe(res=>{
    //   this.images = res
    // })
   this.images =  this.Activated.snapshot.data['galleryImages']

   }

  ngOnInit(): void {
  }

}
