import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

const COMPONENTS = [TopNavbarComponent, SideNavbarComponent];
const MODULES = [CommonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class MenuModule {}
