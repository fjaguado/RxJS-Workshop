import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, from, fromEvent, map, Observable, of, Subscription } from 'rxjs';
import { OF_DEBOUNCE_TIME_SECTION, OF_DISTINCT_UNTIL_KEY_SECTION, OF_DISTINCT_UNTIL_SECTION } from '../filtering.data';

@Component({
	selector:    'app-from',
	templateUrl: './distinct-until-key.component.html',
})

export class DistinctUntilKeyComponent implements OnInit {

	public DISTINCT_UNTIL_KEY_SECTION = OF_DISTINCT_UNTIL_KEY_SECTION;

	public outputArrayValue = '';
	public enteredText = '';
	private initialValues = [
		{name: 'John', age: 25},
		{name: 'John', age: 30},
		{name: 'Jane', age: 30},
		{name: 'Jane', age: 35}
	];
	private currentValues = [];

	private source$ = new BehaviorSubject<{ name: string, age: number }[]>(this.initialValues);
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();

	public ngOnInit(): void {
		this.source$.subscribe(value => {
			this.enteredText = `Name: ${value[0].name} - Age: ${value[0].age}\n` + this.enteredText;
			this.currentValues.unshift(value[0]);
		})
		this.enteredText = this.initialValues.map(value => `Name: ${value.name} - Age: ${value.age}`)
			.join('\n');
		this.currentValues.push(...this.initialValues);
	}

	public restart(): void {
		this.enteredText = this.initialValues.map(value => `Name: ${value.name} - Age: ${value.age}`)
			.join('\n');
		this.currentValues.length = 0;
		this.outputArrayValue = '';
		this.currentValues.push(...this.initialValues);
	}

	public doSendSourceObservable(): void {
		if (this.enteredText) {
			this.outputArrayValue = '';
			from(this.currentValues)
				.pipe(distinctUntilKeyChanged('name', (prev, curr) => prev.toLowerCase() === curr.toLowerCase()))
				.subscribe(
					{
						next: value => {
							console.log(value);
							this.outputArrayValue += `Name: ${value.name} - Age: ${value.age}\n`;
						}
					}
				);
		}
	}

	public doAddSourceData(): void {
		this.source$.next([{name: `Name ${Math.floor(Math.random() * 100) + 1}`, age: Math.floor(Math.random() * 100) + 1}])
	}

}

const getTsFromArrayCode = (): string => `
  // RxJS v6+
    import { of, distinctUntilKeyChanged } from 'rxjs';
    
    of(
      { age: 4, name: 'Foo' },
      { age: 7, name: 'Bar' },
      { age: 5, name: 'Foo' },
      { age: 6, name: 'Foo' }
    ).pipe(
      distinctUntilKeyChanged('name')
    )
    .subscribe(x => console.log(x));
    
    // displays:
    // { age: 4, name: 'Foo' }
    // { age: 7, name: 'Bar' }
    // { age: 5, name: 'Foo' }
`;

const getHTMLFromArrayCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
      <div class="col-6">
        <div class="form-text">DistinctUntilKey Operator</div>
        <div class="input-group align-items-center">
          <textarea
                  type="text"
                  class="form-control"
                  disabled
                  [ngModel]="enteredText"
                  style="height: 170px"
          ></textarea>
        </div>
        <div class="d-flex justify-content-center p-3">
          <button
                  class="btn btn-outline-secondary mx-3"
                  type="button"
                  (click)="doAddSourceData()"
          >
            Add source data!
          </button>
          <button
                  class="btn btn-outline-secondary mx-3"
                  type="button"
                  (click)="doSendSourceObservable()"
          >
            Emit source data!
          </button>
        </div>
      </div>
      <div class="col-6">
        <div class="form-text">Output:</div>
        <div class="input-group mb-3">
          <textarea
                  type="text"
                  class="form-control"
                  disabled
                  [ngModel]="outputArrayValue"
                  style="height: 170px"
          ></textarea>
        </div>
      </div>
    </div>
`;
