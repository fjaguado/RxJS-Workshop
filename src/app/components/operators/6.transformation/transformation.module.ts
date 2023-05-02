import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TransformationRoutingModule } from './transformation-routing.module';
import { MapComponent } from './map/map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exaust-map/exhaust-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { HttpClientModule } from '@angular/common/http';
import { MergeMapComponent } from './merge-map/merge-map.component';

const COMPONENTS = [
	MapComponent,
	ConcatMapComponent,
	ExhaustMapComponent,
	SwitchMapComponent,
	MergeMapComponent
];
const MODULES = [
	CommonModule,
	TransformationRoutingModule,
	SharedModule,
	FormsModule,
	HttpClientModule
];

@NgModule({
	imports:      [...MODULES],
	declarations: [...COMPONENTS],
})
export class TransformationModule {
}
