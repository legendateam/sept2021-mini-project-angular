import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TvShowsLayoutComponent} from "./components/tv-shows-layout/tv-shows-layout.component";
import {TvShowsResolver} from "./services/resolvers/tv-shows.resolver";

const routes: Routes = [
  { path: '', component: TvShowsLayoutComponent, resolve: { dataShows: TvShowsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowRoutingModule { }
