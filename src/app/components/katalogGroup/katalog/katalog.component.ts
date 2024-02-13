import { Component, OnInit, Signal, WritableSignal, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICovrolin } from '../../../types/covfolin.interface';
import { MenuService } from '../../../apis/menu.service';
import { CovrolinComponent } from '../covrolin/covrolin.component';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [
    CommonModule,
    CovrolinComponent
  ],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogKovrolinComponent implements OnInit {

  covrolins!: Signal<ICovrolin[] | undefined>;
  vewCovrolins!: Signal<ICovrolin[] | undefined>
  menuService = inject(MenuService);
  pageCount!: Signal<Array<any>>;
  pageination: WritableSignal<Pageination> = signal({ page: 0 });

  constructor() {
    this.menuService.covrolinsDispatch();
    this.covrolins = this.menuService.getCovrolinsSignal();

  }

  private pageLength(): number {
    return Math.ceil(this.covrolins()!.length / 10);
  }


  ngOnInit(): void {
    this.vewCovrolins = this.covrolins;
    this.pageCount = signal(new Array(this.pageLength()));
    this.goToNumberPage(1);
  }

  updatePage(index: number) {
    this.pageination.update((p: Pageination) => ({ page: index }));
  }

  goToNumberPage(index: number) {
    this.updatePage(index)
    let size = index * 10;
    let start = size - 10;
    this.vewCovrolins = computed(() => this.covrolins()?.slice(start, size));
  }

  previous() {
    this.pageination().page--;
    if(this.pageination().page===0){
      this.pageination().page = this.pageLength()
    }
    this.goToNumberPage(this.pageination().page)

  }

  next() {
    this.pageination().page++;
    if(this.pageination().page>this.pageLength()){
      this.pageination().page = 1
    }
    this.goToNumberPage(this.pageination().page);
    console.log('previous', this.pageination())
  }

}

interface Pageination {
  page: number
}
