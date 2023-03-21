import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './models/menu.model';

const routes: Routes = [
  ...[
    ROUTES.INTRODUCTION,
    ROUTES.OBSERVABLE,
    ROUTES.OBSERVER,
    ROUTES.OPERATORS,
    ROUTES.MARBLE_DIAGRAM,
    ROUTES.SUBSCRIPTION,
  ].map(() => ({
    path: '',
    loadChildren: () =>
      import('./components/basic-definitions/basic-definitions.module').then(
        (m) => m.BasicDefinitionsModule
      ),
  })),
  ...[
    ROUTES.SUBJECT,
    ROUTES.BEHAVIOR_SUBJECT,
    ROUTES.REPLAY_SUBJECT,
    ROUTES.ASYNC_SUBJECT,
  ].map(() => ({
    path: '',
    loadChildren: () =>
      import('./components/subjects/subjects.module').then(
        (m) => m.SubjectsModule
      ),
  })),
  ...[ROUTES.OF, ROUTES.FROM, ROUTES.FROMEVENT].map(() => ({
    path: '',
    loadChildren: () =>
      import('./components/operators/1.creation/creation.module').then(
        (m) => m.CreationModule
      ),
  })),
  ...[
    ROUTES.COMBINE_LATEST,
    ROUTES.WITH_LATEST_FROM,
    ROUTES.CONCAT,
    ROUTES.MERGE,
    ROUTES.START_WITH,
    ROUTES.FORK_JOIN,
    ROUTES.ZIP,
  ].map(() => ({
    path: '',
    loadChildren: () =>
      import('./components/operators/2.combination/combination.module').then(
        (m) => m.CombinationModule
      ),
  })),
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
