import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {DataService} from "../../services/data.service";
import {IAnimation} from "../../interfaces";

@Component({
  selector: 'app-animation-layout',
  templateUrl: './animation-layout.component.html',
  styleUrls: ['./animation-layout.component.css']
})
export class AnimationLayoutComponent implements OnInit {

  animations: IAnimation[];

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( ({dataAnimations}) => {
         this.dataService.animation.next(dataAnimations)
    })
  }

  public getAnimations(a: IAnimation[]): void {
    this.animations = a;
  }

}
