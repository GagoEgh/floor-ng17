import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContactsComponent } from '../header-contacts/header-contacts.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    HeaderContactsComponent,
    NavBarComponent,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logo = "/assets/imgs/header/logo.png";
  call = "/assets/imgs/header/call.png";
  location = "/assets/imgs/header/location.png";
  search = "/assets/imgs/header/Vector.png";
  star = "/assets/imgs/header/star.png";
  shoping = "/assets/imgs/header/shopping.png";
  login = "/assets/imgs/header/login.png";
}
