import { Component, Signal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../core/services/menu.service';
import { IFloorType } from '../../../types/floorType.interface';

interface Floor {
  img: string,
  name: string
}

@Component({
  selector: 'app-flooring-sel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flooring-sel.component.html',
  styleUrl: './flooring-sel.component.scss'
})
export class FlooringSelComponent {
  menuService = inject(MenuService);

  floorType!: Signal<IFloorType[] | undefined>;
  leftVector = signal("../../../assets/imgs/katalog/left-vector.png");
  rightVector = signal("../../../assets/imgs/header/vector_right.png");

  constructor() {
    this.menuService.floorDispatch();
    this.floorType = this.menuService.getFloorTypeSignal();
  }
}