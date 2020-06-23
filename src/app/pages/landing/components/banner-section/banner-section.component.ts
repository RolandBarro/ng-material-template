import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, BehaviorSubject, Subject } from 'rxjs';
import { map, takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit, OnDestroy {

  texts = [
    'creatively...',
    'effectively...',
    'artistically...',
    'expressively...',
    'resourcefully...',
    'productively...',
    'productively...',
  ];
  joinText = '';

  private _textShow$ = new BehaviorSubject<string>('');
  textShow$ = this._textShow$.asObservable();

  private _unsubscribe = new Subject<any>();

  constructor() {
    this.typeEffect(this.texts[0]);
    this.typeEffectRunner();
  }

  ngOnInit() {}

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  typeEffectRunner() {
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
              this.joinText = '';
              return this.texts[rndm];
            }
          }
        }),
        takeUntil(this._unsubscribe)
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
        take(length),
        takeUntil(this._unsubscribe)
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

  // TODO: Add backspace effect
  backSpaceEffect(text: string) {
    // console.log('test: ', text);
  }
}
