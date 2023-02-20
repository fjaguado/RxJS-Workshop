import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Link } from './models/menu.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public selectedItem = 'Select a subject to start!';

  constructor(private readonly router: Router) {}

  public setTitle({ title, url }: Link): void {
    this.selectedItem = title;
    this.router.navigate([`/${url}`]);
  }
}
