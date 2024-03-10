import { createAction, props } from '@ngrx/store';
import { ActionType } from './actions.types';
import { Href } from '../types/href.interface';
import { IFloorType } from '../types/floorType.interface';
import { ISaleTitle } from '../types/saleTitle.interface';
import { INews } from '../types/news.interface';
import { IReviews } from '../types/reviews.interface';
import { ICovrolin } from '../types/covfolin.interface';
import { IApi } from '../types/api.interface';
import { IRooms } from '../types/rooms.interface';
import { ICovrolinColors } from '../types/covrolinColor.interface';

export const menuActionStart = createAction(ActionType.MENU_START);
export const menuActionSuccess = createAction(ActionType.MENU_SUCCESS, props<{ href: Href[] }>());
export const menuActionError = createAction(ActionType.MENU_ERROR);

export const floorTypeStart = createAction(ActionType.FLOORTYPE_START);
export const floorTypeSucces = createAction(ActionType.FLOORTYPE_SUCCESS, props<{ floorType: IFloorType[] }>());
export const floorTypeError = createAction(ActionType.FLOORTYPE_ERROR);

export const saleTitleHeadStart = createAction(ActionType.SALETITLEHEAD_START);
export const saleTitlHeadSucces = createAction(ActionType.SALETITLEHEAD_SUCCESS, props<{ saleTitle: ISaleTitle[] }>());
export const saleTitleHeadError = createAction(ActionType.SALETITLEHEAD_ERROR);

export const saleTitleFooterStart = createAction(ActionType.SALETITLEFOOTER_START);
export const saleTitlFooterSucces = createAction(ActionType.SALETITLEFOOTER_SUCCESS, props<{ saleTitleFooter: ISaleTitle[] }>());
export const saleTitleFooterError = createAction(ActionType.SALETITLEFOOTER_ERROR);

export const newsStart = createAction(ActionType.NEWS_START);
export const newSucces = createAction(ActionType.NEWS_SUCCESS, props<{ news: INews[] }>());
export const newsError = createAction(ActionType.NEWS_ERROR);

export const reviewsStart = createAction(ActionType.REVIEWS_START);
export const reviewsSucces = createAction(ActionType.REVIEWS_SUCCESS, props<{ reviews: IReviews[] }>());
export const reviewsError = createAction(ActionType.REVIEWS_ERROR);

export const covrolinsStart = createAction(ActionType.COVROLIN_START);
export const covrolinsSucces = createAction(ActionType.COVROLIN_SUCCESS, props<{ covrolins: ICovrolin[] }>());
export const covrolinsError = createAction(ActionType.COVROLIN_ERROR);

export const typeOfRoomStart = createAction(ActionType.TYPE_OF_ROOM_START);
export const typeOfRoomSucces = createAction(ActionType.TYPE_OF_ROOM_SUCCESS, props<{ typeOfRooms: IRooms[] }>());
export const typeOfRoomError = createAction(ActionType.TYPE_OF_ROOM_ERROR);

export const covrolinColorStart = createAction(ActionType.COVROLIN_COLOR_START);
export const covrolinColorSucces = createAction(ActionType.COVROLIN_COLOR_SUCCESS, props<{ covrolinColors: ICovrolinColors[] }>());
export const covrolinColorError = createAction(ActionType.COVROLIN_COLOR_ERROR);

interface Checked{
    index:number,
    isChecked:boolean
}