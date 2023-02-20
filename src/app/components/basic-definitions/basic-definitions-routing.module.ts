import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicDefinitionsComponent } from './basic-definitions.component';

const routes: Routes = [{ path: '', component: BasicDefinitionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicDefinitionsRoutingModule {}
