import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductList } from 'src/app/models/subscription/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productList$: Observable<ProductList>;

  constructor(
    private _products: ProductsService,
  ) {
    this.productList$ = this._products.getProducts();

  }

  ngOnInit(): void {
    this.productList$.subscribe((products) => {
      console.log('products: ', products);
    });
  }

}
