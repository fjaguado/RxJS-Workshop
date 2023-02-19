import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: 'top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  private scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.scrollTo(0, 0);
      }
    })();
  }
}
