import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('liveToast') public liveToast;

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
