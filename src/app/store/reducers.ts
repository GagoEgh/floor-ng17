import { createReducer, on } from '@ngrx/store';
import { BaseText } from '../types/baseText.interface';
import {
    floorTypeError, floorTypeStart, floorTypeSucces,
    menuActionError, menuActionStart, menuActionSuccess,
    saleTitlFooterSucces, saleTitleFooterError, saleTitleFooterStart,
    saleTitlHeadSucces, saleTitleHeadError, saleTitleHeadStart,
    newsStart,
    newSucces,
    newsError,
    reviewsStart,
    reviewsSucces,
    reviewsError,
    covrolinsStart,
    covrolinsSucces,
    covrolinsError
} from './action';



const baseText: BaseText = {
    isLoad: null,
    href: [],
    floorType: [],
    saleTitleHead: [],
    saleTitleFooter: [],
    news: [],
    reviews: [],
    covrolins:[],

    puyCards: ["/assets/imgs/footer/Visa__logo.png", "/assets/imgs/footer/Mastercard-logo.png", "/assets/imgs/footer/Mir-logo.png"],
    imgs: ["/assets/imgs/header/login.png", "/assets/imgs/header/star.png", "/assets/imgs/header/shopping.png"],
    topMenu: ['Ковролин', 'Ковровая плитка', 'Линолеум', 'Дизайн-плитка ПВХ',
        'Ламинат', 'Сопутствующие товары'],

}

export const baseReducer = createReducer(
    baseText,
    on(menuActionStart, (state: BaseText) => ({ ...state, isLoad: true })),
    on(menuActionSuccess, (state: BaseText, action) => ({ ...state, isLoad: false, href: action.href })),
    on(menuActionError, (state: BaseText) => ({ ...state, isLoad: false })),

    on(floorTypeStart, (state: BaseText) => ({ ...state })),
    on(floorTypeSucces, (state: BaseText, action) => ({ ...state, floorType: action.floorType })),
    on(floorTypeError, (state: BaseText) => ({ ...state })),

    on(saleTitleHeadStart, (state: BaseText) => ({ ...state })),
    on(saleTitlHeadSucces, (state: BaseText, action) => ({ ...state, saleTitleHead: action.saleTitle })),
    on(saleTitleHeadError, (state: BaseText) => ({ ...state })),

    on(saleTitleFooterStart, (state: BaseText) => ({ ...state })),
    on(saleTitlFooterSucces, (state: BaseText, action) => ({ ...state, saleTitleFooter: action.saleTitleFooter })),
    on(saleTitleFooterError, (state: BaseText) => ({ ...state })),

    on(newsStart, (state: BaseText) => ({ ...state })),
    on(newSucces, (state: BaseText, action) => ({ ...state, news: action.news })),
    on(newsError, (state: BaseText) => ({ ...state })),

    on(reviewsStart, (state: BaseText) => ({ ...state })),
    on(reviewsSucces, (state: BaseText, action) => ({ ...state, reviews: action.reviews })),
    on(reviewsError, (state: BaseText) => ({ ...state })),

    on(covrolinsStart, (state: BaseText) => ({ ...state })),
    on(covrolinsSucces, (state: BaseText, action) => ({ ...state, covrolins: action.covrolins })),
    on(covrolinsError, (state: BaseText) => ({ ...state })),
)