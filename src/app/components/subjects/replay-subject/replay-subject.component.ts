import { Component } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { REPLAY_SUBJECT_SECTION } from '../subjects.data';

@Component({
  selector: 'app-replay-subject',
  templateUrl: 'replay-subject.component.html',
})
export class ReplaySubjectComponent {
  public REPLAY_SUBJECT_SECTION = REPLAY_SUBJECT_SECTION;

  public showReplaySubjectValue = false;

  public replaySubject = new ReplaySubject<string>();

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
    this.replaySubject.next(this.subjectValue);
    this.showReplaySubjectValue = false;
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
    this.replaySubject.unsubscribe();
    this.showReplaySubjectValue = false;
  }

  public listen(): Observable<string> {
    return this.replaySubject.asObservable();
  }

  public showStoragedValue(): void {
    if (this.isSubjectClosed()) {
      return;
    }
    this.showReplaySubjectValue = true;
    setTimeout(() => {
      this.showReplaySubjectValue = false;
    }, 4000);
  }

  public restartSubject(): void {
    this.replaySubject = new ReplaySubject<string>();
  }

  private isSubjectClosed(): boolean {
    if (this.replaySubject.closed) {
      console.log('replaySubject closed!!');
      return true;
    }
    return false;
  }
}
