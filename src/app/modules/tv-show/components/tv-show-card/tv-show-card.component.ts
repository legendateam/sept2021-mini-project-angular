import {Component, Input, OnInit} from '@angular/core';

import {urls} from "../../../../constants";
import {ITvShows} from "../../../../interfaces";

@Component({
  selector: 'app-tv-show-card',
  templateUrl: './tv-show-card.component.html',
  styleUrls: ['./tv-show-card.component.css']
})
export class TvShowCardComponent implements OnInit {

  @Input()
  tvShow: ITvShows;
  posterURL:string;

  constructor() { }

  ngOnInit(): void {
    this.posterURL = `${urls.imgW500}${this.tvShow.poster_path}`;
  }

}
