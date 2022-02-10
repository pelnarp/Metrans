import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { deleteOne, loadPosts } from 'src/store/actions/posts-actions';
import { selectAll } from 'src/store/reducers/posts-reducers';
import { getPosts } from 'src/store/selectors/posts-selectors';
import { AppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  delete(post: Post) {
    this.store.dispatch(deleteOne({postId: post.id}));
  }
}
