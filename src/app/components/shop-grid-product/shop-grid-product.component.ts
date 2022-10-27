import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-shop-grid-product',
  templateUrl: './shop-grid-product.component.html',
  styleUrls: ['./shop-grid-product.component.css']
})
export class ShopGridProductComponent implements OnInit {

  @Input() childProduct : any;
  @Output() newProduct = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
 
}
