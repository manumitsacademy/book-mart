import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = "/assets/db.json";
  books:any=[];
  searchText:any = '';
  searchSubject = new Subject();
  filteredBooks:any;
  filterCategory: any;
  categoryFilterSubject = new Subject();
  priceFilter:any;
  priceFilterSubject = new Subject();
  discountFilter:any;
  discountFilterSubject = new Subject();
  sortCriterion:any;
  sortSubject = new Subject();
  constructor(public http:HttpClient) { }

  getAllBooks(){
    return this.http.get(this.baseUrl).pipe(map((book: any) => {
      console.log(book);
      this.books = book;
      this.filteredBooks = this.books;
      return book;
    }));

  }

  getSearchString(searchText:any){
    this.searchText = searchText;
    console.log(this.searchText);
    this.searchSubject.next(this.searchText);
  }

  getCurrentBook(id:any){
    return this.books.find((book:any)=>{
      return book.isbn === id.isbn;
    })
  }

  /* getAllCategories(){
    let bookCategory:any=[];
    this.books.map((y:any)=>{
      y.categories.map((z:any)=>{
        bookCategory.push(z);
      });
    });
    let categories:any = [];
    bookCategory.map((a:any)=>{
      let c = categories.find((p:any)=>{
        return a===p;
      });
      if(!c){
        categories.push(a);
      }
    });
    return categories;
  } */

  getAllCategories(){
    let bookCategory = this.books.flatMap((book:any)=>{
      return book.categories;
    });
    let categories = Array.from(new Set(bookCategory));
    return categories;
  }

  getFilterCategory(category:any){
    this.filterCategory = category;
    this.categoryFilterSubject.next(this.filterCategory);
  }
  
  getFilteredBooksByCategory(category:any){
    return this.filteredBooks = this.books.filter((book:any)=>{
      return book.categories.includes(category);
    });
  }

  getPriceFilter(price:any){
    this.priceFilter = price;
    this.priceFilterSubject.next(this.priceFilter);
  }

  getFilteredBooksByPrice(price:any){
    return this.filteredBooks = this.books.filter((book:any)=>{
      return book.price<=price;
    });
  }

  getDiscountFilter(discount:any){
    this.discountFilter = discount;
    this.discountFilterSubject.next(this.discountFilter);
  }

  getFilteredBooksByDiscount(discount:any){
    return this.filteredBooks = this.books.filter((book:any)=>{
      return book.discount>=discount;
    })
  }

  getSortCriterion(criterion:any){
    this.sortCriterion = criterion;
    this.sortSubject.next(this.sortCriterion);
  }

  sortBooks(criteria:any){
    switch(criteria){
      case 'Price(Low to High)':
        this.filteredBooks.sort((a:any,b:any)=>{
          if(a.price<b.price){
            return -1;
          }
          if(a.price>b.price){
            return 1;
          }
          return 0;
        })
        break;
      case 'Price(High to Low)':
        this.filteredBooks.sort((a:any,b:any)=>{
          if(a.price<b.price){
            return 1;
          }
          if(a.price>b.price){
            return -1;
          }
          return 0;
        })
        break;
      case 'Discount(High to Low)':
        this.filteredBooks.sort((a:any,b:any)=>{
          if(a.discount<b.discount){
            return 1;
          }
          if(a.discount>b.discount){
            return -1
          }
          return 0;
        })
        break;
      case 'Discount(Low to High)':
        this.filteredBooks.sort((a:any,b:any)=>{
          if(a.discount<b.discount){
            return -1;
          }
          if(a.discount>b.discount){
            return 1
          }
          return 0;
        })
        break;
    }
    return this.filteredBooks;  
  }

  
}
