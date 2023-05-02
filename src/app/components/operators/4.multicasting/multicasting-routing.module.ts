import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from '../../../models/menu.model';
import { ShareReplayComponent } from './share-replay/share-replay.component';

const routes: Routes = [
  {
    path: ROUTES.SHARE_REPLAY,
    component: ShareReplayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulticastingRoutingModule { }
