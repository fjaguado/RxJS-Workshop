import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfFromFromEventComponent } from './of-from-from-event/of-from-from-event.component';
import { CreationRoutingModule } from './creation-routing.module';

const COMPONENTS = [OfFromFromEventComponent];
const MODULES = [CommonModule, CreationRoutingModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class CreationModule {}
