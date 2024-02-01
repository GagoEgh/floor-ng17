import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetJsonService } from '../../../apis/getJson.service';
import { MenuService } from '../../../apis/menu.service';
import { IReviews } from '../../../types/reviews.interface';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

  menuService = inject(MenuService);
 

  reviews: Signal<IReviews[] | undefined>;
  goldRight = "assets/imgs/dashborders/news/gold-right.png";
  fiveStar = "assets/imgs/dashborders/reviews/5star.png";
  fourStar = "assets/imgs/dashborders/reviews/4star.png";

  constructor() {

    this.menuService.reviewsDispatch();
    this.reviews = this.menuService.reviewsSignal();
  }
}
