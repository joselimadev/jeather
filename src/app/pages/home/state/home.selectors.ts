import { createFeatureSelector, createSelector } from '@ngrx/store';

import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector('home');

export const selectCurretWeather = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.entity
);

export const selectCurretWeatherLoading = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.loading
);

export const selectCurretWeatherError = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.error
);
