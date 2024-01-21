import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetJsonService } from "../apis/getJson.service";
import { saleTitlFooterSucces, saleTitleFooterError, saleTitleFooterStart } from "./action";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()
export class SaleTitleFooterEffect {
    actions = inject(Actions);
    getJsonService = inject(GetJsonService);

    saleTitleFooter = createEffect(() => this.actions.pipe(
        ofType(saleTitleFooterStart),
        switchMap(() => this.getJsonService.getSaleTitleFooter()
            .pipe(
                map((res: any) => saleTitlFooterSucces({ saleTitleFooter: res })),
                catchError(() => of(saleTitleFooterError()))
            ))
    ))
}