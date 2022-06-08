import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {IMovie} from "../../interfaces";
import {urls} from "../../constants";

@Component({
  selector: 'app-latest-movie',
  templateUrl: './latest-movie.component.html',
  styleUrls: ['./latest-movie.component.css']
})
export class LatestMovieComponent implements OnInit {

  movie: IMovie;
  poster: string;

  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getLatestMovie().subscribe((movie) => {
      if (movie.poster_path) {
        this.poster = `${urls.imgW500}${movie.poster_path}`;
      }
      this.movie = movie;
    })
  }

}
