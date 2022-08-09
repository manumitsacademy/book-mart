import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any=[];
  constructor(private cartService:CartService) { }
  
  ngOnInit(): void {
    this.cartItems = this.cartService.getAllCartItems();
  }

}


