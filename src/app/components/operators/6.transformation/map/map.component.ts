import { Component, OnInit } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { OF_MAP_SECTION } from '../transformation.data';

@Component({
	selector:    'app-from',
	templateUrl: './map.component.html',
})
export class MapComponent  {
	public MAP_SECTION = OF_MAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;

	public processStarted = false;

	public startProcess(): void {
		this.processStarted = true;
		this.sentArrayValue = '';
		of(...this.arrayValue)
			.pipe(
				map(val => {
					return val + 5;
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
import { catchError, map, of } from 'rxjs';
import { OF_MAP_SECTION } from '../transformation.data';

@Component({
	selector:    'app-from',
	templateUrl: './map.component.html',
})
export class MapComponent  {
	public MAP_SECTION = OF_MAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;

	public processStarted = false;

	public startProcess(): void {
		this.processStarted = true;
		this.sentArrayValue = '';
		of(...this.arrayValue)
			.pipe(
				map(val => {
					return val + 5;
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
                <div class="form-text">Map Operator</div>
                <div class="input-group align-items-center">
                    <input
                            type="text"
                            class="form-control"
                            [ngModel]="arrayValue.toString()"
                            disabled
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
`;
