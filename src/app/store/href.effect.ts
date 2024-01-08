import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MenuService } from "../core/services/menu.service";
import { menuActionError, menuActionStart, menuActionSuccess } from "./action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class HrefEffect{
    actions = inject(Actions);
    menuService = inject(MenuService);

    hrefEffect = createEffect(()=>this.actions.pipe(
        ofType(menuActionStart),
        switchMap(()=>{
            return this.menuService.getHref()
            .pipe(
                map((res:any)=>{
                   return menuActionSuccess({href:res})
                }),
                catchError(()=>of(menuActionError()))
            )
        })
    ))
}