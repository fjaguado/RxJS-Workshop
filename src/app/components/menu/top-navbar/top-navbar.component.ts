import { Component } from '@angular/core';
import { werfenLogo } from '../../../models/menu.model';

@Component({
  selector: 'app-top-navbar',
  templateUrl: 'top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  public werfenLogo = werfenLogo;
}
