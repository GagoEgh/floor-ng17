import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { menuActionError, menuActionStart, menuActionSuccess } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetJsonService } from "../../apis/getJson.service";

@Injectable()
export class HrefEffect{
    actions = inject(Actions);
    getJsonService = inject(GetJsonService);

    hrefEffect = createEffect(()=>this.actions.pipe(
        ofType(menuActionStart),
        switchMap(()=>{
         
            return this.getJsonService.getHref()
            .pipe(
                map((res:any)=>{
                    
                   return menuActionSuccess({href:res})
                }),
                catchError(()=>of(menuActionError()))
            )
        })
    ))
}