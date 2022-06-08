import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { AnimationRoutingModule } from './animation-routing.module';
import { AnimationLayoutComponent } from './components/animation-layout/animation-layout.component';
import {DataService} from "./services/data.service";
import {AnimationService} from "./services/animation.service";
import {AnimationResolver} from "./services/resolvers/animation.resolver";
import {AnimationsResolver} from "./services/resolvers/animations.resolver";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {AnimationCardComponent} from "./components/animation-card/animation-card.component";
import {AnimationCardsComponent} from "./components/animation-cards/animation-cards.component";
import {AnimationDetailsComponent} from "./components/animation-details/animation-details.component";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    AnimationCardComponent,
    AnimationCardsComponent,
    AnimationDetailsComponent,
    AnimationLayoutComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    AnimationRoutingModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [
    DataService,
    AnimationService,
    AnimationResolver,
    AnimationsResolver
  ]
})
export class AnimationModule { }
