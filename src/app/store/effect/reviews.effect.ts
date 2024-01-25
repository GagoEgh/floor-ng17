import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetJsonService } from "../../apis/getJson.service";
import { reviewsError, reviewsStart, reviewsSucces } from "../action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class ReviewsEffect{

    actions = inject(Actions);
    getJsonService = inject(GetJsonService);

    reviewsEffect = createEffect(()=>this.actions.pipe(
        ofType(reviewsStart),
        switchMap(()=>this.getJsonService.getReviews()
        .pipe(map((res:any)=>reviewsSucces({reviews:res})),
        catchError(()=>of(reviewsError()))
        ))
    ))
}