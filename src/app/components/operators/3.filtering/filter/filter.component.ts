import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilKeyChanged, filter, from, fromEvent, map, Observable, Subscription } from 'rxjs';
import { OF_DEBOUNCE_TIME_SECTION, OF_FILTER_SECTION } from '../filtering.data';

@Component({
	selector:    'app-from',
	templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit{

	public FILTER_SECTION = OF_FILTER_SECTION;

	public outputArrayValue = '';
	public enteredText = '';
	private initialValues = [
		{ name: 'Alice', age: 25 },
		{ name: 'Bob', age: 30 },
		{ name: 'Charlie', age: 35 },
		{ name: 'Dave', age: 40 },
		{ name: 'Emily', age: 45 }
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
				.pipe(filter((value) => value.age > 25))
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
		this.source$.next([{name: `Name ${Math.floor(Math.random() * 100) + 1}`, age: Math.floor(Math.random() * 50) + 1}])
	}

}

const getTsFromArrayCode = (): string => `
  // RxJS v6+
    import { from } from 'rxjs';
    import { filter } from 'rxjs/operators';
    
    const source = [
		{ name: 'Alice', age: 25 },
		{ name: 'Bob', age: 30 },
		{ name: 'Charlie', age: 35 },
		{ name: 'Dave', age: 40 },
		{ name: 'Emily', age: 45 }
		];
    
    //filter ages below 25
    const example = source.pipe(filter((value) => value.age > 25))
    const subscribe = example.subscribe(val => console.log(val));
`;

const getHTMLFromArrayCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
      <div class="col-6">
        <div class="form-text">Filter Operator</div>
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
            Filter ages below 18!
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
