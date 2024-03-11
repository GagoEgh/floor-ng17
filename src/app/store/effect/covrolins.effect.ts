import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { covrolinsError, covrolinsStart, covrolinsSucces } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetJsonService } from "../../apis/getJson.service";


@Injectable()
export class CovrolinsEffect {
    actions = inject(Actions);
    getJsonService = inject(GetJsonService)

    floorType = createEffect(() => this.actions.pipe(
        ofType(covrolinsStart),
        switchMap(() => {
            return this.getJsonService.getCovrolin()
                .pipe(
                    map((covrolins: any) => {
                        return covrolinsSucces({ covrolins: covrolins })
                    }),
                    catchError(() => of(covrolinsError()))
                )
        })
    ))
}

