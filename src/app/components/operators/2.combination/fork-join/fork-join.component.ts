import { Component } from '@angular/core';
import { forkJoin, map, Observable, Subscription, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CoinbaseAPI, CoinGekoAPI } from '../../../../models/api.model';
import { FORK_JOIN_SECTION } from '../combination.data';

type ForkJoinType = CoinbaseAPI | CoinGekoAPI[] | string;

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
})
export class ForkJoinComponent {
  public FORK_JOIN_SECTION = FORK_JOIN_SECTION;

  public subscription = new Subscription();

  public firstInputURL =
    'https://api.coinbase.com/v2/exchange-rates?currency=BTC';
  public secondInputURL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  public thirdInputValue = '3';
  public combinedValue = '';

  public tsStringCode = getStringTsCode();
  public htmlStringCode = getStringHTMLCode();

  public restartOperator(): void {
    this.thirdInputValue = '3';
    this.combinedValue = '';
  }

  public forkJoinValues(): void {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }

    // ajax is a rxjs operator that performs a GET HTTP request with default response to JSON
    const coinbaseObserver: Observable<CoinbaseAPI> = ajax.getJSON(
      this.firstInputURL
    );
    const coingeckoObserver: Observable<CoinGekoAPI[]> = ajax.getJSON(
      this.secondInputURL
    );
    const thirdObserver = timer(3000).pipe(map(() => this.thirdInputValue));

    const forkJoinArray = [coinbaseObserver, coingeckoObserver, thirdObserver];

    this.subscription = forkJoin(forkJoinArray).subscribe(
      (val: ForkJoinType[]) => {
        console.log(val);
        val.forEach((el) => {
          if (typeof el === 'string') {
            this.combinedValue += `String value: \t\t ${el} \n`;
            return;
          }
          if (this.isCoinbaseType(el)) {
            this.combinedValue += `Coinbase value: \t U$D ${el.data.rates['USDT']} \n`;
            return;
          }
          const price = (el as CoinGekoAPI[]).find(
            ({ symbol }) => symbol === 'btc'
          )?.current_price;
          this.combinedValue += `CoinGeko value: \t U$D ${price} \n`;
        });
      }
    );
  }

  private isCoinbaseType(val: any): val is CoinbaseAPI {
    return 'data' in val;
  }
}

const getStringTsCode = (): string => `
  import { Component } from '@angular/core';
  import { forkJoin, map, Observable, Subscription, timer } from 'rxjs';
  import { ajax } from 'rxjs/ajax';
  import { CoinbaseAPI, CoinGekoAPI } from '../../../../models/api.model';

  type ForkJoinType = CoinbaseAPI | CoinGekoAPI[] | string;

  @Component({
    selector: 'app-fork-join',
    templateUrl: './fork-join.component.html',
  })
  export class ForkJoinComponent {

    public subscription = new Subscription();

    public firstInputURL = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC';
    public secondInputURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    public thirdInputValue = '3';
    public combinedValue = '';

    public restartOperator(): void {
      this.thirdInputValue = '3';
      this.combinedValue = '';
    }

    public forkJoinValues(): void {
      if (!this.subscription.closed) {
        this.subscription.unsubscribe();
      }

      // ajax is a rxjs operator that performs a GET HTTP request with default response to JSON
      const coinbaseObserver: Observable<CoinbaseAPI> = ajax.getJSON(this.firstInputURL);
      const coingeckoObserver: Observable<CoinGekoAPI[]> = ajax.getJSON(this.secondInputURL);
      const thirdObserver = timer(3000).pipe(map(() => this.thirdInputValue));

      const forkJoinArray = [coinbaseObserver, coingeckoObserver, thirdObserver];

      this.subscription = forkJoin(forkJoinArray).subscribe(
        (val: ForkJoinType[]) => val.forEach(el => {
            if (typeof el === 'string') {
              this.combinedValue += 'String value: ' + el';
              return;
            }
            if (this.isCoinbaseType(el)) {
              this.combinedValue += 'Coinbase value: U$D ' + el.data.rates['USDT']};
              return;
            }
            const price = (el as CoinGekoAPI[]).find(({ symbol }) => symbol === 'btc')?.current_price;
            this.combinedValue += 'CoinGeko value: U$D ' + price;
        });
      );
    }

    private isCoinbaseType(val: any): val is CoinbaseAPI {
      return 'data' in val;
    }
  }
`;

const getStringHTMLCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6 d-flex row gap-1">
      <div class="d-flex row align-content-center">
        <div class="form-text">First Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send a value!"
            name="subjectValue"
            disabled
            [(ngModel)]="firstInputURL"
          />
        </div>
      </div>
      <div class="d-flex row align-content-center">
        <div class="form-text">Second Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send a value!"
            name="subjectValue"
            disabled
            [(ngModel)]="secondInputURL"
          />
        </div>
      </div>
      <div class="d-flex row align-content-center">
        <div class="form-text">
          Third Observer (will emit after 3 seconds)
        </div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send a value!"
            name="subjectValue"
            [(ngModel)]="thirdInputValue"
          />
        </div>
      </div>
      <div class="d-flex justify-content-center p-3">
        <button
          class="btn btn-outline-secondary mx-3"
          type="button"
          (click)="forkJoinValues()"
        >
          ForkJoin!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">forkJoin() strings Subscription</div>
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
