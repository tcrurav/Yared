import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.page.html',
  styleUrls: ['./add-books.page.scss'],
})
export class AddBooksPage implements OnInit {
  title!: string;
  authorName: string = '';
  public alertButtons = ['OK'];

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
  }

  //addBook
  addBook() {
    //var myTitle;
    //var myAuthor;
    let myBook = {
      title: "pepe",//myTitle,
      author: "a"//myAuthor
    }
    this.bookService.addBook(myBook).subscribe(response => {
      console.log("book added");
    });
  }

  //Router
  gotoHome() {
    this.router.navigateByUrl("/home");
  }
  gotoAddBooks() {
    this.router.navigateByUrl("/add-books");

  }
  gotoDeleteBooks() {
    this.router.navigateByUrl("/delete-books");
  }
  gotoUpdateBooks() {
    this.router.navigateByUrl("/update-books");
  }
  gotoMyBooks() {
    this.router.navigateByUrl("/my-books");
  }

}
