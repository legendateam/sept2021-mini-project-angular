import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IResponse, ITvShows} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  public getTrendOfTheDay(): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(urls.trendingMovieDay)
  }

  public getLatestMovie() : Observable<IMovie> {
    return this.http.get<IMovie>(urls.movieLatest)
  }
}
