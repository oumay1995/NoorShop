import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  customOptions: any = {
    loop: true,
    margin: 5,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
       items: 1
     },
      100: {
       items: 2
     },
      200: {
       items: 3
     }
    },
   nav: true
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
