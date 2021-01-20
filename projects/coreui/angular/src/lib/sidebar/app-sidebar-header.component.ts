import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-sidebar-header',
  template: `
    <ng-content></ng-content>`
})
export class AppSidebarHeaderComponent {

  @HostBinding('class.sidebar-header') sidebarHeaderClass = true;

  constructor() {
  }
}
