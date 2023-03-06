import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './components/menu/menu.module';

const COMPONENTS = [AppComponent];
const MODULES = [
  BrowserModule,
  CommonModule,
  AppRoutingModule,
  MenuModule,
  FormsModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
