import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetJsonService } from "../apis/getJson.service";
import { saleTitlHeadSucces, saleTitleHeadError, saleTitleHeadStart } from "./action";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class SaleTitleHeadEffect {
    actions = inject(Actions);
    getJsonService = inject(GetJsonService);

    saleTitleHead = createEffect(() => this.actions.pipe(
        ofType(saleTitleHeadStart),
        switchMap(() => this.getJsonService.getSaleTitleHead()
            .pipe(
                map((res: any) => saleTitlHeadSucces({ saleTitle: res })),
                catchError(() => of(saleTitleHeadError()))
            ))
    ))


}