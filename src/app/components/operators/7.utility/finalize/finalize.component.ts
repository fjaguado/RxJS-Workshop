import { Component, OnInit } from '@angular/core';
import { delay, finalize, noop, Observable, of, tap, timer } from 'rxjs';
import { OF_FINALIZE_SECTION } from '../utility.data';

@Component({
	selector:    'app-from',
	templateUrl: './finalize.component.html',
})
export class FinalizeComponent implements OnInit{
	public FINALIZE_SECTION = OF_FINALIZE_SECTION;

	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;
	public processStarted = false;
	private source$ : Observable<number>;

	public ngOnInit():void {
		this.source$ = of(...[1,2,3,4,5,6,7]).pipe(
			delay(500),
			finalize(() => {
				this.updateSentArrayValue('[finalize] Called');
				this.processStarted = false;
			}),
			tap({
				next: (value) => this.updateSentArrayValue('[next] Called'),
				error: (err) => this.updateSentArrayValue('[error] Not called'),
				complete: () => {
					this.updateSentArrayValue('[tap complete] called');
					this.processStarted = false;
				}
			})
		);
	}

	public startProcessWait() {
		this.sentArrayValue = '';
		this.processStarted = true;

		this.source$.subscribe({
			next: x => this.updateSentArrayValue(`${x}`),
			error: noop,
			complete: () => this.updateSentArrayValue('[complete] Not called')
		});
	}

	public startProcessNoWait() {
		this.sentArrayValue = '';
		this.processStarted = true;

		const sub = this.source$.subscribe({
			next: x => this.updateSentArrayValue(`${x}`),
			error: noop,
			complete: () => this.updateSentArrayValue('[complete] Not called')
		});

		timer(250).subscribe(() => sub.unsubscribe());
	}

	private updateSentArrayValue(text: string): void {
		console.log(text);
		this.sentArrayValue += `${text}\n`;
	}
}

const getTsFromArrayCode = (): string => `
import { Component, OnInit } from '@angular/core';
import { delay, finalize, noop, Observable, of, tap, timer } from 'rxjs';
import { OF_FINALIZE_SECTION } from '../utility.data';

@Component({
 	selector:    'app-from',
 	templateUrl: './finalize.component.html',
})
export class FinalizeComponent implements OnInit{
 	public FINALIZE_SECTION = OF_FINALIZE_SECTION;

 	public sentArrayValue = '';
 	public tsArrayCode = getTsFromArrayCode();
 	public htmlArrayCode = getHTMLFromArrayCode();
 	public enteredText: string;
 	public processStarted = false;
 	private source$ : Observable<number>;

 	public ngOnInit():void {
 	 	this.source$ = of(...[1,2,3,4,5,6,7]).pipe(
 	 	 	delay(500),
 	 	 	finalize(() => {
 	 	 	 	this.updateSentArrayValue('[finalize] Called');
 	 	 	 	this.processStarted = false;
 	 	 	}),
 	 	 	tap({
 	 	 	 	next: (value) => this.updateSentArrayValue('[next] Called'),
 	 	 	 	error: (err) => this.updateSentArrayValue('[error] Not called'),
 	 	 	 	complete: () => {
 	 	 	 	 	this.updateSentArrayValue('[tap complete] called');
 	 	 	 	 	this.processStarted = false;
 	 	 	 	}
 	 	 	})
 	 	);
 	}

 	public startProcessWait() {
 	 	this.sentArrayValue = '';
 	 	this.processStarted = true;

 	 	this.source$.subscribe({
 	 	 	next: x => this.updateSentArrayValue(\`\${x}\`),
 	 	 	error: noop,
 	 	 	complete: () => this.updateSentArrayValue('[complete] Not called')
 	 	});
 	}

 	public startProcessNoWait() {
 	 	this.sentArrayValue = '';
 	 	this.processStarted = true;

 	 	const sub = this.source$.subscribe({
 	 	 	next: x => this.updateSentArrayValue(\`\${x}\`),
 	 	 	error: noop,
 	 	 	complete: () => this.updateSentArrayValue('[complete] Not called')
 	 	});

 	 	timer(250).subscribe(() => sub.unsubscribe());
 	}

 	private updateSentArrayValue(text: string): void {
 	 	console.log(text);
 	 	this.sentArrayValue += \`\${text}\\n\`;
 	}
}
`;

const getHTMLFromArrayCode = (): string => `
   <div class="d-flex pt-3 column gap-3">
            <div class="col-6">
                <div class="form-text">ShareReplay Operator</div>
                <div class="d-flex justify-content-center p-3">
                    <button
                            class="btn btn-outline-secondary mx-3"
                            type="button"
                            (click)="startProcessWait()"
                            [disabled]="processStarted"
                    >
                        Wait until complete!
                    </button>
                    <button
                            class="btn btn-outline-secondary mx-3"
                            type="button"
                            (click)="startProcessNoWait()"
                            [disabled]="processStarted"
                    >
                        No wait until complete!
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
