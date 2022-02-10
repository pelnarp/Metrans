import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/posts/list/list.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from 'src/store/reducers/posts-reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from 'src/store/effects/posts-effects';
import { PostEditorComponent } from './components/posts/editor/post-editor.component';
import { PostEditComponent } from './components/posts/edit/edit.component';
import { ValidationErrorComponent } from './components/validation-error/validation-error.component';
import { BaseControlValueAccessor } from './components/base-control-value-accessor/base-control-value-accessor';
import { FormsModule } from '@angular/forms';
import { PostCreateComponent } from './components/posts/create/create.component';
import { LayoutWrapperComponent } from './components/layout/layout-wrapper/layout-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PostEditorComponent,
    PostEditComponent,
    ValidationErrorComponent,
    PostCreateComponent,
    LayoutWrapperComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        postsState: postsReducer,
      },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }),
    EffectsModule.forRoot([PostsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
