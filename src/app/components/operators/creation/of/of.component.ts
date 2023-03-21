import { Component } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { OF_CREATION_SECTION } from '../creation.data';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
})
export class OfComponent {
  public OF_CREATION_SECTION = OF_CREATION_SECTION;
  public ofSubscription = new Subscription();
  public inputtedValue = '';
  public sentValue = '';

  public tsCode = getOfComponentTsCode();
  public htmlCode = getOfComponentHTMLCode();

  public doSendValue(): void {
    if (!this.ofSubscription.closed) {
      this.ofSubscription.unsubscribe();
    }
    this.ofSubscription = of(this.inputtedValue).subscribe((val) => {
      this.sentValue = val;
      this.inputtedValue = '';
    });
  }

  public restartOperator(): void {
    this.ofSubscription = new Subscription();
    this.sentValue = '';
    this.inputtedValue = '';
  }
}

const getOfComponentTsCode = (): string => `
  import { Component } from '@angular/core';
  import { of, Subscription } from 'rxjs';

  @Component({
    selector: 'app-of',
    templateUrl: './of.component.html',
  })
  export class OfComponent {
    public ofSubscription = new Subscription();
    public inputtedValue = '';
    public sentValue = '';
  
    public doSendValue(): void {
      if (!this.ofSubscription.closed) {
        this.ofSubscription.unsubscribe();
      }
      this.ofSubscription = of(this.inputtedValue).subscribe((val) => {
        this.sentValue = val;
        this.inputtedValue = '';
      });
    }

    public restartOperator(): void {
      this.ofSubscription = new Subscription();
      this.sentValue = '';
      this.inputtedValue = '';
    }
  }
`;

const getOfComponentHTMLCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
  <div class="col-6">
    <div class="form-text">of() Operator</div>
    <div class="input-group align-items-center">
      <input
        type="text"
        class="form-control"
        placeholder="Send a value!"
        name="inputtedValue"
        [(ngModel)]="inputtedValue"
        (keyup.enter)="doSendValue()"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="doSendValue()"
      >
        Send!
      </button>
    </div>
  </div>
  <div class="col-6">
    <div class="form-text">of() Subscription</div>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        disabled
        value="{{ sentValue.toString() }}"
      />
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
