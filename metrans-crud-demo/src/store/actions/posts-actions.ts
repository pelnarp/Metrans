import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/model/post';

export const loadPosts = createAction(
    '[Posts] Load'
);

export const loadPostsSuccess = createAction(
    '[Posts] Load Success',
    props<{ posts: Post[] }>()
);

export const loadPostsError = createAction(
    '[Posts] Load Error'
);

export const deleteOne = createAction(
    '[Posts] Delete One',
    props<{ postId: number }>()
);

export const update = createAction(
    '[Posts] Update',
    props<{ post: Post }>()
);

export const updatePostSuccess = createAction(
    '[Posts] Update Success',
);

export const updatePostError = createAction(
    '[Posts] Update Error'
);

export const create = createAction(
    '[Posts] Create',
    props<{ post: Post }>()
);

export const createPostSuccess = createAction(
    '[Posts] Create Success',
    props<{ post: Post }>()
);

export const createPostError = createAction(
    '[Posts] Create Error'
);

export const postsActions = {
    loadPosts,
    loadPostsSuccess,
    loadPostsError,
    deleteOne,
    update,
    create,
    createPostSuccess,
    createPostError
};