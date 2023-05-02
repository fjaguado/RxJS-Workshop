import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { TapComponent } from './tap/tap.component';
import { FinalizeComponent } from './finalize/finalize.component';

const routes: Routes = [
  {
    path:      ROUTES.TAP,
    component: TapComponent,
  },{
    path:      ROUTES.FINALIZE,
    component: FinalizeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtilityRoutingModule { }
