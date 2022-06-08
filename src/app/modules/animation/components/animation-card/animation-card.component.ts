import {Component, Input, OnInit} from '@angular/core';

import {urls} from "../../../../constants";
import {IAnimation} from "../../interfaces";

@Component({
  selector: 'app-animation-card',
  templateUrl: './animation-card.component.html',
  styleUrls: ['./animation-card.component.css']
})
export class AnimationCardComponent implements OnInit {

  @Input()
  animation: IAnimation;
  posterURL: string;

  constructor() { }

  ngOnInit(): void {
    this.posterURL = `${urls.imgW500}${this.animation.poster_path}`;
  }

}
