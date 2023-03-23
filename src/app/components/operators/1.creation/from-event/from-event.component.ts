import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { FROM_EVENT_CREATION_SECTION } from '../creation.data';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
})
export class FromEventComponent implements AfterViewInit, OnDestroy {
  public FROM_EVENT_CREATION_SECTION = FROM_EVENT_CREATION_SECTION;

  public ngAfterViewInit(): void {
    this.subscribeToClickInput();
    this.subscribeToMouseoverInput();
  }

  public ngOnDestroy(): void {
    this.fromEventClickInputSubscription.unsubscribe();
    this.fromEventClickButtonSubscription.unsubscribe();
    this.fromEventMouseoverInputSubscription.unsubscribe();
    this.fromEventMouseoverButtonSubscription.unsubscribe();
  }

  @ViewChild('fromEventClickInput')
  public fromEventClickInput: ElementRef;

  @ViewChild('fromEventClickButton')
  public fromEventClickButton: ElementRef;

  public fromEventClickInputSubscription = new Subscription();
  public fromEventClickButtonSubscription = new Subscription();
  public clickEventValue = '';
  public tsFromEventClickCode = getTsFromEventClickCode();
  public htmlFromEventClickCode = getHTMLFromEventClickCode();

  public subscribeToClickInput(): void {
    if (!this.fromEventClickInputSubscription.closed) {
      this.fromEventClickInputSubscription.unsubscribe();
    }
    this.fromEventClickInputSubscription = fromEvent(
      this.fromEventClickInput.nativeElement,
      'click'
    ).subscribe({
      next: (val) => (this.clickEventValue = 'Clicked on input!'),
      error: (err) => (this.clickEventValue = 'ERROR'),
    });

    if (!this.fromEventClickButtonSubscription.closed) {
      this.fromEventClickButtonSubscription.unsubscribe();
    }
    this.fromEventClickButtonSubscription = fromEvent(
      this.fromEventClickButton.nativeElement,
      'click'
    ).subscribe({
      next: (val) => (this.clickEventValue = 'Clicked on button!'),
      error: (err) => (this.clickEventValue = 'ERROR'),
    });
  }
  public restartClickOperator(): void {
    this.fromEventClickInputSubscription = new Subscription();
    this.fromEventClickButtonSubscription = new Subscription();
    this.clickEventValue = '';
  }

  @ViewChild('fromEventMouseoverInput')
  public fromEventMouseoverInput: ElementRef;
  @ViewChild('fromEventMouseoverButton')
  public fromEventMouseoverButton: ElementRef;
  public fromEventMouseoverInputSubscription = new Subscription();
  public fromEventMouseoverButtonSubscription = new Subscription();
  public mouseoverEventValue = '';
  public tsFromEventMouseoverCode = getTsFromEventMouseoverCode();
  public htmlFromEventMouseoverCode = getHTMLFromEventMouseoverCode();

  public subscribeToMouseoverInput(): void {
    if (!this.fromEventMouseoverInputSubscription.closed) {
      this.fromEventMouseoverInputSubscription.unsubscribe();
    }
    this.fromEventMouseoverInputSubscription = fromEvent(
      this.fromEventMouseoverInput.nativeElement,
      'mouseover'
    ).subscribe({
      next: () => (this.mouseoverEventValue = 'Mouseover on input!'),
      error: () => (this.mouseoverEventValue = 'ERROR'),
    });

    if (!this.fromEventMouseoverButtonSubscription.closed) {
      this.fromEventMouseoverButtonSubscription.unsubscribe();
    }
    this.fromEventMouseoverButtonSubscription = fromEvent(
      this.fromEventMouseoverButton.nativeElement,
      'mouseover'
    ).subscribe({
      next: () => (this.mouseoverEventValue = 'Mouseover on button!'),
      error: () => (this.mouseoverEventValue = 'ERROR'),
    });
  }

  public restartMouseoverOperator(): void {
    this.fromEventMouseoverInputSubscription = new Subscription();
    this.fromEventMouseoverButtonSubscription = new Subscription();
    this.mouseoverEventValue = '';
  }
}

