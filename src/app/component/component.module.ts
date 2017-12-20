import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { ComponentRoutingModule } from './component-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ComponentRoutingModule
  ],
  declarations: [ImageComponent]
})
export class ComponentModule { }
