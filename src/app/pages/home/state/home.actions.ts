import { createAction, props } from '@ngrx/store';
import { Bookmark } from 'src/app/shared/models/bookmark.model';

export const loadCurrentWeather = createAction(
  '[Home] Load Current Weather',
  props<{ query: string }>()
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Current Weather Success',
  props<{ entity: any }>()
);

export const loadCurrentWeatherFail = createAction(
  '[Weather API] Load Current Weather Success Failed'
);

export const toogleBookmark = createAction(
  '[HOME] Togle Bookmark',
  props<{ entity: Bookmark }>()
);
