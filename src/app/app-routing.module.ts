import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './models/menu.model';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/basic-definitions/basic-definitions.module').then(
        (m) => m.BasicDefinitionsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
