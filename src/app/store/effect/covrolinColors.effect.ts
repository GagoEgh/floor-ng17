import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { covrolinColorError, covrolinColorStart, covrolinColorSucces } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetJsonService } from "../../apis/getJson.service";

@Injectable()
export class CovrolinColorsEffect {
    actions = inject(Actions);
    getJsonService = inject(GetJsonService)

    floorType = createEffect(() => this.actions.pipe(
        ofType(covrolinColorStart),
        switchMap(() => {
            return this.getJsonService.getCovrolinColor()
                .pipe(
                    map((res: any) => {
                 
                        return covrolinColorSucces({ covrolinColors: res })
                    }),
                    catchError(() => of(covrolinColorError()))
                )
        })
    ))
}

