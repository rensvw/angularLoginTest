import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  imports: [RouterModule.forChild([
      { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
      { path: 'profile/login', component: LoginComponent },
    ])],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ProfileRoutingModule { }
