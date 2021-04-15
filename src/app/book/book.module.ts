import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {AddNewBookComponent} from './add-new-book/add-new-book.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    AddNewBookComponent,
    DeleteComponent,
    UpdateComponent,

  ],
    imports: [
        CommonModule,
        BookRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class BookModule { }
