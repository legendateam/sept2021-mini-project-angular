import {Component, OnInit, Output} from '@angular/core';

import {DataService} from "../../services/data.service";
import {IMovie} from "../../../../interfaces";
import {AnimationService} from "../../services/animation.service";

@Component({
  selector: 'app-animation-cards',
  templateUrl: './animation-cards.component.html',
  styleUrls: ['./animation-cards.component.css']
})
export class AnimationCardsComponent implements OnInit {

  animations: IMovie[] = [];
  myI: number;

  constructor(private dataService: DataService, private animationService: AnimationService) {
  }

  ngOnInit(): void {
    this.dataService.animation.subscribe( response => {
      response.results.forEach(a => this.animations.push(a));
      this.myI = response.page
    })

    if (this.myI <= 496) {
      for(let i = this.myI + 1; i <= this.myI + 3; i++) {
        this.animationService.getAllWithPagination(i).subscribe( response => {
          response.results.forEach(a => this.animations.push(a));
        })
      }
    }

  }
}
