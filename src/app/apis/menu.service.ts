import { Injectable, Signal, inject, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  covrolinColorStart,
  covrolinsStart,
  floorTypeStart,
  menuActionStart,
  newsStart,
  reviewsStart,
  saleTitleFooterStart, saleTitleHeadStart, typeOfRoomStart
} from '../store/action';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  covrolinColors,
  covrolins,
  floorType,
  href,
  imgs,
  news,
  puyCards,
  reviews,
  saleTitleFooter,
  saleTitleHead, topMenu, typeOfRoom
} from '../store/selectors';
import { Observable, map } from 'rxjs';
import { IRooms } from '../types/rooms.interface';
import { IParametrs } from '../types/paramters.interface';



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  store = inject(Store);

  menuDispatch() {
    this.store.dispatch(menuActionStart());
  }

  floorDispatch() {
    this.store.dispatch(floorTypeStart())
  }

  saleHeadDispatch() {
    this.store.dispatch(saleTitleHeadStart())
  }

  saleFooterDispatch() {
    this.store.dispatch(saleTitleFooterStart())
  }

  newsDispatch() {
    this.store.dispatch(newsStart())
  }

  reviewsDispatch() {
    this.store.dispatch(reviewsStart())
  }

  covrolinsDispatch() {
    this.store.dispatch(covrolinsStart())
  }

  roomsDispatch() {
    this.store.dispatch(typeOfRoomStart())
  }

  covrolinColorsDispatch() {
    this.store.dispatch(covrolinColorStart())
  }

  covrolinColorSignal() {
    return toSignal(this.store.pipe(select(covrolinColors)))
  }

  reviewsSignal() {
    return toSignal(this.store.pipe(select(reviews)))
  }

  newsSignal() {
    return toSignal(this.store.pipe(select(news)))
  }

  topMenuSignal() {
    return toSignal(this.store.pipe(select(topMenu)))
  }

  getHrefSignal() {
    return toSignal(this.store.pipe(select(href)))
  }

  getImgsSignal() {
    return toSignal(this.store.pipe(select(imgs)))
  }

  getPuyCardsSignal() {
    return toSignal(this.store.pipe(select(puyCards)))
  }


  getFloorTypeSignal() {
    return toSignal(this.store.pipe(select(floorType)))
  }

  getSaleTitleHeadSignal() {
    return toSignal(this.store.pipe(select(saleTitleHead)))
  }

  getSaleTitleFooterSignal() {
    return toSignal(this.store.pipe(select(saleTitleFooter)))
  }

  getCovrolinsSignal() {
    return toSignal(this.store.pipe(select(covrolins)))
  }


  getTypeOfRoomsSignal():Signal<IRooms[] | undefined>{
    return toSignal(this.store.pipe(select(typeOfRoom)))
  }

}
