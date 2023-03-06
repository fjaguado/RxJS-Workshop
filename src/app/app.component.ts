import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './models/menu.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public selectedItem = 'Select a subject to start!';
  public navbarOpen = false;

  constructor(private readonly router: Router) {}

  public setTitle({ title, url }: Link): void {
    this.selectedItem = title;
    this.toggleNavbar();
    this.router.navigate([`/${url}`]);
  }

  public toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }
}
