import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';

const COMPONENTS = [
  SubjectComponent,
  BehaviorSubjectComponent,
  ReplaySubjectComponent,
  AsyncSubjectComponent,
];
const MODULES = [
  CommonModule,
  SubjectsRoutingModule,
  SharedModule,
  FormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
})
export class SubjectsModule {}
