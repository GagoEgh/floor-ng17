import { Action, createReducer, on } from '@ngrx/store';
import { BaseText } from '../types/baseText.interface';
import { menuActionError, menuActionStart, menuActionSuccess } from './action';


const baseText:BaseText = {
    isLoad:null,
    href:[
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
        },],

    topMenu:['Ковролин','Ковровая плитка','Линолеум','Дизайн-плитка ПВХ',
    'Ламинат','Сопутствующие товары'],
}

export const baseReducer = createReducer(
    baseText,
    on(menuActionStart, (state:BaseText)=>({...state,isLoad:true})),
    on(menuActionSuccess, (state:BaseText)=>({...state,isLoad:false})),
    on(menuActionError, (state:BaseText)=>({...state,isLoad:false})),

)