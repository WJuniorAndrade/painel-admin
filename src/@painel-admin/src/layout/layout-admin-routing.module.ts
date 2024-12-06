import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationControlComponent } from '../../../@painel-admin/src/control/register-user/view/user-registration-control.component';
import { HomeAdminComponent } from '../../../@painel-admin/src/layout/home/home-admin.component';

export const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { }
