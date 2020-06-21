import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
