import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Post } from 'src/app/model/post';
import { postsActions } from '../actions/posts-actions';

export interface PostsState extends EntityState<Post> {
}

export const postsAdapter: EntityAdapter<Post> = createEntityAdapter<Post>();

export const postsInitialState = postsAdapter.getInitialState();

export const postsReducer = createReducer(
    postsInitialState,

    on(postsActions.loadPostsSuccess, (state, action) => {
        return postsAdapter.addMany(action.posts, state);
    }),

    on(postsActions.deleteOne, (state, action) => {
        return postsAdapter.removeOne(action.postId, state);
    }),

    on(postsActions.update, (state, action) => {
            return postsAdapter.upsertOne(action.post, state);
    }),

    on(postsActions.createPostSuccess, (state, x) => {
        return postsAdapter.setOne(x.post, state);
    }),
);

export const {
    selectAll,
    selectTotal,
    //getAllItems: getItems
} = postsAdapter.getSelectors();