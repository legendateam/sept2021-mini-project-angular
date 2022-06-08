import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IMovie, IResponse, ITvShows} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movie = new BehaviorSubject<IResponse<IMovie>>({results: [], page: 1});
  tv = new BehaviorSubject<IResponse<ITvShows>>({results: [], page: 1});

  constructor() { }
}
