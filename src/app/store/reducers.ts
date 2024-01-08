import { createReducer, on } from '@ngrx/store';
import { BaseText } from '../types/baseText.interface';
import { menuActionError, menuActionStart, menuActionSuccess } from './action';


const baseText:BaseText = {
    isLoad:null,
    puyCards:["/assets/imgs/footer/Visa__logo.png","/assets/imgs/footer/Mastercard-logo.png","/assets/imgs/footer/Mir-logo.png"],
    imgs:["/assets/imgs/header/login.png","/assets/imgs/header/star.png","/assets/imgs/header/shopping.png"],
    href:[],
    topMenu:['Ковролин','Ковровая плитка','Линолеум','Дизайн-плитка ПВХ',
    'Ламинат','Сопутствующие товары'],
    
}

export const baseReducer = createReducer(
    baseText,
    on(menuActionStart, (state:BaseText)=>({...state,isLoad:true})),
    on(menuActionSuccess, (state:BaseText,action)=>({...state,isLoad:false,href:action.href})),
    on(menuActionError, (state:BaseText)=>({...state,isLoad:false})),
)