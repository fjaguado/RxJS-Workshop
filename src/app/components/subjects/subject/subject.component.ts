import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { SUBJECT_SECTION } from '../subjects.data';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.component.html',
  styles: [
    `
    p {
      text-align: justify;
    }
  `,
  ],
})
export class SubjectComponent {
  public SUBJECT_SECTION = SUBJECT_SECTION;
  public tsCode = getSubjectTSCode();
  public htmlCode = getSubjectHTMLCode();

  public subject = new Subject<string>();

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
    this.subject.next(this.subjectValue);
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
    this.subject.unsubscribe();
  }

  public listen(): Observable<string> {
    return this.subject.asObservable();
  }

  public restartSubject(): void {
    this.subject = new Subject<string>();
    this.restartObservableValues();
  }

  private isSubjectClosed(): boolean {
    if (this.subject.closed) {
      console.log('Subject closed!!');
      return true;
    }
    return false;
  }

  private restartObservableValues(): void {
    this.receivedValue1 = '';
    this.receivedValue2 = '';
    this.receivedValue3 = '';
    this.subjectValue = '';
  }
}

const getSubjectTSCode = (): string => `
  import { Component } from '@angular/core';
  import { Observable, Subject, Subscription } from 'rxjs';

  @Component({
    selector: 'app-subject',
    templateUrl: 'subject.component.html',
  })
  export class SubjectComponent {

    public subject = new Subject<string>();

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
      this.subject.next(this.subjectValue);
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
        (value) => (this.receivedValue2 = 'Observable 2 value:' + value)'
      );
      this.subscription3 = this.observable3.subscribe(
        (value) => (this.receivedValue3 = 'Observable 3 value:' + value)'
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
      this.subject.unsubscribe();
    }

    public listen(): Observable<string> {
      return this.subject.asObservable();
    }

    public restartSubject(): void {
      this.subject = new Subject<string>();
      this.restartObservableValues();
    }

    private isSubjectClosed(): boolean {
      if (this.subject.closed) {
        console.log('Subject closed!!');
        return true;
      }
      return false;
    }

    private restartObservableValues(): void {
      this.receivedValue1 = '';
      this.receivedValue2 = '';
      this.receivedValue3 = '';
      this.subjectValue = '';
    }
  }
  `;

const getSubjectHTMLCode = (): string => `
  <div class="pb-4">
    <app-info-section [selectedData]="SUBJECT_SECTION[4]"></app-info-section>
    <div class="alert alert-danger" *ngIf="subject.closed">
      Subject closed! You're not able to subscribe again and you'll not receive
      any more values!
    </div>
    <div class="pt-3 d-flex column gap-5">
      <div class="d-flex row align-content-center">
        <div class="form-text">Subject Observer</div>
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
        <div class="form-text">Subject 1 (Observable / Listener)</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            disabled
            [value]="receivedValue1"
          />
        </div>
        <div class="form-text">Subject 2 (Observable / Listener)</div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            disabled
            [value]="receivedValue2"
          />
        </div>
        <div class="form-text">Subject 3 (Observable / Listener)</div>
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
        Close Subject
      </button>
      <button
        class="btn btn-outline-secondary"
        type="button"
        (click)="restartSubject()"
      >
        Restart Subject
      </button>
    </div>
    <p>
      Furthermore, in this example we've subscribed three times (in different
      instances) to the same subject and we have a Close Subscriptions button
      that is going to automatically unsubscribe these three subscriptions. If
      it's needed, in other scenarios we'll be able to unsubscribe individually
      from each subscription.
    </p>
    <p>
      Last but not least, if we <u>unsubscribe from the Subject</u>, we are not
      going to be able to receive any new value sent by the Subject's next()
      method and
      <b
        >we are not going to be able to resubscribe to this Subject because we've
        already unsubscribed from it</b
      >.
    </p>
  </div>
  `;
