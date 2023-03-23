import { Component } from '@angular/core';
import { of, startWith, Subscription } from 'rxjs';
import { START_WITH_SECTION } from '../combination.data';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
})
export class StartWithComponent {
  public START_WITH_SECTION = START_WITH_SECTION;

  public subscription = new Subscription();

  public firstInputValue = '100';
  public secondInputValue = '200';
  public combinedValue = '';

  public tsStringCode = getStringTsCode();
  public htmlStringCode = getStringHTMLCode();

  public restartOperator(): void {
    this.firstInputValue = '100';
    this.secondInputValue = '200';
    this.combinedValue = '';
  }

  public doStartWith(startWithFirstInput = false): void {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    const observer = startWithFirstInput
      ? of(this.secondInputValue).pipe(startWith(this.firstInputValue))
      : of(this.firstInputValue).pipe(startWith(this.secondInputValue));

    this.subscription = observer.subscribe((val) => {
      console.log(val);
      this.combinedValue += `Received value: ${val} \n`;
    });
  }
}

const getStringTsCode = (): string => `
  import { Component } from '@angular/core';
  import { of, startWith, Subscription } from 'rxjs';

  @Component({
    selector: 'app-start-with',
    templateUrl: './start-with.component.html',
  })
  export class StartWithComponent {

    public subscription = new Subscription();

    public firstInputValue = '100';
    public secondInputValue = '200';
    public combinedValue = '';

    public restartOperator(): void {
      this.firstInputValue = '100';
      this.secondInputValue = '200';
      this.combinedValue = '';
    }

    public startWithObservable(startWithFirstInput = false): void {
      if (!this.subscription.closed) {
        this.subscription.unsubscribe();
      }

      const observer = startWithFirstInput
        ? of(this.secondInputValue).pipe(startWith(this.firstInputValue))
        : of(this.firstInputValue).pipe(startWith(this.secondInputValue));

      this.subscription = observer.subscribe(val => this.combinedValue += 'Received value: ' + val);
    }
  }
`;

const getStringHTMLCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6 d-flex row gap-1">
      <div>
        <div class="form-text">First Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send any value!"
            [(ngModel)]="firstInputValue"
          />
        </div>
      </div>
      <div>
        <div class="form-text">Second Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send any value!"
            [(ngModel)]="secondInputValue"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center p-3">
        <button
          class="btn btn-outline-secondary mx-3"
          type="button"
          (click)="startWithObservable(true)"
        >
          StartWith the first observer!
        </button>
        <button
          class="btn btn-outline-secondary mx-3"
          type="button"
          (click)="startWithObservable()"
        >
          StartWith the second observer!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">startWith() strings Subscription</div>
      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control"
          disabled
          value="{{ combinedValue }}"
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
