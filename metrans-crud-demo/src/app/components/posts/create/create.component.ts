import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post';
import { create } from 'src/store/actions/posts-actions';
import { AppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class PostCreateComponent {

  post: Post = new Post();

  constructor(public store: Store<AppState>) { }

  save() {
    this.store.dispatch(create({ post: this.post }));
  }
}
