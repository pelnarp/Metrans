import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { deleteOne, loadPosts, loadPostsError, loadPostsSuccess, update, updatePostError, updatePostSuccess, create, createPostError, createPostSuccess } from '../actions/posts-actions';
import { Router } from '@angular/router';

@Injectable()
export class PostsEffects {
    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPosts),
            exhaustMap(() => {
                return this.postService.getAll().pipe(
                    map((posts) => loadPostsSuccess({ posts })),
                    catchError(() => of(loadPostsError()))
                )
            }
            ),
        ),
        { dispatch: true }
    );

    deleteSinglePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteOne),
            exhaustMap((action) => {
                return this.postService.delete(action.postId);
            }
            ),
        ),
        { dispatch: false }
    );

    updateSinglePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(update),
            exhaustMap((action) => {
                return this.postService.update(action.post).pipe(
                    map(() => updatePostSuccess()),
                    catchError(() => of(updatePostError()))
                )
            }
            ),
        ),
        { dispatch: true }
    );

    updateSinglePostSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(update),
            map(() => {
                this.router.navigate(['./']);
            }
            ),
        ),
        { dispatch: false }
    );

    createSinglePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(create),
            exhaustMap((action) => {
                return this.postService.create(action.post).pipe(
                    map((post) => {
                        return createPostSuccess({ post: post });
                    }),
                    catchError(() => of(createPostError()))
                )
            }
            ),
        ),
        { dispatch: true }
    );

    createSinglePostSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createPostSuccess),
            map(() => {
                this.router.navigate(['./']);
            }
            ),
        ),
        { dispatch: false }
    );

    constructor(private actions$: Actions, private postService: PostsService, private router: Router) { }
}