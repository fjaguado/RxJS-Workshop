import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

const routes: Routes = [
  {
    path: ROUTES.COMBINE_LATEST,
    component: CombineLatestComponent,
  },
  {
    path: ROUTES.WITH_LATEST_FROM,
    component: CombineLatestComponent,
  },
  {
    path: ROUTES.CONCAT,
    component: CombineLatestComponent,
  },
  {
    path: ROUTES.MERGE,
    component: CombineLatestComponent,
  },
  {
    path: ROUTES.START_WITH,
    component: CombineLatestComponent,
  },
  {
    path: ROUTES.FORK_JOIN,
    component: CombineLatestComponent,
  },
  {
    path: ROUTES.ZIP,
    component: CombineLatestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CombinationRoutingModule {}
