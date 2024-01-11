import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BaseText } from '../types/baseText.interface';

const baseFeatureSelector = createFeatureSelector<BaseText>('baseText');
export const topMenu = createSelector(baseFeatureSelector ,(state:BaseText)=>state.topMenu);
export const isLoad = createSelector(baseFeatureSelector,(state:BaseText)=>state.isLoad);
export const href = createSelector(baseFeatureSelector,(state:BaseText)=>state.href);
export const imgs = createSelector(baseFeatureSelector,(state:BaseText)=>state.imgs);
export const puyCards = createSelector(baseFeatureSelector,(state:BaseText)=>state.puyCards);
export const floorType = createSelector(baseFeatureSelector,(state:BaseText)=>state.floorType);
export const base = createSelector(baseFeatureSelector,(state:BaseText)=>state);