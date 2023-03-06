import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../models/menu.model';
import { BasicDefinitionsComponent } from './basic-definitions.component';
import { BASIC_INTRODUCTION } from './basic-definitions.data';

const routes: Routes = [
  {
    path: ROUTES.INTRODUCTION,
    component: BasicDefinitionsComponent,
    data: { selectedData: BASIC_INTRODUCTION },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicDefinitionsRoutingModule {}
