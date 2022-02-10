import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { update } from 'src/store/actions/posts-actions';
import { getPostsById } from 'src/store/selectors/posts-selectors';
import { AppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-post-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class PostEditComponent implements OnInit {

  post: Post;

  constructor(public store: Store<AppState>, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('postId');
      if (postId) {
        this.store.select(getPostsById(postId)).subscribe((post) => {
          let postCopy = new Post();
          Object.assign(postCopy, post)
          this.post = postCopy;
        })
      }
    });

  }

  save() {
    this.store.dispatch(update({ post: this.post }));
  }
}
