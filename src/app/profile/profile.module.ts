import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [ProfileRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule],
    exports: [],
    declarations: [LoginComponent, ProfileComponent, SignupComponent],
    providers: [],
})
export class ProfileModule { }
