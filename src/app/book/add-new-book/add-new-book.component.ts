import {Component, OnInit} from '@angular/core';
import {IBook} from '../../ibook';
import {BookService} from '../../book.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.scss']
})
export class AddNewBookComponent implements OnInit {

  book: IBook = {
    id: Math.floor(Math.random() * 9999999999999),
    title: '',
    description: '',
    author: ''
  };

  createForm: FormGroup;

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      // title: new FormControl(this.book.title,[Validators.required, Validators.minLength(5)]),
      description: new FormControl(this.book.description, [Validators.required, Validators.minLength(100)]),
      author: new FormControl(this.book.description, [Validators.required, Validators.minLength(5)])
    })
  }

  addNewBook() {
    this.bookService.addNewBook(this.book).subscribe(book => {
      this.router.navigateByUrl('book');
    });
  }
}
