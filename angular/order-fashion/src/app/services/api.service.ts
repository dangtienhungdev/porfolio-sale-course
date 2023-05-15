import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.type';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  /* get All */
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`https://fakestoreapi.com/products`);
  }
}
