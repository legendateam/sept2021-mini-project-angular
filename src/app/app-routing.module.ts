import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {ErrorPageComponent} from "./components/error-page/error-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'movies',
        loadChildren: () => import('./modules/movie/movie.module').then(mod => mod.MovieModule)
      },
      {
        path: 'tv-shows',
        loadChildren: () => import('./modules/tv-show/tv-show.module').then(mod => mod.TvShowModule)
      },
      {
        path: 'news-popular',
        loadChildren: () => import('./modules/news-popular/news-popular.module').then(mod => mod.NewsPopularModule)
      },
      {
        path: 'animations',
        loadChildren: () => import('./modules/animation/animation.module').then(mod => mod.AnimationModule)
      },

      { path: '**', component: ErrorPageComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
