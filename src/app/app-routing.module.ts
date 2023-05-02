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
		path:         '',
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
		path:         '',
		loadChildren: () =>
						  import('./components/subjects/subjects.module').then(
							  (m) => m.SubjectsModule
						  ),
	})),
	...[ROUTES.OF, ROUTES.FROM, ROUTES.FROMEVENT].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/1.creation/creation.module').then(
							  (m) => m.CreationModule
						  ),
	})),
	...[
		ROUTES.COMBINE_LATEST_WITH,
		ROUTES.WITH_LATEST_FROM,
		ROUTES.CONCAT,
		ROUTES.MERGE,
		ROUTES.START_WITH,
		ROUTES.FORK_JOIN,
		ROUTES.ZIP,
	].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/2.combination/combination.module').then(
							  (m) => m.CombinationModule
						  ),
	})),
	...[
		ROUTES.DEBOUNCE_TIME,
		ROUTES.DISTINCT_UNTIL_CHANGED,
		ROUTES.DISTINCT_UNTIL_KEY_CHANGED,
		ROUTES.FILTER,
		ROUTES.TAKE_UNTIL
	].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/3.filtering/filtering.module').then(
							  (m) => m.FilteringModule
						  ),
	})),
	...[
		ROUTES.SHARE_REPLAY
	].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/4.multicasting/multicasting.module').then(
							  (m) => m.MuilticastingModule
						  ),
	})),
	...[
		ROUTES.CATCH_ERROR
	].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/5.error-handling/error-handling.module').then(
							  (m) => m.ErrorHandlingModule
						  ),
	})),
	...[
		ROUTES.MAP,
		ROUTES.CONCAT_MAP,
		ROUTES.EXHAUST_MAP,
		ROUTES.SWITCH_MAP
	].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/6.transformation/transformation.module').then(
							  (m) => m.TransformationModule
						  ),
	})),
	...[
		ROUTES.TAP,
		ROUTES.FINALIZE
	].map(() => ({
		path:         '',
		loadChildren: () =>
						  import('./components/operators/7.utility/utility.module').then(
							  (m) => m.UtilityModule
						  ),
	})),
	{
		path:       '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
