import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPosts } from 'src/store/actions/posts-actions';
import { AppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  background: string = '#fff';

  constructor(public store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }

  setColor(color: string) {
    this.background = color;
  }
  title = 'metrans-crud-demo';
}
