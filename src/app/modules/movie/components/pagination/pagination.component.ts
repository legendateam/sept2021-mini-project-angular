import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

import {DataService} from "../../services/data.service";
import {IPagination} from "../../interfaces";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  pagination: IPagination;
  page: number;

  constructor(private dataService: DataService, private router: Router) {
    this.pagination = { length: 10000, pageSize : 20, pageSizeOptions : [20,40,60,100] }
    this.page = 0;
  }

  ngOnInit() {

    this.dataService.page.subscribe(page => {
      this.page = +page - 1;
    })

    this.dataService.perPage.subscribe(perPage => {
      this.pagination.pageSize = +perPage;
    })

    this.router.navigate([], { queryParams: { page: this.page + 1, perPage: this.pagination.pageSize } })
  }

  public setDataOnChange(pe:PageEvent): void {
    this.dataService.checkPagination.next(true);

    this.dataService.page.next(++pe.pageIndex);
    this.dataService.perPage.next(pe.pageSize);

    this.router.navigate([], { queryParams: { page: +pe.pageIndex, perPage: pe.pageSize }});

  }

}
