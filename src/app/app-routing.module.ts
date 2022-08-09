import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './shared/cart/cart.component';
import { HomeComponent } from './shared/home/home.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { 
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "product-details",
    component: ProductDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
