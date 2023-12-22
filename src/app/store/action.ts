import { createAction, props } from '@ngrx/store';
import { MenuActionType } from './actions.types';

export const menuActionStart = createAction(MenuActionType.MENU_START);
export const menuActionSuccess = createAction(MenuActionType.MENU_SUCCESS);
export const menuActionError = createAction(MenuActionType.MENU_ERROR);

