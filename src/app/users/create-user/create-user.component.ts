import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from './../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup;
  pageTitle: string = 'Create User';

  constructor(private _router: Router, private _userService: UserService) { }

  ngOnInit() {
    let firstName = new FormControl('',Validators.required);
    let lastName = new FormControl('',Validators.required);
    let id = new FormControl('',Validators.required);
    let userName = new FormControl('',Validators.required);
    this.userForm = new FormGroup({
      id: id,
      userName: userName,
      firstName: firstName,
      lastName: lastName
    });
  }

   saveUser(formValues){
    if(this.userForm.valid){
    this._userService.saveUser(formValues);
    this._router.navigate(['users']);
    }
  }

   goBack(): void {
        this._router.navigate(['users']);
    }

}
