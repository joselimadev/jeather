import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BookmarkState } from './bookmark.reducer';

export const selectBookmarksState = createFeatureSelector('bookmarks');

export const selectBookmarksList = createSelector(
  selectBookmarksState,
  (bookmarksState: BookmarkState) => bookmarksState.list
);
