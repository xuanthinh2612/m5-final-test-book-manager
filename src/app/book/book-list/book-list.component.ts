import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BookService} from '../../book.service';
import {IBook} from '../../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: IBook[] = [];

  constructor(private  router: Router,
              private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList() {
    this.bookService.getBookList().subscribe(data => {
        this.bookList = data;
      }, error => {
        console.log(error);
      },
      () => {
        console.log('success');
      });
  }

}
