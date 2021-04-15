import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePgaeComponent} from './home-pgae/home-pgae.component';

const routes: Routes = [
  {
    path: '',
    component: HomePgaeComponent
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
