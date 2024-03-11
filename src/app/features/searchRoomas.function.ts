import { Signal } from "@angular/core";
import { IParametrs } from "../types/paramters.interface";
import { ICovrolin } from "../types/covfolin.interface";

export function searchRooms(ev: IParametrs, covrolins: Signal<ICovrolin[] | undefined>):ICovrolin[] {
    let rooms = []
    let roomsSize = ev.rooms!.length;
    let size = covrolins()?.length!;

    for (let i = 0; i < size; i++) {
      let roomTypeSize = covrolins()![i].roomType.length;
      for (let k = 0; k < roomsSize; k++) {
        for (let l = 0; l < roomTypeSize; l++) {
          if (covrolins()![i].roomType[l] === ev.rooms[k].name) {
            rooms.push(covrolins()![i]);
          }
        }
      }
    }

    return rooms
  }