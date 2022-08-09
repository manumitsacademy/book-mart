import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { SearchPipe } from '../core/search.pipe';
import { FormsModule } from '@angular/forms';
import { SidePanelComponent } from './side-panel/side-panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartItemComponent,
    PriceDetailsComponent,
    SearchPipe,
    SidePanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
