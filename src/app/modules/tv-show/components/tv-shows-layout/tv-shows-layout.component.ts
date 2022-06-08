import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {SaveDataService} from "../../services/save-data.service";

@Component({
  selector: 'app-tv-shows-layout',
  templateUrl: './tv-shows-layout.component.html',
  styleUrls: ['./tv-shows-layout.component.css']
})
export class TvShowsLayoutComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private saveService: SaveDataService) { }

  ngOnInit(): void {
    this.activatedRouter.data.subscribe( ({dataShows}) => {
      this.saveService.tvShows.next(dataShows);
    })
  }

}
