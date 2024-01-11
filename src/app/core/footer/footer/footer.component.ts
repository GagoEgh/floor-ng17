import { Component, Signal, inject } from '@angular/core';
import { Href } from '../../../types/href.interface';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  menuService = inject(MenuService);
  topMenu: Signal<string[] | undefined>;
  href: Signal<Href[] | undefined>;
  puyCards!: Signal<string[] | undefined>;
  
  constructor() {
    // this.menuService.dispatch();
    this.topMenu = this.menuService.topMenuSignal()
    this.href = this.menuService.getHrefSignal();
    this.puyCards = this.menuService.getPuyCardsSignal()
  }
}
