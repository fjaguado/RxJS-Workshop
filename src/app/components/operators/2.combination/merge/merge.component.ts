import { Component } from '@angular/core';
import { map, merge, Subscription, timer } from 'rxjs';
import { MERGE_SECTION } from '../combination.data';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
})
export class MergeComponent {
  public MERGE_SECTION = MERGE_SECTION;

  public subscription = new Subscription();

  public firstInputValue = '1';
  public secondInputValue = '2';
  public thirdInputValue = '3';
  public combinedValue = '';

  public tsStringCode = getStringTsCode();
  public htmlStringCode = getStringHTMLCode();

  public restartOperator(): void {
    this.firstInputValue = '1';
    this.secondInputValue = '2';
    this.thirdInputValue = '3';
    this.combinedValue = '';
  }

  public mergeValues(): void {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    const firstObserver = timer(2000).pipe(map(() => this.firstInputValue));
    const secondObserver = timer(6000).pipe(map(() => this.secondInputValue));
    const thirdObserver = timer(4000).pipe(map(() => this.thirdInputValue));

    this.subscription = merge(
      firstObserver,
      secondObserver,
      thirdObserver
    ).subscribe((val) => {
      console.log(val);
      this.combinedValue += `Received value: ${val} \n`;
    });
  }
}

const getStringTsCode = (): string => `
  import { Component } from '@angular/core';
  import { map, merge, Subscription, timer } from 'rxjs';

  @Component({
    selector: 'app-merge',
    templateUrl: './merge.component.html',
  })
  export class MergeComponent {

    public subscription = new Subscription();

    public firstInputValue = '1';
    public secondInputValue = '2';
    public thirdInputValue = '3';
    public combinedValue = '';

    public restartOperator(): void {
      this.firstInputValue = '1';
      this.secondInputValue = '2';
      this.thirdInputValue = '3';
      this.combinedValue = '';
    }

    public mergeValues(): void {
      if (!this.subscription.closed) {
        this.subscription.unsubscribe();
      }

      const firstObserver = timer(2000).pipe(map(() => this.firstInputValue));
      const secondObserver = timer(6000).pipe(map(() => this.secondInputValue));
      const thirdObserver = timer(4000).pipe(map(() => this.thirdInputValue));

      this.subscription = merge(
        firstObserver,
        secondObserver,
        thirdObserver
      ).subscribe(val => this.combinedValue += 'Received value: + val');
    }
  }
`;

const getStringHTMLCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6 d-flex row gap-1">
      <div>
        <div class="form-text">First Observer (2 seconds delay to emit)</div>
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
        <div class="form-text">Second Observer (6 seconds delay to emit)</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send any value!"
            [(ngModel)]="secondInputValue"
          />
        </div>
      </div>
      <div>
        <div class="form-text">Third Observer (4 seconds delay to emit)</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send any value!"
            [(ngModel)]="thirdInputValue"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center p-3">
        <button
          class="btn btn-outline-secondary mx-3"
          type="button"
          (click)="mergeValues()"
        >
          Merge!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">merge() strings Subscription</div>
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
