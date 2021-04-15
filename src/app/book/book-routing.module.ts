import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {AddNewBookComponent} from './add-new-book/add-new-book.component';
import {DeleteComponent} from './delete/delete.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  },
  {
    path: 'create',
    component: AddNewBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
