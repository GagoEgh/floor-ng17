import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuService } from "../core/services/menu.service";
import { floorTypeError, floorTypeStart, floorTypeSucces } from "./action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class FloorTypeEffect{
    actions = inject(Actions);
    menuService = inject(MenuService);

    floorType = createEffect(()=>this.actions.pipe(
        ofType(floorTypeStart),
        switchMap(()=>{
            return this.menuService.getFloorType()
            .pipe(
                map((res:any)=>{
                   return floorTypeSucces({floorType:res})
                }),
                catchError(()=>of(floorTypeError()))
            )
        })
    ))
}

