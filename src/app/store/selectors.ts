import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BaseText } from '../types/baseText.interface';

const baseFeatureSelector = createFeatureSelector<BaseText>('baseText');
export const topMenu = createSelector(baseFeatureSelector ,(state:BaseText)=>state.topMenu);
export const isLoad = createSelector(baseFeatureSelector,(state:BaseText)=>state.isLoad);
export const href = createSelector(baseFeatureSelector,(state:BaseText)=>state.href);
export const imgs = createSelector(baseFeatureSelector,(state:BaseText)=>state.imgs);
export const puyCards = createSelector(baseFeatureSelector,(state:BaseText)=>state.puyCards);
export const floorType = createSelector(baseFeatureSelector,(state:BaseText)=>state.floorType);
export const saleTitleHead = createSelector(baseFeatureSelector,(state:BaseText)=>state.saleTitleHead);
export const saleTitleFooter = createSelector(baseFeatureSelector,(state:BaseText)=>state.saleTitleFooter);
export const news = createSelector(baseFeatureSelector,(state:BaseText)=>state.news);
export const reviews = createSelector(baseFeatureSelector,(state:BaseText)=>state.reviews);
export const covrolins = createSelector(baseFeatureSelector,(state:BaseText)=>state.covrolins);
export const typeOfRoom = createSelector(baseFeatureSelector,(state:BaseText)=>state.typeOfRoom);

export const covrolinColors = createSelector(baseFeatureSelector,(state:BaseText)=>state.covrolinColors);
export const base = createSelector(baseFeatureSelector,(state:BaseText)=>state);
