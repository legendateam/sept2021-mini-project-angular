import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IMovie, IResponse, ITvShows} from "../../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  tvShows = new BehaviorSubject<IResponse<ITvShows>>({results: [], page: 0});

  constructor() { }
}
