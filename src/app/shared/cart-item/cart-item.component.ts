import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item:any;
  discountedPrice: any;
  itemPrice:any;
  constructor(private cartService:CartService) { }
  
  ngOnInit(): void {
    this.getPriceDetails(this.item);
  }

  getPriceDetails(item:any){
    this.discountedPrice = this.cartService.getpriceDetailsInCartItem(item).discountedPrice;
    this.itemPrice = this.cartService.getpriceDetailsInCartItem(item).price;
  }

  
  decItemCount(item:any){
    this.cartService.decProdCount(item);
    this.getPriceDetails(item);
  }

  incItemCount(item:any){
    this.cartService.incProdCount(item);
    this.getPriceDetails(item);
  }

  removeItem(item:any){
    this.cartService.removeItemFromCart(item);
  }


}
