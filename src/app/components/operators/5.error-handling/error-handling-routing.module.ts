import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { CatchErrorComponent } from './catch-error/catch-error.component';

const routes: Routes = [
  {
    path: ROUTES.CATCH_ERROR,
    component: CatchErrorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorHandlingRoutingModule { }
