import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-wrapper',
  templateUrl: './layout-wrapper.component.html',
  styleUrls: ['./layout-wrapper.component.scss']
})
export class LayoutWrapperComponent implements OnInit {

  @Input() background: string = '#f00';

  constructor() { }

  ngOnInit(): void {
  }

}
