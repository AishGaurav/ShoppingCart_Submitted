import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  cartItems;
  total = 0;

  constructor(
    private productService : ProductService
  ) {}

  ngOnInit() {
    this.productService.isProductPage.next(false);
    this.productService.isCheckOutPage.next(true);
    this.getCartItems();
  }

  getCartItems(){
    this.productService.getCartItems().subscribe(res =>{
      console.log(res);
      this.cartItems = res.cartItems;
    });
  }

  delete(i){
    console.log('deleted ' + i.name);
    console.log(i);
    let index = (this.cartItems.findIndex(x => x.id === i.id));
    console.log(index);
    this.cartItems.splice(index, 1);
    //console.log(this.cartItems);
  }

}
