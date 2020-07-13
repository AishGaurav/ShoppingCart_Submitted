import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from '../check-out/check-out.component';
import { AuthGuard } from '../services/authguard.guard';
import { ProductService } from '../services/products.service';
import { ProductsComponent } from '../products/products.component';

const route : Routes = [
    {
        path : '',
        redirectTo :'products',
        pathMatch : 'full' 
    },
    {
        path : 'products',
        component : ProductsComponent
    },
    {
        path : 'checkout',
        canActivate: [AuthGuard],
        component : CheckOutComponent
    }
];

@NgModule({
    imports : [RouterModule.forRoot(route)],
    exports : [RouterModule]    // to outsource this Router Configurations
})
export class RoutingModule{

}