import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: ''

  };

  constructor(private router: Router,
              private bookService: BookService,
              private activatedRouter: ActivatedRoute) {

    this.activatedRouter.paramMap.subscribe((paraMap: ParamMap) => {
      let id = +paraMap.get('id');
      this.getBookById(id);

    });
  }
  ngOnInit(): void {
  }
  getBookById(id: number) {
    this.bookService.getBookById(id).subscribe(next => {
      this.book = next;
    });
  }


  deleteBookById(id: number) {
    if (confirm('Bạn có muốn xóa sách khỏi sanh sách')){
      this.bookService.deleteBookById(id).subscribe(() => {
        this.router.navigateByUrl('/book');
      });
    }
  }

}
