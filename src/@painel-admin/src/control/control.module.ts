import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModules } from '../../../@codes/ui/src/lib/ui-modules';
import { UserRegistrationControlComponent } from './register-user/view/user-registration-control.component';
import { ControlRoutingModule } from './control-routing.module';
import { UserRegistrationControlContainer } from './register-user/user-registration-container';





@NgModule({
  declarations: [
    UserRegistrationControlComponent,
    UserRegistrationControlContainer

  ],

  imports: [
    BrowserModule,
    CommonModule,
    ControlRoutingModule,
    UiModules,
    
  ],
  exports: [
    UserRegistrationControlComponent,
    UserRegistrationControlContainer
  ],
})
export class ControlModule { }
