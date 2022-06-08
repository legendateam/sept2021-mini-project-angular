import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../../../interfaces";
import {urls} from "../../../../constants";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: IMovie;
  posterURL: string;

  constructor() { }

  ngOnInit(): void {
    this.posterURL = `${urls.imgW500}${this.movie.poster_path}`;
  }

}
