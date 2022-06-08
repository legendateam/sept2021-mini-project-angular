import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from "rxjs";

import {IResponse, ITvShows} from "../../../../interfaces";
import {TvShowsService} from "../tv-shows.service";

@Injectable({
  providedIn: 'root'
})
export class TvShowsResolver implements Resolve<IResponse<ITvShows>> {


  constructor(private tvShowsService: TvShowsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<IResponse<ITvShows>> | Promise<IResponse<ITvShows>> | IResponse<ITvShows> {
    return this.tvShowsService.getAll();
  }



}
