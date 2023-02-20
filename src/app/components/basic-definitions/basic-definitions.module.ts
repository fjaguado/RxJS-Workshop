import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasicDefinitionsRoutingModule } from './basic-definitions-routing.module';
import { BasicDefinitionsComponent } from './basic-definitions.component';

const COMPONENTS = [BasicDefinitionsComponent];
const MODULES = [CommonModule, BasicDefinitionsRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
})
export class BasicDefinitionsModule {}
