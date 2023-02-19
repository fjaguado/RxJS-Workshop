import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public selectedItem = 'Select a subject to start!'

  public setTitle(title: string) : void {
    this.selectedItem = title;
  }
}
