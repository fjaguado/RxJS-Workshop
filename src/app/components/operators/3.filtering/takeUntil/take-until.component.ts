import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, interval, map, Observable, Subject, takeUntil } from 'rxjs';
import { OF_TAKE_UNTIL_SECTION } from '../filtering.data';

@Component({
	selector:    'app-from',
	templateUrl: './take-until.component.html',
})
export class TakeUntilComponent implements OnDestroy {

	public TAKE_UNTIL_SECTION = OF_TAKE_UNTIL_SECTION;

	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public processStarted = false;
	private destroy$: Subject<void>;
	private isCompleted = false;

	public startProcess() {
		this.destroy$ = new Subject<void>();
		this.isCompleted = false;
		this.sentArrayValue = '';
		this.processStarted = true;
		interval(1000)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (value) =>
						  this.sentArrayValue += `${value}\n`,
				error: err => this.stopProcess(),
				complete: () => this.isCompleted = true
			})
	}

	public stopProcess() {
		if (this.destroy$) {
			this.processStarted = false;
			this.destroy$.next();
			this.destroy$.complete();
			if (this.isCompleted) {
				this.sentArrayValue = 'The observable is completed!'
			}
		}
	}

	public ngOnDestroy(): void {
		this.stopProcess();
	}
}

const getTsFromArrayCode = (): string => `
  // RxJS v6+
	import { interval, timer } from 'rxjs';
	import { takeUntil } from 'rxjs/operators';
	
	//emit value every 1s
	const source = interval(1000);
	//after 5 seconds, emit value
	const timer$ = timer(5000);
	//when timer emits after 5s, complete source
	const example = source.pipe(takeUntil(timer$));
	//output: 0,1,2,3
	const subscribe = example.subscribe(val => console.log(val));
`;

const getHTMLFromArrayCode = (): string => `
  <div class="d-flex pt-3 column gap-3">
      <div class="col-6">
        <div class="form-text">TakeUntil Operator</div>
        <div class="d-flex justify-content-center p-3">
          <button
                  class="btn btn-outline-secondary mx-3"
                  type="button"
                  (click)="startProcess()"
          >
            Start!
          </button>
          <button
                  class="btn btn-outline-secondary mx-3"
                  type="button"
                  (click)="stopProcess()"
          >
            Stop!
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
            [ngModel]="sentArrayValue"
            style="height: 170px"
          ></textarea>
        </div>
      </div>
    </div>
`;
