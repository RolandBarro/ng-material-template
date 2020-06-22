import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/subscription/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'https://product-subscription.herokuapp.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {
    const { baseUrl } = this;
    return this.http.get<Product[]>(`${baseUrl}/products`);
  }
}
