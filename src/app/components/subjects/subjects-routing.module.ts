import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../models/menu.model';
import { AsyncSubjectComponent } from './async-subject/async-subject.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
  {
    path: ROUTES.SUBJECT,
    component: SubjectComponent,
  },
  {
    path: ROUTES.BEHAVIOR_SUBJECT,
    component: BehaviorSubjectComponent,
  },
  {
    path: ROUTES.REPLAY_SUBJECT,
    component: ReplaySubjectComponent,
  },
  {
    path: ROUTES.ASYNC_SUBJECT,
    component: AsyncSubjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectsRoutingModule {}
