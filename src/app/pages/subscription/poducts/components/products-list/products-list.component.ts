import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { ProductsService } from 'src/app/services/products.service';
import { ProductList, Plan } from 'src/app/models/subscription/product.model';
import { SubscriptionDialogComponent } from '../subscription-dialog/subscription-dialog.component';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productList$: Observable<ProductList>;

  constructor(
    public dialog: MatDialog,
    private _products: ProductsService,
  ) {
    this.productList$ = this._products.getProducts();

  }

  ngOnInit(): void {}

  onSubscribe(plan: Plan) {
    console.log('event: ', plan);

    const dialogRef = this.dialog.open(SubscriptionDialogComponent, {
      width: '25%',
      data: plan
    });

    dialogRef.afterClosed().subscribe(result => {
      this.subscriptionResult(result);
    });
  }

  subscriptionResult(result: Plan) {
    console.log('subscriptionResult: ', result);

    this.dialog.open(DialogComponent, {
      width: '25%',
    });
  }
}
