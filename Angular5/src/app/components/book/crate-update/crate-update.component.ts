import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../../services/book/book.service';
import { Book } from '../../../models/book';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crate-update',
  templateUrl: './crate-update.component.html',
  styleUrls: ['./crate-update.component.css']
})
export class CrateUpdateComponent implements OnInit {
  private book:Book;
  private fileToUpload: File = null;

  constructor(
    private service:BookService,
    private router:Router,  
  ) { }

  ngOnInit() {
    this.book = this.service.getter();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log("Change of Picture",this.fileToUpload);
    
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.book.picture = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  createUpdate() {
    if (this.book._id == undefined) {       
      console.log("Save");          

      this.service.saveBook(this.book).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/book']);
        },
        error => {
          console.log(error);
        }
      )
    } else {
      console.log("Update");
      this.service.updateBook(this.book).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/book']);
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}
