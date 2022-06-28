import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products=[
    {title:"product 1" , body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aliquid."},
    {title:"product 2" , body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aliquid."},
    {title:"product 3" , body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aliquid."},
    {title:"product 4" , body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aliquid."},
    {title:"product 5" , body:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, aliquid."},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
