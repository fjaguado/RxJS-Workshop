import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../models/menu.model';
import { BasicDefinitionsComponent } from './basic-definitions.component';
import {
  BASIC_INTRODUCTION_SECTION,
  MARBLE_DIAGRAM_SECTION,
  OBSERVABLE_SECTION,
  OBSERVER_SECTION,
  OPERATORS_SECTION,
} from './basic-definitions.data';

const routes: Routes = [
  {
    path: ROUTES.INTRODUCTION,
    component: BasicDefinitionsComponent,
    data: { selectedData: BASIC_INTRODUCTION_SECTION },
  },
  {
    path: ROUTES.OBSERVABLE,
    component: BasicDefinitionsComponent,
    data: { selectedData: OBSERVABLE_SECTION },
  },
  {
    path: ROUTES.OBSERVER,
    component: BasicDefinitionsComponent,
    data: { selectedData: OBSERVER_SECTION },
  },
  {
    path: ROUTES.OPERATORS,
    component: BasicDefinitionsComponent,
    data: { selectedData: OPERATORS_SECTION },
  },
  {
    path: ROUTES.MARBLE_DIAGRAM,
    component: BasicDefinitionsComponent,
    data: { selectedData: MARBLE_DIAGRAM_SECTION },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicDefinitionsRoutingModule {}
