import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { FromEventComponent } from './from-event/from-event.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';

const routes: Routes = [
  {
    path: ROUTES.OF,
    component: OfComponent,
  },
  {
    path: ROUTES.FROM,
    component: FromComponent,
  },
  {
    path: ROUTES.FROMEVENT,
    component: FromEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
