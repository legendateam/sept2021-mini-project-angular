import { Component, OnInit } from '@angular/core';

import {SaveDataService} from "../../services/save-data.service";
import {ITvShows} from "../../../../interfaces";
import {TvShowsService} from "../../services/tv-shows.service";

@Component({
  selector: 'app-tv-shows-cards',
  templateUrl: './tv-shows-cards.component.html',
  styleUrls: ['./tv-shows-cards.component.css']
})
export class TvShowsCardsComponent implements OnInit {

  tvShows: ITvShows[] = [];
  myI: number;

  constructor(private saveService:  SaveDataService, private showsService:TvShowsService) { }

  ngOnInit(): void {
    this.saveService.tvShows.subscribe( response => {
      response.results.forEach(tv => {
        this.myI = response.page;
        this.tvShows.push(tv);
      })
    })

    if (this.myI <= 496) {
      for(let i = this.myI + 1; i <= this.myI + 3; i++) {
        this.showsService.getAllWithPagination(i).subscribe( response => {
          response.results.forEach(tv => this.tvShows.push(tv))
        })
      }
    }
  }

}
