import { Component, Signal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISaleTitle } from '../../../types/saleTitle.interface';
import { MenuService } from '../../../apis/menu.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.scss'
})
export class SaleComponent {
  menuService = inject(MenuService);
  store = inject(Store);

  vectorRight = signal("assets/imgs/header/vector_right.png");
  saleTitleHeader:Signal<ISaleTitle[]|undefined>
  saleTitleFooter:Signal<ISaleTitle[]|undefined>

  constructor(){
    this.menuService.saleHeadDispatch();
    this.menuService.saleFooterDispatch()
    this.saleTitleHeader = this.menuService.getSaleTitleHeadSignal();
    this.saleTitleFooter = this.menuService.getSaleTitleFooterSignal();
  }
}
