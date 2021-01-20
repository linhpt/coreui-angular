import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../shared/layout';
// App Sidebar Component
import { AppSidebarComponent } from './app-sidebar.component';
import { AppSidebarHeaderComponent } from './app-sidebar-header.component';

import { AppSidebarService } from './app-sidebar.service';
// App SidebarNav Component
import { NavDropdownDirective, NavDropdownToggleDirective } from './app-sidebar-nav.directive';
import { AppSidebarNavComponent } from './app-sidebar-nav.component';
import { AppSidebarNavDropdownComponent } from './app-sidebar-nav/app-sidebar-nav-dropdown.component';
import { AppSidebarNavItemsComponent } from './app-sidebar-nav/app-sidebar-nav-items.component';
import { AppSidebarNavLinkComponent, AppSidebarNavLinkContentComponent } from './app-sidebar-nav/app-sidebar-nav-link.component';
import { AppSidebarNavTitleComponent } from './app-sidebar-nav/app-sidebar-nav-title.component';
import { SidebarNavHelper } from './app-sidebar-nav.service';
import { AppSidebarNavLabelComponent } from './app-sidebar-nav/app-sidebar-nav-label.component';
import { AppSidebarNavIconPipe } from './app-sidebar-nav/app-sidebar-nav-icon.pipe';
import { AppSidebarNavBadgePipe } from './app-sidebar-nav/app-sidebar-nav-badge.pipe';
import { AppSidebarNavLinkPipe } from './app-sidebar-nav/app-sidebar-nav-link.pipe';
import { AppSidebarNavItemClassPipe } from './app-sidebar-nav/app-sidebar-nav-item-class.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  exports: [
    AppSidebarHeaderComponent,
    AppSidebarComponent,
    AppSidebarNavItemsComponent,
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavLabelComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavLinkContentComponent,
    AppSidebarNavTitleComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective,
    LayoutModule
  ],
  declarations: [
    AppSidebarHeaderComponent,
    AppSidebarComponent,
    AppSidebarNavItemsComponent,
    AppSidebarNavComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavLinkContentComponent,
    AppSidebarNavTitleComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective,
    AppSidebarNavLabelComponent,
    AppSidebarNavIconPipe,
    AppSidebarNavBadgePipe,
    AppSidebarNavLinkPipe,
    AppSidebarNavItemClassPipe
  ],
  providers: [
    SidebarNavHelper,
    AppSidebarService
  ]
})
export class AppSidebarModule {
}
