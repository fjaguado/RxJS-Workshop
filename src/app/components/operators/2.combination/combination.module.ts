import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationRoutingModule } from './combination-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

const COMPONENTS = [CombineLatestComponent];
const MODULES = [
  CommonModule,
  CombinationRoutingModule,
  SharedModule,
  FormsModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class CombinationModule {}
