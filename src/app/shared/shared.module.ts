import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SharedRoutingModule
  ],
  exports: [
  ],
  declarations: [MainComponent, RightMenuComponent]
})
export class SharedModule { }