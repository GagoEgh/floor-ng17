import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BaseText } from '../types/baseText.interface';

const baseFeatureSelector = createFeatureSelector<BaseText>('baseText');
export const topMenu = createSelector(baseFeatureSelector ,(state:BaseText)=>state.topMenu);
export const isLoad = createSelector(baseFeatureSelector,(state:BaseText)=>state.isLoad);
export const href = createSelector(baseFeatureSelector,(state:BaseText)=>state.href);