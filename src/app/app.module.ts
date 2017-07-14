import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WearViewComponent } from './wear-view/wear-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WearView2Component } from './wear-view2/wear-view2.component';
import { WearView3Component } from './wear-view3/wear-view3.component';
import { WearView4Component } from './wear-view4/wear-view4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WearViewComponent,
    PageNotFoundComponent,
    WearView2Component,
    WearView3Component,
    WearView4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
