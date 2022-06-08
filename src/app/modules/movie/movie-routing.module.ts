import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesLayoutComponent} from "./components/movies-layout/movies-layout.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {MovieResolver} from "./services/resolvers/movie.resolver";
import {MoviesResolver} from "./services/resolvers/movies.resolver";

const routes: Routes = [
  { path: '', component: MoviesLayoutComponent, resolve: { dataMovies: MoviesResolver } },
  { path: ':id', component: MovieDetailsComponent, resolve: { dataMovie: MovieResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
