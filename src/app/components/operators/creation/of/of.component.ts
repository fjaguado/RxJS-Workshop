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
