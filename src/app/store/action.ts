import { createAction, props } from '@ngrx/store';
import { MenuActionType } from './actions.types';
import { Href } from '../types/href.interface';

export const menuActionStart = createAction(MenuActionType.MENU_START);
export const menuActionSuccess = createAction(MenuActionType.MENU_SUCCESS,props<{href:Href[]}>());
export const menuActionError = createAction(MenuActionType.MENU_ERROR);

