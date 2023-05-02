import { Component, OnInit } from '@angular/core';
import { catchError, interval, map, of, Subject, takeUntil, tap } from 'rxjs';
import { OF_TAP_SECTION } from '../utility.data';

@Component({
	selector:    'app-from',
	templateUrl: './tap.component.html',
})
export class TapComponent {
	public TAP_SECTION = OF_TAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public processStarted = false;

	public startProcess(): void {
		this.processStarted = true;
		this.sentArrayValue = '';
		of(...this.arrayValue)
			.pipe(
				tap(val => {
					this.sentArrayValue += `Before ${val}\n`;
				}),
				map(val => {
					return val + 5;
				}),
				tap(val => {
					this.sentArrayValue += `After ${val}\n`;
				})
			)
			.subscribe({
				next:     value => this.sentArrayValue += `${value} \n`,
				error:    err => this.sentArrayValue = 'Error',
				complete: () => this.processStarted = false
			});

	}
}

const getTsFromArrayCode = (): string => `
import { Component, OnInit } from '@angular/core';
import { catchError, interval, map, of, Subject, takeUntil, tap } from 'rxjs';
import { OF_TAP_SECTION } from '../utility.data';

@Component({
 	selector:    'app-from',
 	templateUrl: './tap.component.html',
})
export class TapComponent {
 	public TAP_SECTION = OF_TAP_SECTION;

 	public arrayValue = [10, 20, 30, 50, 60];
 	public sentArrayValue = '';
 	public tsArrayCode = getTsFromArrayCode();
 	public htmlArrayCode = getHTMLFromArrayCode();
 	public processStarted = false;

 	public startProcess(): void {
 	 	this.processStarted = true;
 	 	this.sentArrayValue = '';
 	 	of(...this.arrayValue)
 	 	 	.pipe(
 	 	 	 	tap(val => {
 	 	 	 	 	this.sentArrayValue += \`Before \${val}\\n\`;
 	 	 	 	}),
 	 	 	 	map(val => {
 	 	 	 	 	return val + 5;
 	 	 	 	}),
 	 	 	 	tap(val => {
 	 	 	 	 	this.sentArrayValue += \`After \${val}\\n\`;
 	 	 	 	})
 	 	 	)
 	 	 	.subscribe({
 	 	 	 	next:     value => this.sentArrayValue += \`\${value} \\n\`,
 	 	 	 	error:    err => this.sentArrayValue = 'Error',
 	 	 	 	complete: () => this.processStarted = false
 	 	 	});

 	}
}
`;

const getHTMLFromArrayCode = (): string => `
   <div class="d-flex pt-3 column gap-3">
            <div class="col-6">
                <div class="form-text">Tap Operator</div> 
                <div class="input-group align-items-center">
                <input
                        type="text"
                        class="form-control"
                        [(ngModel)]="arrayValue.toString()"
                />
            </div>
                <div class="d-flex justify-content-center p-3">
                    <button
                            class="btn btn-outline-secondary mx-3"
                            type="button"
                            (click)="startProcess()"
                            [disabled]="processStarted"
                    >
                        Start!
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
        <div class="d-flex justify-content-center p-3">
            <button
                    class="btn btn-outline-secondary mx-3"
                    type="button"
                    (click)="startProcess()"
            >
                Start Process!
            </button>
        </div>
`;
