import { Component, OnInit } from '@angular/core';
import { interval, Observable, BehaviorSubject, pipe } from 'rxjs';
import { map, takeUntil, takeWhile, take } from 'rxjs/operators';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {

  texts = [
    'creatively...',
    'effectively...',
    'artistically...',
    'expressively...',
  ];
  joinText = '';

  private _textShow$ = new BehaviorSubject<string>('');
  textShow$ = this._textShow$.asObservable();

  constructor() { }

  ngOnInit() {
    const infiteInterval = interval(5000);
    const textsLength = this.texts.length;

    infiteInterval
      .pipe(
        map(() => {
          let rndm = (Math.random() * 10).toFixed(0);
          for (;;) {
            if (parseInt(rndm, 10) >= textsLength ) {
              rndm = (Math.random() * 10).toFixed(0);
            } else {
              console.log(rndm);

              this.joinText = '';
              return this.texts[rndm];
            }
          }
        })
      )
      .subscribe(text => this.typeEffect(text));
  }

  typeEffect(text: string) {
    const typeWrite = interval(100);
    const splitText = text.split('');
    const length = splitText.length;
    let index = 0;

    typeWrite
      .pipe(
        map(() => {
          return splitText[index];
        }),
        take(length)
      )
      .subscribe(
        (result) => {
          this.joinText += result;
          this._textShow$.next(this.joinText);
          index++;
        },
        (err) => err,
        () => this.backSpaceEffect(this.joinText)
      );
  }

  backSpaceEffect(text: string) {
    console.log('test: ', text);
  }
}
