import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPopularRoutingModule } from './news-popular-routing.module';
import { NewsPopularLayoutComponent } from './components/news-popular-layout/news-popular-layout.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    NewsPopularLayoutComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    NewsPopularRoutingModule
  ]
})
export class NewsPopularModule { }
