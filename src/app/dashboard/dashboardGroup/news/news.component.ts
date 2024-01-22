import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  storage = "assets/imgs/news/storage.png";
  desso = "assets/imgs/news/desso.png";
  goldRight = "assets/imgs/news/gold-right.png";
}
