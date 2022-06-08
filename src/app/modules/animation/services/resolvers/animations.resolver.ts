import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {IResponse} from "../../../../interfaces";
import {IAnimation} from "../../interfaces";
import {AnimationService} from "../animation.service";

@Injectable({
  providedIn: 'root'
})
export class AnimationsResolver implements Resolve<IResponse<IAnimation>> {

  constructor(private animationService: AnimationService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<IResponse<IAnimation>> | Promise<IResponse<IAnimation>> | IResponse<IAnimation> {
      return this.animationService.getAll();
  }
}
