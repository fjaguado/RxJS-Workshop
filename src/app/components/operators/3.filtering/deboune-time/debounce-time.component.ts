import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable } from 'rxjs';
import { OF_DEBOUNCE_TIME_SECTION } from '../filtering.data';

@Component({
	selector:    'app-from',
	templateUrl: './debounce-time.component.html',
})
export class DebounceTimeComponent implements  AfterViewInit {

	public DEBOUNCE_TIME_SECTION = OF_DEBOUNCE_TIME_SECTION;

	public sentArrayValue = '';
	public enteredText = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	@ViewChild("inputText")	 searchBox : ElementRef;
	private keyup$: Observable<Event>;

	public ngAfterViewInit(): void {
		if (this.searchBox) {
			this.keyup$ = fromEvent(this.searchBox.nativeElement, 'keyup');
			// wait .5s between keyups to emit current value
			this.keyup$.pipe(
				map((i: any) => i.currentTarget.value),
				debounceTime(500)
			)
				.subscribe({
					next:     result => {
						if (result && result.trim().length > 0)
						this.sentArrayValue = this.sentArrayValue.concat(`${result}\n`);
					},
					error:    err => {

					},
					complete: () => {
					}
				});
		} else {
			console.log(`searchBox ${this.searchBox}`);
		}
	}
	public restart(): void {
		this.enteredText = '';
		this.sentArrayValue = '';
	}
}

const getTsFromArrayCode = (): string => `
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable } from 'rxjs';
import { OF_DEBOUNCE_TIME_SECTION } from '../filtering.data';

@Component({
	selector:    'app-from',
	templateUrl: './debounce-time.component.html',
})
export class DebounceTimeComponent implements  AfterViewInit {

	public DEBOUNCE_TIME_SECTION = OF_DEBOUNCE_TIME_SECTION;

	public sentArrayValue = '';
	public enteredText = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	@ViewChild("inputText")	 searchBox : ElementRef;
	private keyup$: Observable<Event>;

	public ngAfterViewInit(): void {
		if (this.searchBox) {
			this.keyup$ = fromEvent(this.searchBox.nativeElement, 'keyup');
			// wait .5s between keyups to emit current value
			this.keyup$.pipe(
				map((i: any) => i.currentTarget.value),
				debounceTime(500)
			)
				.subscribe({
					next:     result => {
						if (result && result.trim().length > 0)
						this.sentArrayValue = this.sentArrayValue.concat(\`\${result}\n\`);
					},
					error:    err => {

					},
					complete: () => {
					}
				});
		} else {
			console.log(\`searchBox \${this.searchBox}\`);
		}
	}
	public restart(): void {
		this.enteredText = '';
		this.sentArrayValue = '';
	}
}
`;

const getHTMLFromArrayCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
  <div class="col-6">
    <div class="form-text">DebounceTime Operator</div>
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
