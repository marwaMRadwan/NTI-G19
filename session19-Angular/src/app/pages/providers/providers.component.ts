import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  providers:any
  p:number = 1
  constructor(private global: GlobalService) { }

  ngOnInit(): void {
    this.global.getProviders().subscribe(data=>{
      this.providers = data.data
    })
  }

}
