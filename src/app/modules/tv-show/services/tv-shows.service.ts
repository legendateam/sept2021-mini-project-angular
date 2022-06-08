import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IMovie, IResponse, ITvShows} from "../../../interfaces";
import {urls} from "../../../constants";
import {QueryEnum} from "../../../enums";
import {environment} from "../../../../environments/environment";

const { KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IResponse<ITvShows>> {
    return this.http.get<IResponse<ITvShows>>(urls.tvAllPopular);
  }

  public getAllWithPagination(page: number): Observable<IResponse<ITvShows>> {
    return this.http.get<IResponse<ITvShows>>(`${urls.tvAllPopular}${QueryEnum.PAGE}${page}`);
  }

  public getOne(id: string): Observable<IResponse<ITvShows>> {
    return this.http.get<IResponse<ITvShows>>(`${urls.tvOne}/${id}${QueryEnum.API_KEY}${KEY}`);
  }
}
