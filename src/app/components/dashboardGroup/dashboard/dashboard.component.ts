import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorCoveringsComponent } from '../floor-coverings/floor-coverings.component';
import { KatalogComponent } from '../katalog/katalog.component';
import { SaleComponent } from '../sale/sale.component';
import { NewsComponent } from '../news/news.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FloorCoveringsComponent,
    KatalogComponent,
    SaleComponent,
    NewsComponent 
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
