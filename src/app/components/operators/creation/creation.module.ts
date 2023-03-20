import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfComponent } from './of/of.component';
import { CreationRoutingModule } from './creation-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';

const COMPONENTS = [OfComponent];
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
