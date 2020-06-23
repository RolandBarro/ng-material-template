import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Product, Plan } from 'src/app/models/subscription/product.model';

@Component({
  templateUrl: './subscription-dialog.component.html',
  styleUrls: ['./subscription-dialog.component.scss']
})
export class SubscriptionDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SubscriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product,
  ) { }

  ngOnInit(): void {
  }

  onPlanSelected(plan: Plan) {
    this.dialogRef.close(plan);
  }
}
