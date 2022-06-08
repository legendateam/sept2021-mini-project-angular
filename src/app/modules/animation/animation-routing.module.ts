import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AnimationLayoutComponent} from "./components/animation-layout/animation-layout.component";
import {AnimationDetailsComponent} from "./components/animation-details/animation-details.component";
import {AnimationResolver} from "./services/resolvers/animation.resolver";
import {AnimationsResolver} from "./services/resolvers/animations.resolver";

const routes: Routes = [
  { path: '', component: AnimationLayoutComponent, resolve: { dataAnimations: AnimationsResolver } },
  { path: ':id', component: AnimationDetailsComponent, resolve: { dataDetails: AnimationResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationRoutingModule { }
