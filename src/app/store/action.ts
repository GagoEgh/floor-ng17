import { createAction, props } from '@ngrx/store';
import { ActionType } from './actions.types';
import { Href } from '../types/href.interface';
import { IFloorType } from '../types/floorType.interface';
import { ISaleTitle } from '../types/saleTitle.interface';

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
export const saleTitleFooterError = createAction(ActionType.SALETITLEFOOTER_ERROR)
