import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable({providedIn : 'root'})

export class ProductService {
    API_PATH : string = '../assets/data/';
    isProductPage = new Subject<boolean>();
    isCheckOutPage = new Subject<boolean>();

    constructor(
        private http : HttpClient 
    ){}

    getAllproducts():Observable<any>{
        let url = this.API_PATH + 'product.json';
        console.log(url);
        return this.http.get(url);
    }

    getCartItems():Observable<any>{
        let url = this.API_PATH + 'cartItems.json';
        console.log(url);
        return this.http.get(url);
    }

}
