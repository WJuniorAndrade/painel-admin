import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModules } from '../../../@codes/ui/src/lib/ui-modules';
import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { MenuAdminComponent } from './menu/menu-admin.component';
import { HomeAdminComponent } from './home/home-admin.component';


@NgModule({
  declarations: [
    MenuAdminComponent,
    HomeAdminComponent

  ],

  imports: [
    BrowserModule,
    CommonModule,
    LayoutAdminRoutingModule,
    UiModules,
    
  ],
  exports: [
    MenuAdminComponent,
    HomeAdminComponent
  ],
})
export class LayoutAdminModule { }
