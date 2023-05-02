import { Component } from '@angular/core';
import { interval, Observable, shareReplay, take } from 'rxjs';
import { OF_SHARE_REPLAY_SECTION } from '../multicasting.data';

@Component({
	selector:    'app-from',
	templateUrl: './share-replay.component.html',
})
export class ShareReplayComponent {

	public SHARE_REPLAY_SECTION = OF_SHARE_REPLAY_SECTION;

	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public processStarted = false;
	private shared$: Observable<number>;

	public startProcess() {
		this.sentArrayValue = '';
		this.shared$ = interval(500)
			.pipe(
				take(21),
				shareReplay({bufferSize: 3, refCount: true})
			);
		this.shared$.subscribe(x => this.updateSentArrayValue('sub A: ', x));
		this.shared$.subscribe(y => this.updateSentArrayValue('sub B: ', y));

		setTimeout(() => {
			this.shared$.subscribe(y => this.updateSentArrayValue('sub C: ', y));
		}, 5000);
	}

	private updateSentArrayValue(name: string, value: number): void {
		console.log(name, value);
		this.sentArrayValue = `${name} ${value}\n${this.sentArrayValue}`;
	}
}

const getTsFromArrayCode = (): string => `
import { Component } from '@angular/core';
import { interval, Observable, shareReplay, take } from 'rxjs';
import { OF_SHARE_REPLAY_SECTION } from '../multicasting.data';

@Component({
	selector:    'app-from',
	templateUrl: './share-replay.component.html',
})
export class ShareReplayComponent {

	public SHARE_REPLAY_SECTION = OF_SHARE_REPLAY_SECTION;

	public sentArrayValue = '';
	public tsArrayCode = getTsFromArrayCode();
	public htmlArrayCode = getHTMLFromArrayCode();
	public processStarted = false;
	private shared$: Observable<number>;

	public startProcess() {
		this.sentArrayValue = '';
		this.shared$ = interval(500)
			.pipe(
				take(21),
				shareReplay({bufferSize: 3, refCount: true})
			);
		this.shared$.subscribe(x => this.updateSentArrayValue('sub A: ', x));
		this.shared$.subscribe(y => this.updateSentArrayValue('sub B: ', y));

		setTimeout(() => {
			this.shared$.subscribe(y => this.updateSentArrayValue('sub C: ', y));
		}, 5000);
	}

	private updateSentArrayValue(name: string, value: number): void {
		console.log(name, value);
		this.sentArrayValue = \`\${name} \${value}\\n\${this.sentArrayValue}\`;
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
