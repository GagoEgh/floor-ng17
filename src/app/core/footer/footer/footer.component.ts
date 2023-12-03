import { Component, WritableSignal, inject } from '@angular/core';
import { Href } from '../../../types/href.interface';
import { MenuService } from '../../services/menu.service';
import { RouterModule } from '@angular/router';

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
  topMenu!: WritableSignal<string[]>
  href!: WritableSignal<Href[]>;

  constructor() {
    this.href = this.menuService.getHref();
    this.topMenu = this.menuService.getTopMenu()
  }
}
