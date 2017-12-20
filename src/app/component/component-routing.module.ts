import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';
import { MainComponent } from '../shared/main/main.component';

const routes: Routes = [
  {
    path: 'image', component: MainComponent, children: [
      { path: '', component: ImageComponent, outlet: 'mainContent' },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class ComponentRoutingModule { }
