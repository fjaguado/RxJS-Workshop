import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';
import { CodeTabsComponent } from './code-tabs/code-tabs.component';

const COMPONENTS = [InfoSectionComponent, CodeTabsComponent];
const MODULES = [CommonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class SharedModule {}
