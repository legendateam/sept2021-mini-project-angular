import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot, Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import {IMovie, IResponse} from "../../../../interfaces";
import {MoviesService} from "../movies.service";
import {DataService} from "../data.service";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<IResponse<IMovie>> {
  constructor(private moviesService: MoviesService, private dataService: DataService,private router:Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponse<IMovie>> | Promise<IResponse<IMovie>> | IResponse<IMovie> {
    const { page, perPage } = route.queryParams;

    if(this.router.getCurrentNavigation()?.extras?.state?.['moviesHistory']) {
      const sessionPage = sessionStorage.getItem('pageMovies') as string;
      const jsonPage = JSON.parse(sessionPage);

      return this.moviesService.getAllWithPagination(jsonPage);
    }

    if (perPage && +perPage > 20 && +perPage <= 100) {
      this.dataService.perPage.next(perPage);
    }

    if (page && +page > 1 && +page <= 500) {
      this.dataService.page.next(page);

      return this.moviesService.getAllWithPagination(page);
    }

    return this.moviesService.getAll();
  }
}
