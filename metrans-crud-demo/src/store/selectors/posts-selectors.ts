import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAll } from '../reducers/posts-reducers';
import { AppState } from '../state/app.state';

export const postsFeatureSelector = (state: AppState) => state.postsState;

export const getPosts = createSelector(
    postsFeatureSelector,
    selectAll
);

export const getPostsById = (id: string) => createSelector(
    postsFeatureSelector,
    (postsState) => postsState.entities[id]
);