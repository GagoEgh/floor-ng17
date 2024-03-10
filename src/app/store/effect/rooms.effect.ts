import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { typeOfRoomError, typeOfRoomStart, typeOfRoomSucces } from "../action";
import { catchError, map, of, switchMap } from "rxjs";
import { GetJsonService } from "../../apis/getJson.service";

@Injectable()
export class RoomsEffect {
    actions = inject(Actions);
    getJsonService = inject(GetJsonService)

    rooms = createEffect(() => this.actions.pipe(
        ofType(typeOfRoomStart),
        switchMap(() => {
            return this.getJsonService.getTypeOfRoom()
                .pipe(
                    map((res: any) => {
                        return typeOfRoomSucces({ typeOfRooms: res })
                    }),
                    catchError(() => of(typeOfRoomError()))
                )
        })
    ))
}

