import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetJsonService } from "../apis/getJson.service";
import { newSucces, newsError, newsStart } from "./action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class NewsEffect {
    actions = inject(Actions);
    getJsonService = inject(GetJsonService);

    newsEffect = createEffect(() => this.actions.pipe(
        (ofType(newsStart)),
        switchMap(() => this.getJsonService.getNews()
            .pipe(
                map((res) => newSucces({ news: res })),
                catchError(() => of(newsError()))
            ))
    ))
}