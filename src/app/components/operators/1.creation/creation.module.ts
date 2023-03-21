import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfComponent } from './of/of.component';
import { CreationRoutingModule } from './creation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FromComponent } from './from/from.component';
import { FromEventComponent } from './from-event/from-event.component';

const COMPONENTS = [OfComponent, FromComponent, FromEventComponent];
const MODULES = [
  CommonModule,
  CreationRoutingModule,
  SharedModule,
  FormsModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class CreationModule {}
