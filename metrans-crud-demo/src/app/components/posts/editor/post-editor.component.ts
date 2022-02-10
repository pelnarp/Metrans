import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlContainer, NgForm, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Post } from 'src/app/model/post';
import { BaseControlValueAccessor } from '../../base-control-value-accessor/base-control-value-accessor';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PostEditorComponent),
      multi: true,
    }],  
    viewProviders: [
      {
        provide: ControlContainer,
        useExisting: NgForm,
      }],
})
export class PostEditorComponent extends BaseControlValueAccessor<Post> {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
}