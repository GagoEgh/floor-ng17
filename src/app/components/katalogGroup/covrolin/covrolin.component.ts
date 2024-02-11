import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICovrolin } from '../../../types/covfolin.interface';

@Component({
  selector: 'app-covrolin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './covrolin.component.html',
  styleUrl: './covrolin.component.scss'
})
export class CovrolinComponent {
  eye = signal('assets/imgs/katalogGroup/covrolins/eye.png')
  @Input()covrolin!:ICovrolin;

}
