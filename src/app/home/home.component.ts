import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productPage = false;
  checkoutPage = false;

  constructor(
    private productService: ProductService
  ) 
  { }

  ngOnInit() {
    this.productService.isProductPage.subscribe(res=>{this.productPage = res;})
    this.productService.isCheckOutPage.subscribe(res=>{this.checkoutPage = res;})
  }

}
