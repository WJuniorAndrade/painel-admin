import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UiModules } from '../@codes/ui/src/lib/ui-modules';
import { LayoutModule } from '../@codes/layout/src/layout.module';
import { LayoutRoutingModule } from '../@codes/layout/src/layout-routing.module';
import { ControlModule } from '../@painel-admin/src/control/control.module';
import { ControlRoutingModule } from '../@painel-admin/src/control/control-routing.module';
import { LayoutAdminModule } from '../@painel-admin/src/layout/layout-admin.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,

    LayoutModule,
    LayoutRoutingModule,

    ControlModule,
    ControlRoutingModule,

    LayoutAdminModule,


    UiModules,

    HttpClientModule
  ],
  
  providers: [
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
