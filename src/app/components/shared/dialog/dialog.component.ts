import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() dialogType = 'success';
  @Input() message = 'Success!';
  @Input() subMessages: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
