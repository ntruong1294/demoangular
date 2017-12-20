import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { NavbarDemoComponent } from './navbar-demo/navbar-demo.component';
import { AppRoutingModule } from './/app-routing.module';
import { EndpointService } from './services/endpoint/endpoint.service';
import { ImagesService } from './services/images/images.service';
import { ComponentModule } from './component/component.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    ComponentModule
  ],
  providers: [EndpointService, ImagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);