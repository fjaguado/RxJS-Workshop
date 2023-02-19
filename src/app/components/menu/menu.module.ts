import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

const COMPONENTS = [TopNavbarComponent, SideNavbarComponent];
const MODULES = [BrowserModule, CommonModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class MenuModule {}
