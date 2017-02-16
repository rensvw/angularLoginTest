import { NgModule } from '@angular/core';

import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './../profile/auth-guard.service';


@NgModule({
  imports: [RouterModule.forChild([
      { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
      { path: 'users/new', canActivate: [AuthGuard], component: CreateUserComponent },
       { path: 'users/:id', canActivate: [AuthGuard], component: EditUserComponent },
    ])],
  exports: [RouterModule],
})
export class UserRoutingModule { }
