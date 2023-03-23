import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombinationRoutingModule } from './combination-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CombineLatestWithComponent } from './combine-latest-with/combine-latest-with.component';
import { WithLatestFromComponent } from './with-latest-from/with-latest-from.component';
import { ConcatComponent } from './concat/concat.component';

const COMPONENTS = [
  CombineLatestWithComponent,
  WithLatestFromComponent,
  ConcatComponent,
];
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
