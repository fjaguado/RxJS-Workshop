import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, of, catchError, map } from 'rxjs';
import { CATCH_ERROR_SECTION } from '../error-handling.data';

@Component({
	selector:    'app-from',
	templateUrl: './catch-error.component.html',
})
export class CatchErrorComponent implements OnInit {
	public CATCH_ERROR_SECTION = CATCH_ERROR_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;

	public ngOnInit(): void {
		this.enteredText = this.arrayValue.join(', ')
	}

	public restartArrayOperator(): void {
		this.sentArrayValue = '';
		this.enteredText = this.arrayValue.join(', ')
	}

	public doSendArrayValueWithCatchError() {
		this.sentArrayValue = '';
		const result$ = of(...this.enteredText.split(','))
			.pipe(
				map(val => {
						let result = parseInt(val, 10);
						if (Number.isNaN(result)) {
							console.log('Errors Occurred in Stream');
							throw new Error("Result is NaN");
						}
						return result;
					}),
				catchError(err => {
					this.sentArrayValue += 'Error parsing number: '+ err;
					return of(Infinity);
				})
			);
		result$.subscribe({
			next:     (value) =>
						  this.sentArrayValue += `Valid number: ${value}\n`,
			error:    err => `Invalid number: ${err}`,
			complete: () => this.sentArrayValue += 'Process completed!'
		})
	}

	public doSendArrayValueWithoutCatchError() {
		this.sentArrayValue = '';
		const result$ = of(...this.enteredText.split(','))
			.pipe(
				map(val => {
					let result = parseInt(val, 10);
					if (Number.isNaN(result)) {
						console.log('Errors Occurred in Stream');
						throw new Error("Result is NaN");
					}
					return result;
				})
			);
		result$.subscribe({
			next:     (value) =>
						  this.sentArrayValue += `Valid number: ${value}\n`,
			error:    err => `Invalid number: ${err}`,
			complete: () => this.sentArrayValue += 'Process completed!'
		})
	}
}

const getTsFromArrayCode = (): string => `
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, from, of, catchError, map } from 'rxjs';
import { CATCH_ERROR_SECTION } from '../error-handling.data';

@Component({
 	selector:    'app-from',
 	templateUrl: './catch-error.component.html',
})
export class CatchErrorComponent implements OnInit {
 	public CATCH_ERROR_SECTION = CATCH_ERROR_SECTION;

 	public arrayValue = [10, 20, 30, 50, 60];
 	public sentArrayValue = '';
 	public tsArrayCode = getTsFromArrayCode();
 	public htmlArrayCode = getHTMLFromArrayCode();
 	public enteredText: string;

 	public ngOnInit(): void {
 	 	this.enteredText = this.arrayValue.join(', ')
 	}

 	public restartArrayOperator(): void {
 	 	this.sentArrayValue = '';
 	 	this.enteredText = this.arrayValue.join(', ')
 	}

 	public doSendArrayValueWithCatchError() {
 	 	this.sentArrayValue = '';
 	 	const result$ = of(...this.enteredText.split(','))
 	 	 	.pipe(
 	 	 	 	map(val => {
 	 	 	 	 	 	let result = parseInt(val, 10);
 	 	 	 	 	 	if (Number.isNaN(result)) {
 	 	 	 	 	 	 	console.log('Errors Occurred in Stream');
 	 	 	 	 	 	 	throw new Error("Result is NaN");
 	 	 	 	 	 	}
 	 	 	 	 	 	return result;
 	 	 	 	 	}),
 	 	 	 	catchError(err => {
 	 	 	 	 	this.sentArrayValue += 'Error parsing number: '+ err;
 	 	 	 	 	return of(Infinity);
 	 	 	 	})
 	 	 	);
 	 	result$.subscribe({
 	 	 	next:     (value) =>
 	 	 	 	 	 	  this.sentArrayValue += \`Valid number: \${value}\\n\`,
 	 	 	error:    err => \`Invalid number: \${err}\`,
 	 	 	complete: () => this.sentArrayValue += 'Process completed!'
 	 	})
 	}

 	public doSendArrayValueWithoutCatchError() {
 	 	this.sentArrayValue = '';
 	 	const result$ = of(...this.enteredText.split(','))
 	 	 	.pipe(
 	 	 	 	map(val => {
 	 	 	 	 	let result = parseInt(val, 10);
 	 	 	 	 	if (Number.isNaN(result)) {
 	 	 	 	 	 	console.log('Errors Occurred in Stream');
 	 	 	 	 	 	throw new Error("Result is NaN");
 	 	 	 	 	}
 	 	 	 	 	return result;
 	 	 	 	})
 	 	 	);
 	 	result$.subscribe({
 	 	 	next:     (value) =>
 	 	 	 	 	 	  this.sentArrayValue += \`Valid number: \${value}\\n\`,
 	 	 	error:    err => \`Invalid number: \${err}\`,
 	 	 	complete: () => this.sentArrayValue += 'Process completed!'
 	 	})
 	}
}
`;

const getHTMLFromArrayCode = (): string => `
   <div class="d-flex pt-3 column gap-3">
            <div class="col-6">
                <div class="form-text">catchError Operator</div>
                <div class="input-group align-items-center">
                    <input
                            type="text"
                            class="form-control"
                            [(ngModel)]="enteredText"
                    />
                </div>
            </div>
            <div class="col-6">
                <div class="form-text">catchError Subscription</div>
                <div class="input-group mb-3">
          <textarea
                  class="form-control"
                  disabled
                  value="{{ sentArrayValue.toString() }}"
                  style="height: 170px"
          ></textarea>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center p-3">
            <button
                    class="btn btn-outline-secondary mx-3"
                    type="button"
                    (click)="doSendArrayValueWithoutCatchError()"
            >
                Send without catchError!
            </button>
            <button
                    class="btn btn-outline-secondary mx-3"
                    type="button"
                    (click)="doSendArrayValueWithCatchError()"
            >
                Send with catchError!
            </button>
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
