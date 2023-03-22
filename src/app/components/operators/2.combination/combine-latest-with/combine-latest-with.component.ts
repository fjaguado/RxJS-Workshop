import { Component } from '@angular/core';
import { combineLatestWith, Observable, of, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { CoinbaseAPI, CoinGekoAPI } from '../../../../models/api.model';
import { COMBINE_LATEST_WITH_SECTION } from '../combination.data';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest-with.component.html',
})
export class CombineLatestWithComponent {
  public COMBINE_LATEST_WITH_SECTION = COMBINE_LATEST_WITH_SECTION;

  public combinatedSubscription = new Subscription();
  public firstInputValue = '10';
  public secondInputValue = '20';
  public combinatedValue = '';

  public tsStringCode = getStringTsCode();
  public htmlStringCode = getStringHTMLCode();

  public doCombineStreams(): void {
    if (!this.combinatedSubscription.closed) {
      this.combinatedSubscription.unsubscribe();
    }

    const observer1 = of(this.firstInputValue);
    const observer2 = of(this.secondInputValue);

    this.combinatedSubscription = observer1
      .pipe(combineLatestWith(observer2))
      .subscribe((val) => {
        console.log(val);
        this.combinatedValue += `Combined value: [${val}] \n`;
      });
  }

  public restartOperator(): void {
    this.combinatedSubscription.unsubscribe();
    this.firstInputValue = '10';
    this.secondInputValue = '20';
    this.combinatedValue = '';
  }

  public combinatedCryptoSubscription = new Subscription();
  public firstInputURL =
    'https://api.coinbase.com/v2/exchange-rates?currency=BTC';
  public secondInputURL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
  public combinatedCryptoValue = '';

  public tsCryptoCode = getCryptoTsCode();
  public htmlCryptoCode = getCryptoHTMLCode();

  public doCombineCryptoStreams(): void {
    if (!this.combinatedCryptoSubscription.closed) {
      this.combinatedCryptoSubscription.unsubscribe();
    }

    // ajax is a rxjs operator that performs a GET HTTP request with default response to JSON
    const coinbaseObserver: Observable<CoinbaseAPI> = ajax.getJSON(
      this.firstInputURL
    );
    const coingeckoObserver: Observable<CoinGekoAPI[]> = ajax.getJSON(
      this.secondInputURL
    );

    this.combinatedCryptoSubscription = coinbaseObserver
      .pipe(combineLatestWith(coingeckoObserver))
      .subscribe((val) => {
        console.log(val);
        this.combinatedCryptoValue += `
      Coinbase BTC: ${val[0].data.rates['USDT']}
      CoinGecko BTC: ${val[1].find((el) => el.id === 'bitcoin').current_price}
      Request Time: ${new Date().toLocaleTimeString()}
        `;
      });
  }

  public restartCryptoOperator(): void {
    this.combinatedCryptoSubscription.unsubscribe();
    this.combinatedCryptoValue = '';
  }
}

const getStringTsCode = (): string => `
  import { Component } from '@angular/core';
  import { combineLatestWith, of, Subscription } from 'rxjs';
  import { COMBINE_LATEST_WITH_SECTION } from '../combination.data';

  @Component({
    selector: 'app-combine-latest',
    templateUrl: './combine-latest-with.component.html',
  })
  export class CombineLatestWithComponent {
    public COMBINE_LATEST_WITH_SECTION = COMBINE_LATEST_WITH_SECTION;

    public combinatedSubscription = new Subscription();
    public firstInputValue = '10';
    public secondInputValue = '20';
    public combinatedValue = '';

    public doCombineStreams(): void {
      if (!this.combinatedSubscription.closed) {
        this.combinatedSubscription.unsubscribe();
      }

      const observer1 = of(this.firstInputValue);
      const observer2 = of(this.secondInputValue);

      this.combinatedSubscription = observer1
        .pipe(combineLatestWith(observer2))
        .subscribe((val) => {
          console.log(val);
          this.combinatedValue += 'Combined value: ['+ val +'] \n';
        });
    }

    public restartOperator(): void {
      this.combinatedSubscription.unsubscribe();
      this.firstInputValue = '10';
      this.secondInputValue = '20';
      this.combinatedValue = '';
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
          class="btn btn-outline-secondary"
          type="button"
          (click)="doCombineStreams()"
        >
          Combine streams!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">combineLatestWith() strings Subscription</div>
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

const getCryptoTsCode = (): string => `
  import { Component } from '@angular/core';
  import { combineLatestWith, Observable, Subscription } from 'rxjs';
  import { ajax } from 'rxjs/ajax';
  import { CoinbaseAPI, CoinGekoAPI } from '../../../../models/api.model';
  import { COMBINE_LATEST_WITH_SECTION } from '../combination.data';

  @Component({
    selector: 'app-combine-latest',
    templateUrl: './combine-latest-with.component.html',
  })
  export class CombineLatestWithComponent {
    public COMBINE_LATEST_WITH_SECTION = COMBINE_LATEST_WITH_SECTION;

    public combinatedCryptoSubscription = new Subscription();
    public firstInputURL = 'https://api.coinbase.com/v2/exchange-rates?currency=BTC';
    public secondInputURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';
    public combinatedCryptoValue = '';

    public doCombineCryptoStreams(): void {
      if (!this.combinatedCryptoSubscription.closed) {
        this.combinatedCryptoSubscription.unsubscribe();
      }

      // ajax is a rxjs operator that performs a GET HTTP request with default response to JSON
      const coinbaseObserver: Observable<CoinbaseAPI> = ajax.getJSON(this.firstInputURL);
      const coingeckoObserver: Observable<CoinGekoAPI[]> = ajax.getJSON(this.secondInputURL);

      this.combinatedCryptoSubscription = coinbaseObserver
        .pipe(combineLatestWith(coingeckoObserver))
        .subscribe((val) => {
          this.combinatedCryptoValue += 'Coinbase BTC: '+ val[0].data.rates['USDT'];
          this.combinatedCryptoValue += 'CoinGecko BTC: '+ val[1].find((el) => el.id === 'bitcoin').current_price;
          this.combinatedCryptoValue += 'Request Time: '+ new Date().toLocaleTimeString();
        });
    }

    public restartCryptoOperator(): void {
      this.combinatedCryptoSubscription.unsubscribe();
      this.combinatedCryptoValue = '';
    }
  }
`;

const getCryptoHTMLCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
    <div class="col-6 d-flex row gap-1">
      <div>
        <div class="form-text">First Observer URL</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            [(ngModel)]="firstInputURL"
            disabled
          />
        </div>
      </div>
      <div>
        <div class="form-text">Second Observer URL</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            [(ngModel)]="secondInputURL"
            disabled
          />
        </div>
      </div>
      <div class="d-flex justify-content-center p-3">
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="doCombineCryptoStreams()"
        >
          Combine streams!
        </button>
      </div>
    </div>
    <div class="col-6">
      <div class="form-text">Last BTCs prices</div>
      <div class="input-group mb-3">
        <textarea
          type="text"
          class="form-control"
          disabled
          [ngModel]="combinatedCryptoValue"
          style="height: 220px"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="restartCryptoOperator()"
    >
      Restart operator
    </button>
  </div>
`;
