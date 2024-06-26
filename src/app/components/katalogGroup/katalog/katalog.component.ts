import {
  Component, OnInit, Signal,
  inject, signal, EnvironmentInjector
} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ICovrolin } from '../../../types/covfolin.interface';
import { MenuService } from '../../../apis/menu.service';
import { CovrolinComponent } from '../covrolin/covrolin.component';
import { PaginationComponent } from '../../../features/pagination/pagination.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { CovrolinParametrComponent } from '../covrolin-parametr/covrolin-parametr.component';
import { IParametrs } from '../../../types/paramters.interface';
import { searchRooms } from '../../../features/searchRoomas.function';
import { searchColor } from '../../../features/searchColor.function';
import { searchSum } from '../../../features/searchSum.function';


@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [
    CommonModule,
    CovrolinComponent,
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
    CovrolinParametrComponent,
    NgClass
  ],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogKovrolinComponent implements OnInit {

  title = '';
  isBar = false;
  covrolins!: Signal<ICovrolin[] | undefined>;
  vewCovrolins!: Signal<ICovrolin[] | undefined>;
  isVisible = signal(true);
  search$ = new Subject<string>();

  private injector = inject(EnvironmentInjector);
  private menuService = inject(MenuService);

  constructor() {
    this.menuService.covrolinsDispatch();
    this.covrolins = this.menuService.getCovrolinsSignal();
    this.searcCovrolins()
  }

  ngOnInit(): void {
    this.vewCovrolins = this.covrolins;
  }

  searchKovrolin() {
    this.search$.next(this.title)
  }

  goToPage(ev: Signal<ICovrolin[] | undefined>) {
    this.vewCovrolins = ev;
  }

  visibleChange(ev: boolean) {
    this.isVisible.update((v: boolean) => v = ev)
  }

  private injectCovrolin() {
    this.injector.runInContext(() => (
      this.menuService.covrolinsDispatch(),
      this.covrolins = this.menuService.getCovrolinsSignal()));
    this.vewCovrolins = this.covrolins
  }

  private searcCovrolins() {
    this.search$.pipe(
      distinctUntilChanged((previous, current) => previous === current),
      map((res: string) => {
        this.covrolins = signal(this.covrolins()?.filter((covrolin: ICovrolin) => covrolin.collection.startsWith(res.toUpperCase())))
        this.vewCovrolins = this.covrolins;
        if (res === '') {
          this.injectCovrolin();
        }
        return this.covrolins()

      }),
      debounceTime(300)).subscribe()
  }

  covrolinsChange(event: IParametrs) {
    let sum = searchSum(event, this.covrolins);
    let colors = searchColor(event, this.covrolins);
    let rooms = searchRooms(event, this.covrolins);

    let b = [...colors, ...rooms, ...sum!];
    let uniqe = signal([...new Set(b)]);
    this.covrolins = uniqe;
    this.vewCovrolins = uniqe;

  }

  getClass() {
    return {
      'show': this.isBar,
      'bar': !this.isBar
    }
  }

  getKatalogClass() {
    return {
      'katalogTop': this.isBar,
      'katalog': !this.isBar
    }
  }


  showBar() {
    this.isBar = !this.isBar
  }

  cancelValidator(ev: boolean) {
    if (ev) {
      this.injectCovrolin()
    }
  }

}