import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {ITvShows} from "../../interfaces";

@Component({
  selector: 'app-tv-shows-cards',
  templateUrl: './tv-shows-cards.component.html',
  styleUrls: ['./tv-shows-cards.component.css']
})
export class TvShowsSComponent implements OnInit {

  tvShows: ITvShows[] =[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.tv.subscribe(response => {
      response.results.forEach(tv=>{
        if (this.tvShows.length === 6) {
          return
        }
        this.tvShows.push(tv);
      })
    })
  }

}
