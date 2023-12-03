import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-contacts.component.html',
  styleUrl: './header-contacts.component.scss'
})
export class HeaderContactsComponent {
  logo = "/assets/imgs/header/logo.png";
  call = "/assets/imgs/header/call.png";
  location = "/assets/imgs/header/location.png";
  search = "/assets/imgs/header/Vector.png";
  star = "/assets/imgs/header/star.png";
  shoping = "/assets/imgs/header/shopping.png";
  login = "/assets/imgs/header/login.png";
}
