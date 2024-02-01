import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { covrolinsStart, floorTypeStart, menuActionStart, newsStart, reviewsStart, saleTitleFooterStart, saleTitleHeadStart } from '../store/action';
import { toSignal } from '@angular/core/rxjs-interop';
import { covrolins, floorType, href, imgs, news, puyCards, reviews, saleTitleFooter, saleTitleHead, topMenu } from '../store/selectors';


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

  reviewsDispatch(){
    this.store.dispatch(reviewsStart())
  }

  covrolinsDispatch(){
    this.store.dispatch(covrolinsStart())
  }

  reviewsSignal(){
    return toSignal(this.store.pipe(select(reviews)))
  }
  
  newsSignal(){
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

  getCovrolinsSignal(){
    return toSignal(this.store.pipe(select(covrolins)))
  }
}
