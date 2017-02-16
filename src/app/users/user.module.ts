import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';


import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserFilterPipe } from './user-filter.pipe';


@NgModule({
    imports: [
        UserRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule],
    exports: [
        ],
    declarations: [UserListComponent, CreateUserComponent, UserDetailComponent, EditUserComponent, UserFilterPipe],
    providers: [UserService],
})
export class UserModule { }
