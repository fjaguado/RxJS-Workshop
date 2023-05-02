import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { DebounceTimeComponent } from './deboune-time/debounce-time.component';
import { DistinctUntilComponent } from './distinct-until/distinct-until.component';
import { DistinctUntilKeyComponent } from './distinct-until-key/distinct-until-key.component';
import { FilterComponent } from './filter/filter.component';
import { TakeUntilComponent } from './takeUntil/take-until.component';

const routes: Routes = [
  {
    path: ROUTES.DEBOUNCE_TIME,
    component: DebounceTimeComponent,
  },{
    path: ROUTES.DISTINCT_UNTIL_CHANGED,
    component: DistinctUntilComponent,
  },{
    path: ROUTES.DISTINCT_UNTIL_KEY_CHANGED,
    component: DistinctUntilKeyComponent,
  },{
    path: ROUTES.FILTER,
    component: FilterComponent,
  },{
    path: ROUTES.TAKE_UNTIL,
    component: TakeUntilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteringRoutingModule { }
