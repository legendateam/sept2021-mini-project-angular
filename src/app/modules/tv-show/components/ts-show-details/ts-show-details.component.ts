import { Component, OnInit } from '@angular/core';

import {SaveDataService} from "../../services/save-data.service";

@Component({
  selector: 'app-ts-show-details',
  templateUrl: './ts-show-details.component.html',
  styleUrls: ['./ts-show-details.component.css']
})
export class TsShowDetailsComponent implements OnInit {


  constructor(private saveService:  SaveDataService) { }

  ngOnInit(): void {
  }

}
