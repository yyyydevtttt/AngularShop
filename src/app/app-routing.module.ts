import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WearViewComponent } from './wear-view/wear-view.component';
import { WearView2Component } from './wear-view2/wear-view2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WearView3Component } from "./wear-view3/wear-view3.component";
import { WearView4Component } from "./wear-view4/wear-view4.component";

const routes: Routes = [
  //homeのルーティング
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  //WearViewのルーティング
  { path: 'wear-view', component: WearViewComponent},
  //WearView2のルーティング
  { path: 'wear-view2', component: WearView2Component},
  //WearView3のルーティング
  { path: 'wear-view3', component: WearView3Component},
  //WearView4のルーティング
  { path: 'wear-view4', component: WearView4Component},
  //PageNotFoundのルーティング
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
