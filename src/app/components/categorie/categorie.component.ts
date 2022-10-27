import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  categories : any = {};
  constructor(private router : Router , private categorieServie : CategorieService) {}
  ngOnInit(): void {
    this.categorieServie.getCategories().subscribe((data)=>{
      console.log(data.categories);
      this.categories = data.categories;
    })
  }
}