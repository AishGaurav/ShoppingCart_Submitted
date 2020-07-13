import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/products.service';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {
  productPage = false;
  checkoutPage = false;
  checkoutButton = false;

  activeSubs1 : Subscription;
  activeSubs2 : Subscription;
  activeSubs3 : Subscription;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router,
  ) 
  { }

  ngOnInit() {
    this.activeSubs1  = this.productService.isProductPage.subscribe(res=>{this.productPage = res;});
    this.activeSubs2  = this.productService.isCheckOutPage.subscribe(res=>{this.checkoutPage = res;});
    this.activeSubs3  = this.productService.isCheckoutButton.subscribe(res=>{this.checkoutButton = res;})
  }

  checkOut(){
    this.authService.checkOut = true;
    this.router.navigate(['checkout']);
  }

  ngOnDestroy(){
    this.activeSubs1.unsubscribe();
    this.activeSubs2.unsubscribe();
    this.activeSubs3.unsubscribe();
  }

}
