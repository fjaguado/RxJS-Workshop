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
  public ofInputValue = '';
  public sentValue = '';

  public doSendValue(): void {
    if (!this.ofSubscription.closed) {
      this.ofSubscription.unsubscribe();
    }
    this.ofSubscription = of(this.ofInputValue).subscribe(
      (val) => (this.sentValue = val)
    );
  }

  public restartOperator(): void {}
}
