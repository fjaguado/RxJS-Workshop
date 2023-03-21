import { Component } from '@angular/core';
import { AsyncSubject, Observable, Subscription } from 'rxjs';
import { ASYNC_SUBJECT_SECTION } from '../subjects.data';

type OBSERVABLE_SELECTED = 'obs1' | 'obs2' | 'obs3';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styles: [
    `
    p {
      text-align: justify;
    }
  `,
  ],
})
export class AsyncSubjectComponent {
  public ASYNC_SUBJECT_SECTION = ASYNC_SUBJECT_SECTION;
  public tsCode = getAsyncSubjectTSCode();
  public htmlCode = getAsyncSubjectHTMLCode();

  public subjectCompleted = false;

  public asyncSubject = new AsyncSubject<string>();

  public observable1: Observable<string>;
  public observable2: Observable<string>;
  public observable3: Observable<string>;

  public subscription1: Subscription;
  public subscription2: Subscription;
  public subscription3: Subscription;

  public subjectValue = '';
  public receivedValue1: string[] = [];
  public receivedValue2: string[] = [];
  public receivedValue3: string[] = [];

  public doSendValue(): void {
    this.asyncSubject.next(this.subjectValue);
  }

  public openSubscription(type: OBSERVABLE_SELECTED): void {
    if (type === 'obs1' && !this.subscription1) {
      this.observable1 = this.listen();
      this.subscription1 = this.observable1.subscribe({
        next: (value) => this.receivedValue1.push(value),
      });
    }
    if (type === 'obs2' && !this.subscription2) {
      this.observable2 = this.listen();
      this.subscription2 = this.observable2.subscribe((value) =>
        this.receivedValue2.push(value)
      );
    }
    if (type === 'obs3' && !this.subscription3) {
      this.observable3 = this.listen();
      this.subscription3 = this.observable3.subscribe((value) =>
        this.receivedValue3.push(value)
      );
    }
  }

  public listen(): Observable<string> {
    return this.asyncSubject.asObservable();
  }

  public closeSubscription(type: OBSERVABLE_SELECTED): void {
    if (type === 'obs1' && this.subscription1) {
      this.subscription1.unsubscribe();
      return;
    }
    if (type === 'obs2' && this.subscription2) {
      this.subscription2.unsubscribe();
      return;
    }
    if (type === 'obs3' && this.subscription3) {
      this.subscription3.unsubscribe();
    }
  }

  public restartSubscription(type: OBSERVABLE_SELECTED): void {
    if (type === 'obs1' && this.subscription1) {
      this.subscription1 = undefined;
      this.observable1 = undefined;
      this.receivedValue1 = [];
      return;
    }
    if (type === 'obs2' && this.subscription2) {
      this.subscription2 = undefined;
      this.observable2 = undefined;
      this.receivedValue2 = [];
      return;
    }
    if (type === 'obs3' && this.subscription3) {
      this.subscription3 = undefined;
      this.observable3 = undefined;
      this.receivedValue3 = [];
    }
  }

  public restartSubject(): void {
    this.asyncSubject = new AsyncSubject();

    this.subjectCompleted = false;

    this.subjectValue = '';

    this.subscription1 = undefined;
    this.subscription2 = undefined;
    this.subscription3 = undefined;

    this.receivedValue1 = [];
    this.receivedValue2 = [];
    this.receivedValue3 = [];
  }

  public completeSubject(): void {
    this.asyncSubject.complete();
    this.subjectCompleted = true;
  }
}

