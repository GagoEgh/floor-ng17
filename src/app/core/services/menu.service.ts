import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getHref() {
    return signal([
      {
        href: 'company',
        title: 'О компании'
      },
      {
        href: 'services',
        title: 'Сервисы'
      },
      {
        href: 'projects',
        title: 'Проекты'
      },
      {
        href: 'promotions',
        title: 'Акции'
      },
      {
        href: 'news',
        title: 'Новости'
      },
      {
        href: 'contacts',
        title: 'Контакты'
      },
      {
        href: 'reviews',
        title: 'Отзывы'
      },])
  }

  getTopMenu(){
    return signal(['Ковролин','Ковровая плитка','Линолеум','Дизайн-плитка ПВХ','Ламинат','Сопутствующие товары'])
  }
}
