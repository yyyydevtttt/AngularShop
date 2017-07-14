import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TopComponent } from './top/top.component';
import { MensOwComponent } from './mens-ow/mens-ow.component';
import { LadiesOwComponent } from './ladies-ow/ladies-ow.component';
import { MensTComponent } from './mens-t/mens-t.component';
import { LadiesTComponent } from './ladies-t/ladies-t.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [TopComponent, MensOwComponent, LadiesOwComponent, MensTComponent, LadiesTComponent]
})
export class PagesModule { }
