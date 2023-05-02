import { Component, OnInit } from '@angular/core';
import { from, mergeMap } from 'rxjs';
import { OF_MERGE_MAP_SECTION } from '../transformation.data';
import { HttpClient } from '@angular/common/http';

@Component({
	selector:    'app-from',
	templateUrl: './merge-map.component.html',
})
export class MergeMapComponent implements OnInit {
	public MERGE_MAP_SECTION = OF_MERGE_MAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;
	public urlArray = [
		'https://jsonplaceholder.typicode.com/posts/1',
		'https://jsonplaceholder.typicode.com/posts/2',
		'https://jsonplaceholder.typicode.com/posts/3',
		'https://jsonplaceholder.typicode.com/posts/4',
		'https://jsonplaceholder.typicode.com/posts/5'
	];

	constructor(private readonly http: HttpClient) {
	}

	public ngOnInit(): void {
		this.enteredText = this.urlArray.join('\n')
	}

	public restartArrayOperator(): void {
		this.sentArrayValue = '';
	}

	public requestInfo(): void {
		from(this.urlArray)
			.pipe(
				mergeMap(url => this.http.get(url))
			)
			.subscribe(data => this.sentArrayValue += this.formatJson(JSON.stringify(data)) + '\n');
	}

	private formatJson(jsonText: string): string {
		try {
			const parsed = JSON.parse(jsonText);
			return JSON.stringify(parsed, null, 2); // Use 2 spaces to indent the JSON
		} catch (error) {
			console.error('Invalid JSON:', error);
			return jsonText; // Return the original JSON if it's invalid
		}
	}

}

const getTsFromArrayCode = (): string => `
import { Component, OnInit } from '@angular/core';
import { from, mergeMap } from 'rxjs';
import { OF_MERGE_MAP_SECTION } from '../transformation.data';
import { HttpClient } from '@angular/common/http';

@Component({
	selector:    'app-from',
	templateUrl: './merge-map.component.html',
})
export class MergeMapComponent implements OnInit {
	public MERGE_MAP_SECTION = OF_MERGE_MAP_SECTION;

	public arrayValue = [10, 20, 30, 50, 60];
	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public enteredText: string;
	public urlArray = [
		'https://jsonplaceholder.typicode.com/posts/1',
		'https://jsonplaceholder.typicode.com/posts/2',
		'https://jsonplaceholder.typicode.com/posts/3',
		'https://jsonplaceholder.typicode.com/posts/4',
		'https://jsonplaceholder.typicode.com/posts/5'
	];

	constructor(private readonly http: HttpClient) {
	}

	public ngOnInit(): void {
		this.enteredText = this.urlArray.join('\n')
	}

	public restartArrayOperator(): void {
		this.sentArrayValue = '';
	}

	public requestInfo(): void {
		from(this.urlArray)
			.pipe(
				mergeMap(url => this.http.get(url))
			)
			.subscribe(data => this.sentArrayValue += this.formatJson(JSON.stringify(data)) + '\n');
	}

	private formatJson(jsonText: string): string {
		try {
			const parsed = JSON.parse(jsonText);
			return JSON.stringify(parsed, null, 2); // Use 2 spaces to indent the JSON
		} catch (error) {
			console.error('Invalid JSON:', error);
			return jsonText; // Return the original JSON if it's invalid
		}
	}

}
`;

const getHTMLFromArrayCode = (): string => `
   <div class="d-flex pt-3 column gap-3">
            <div class="col-6">
                <div class="form-text">MergeMap Operator</div>
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
                    (click)="requestInfo()"
            >
                Request Info
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
