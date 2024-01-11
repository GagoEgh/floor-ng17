import { createAction, props } from '@ngrx/store';
import { ActionType } from './actions.types';
import { Href } from '../types/href.interface';
import { IFloorType } from '../types/floorType.interface';

export const menuActionStart = createAction(ActionType.MENU_START);
export const menuActionSuccess = createAction(ActionType.MENU_SUCCESS,props<{href:Href[]}>());
export const menuActionError = createAction(ActionType.MENU_ERROR);

export const floorTypeStart = createAction(ActionType.FLOORTYPE_START);
export const floorTypeSucces= createAction(ActionType.FLOORTYPE_SUCCESS,props<{floorType:IFloorType[]}>());
export const floorTypeError = createAction(ActionType.FLOORTYPE_ERROR);
