import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../../models/book';
import { Lend } from '../../models/lend';

@Injectable({
  providedIn: 'root'
})
export class LendService {
  private book: Book;
  private lend: Lend;
  private baseUri: string='http://localhost:3001';
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  getLends() {
    return this.http.get(this.baseUri+'/lend');
  }
  saveLend(lend: Lend) {
    return this.http.post(this.baseUri+'/lend',lend);
  }
  deleteLend(id: string) {
    return this.http.delete(this.baseUri+'/lend/'+id);
  }
  setter(lend:Lend) {
    this.lend=lend;
  }
  getter() {
    return this.lend;
  }
}
