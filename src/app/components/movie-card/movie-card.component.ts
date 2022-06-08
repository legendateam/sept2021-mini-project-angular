import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IMovie} from "../../interfaces";
import {urls} from "../../constants";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit, OnChanges {

  @Input()
  movie: IMovie;
  posterURL: string

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.posterURL = `${urls.imgW500}${this.movie.poster_path}`;
  }

}
