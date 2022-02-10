import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCreateComponent } from './components/posts/create/create.component';
import { PostEditComponent } from './components/posts/edit/edit.component';
import { ListComponent } from './components/posts/list/list.component';

const routes: Routes = [
  {
    path: 'edit/:postId',
    component: PostEditComponent,
  },
  {
    path: 'create',
    component: PostCreateComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
