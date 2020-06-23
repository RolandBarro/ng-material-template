import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from 'src/app/models/subscription/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
