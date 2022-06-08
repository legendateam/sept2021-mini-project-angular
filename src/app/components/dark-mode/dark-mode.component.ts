import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {

  check: boolean;
  @Output()
  toggle = new EventEmitter();

  constructor() {
    this.check = true;
  }

  ngOnInit(): void {
  }

  public checked(): void {
    this.check = !this.check
    this.toggle.emit(this.check)
  }

}
