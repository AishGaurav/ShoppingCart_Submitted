// __________________ Modules ____________________________
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RoutingModule } from './Routing/routing.module';

// __________________ Components ____________________________
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

// __________________ Services ____________________________
import { ProductService } from './services/products.service';
import { AuthGuard } from './services/authguard.guard';
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    ProductService, 
    AuthGuard, 
    AuthService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
