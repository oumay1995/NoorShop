import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {
  shopProducts:any;
  customOptions: any = {
    loop: true,
    margin:6,
    autoplay:true,
    responsiveClass: true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {items: 1
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

 categories : any = {};

  constructor(private categorieServie : CategorieService) {}

  ngOnInit(): void {
    this.shopProducts = JSON.parse(localStorage.getItem("users") || "[]")
    this.categorieServie.getCategories().subscribe((data)=>{
      console.log(data.categories);
      this.categories = data.categories;
    })
  }
  update(e){
    this.shopProducts = e ;
   }
}
