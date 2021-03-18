import { createReducer, Action, on } from '@ngrx/store';

import { Bookmark } from 'src/app/shared/models/bookmark.model';

import * as fromBookmarkActions from './bookmark.actions';
import * as fromHomeActions from '../../home/state/home.actions';

export interface BookmarkState {
  list: Bookmark[];
}

export const bookmarkInitialState: BookmarkState = {
  list: [],
};

const reducer = createReducer(
  bookmarkInitialState,
  on(fromHomeActions.toogleBookmark, (state, { entity }) => ({
    ...state,
    list: toogleBookmark(state.list, entity),
  })),
  on(fromBookmarkActions.removeBookmark, (state, { id }) => ({
    ...state,
    list: state.list.filter((bookmark) => bookmark.id !== id),
  }))
);

const toogleBookmark = (list: Bookmark[], entity: Bookmark): Bookmark[] => {
  if (!!list.find((bookmark) => bookmark.id === entity.id)) {
    return list.filter((bookmark) => bookmark.id !== entity.id);
  }
  return [...list, entity];
};

export function bookmarkReducer(
  state: BookmarkState | undefined,
  action: Action
) {
  return reducer(state, action);
}
