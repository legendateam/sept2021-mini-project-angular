import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DarkModeComponent } from './components/dark-mode/dark-mode.component';
import { CaruselComponent } from './components/carousel/carusel.component';
import {AppRoutingModule} from "./app-routing.module";
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LogoComponent } from './components/logo/logo.component';
import { TrendComponent } from './components/trend/trend.component';
import { LatestMovieComponent } from './components/latest-movie/latest-movie.component';
import { MoviesCardsComponent } from './components/movies-cards/movies-cards.component';
import { TvShowsSComponent } from './components/tv-shows-cards/tv-shows-s.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TvCardComponent } from './components/tv-card/tv-card.component';
import { GenresComponent } from './components/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    FooterComponent,
    HomePageComponent,
    SearchFormComponent,
    DarkModeComponent,
    CaruselComponent,
    ErrorPageComponent,
    LogoComponent,
    TrendComponent,
    LatestMovieComponent,
    MoviesCardsComponent,
    TvShowsSComponent,
    MovieCardComponent,
    TvCardComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
