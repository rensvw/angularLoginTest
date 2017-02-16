import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { IUser } from './../user';

@Component({
  moduleId: module.id,
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = 'Users';
  users: IUser[];
  errorMessage: string;
  listFilter: string;

  constructor(private _userService : UserService) { }

  deleteUser(id){
    return this._userService.deleteUser(id);
  }

  ngOnInit() {
    this.users = this._userService.getUsers();
    /* this._userService.getUsers()
            .subscribe(
                products => this.users = products,
                error => this.errorMessage = <any>error); */
  }

}
