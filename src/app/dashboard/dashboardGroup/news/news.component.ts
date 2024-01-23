import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetJsonService } from '../../../apis/getJson.service';
import { Observable } from 'rxjs';
import { INews } from '../../../types/news.interface';
import { MenuService } from '../../../apis/menu.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  getJsonService = inject(GetJsonService);
  menuService = inject(MenuService);
  news!:Signal<INews[] | undefined>

  constructor() {
    this.menuService.newsDispatch();
    this.news = this.menuService.newsSignal()

  }
}
