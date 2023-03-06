import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SUBJECT_SECTION } from '../subjects.data';

@Component({
  selector: 'app-subject',
  templateUrl: 'subject.component.html',
})
export class SubjectComponent {
  public SUBJECT_SECTION = SUBJECT_SECTION;

  public subject = new Subject<string>();
  public subjectValue = '';

  constructor() {}

  public doSendValue(): void {
    this.subject.next(this.subjectValue);
  }
}
