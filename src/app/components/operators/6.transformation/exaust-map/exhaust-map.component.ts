import { Component, OnInit } from '@angular/core';
import { exhaustMap, of } from 'rxjs';
import { OF_EXHAUST_MAP_SECTION } from '../transformation.data';

@Component({
	selector:    'app-from',
	templateUrl: './exaust-map.component.html',
})
export class ExhaustMapComponent implements OnInit {
	public EXHAUST_MAP_SECTION = OF_EXHAUST_MAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;
	private srcObservable$ = of(1, 2, 3, 4)
	private innerObservable$ = of('A', 'B', 'C', 'D')

	public ngOnInit(): void {
		this.enteredText = `srcObservable= of(1,2,3,4)\ninnerObservable= of('A','B','C','D')`;
	}

	public restartArrayOperator(): void {
		this.sentArrayValue = '';
	}

	public startProcess(): void {
		this.restartArrayOperator();
		this.srcObservable$.pipe(
			exhaustMap((val) => {
				this.sentArrayValue += `Source value ${val}\n`;
				this.sentArrayValue += `Starting new observable\n`;
				return this.innerObservable$;
			})
		)
			.subscribe(value => this.sentArrayValue += `   InnerObservable ${value}\n`);
	}
}

const getTsFromArrayCode = (): string => `
import { Component, OnInit } from '@angular/core';
import { exhaustMap, of } from 'rxjs';
import { OF_EXHAUST_MAP_SECTION } from '../transformation.data';

@Component({
	selector:    'app-from',
	templateUrl: './exaust-map.component.html',
})
export class ExhaustMapComponent implements OnInit {
	public EXHAUST_MAP_SECTION = OF_EXHAUST_MAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;
	private srcObservable = of(1, 2, 3, 4)
	private innerObservable = of('A', 'B', 'C', 'D')

	public ngOnInit(): void {
		this.enteredText = \`srcObservable= of(1,2,3,4)\ninnerObservable= of('A','B','C','D')\`;
	}

	public restartArrayOperator(): void {
		this.sentArrayValue = '';
	}

	public startProcess(): void {
		this.restartArrayOperator();
		this.srcObservable.pipe(
			exhaustMap((val) => {
				this.sentArrayValue += \`Source value \${val}\n\`;
				this.sentArrayValue += \`Starting new observable\n\`;
				return this.innerObservable;
			})
		)
			.subscribe(value => this.sentArrayValue += \`   InnerObservable \${value}\n\`);
	}
}
`;

const getHTMLFromArrayCode = (): string => `
   <div class="d-flex pt-3 column gap-3">
            <div class="col-6">
                <div class="form-text">ExhaustMap Operator</div>
                <div class="input-group align-items-center">
                    <textarea
                            class="form-control"
                            disabled
                            value="{{ enteredText }}"
                            style="height: 170px"
                    ></textarea>
                </div>
            </div>
            <div class="col-6">
                <div class="form-text">Output:</div>
                <div class="input-group mb-3">
          <textarea
                  class="form-control"
                  disabled
                  value="{{ sentArrayValue }}"
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
