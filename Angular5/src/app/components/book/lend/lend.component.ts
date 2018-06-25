import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models/book';
import { LendService } from '../../../services/lend/lend.service';
import { Lend } from '../../../models/lend';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendComponent implements OnInit {
  private book: Book;
  private lend = new Lend();

  private day = new Date();

  constructor(
    private serviceBook:BookService,
    private serviceLend:LendService,
    private router:Router
  ) { }

  ngOnInit() {
    this.book = this.serviceBook.getter();       
  } 

  createUpdate() {    
    this.lend.book = this.book; 
    this.lend.today = this.day;

    this.serviceLend.saveLend(this.lend).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/lend']);
      },
      error => {
        console.log(error);
      }
    )    
  }

}
