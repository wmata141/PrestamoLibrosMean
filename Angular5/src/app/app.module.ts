import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';

import { CrateUpdateComponent } from './components/book/crate-update/crate-update.component';
import { ListBookComponent } from './components/book/list/list.component';

import { LendComponent } from './components/book/lend/lend.component';
import { LendDetailComponent } from './components/lend/lend/lend.component';
import { LendListComponent } from './components/lend/list/list.component';

import { BookService } from './services/book/book.service';
import { LendService } from './services/lend/lend.service';

const appRoutes:Routes=[
  { path:'book',component:ListBookComponent },
  { path:'book/createUpdate',component:CrateUpdateComponent},
  { path:'book/lend',component:LendComponent},
  { path:'lend',component:LendListComponent},
  { path:'lend/detail',component:LendDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CrateUpdateComponent,
    LendComponent,
    ListBookComponent,
    LendListComponent,
    LendDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService, LendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
