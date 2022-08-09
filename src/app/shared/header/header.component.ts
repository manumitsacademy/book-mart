import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';
import { CartService } from 'src/app/core/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText: any = '';
  cartItemCount: number;

  isSortMenuVisible: boolean;
  criteria: any = ['Price(Low to High)', 'Price(High to Low)', 'Discount(High to Low)', 'Discount(Low to High)'];
  constructor(private cartService: CartService, private booksService: BooksService) { }



  ngOnInit(): void {
    this.cartService.cartSubject.subscribe((cartItems: any) => {
      this.cartItemCount = cartItems.length;
    });
  }

  searchBook(searchText: any) {
    this.booksService.getSearchString(searchText);
  }



  showSortMenu() {
    this.isSortMenuVisible = !this.isSortMenuVisible;
  }

  sortBooks(criterion: any) {
    this.booksService.getSortCriterion(criterion);
  }





}
