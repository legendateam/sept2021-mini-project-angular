import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TvShowRoutingModule } from './tv-show-routing.module';
import { TvShowsLayoutComponent } from './components/tv-shows-layout/tv-shows-layout.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { GenreComponent } from './components/genre/genre.component';
import { GenresComponent } from './components/genres/genres.component';
import { TvShowCardComponent } from './components/tv-show-card/tv-show-card.component';
import { TsShowDetailsComponent } from './components/ts-show-details/ts-show-details.component';
import { TvShowsCardsComponent } from './components/tv-shows-cards/tv-shows-cards.component';
import {SaveDataService} from "./services/save-data.service";
import {TvShowsService} from "./services/tv-shows.service";
import {TvShowsResolver} from "./services/resolvers/tv-shows.resolver";
import {TvShowResolver} from "./services/resolvers/tv-show.resolver";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    TvShowsLayoutComponent,
    PaginationComponent,
    GenreComponent,
    GenresComponent,
    TvShowCardComponent,
    TsShowDetailsComponent,
    TvShowsCardsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TvShowRoutingModule,
    MatPaginatorModule
  ],
  providers: [
    SaveDataService,
    TvShowsService,
    TvShowsResolver,
    TvShowResolver
  ]
})
export class TvShowModule { }
