import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";

import { MovieRoutingModule } from './movie-routing.module';
import { MoviesLayoutComponent } from './components/movies-layout/movies-layout.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesCardsComponent } from './components/movies-cards/movies-cards.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { GenresComponent } from './components/genres/genres.component';
import { GenreComponent } from './components/genre/genre.component';
import {DataService} from "./services/data.service";
import {MoviesService} from "./services/movies.service";
import {MovieResolver} from "./services/resolvers/movie.resolver";
import {MoviesResolver} from "./services/resolvers/movies.resolver";

@NgModule({
  declarations: [
    MoviesLayoutComponent,
    MovieDetailsComponent,
    MoviesCardsComponent,
    PaginationComponent,
    MovieCardComponent,
    GenresComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRoutingModule,
    MatPaginatorModule
  ],
  providers: [
    DataService,
    MoviesService,
    MovieResolver,
    MoviesResolver
  ]
})
export class MovieModule { }
