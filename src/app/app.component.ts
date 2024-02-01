import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header/header.component';
import { FooterComponent } from './core/footer/footer/footer.component';

import { MenuService } from './apis/menu.service';
import { DashboardComponent } from './components/dashboardGroup/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
 
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  menuService = inject(MenuService);
  constructor() {
    this.menuService.menuDispatch();

  }
}
