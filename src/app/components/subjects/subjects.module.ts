import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { SubjectComponent } from './subject/subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [SubjectComponent, BehaviorSubjectComponent];
const MODULES = [CommonModule, SubjectsRoutingModule, SharedModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
})
export class SubjectsModule {}
