import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductList } from '../models/subscription/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'https://product-subscription.herokuapp.com/api';

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<ProductList> {
    const { baseUrl } = this;
    return this.http.get<ProductList>(`${baseUrl}/products`);
  }
}
