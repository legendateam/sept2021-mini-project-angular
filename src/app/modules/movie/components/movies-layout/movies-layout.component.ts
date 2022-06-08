import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

import {DataService} from "../../services/data.service";
import {IPagination} from "../../interfaces";

@Component({
  selector: 'app-movies-layout',
  templateUrl: './movies-layout.component.html',
  styleUrls: ['./movies-layout.component.css']
})
export class MoviesLayoutComponent implements OnInit {

  pagination: IPagination;
  page: number;
  paginationInfo:PageEvent;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe( ({ dataMovies }) => {
      this.dataService.movies.next(dataMovies);
    })
  }

  public getPagIngo(pe: PageEvent): void {
    this.paginationInfo = pe;
  }

}
