import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-tabs',
  templateUrl: './code-tabs.component.html',
  styleUrls: ['./code-tabs.component.scss'],
})
export class CodeTabsComponent {
  @Input() public tsCode = '';
  @Input() public htmlCode = '';
  @Input() public tabID = 'collapseOne';
}
