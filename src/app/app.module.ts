import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MensComponent } from './mens/mens.component';
import { LadiesComponent } from './ladies/ladies.component';
import { LadiesTComponent } from './ladies-t/ladies-t.component';
import { MensTComponent } from './mens-t/mens-t.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MensComponent,
    LadiesComponent,
    LadiesTComponent,
    MensTComponent,
    HomeComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
