import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MulticastingRoutingModule } from './multicasting-routing.module';
import { ShareReplayComponent } from './share-replay/share-replay.component';

const COMPONENTS = [
  ShareReplayComponent
];
const MODULES = [
  CommonModule,
  MulticastingRoutingModule,
  SharedModule,
  FormsModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class MuilticastingModule { }
