import { Component } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { BEHAVIOR_SUBJECT_SECTION } from '../subjects.data';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styles: [
    `
    p {
      text-align: justify;
    }
  `,
  ],
})
export class BehaviorSubjectComponent {
  public BEHAVIOR_SUBJECT_SECTION = BEHAVIOR_SUBJECT_SECTION;
  public tsCode = getBehaviorSubjectTSCode();
  public htmlCode = getBehaviorSubjectHTMLCode();

  public showBehaviorSubjectValue = false;

  public behaviorSubject = new BehaviorSubject<string>('Initial value');

  public observable1: Observable<string>;
  public observable2: Observable<string>;
  public observable3: Observable<string>;

  public subscription1: Subscription;
  public subscription2: Subscription;
  public subscription3: Subscription;

  public subjectValue = '';

  public receivedValue1 = '';
  public receivedValue2 = '';
  public receivedValue3 = '';

  public doSendValue(): void {
    if (this.isSubjectClosed()) {
      return;
    }
    this.behaviorSubject.next(this.subjectValue);
    this.showBehaviorSubjectValue = false;
  }

  public openSubscriptions(): void {
    if (this.isSubjectClosed()) {
      return;
    }
    this.observable1 = this.listen();
    this.observable2 = this.listen();
    this.observable3 = this.listen();

    this.subscription1 = this.observable1.subscribe({
      next: (value) => (this.receivedValue1 = `Observable 1 value: ${value}`),
    });
    this.subscription2 = this.observable2.subscribe(
      (value) => (this.receivedValue2 = `Observable 2 value: ${value}`)
    );
    this.subscription3 = this.observable3.subscribe(
      (value) => (this.receivedValue3 = `Observable 3 value: ${value}`)
    );
  }

  public closeSubscriptions(): void {
    if (this.isSubjectClosed()) {
      return;
    }
    if (!this.subscription1 && !this.subscription2 && !this.subscription3) {
      return;
    }
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }

  public closeSubject(): void {
    this.behaviorSubject.unsubscribe();
    this.showBehaviorSubjectValue = false;
  }

  public listen(): Observable<string> {
    return this.behaviorSubject.asObservable();
  }

  public showStoragedValue(): void {
    if (this.isSubjectClosed()) {
      return;
    }
    this.showBehaviorSubjectValue = true;
    setTimeout(() => {
      this.showBehaviorSubjectValue = false;
    }, 4000);
  }

  public getStoragedValue(): String {
    return this.behaviorSubject.value;
  }

  public restartSubject(): void {
    this.behaviorSubject = new BehaviorSubject<string>('Initial value');
  }

  private isSubjectClosed(): boolean {
    if (this.behaviorSubject.closed) {
      console.log('BehaviorSubject closed!!');
      return true;
    }
    return false;
  }
}

function getBehaviorSubjectTSCode(): string {
  return `
  import { Component } from '@angular/core';
  import { BehaviorSubject, Observable, Subscription } from 'rxjs';
  import { BEHAVIOR_SUBJECT_SECTION } from '../subjects.data';

  @Component({
    selector: 'app-behavior-subject',
    templateUrl: './behavior-subject.component.html',
  })
  export class BehaviorSubjectComponent {
    public BEHAVIOR_SUBJECT_SECTION = BEHAVIOR_SUBJECT_SECTION;

    public showBehaviorSubjectValue = false;

    public behaviorSubject = new BehaviorSubject<string>('Initial value');

    public observable1: Observable<string>;
    public observable2: Observable<string>;
    public observable3: Observable<string>;

    public subscription1: Subscription;
    public subscription2: Subscription;
    public subscription3: Subscription;

    public subjectValue = '';

    public receivedValue1 = '';
    public receivedValue2 = '';
    public receivedValue3 = '';

    public doSendValue(): void {
      if (this.isSubjectClosed()) {
        return;
      }
      this.behaviorSubject.next(this.subjectValue);
      this.showBehaviorSubjectValue = false;
    }

    public openSubscriptions(): void {
      if (this.isSubjectClosed()) {
        return;
      }
      this.observable1 = this.listen();
      this.observable2 = this.listen();
      this.observable3 = this.listen();

      this.subscription1 = this.observable1.subscribe({
        next: (value) => (this.receivedValue1 = 'Observable 1 value:' + value)',
      });
      this.subscription2 = this.observable2.subscribe(
        (value) => (this.receivedValue2 = 'Observable 2 value:' + value)')
      );
      this.subscription3 = this.observable3.subscribe(
        (value) => (this.receivedValue3 = 'Observable 3 value:' + value)')
      );
    }

    public closeSubscriptions(): void {
      if (this.isSubjectClosed()) {
        return;
      }
      if (!this.subscription1 && !this.subscription2 && !this.subscription3) {
        return;
      }
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
      this.subscription3.unsubscribe();
    }

    public closeSubject(): void {
      this.behaviorSubject.unsubscribe();
      this.showBehaviorSubjectValue = false;
    }

    public listen(): Observable<string> {
      return this.behaviorSubject.asObservable();
    }

    public showStoragedValue(): void {
      if (this.isSubjectClosed()) {
        return;
      }
      this.showBehaviorSubjectValue = true;
      setTimeout(() => {
        this.showBehaviorSubjectValue = false;
      }, 4000);
    }

    public getStoragedValue(): String {
      return this.behaviorSubject.value;
    }

    public restartSubject(): void {
      this.behaviorSubject = new BehaviorSubject<string>('Initial value');
    }

    private isSubjectClosed(): boolean {
      if (this.behaviorSubject.closed) {
        console.log('BehaviorSubject closed!!');
        return true;
      }
      return false;
    }
  }
  `;
}

function getBehaviorSubjectHTMLCode(): string {
  return `
  <div class="alert alert-success" *ngIf="showBehaviorSubjectValue">
    Storaged value: {{ getStoragedValue() }}
  </div>
  <div class="alert alert-danger" *ngIf="behaviorSubject.closed">
    BehaviorSubject closed! You'll not be able to subscribe it again and
    you'll not be able to accesss to its value because it's closed!
  </div>
  <div class="pt-3 d-flex column gap-5">
    <div class="d-flex row align-content-center">
      <div class="form-text">BehaviorSubject Observer</div>
      <div class="input-group align-items-center">
        <input
          type="text"
          class="form-control"
          placeholder="Send a value!"
          name="subjectValue"
          [(ngModel)]="subjectValue"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          (click)="doSendValue()"
        >
          Next
        </button>
      </div>
    </div>
    <div class="d-flex row gap-1">
      <div class="form-text">BehaviorSubject 1 (Observable / Listener)</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          disabled
          [value]="receivedValue1"
        />
      </div>
      <div class="form-text">BehaviorSubject 2 (Observable / Listener)</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          disabled
          [value]="receivedValue2"
        />
      </div>
      <div class="form-text">BehaviorSubject 3 (Observable / Listener)</div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          disabled
          [value]="receivedValue3"
        />
      </div>
    </div>
  </div>
  <div class="d-flex justify-content-center py-4 gap-3">
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="showStoragedValue()"
    >
      Storaged value
    </button>
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="openSubscriptions()"
    >
      Open subscriptions
    </button>
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="closeSubscriptions()"
    >
      Close subscriptions
    </button>
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="closeSubject()"
    >
      Close BehaviorSubject
    </button>
    <button
      class="btn btn-outline-secondary"
      type="button"
      (click)="restartSubject()"
    >
      Restart BehaviorSubject
    </button>
  </div>
  `;
}
