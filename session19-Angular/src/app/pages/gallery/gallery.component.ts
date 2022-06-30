import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:any
  activeSlideIndex = 0;
  constructor(private global : GlobalService) { }

  ngOnInit(): void {
    this.global.getImages().subscribe(data=>{
      this.images = data
    })
  }

}
