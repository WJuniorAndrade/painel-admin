import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationControlComponent } from './register-user/view/user-registration-control.component';

export const routes: Routes = [
  {
    path: 'controle-de-cadastro',
    title: 'Controle de cadastro',
    component: UserRegistrationControlComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
