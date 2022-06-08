import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  check: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle(check: boolean) {
    this.check = check;
    const darkMod = document.querySelectorAll('.toggle');
    darkMod.forEach( query => query.classList.toggle('dark_mod'))
  }
}
