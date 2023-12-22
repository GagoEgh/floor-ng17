import { Injectable, inject, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { menuActionStart } from '../../store/action';
import { toSignal } from '@angular/core/rxjs-interop';
import { href, topMenu } from '../../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  store = inject(Store);
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

}
