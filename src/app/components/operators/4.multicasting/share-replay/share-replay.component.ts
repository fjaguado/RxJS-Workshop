import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, shareReplay, Subject, take, takeUntil } from 'rxjs';
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
  // RxJS v6+
	// RxJS v6+
    import { interval, take, shareReplay } from 'rxjs';
 
    const shared$ = interval(2000).pipe(
      take(6),
      shareReplay(3)
    );
     
    shared$.subscribe(x => console.log('sub A: ', x));
    shared$.subscribe(y => console.log('sub B: ', y));
     
    setTimeout(() => {
      shared$.subscribe(y => console.log('sub C: ', y));
    }, 11000);
     
    // Logs:
    // (after ~2000 ms)
    // sub A: 0
    // sub B: 0
    // (after ~4000 ms)
    // sub A: 1
    // sub B: 1
    // (after ~6000 ms)
    // sub A: 2
    // sub B: 2
    // (after ~8000 ms)
    // sub A: 3
    // sub B: 3
    // (after ~10000 ms)
    // sub A: 4
    // sub B: 4
    // (after ~11000 ms, sub C gets the last 3 values)
    // sub C: 2
    // sub C: 3
    // sub C: 4
    // (after ~12000 ms)
    // sub A: 5
    // sub B: 5
    // sub C: 5
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
