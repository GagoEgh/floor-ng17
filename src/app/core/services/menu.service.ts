import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { floorTypeStart, menuActionStart } from '../../store/action';
import { toSignal } from '@angular/core/rxjs-interop';
import { floorType, href, imgs, puyCards, topMenu } from '../../store/selectors';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  store = inject(Store);
  http = inject(HttpClient)
  constructor() { }

  topMenuSignal() {
    return toSignal(this.store.pipe(select(topMenu)))
  }
  
  menuDispatch() {
    this.store.dispatch(menuActionStart());
  }

  floorDispatch(){
    this.store.dispatch(floorTypeStart())
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


  getHref() {
    return this.http.get('assets/href.json')
  }

  getFloorType(){
    return this.http.get('assets/floorType.json')
  }

  getFloorTypeSignal(){
    return toSignal(this.store.pipe(select(floorType)))
  }
}
