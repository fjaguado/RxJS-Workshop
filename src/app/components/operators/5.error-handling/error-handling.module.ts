import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ErrorHandlingRoutingModule } from './error-handling-routing.module';
import { CatchErrorComponent } from './catch-error/catch-error.component';

const COMPONENTS = [
  CatchErrorComponent
];
const MODULES = [
  CommonModule,
  ErrorHandlingRoutingModule,
  SharedModule,
  FormsModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class ErrorHandlingModule { }
