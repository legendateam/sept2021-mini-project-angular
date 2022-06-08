import { Component, OnInit } from '@angular/core';

import {MovieService} from "../../services/movie.service";
import {DataService} from "../../services/data.service";
import {TvShowsService} from "../../services/tv-shows.service";

@Component({
  selector: 'app-trend-movie',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.css']
})
export class TrendComponent implements OnInit {

  constructor(private movieService: MovieService, private dataService: DataService, private tvShowsService: TvShowsService) { }

  ngOnInit(): void {
    this.movieService.getTrendOfTheDay().subscribe( response => this.dataService.movie.next(response) )
    this.tvShowsService.getTrendOfTheDay().subscribe( response => this.dataService.tv.next(response) )
  }

}
