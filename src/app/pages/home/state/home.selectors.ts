import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

export const selectHomeTextState = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.text
);
