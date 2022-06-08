import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IMovie, IResponse} from "../../../interfaces";
import {IPagination} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  movies = new BehaviorSubject<IResponse<IMovie>>({results: [], page: 0});
  pagination = new BehaviorSubject<IPagination>({ length: 10000, pageSize: 20, pageSizeOptions: [20, 40, 60, 100] });
  page = new BehaviorSubject<number>(1);
  perPage = new BehaviorSubject<number>(20);
  checkPagination = new BehaviorSubject<boolean>(false);

  constructor() { }
}
