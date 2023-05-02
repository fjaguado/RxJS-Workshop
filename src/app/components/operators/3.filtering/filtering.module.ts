import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DebounceTimeComponent } from './deboune-time/debounce-time.component';
import { FilteringRoutingModule } from './filtering-routing.module';
import { DistinctUntilComponent } from './distinct-until/distinct-until.component';
import { DistinctUntilKeyComponent } from './distinct-until-key/distinct-until-key.component';
import { FilterComponent } from './filter/filter.component';
import { TakeUntilComponent } from './takeUntil/take-until.component';

const COMPONENTS = [
	DebounceTimeComponent,
	DistinctUntilComponent,
	DistinctUntilKeyComponent,
	FilterComponent,
	TakeUntilComponent
];
const MODULES = [
	CommonModule,
	FilteringRoutingModule,
	SharedModule,
	FormsModule
];

@NgModule({
	imports:      [...MODULES],
	declarations: [...COMPONENTS],
})
export class FilteringModule {
}
