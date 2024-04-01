import { Component, OnInit, Signal, inject, signal, EnvironmentInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICovrolin } from '../../../types/covfolin.interface';
import { MenuService } from '../../../apis/menu.service';
import { CovrolinComponent } from '../covrolin/covrolin.component';
import { PaginationComponent } from '../../../features/pagination/pagination.component';
import { FormsModule, } from '@angular/forms';
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
    PaginationComponent,
    CovrolinParametrComponent
  ],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogKovrolinComponent implements OnInit {

  title = '';
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

  private searcCovrolins() {
    this.search$.pipe(
      distinctUntilChanged((previous, current) => previous === current),
      map((res: string) => {
        this.covrolins = signal(this.covrolins()?.filter((covrolin: ICovrolin) => covrolin.collection.startsWith(res.toUpperCase())))
        this.vewCovrolins = this.covrolins;
        if (res === '') {
          this.injector.runInContext(() => (this.menuService.covrolinsDispatch(),
            this.covrolins = this.menuService.getCovrolinsSignal()));
          this.vewCovrolins = this.covrolins
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

  isBar = false;
  showBar() {
    this.isBar = !this.isBar
    console.log("jjjj", this.isBar)
  }
}