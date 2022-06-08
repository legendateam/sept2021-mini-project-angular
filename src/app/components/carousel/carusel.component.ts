import {Component, OnInit } from '@angular/core';

import {DataService} from "../../services/data.service";
import {urls} from "../../constants";
import {IMovieCarousel} from "../../interfaces";

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
})

export class CaruselComponent implements OnInit{

  movies: IMovieCarousel[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.movie.subscribe( response => {
      response.results.forEach( movie => {
        if (this.movies.length <= 3) {
          this.movies.push( { ...movie, postUrl: `${urls.imgOriginal}${movie.backdrop_path}` } )
        }
        return
      })
    } )
  }


}
