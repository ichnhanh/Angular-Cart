import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, Subject, throwError} from "rxjs";
import {Products} from "../../../Model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {

  }

  icons =  [
    'Gray',
    'Gold',
    'Silver',
  ];
  read() {
   return this.http.get<Products[]>('/api/products').pipe(
      catchError(this.handleError)
   );
  }

  readOne(id: string| null) {
    return this.read().pipe(map((dt) => {
      const p = dt.find((p) => p.id === id);
      if (p) {
        return p;
      }
      return {name:'', color: '',price: 0, image: '', status: '',description: ''};
    } ));
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message)) ;
  }
}
