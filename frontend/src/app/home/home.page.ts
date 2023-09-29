import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  book:  String = "El problema final";
  autor: String = "ARTURO PÉREZ REVERTE";

  constructor(private router: Router) {}

  gotoUpdateHome() {
    this.router.navigateByUrl("/home");
  }
  gotoMyBooks() {
    this.router.navigateByUrl("/my-books");
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
}


/*
FOOTER GENERAL ---------------------------------------------------------------------------
<!--FOOTER-->
<ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="gotoHome" (click)="gotoHome()">
        <ion-icon name="home"></ion-icon>
        Go Home
      </ion-tab-button>
      <ion-tab-button tab="gotoMyBooks" (click)="gotoMyBooks()">
        <ion-icon name="library"></ion-icon>
        Book's List
      </ion-tab-button>
      <ion-tab-button tab="addBook" (click)="gotoAddBooks()">
        <ion-icon name="add-circle"></ion-icon>
        Add
      </ion-tab-button>
      <ion-tab-button tab="gotoDeleteBooks" (click)="gotoDeleteBooks()">
        <ion-icon name="ban"></ion-icon>
        Delete
      </ion-tab-button>
      <ion-tab-button tab="gotoUpdateBooks" (click)="gotoUpdateBooks()">
        <ion-icon name="repeat"></ion-icon>
        Update
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</ion-content>


//ADD ALERT
//pon el id 
id="present-alert"
en el boton
la clase ion-alert despues del boton 
    <ion-alert
          trigger="present-alert"
          header="Alert"
          message="You are already on this page!"
          [buttons]="alertButtons"
      ></ion-alert>
    

Y pon esto en la pagina .type script 
  public alertButtons = ['OK'];

*/