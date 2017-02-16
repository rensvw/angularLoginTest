import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { IUser } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService {

    private _userUrl = 'api/users/users.json';
    users: IUser[] = [{
    'id': 1,
    'userName': 'rensvanw',
    'firstName': 'Rens',
    'lastName': 'van Woudenberg'
},
{
    'id': 2,
    'userName': 'jan',
    'firstName': 'Jan',
    'lastName': 'van Woudenberg'
},
{
    'id': 3,
    'userName': 'jord',
    'firstName': 'Jord',
    'lastName': 'van Woudenberg'
}];

    constructor(private _http: Http) {

    }

/*    getUsers(): Observable<IUser[]> {
        return this._http.get(this._userUrl)
                .map((response: Response) => <IUser[]>response.json())
                .do(data => console.log('All: ' + JSON.stringify(data)))
                .catch(this.handleError);
    }
*/
    getUsers(): IUser[] {
      return this.users;
    }

    getUserById(id: number): IUser {
    return this.users
      .filter(user => user.id === id)
      .pop();
    }

    saveUser(user): void {
      const newUser = {
        id: user.id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName
      };
      this.users.push(newUser);
    }

    editUser(user): void {

      let index = this.users.findIndex(x => x.id === user.id);
      this.users.splice(index,1,user);
    }

    deleteUser(id): IUser[] {
      let index = this.users.findIndex(x => x.id === id);
      this.users.splice(index,1);
      return this.users;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}