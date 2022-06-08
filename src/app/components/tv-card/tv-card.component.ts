import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {ITvShows} from "../../interfaces";
import {urls} from "../../constants";

@Component({
  selector: 'app-tv-card',
  templateUrl: './tv-card.component.html',
  styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnChanges {

  @Input()
  tvShow: ITvShows;
  urlImg: string;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.urlImg = `${urls.imgW500}${this.tvShow.poster_path}`
  }

}
