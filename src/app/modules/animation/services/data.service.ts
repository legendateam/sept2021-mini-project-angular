import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IAnimation} from "../interfaces";
import {IResponse} from "../../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  animation = new BehaviorSubject<IResponse<IAnimation>>({results: [], page: 0});
  pagination: number;

  constructor() { }
}
