import { Component, EventEmitter, Input, Output } from '@angular/core';
import { werfenLogo } from '../../../models/menu.model';

@Component({
  selector: 'app-top-navbar',
  templateUrl: 'top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  @Output() public navbarOpen = new EventEmitter<boolean>();

  public werfenLogo = werfenLogo;

  public doToggleButton(): void {
    this.navbarOpen.emit(true);
  }
}
