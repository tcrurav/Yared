import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.page.html',
  styleUrls: ['./delete-books.page.scss'],
})
export class DeleteBooksPage implements OnInit {

  constructor(private router: Router) { }

  public alertButtons = ['OK'];

  ngOnInit() {
  }
  //add book
  deleteBook(){

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
