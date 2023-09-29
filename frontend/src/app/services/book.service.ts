import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const endpoint = 'http://localhost:8080/api/books';
//Encoder
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  
  //Get
  getBooks() {
    return this.httpClient.get(endpoint);
  }
 
  //Post
  addBook(task: any){
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("task", task);
    const body = bodyEncoded.toString();

    return this.httpClient.post(endpoint, body, httpOptions);
  }
  //Put
  updateBook(bookId: string, task: any) {
    const putEndpoint = endpoint+`/${bookId}`;
  
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("task", task);
  
    const body = bodyEncoded.toString();
  
    return this.httpClient.put(putEndpoint, body, httpOptions);
  }
  //Delete
  deleteBook(task: any){
    const url = `${endpoint}/${task}`;
    return this.httpClient.delete(url, httpOptions);
  }
}
