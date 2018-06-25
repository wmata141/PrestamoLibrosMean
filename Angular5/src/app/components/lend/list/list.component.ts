import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LendService } from '../../../services/lend/lend.service';
import { Lend } from '../../../models/lend';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class LendListComponent implements OnInit {
  lends:any;

  constructor(
    private service:LendService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getLends();
  }

  getLends() {
    this.service.getLends().subscribe(
      data => {
        console.log("getLends() data ",data);
        this.lends = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  doDelete(lend) {
    console.log("doDelete");
    this.service.deleteLend(lend._id).subscribe(
      data => {
        this.lends.splice(this.lends.indexOf(lend),1);
      },
      error => {
        console.log(error);
      }
    )
  }

  toDetail(lend) {
    console.log("toDetail");
    this.service.setter(lend);
    this.router.navigate(['/lend/detail']);
  }

}
