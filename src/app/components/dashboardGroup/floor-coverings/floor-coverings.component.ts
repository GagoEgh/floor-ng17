import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-floor-coverings',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './floor-coverings.component.html',
  styleUrl: './floor-coverings.component.scss'
})
export class FloorCoveringsComponent {
  bigImg = signal("/assets/imgs/header/interior_1.png");
  smalImg = signal("/assets/imgs/header/interior_2.png");
  vector = signal("/assets/imgs/header/vector_right.png");
  mobImg =signal("/assets/imgs/header/img.png");

}
