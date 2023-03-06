import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSectionComponent } from './info-section/info-section.component';

@NgModule({
  declarations: [InfoSectionComponent],
  imports: [CommonModule],
  exports: [InfoSectionComponent],
})
export class SharedModule {}
