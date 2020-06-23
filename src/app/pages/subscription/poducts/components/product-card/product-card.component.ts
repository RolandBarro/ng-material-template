import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/subscription/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() showFooter = true;
  @Output() subscribe = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubscribe(product: Product) {
    this.subscribe.emit(product);
  }
}
