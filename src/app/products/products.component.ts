import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any;
  cartItemsFlag = false;
  cartItems = [];

  constructor(
    private productService : ProductService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.productService.isProductPage.next(true);
    this.productService.isCheckOutPage.next(false);
    this.getProductList();
  }

  getProductList(){
    this.productService.getAllproducts().subscribe(res =>{
      console.log(res);
      this.productList = res.products;
      //console.log(this.productList);
    })

  }

  addToCart(item){
    console.log('Added to cart = ' + JSON.stringify(item));
    this.cartItems.push(item);
    console.log('ITEMS IN CART = ' + JSON.stringify(this.cartItems));
    if(this.cartItems.length != 0){
      this.productService.isCheckoutButton.next(true);
      this.cartItemsFlag = true;
    }
  }

}
