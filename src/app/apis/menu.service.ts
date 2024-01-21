import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { floorTypeStart, menuActionStart, saleTitleFooterStart, saleTitleHeadStart } from '../store/action';
import { toSignal } from '@angular/core/rxjs-interop';
import { floorType, href, imgs, puyCards, saleTitleFooter, saleTitleHead, topMenu } from '../store/selectors';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  store = inject(Store);
 
  topMenuSignal() {
    return toSignal(this.store.pipe(select(topMenu)))
  }
  
  menuDispatch() {
    this.store.dispatch(menuActionStart());
  }

  floorDispatch(){
    this.store.dispatch(floorTypeStart())
  }

  saleHeadDispatch(){
    this.store.dispatch(saleTitleHeadStart())
  }

  saleFooterDispatch(){
    this.store.dispatch(saleTitleFooterStart())
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


  getFloorTypeSignal(){
    return toSignal(this.store.pipe(select(floorType)))
  }

  getSaleTitleHeadSignal(){
    return toSignal(this.store.pipe(select(saleTitleHead)))
  }

  getSaleTitleFooterSignal(){
    return toSignal(this.store.pipe(select(saleTitleFooter)))
  }

}