const getTsFromEventClickCode = (): string => `
  import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
  import { fromEvent, Subscription } from 'rxjs';

  @Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
  })
  export class FromEventComponent implements AfterViewInit, OnDestroy {

    public ngAfterViewInit(): void {
      this.subscribeToClickInput();
    }

    public ngOnDestroy(): void {
      this.fromEventClickInputSubscription.unsubscribe();
      this.fromEventClickButtonSubscription.unsubscribe();
    }

    @ViewChild('fromEventClickInput') public fromEventClickInput: ElementRef;
    @ViewChild('fromEventClickButton') public fromEventClickButton: ElementRef;

    public fromEventClickInputSubscription = new Subscription();
    public fromEventClickButtonSubscription = new Subscription();

    public clickEventValue = '';

    public subscribeToClickInput(): void {
      if (!this.fromEventClickInputSubscription.closed) {
        this.fromEventClickInputSubscription.unsubscribe();
      }
      this.fromEventClickInputSubscription = fromEvent( this.fromEventClickInput.nativeElement, 'click').subscribe({
        next: (val) => (this.clickEventValue = 'Clicked on input!'),
        error: (err) => (this.clickEventValue = 'ERROR'),
      });

      if (!this.fromEventClickButtonSubscription.closed) {
        this.fromEventClickButtonSubscription.unsubscribe();
      }
      this.fromEventClickButtonSubscription = fromEvent(this.fromEventClickButton.nativeElement, 'click').subscribe({
        next: (val) => (this.clickEventValue = 'Clicked on button!'),
        error: (err) => (this.clickEventValue = 'ERROR'),
      });
    }

    public restartClickOperator(): void {
      this.fromEventClickInputSubscription = new Subscription();
      this.fromEventClickButtonSubscription = new Subscription();
      this.clickEventValue = '';
    }
}
`;

const getHTMLFromEventClickCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6">
      <div class="form-text">fromEvent() Click Operator</div>
      <div class="input-group align-items-center">
        <input
          type="text"
          class="form-control"
          placeholder="Click on me!"
          #fromEventClickInput
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          #fromEventClickButton
        >
          Or click here!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">fromEvent() Click Subscription</div>
      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control"
          disabled
          value="{{ clickEventValue.toString() }}"
          style="height: 170px"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="restartClickOperator()"
    >
      Restart operator
    </button>
  </div>
`;

const getTsFromEventMouseoverCode = (): string => `
  import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
  import { fromEvent, Subscription } from 'rxjs';

  @Component({
    selector: 'app-from-event',
    templateUrl: './from-event.component.html',
  })
  export class FromEventComponent implements AfterViewInit, OnDestroy {

    public ngAfterViewInit(): void {
      this.subscribeToMouseoverInput();
    }

    public ngOnDestroy(): void {
      this.fromEventMouseoverInputSubscription.unsubscribe();
      this.fromEventMouseoverButtonSubscription.unsubscribe();
    }

    @ViewChild('fromEventMouseoverInput') public fromEventMouseoverInput: ElementRef;
    @ViewChild('fromEventMouseoverButton') public fromEventMouseoverButton: ElementRef;

    public fromEventMouseoverInputSubscription = new Subscription();
    public fromEventMouseoverButtonSubscription = new Subscription();
    
    public mouseoverEventValue = '';

    public tsFromEventMouseoverCode = getTsFromEventMouseoverCode();
    public htmlFromEventMouseoverCode = getHTMLFromEventClickCode();
  
    public subscribeToMouseoverInput(): void {
      if (!this.fromEventMouseoverInputSubscription.closed) {
        this.fromEventMouseoverInputSubscription.unsubscribe();
      }
      this.fromEventMouseoverInputSubscription = fromEvent(this.fromEventMouseoverInput.nativeElement, 'mouseover')
        .subscribe({
          next: (val) => (this.mouseoverEventValue = 'Mouseover on input!'),
          error: (err) => (this.mouseoverEventValue = 'ERROR'),
        });
  
      if (!this.fromEventMouseoverButtonSubscription.closed) {
        this.fromEventMouseoverButtonSubscription.unsubscribe();
      }
      this.fromEventMouseoverButtonSubscription = fromEvent(this.fromEventMouseoverButton.nativeElement, 'mouseover')
        .subscribe({
          next: (val) => (this.mouseoverEventValue = 'Mouseover on button!'),
          error: (err) => (this.mouseoverEventValue = 'ERROR'),
        });
    }

    public restartMouseoverOperator(): void {
      this.fromEventMouseoverInputSubscription = new Subscription();
      this.fromEventMouseoverButtonSubscription = new Subscription();
      this.mouseoverEventValue = '';
    }
}
`;

const getHTMLFromEventMouseoverCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6">
      <div class="form-text">fromEvent() Mouseover Operator</div>
      <div class="input-group align-items-center">
        <input
          type="text"
          class="form-control"
          placeholder="Move the cursor over here!"
          #fromEventMouseoverInput
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          #fromEventMouseoverButton
        >
          Or here!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">fromEvent() Blur Subscription</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          disabled
          value="{{ mouseoverEventValue }}"
        />
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="restartMouseoverOperator()"
    >
      Restart operator
    </button>
  </div>
`;
