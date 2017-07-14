import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MensComponent } from "./mens/mens.component";
import { LadiesComponent } from "./ladies/ladies.component";
import { MensTComponent } from "./mens-t/mens-t.component";
import { LadiesTComponent } from "./ladies-t/ladies-t.component";
import { HomeComponent } from "app/home/home.component";
import { PagesComponent } from "app/pages/pages.component";

const routes: Routes = [
//  { path: '', redirectTo: 'pages', pathMatch: 'full'},
//  { path: '', component: PagesComponent },
//  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }
//  { path: '**', component: PageNotFoundComponent }
      { path: 'mens', component: MensComponent },
      { path: 'ladies', component: LadiesComponent },
      { path: 'mens-t', component: MensTComponent },
      { path: 'ladies-t', component: LadiesTComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
