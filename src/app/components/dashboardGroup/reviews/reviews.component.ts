import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  goldRight = "assets/imgs/news/gold-right.png";
  fiveStar = "assets/imgs/reviews/5star.png";
  fourStar = "assets/imgs/reviews/4star.png";
}
