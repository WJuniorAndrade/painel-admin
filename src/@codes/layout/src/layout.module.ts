import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/view/header.component';
import { FooterComponent } from './footer/view/footer.component';
import { UiModules } from '../../ui/src/lib/ui-modules';




@NgModule({
  declarations: [
    HeaderComponent,
    
    FooterComponent,

  ],

  imports: [
    BrowserModule,
    CommonModule,
    LayoutRoutingModule,
    UiModules,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class LayoutModule { }
