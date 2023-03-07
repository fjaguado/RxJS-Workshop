import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { SUBJECT_SECTION } from '../subjects.data';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.component.html',
})
export class SubjectComponent {
  public SUBJECT_SECTION = SUBJECT_SECTION;

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

  private isSubjectClosed(): boolean {
    if (this.subject.closed) {
      console.log('Subject closed!!');
      return true;
    }
    return false;
  }
}
