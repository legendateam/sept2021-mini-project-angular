import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {DataService} from "../../services/data.service";
import {IMovie} from "../../../../interfaces";
import {MoviesService} from "../../services/movies.service";

@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.css']
})
export class MoviesCardsComponent implements OnInit, DoCheck {

  movies: IMovie[] = [];
  moviesSlice: IMovie[] = [];
  length: number;

  constructor(private dataService: DataService, private moviesService: MoviesService,
              private activatedRouter: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.dataService.checkPagination.subscribe(check => {

      if (!check) {
        this.dataService.movies.subscribe(response => {
          response.results.forEach(movie => {
            this.movies.push(movie);
          })
          sessionStorage.setItem('pageMovies', JSON.stringify(response.page));
        })

        this.activatedRouter.queryParams.subscribe(({page, perPage}) => {
          if (!this.length) {
            if (!page && !perPage) {
              const sessionPage = sessionStorage.getItem('pageMovies') as string;
              const pageJson = JSON.parse(sessionPage);

              const sessionPerPage = sessionStorage.getItem('perPageMovies') as string;
              const perPageJson = JSON.parse(sessionPerPage);

              if (pageJson && perPageJson) {
                this._dynamicCycle(+pageJson, +perPageJson, this.moviesService);
                sessionStorage.setItem('pageMovies', JSON.stringify(`${pageJson}`));
                sessionStorage.setItem('perPageMovies', JSON.stringify(`${perPageJson}`));
              }
            }
            if ((+page > 0 && +page <= 500) && (+perPage >= 20 && +perPage <= 100)) {
              this._dynamicCycle(+page, +perPage, this.moviesService);
              sessionStorage.setItem('pageMovies', JSON.stringify(`${page}`));
              sessionStorage.setItem('perPageMovies', JSON.stringify(`${perPage}`));
            }
          }
        })
      }
    })

    this.activatedRouter.queryParams.subscribe(({page, perPage}) => {

      let che = false;
      this.dataService.checkPagination.subscribe(c => che = c);

      if (che) {

        switch (+perPage) {
          case 20:
            if (this.movies.length > 20) {
              this.movies = [...this.movies.slice(0, 20)];
            }
            break;

          case 40:
            if (this.movies.length < 40 && (!this.moviesSlice.length || this.moviesSlice.length < 40)) {
              this._dynamicCycle(+page, +perPage, this.moviesService);
              this.moviesSlice = this.movies.slice(0);
            }

            if (this.movies.length < 40 && (this.moviesSlice.length && this.moviesSlice.length >= 40)) {
              this.movies = [...this.moviesSlice.slice(0, 40)];
            }

            if (this.movies.length > 40) {
              this.movies = this.movies.slice(0, 40);
            }
            break;

          case 60:
            if (this.movies.length < 60 && (!this.moviesSlice.length || this.moviesSlice.length < 60)) {
              this._dynamicCycle(+page, +perPage, this.moviesService);
              this.moviesSlice = this.movies.slice(0);
            }

            if (this.movies.length < 60 && (this.moviesSlice.length && this.moviesSlice.length >= 60)) {
              this.movies = [...this.moviesSlice.slice(0, 60)];
            }

            if (this.movies.length > 60) {
              this.movies = this.movies.slice(0, 60);
            }
            break;

          case 100:
            if (this.moviesSlice.length < 100 && this.moviesSlice.length < 60) {
              this._dynamicCycle(+page, +perPage, this.moviesService);
              this.moviesSlice = this.movies.slice(0);
            }

            if (this.moviesSlice.length === 60) {
              this._dynamicCycle(+page + 3, 60, this.moviesService);
              this.moviesSlice = this.movies.slice(0);
            }
        }
      }

    })

    this.dataService.page.subscribe(p => {
      this.movies = [];
      const sessionPerPage = sessionStorage.getItem('perPageMovies') as string;
      const perPageJson = JSON.parse(sessionPerPage);

      this._dynamicCycle(+p, +perPageJson, this.moviesService);
    })

  }

  ngDoCheck() {
    this.length = this.movies.length;
  }

  private _dynamicCycle(page: number, perPage: number | number[], callback: MoviesService): void {
    for (let i = 20; i < +perPage; i = i + 20, page++) {
      callback.getAllWithPagination(page).subscribe(response => {
        response.results.forEach(movie => this.movies.push(movie));
      })
    }
  }
}
