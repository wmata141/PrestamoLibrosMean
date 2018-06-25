import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models/book';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListBookComponent implements OnInit {
  books:any;

  constructor(
    private service:BookService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.service.getBooks().subscribe(
      data => {
        console.log("data",data);
        this.books = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  newBook(event: any) {
    console.log("newBook");
    event.preventDefault();
    this.service.setter(new Book());
    this.router.navigate(['/book/createUpdate']);
  }

  doUpdate(book) {
    console.log("doUpdate");
    console.log(book);
    this.service.setter(book);
    this.router.navigate(['/book/createUpdate']);
  }

  doDelete(book) {
    console.log("doDelete");
    this.service.deleteBook(book._id).subscribe(
      data => {
        this.books.splice(this.books.indexOf(book),1);
      },
      error => {
        console.log(error);
      }
    )
  }

  doLend(book) {
    console.log("doLend");
    console.log(book);
    this.service.setter(book);
    this.router.navigate(['/book/lend']);
  }

}
