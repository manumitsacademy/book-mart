import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartProducts:any[] = [];
  cartSubject = new Subject();

  constructor() { }

  getDiscountedPrice(currentItem:any){
    return currentItem.price-(currentItem.discount)/100*currentItem.price;
  }

  getAllCartItems(){
    return this.cartProducts;
  }
  
  addProductToCart(product:any){
    let currentBook = {...product,count:1};
    this.cartProducts.push(currentBook);
    this.cartSubject.next(this.cartProducts);
  }

  isProductInCart(product:any){
    let book = this.cartProducts.find((p)=>{
      return p.isbn === product.isbn
    })
    if(book){
      return true
    }
    return false
  }

  getpriceDetailsInCartItem(product:any){
    let priceDetails = {
      discountedPrice: (product.price*product.count)-(product.discount)/100*(product.price*product.count),
      price: product.price*product.count
    }
    return priceDetails;
    
  }

  incProdCount(product:any){
   let index = this.cartProducts.findIndex((item)=>{
     return item.isbn === product.isbn
   });
   this.cartProducts[index].count++;
   this.getpriceDetailsInCartItem(product);
   this.cartSubject.next(this.cartProducts);
  }

  decProdCount(product:any){
    let index = this.cartProducts.findIndex((item)=>{
      return item.isbn === product.isbn
    });
    this.cartProducts[index].count--;
    this.getpriceDetailsInCartItem(product);
    this.cartSubject.next(this.cartProducts);
  }

  removeItemFromCart(product:any){
    let removeConfirm = window.confirm("Are you sure you want to remove this item from the cart?");
    if(removeConfirm){
      let index = this.cartProducts.findIndex((item)=>{
        return item.isbn === product.isbn
      });
      this.cartProducts.splice(index,1);
      this.cartSubject.next(this.cartProducts);
    }
  }

  getBilling(cartItems:any){
    let billingDetails = {
      price: 0,
      discount: 0,
      delivery: 0
    };
    cartItems.forEach((item:any)=>{
      billingDetails.price = billingDetails.price + (item.price*item.count);
      billingDetails.discount = billingDetails.discount + ((item.discount/100*item.price)*item.count);
      billingDetails.price>=1500 ? billingDetails.delivery = 0 : billingDetails.delivery = 50;
    });
    return billingDetails;
  }
}
