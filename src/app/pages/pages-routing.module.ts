import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensOwComponent } from "app/pages/mens-ow/mens-ow.component";
import { PagesComponent } from "app/pages/pages.component";
import { LadiesOwComponent } from "app/pages/ladies-ow/ladies-ow.component";
import { MensTComponent } from "app/pages/mens-t/mens-t.component";
import { LadiesTComponent } from "app/pages/ladies-t/ladies-t.component";
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
//      { path: '', redirectTo: 'mens-ow', pathMatch: 'full'},
      { path: 'mens-ow', component: MensOwComponent },
      { path: 'ladies-ow', component: LadiesOwComponent },
      { path: 'mens-t', component: MensTComponent },
      { path: 'ladies-t', component: LadiesTComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }





/**
 const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'mens-ow', pathMatch: 'full'},
      { path: 'mens-ow', component: MensOwComponent },
      { path: 'ladies-ow', component: LadiesOwComponent },
      { path: 'mens-t', component: MensTComponent },
      { path: 'ladies-t', component: LadiesTComponent }
    ]
  }
];
 */

