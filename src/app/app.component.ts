import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header/header.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboardGroup/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
     RouterOutlet,
     HeaderComponent,
     DashboardComponent,
     FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'floor';
}
