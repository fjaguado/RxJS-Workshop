import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, from, fromEvent, map, Observable, of, Subscription } from 'rxjs';
import { OF_DEBOUNCE_TIME_SECTION, OF_DISTINCT_UNTIL_SECTION } from '../filtering.data';

@Component({
	selector:    'app-from',
	templateUrl: './distinct-until.component.html',
})
export class DistinctUntilComponent {

	public DISTINCT_UNTIL_SECTION = OF_DISTINCT_UNTIL_SECTION;

	public outputArrayValue = '';
	public enteredText = '1, 1, 2, 2, 3, 3, 4';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();

	public restart(): void {
		this.enteredText = '1, 1, 2, 2, 3, 3, 4';
		this.outputArrayValue = '';
	}

	public doSendSourceObservable(): void {
		if (this.enteredText) {
			const enteredText$ = from(this.enteredText.split(',').map(value => value.trim()));
			enteredText$.pipe(distinctUntilChanged()).subscribe(
				{
					next: value => {
						console.log(value);
						this.outputArrayValue += (this.outputArrayValue.length > 0 ? ', ': '') + value;
					}
				}
			);
			const source$ = of(1, 1, 2, 2, 3, 3, 3, 4, 4);

			source$.pipe(distinctUntilChanged()).subscribe(console.log);
		}
	}
}

const getTsFromArrayCode = (): string => `
  // RxJS v6+
    import { fromEvent } from 'rxjs';
    import { debounceTime, map } from 'rxjs/operators';

    // elem ref
    const searchBox = document.getElementById('search');

    // streams
    const keyup$ = fromEvent(searchBox, 'keyup');

    // wait .5s between keyups to emit current value
    keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(500)
      )
      .subscribe(console.log);
`;

const getHTMLFromArrayCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
  <div class="col-6">
    <div class="form-text">DinstinctUntil Operator</div>
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
