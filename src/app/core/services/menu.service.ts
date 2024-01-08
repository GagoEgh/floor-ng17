import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { menuActionStart } from '../../store/action';
import { toSignal } from '@angular/core/rxjs-interop';
import { href, imgs, puyCards, topMenu } from '../../store/selectors';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  store = inject(Store);
  http = inject(HttpClient)
  constructor() {}

  topMenuSignal() {
    return toSignal(this.store.pipe(select(topMenu)))
}
  dispatch() {
    this.store.dispatch(menuActionStart());
  }

  getHrefSignal(){
    return toSignal(this.store.pipe(select(href)))
  }

  getImgsSignal(){
    return toSignal(this.store.pipe(select(imgs)))
  }

  getPuyCardsSignal(){
    return toSignal(this.store.pipe(select(puyCards)))
  }


  getHref(){
    return this.http.get('assets/href.json')
  }
}
