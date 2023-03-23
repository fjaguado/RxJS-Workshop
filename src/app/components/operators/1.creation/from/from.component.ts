import { Component, OnDestroy } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { FROM_CREATION_SECTION } from '../creation.data';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
})
export class FromComponent implements OnDestroy {
  public FROM_CREATION_SECTION = FROM_CREATION_SECTION;

  public fromArraySubscription = new Subscription();
  public arrayValue = [10, 20, 40, 50, 60];
  public sentArrayValue = '';
  public tsArrayCode = getTsFromArrayCode();
  public htmlArrayCode = getHTMLFromArrayCode();

  public fromPromiseSubscription = new Subscription();
  public promiseValue = 'https://api.publicapis.org/entries';
  public sentPromiseValue = '';
  public tsPromiseCode = getTsFromPromiseCode();
  public htmlPromiseCode = getHTMLFromPromiseCode();

  public ngOnDestroy(): void {
    this.fromArraySubscription.unsubscribe();
    this.fromPromiseSubscription.unsubscribe();
  }

  public doSendArrayValue(): void {
    if (!this.fromArraySubscription.closed) {
      this.fromArraySubscription.unsubscribe();
    }
    this.fromArraySubscription = from(this.arrayValue).subscribe({
      next: (val) => (this.sentArrayValue += `Received value: ${val}\n`),
      error: (err) => (this.sentArrayValue = 'Error fetching data!'),
    });
  }

  public restartArrayOperator(): void {
    this.fromArraySubscription = new Subscription();
    this.sentArrayValue = '';
  }

  public doSendPromiseValue(): void {
    if (!this.fromPromiseSubscription.closed) {
      this.fromPromiseSubscription.unsubscribe();
    }
    const promise = fetch(this.promiseValue).then((res) => res.json());
    this.fromPromiseSubscription = from(promise).subscribe({
      next: (val) => (this.sentPromiseValue = JSON.stringify(val)),
      error: (err) => (this.sentPromiseValue = 'Error fetching data!'),
    });
  }

  public restarPromiseOperator(): void {
    this.fromPromiseSubscription = new Subscription();
    this.sentPromiseValue = '';
    this.promiseValue = 'https://api.publicapis.org/entries';
  }
}

const getTsFromArrayCode = (): string => `
  import { Component } from '@angular/core';
  import { from, Subscription } from 'rxjs';

  @Component({
    selector: 'app-from',
    templateUrl: './from.component.html',
  })
  export class FromComponent implements OnDestroy {
    public fromArraySubscription = new Subscription();
    public arrayValue = [10, 20, 40, 50, 60];
    public sentArrayValue = '';

    public ngOnDestroy(): void {
      this.fromArraySubscription.unsubscribe();
    }

    public doSendArrayValue(): void {
      if (!this.fromArraySubscription.closed) {
        this.fromArraySubscription.unsubscribe();
      }
      this.fromArraySubscription = from(this.arrayValue).subscribe({
        next: (val) => (this.sentArrayValue += 'Received value:' + val),
        error: (err) => (this.sentPromiseValue = 'Error fetching data!'),
      });
    }

    public restartArrayOperator(): void {
      this.fromArraySubscription = new Subscription();
      this.sentValue = '';
      this.inputtedValue = '';
    }
  }
`;

const getHTMLFromArrayCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
  <div class="col-6">
    <div class="form-text">from() Array Operator</div>
    <div class="input-group align-items-center">
      <input
        type="text"
        class="form-control"
        placeholder="Send an array!"
        [value]="arrayValue.toString()"
        disabled
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="doSendArrayValue()"
      >
        Send!
      </button>
    </div>
  </div>
  <div class="col-6">
    <div class="form-text">from() Array Subscription</div>
    <div class="input-group mb-3">
      <textarea
        type="text"
        class="form-control"
        disabled
        value="{{ sentArrayValue.toString() }}"
        style="height: 170px"
      ></textarea>
    </div>
  </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
  <button
    class="btn btn-outline-secondary"
    type="button"
    (click)="restartArrayOperator()"
  >
    Restart operator
  </button>
  </div>
`;

const getTsFromPromiseCode = (): string => `
  import { Component } from '@angular/core';
  import { from, Subscription } from 'rxjs';

  @Component({
    selector: 'app-from',
    templateUrl: './from.component.html',
  })
  export class FromComponent implements OnDestroy {
  
    public fromPromiseSubscription = new Subscription();
    public promiseValue = 'https://api.publicapis.org/entries';
    public sentPromiseValue = '';

    public ngOnDestroy(): void {
      this.fromPromiseSubscription.unsubscribe();
    }

    public doSendPromiseValue(): void {
      if (!this.fromPromiseSubscription.closed) {
        this.fromPromiseSubscription.unsubscribe();
      }
      const promise = fetch(this.promiseValue).then((res) => res.json());
      this.fromPromiseSubscription = from(promise).subscribe({
        next: (val) => (this.sentPromiseValue = JSON.stringify(val)),
        error: (err) => (this.sentPromiseValue = 'Error fetching data!'),
      });
    }
  
    public restarPromiseOperator(): void {
      this.fromPromiseSubscription = new Subscription();
      this.sentPromiseValue = '';
    }
  }
`;

const getHTMLFromPromiseCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
  <div class="col-6">
    <div class="form-text">from() Promise Operator</div>
    <div class="input-group align-items-center">
      <input
        type="text"
        class="form-control"
        placeholder="Set an URL to fetch a JSON!"
        [(ngModel)]="promiseValue"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="doSendPromiseValue()"
      >
        Send!
      </button>
    </div>
  </div>
  <div class="col-6">
    <div class="form-text">from() Promise Subscription</div>
    <div class="input-group mb-3">
      <textarea
        type="text"
        class="form-control"
        disabled
        [ngModel]="sentPromiseValue"
        style="height: 170px"
      ></textarea>
    </div>
  </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
  <button
    class="btn btn-outline-secondary"
    type="button"
    (click)="restarPromiseOperator()"
  >
    Restart operator
  </button>
  </div>
`;
