import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';
import { CodeTabsComponent } from './code-tabs/code-tabs.component';

@NgModule({
  declarations: [InfoSectionComponent, CodeTabsComponent],
  imports: [CommonModule],
  exports: [InfoSectionComponent],
})
export class SharedModule {}
