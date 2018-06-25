import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private book: Book;
  private baseUri: string='http://localhost:3001';
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get(this.baseUri+'/book');
  }
  saveBook(book: Book) {
    return this.http.post(this.baseUri+'/book',book);
  }
  updateBook(book: Book) {
    return this.http.put(this.baseUri+'/book/'+book._id,book);
  }
  deleteBook(id: string) {
    return this.http.delete(this.baseUri+'/book/'+id);
  }
  setter(book:Book) {
    this.book=book;
  }
  getter() {
    return this.book;
  }
}
