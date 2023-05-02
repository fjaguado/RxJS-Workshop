import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UtilityRoutingModule } from './utility-routing.module';
import { TapComponent } from './tap/tap.component';
import { FinalizeComponent } from './finalize/finalize.component';

const COMPONENTS = [
	TapComponent,
	FinalizeComponent
];
const MODULES = [
	CommonModule,
	UtilityRoutingModule,
	SharedModule,
	FormsModule,
];

@NgModule({
	imports:      [...MODULES],
	declarations: [...COMPONENTS],
})
export class UtilityModule {
}
