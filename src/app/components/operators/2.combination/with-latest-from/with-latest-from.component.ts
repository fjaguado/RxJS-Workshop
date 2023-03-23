import { Component, OnInit } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { WITH_LATEST_FROM_SECTION } from '../combination.data';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
})
export class WithLatestFromComponent implements OnInit {
  public WITH_LATEST_FROM_SECTION = WITH_LATEST_FROM_SECTION;

  public subscription = new Subscription();

  public sourceInputValue = '10';
  public latestInputValue = '20';
  public combinatedValue = '';

  private sourceObserver = new Subject<string>();
  private latestObserver = new Subject<string>();

  public tsStringCode = getStringTsCode();
  public htmlStringCode = getStringHTMLCode();

  public ngOnInit(): void {
    this.subscribeToInput();
  }

  public doSendSourceObserver(): void {
    this.sourceObserver.next(this.sourceInputValue);
  }

  public doSendLatestObserver(): void {
    this.latestObserver.next(this.latestInputValue);
  }

  public restartOperator(): void {
    this.subscribeToInput();
    this.sourceInputValue = '10';
    this.latestInputValue = '20';
    this.combinatedValue = '';
  }

  private subscribeToInput(): void {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.sourceObserver
      .pipe(withLatestFrom(this.latestObserver))
      .subscribe((val) => {
        console.log(val);
        this.combinatedValue += `Combined value: [${val}] \n`;
      });
  }
}

const getStringTsCode = (): string => `
  import { Component, OnInit } from '@angular/core';
  import { of, Subject, Subscription } from 'rxjs';
  import { withLatestFrom } from 'rxjs/operators';

  @Component({
    selector: 'app-with-latest-from',
    templateUrl: './with-latest-from.component.html',
  })
  export class WithLatestFromComponent implements OnInit {
    public subscription = new Subscription();

    public sourceInputValue = '10';
    public latestInputValue = '20';
    public combinatedValue = '';

    private sourceObserver = new Subject<string>();
    private latestObserver = new Subject<string>();

    public ngOnInit(): void {
      this.subscribeToInput();
    }

    public doSendSourceObserver(): void {
      this.sourceObserver.next(this.sourceInputValue);
    }

    public doSendLatestObserver(): void {
      this.latestObserver.next(this.latestInputValue);
    }

    public restartOperator(): void {
      this.subscribeToInput();
      this.sourceInputValue = '10';
      this.latestInputValue = '20';
      this.combinatedValue = '';
    }

    private subscribeToInput(): void {
      if (!this.subscription.closed) {
        this.subscription.unsubscribe();
      }

      this.subscription = this.sourceObserver
        .pipe(withLatestFrom(this.latestObserver))
        .subscribe((val) => this.combinatedValue += 'Combined value: [' + val + ']');
    }
  }
`;

const getStringHTMLCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6 d-flex row gap-1">
      <div>
        <div class="form-text">Source Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send any value!"
            [(ngModel)]="sourceInputValue"
          />
        </div>
      </div>
      <div>
        <div class="form-text">Latest Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send any value!"
            [(ngModel)]="latestInputValue"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center p-3">
        <button
          class="btn btn-outline-secondary mx-2"
          type="button"
          (click)="doSendSourceObserver()"
        >
          Send source observer!
        </button>
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="doSendLatestObserver()"
        >
          Send latest observer!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">withLatestFrom() strings Subscription</div>
      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control"
          disabled
          value="{{ combinatedValue }}"
          style="height: 170px"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="restartOperator()"
    >
      Restart operator
    </button>
  </div>
`;
