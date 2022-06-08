import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IMovie, IResponse} from "../../../interfaces";
import {urls} from "../../../constants";
import {QueryEnum} from "../../../enums";
import {environment} from "../../../../environments/environment";

const { KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(urls.movies);
  }

  public getAllWithPagination(page: number): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(`${urls.movies}${QueryEnum.PAGE}${page}`);
  }

  public getOne(id: string): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(`${urls.movie}/${id}${QueryEnum.API_KEY}${KEY}`);
  }
}
