import { Component } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { REPLAY_SUBJECT_SECTION } from '../subjects.data';

type OBSERVABLE_SELECTED = 'obs1' | 'obs2' | 'obs3';

@Component({
  selector: 'app-replay-subject',
  templateUrl: 'replay-subject.component.html',
  styles: [
    `
    p {
      text-align: justify;
    }
  `,
  ],
})
export class ReplaySubjectComponent {
  public REPLAY_SUBJECT_SECTION = REPLAY_SUBJECT_SECTION;

  public subjectExecuted = false;

  public replaySubject = new ReplaySubject();

  public observable1: Observable<string>;
  public observable2: Observable<string>;
  public observable3: Observable<string>;

  public subscription1: Subscription;
  public subscription2: Subscription;
  public subscription3: Subscription;

  public subjectValue = '';
  public amountOfRecords = '';
  public windowTime = '';

  public receivedValue1: string[] = [];
  public receivedValue2: string[] = [];
  public receivedValue3: string[] = [];

  public doSendValue(): void {
    this.replaySubject.next(this.subjectValue);
  }

  public openSubscription(type: OBSERVABLE_SELECTED): void {
    if (type === 'obs1') {
      this.observable1 = this.listen();
      this.subscription1 = this.observable1.subscribe({
        next: (value) => this.receivedValue1.push(value),
      });
      return;
    }
    if (type === 'obs2') {
      this.observable2 = this.listen();
      this.subscription2 = this.observable2.subscribe((value) =>
        this.receivedValue2.push(value)
      );
      return;
    }
    this.observable3 = this.listen();

    this.subscription3 = this.observable3.subscribe((value) =>
      this.receivedValue3.push(value)
    );
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

  public listen(): Observable<any> {
    return this.replaySubject.asObservable();
  }

  public restartSubject(): void {
    this.replaySubject = new ReplaySubject();
    this.subjectValue = '';
    this.amountOfRecords = '';
    this.windowTime = '';
    this.subjectExecuted = false;
    this.closeSubscription('obs1');
    this.closeSubscription('obs2');
    this.closeSubscription('obs3');
    this.receivedValue1 = [];
    this.receivedValue2 = [];
    this.receivedValue3 = [];
  }

  public startSubject(): void {
    if (!this.amountOfRecords && !this.windowTime) {
      this.replaySubject = new ReplaySubject();
    } else {
      if (this.amountOfRecords && this.windowTime) {
        this.replaySubject = new ReplaySubject(
          +this.amountOfRecords,
          +this.windowTime
        );
      } else {
        this.replaySubject = new ReplaySubject(undefined, +this.windowTime);
      }
    }
    this.subjectExecuted = true;
  }
}
