import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { MapComponent } from './map/map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exaust-map/exhaust-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

const routes: Routes = [
  {
    path:      ROUTES.MAP,
    component: MapComponent,
  },{
    path:      ROUTES.CONCAT_MAP,
    component: ConcatMapComponent,
  },{
    path:      ROUTES.EXHAUST_MAP,
    component: ExhaustMapComponent,
  },{
    path:      ROUTES.SWITCH_MAP,
    component: SwitchMapComponent,
  },{
    path:      ROUTES.MERGE_MAP,
    component: MergeMapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformationRoutingModule { }
