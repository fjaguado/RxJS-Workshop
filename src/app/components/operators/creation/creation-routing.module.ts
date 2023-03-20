import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { OfComponent } from './of/of.component';

const routes: Routes = [
  {
    path: ROUTES.OF,
    component: OfComponent,
  },
  {
    path: ROUTES.FROM,
    component: OfComponent,
  },
  {
    path: ROUTES.FROMEVENT,
    component: OfComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
