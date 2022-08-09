import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  books:any;
  searchText:any;
  cat:any;
  /* isLast = false; */
  constructor(private booksService:BooksService) { }
  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((res)=>{
      this.books = res;
    });

    

    /* window.onscroll = ()=>{
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        let newArr = this.books.concat(this.books);
        this.books = newArr;
        console.log(this.books);
      }
    } */

    this.booksService.searchSubject.subscribe((searchString:any)=>{
      this.searchText = searchString;
    });

    this.booksService.categoryFilterSubject.subscribe((category:any)=>{
      this.booksService.getAllBooks().subscribe((res)=>{
        this.books = res;
        this.books = this.booksService.getFilteredBooksByCategory(category);
      });
    });

    this.booksService.priceFilterSubject.subscribe((price:any)=>{
      this.booksService.getAllBooks().subscribe((res)=>{
        this.books = res;
        this.books = this.booksService.getFilteredBooksByPrice(price);
      });
    });

    this.booksService.discountFilterSubject.subscribe((discount:any)=>{
      this.booksService.getAllBooks().subscribe((res)=>{
        this.books = res;
        this.books = this.booksService.getFilteredBooksByDiscount(discount);
      });
    });

    this.booksService.sortSubject.subscribe((sortCriterion:any)=>{
      this.books = this.booksService.sortBooks(sortCriterion);
    });
  }

  

  /* reRender(last:boolean){
    if(last){
      let newArr = this.books.concat(this.books);
      this.books = newArr;
      console.log(this.books);
    }
  } */


}
