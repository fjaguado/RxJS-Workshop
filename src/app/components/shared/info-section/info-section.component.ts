import { Component, Input } from '@angular/core';
import { SECTION } from '../../../models/data.model';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
})
export class InfoSectionComponent {
  @Input() public selectedData: SECTION;
}
