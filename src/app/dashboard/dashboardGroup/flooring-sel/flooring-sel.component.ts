import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flooring-sel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flooring-sel.component.html',
  styleUrl: './flooring-sel.component.scss'
})
export class FlooringSelComponent {

  leftVector = "../../../assets/imgs/katalog/left-vector.png";
  rightVector = "../../../assets/imgs/header/vector_right.png";
  dots = "../../../assets/imgs/katalog/dots.png";
  kovr = "../../../assets/imgs/katalog/kovr.png";
  linoleum = "../../../assets/imgs/katalog/linoleum_icon.png";
  pvh = "../../../assets/imgs/katalog/PVH.png";
  laminat = "../../../assets/imgs/katalog/laminat_icon.png"
}