const getAsyncSubjectTSCode = (): string => `
  import { Component } from '@angular/core';
  import { AsyncSubject, Observable, Subscription } from 'rxjs';
  import { ASYNC_SUBJECT_SECTION } from '../subjects.data';

  type OBSERVABLE_SELECTED = 'obs1' | 'obs2' | 'obs3';

  @Component({
    selector: 'app-async-subject',
    templateUrl: './async-subject.component.html',
  })
  export class AsyncSubjectComponent {
    public ASYNC_SUBJECT_SECTION = ASYNC_SUBJECT_SECTION;

    public subjectCompleted = false;

    public asyncSubject = new AsyncSubject<string>();

    public observable1: Observable<string>;
    public observable2: Observable<string>;
    public observable3: Observable<string>;

    public subscription1: Subscription;
    public subscription2: Subscription;
    public subscription3: Subscription;

    public subjectValue = '';
    public receivedValue1: string[] = [];
    public receivedValue2: string[] = [];
    public receivedValue3: string[] = [];

    public doSendValue(): void {
      this.asyncSubject.next(this.subjectValue);
    }

    public openSubscription(type: OBSERVABLE_SELECTED): void {
      if (type === 'obs1' && !this.subscription1) {
        this.observable1 = this.listen();
        this.subscription1 = this.observable1.subscribe({
          next: (value) => this.receivedValue1.push(value),
        });
      }
      if (type === 'obs2' && !this.subscription2) {
        this.observable2 = this.listen();
        this.subscription2 = this.observable2.subscribe((value) =>
          this.receivedValue2.push(value)
        );
      }
      if (type === 'obs3' && !this.subscription3) {
        this.observable3 = this.listen();
        this.subscription3 = this.observable3.subscribe((value) =>
          this.receivedValue3.push(value)
        );
      }
    }

    public listen(): Observable<string> {
      return this.asyncSubject.asObservable();
    }

    public closeSubscription(type: OBSERVABLE_SELECTED): void {
      if (type === 'obs1' && this.subscription1) {
        this.subscription1.unsubscribe();
        return;
      }
      if (type === 'obs2' && this.subscription2) {
        this.subscription2.unsubscribe();
        return;
      }
      if (type === 'obs3' && this.subscription3) {
        this.subscription3.unsubscribe();
      }
    }

    public restartSubscription(type: OBSERVABLE_SELECTED): void {
      if (type === 'obs1' && this.subscription1) {
        this.subscription1 = undefined;
        this.observable1 = undefined;
        this.receivedValue1 = [];
        return;
      }
      if (type === 'obs2' && this.subscription2) {
        this.subscription2 = undefined;
        this.observable2 = undefined;
        this.receivedValue2 = [];
        return;
      }
      if (type === 'obs3' && this.subscription3) {
        this.subscription3 = undefined;
        this.observable3 = undefined;
        this.receivedValue3 = [];
      }
    }

    public restartSubject(): void {
      this.asyncSubject = new AsyncSubject();

      this.subjectCompleted = false;

      this.subjectValue = '';

      this.subscription1 = undefined;
      this.subscription2 = undefined;
      this.subscription3 = undefined;

      this.receivedValue1 = [];
      this.receivedValue2 = [];
      this.receivedValue3 = [];
    }

    public completeSubject(): void {
      this.asyncSubject.complete();
      this.subjectCompleted = true;
    }
  }
  `;

const getAsyncSubjectHTMLCode = (): string => `
    <div class="pt-3 d-flex column gap-5">
      <div class="row gap-1">
        <div class="form-text">AsyncSubject Observer</div>
        <div class="input-group align-items-center">
          <input
            type="text"
            class="form-control"
            placeholder="Send a value!"
            name="subjectValue"
            [(ngModel)]="subjectValue"
            [disabled]="subjectCompleted"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="doSendValue()"
            [disabled]="subjectCompleted"
          >
            Next
          </button>
        </div>
        <div class="form-text mt-3">AsyncSubject 1 (Observable / Listener)</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            disabled
            value="[{{ receivedValue1.toString() }}]"
            [disabled]="subjectCompleted"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="openSubscription('obs1')"
          >
            Open
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="closeSubscription('obs1')"
            [disabled]="subjectCompleted"
          >
            Close
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="restartSubscription('obs1')"
            [disabled]="subjectCompleted"
          >
            Restart
          </button>
        </div>
        <div class="form-text">AsyncSubject 2 (Observable / Listener)</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            disabled
            value="[{{ receivedValue2.toString() }}]"
            [disabled]="subjectCompleted"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="openSubscription('obs2')"
          >
            Open
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="closeSubscription('obs2')"
            [disabled]="subjectCompleted"
          >
            Close
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="restartSubscription('obs2')"
            [disabled]="subjectCompleted"
          >
            Restart
          </button>
        </div>
        <div class="form-text">AsyncSubject 3 (Observable / Listener)</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            disabled
            value="[{{ receivedValue3.toString() }}]"
            [disabled]="subjectCompleted"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="openSubscription('obs3')"
          >
            Open
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="closeSubscription('obs3')"
            [disabled]="subjectCompleted"
          >
            Close
          </button>
          <button
            class="btn btn-outline-secondary"
            type="button"
            (click)="restartSubscription('obs3')"
            [disabled]="subjectCompleted"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center py-4 gap-3">
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="completeSubject()"
        [disabled]="subjectCompleted"
      >
        Complete stream
      </button>
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="restartSubject()"
      >
        Restart AsyncSubject
      </button>
    </div>
  `;
