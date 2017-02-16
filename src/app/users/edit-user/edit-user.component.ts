import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userForm: FormGroup;
  pageTitle: string = 'Edit User';
  user: IUser;

  constructor(private _router: Router, private _userService: UserService, private _route: ActivatedRoute) { }

  ngOnInit() {
    const _ID = +this._route.snapshot.params['id'];
    this.user = this._userService.getUserById(_ID);
    const firstName = new FormControl(this.user.firstName, Validators.required);
    const lastName = new FormControl(this.user.lastName, Validators.required);
    const id = new FormControl(this.user.id, Validators.required);
    const userName = new FormControl(this.user.userName, Validators.required);
    this.userForm = new FormGroup({
      id: id,
      userName: userName,
      firstName: firstName,
      lastName: lastName
    });

        this.pageTitle += `: ${this.user.userName}`;
  }

   saveUser(formValues){
    if (this.userForm.valid){
    this._userService.editUser(formValues);
    this._router.navigate(['users']);
    }
  }

   goBack(): void {
        this._router.navigate(['users']);
    }

}
