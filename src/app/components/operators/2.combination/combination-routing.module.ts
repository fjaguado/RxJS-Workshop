import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { CombineLatestWithComponent } from './combine-latest-with/combine-latest-with.component';
import { ConcatComponent } from './concat/concat.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeComponent } from './merge/merge.component';
import { StartWithComponent } from './start-with/start-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';

const routes: Routes = [
  {
    path: ROUTES.COMBINE_LATEST_WITH,
    component: CombineLatestWithComponent,
  },
  {
    path: ROUTES.WITH_LATEST_FROM,
    component: WithLatestFromComponent,
  },
  {
    path: ROUTES.CONCAT,
    component: ConcatComponent,
  },
  {
    path: ROUTES.MERGE,
    component: MergeComponent,
  },
  {
    path: ROUTES.START_WITH,
    component: StartWithComponent,
  },
  {
    path: ROUTES.FORK_JOIN,
    component: ForkJoinComponent,
  },
  {
    path: ROUTES.ZIP,
    component: CombineLatestWithComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationRoutingModule {}
