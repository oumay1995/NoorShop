import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
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
  categories : any = {};
  ImageURL : any;
  constructor(private router : Router , private categorieServie : CategorieService) {}

  ngOnInit(): void {
    this.categorieServie.getCategories().subscribe((data)=>{
      console.log("categorie",data.categories[12].img);
      this.categories = data.categories;
    })
  }
}