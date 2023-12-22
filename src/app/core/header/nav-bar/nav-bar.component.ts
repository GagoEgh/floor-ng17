import { Component, Signal, inject, } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Href } from '../../../types/href.interface';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent  {

  menuService = inject(MenuService);
  href: Signal<Href[] | undefined>;
  burger = "/assets/imgs/header/burger.png";
  login = "/assets/imgs/header/login.png";
  star = "/assets/imgs/header/star.png";
  shoping = "/assets/imgs/header/shopping.png";

  
  constructor() {
    this.href = this.menuService.getHrefSignal()
  }

}
