import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICovrolin } from '../../../types/covfolin.interface';
import { MenuService } from '../../../apis/menu.service';
import { CovrolinComponent } from '../covrolin/covrolin.component';
import { PaginationComponent } from '../../../features/pagination/pagination.component';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [
    CommonModule,
    CovrolinComponent,
    PaginationComponent
  ],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogKovrolinComponent implements OnInit {

  covrolins!: Signal<ICovrolin[] | undefined>;
  vewCovrolins!: Signal<ICovrolin[] | undefined>;
  isVisible = signal(true);
  menuService = inject(MenuService);


  constructor() {
    this.menuService.covrolinsDispatch();
    this.covrolins = this.menuService.getCovrolinsSignal();

  }

  ngOnInit(): void {
    this.vewCovrolins = this.covrolins;
  }

  goToPage(ev: Signal<ICovrolin[] | undefined>) {
    this.vewCovrolins = ev;
  }

  visibleChange(ev: boolean) {
    this.isVisible.update((v: boolean) => v = ev)
  }

}
