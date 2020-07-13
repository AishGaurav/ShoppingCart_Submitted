import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  productPage = false;
  checkoutPage = false;

  activeSubs1 : Subscription;
  activeSubs2 : Subscription;

  constructor(
    private productService: ProductService
  ) 
  { }

  ngOnInit() {
    this.activeSubs1  = this.productService.isProductPage.subscribe(res=>{this.productPage = res;})
    this.activeSubs2  = this.productService.isCheckOutPage.subscribe(res=>{this.checkoutPage = res;})
  }

  ngOnDestroy(){
    this.activeSubs1.unsubscribe();
    this.activeSubs2.unsubscribe();
  }

}
