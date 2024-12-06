import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationControlComponent } from '../@painel-admin/src/control/register-user/view/user-registration-control.component';

export const routes: Routes = [
  // {
  //   path: 'painel',
  //   title: 'painel',
  //   component: UserRegistrationControlComponent
  // } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
