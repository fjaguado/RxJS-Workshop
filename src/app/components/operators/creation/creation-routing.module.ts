import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/models/menu.model';
import { OfFromFromEventComponent } from './of-from-from-event/of-from-from-event.component';

const routes: Routes = [
  {
    path: ROUTES.OF_FROM_FROMEVENT,
    component: OfFromFromEventComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationRoutingModule {}
