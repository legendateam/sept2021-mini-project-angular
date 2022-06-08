import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IResponse, ITvShows} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http: HttpClient) { }

  public getTrendOfTheDay(): Observable<IResponse<ITvShows>> {
    return this.http.get<IResponse<ITvShows>>(urls.trendingTvDay)
  }
}
