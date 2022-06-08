import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IMovie, IResponse} from "../../../interfaces";
import {urls} from "../../../constants";
import {QueryEnum} from "../../../enums";
import {environment} from "../../../../environments/environment";

const { KEY } = environment;

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(urls.animations);
  }

  public getAllWithPagination(page: number): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(`${urls.animations}${QueryEnum.PAGE}${page}`);
  }

  public getOne(id: string): Observable<IResponse<IMovie>> {
    return this.http.get<IResponse<IMovie>>(`${urls.animations}/${id}${QueryEnum.API_KEY}${KEY}`);
  }
}
