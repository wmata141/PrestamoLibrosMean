import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LendService } from '../../../services/lend/lend.service';
import { Lend } from '../../../models/lend';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lend',
  templateUrl: './lend.component.html',
  styleUrls: ['./lend.component.css']
})
export class LendDetailComponent implements OnInit {
  private lend: Lend;

  constructor(
    private serviceLend:LendService,
    private router:Router
  ) { }

  ngOnInit() {
    this.lend = this.serviceLend.getter();   
    console.log(this.lend);
  } 

}
