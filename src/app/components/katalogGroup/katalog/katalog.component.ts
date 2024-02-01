import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICovrolin } from '../../../types/covfolin.interface';
import { MenuService } from '../../../apis/menu.service';
import { CovrolinComponent } from '../covrolin/covrolin.component';

@Component({
  selector: 'app-katalog',
  standalone: true,
  imports: [CommonModule,CovrolinComponent],
  templateUrl: './katalog.component.html',
  styleUrl: './katalog.component.scss'
})
export class KatalogKovrolinComponent {

  covrolins!:Signal<ICovrolin[]| undefined>
  menuService = inject(MenuService);

  constructor(){
    this.menuService.covrolinsDispatch();
    this.covrolins = this.menuService.getCovrolinsSignal()
  }
}
