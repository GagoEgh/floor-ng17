import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { floorTypeError, floorTypeStart, floorTypeSucces } from "./action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetJsonService } from "../apis/getJson.service";

@Injectable()
export class FloorTypeEffect{
    actions = inject(Actions);
    getJsonService = inject(GetJsonService)

    floorType = createEffect(()=>this.actions.pipe(
        ofType(floorTypeStart),
        switchMap(()=>{
            return this.getJsonService.getFloorType()
            .pipe(
                map((res:any)=>{
                   return floorTypeSucces({floorType:res})
                }),
                catchError(()=>of(floorTypeError()))
            )
        })
    ))
}

