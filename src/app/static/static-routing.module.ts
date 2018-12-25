import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'citr.menu.about' }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    data: { title: 'citr.menu.features' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
