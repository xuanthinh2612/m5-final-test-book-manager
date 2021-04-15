import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from './ibook';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

const BACKEND_URL = `${environment.Backend_URL}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  getBookList(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(BACKEND_URL).pipe();
  }

  getBookById(id: number): Observable<IBook> {
    return this.httpClient.get<IBook>(BACKEND_URL + `/${id}`).pipe();
  }

  addNewBook(book: IBook): Observable<IBook> {
    return this.httpClient.post<IBook>(BACKEND_URL, book);
  }

  deleteBookById(id: number): Observable<any> {
    return this.httpClient.delete(BACKEND_URL + `/${id}`);
  }

  updateBook(book: IBook): Observable<IBook> {
    return this.httpClient.put<IBook>(BACKEND_URL + `/${book.id}`, book);
  }

}
