import { Component, OnInit } from '@angular/core';

import {DataService} from "../../services/data.service";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.css']
})
export class MoviesCardsComponent implements OnInit {

  movies: IMovie[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.movie.subscribe( response => {
      response.results.forEach(movie => {
        if (this.movies.length > 6) {
          this.movies.shift();
          return
        }
        this.movies.push(movie)
      })
    } )
  }

}
